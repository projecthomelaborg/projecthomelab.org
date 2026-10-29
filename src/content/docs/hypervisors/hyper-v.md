---
title: "Microsoft Hyper-V"
description: "The Hypervisor itself is available as a standalone free product or baked into Windows Server (or Windows 10). See Microsoft Licensing for suggestions on…"
sidebar:
  label: "Microsoft Hyper-V"
  order: 3
lastUpdated: 2020-07-31
wikiTitle: "Microsoft Hyper-V"
---

## Introduction

Hyper-V is the Microsoft hypervisor.

## Pros and Cons

### Pros

- An Enterprise level Hypervisor
- Available in a free tier or with an existing Windows license.
- Basic Management tools included
- Built into Windows client operating systems

### Cons

- No nested virtualization prior to Windows Server 2016
- Host runs Windows, bringing more overhead than ESXi (improved with NanoServer)

## Costs

The Hypervisor itself is available as a standalone free product or baked into Windows Server (or [Windows 10](https://msdn.microsoft.com/en-us/virtualization/hyperv_on_windows/windows_welcome)). See [Microsoft Licensing](Microsoft_Licensing) for suggestions on licensing Windows in a HomeLab environment.

## Use Cases

Hyper-V is suitable where a Type 1 Hypervisor is required for deploying direct to hardware. The "Hyper-V role" can also be used on an existing Windows (10 or Server 2008/2012) laptop or desktop which is already handy when dedicated hardware is not available. This role-based deployment provides a Type 1 Hypervisor with many of the benefits of a Type 2 Hypervisor.

## External Links

| Title                                                                  | Description                        |
|------------------------------------------------------------------------|------------------------------------|
| [<http://www.microsoft.com/hyper-v>](http://www.microsoft.com/hyper-v) | The Microsoft Hyper-V Product Page |

External Links
