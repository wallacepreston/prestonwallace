---
title: "AI Evals: The Basics"
description: A concise guide to using AI evals in CI, sampled production traffic, and high-security systems.
publishedAt: 2026-08-17
image: /images/blog/ai-evals-the-basics.png
imageAlt: Agent response, golden dataset, evals, and system improvements arranged in a continuous AI evaluation loop.
---

AI evals are tests for AI systems. They measure whether an LLM’s output is correct, useful, safe, and consistent enough for a specific task.

AI outputs are probabilistic, so an eval often scores a response against criteria instead. Graders include deterministic rules, model-based judges for subjective quality, and human review for calibration.

Useful evals measure product behavior, not intelligence in the abstract. A support assistant might be graded on factual accuracy, relevance, groundedness, tone, tool use, latency, and cost.

## The golden dataset

A golden dataset is a curated collection of representative inputs and expected behavior. Each case contains an input, a reference answer or rubric, and the quality dimensions that matter.

Start with sanitized examples, known failures, edge cases, and adversarial inputs. Twenty to fifty strong examples can provide meaningful coverage. Version the dataset with the code and add cases when production reveals a new failure.

## Before deployment: evals in CI

Every prompt, model, retrieval, or agent change should run against the golden dataset in CI. Fast deterministic checks run first. Slower model judges then score dimensions such as correctness or groundedness. The build passes only when results remain above versioned quality thresholds and within latency and cost budgets.

<div class="mermaid-frame">
  <pre class="mermaid">
flowchart LR
  A[Code or prompt change] --> B[Run eval dataset]
  B --> C[Score quality, safety, cost]
  C --> D{Thresholds pass?}
  D -->|Yes| E[Deploy]
  D -->|No| F[Block and investigate]
  </pre>
</div>

This catches known regressions before users see them. It can reveal that a prompt improved one workflow while quietly making another worse.

## Online evaluation: live production traffic

Offline evals only cover scenarios you already know. Online evaluation scores live traces to detect unfamiliar inputs, quality drift, changing user behavior, knowledge base problems, and inefficient agent paths.

Most systems randomly sample a small percentage of requests. Sensitive data is protected, then inputs, outputs, tool calls, latency, and cost are scored asynchronously. Alerts fire when metrics cross a threshold. Human review checks whether automated judges still agree with experts.

For high-security workflows, such as regulated decisions or access to sensitive systems, every request may be evaluated before the response is released. A failed safety or compliance check can block the output or send it to a human. This adds cost and latency, so it is reserved for cases where the risk justifies it.

<div class="mermaid-frame">
  <pre class="mermaid">
flowchart TD
  A[Live AI request] --> B{Risk level}
  B -->|Normal| C[Serve response]
  C --> D[Random sample]
  D --> E[Async eval and monitoring]
  B -->|High security| F[Evaluate every request]
  F --> G{Safe and compliant?}
  G -->|Yes| H[Allow response]
  G -->|No| I[Block or escalate]
  </pre>
</div>

## Close the loop

The best eval system improves itself. Online evaluation discovers a failure. Engineers sanitize and add that case to the golden dataset, fix the system, and let CI prevent the regression from returning.

Offline evaluation protects against known problems. Online evaluation finds unknown ones. Together they turn AI quality from occasional manual testing into a continuous engineering feedback loop.

[Further reading on production AI evaluation loops](https://www.softwareseni.com/how-ai-evaluation-loops-work-and-why-they-matter-for-production-reliability/).
