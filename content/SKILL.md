---
name: blog-post-writer
description: Write or revise concise AI engineering posts for the Preston Wallace Astro blog, including frontmatter, source-grounded copy, Mermaid visuals, and social-preview images.
---

# Blog Post Writer

## Model and reasoning effort

When using this skill, use GPT-6.1 Sol with Medium effort.

Create publish-ready posts in `content/blog/` that sound like a working engineer explaining something clearly.

## Voice

Write like a real person talking from experience, not generic AI copy. Use simple words, concrete examples, and direct sentences. Fragments are fine when they improve rhythm.

Skip throat-clearing introductions, canned transitions, tidy summaries, inflated claims, and corporate filler. Do not invent personal experience, benchmarks, results, or credentials. Read the draft aloud in your head. Rewrite anything that sounds like a textbook or sales page.

Never use em dashes. Avoid antithesis, binary contrasts, and paired-opposite phrasing.

## Article shape

Use the requested scope and length. When no length is given, use `content/blog/ai-evals-the-basics.md` as the detail benchmark.

Start with the practical problem. Explain the mechanism, the engineering choices, and how to test the result. Use descriptive H2 headings for scanability and deep links. Keep paragraphs short. Add a source link when the user provides one.

Frontmatter must include:

```yaml
title: "Post title"
description: A concise SEO description.
publishedAt: YYYY-MM-DD
image: /images/blog/post-slug.png
imageAlt: A concrete description of the visual.
```

Use a lowercase, hyphenated filename that matches the intended URL slug. Include AI engineering search terms naturally in the title, description, headings, and body.

### Interview-derived articles

Build the article around the interviewee's perspective, useful company practices, and consequential ideas supported by the conversation. Briefly introduce and link the interviewee, then organize sections around lessons others can apply. Each lesson should connect a specific observation, practice, or ambition from the interview to its significance and transferable application. Select the strongest material instead of retelling the conversation in order.

Omit routine AI-use anecdotes such as "David described AI as indispensable in his current role" or "His current workflow starts by giving the documents to Claude or another AI tool." Uploading documents, requesting summaries, and using a chatbot are common activities whose mention alone adds little value. Include a personal workflow only when a specific technique, unusual result, or meaningful constraint supports a useful lesson. Explain that lesson and how the reader can apply it.

Keep the interviewee's insights central. A request for advice or industry relevance means drawing useful lessons from their experience; it does not authorize replacing their perspective with Preston's implementation plan or outside research. Keep editorial interpretation brief and grounded in the interview. Attribute advice to the interviewee only when they actually gave it, and identify any added recommendations as Preston's.

Present the interviewee's supported expertise and operational judgment clearly. Frame exploration through the business goal, established practices, and criteria they bring to it. Attribute external system limitations to those systems. Avoid portraying questions, unfinished projects, or growth initiatives as personal or company weakness. Preserve material limitations and project status without inventing achievements or overstating expertise.

Verify broader industry claims with primary sources and link them near the claim. Use outside context only when it helps explain an interview insight. Identify deployed applications, pilots, and ambitions accurately. Close with a takeaway or action grounded in the interview. Do not invent novelty, results, or industry adoption to strengthen the article.

### Related portfolio work

Review the projects in `src/data/portfolioItems.ts` and their case study or demo pages for a close connection to the article's ideas. For interview posts, also check the conversation record for projects Preston actually mentioned. Prefer a mentioned project when it fits the article naturally. Choose by the shared problem or workflow, and skip the addition when the connection would feel forced.

Add one short paragraph beside the relevant idea, linking to the project's `/portfolio/<slug>/` case study or an existing demo page. Explain the specific connection in plain language. Keep the interviewee's perspective central and project claims grounded in the portfolio source. Identify differences in domain or capabilities when needed to avoid implying the project performs the interviewee's proposed workflow. Do not imply the interviewee used, endorsed, or commissioned the project without source evidence.

When the chosen project has a relevant screenshot or diagram, reuse it near the paragraph to break up the text. Use the existing asset path or Mermaid source, add descriptive alt text or a caption that identifies the project, and link the visual to its case study when appropriate. Keep the article's cover image and other useful visuals. Skip unrelated visuals.

## Visuals

When the user supplies an image or visual direction, follow it. Otherwise create a simple Mermaid diagram that explains the article's main flow. Save the Mermaid source beside the post as `content/blog/<slug>.mmd`.

### Conversation summaries

For a post drawn from an interview or coffee chat, write a title that fits the specific idea and varies from other interview posts. Do not reuse one title pattern across the series.

Use a portrait of the interviewee as the cover image when one is available. Prefer their LinkedIn profile image or an image on their personal or company website. Confirm it depicts the interviewee, save it as the required 1200 by 630 PNG, and use concrete portrait-focused image alt text. Keep a Mermaid diagram in the article when helpful.

Export a 1200 by 630 PNG to `public/images/blog/<slug>.png`. Use that same frontmatter image for the blog thumbnail, article hero, structured data, Open Graph image, and Twitter card. Keep labels short and readable at thumbnail size.

## Final checks

Run the site build. Confirm the generated route, image dimensions, title, description, and social-image metadata. Scan the article for em dashes and unsupported claims.

For interview-derived posts, remove generic praise for AI and routine personal-use anecdotes. Confirm that the main lessons remain traceable to the interviewee's perspective and company practices, with a clear explanation of how they apply elsewhere. Check that editorial advice and outside research have not taken over the article.

Check that any portfolio paragraph fits its surrounding section, project claims match the case study, links resolve, and reused visuals render clearly.
