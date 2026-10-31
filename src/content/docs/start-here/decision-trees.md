---
title: "Decision Guide"
description: "Short answers to the first decisions in any homelab: what hardware to buy, which hypervisor to run, and where to put your storage."
sidebar:
  label: "Decision Guide"
  order: 3
lastUpdated: 2026-10-30
wikiTitle: "Homelab Decision Trees"
---

These are starting points, not rules. If you already know why you want something else, go with that.

## What should I buy?

1. **Do you have a spare PC or laptop?** Start there and spend nothing. An old laptop even has a built-in battery backup.
2. **Do you mainly want quiet and low power bills?** Get a [used or new mini PC](/hardware/mini-pcs/).
3. **Do you need lots of drives or PCIe cards?** Build a [custom tower](/start-here/building-a-homelab/#custom-builds).
4. **Do you need lots of RAM, remote management or real server hardware, and can you tolerate noise?** Get a [used server](/hardware/used-enterprise-servers/), and work out [the power cost](/housing/power/#what-a-watt-costs) first.
5. **Do you only need it a few hours a month?** Use a [cloud lab](/cloud/cloud-homelabs/) or a [nested lab](/hypervisors/vinception/) on your desktop.

## Which hypervisor should I run?

1. **Does your job use a specific platform?** Learn that one, if you can get it licensed.
2. **Are you only running containers?** You may not need a hypervisor. Use a plain Linux server with [Docker or Podman](/hypervisors/containers-and-kubernetes/).
3. **Do you want the safe default?** Use [Proxmox VE](/hypervisors/proxmox-ve/).
4. **Are you coming from VMware or Citrix, and want a similar model?** Try [XCP-ng](/hypervisors/xcp-ng/).
5. **Are you staying on your desktop?** Use the [desktop hypervisor](/hypervisors/choosing-a-hypervisor/#desktop-hypervisors) for your OS.

More detail: [Choosing a hypervisor](/hypervisors/choosing-a-hypervisor/).

## Where should my data live?

1. **One host, and just lab data?** Use [local NVMe](/storage/storage-options/#local-storage).
2. **Family photos or other data you can't replace?** Keep it on a [NAS](/storage/storage-options/#vendor-nas) or a separate pool with [backups](/management/backups/), away from lab experiments.
3. **Want to learn shared storage or migrate VMs between hosts?** Add an [NFS or iSCSI box](/storage/storage-options/#custom-storage-server), or use ZFS replication.
4. **Have three or more nodes and fast networking?** Try [Ceph or another hyper-converged option](/storage/hyper-converged-infrastructure/).

## Do I need a rack?

Probably not. If everything you own fits on a shelf, use a shelf. Consider a [rack](/housing/racks/) when you have rack-mount gear or enough cabling to justify one. Small 10-inch racks suit mini PC labs well.

## Should I open a port to the internet?

No. Use a [private VPN or mesh network](/security/remote-access/) instead. If something truly has to be public, read [Securing a Homelab](/start-here/securing-a-homelab/) first.
