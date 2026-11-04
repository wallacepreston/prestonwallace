---
name: tailor-resume
description: Tailor Preston Wallace's resume to a specific role using the personal site's resume template.
---

Read `prestonwallace/content/resumes/README.md` and `prestonwallace/content/resumes/preston-wallace-software-engineer.md`. Create a role-specific Markdown copy in the same directory, keeping the required frontmatter and resume structure. Tailor the emphasis to the supplied role using supported experience; do not invent facts or metrics. Keep the original unchanged unless the user explicitly asks to update the homepage resume. Review uncertain employment dates and metrics before external use.

Search `prestonwallace/` for role-relevant experience and project evidence, including `src/data/portfolioItems.ts` and `src/data/mntnProjects.ts`. Do not mention "prototype" in resumes. Avoid implying deployment or production status without evidence, and distinguish contributions by others; verify dates and metrics before reuse.

Preserve relevant skills and experience from the base resume, including the full AI / LLM skills line when relevant. Tailor by reordering and adding supported detail; do not remove relevant information merely to save space. Compare the tailored version against the base resume before finishing and restore relevant omissions. Respect explicit exclusions, including n8n and Terraform.

Build and check print preview at Letter size and 100% scale, with browser headers and footers disabled. Additional resume files are ignored by Git and only included in a deployed build if supplied separately. Resume pages are public when deployed even though they are noindex; do not deploy or submit without authorization.

Complete the resume, and when my qualifications don't meet all the requirements/keywords for the position, list out for me in chat conversation the gaps in my experience.
