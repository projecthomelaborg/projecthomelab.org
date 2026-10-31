---
title: "Microsoft Licensing"
description: "Legitimate ways to run Microsoft software in a homelab, including evaluations, Windows client Hyper-V, Visual Studio subscriptions and student programs."
sidebar:
  label: "Microsoft Licensing"
  order: 2
lastUpdated: 2026-10-30
wikiTitle: "Microsoft Licensing"
---

There are several ways to license Microsoft software in a homelab. TechNet subscriptions, a homelab favorite, ended in 2013 and have no direct replacement. Check Microsoft's current terms, since these programs change often.

## Evaluations

The [Microsoft Evaluation Center](https://www.microsoft.com/en-us/evalcenter/) offers free, full-featured trials, including [Windows Server 2025 for 180 days](https://www.microsoft.com/en-us/evalcenter/download-windows-server-2025). Keep in mind:

- Evaluations need activation over the internet within the first 10 days, or they can start shutting down.
- You can extend Windows Server evaluations a limited number of times with `slmgr /rearm`. Check Microsoft's documentation for the limits.
- Use evaluations for testing. They're not for production use. Plan to rebuild, which makes it good practice for [automating your builds](/management/automation/).

## Windows client

Windows 11 Pro and Enterprise include [Hyper-V](/hypervisors/hyper-v/), and you may already have a license. Windows also offers [developer VMs](https://developer.microsoft.com/en-us/windows/downloads/virtual-machines/) from time to time, which expire on a set date.

## Visual Studio subscriptions

[Visual Studio subscriptions](https://visualstudio.microsoft.com/subscriptions/), formerly MSDN, include many Microsoft products for **development and testing only**. They suit you if you're testing and developing, not if you're running services for your household. They're expensive to buy yourself, but your employer may already provide one. Read the terms before you use it for your own lab.

## Student and educator programs

If you're a student or teach at a qualifying institution, [Azure Dev Tools for Teaching](https://azureforeducation.microsoft.com/devtools) (once called DreamSpark and Imagine) offers software for learning. [Azure for Students](https://azure.microsoft.com/free/students) adds cloud credit without a credit card.

## Hyper-V Server

The free standalone Hyper-V Server ended with the 2019 release, and there's no later version. Its support [ends in January 2029](https://learn.microsoft.com/en-us/lifecycle/products/hyperv-server-2019). We don't recommend it for new labs.

## Buying licenses

A retail or volume license is the costliest route. Windows Server Standard covers two Windows Server VMs per fully licensed host, and core-based licensing applies, with a minimum per server. Windows Server Datacenter covers unlimited VMs. Client access licenses may also apply.

Be wary of very cheap "lifetime keys" from online marketplaces. Many are resold volume or OEM keys that aren't valid for that use, and can stop working.

## Support dates

Windows Server 2016 reaches end of extended support on [January 12, 2027](https://learn.microsoft.com/en-us/lifecycle/products/windows-server-2016), so build new labs on Windows Server 2022 or 2025. Old versions are fine on an isolated network for testing migrations, but keep them off anything reachable from the internet.

## Learning without licenses

[Microsoft Learn](https://learn.microsoft.com/en-us/training/) is free, and many of its modules include sandbox environments, so you may not need a lab for every skill.
