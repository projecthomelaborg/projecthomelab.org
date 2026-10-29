---
title: "IBM Z series mainframes"
description: "IBM zSeries mainframes are an interesting beast to work with. Unfortunately for the homelab, your options are very limited to work with, and can be…"
sidebar:
  label: "IBM Z series mainframes"
  order: 16
lastUpdated: 2020-07-31
wikiTitle: "ZSeries"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

IBM zSeries mainframes are an interesting beast to work with. Unfortunately for the homelab, your options are very limited to work with, and can be questionably legal at times.

## Lab Options

For physical hardware, it's out there - your \*best\* way to obtain zSeries hardware is most likely government surplus auctions. See [I Just Bought an IBM z890 - Now What?](https://www.youtube.com/watch?v=45X4VP8CGtk) for an example.

For software, you can emulate parts of most zSeries kit with the Hercules emulator, however, IBM will not license software such as z/OS or z/VM on Hercules. There are ways to run z/OS on Hercules, but is left to the reader to research.

A more expensive option that is IBM blessed is the IBM zPDT (Personal Development Toolkit), which runs around \$4-5000 a year and includes software licensing.

## Learning Resources

[IBM Redbooks](http://www.redbooks.ibm.com/) are a great resource. Suggested reading includes:

- [Introduction to the New Mainframe: z/OS Basics](http://www.redbooks.ibm.com/abstracts/sg246366.html)
