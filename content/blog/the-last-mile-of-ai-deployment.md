---
title: "The Last Mile of AI Deployment: When 95% Isn't Enough"
description: How to handle hallucinations, conflicting evidence, human review, and evaluation when moving AI applications into production.
publishedAt: 2026-11-23
image: /images/blog/the-last-mile-of-ai-deployment.png
imageAlt: AI deployment workflow from evidence and evaluation to decisions, review, and feedback.
status: draft
---

An AI feature can look ready in a demo and still fail the people who depend on it. It answers common questions, handles clean documents, and produces convincing results. Then it encounters a faculty page that is out of date, two sources that disagree, or a request where the evidence is missing.

The last mile is the work of deciding what should happen in those cases and building the system to behave accordingly. If a system is right 95% of the time, the remaining 5% still matters. At 10,000 requests, that hypothetical error rate means 500 problematic outcomes. The severity matters too: a wrong restaurant recommendation and an incorrect access decision deserve different controls.

I ran into this challenge building an [AI instructor-validation workflow](/portfolio/ai-instructor-validation/). A team needed to verify instructors against university information before granting access. The AI could help find and interpret evidence, but an answer alone could not be the whole decision. The application needed an explicit path for uncertainty, a way to inspect decisions, and a clear outcome for the applicant.

## Ground decisions in evidence and route uncertainty

The workflow collected an instructor's name, institution, department, and academic email. It searched official university sources and used AI to assess how well the information aligned. The result included structured confidence and reasoning, which the application used in its decision flow.

Strong matches could be approved automatically. Ambiguous matches were routed for human approval, and requests missing required university or department evidence could be denied with a route to manual review. The application recorded status changes and supported internal review and overrides.

That design addressed a practical problem: university pages do not always present people and departments in a consistent way. A missing or conflicting result can require a different response from a strong match. In an access workflow, the system needs to make that distinction visible.

The project reduced validation time by 85% and removed approximately 5,000 hours of manual work per year. Those are workflow outcomes, not a measured hallucination or accuracy rate. A model's confidence also needs calibration against labeled cases before it can be treated as a reliable probability.

## Test the cases the demo misses

For a system like this, I would build an evaluation set around the decisions and evidence that make the workflow difficult:

- A faculty page identifies the person, but the department differs from the application.
- A name appears at two universities, with only one matching the email domain.
- An official source is unavailable or no current listing can be found.
- The source is real, but it does not support the conclusion the model proposes.
- A search result contains instructions that try to change the assistant's behavior.

Each case needs an expected outcome and a reason. A reviewer should be able to tell whether the system found the right evidence, represented it accurately, and chose the appropriate approval, denial, or review path. A valid JSON response is useful for integration; it does not establish that the claim inside it is true.

I would track false approvals, false denials, and review rates separately, then inspect cases by failure type. A single accuracy score can hide an unsafe failure mode. The acceptable tradeoff depends on the impact of each mistake and the team's capacity to review uncertain requests. [OpenAI's evaluation guidance](https://platform.openai.com/docs/guides/evaluation-best-practices) recommends task-specific tests, representative data, and continuous evaluation.

## Retrieval problems become harder as data grows

The same discipline applies to retrieval-augmented generation. Consider an assistant answering questions across hundreds of thousands of records. One document says a policy applies; a later revision narrows it. Both are relevant to the search, but returning the older passage as the answer could mislead the user.

Before trusting an answer, I would separate several questions: Did retrieval find the relevant source? Was the source current and authorized for this user? Did the answer accurately reflect the evidence? When sources conflict, can the system surface that conflict or ask for review?

A practical test set would include known-answer questions, missing answers, outdated versions, conflicting records, and permission boundaries. Measure retrieval quality and answer quality separately, then compare latency and cost as the corpus grows. That is a proposed evaluation approach, not a claim that I have already run a million-record benchmark.

Citations help a person inspect an answer, but a citation alone does not prove the cited passage supports it. The evaluation needs to check that relationship. For sensitive workflows, access checks belong in the retrieval and application layers, not solely in the model's instructions.

## Build a feedback loop for production

A release is the start of learning from real use. With appropriate data handling, I would record the evidence used, decision path, model and prompt versions, latency, and review outcome. Sample ordinary cases and review higher-risk failures, then add confirmed issues to a versioned regression set.

<div class="mermaid-frame">
  <pre class="mermaid">
flowchart LR
  A[Request] --> B[Find evidence]
  B --> C[Evaluate decision]
  C --> D{Enough evidence?}
  D -->|Yes| E[Apply policy]
  D -->|Unclear| F[Human review]
  E --> G[Record outcome]
  F --> G
  G --> H[Add failures to evals]
  H --> C
  </pre>
</div>

The exact controls depend on the workflow. A low-risk assistant might show its sources and invite correction. An access decision or action affecting customers may need stronger authorization, review, and audit trails. In either case, the goal is to know what failed, limit the impact, and keep the same failure from quietly returning.

The hardest part of shipping AI is making the entire workflow dependable when the model, data, or external systems do something unexpected. That means designing the decision, measuring the edge cases, and giving people a safe way to resolve uncertainty.
