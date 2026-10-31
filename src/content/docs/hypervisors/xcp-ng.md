---
title: "XCP-ng"
description: "XCP-ng is an open source Xen hypervisor managed with Xen Orchestra. It's a good fit if you like a vCenter-style management model."
sidebar:
  label: "XCP-ng"
  order: 3
lastUpdated: 2026-10-30
---

XCP-ng is an open source hypervisor based on Xen. It began as a community fork of XenServer and is now backed by [Vates](https://vates.tech/), which sells optional support. As of October 2026, the current long-term support release is [8.3 LTS](https://xcp-ng.org/blog/2024/10/07/xcp-ng-8-3/).

You manage it with [Xen Orchestra](https://xen-orchestra.com/), a web interface that runs in a VM and can oversee many hosts. If you're used to ESXi and vCenter, this separation of host and manager will feel familiar.

## Pros and cons

**Pros**

- It's free, with no feature paywall on the hypervisor.
- Xen Orchestra includes backups, replication, and rolling pool updates.
- It has a clean appliance-style design, where the host stays out of your way.
- It's a natural move for anyone coming from VMware or XenServer.

**Cons**

- It has a smaller community than Proxmox, so you'll find fewer guides.
- It has no built-in container support. Run containers in a VM.
- It's a weaker host for [nested virtualization](/hypervisors/vinception/) than KVM or ESXi.
- Check the storage docs for limits such as maximum virtual disk size before you plan very large disks.

## Getting started

1. Download the ISO from [xcp-ng.org](https://xcp-ng.org/) and install it on your host.
2. Deploy Xen Orchestra using the built-in web page on the host, which offers the prebuilt appliance. The free tier of the appliance has limited features, unless you pay for a plan.
3. Add your host, create a storage repository, and build a VM or a template.

The community also builds Xen Orchestra from its [open source code](https://github.com/vatesfr/xen-orchestra), which gives you more features for free but comes without vendor support. Vates [documents how to do this](https://docs.xen-orchestra.com/installation#from-the-sources).

## Clustering

Hosts join a **pool**. For high availability, you need shared storage, such as NFS or iSCSI. Three or more hosts are recommended. Vates also offers XOSTOR, which provides hyper-converged storage.

## External links

- [XCP-ng documentation](https://docs.xcp-ng.org/)
- [XCP-ng forum](https://xcp-ng.org/forum/)
