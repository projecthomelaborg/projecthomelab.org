---
title: "Homelab Categories"
description: "Broadly speaking you can breakdown homelabs into roughly five main categories:"
sidebar:
  label: "Homelab Categories"
  order: 2
lastUpdated: 2020-07-31
wikiTitle: "Homelab Categories"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

## Introduction

Broadly speaking you can breakdown homelabs into roughly five main categories:

- Single host virtualisation
  - A single host with a Type 1 or Type 2 hypervisor, and a number of virtual machines
- [vInception](/hypervisors/vinception/) / vTARDIS
  - One or more hosts with Type 1 or Type 2 hypervisors, nesting further hypervisors and a number of virtual machines
- Physical cluster aka Array of Inexpensive PCs (AIPCs)
  - Multiple physical hosts with Type 1 hypervisors combined into one or more logical clusters
- Cloud Lab
  - A lab in the cloud, such as AWS, Azure or vCloud Air
- Hybrid
  - Spanning and/or mixing workloads between your on premises physical infrastructure, and your [Cloud homelab](/cloud/cloud-homelabs/).

## [Single Host Virtualisation](/start-here/single-host-virtualisation/)

The simplest approach to a homelab, and sometimes also the cheapest. It consists on having a single host where all your virtual machines are running, sometimes paired with one or more NAS devices/servers. It can be a dedicated machine (either whitebox or a business-grade server) or your personal workstation (either laptop or tower).

## [vInception](/hypervisors/vinception/) / vTARDIS

See [vInception](/hypervisors/vinception/) / vTARDIS for more info.

## Physical Cluster

The "ultimate" homelab really boils down to having a full cluster of at least 2-3 machines, however this is also the most expensive, [noisiest](/housing/noise/), most [power](/housing/power/) hungry, and most difficult to maintain a decent WAF!

The biggest benefit to a fully physical cluster homelab solution, be it hyper-converged, or just a standard cluster with some [shared storage](/storage/storage-options/) is that it is the configuration which most accurately mirrors an enterprise solution, and as such gives you the maximum flexibility in scope for things to test, learn about and (lets be honest) play with!

Another key benefit to the use of a physical cluster is the ability to keep individual server costs low, and scale out your lab over time. One thing to watch out for in this scenario is mixing your CPU types. If you think your will likely do this, it is a good idea to limit the CPU features using something like vSphere's [EVC mode (Enhanced vMotion Compatibility)](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1003212) as it is a pain to have to enable at a later stage.

If you reach the point where you have 4/5 cluster nodes or more, it may be well worth considering splitting your cluster into two, the first being your development workloads, and the second for management workloads. This has been recognised as [best practice](http://www.settlersoman.com/why-to-create-the-vmware-management-cluster/) in the real world for many years, but can also be very useful in a lab. For example when upgrading your development cluster, you might accidentally trash it, but this avoids having to rebuild all of your management tools as well!

## Cloud Homelab

See [Cloud Homelabs](/cloud/cloud-homelabs/)
