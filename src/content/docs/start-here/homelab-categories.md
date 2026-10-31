---
title: "Homelab Categories"
description: "The main styles of homelab: a single host, a nested lab, a physical cluster, a cloud lab, or a mix, and who each one suits."
sidebar:
  label: "Homelab Categories"
  order: 2
lastUpdated: 2026-10-30
wikiTitle: "Homelab Categories"
---

Most homelabs fall into one of five styles. You can change later, and many labs grow through several of them.

| Style | Upfront cost | Running cost | Good for | Main limit |
| --- | --- | --- | --- | --- |
| [Single host](#single-host) | Low | Low | Almost everyone starting out | Maintenance takes everything down |
| [Nested](#nested-lab) | None to low | Low | Learning clustering on one machine | Slower, and needs plenty of RAM |
| [Physical cluster](#physical-cluster) | Medium to high | Medium | HA, live migration and distributed storage | More to buy, power and maintain |
| [Cloud lab](#cloud-lab) | None | Pay as you go | Occasional study, cloud skills | Costs add up if left running |
| [Hybrid](#hybrid) | Varies | Varies | Backups off-site, cloud networking practice | More moving parts |

## Single host

One machine runs a hypervisor and all your VMs and containers, sometimes with a NAS alongside it. This is the simplest and usually the cheapest option, and it's where we suggest starting. See [Single Host Labs](/start-here/single-host-virtualisation/).

## Nested lab

One or more physical hosts run hypervisors inside VMs, so you can build a whole virtual cluster on one box. It's a good way to practice failover or to try another hypervisor without new hardware. See [Nested virtualization](/hypervisors/vinception/).

## Physical cluster

Two or more machines work as one, usually three or more so the cluster can keep quorum. This is the closest match to a production environment and the only way to learn real hardware failure. Three used mini PCs now make a very capable, quiet cluster, so this no longer means a rack full of loud servers.

A few things to plan for:

- **Keep CPUs similar.** Live migration between different CPU generations needs a common baseline. Each platform has its own setting for this, such as Proxmox's [CPU type](https://pve.proxmox.com/wiki/QEMU/KVM_Virtual_Machines#qm_cpu) or vSphere's EVC.
- **Plan for quorum.** A two-node cluster needs a third vote, such as a small QDevice on a Raspberry Pi.
- **Budget for the network.** Distributed storage such as Ceph really wants 10Gb. See [10Gb and faster networking](/networking/10gbps-networking/).
- **Consider separating management.** At four or five nodes, it can help to run your management tools apart from the things you experiment on, so a bad upgrade doesn't take your tooling with it.

## Cloud lab

You rent someone else's hardware by the hour. It makes no noise and needs no space, and it's the obvious place to learn cloud platforms. It's a poor fit for anything that runs all the time. See [Cloud Homelabs](/cloud/cloud-homelabs/).

## Hybrid

Workloads and networks span home and cloud, such as a cheap VPS acting as a public entry point, or backups sent to object storage. Most labs become hybrid eventually, usually by accident. It's also a realistic way to practice networking between sites, which is what many employers run.
