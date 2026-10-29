---
title: "Requirements Gathering"
description: "First things first, before you even consider spending a penny on your homelab, you need to start by actually working out what it is you need your homelab…"
sidebar:
  label: "Requirements Gathering"
  order: 1
lastUpdated: 2020-07-31
wikiTitle: "Requirements Gathering"
---

## Introduction

First things first, before you even consider spending a penny on your homelab, you need to start by actually working out what it is you need your homelab for! That means what you want to do with it, both now and in the future!

Some typical questions to ask yourself first are:

- What are your physical requirements based on your lab location?
  - How big can the devices physically be in that location?
  - Do you have room for an actual rack (e.g. a 12 u rack or perhaps even bigger!)?
  - How much noise you can put up with (lots, little, none)?
- What is your budget?
  - Do you have money up front, or would you like to invest in your lab over time?
- What is your chosen / preferred hypervisor and do you plan to run multiple hypervisors either separately or nested?
  - Do you actually care about what hypervisor, or do you care more about the VMs and workloads you run on top?
- How often will you use your homelab?
  - Does it need to run 24/7?
  - Conversely, does it need to be switched off overnight (e.g. because it's in your bedroom)?
  - Does any part of it need to be highly available?
- How close to real-world do you want to be?
- Do you have a use case for 10Gbps networking?
- Do you want to be able to do any overlay networking?
- How often will you build up and tear down machines?
  - How long will your machines last, and do you need to manage, secure and patch them?
  - At peak, how many VMs do you need to run and what are your total resource requirements (RAM, CPU cores and storage)?
- How would you like to protect your Lab? Backup / Replication
  - Is protection purely for undo the lab session 'play' to a known good state? Either protect the selected core Virtual Machines or full estate etc.
  - Or is backup / replication a key 'learning' point for you lab?
- What kit do you already have which you can reuse, be it compute, storage or networking kit?
- How do you plan to license the lab?

More importantly, the IT industry is changing and roles are becoming more diverse; for example the "VMware admin" barely exists as a single role anymore. As such, we are all moving towards managing and working with a more diverse technology set. The era of the [Full Stack Engineer](http://www.cio.com/article/2378708/cio-role/so-long-it-specialist--hello-full-stack-engineer.html) is apparently upon us! Your homelab therefore becomes a key tool in expanding your knowledge and skills across a wide range of technologies and software, or to put it far more succinctly:

- What do you want to use your homelab for?

Once you have the answers to the above questions, you are probably in a good position to consider **[which category of homelab](/start-here/homelab-categories/)** would suit you best.

## Typical "Homelabber" Profiles

Here are a few typical profiles - do you recognise any of these traits in your own situation?

### The Enterprise Obsessive

- The Enterprise Obsessive has a significant budget and isn't afraid to spend it!
- They're looking for maximum performance and feature set, with a platform as close to their enterprise solution at work as is feasible, and they will make sure they spend plenty of time making use of the lab as they have made the investment and enjoy the experience.
- Their lab is running 24/7/365
- They view 10Gbs networking as a minimum and might even consider throwing in a bit of infiniband as an option.
- They may have a bit of space in the house which they can dedicated to running their lab, be it the basement, garage or home office, and noise is not too much of an issue.
- They love all-flash; SSDs make their automated builds run even quicker!
- Their software and application testing is varied and can be anything from the full stack of VMware products, to AzureStack, Citrix, etc.
- They enjoy managing the lab, and are happy to spend time doing it. That said, they look to automate things where possible and use funky overlays in their lab to achieve new and interesting things!
- They run a VPN connection to access their Homelabs when in corporate office.

### The Noise Obsessive

- The Noise Obsessive wants to have an awesome homelab, but is limited by their physical surroundings! Perhaps they have a house but no office, so needs to locate the lab in a family room, or perhaps they have a one bed apartment and the keep their lab in the bedroom
- Whatever the physical situation, they value peace and quiet above all other things.
- While their budget may vary, they are happy to spend a bit extra if it means reducing those bels!
- They're happy enough to make do with 1Gbps networking as they know that 10Gbps usually comes with noisy switches.
- They're happy to consider either a very quiet home array, or perhaps hyperconvergence as an option, as it keeps the total number of devices and fans to a minimum!
- They love all-flash; SSDs don't make any noise!

### The Basement / Garage Owner

- The Basement (or more likely in the UK the Garage) Owner has plenty of space with power and no noise restrictions, so has the widest range of options of all.
- Their budget may be wildly variable, but this is fine as they can probably find many different options to meet their requirements.
- They are happy to consider enterprise, rack mount kit as they have space for an actual rack!

### The Lucky Employee

- The Lucky Employee has an employer who sees the value in what they are doing, and allows the employee to use their colocation / rack facilities, or even better, some kit to go in it!
- They may also have a double edged sword, as their lab may be limited to fitting in whatever space they have been allocated, for example rack-mount servers only.
- The lucky employee may be under pressure to buy kit which is similar to that which they use in their day job.
- The employer of the lucky employee may also have certain expectations of the lab, for example the employee may use the lab for testing out things before they go into production systems. As such, security and remote access are both key, and could be required 24/7.
- They probably have aspirations to run all flash and 10Gbps networking, but these may be relative pipe dreams.
- Some of their lab kit may actually be cast-off enterprise kit from the business, which have gone end of life or end of support.

### The Tinkerer

- The Tinkerer is frankly somewhat fickle; your archetypal Jack of All Trades! They jump on whatever the hottest technologies are, play with them for a few days, then move onto the next thing.
- Their lab use varies month by month, some months they spend every night playing, and other times they go weeks or months between sessions
- Their lab needs to be very flexible enough to support whatever the next hot thing is that comes along!
- They don't mind spending a little bit of time managing the lab itself. They have probably introduced some automation, then gotten bored and moved onto doing something else!

### The Junior Engineer

- The Junior Engineer is probably on a pretty low income, so budget may be the biggest constraint to their homelab purchases.
- They probably have plenty of free time on their hands, and a thirst to learn, so are able to spend plenty of time in the lab.
- They need to get maximum bang for their buck from the homelab, providing the widest flexibility at the lowest cost.
- The Junior Engineer may also be limited in terms of physical location of kit and noise levels, especially if they are perhaps single and live in shared accommodation where they have to keep their lab in their bedroom, or perhaps have a young family and a small house!
- They would like to have their lab run 24/7, but perhaps it only needs to be on in the evenings.
- They don't mind spending some time doing the day-to-day management tasks in their lab, as this helps them to build skills they can take into their actual day job. Just the act of running a homelab provides them with benefits and knowledge!

### The Part Timer

- The Part Timer sees the value in a homelab and would love to dedicate the time and money to running one, but simply has not enough of one or both!
- At most, they may need use their lab a handful of times in a month, but more often than not weeks go by between sessions, perhaps typically driven mainly by the need to study for exams as they come up.
- Flexibility is key as they may need the lab to work on different technologies at different times, depending on current projects and exams.
- Due to their limited time, they don't want to spend hours managing their homelab, they want to be using it! They view management as a pain in the proverbial rear!

## Common Homelab Workloads and Software

Some of the most common workloads to run within a homelab, are the infrastructure workloads of the homelab itself! For example, most of us have probably at some point or other in the past, invested in a homelab in order to allow them to learn how to install, configure and manage VMware vSphere.

Many people also choose to share their homelab resources with other areas of their lives, not only running dev servers of enterprise software and services for study. For example other people are running everything from their own WordPress blog on a LAMP stack, to PLEX servers and even home CCTV!

Here are a few common workloads and test solutions people run on their homelabs - think about which of these and other workloads you might like to run, as some of them are very lightweight, and others may require significant infrastructure if you want to run them!

<table>
<caption>Common Homelab Workloads &amp; Software</caption>
<thead>
<tr>
<th><p>VMware</p></th>
<th><p>Microsoft</p></th>
<th><p>Linux</p></th>
<th><p>Citrix</p></th>
<th><p>Containers</p></th>
<th><p>Other</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><ul>
<li><a href="/hypervisors/vmware-vsphere/">vSphere</a> (native or nested <a href="/hypervisors/vinception/">vInception</a> / vTARDIS)</li>
<li>vRealize Operations</li>
<li>vRealize Automation</li>
<li>vRealize Orchestrator</li>
<li>vRealize LogInsight</li>
<li><a href="/networking/">NSX</a></li>
<li><a href="/storage/vmware-vsan/">VSAN</a></li>
</ul></td>
<td><ul>
<li>Hyper-V (native or nested)</li>
<li>Windows VMs</li>
<li>Active Directory</li>
<li>SCOM</li>
<li>WDS &amp; WSUS</li>
<li>SQL / SQL Express</li>
<li>Exchange</li>
<li>IIS</li>
<li>RDS</li>
<li>AzureStack <em>(New)</em></li>
</ul></td>
<td><ul>
<li>Linux VMs</li>
<li>Apache web server</li>
<li>MySQL</li>
<li>LAMP stack</li>
<li>ELK stack</li>
<li>Varnish</li>
<li>HAProxy</li>
</ul></td>
<td><ul>
<li>XenApp</li>
<li>XenDesktop</li>
<li>XenServer</li>
<li>NetScaler</li>
</ul></td>
<td><ul>
<li>Docker</li>
<li>Rkt</li>
<li>Kubernetes</li>
</ul></td>
<td><ul>
<li>OpenStack</li>
<li>Firewalls</li>
<li>Load Balancers</li>
<li>Blogs, (e.g. Wordpress)</li>
<li>Media servers (e.g. PLEX)</li>
<li>Photo sharing sites</li>
<li>CCTV</li>
</ul></td>
</tr>
</tbody>
</table>

Common Homelab Workloads & Software

## Summary

No matter the budget, there are a few universal requirements which come out of the above cases:

- Flexibility is a key requirement for most labs.
- Many labs need to, or would like to, run 24/7/365.
- Noise can be a big issue for many people.
- Unless you are Daddy Warbucks, budget is going to be a relative constraint to your lab.

The most important thing to do before you go any further, is to sit down and analyse your own requirements. Once you know what it is you want to achieve, it will make it far easier deciding on how to do it!

It's interesting to note that the requirements above also match almost precisely with those of many small businesses!

## What's the solution?

As the Architect said to the Bishop... "It Depends".

But worry not dear reader, there are solutions to meet every budget and space, and they are described throughout the pages of this site! :)

You should probably start by deciding which **[category of homelab](/start-here/homelab-categories/)** would suit you best!
