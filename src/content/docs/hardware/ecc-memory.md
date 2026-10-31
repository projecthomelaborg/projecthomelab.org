---
title: "ECC Memory"
description: "ECC RAM detects and corrects memory errors. Learn how it works, how to check it's active, and whether your homelab really needs it."
sidebar:
  label: "ECC Memory"
  order: 4
lastUpdated: 2026-10-30
wikiTitle: "ECC Memory"
---

ECC (error correction code) RAM automatically detects and corrects small memory errors. It's standard in servers because a flipped bit can crash a system or silently corrupt data.

## Do you need it?

It's good to have, but most labs don't need it. It matters more if your lab stores data you can't replace, or if you run it all the time on lots of memory. ZFS works without it, although ECC gives you more protection, as with any filesystem. Backups matter more than ECC, so don't skip them to afford it.

## How to tell

Don't rely on counting chips, which was the old rule of thumb. It doesn't always work. Conventional ECC DIMMs have extra chips, such as nine instead of eight per rank, but chip counts vary. Check the module's part number or data sheet instead.

There are also a few types, and they aren't interchangeable:

| Type | Used in | Notes |
| --- | --- | --- |
| **UDIMM** | Workstations and small servers | Unbuffered ECC. Must be supported by the CPU and motherboard |
| **RDIMM** | Most servers | Registered memory. Doesn't work in consumer boards |
| **LRDIMM** | High-capacity servers | Load-reduced memory for very large capacities |

**DDR5 note:** all DDR5 includes on-die ECC, which corrects errors inside the chip. That isn't the same as full, side-band ECC, which also protects data between the memory and CPU. Look for modules sold as "ECC" specifically, usually with the extra chips.

## Platform support

The memory, CPU and motherboard must all support ECC:

- **Servers and workstations** generally do.
- **AMD Ryzen** often allows ECC UDIMMs, depending on the motherboard and CPU. Check the maker's specifications.
- **Intel** usually limits it to Xeon or workstation chipsets. Consumer chipsets typically don't support it, even with an ECC-capable CPU.
- **Mini PCs** rarely support it.

To confirm that ECC is actually active on Linux, run this and look at `Error Correction Type`:

```sh
sudo dmidecode -t memory | grep -i "error correction"
```

You can use `rasdaemon` or EDAC tools to see if errors are being reported.
