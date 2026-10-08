---
title: "Anthony Williams on Why AI Needs a Physical Layer"
description: Lessons from Anthony Williams on AI in proptech, smart-home middleware, access reliability, product focus, and self-guided customer experiences.
publishedAt: 2026-10-05
image: /images/blog/ai-needs-a-physical-layer-anthony-williams.png
imageAlt: Professional portrait of Anthony Williams.
status: draft
---

AI can coordinate a workflow, analyze activity, and decide which action should happen next. In the physical world, that action still depends on devices, APIs, connectivity, and a reliable fallback.

I recently spoke with [Anthony Williams](https://www.linkedin.com/in/anthony-williams-769551157/), VP of Strategy and Delivery at [BeHome247](https://www.linkedin.com/company/behome247/about/), about smart-home technology, self-guided tours, and where AI fits into property operations.

Anthony has spent about 12 years in real estate operations, resident services, consulting, and property technology. His perspective spans running operational programs and helping technology vendors serve those teams.

Here are the ideas that stayed with me.

## Focus is a product strategy

Property technology covers leasing, screening, communications, maintenance, access control, smart-home devices, and many other workflows. A company can quickly spread itself across too many problems.

Anthony sees value in being clear about the layer a product owns. BeHome247 focuses on self-guided tours, smart-home hardware, and the middleware that connects software workflows to physical devices.

That focus creates room for partnerships. An AI leasing product can own the conversation and customer journey. A property platform can manage listings, applications, and records. BeHome247 can provide the access and device layer behind those experiences.

The AI engineering lesson is simple: a useful system does not need to own every part of the stack. It needs a reliable interface with the parts around it.

## The last step shapes the whole experience

A prospective renter may discover a home on a listing site, schedule a tour, verify their identity, travel to the property, and follow every instruction correctly. If the door does not open, the entire experience feels broken.

That final action depends on several systems working together:

- The tour must be scheduled for the right person and time.
- Identity and location checks must complete successfully.
- The access service must send the correct command.
- The hub and lock must be online and responsive.
- A secure backup method must be available when connectivity fails.

The customer usually associates the failure with the company whose property they are trying to visit. Internal vendor boundaries disappear from their perspective.

This is an important design principle for full-stack AI applications. Reliability must extend through the final API call, device action, or human handoff that delivers the outcome.

## Middleware gives AI something to act on

An AI agent can decide that a verified visitor should receive access. It still needs a controlled way to trigger the lock, confirm the result, and handle an offline device.

Middleware provides that bridge. It translates product intent into commands that physical systems understand. It can also expose device state, record activity, and return errors to the workflow.

For an AI-supported access flow, the architecture might include:

1. A scheduling or leasing system receives the request.
2. Identity and location services evaluate the visitor.
3. An application calls the access-control API.
4. Middleware communicates with the hub and smart lock.
5. The system confirms entry or presents a rotating fallback code.

The intelligence layer becomes more useful when the execution layer is observable and dependable.

## Fallbacks are part of the product

Physical systems encounter weak cellular service, offline hubs, missing device responses, and delayed events. These are expected operating conditions.

Anthony described a flow where a visitor can receive a rotating backup code if the connected unlock path is unavailable. The fallback remains tied to the individual visitor and the access flow.

Good fallback design answers a few questions clearly:

- What happens when the primary action fails?
- How does the user recover without starting over?
- Which permissions remain valid during degraded service?
- What telemetry helps the support or operations team respond?

These questions apply to AI agents too. Tool calls fail. Models return incomplete instructions. External services time out. Recovery paths should be designed alongside the ideal workflow.

## Operator experience changes product judgment

Anthony began in tenant underwriting and placement, then worked in district management, resident services, consulting, and property technology.

That path gave him direct exposure to the people responsible for handling exceptions. A dashboard can show that a door is unlocked or a device is offline. The product still needs to clarify who should act, what they should do, and how quickly they need to do it.

This is where customer feedback becomes more useful. Product teams can connect telemetry to the operating process around it:

- Which event should create a work order?
- Which issue needs immediate attention?
- Which team owns the response?
- Which data should flow back into the property platform?

Automation creates value when it reduces uncertainty for the person responsible for the next step.

## A practical role for AI in proptech

Anthony expects AI to play a growing role through partnerships and connected workflows. The immediate opportunity is to help existing systems make better use of access data, device state, customer context, and operational events.

An AI layer could summarize recurring access failures, identify unusual device behavior, route an issue, draft customer communication, or help an operator decide what to investigate first. Each action depends on accurate system state and a clear permission model.

My biggest takeaway was that AI products need strong foundations beneath the model. In proptech, that foundation includes hardware, middleware, APIs, fallbacks, and the people who own the result.

A strong product connects model decisions to dependable execution in the real world.
