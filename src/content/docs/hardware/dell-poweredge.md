---
title: "Dell PowerEdge"
description: "How to read Dell PowerEdge model numbers, and which generations are worth buying for a homelab today."
sidebar:
  label: "Dell PowerEdge"
  order: 3
lastUpdated: 2026-10-30
wikiTitle: "Dell PowerEdge"
---

Dell PowerEdge servers are common on the used market. Dell makes firmware updates easy to download, and there's a large community around them.

## Reading the model name

Since the 10th generation, names have used a letter and a set of digits.

The letter shows the form factor:

- **R** for rack-mount
- **T** for tower
- **M** or **MX** for blade or modular
- **C** for cloud-scale, high-density systems

For three-digit models, using the **R740** as an example:

- The **first digit** shows the class: higher numbers generally mean more sockets, more memory or larger chassis. R6xx is usually a 1U two-socket server and R7xx a 2U two-socket server.
- The **second digit** shows the generation.
- The **third digit** shows the CPU maker, with 0 for Intel and 5 for AMD on older models.

| Second digit | Generation | Examples |
| --- | --- | --- |
| 1 | 11th | R610, R710 |
| 2 | 12th | R620, R720 |
| 3 | 13th | R630, R730 |
| 4 | 14th | R640, R740 |
| 5 | 15th | R650, R750 |
| 6 | 16th | R660, R760 |

AMD EPYC models use four digits, such as the **R7525**: 7 is the class, 5 is the generation, 2 is the socket count, and the final 5 means AMD.

Before the 10th generation, a four-digit system was used. For example, the PowerEdge 2950 was a 2U, 9th-generation rack server.

## Which ones to buy

- **11th generation (R610, R710):** these were homelab favorites, but they're now too old and power-hungry. Avoid them unless they're nearly free and you only need them for occasional use.
- **12th generation (R620, R720):** they're old, and new hypervisor releases are dropping support for their CPUs. It's best to pass on these as well.
- **13th generation (R630, R730):** this is the budget choice, with DDR4 memory and a large used market. Check that current hypervisors still support the CPU you choose.
- **14th generation (R640, R740):** a good balance of price and efficiency if your budget allows it.

The T-series towers, such as the T330, T430 and T630, are usually much quieter.

## Remote management

PowerEdge servers include [iDRAC](/management/headless-access/#server-management-controllers) for remote management. A full graphical remote console generally needs an Enterprise license. Older versions may need outdated Java or browser support, so update the firmware and keep iDRAC on an isolated network.

## Further reading

- [Used enterprise servers](/hardware/used-enterprise-servers/)
- [Dell support](https://www.dell.com/support/) for manuals and firmware
