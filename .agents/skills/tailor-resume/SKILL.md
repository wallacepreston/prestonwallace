---
name: tailor-resume
description: Tailor Preston Wallace's resume to a specific role using the personal site's resume template.
---

Read `prestonwallace/content/resumes/README.md` and `prestonwallace/content/resumes/preston-wallace-ai-engineer.md`. Create a role-specific Markdown copy in the same directory, keeping the required frontmatter and resume structure. Tailor the emphasis to the supplied role using supported experience; do not invent facts or metrics. Keep the original unchanged unless the user explicitly asks to update the homepage resume. Review uncertain employment dates and metrics before external use.

Search `prestonwallace/` for role-relevant experience and project evidence, including `src/data/portfolioItems.ts` and `src/data/mntnProjects.ts`. Do not mention "prototype" in resumes. Avoid implying deployment or production status without evidence, and distinguish contributions by others; verify dates and metrics before reuse.

Preserve relevant skills and experience from the base resume, including the full AI / LLM skills line when relevant. Tailor by reordering, condensing, and adding supported detail; prioritize the most relevant evidence when space is limited. Use the available page space: if the print layout has substantial blank space, restore relevant base content or add evidence-backed, role-relevant bullets. Do not remove useful detail solely to achieve one page; shorten wording, then use remaining space for substantive evidence. Compare the tailored version against the base resume before finishing and restore material omissions where space permits. Respect explicit exclusions, including n8n and Terraform.

Build and visually inspect the actual print preview at Letter size and 100% scale, with browser headers and footers disabled. Every tailored resume must fit on exactly one page, and every bullet must fit on a single printed line. Shorten content as needed and repeat the visual check after each revision, including the bottom of the page. Aim for at most 95 visible characters per bullet as a drafting guide; verify actual rendered lines because proportional fonts and bold text make character counts imprecise. If browser preview is unavailable, render the local page to PDF using Chrome's print settings and visually inspect every rendered page, checking the PDF page count and Letter dimensions. Do not call the resume complete if the print output cannot be inspected; report the blocker. Additional resume files are ignored by Git and only included in a deployed build if supplied separately. Resume pages are public when deployed even though they are noindex; do not deploy or submit without authorization.

Complete the resume, and when my qualifications don't meet all the requirements/keywords for the position, list out for me in chat conversation the gaps in my experience.

When the user provides a referral contact's name, link, or profile, include a copy-and-paste message in the chat for each contact, using their name, the job title, and the full job URL as separate text. Write the URL visibly in full; never use the job title as hyperlink text or hide the URL behind alternate text. Use the appropriate template below. If both a non-recruiter connection and a recruiter are supplied, provide both messages. Do not infer that a contact is a recruiter or that a referral was submitted from a profile alone. If application submission is unconfirmed, label the message for use after applying rather than claiming the application was submitted. Draft only; do not send messages.

For a non-recruiter connection:

Hi [connection name]! I just applied to [job name] [job URL] would you be willing to refer me?

For a recruiter:

Hi [connection name]! I just applied to [job name] [job URL] are you available for a quick chat about the role? https://cal.com/prestonwallace/15-min-phone If you're not the recruiter for the role, do you know who is?

For each tailored resume, add its local URL to the matching row in `ai-engineer-job-search/data/applications.csv` under `resume_url`. Use `http://localhost:4321/resume/<markdown-filename-without-extension>/`. Record the user's closest relevant connection in `referral_connection` with their name and profile link; include every person the user mentions, each with their link when available. Do not infer a completed referral from this field. Preserve existing contacts, other rows, and application status, and avoid duplicate applications. If no matching application exists, create a record without assuming it was submitted. Include the same clickable local URL in the final chat response.
