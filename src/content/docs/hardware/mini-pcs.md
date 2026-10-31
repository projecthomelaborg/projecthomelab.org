---
title: "Mini PCs and 1-liter desktops"
description: "Mini PCs have become the default homelab hardware. Learn what to look for and compare used business desktops with new N-series and Ryzen machines."
sidebar:
  label: "Mini PCs and 1-liter desktops"
  order: 1
lastUpdated: 2026-10-30
wikiTitle: "Gigabyte BRIX"
---

Small machines have largely replaced rack servers as the go-to homelab hardware. They're quiet, use very little power, and are cheap enough that you can build a cluster over time.

## What to buy

Models change quickly, so use these as categories to search for, not as a shopping list.

| Category | Examples | Good for | Limits |
| --- | --- | --- | --- |
| **Used 1-liter business desktops** | Lenovo ThinkCentre Tiny, Dell OptiPlex Micro, HP EliteDesk Mini | Great value, reliable and easy to find. Often the best first lab machine | One NIC is common, with limited M.2 or SATA slots |
| **Low-power new** | Intel N100, N150 and N305 machines from Beelink, GMKtec and others | Containers, light VMs, routers | Often a single RAM slot and limited PCIe lanes |
| **Mid-range new** | AMD Ryzen and Intel Core mini PCs | Multiple VMs, small clusters | Costs more, and fans can get loud under load |
| **Homelab-focused** | Minisforum MS-series and similar | 10Gb networking, several NVMe slots, and sometimes a PCIe slot | Higher price, and cooling can be a concern |
| **Apple Mac mini** | M-series models | Efficient, quiet, good for local AI | Not well suited to running x86 hypervisors |
| **Single-board computers** | Raspberry Pi 5, Orange Pi | DNS, monitoring, a QDevice for your cluster | RAM limits and the total cost once you add storage and power |

ServeTheHome's [Project TinyMiniMicro](https://www.servethehome.com/introducing-project-tinyminimicro-home-lab-revolution/) has useful reviews of the used business models. Bear in mind that many online "best mini PC" lists are written to earn affiliate commissions.

## What to look for

- **RAM:** check the maximum and whether it's soldered. RAM is the main limit you'll hit. Memory has been [unusually expensive](https://www.digitalcitizen.life/ddr5-ram-prices-surge-in-2026-as-32gb-kits-reach-450-amid-global-memory-shortage/) since late 2025, so compare barebones prices with those of machines that include memory.
- **Storage slots:** count M.2 and SATA slots. Two slots let you mirror your drives or separate the OS from your data.
- **Networking:** Intel NICs are generally trouble-free. 2.5Gb is now common, and a few models offer 10Gb. USB network adapters work but can be less reliable.
- **CPU:** check core counts and how the CPU performs at its configured power limit, not just the model number.
- **Idle power:** look for measured figures. Many small machines idle at between 7W and 15W, which keeps the [running costs](/housing/power/#what-a-watt-costs) low.
- **Noise under load:** cheap mini PCs can have small, whiny fans.
- **Security updates:** buy from vendors that issue firmware updates. Some budget brands rarely do.
- **Remote management:** few of these machines have a BMC. Some business models support Intel vPro/AMT. Otherwise, use an [IP KVM](/management/headless-access/#ip-kvms).

## Known issues

- **Realtek and Intel i226 NICs** have had driver issues on some hypervisors and kernels. Search for your exact model and hypervisor.
- **ESXi** doesn't include many consumer NIC drivers, and hybrid Intel CPUs need workarounds. Check first if you plan to [run VMware](/hypervisors/vmware-vsphere/).
- **Thermals:** dust and small fans shorten their lives. Give them space and clean them now and then.
- **Power bricks:** a cluster means several power adapters. A small power strip that you can mount on your shelf helps keep things tidy.

## Racking them

Mini PCs don't need a full rack. Shelves are fine, and 10-inch racks and 3D-printed mounts are popular choices. See [Racks](/housing/racks/).
