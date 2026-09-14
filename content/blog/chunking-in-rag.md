---
title: "Chunking in RAG: The Basics"
description: A practical guide to chunk size, overlap, document structure, metadata, and retrieval quality in RAG systems.
publishedAt: 2026-08-31
image: /images/blog/chunking-in-rag.png
imageAlt: A source document moves through meaningful chunks and a vector index to produce relevant context for a RAG system.
---

Retrieval quality starts before the search request. It starts when the source document is split into chunks.

A RAG system embeds those chunks, stores them in an index, and retrieves the most relevant pieces for an LLM. A weak chunk can hide the answer inside unrelated text, separate a statement from its context, or match the wrong query.

## What makes a useful chunk?

A useful chunk holds one coherent idea with enough context to stand on its own. It may include a heading, the paragraph below it, and metadata that identifies the source.

Size matters, but there is no universal token count. Dense API documentation may need short chunks around individual methods. A policy document may need larger sections so rules keep their definitions and exceptions.

Start with the structure people already use to read the document. Split on headings, sections, paragraphs, and sentences. Use token limits as a guardrail when a section grows too large.

## Common chunking strategies

**Fixed-size chunking** splits text after a set number of tokens or characters. It is fast and predictable. It can cut through sentences or combine unrelated topics.

**Recursive chunking** tries larger boundaries first, such as headings and paragraphs, then moves to sentences when needed. This is a practical default for many text documents.

**Semantic chunking** groups nearby sentences by meaning. It can preserve topic boundaries in messy content, though it adds processing cost and more behavior to test.

**Parent-child retrieval** indexes small child chunks for precise matching and returns a larger parent section for context. This works well when search needs precision and the LLM needs surrounding detail.

## Use overlap with a reason

Overlap repeats a small amount of text between neighboring chunks. It helps when an important thought crosses a boundary. Heavy overlap creates duplicate matches, increases storage, and can fill the context window with repeated text.

Keep overlap small. Inspect real retrieval results before increasing it.

## Metadata is part of the chunk

Store the document title, section heading, source URL, content type, version, and permissions with each chunk. Metadata filters can narrow retrieval before vector similarity runs. It also gives the final answer something concrete to cite.

Permissions need special care. A chunk must retain the access rules of its source document so retrieval does not expose content to the wrong user.

## Test chunking with retrieval evals

Chunking should be measured with real questions and known relevant passages. Track whether the correct chunk appears in the top results. Then inspect the misses.

When retrieval fails, change one variable at a time: boundary rules, chunk size, overlap, metadata, embedding model, or ranking. Reindex the same evaluation set and compare the results.

The model cannot recover context that retrieval never found. Good RAG answers begin with chunks that carry the right meaning into search.

[View the LinkedIn post that inspired this article](https://lnkd.in/p/gTqKn9fj).
