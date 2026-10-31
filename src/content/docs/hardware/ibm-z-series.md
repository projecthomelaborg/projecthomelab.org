---
title: "IBM Z series mainframes"
description: "Mainframes in a homelab are a niche pursuit. Learn your options for hardware, emulation and free learning resources."
sidebar:
  label: "IBM Z series mainframes"
  order: 5
lastUpdated: 2026-10-30
wikiTitle: "ZSeries"
stub: true
---

:::note[This article could use more detail]
If you've run z/OS or Linux on Z at home, [help improve this page](/contribute/).
:::

IBM Z mainframes are an interesting niche to explore, but your options at home are limited.

## Lab options

**Physical hardware:** decommissioned systems do occasionally appear, often through government surplus auctions. They're enormous, power-hungry and need specialist support. For one example, see [I Just Bought an IBM z890 - Now What?](https://www.youtube.com/watch?v=45X4VP8CGtk)

**Emulation:** the open source [Hercules emulator](https://sdl-hercules-390.github.io/html/) emulates mainframe hardware. Linux for s390x and older public-domain systems can run on it. IBM doesn't license z/OS or z/VM for use on Hercules, so don't run those versions on it.

**IBM's developer offerings:** IBM's zPDT and ZD&T products run its software on x86 hardware. They're commercial products, aimed at developers rather than hobbyists. Check with IBM for current terms.

## Learning resources

Learning doesn't have to involve running your own system:

- [IBM Z Xplore](https://www.ibm.com/z/resources/zxplore) offers free, hands-on access to a real z/OS system.
- [IBM Redbooks](https://www.redbooks.ibm.com/) are free. [Introduction to the New Mainframe: z/OS Basics](https://www.redbooks.ibm.com/abstracts/sg246366.html) is a good start.
