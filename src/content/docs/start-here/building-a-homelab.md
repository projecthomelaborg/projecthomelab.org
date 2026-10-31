---
title: "Building a Homelab"
description: "An overview of the options for compute, CPU, memory, storage, networking and software when you plan a homelab build."
sidebar:
  label: "Building a Homelab"
  order: 4
lastUpdated: 2026-10-30
wikiTitle: "Building a Homelab"
---

Once you've [gathered your requirements](/start-here/requirements/) and [picked a style of lab](/start-here/homelab-categories/), this page walks through each layer of the build.

## Compute

| Option | Best for | Watch out for |
| --- | --- | --- |
| [Mini PCs and 1-liter desktops](/hardware/mini-pcs/) | Most labs. Quiet, low power, easy to cluster | Limited expansion, few drive bays, often no remote management |
| [Used enterprise servers](/hardware/used-enterprise-servers/) | Lots of cores and RAM, drive bays, out-of-band management | Noise, heat, power use, older CPUs |
| [Custom builds](#custom-builds) | Choosing every part, adding drives and GPUs, keeping noise down | More time to research and build |
| Tower servers | A middle ground with server features and less noise | Costs more than a rack server of the same age |
| NAS with VM support | One box for storage and light services | Modest CPU and RAM on many models |
| Single-board computers | DNS, monitoring, a cluster quorum vote | Limited I/O and RAM for the price |
| Your existing PC or laptop | Trying things for free | Lab work competes with daily use |

### Custom builds

Building your own lets you choose each part. Look for:

- **Case and cooling:** large, slow fans are quiet. Good airflow matters more than looks. Older community builds in the [archive](/archive/) still offer useful ideas on cases.
- **Motherboard:** count PCIe slots, M.2 slots, SATA ports and DIMM slots. Boards with IPMI or another BMC cost more, but you can then manage the machine without a monitor. For a cheaper equivalent, see [IP KVMs](/management/headless-access/#ip-kvms).
- **Network:** 2.5Gb onboard is now common. Intel and Realtek NICs work out of the box on Linux, but check support if you're running a hypervisor with a narrower driver list, such as ESXi.
- **Power supply:** a good, correctly sized PSU is more efficient at the low loads a lab spends its time at.

## CPU

CPU is rarely the first limit, so don't overspend. As a guide:

| Class | Examples | Suits |
| --- | --- | --- |
| **Low power** | Intel N100, N150, N305 | Containers, a few VMs, routers and home services |
| **Desktop and mobile** | Intel Core, AMD Ryzen | Most labs, including multi-VM clusters |
| **Workstation and server** | AMD EPYC, Threadripper, Intel Xeon | Lots of RAM, PCIe lanes and cores |

Things worth checking:

- **Hybrid Intel CPUs** mix performance and efficiency cores. Linux and KVM handle this well, but some hypervisors handle it poorly. ESXi in particular needs workarounds on many of these chips.
- **Virtualization features:** you'll want VT-x or AMD-V, and VT-d or AMD-Vi (IOMMU) if you plan to pass through devices.
- **Age:** old servers often use far more power for less performance than a modern mini PC. New hypervisor releases also drop old CPUs.
- **Integrated graphics:** Intel Quick Sync and similar hardware make media transcoding far cheaper than doing it in software.

## Memory

RAM is usually what limits how much you can run. DRAM prices rose sharply from late 2025 and were [still elevated in late 2026](https://www.digitalcitizen.life/ddr5-ram-prices-surge-in-2026-as-32gb-kits-reach-450-amid-global-memory-shortage/), so check current prices before you pick a platform. It can be cheaper to buy a used machine that already has RAM installed than to buy the RAM by itself.

Containers use far less memory than VMs, so you may need less than you think. [ECC memory](/hardware/ecc-memory/) is good to have but isn't required.

## Storage

Use NVMe flash for your VMs and containers, and hard drives only for bulk data. See [Storage options](/storage/storage-options/), [Storage software](/storage/storage-software/) and [Hyper-converged infrastructure](/storage/hyper-converged-infrastructure/).

## Networking

A managed switch that supports VLANs is the most useful networking upgrade you can buy. After that, add speed only where it helps. See [IP addressing and VLANs](/networking/ip-addressing/), [10Gb and faster networking](/networking/10gbps-networking/) and [Home Wi-Fi](/networking/wifi/).

## Power, cooling and noise

See [Power](/housing/power/), [Noise](/housing/noise/) and [Racks](/housing/racks/).

## Hypervisor and containers

See [Choosing a hypervisor](/hypervisors/choosing-a-hypervisor/) and [Containers and Kubernetes](/hypervisors/containers-and-kubernetes/).

## Licensing

Open source avoids the question for most labs. For vendor products, see [VMware licensing](/licensing/vmware/) and [Microsoft licensing](/licensing/microsoft/).

## The cloud

You don't have to own it all. See [Cloud Homelabs](/cloud/cloud-homelabs/).
