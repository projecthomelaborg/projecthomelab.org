---
title: "VMware vSAN"
description: "vSAN is VMware's hyper-converged storage. Learn what's involved in running it in a lab today, including licensing, architecture and hardware."
sidebar:
  label: "VMware vSAN"
  order: 4
lastUpdated: 2026-10-30
wikiTitle: "VMware VSAN"
stub: true
---

:::note[This article needs more first-hand detail]
If you run vSAN in your lab, [help improve this page](/contribute/) with your hardware and results.
:::

vSAN is VMware's [hyper-converged](/storage/hyper-converged-infrastructure/) storage, built into the ESX hypervisor. It pools drives from your hosts into one shared datastore.

## Is it worth running at home?

It makes sense mainly when you're learning it for work. It needs vCenter and a suitable license, so there's no free route. See [VMware licensing](/licensing/vmware/). For general-purpose homelab HCI, [Ceph on Proxmox](/storage/hyper-converged-infrastructure/#solutions) is free and easier to get running on consumer hardware.

## Architecture

- **Original Storage Architecture (OSA):** disk groups made up of one cache device and capacity devices. It's more forgiving on hardware.
- **Express Storage Architecture (ESA):** a newer, all-NVMe design with no separate cache tier. It has stricter hardware requirements, so check the requirements carefully if you aren't using certified drives.

## Options for a lab

- **Nested:** the easiest and cheapest way to learn the features. Community [nested ESXi templates](https://williamlam.com/nested-virtualization) make this quick, and fake SSDs are fine for learning the concepts.
- **Physical:** at least three hosts is the standard design. A two-node cluster with a witness is also possible.
- **Network:** use a dedicated VLAN at minimum. 10Gb is strongly recommended, and ESA expects more.

## Hardware warnings

Uncertified drives and controllers can run vSAN in a lab, but community members have lost data doing so. Keep backups, and don't put your only copy of anything on an experimental cluster. Consumer SSDs are particularly risky without power-loss protection.

The official source of compatible hardware is the [Broadcom Compatibility Guide](https://compatibilityguide.broadcom.com/). vSAN's health checks in vCenter will flag anything unsupported. In a lab, you can often acknowledge those warnings once you understand them.
