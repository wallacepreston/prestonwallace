---
name: write-cover-letter
description: Write Preston Wallace's tailored, printable cover letters for job applications using the personal site's letter layout.
---

Read `prestonwallace/content/resumes/preston-wallace-software-engineer.md` and `prestonwallace/content/resumes/stryker-preston-wallace-cover-letter.md`. Use the resume and relevant project evidence to tailor the letter without inventing experience, metrics, or personal connections.

Create a Markdown file in `prestonwallace/content/resumes/` with title and description frontmatter and `layout: letter`. Follow the Stryker letter's formal structure: contact block, current date, recipient block, salutation, substantive role-specific paragraphs, and signature. Adapt length and tone to the user's request. Do not use the resume layout for letters.

Build the site and check the letter's print layout at Letter size, 100% scale, with browser headers and footers disabled. Provide the local URL `http://localhost:4321/resume/<markdown-filename-without-extension>/` and the Markdown file. Additional files are ignored by Git and are public if deployed. Do not deploy or submit without authorization.
