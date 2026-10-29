---
title: "vSphere management cluster on Hyper-V"
description: "Today i was thinking about a scenario, where i was thinking to put vSphere infra components (Like vCenter server, syslog, AD, DNS, DHCP etc.) above…"
sidebar:
  label: "vSphere management cluster on Hyper-V"
  order: 2
lastUpdated: 2020-07-31
wikiTitle: "Running Your vSphere Management Cluster on Hyper-V"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

## Introduction

Today i was thinking about a scenario, where i was thinking to put vSphere infra components (Like vCenter server, syslog, AD, DNS, DHCP etc.) above Hyper-V Cluster.

I know what you're thinking, what absurd thing i'm talking about, what is the need of separate management cluster, Hyper-V is not mature enough to host vSphere Management infra., VMware and Hyper-V don't go Hand-in-Hand etc. and i accept that, because before conceiving this concept i had same thoughts but later I cross questioned myself i.e. what are the pros/cons about this design and how this is going to help customers. So, I'm sharing the pros/cons about this design with you, if you any comments whether good or bad, i'm all ears.

## Pros and Cons

Pros or advantages:-

1.  Dual Hypervisor strategy with a twist.
2.  Most of the vSphere infra components require windows OS (yeah,i know about VCSA).
3.  Utilize "Virtualization-Safe" feature introduced in win2012 (VM-GenerationID, avail. with Hyper-V v3), make SSO robust.
4.  License cost reduced (at least for management cluster and OS license).
5.  Utilize existing hardware and windows OS license.
6.  vCenter server supported on virtual platform (kb10087), nothing mentioned about Hyper-V

Cons or disadvantages:-

1.  Requires multi-talented engineers to manage.
2.  Support-issues from both vendors (support engineer love this sport, Volley-ball).
3.  Some Third-party software issues (i don't know which, but included it).
4.  Hard to convince CIO/CTO's (biggest threat to such designs)

## External Links

| Title                                                                                                      | Description                                                    |
|------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|
| [Original article](http://vforvirtualization.blogspot.in/2014/01/thinking-out-loud-vcenter-server-on.html) | Original article - has been syndicated by the original author. |

External Links
