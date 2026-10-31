---
title: "Headless Access"
description: "Manage lab machines without a monitor or keyboard, including during boot, using server BMCs, Intel AMT, IP KVMs and smart plugs."
sidebar:
  label: "Headless Access"
  order: 5
lastUpdated: 2026-10-30
wikiTitle: "Headless Access"
---

Headless access lets you manage a machine with no monitor or keyboard attached. SSH and remote desktop are fine while the operating system works. For firmware settings, reinstalling the OS, or a machine that won't boot, you need something that works at a lower level. For reaching your network from outside, see [Remote Access](/security/remote-access/).

It's useful when your servers are in the garage, the loft or a colocation facility, or just because you don't want to carry a monitor around.

## Options

| Option | Cost | Works during boot? | Notes |
| --- | --- | --- | --- |
| [Server BMC](#server-management-controllers) | Included in servers | Yes | iDRAC, iLO and IPMI. The full console may need a license |
| [Intel AMT (vPro)](#intel-amt) | Included on some business PCs | Yes | A useful bonus on used business mini PCs |
| [IP KVM](#ip-kvms) | Roughly $70 and up | Yes | Works with any machine that has video and USB |
| KVM switch | Low to moderate | Local only | One keyboard, screen and mouse for several machines |
| Smart plug | Low | Power only | Hard resets for hung machines |
| Wake-on-LAN | Free | Power on only | Needs firmware and NIC support |

## Server management controllers

Baseboard management controllers (BMCs) are small computers on the motherboard that let you control power, watch the hardware and use the console, even when the main system is off.

- **iDRAC** is Dell's version, and **iLO** is HPE's. A graphical console usually requires an Enterprise or Advanced license.
- **IPMI** is the common standard found on Supermicro and other boards. On Linux, [ipmitool](https://github.com/ipmitool/ipmitool) gives you command-line control. PowerShell's PcsvDevice cmdlets also work on Windows.
- **Redfish** is the newer, REST-based replacement for IPMI, and is easier to automate.

**Security:** BMC software is often old and full of holes. Keep BMCs on a separate management network, and never expose them to the internet. Change any default passwords.

## Intel AMT

Intel AMT, part of vPro, offers remote power control and a console on business PCs that support it, including many used Lenovo, Dell and HP mini PCs. Check that the exact model has it, as not all do. You configure it through the firmware's MEBx menu and can manage it with [MeshCentral](https://meshcentral.com/). AMD offers a comparable feature, DASH, on some of its business systems.

## IP KVMs

An IP KVM connects to a machine's HDMI and USB ports, and shows you the screen in your browser. This means you can use it on any computer, including while it boots and from firmware menus. You can also mount an ISO image over the network.

- [PiKVM](https://pikvm.org/) is the open source option, which you can buy as a ready-made device or build using a Raspberry Pi.
- Low-cost devices such as the Sipeed NanoKVM and GL.iNet Comet offer much of the same at a lower price. Check the state of their firmware and security updates, and keep them on a restricted network.

Some models can also control power using an ATX adapter. To serve several machines from one IP KVM, connect it through a compatible KVM switch.

## Tips

- Set your firmware to restore power after an outage, so machines come back on their own.
- Add a dummy HDMI plug if a machine refuses to boot, or uses a tiny resolution, when no monitor is attached.
- Keep a USB drive with your hypervisor's installer handy, and a console cable if you own switches or firewalls.
- Test your access before you need it, while you're still in the same room as the machine.
