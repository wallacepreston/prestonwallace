---
title: "From Long Documents to Defensible Procurement Decisions"
description: Lessons from David Sojka on AI procurement workflows, document review, authenticated portals, data security, and human approval.
publishedAt: 2026-10-19
image: /images/blog/ai-procurement-workflows-david-sojka.png
imageAlt: A five-step AI procurement workflow from opportunity discovery through human approval.
status: draft
---

Procurement teams work through long documents, scattered portals, firm deadlines, and requirements that must be traced back to the source. AI can reduce the reading and drafting load when the workflow preserves that traceability.

I recently spoke with [David Sojka](https://www.linkedin.com/in/davidsojka/), Director of Procurement and Contracts at [SkillOps](https://www.linkedin.com/company/trainwithskillops/home/), about how he uses AI in procurement and where he wants the workflow to go next.

David uses AI to review procurement packages that may span several documents and 40 to 60 pages. He is also exploring agents that could monitor authenticated procurement portals for relevant opportunities.

Here are the ideas that stayed with me.

## Document summarization is a useful starting point

David described AI as indispensable in his current role. SkillOps has a small team, and a single request for quote can include many pages of legal language, submission rules, training requirements, and deadlines.

His current workflow starts by giving the documents to Claude or another AI tool and asking for the important details. He then reviews the condensed output against the original package.

This is a strong early use case for AI in procurement because the task has a clear boundary. The system is helping someone inspect a known set of documents. The source material remains available for verification.

A useful extraction should identify details such as:

- Buyer and agency
- Scope of work
- Eligibility requirements
- Required forms and attachments
- Questions and submission deadlines
- Evaluation criteria
- Contract terms that need closer review

The result should include page or section references. That gives the reviewer a direct path back to each requirement.

## Source grounding protects the proposal

A polished summary can hide an omission. Procurement workflows need visible evidence for every important field.

The system should store the source document, extracted passage, page number, and normalized requirement together. If the model identifies a due date, the reviewer should be able to open the exact section that contains it.

Confidence labels can help route attention. A clearly stated deadline may need a quick confirmation. An ambiguous insurance clause may need legal review. Missing attachments should create an explicit exception.

The review path could look like this:

<figure class="mermaid-frame">
  <img class="article-diagram" src="/images/blog/ai-procurement-workflows-david-sojka.png" alt="A five-step AI procurement workflow from portal monitoring to human approval." />
</figure>

Each step should keep the opportunity ID and source references attached. That lineage makes the workflow easier to inspect and test.

## Opportunity discovery is the harder retrieval problem

David wants an agent that checks procurement portals regularly and surfaces opportunities that match SkillOps services.

Portal alerts often miss relevant listings. Search tools can be dated. Information may sit across SAM.gov and several vendor systems, including Oracle-based portals behind authenticated sessions.

This shifts the engineering problem from document analysis to reliable retrieval. The agent needs to:

1. Authenticate through an approved method.
2. Query supported APIs when they exist.
3. Normalize records from different portal schemas.
4. Match opportunities against SkillOps capabilities.
5. Record why each opportunity matched.
6. Notify the procurement owner with source links and deadlines.

A browser agent may help when a portal offers no usable API. It needs careful session handling, narrow permissions, failure detection, and logs that show what the agent observed.

## Authenticated systems need controlled tools

David raised a practical concern about sensitive company information. SkillOps has a protected company Claude environment, while some of the agent features he wants are available elsewhere.

An MCP server or another controlled integration can give an agent a limited set of procurement tools. A tool might search opportunities, fetch one listing, or download a document. Its permissions can exclude proposal submission, record deletion, and account changes.

That boundary matters. An opportunity-monitoring agent needs read access and a notification channel. Proposal submission should remain behind a human approval step.

The integration should also record:

- Which account and tool accessed the portal
- Which query was used
- Which records were returned
- Which documents were sent to a model
- Which fields were removed or masked
- Which person approved the next action

These logs support troubleshooting, security review, and evaluation.

## AI policy and training are part of the system

SkillOps recently introduced AI skill development training. David said he has been surprised by how many companies lack an AI policy, approved models, and rules for protected information.

The workflow design should make those policies concrete. Teams need to know which tools are approved, what data may enter them, how outputs are checked, and when a person must make the decision.

Training should use the team's real tasks. A procurement exercise could ask someone to extract requirements from a sample request, verify the citations, identify missing information, and document the final review. That practice builds judgment around the tool.

## Start with one narrow procurement workflow

The most practical first version is a small pipeline with a measurable result:

1. Monitor one portal or saved search.
2. Collect listings from one category.
3. Score them against a short capability profile.
4. Send a daily review list with links and match reasons.
5. Track useful matches, missed opportunities, and false positives.

Once retrieval is dependable, the system can fetch attachments and prepare a requirement matrix. Drafting can follow after the source-grounding and approval steps are working well.

My biggest takeaway from David was that procurement AI depends on trustworthy access to the underlying records. Summaries create immediate value. Reliable retrieval, citations, controlled tools, and human approval turn that value into a repeatable workflow.
