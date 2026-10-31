---
title: "VMware vSphere"
description: "VMware vSphere is still a major enterprise platform, but Broadcom's changes make it harder to run at home. Learn when it's still worth it."
sidebar:
  label: "VMware vSphere"
  order: 6
lastUpdated: 2026-10-30
wikiTitle: "VMware vSphere"
---

VMware vSphere is a virtualization platform made up of the ESX hypervisor (long known as ESXi) and the vCenter management server. It was once the default homelab choice. Since Broadcom bought VMware in late 2023, that's no longer the case, but plenty of enterprises still run it, so the skills can still be valuable.

**The short version:** if you need VMware on your résumé, it's worth learning. Otherwise, start with [Proxmox VE](/hypervisors/proxmox-ve/) or [XCP-ng](/hypervisors/xcp-ng/).

## What changed

- Broadcom ended perpetual licensing and sells subscriptions, mainly through the VMware Cloud Foundation (VCF) and vSphere Foundation bundles.
- Free ESXi was withdrawn in 2024 and then [quietly came back in April 2025](https://www.theregister.com/2025/04/14/vmware_free_esxi_returns/) with ESXi 8.0 Update 3e. There's no reported free edition for version 9.
- vExpert licenses were replaced by a [certification-based program](/licensing/vmware/).
- Product names changed. vRealize became Aria and is now part of VCF Operations. Horizon was sold and now belongs to Omnissa.
- vCenter now ships only as an appliance. The Windows version is long gone.

See [VMware licensing](/licensing/vmware/) for what you can legally run at home.

## Pros and cons

**Pros**

- It's still common in enterprise environments, and experience with it is in demand.
- vMotion, DRS, HA, and vSAN are mature and well documented.
- It's the most capable platform for nesting ESX inside ESX.

**Cons**

- Lab licensing requires a paid membership, a certification, or both.
- Free ESXi has no vCenter, no clustering, and no backup APIs.
- Its hardware support is narrow. Each release drops older devices, and consumer NICs often need community drivers, if they work at all.
- Hybrid Intel CPUs with performance and efficiency cores can need [workarounds](https://williamlam.com/) on small hosts.
- vCenter and VCF need a lot of memory, so a full VCF lab is a big commitment.

## Use cases

- Preparing for a VCP certification or a VMware-focused job.
- Practicing a migration away from VMware before you do it at work.
- Learning vSAN or NSX, usually in a [nested lab](/hypervisors/vinception/).

## Getting started cheaply

1. Try the free labs first. [VMware Hands-on Labs](https://labs.hol.vmware.com/) lets you use a real environment in your browser, with no hardware.
2. Check your hardware against the [Broadcom Compatibility Guide](https://compatibilityguide.broadcom.com/) before you buy, and search for community reports for unsupported hardware.
3. Use [VMware Workstation Pro or Fusion](/hypervisors/choosing-a-hypervisor/#desktop-hypervisors), now free, for a small nested environment on your desktop.
4. If you're serious, look at the [certification paths](/licensing/vmware/) that come with home lab licenses.

## Where to learn more

- [William Lam's blog](https://williamlam.com/) (formerly virtuallyGhetto) is the best source for running VMware on small and unusual hardware.
- [VMware documentation](https://techdocs.broadcom.com/) has moved to Broadcom's site, so many old links no longer work.

For historical notes on running standalone hosts, see [vSphere without vCenter](/archive/vsphere-without-vcenter/) in the archive.
