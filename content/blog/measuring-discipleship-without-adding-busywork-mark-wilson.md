---
title: "Measuring Discipleship Without Adding Busywork"
description: "Mark Wilson's church discipleship dashboard raises practical questions about small group metrics, leader input, permissions, and field testing."
publishedAt: 2026-11-16
status: draft
image: /images/blog/measuring-discipleship-without-adding-busywork-mark-wilson.png
imageAlt: Portrait of Mark Wilson beside the title Measuring discipleship without busywork.
---

A church can count attendance and class completion. Those numbers still leave a harder question: are people building relationships and taking meaningful next steps?

I spoke with [Mark Wilson](https://www.linkedin.com/in/markwilsonethos/), a discipleship strategist at [ChurchCMO](https://churchcmo.com/), about that gap. Mark has worked with churches for nearly 35 years. After COVID, he heard pastors ask how to re-engage people who had already been part of their congregations.

He is testing a dashboard that helps leaders follow the path from a class into a small group and understand how those groups are doing. The prototype uses sample data today. Mark plans to put it in front of churches and learn what the workflow needs.

## Measure movement through the pathway

A class roster can show who attended. It cannot show whether someone found a group, formed a relationship, or received the support they needed.

Mark's proposed workflow records a person's next step when a class ends. A leader can then see where people move through the church's discipleship pathway. That makes a stalled handoff visible and gives someone a reason to follow up.

The engineering challenge is to keep that record useful without making leaders enter the same information twice. Mark wants to explore connections to church management tools such as [Planning Center](https://www.planningcenter.com/developers). An integration would need to define which system owns each field, when updates flow, and how staff resolve mismatched records.

## Give group leaders a small input task

Mark also wants a short monthly vitality check from small group leaders. The idea is to ask a few focused questions, then combine the answers into a view that helps church staff see which groups may need attention.

The check has to fit the leader's actual routine. Mark is still testing whether the questions and data entry are easy enough to use. A dashboard filled with incomplete inputs could give staff confidence in a pattern that the data does not support.

A useful pilot would measure submission rates, time to complete the check, confusing questions, and whether staff can act on the results. It should also leave room for a leader to add context. A number may flag a group; a conversation explains what is happening.

<div class="mermaid-frame">
  <pre class="mermaid">
flowchart LR
  A[Class completed] --> B[Next step recorded]
  B --> C[Small group]
  C --> D[Short leader check]
  D --> E[Staff review]
  E --> F[Personal follow-up]
  F --> C
  </pre>
</div>

## Protect the context behind the numbers

Mark wants the tool to include stories of transformation as well as counts. Those stories are more personal than attendance records. A church would need clear consent, limited access, and a way to decide what may be shared.

The prototype does not yet have logins or user roles. Mark described a future setup where church staff can see organization-wide information while group leaders can enter and view data relevant to their own groups. He also prefers church-controlled hosting.

Those choices shape the product. Authentication, role permissions, data ownership, and retention need to be designed before real personal stories enter the system. An AI feature that summarizes group activity would have to follow the same boundaries and allow staff to check its output.

## Test the work before building more

Mark built the sample application quickly with Google tools. It makes the concept tangible, which gives church leaders something concrete to react to. His next step is to share an empty version with a handful of churches and ask them to try their own data.

That test can answer the questions a polished mockup cannot: who enters each event, which fields are missing, what feels repetitive, and which dashboard view changes a staff member's next action.

For a small church with limited staff, the useful result is a clear signal that leads to a personal follow-up. Mark's prototype is an early attempt to make that signal visible. The field test will show whether the workflow gives leaders enough insight for the effort it asks of them.
