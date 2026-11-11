---
title: "Practical Lessons for Building AI Automation That Works"
description: "Lessons on choosing AI and deterministic tools, controlling workflow costs, and connecting automation to a business outcome."
publishedAt: 2026-10-30
image: /images/blog/practical-ai-automation-todd-kundrat.png
imageAlt: "Portrait of automation consultant Todd Kundrat."
status: published
---

An automation can work technically and still miss the outcome a business needs. The system might generate leads without improving follow-up, or process data with an AI workflow that costs too much to run at scale.

I recently spoke with [Todd Kundrat](https://www.linkedin.com/in/todd-kundrat/), founder of [Automate the Routine](https://automatetheroutine.com/), about those practical tradeoffs. Todd works in industrial automation and has experience as a builder. He brought a useful perspective on matching automation to the work a customer actually needs done.

Our conversation gave me several lessons I want to carry into future AI projects.

## Start with the outcome beyond the automation

Todd said that when a business asks for more leads, he wants to know what it does with those leads and how often it closes them. If the business does not follow up effectively, generating more contacts may not produce the sales it expects.

That question changes the discovery process. Before building a prospecting workflow, I want to understand where leads come from, who follows up, and how the business measures a qualified opportunity. Those answers help define what the automation can deliver and where another part of the sales process takes over.

Todd offers a [free Lead Flow Audit](https://automatetheroutine.com/tools/lead-flow-audit/) for businesses that want to examine how they respond to and follow up with leads. The audit provides a score and highlights areas to improve, giving that discovery process a practical starting point.

The same principle applies elsewhere. A document workflow might extract a date correctly, but the useful outcome depends on what happens to that date next. Understanding the handoff helps define a project that solves a real problem.

## Find structure before adding more agents

Todd described work on a security staffing platform in development. The project involves accounting for security licenses across states, where requirements and verification processes differ.

He used agents to identify similarities and group licensing cases before processing the groups with an LLM. His goal was to manage the amount of agent work needed. He did not describe a completed verification system or a measured cost reduction.

That example reminded me to look for common patterns before designing a separate AI path for every case. A group can share part of a workflow while retaining the details that make each case different. The licensing source and requirements still need to be checked for each situation.

<pre class="mermaid">
flowchart LR
    A[Licensing cases] --> B[Identify similarities]
    B --> C[Group related cases]
    C --> D[LLM processing]
    D --> E[Review against sources]
</pre>

The review step is my suggested safeguard, not a claim about the platform's current implementation. Grouping cases alone does not verify a credential.

## Use predictable code for predictable work

Todd and I discussed how to decide when to use an agent and when to use a deterministic workflow. My starting point is the shape of the task.

For example, if a field consistently appears in a known location, code can extract it using a defined rule. If the location varies, the information is missing, or the meaning needs interpretation, an LLM may be useful. A workflow can combine both: parse and organize the material first, then use a model on the parts that need interpretation.

I ran into this tradeoff while building [university contact discovery](/portfolio/llm-contact-discovery/). The workflow crawls university websites with deterministic code and uses AI for selected review and enrichment. It handles prospect research, while Todd's project concerns licensing, but both require care about where model calls belong.

## Measure the cost of the whole workflow

Todd described trying AI approaches that looked promising until he saw the cost after several runs. I have encountered the same issue in contact discovery and other applications: an agent that visits and interprets every page can become expensive as the number of pages grows.

The lesson I took from that exchange is to test the economics early. A small trial can show how many model calls a case requires and which steps consume the most resources. From there, I can look for work that can be grouped, handled by a rule, or reserved for a more targeted model call.

The right cost depends on the value of the outcome. An expensive step may be worthwhile for a high-value exception; repeated across a large batch, that same step may make the workflow impractical.

## Design for the people doing the work

Todd is interested in helping contractors because he has worked as a builder and understands their environment. He also recognizes that explaining technical work to someone in the field takes care.

That is a useful reminder for me to describe a system in terms of the work it supports. What happens when a new lead arrives? Who needs to act? What information will they need? Those questions make the design easier to discuss and evaluate with the people who will use it.

My takeaway from the conversation is to follow the work from input to outcome. Understand the handoff, find the structure in the problem, choose the right processing method for each step, and test the cost before scaling. That ensures the AI automation will be useful to the business it serves.
