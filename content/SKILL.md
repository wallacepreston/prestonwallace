---
name: blog-post-writer
description: Write or revise concise AI engineering posts for the Preston Wallace Astro blog, including frontmatter, source-grounded copy, Mermaid visuals, and social-preview images.
---

# Blog Post Writer

## Model and reasoning effort

When using this skill, use GPT-6 Sol with Medium effort.

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

## Visuals

When the user supplies an image or visual direction, follow it. Otherwise create a simple Mermaid diagram that explains the article's main flow. Save the Mermaid source beside the post as `content/blog/<slug>.mmd`.

Export a 1200 by 630 PNG to `public/images/blog/<slug>.png`. Use that same frontmatter image for the blog thumbnail, article hero, structured data, Open Graph image, and Twitter card. Keep labels short and readable at thumbnail size.

## Final checks

Run the site build. Confirm the generated route, image dimensions, title, description, and social-image metadata. Scan the article for em dashes and unsupported claims.
