---
title: "A Practical Eval Stack for AI Agents"
description: A concise guide to deterministic checks, trajectory matching, AgentEvals, LLM judges, CI gates, and production feedback for AI agents.
publishedAt: 2026-12-14
image: /images/blog/practical-eval-stack-for-ai-agents.png
imageAlt: A four-layer AI agent evaluation stack covering deterministic checks, trajectory matching, LLM judges, and human calibration.
status: draft
---

I often get asked what agent evals to start with. Should we implement tests for tool calls?  Should we use LLM as a judge?  There are concerns around latency and cost, and the risk of introducing unreliable signals if the evaluation is not carefully designed.

The place to start: build the smallest eval stack that catches the failures your product can actually have.

## Start with failure modes

Write down five to ten ways the agent could fail. For a tool-using agent, that list might include:

- Calling the wrong tool
- Passing invalid or unsafe arguments
- Skipping a required step
- Returning an invalid response shape
- Giving an incoherent or unsupported answer
- Exceeding a latency or token budget

Turn each failure into a test. The [OpenAI evals guide](https://developers.openai.com/api/docs/guides/evals) recommends task-specific evals built from representative and production data.

## Put fast deterministic checks in CI

Run cheap, repeatable checks on every pull request. Validate schemas, allowed tools, required arguments, call counts, forbidden actions, citations, latency, and token usage.

These checks produce a clear failure reason and keep CI fast. OpenAI’s [graders documentation](https://developers.openai.com/api/docs/guides/graders) includes string checks and text-similarity graders alongside model-based graders.

My [AI Instructor Validation project](/portfolio/ai-instructor-validation/) gives a concrete example of behaviors worth testing. It checks official faculty sources, returns structured evidence, and routes uncertain requests for human approval. An eval case could check whether missing evidence takes the correct path and whether the applicant gets a clear next step. Those are observable outcomes you can build a test around.

## Add trajectory matching for tool use

A final answer can look correct even when the agent took a risky path. Trajectory evals inspect the intermediate messages and tool calls that produced it.

[AgentEvals](https://github.com/langchain-ai/agentevals) supports several trajectory match modes:

- `strict` for the same calls in the same order
- `unordered` when order does not matter
- `subset` when extra calls are acceptable
- `superset` when the reference contains optional calls

For a single-turn agent, capture one complete run from user input through tool calls to final response. Choose the least restrictive mode that still represents correct behavior. Match critical arguments exactly, and use subset matching when generated calls may contain harmless extra fields.

[AgentEvals](https://github.com/langchain-ai/agentevals) includes integrations for pytest, Vitest, and Jest. LangSmith’s [pytest integration](https://docs.langchain.com/langsmith/pytest) can record experiment results from test runs, which makes it practical for CI gates.

## Use an LLM judge for narrow questions

An LLM judge helps with qualities that rules struggle to express, such as coherence, groundedness, completeness, and tone. Give it one narrow rubric, require a short reason, and return a structured score.

Model graders add latency, cost, and their own variance. Run them on the cases where semantic judgment adds useful signal. A common setup is a small judge sample in CI and a larger suite nightly.

Calibrate the judge against human-labeled examples before trusting its threshold. Anthropic’s [evaluation guidance](https://docs.anthropic.com/en/docs/test-and-evaluate/develop-tests) recommends detailed rubrics and testing LLM graders for reliability.

## Route each check to the right cadence

<div class="mermaid-frame">
  <pre class="mermaid">
flowchart TD
  A[Pull request] --> B[Deterministic checks]
  B --> C[Critical trajectory cases]
  C --> D{Threshold met?}
  D -->|Yes| E[Merge]
  D -->|No| F[Inspect trace]
  E --> G[Nightly judge suite]
  G --> H[Review score drift]
  </pre>
</div>

Keep the PR gate small enough that engineers will run it often. Move slower model-judge suites and repeated trials to scheduled jobs. Version cases, rubrics, and thresholds with the code. Track pass rate, latency, token usage, and failure category across versions.

## How many repetitions should run in CI?

Use one run for deterministic checks. For stochastic agent behavior, start with three repetitions for each critical case in CI. This catches obvious instability without making every pull request too slow or expensive.

Run five to ten repetitions in a nightly or pre-release suite when you need a better estimate of reliability. If CI becomes slow, repeat the highest-risk and historically flaky cases while running the broader dataset once.

Set an explicit threshold for each eval. Deterministic checks usually target 100% passing. Stochastic quality checks can use an aggregate threshold, such as a minimum pass rate, while safety, authorization, and irreversible actions may warrant a release-blocking threshold for any failure. There is no universal repetition count, so increase it when observed variance could change a release decision. OpenAI notes that model behavior is [inherently nondeterministic](https://developers.openai.com/api/docs/guides/latest-model?model=gpt-4.1), and LangSmith supports repeated experiments through [`num_repetitions`](https://docs.langchain.com/langsmith/experiment-configuration).

## Feed production failures back into CI

Offline cases cover known risks. Production traces reveal new inputs, tool behavior, and failure patterns. Sample and sanitize those traces, review the useful failures, then add them as regression cases.

<div class="mermaid-frame">
  <pre class="mermaid">
flowchart LR
  A[Production trace] --> B[Sanitize and review]
  B --> C[Add regression case]
  C --> D[Run in CI]
  D --> E[Ship improvement]
  E --> A
  </pre>
</div>

## A useful first version

I would start with 20 to 30 representative cases:

1. Run deterministic checks on every case.
2. Add trajectory matching to the highest-risk tool workflows.
3. Add one LLM judge for a clearly defined quality, such as coherence.
4. Run fast checks in CI and the broader suite nightly.
5. Add every confirmed production failure to the dataset.

That is enough to catch real regressions, learn where the agent is fragile, and improve the suite with evidence.
