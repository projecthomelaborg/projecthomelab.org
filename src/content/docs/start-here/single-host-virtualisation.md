---
title: "Single Host Labs"
description: "The simplest homelab is one machine. Compare mini PCs, custom builds, used servers, your own PC, and renting hardware in a data center."
sidebar:
  label: "Single Host Labs"
  order: 8
lastUpdated: 2026-10-30
wikiTitle: "Single Host Virtualisation"
---

The simplest homelab is a single computer, and it's enough for most people. You can run dozens of containers and a good number of VMs on one modern machine, and even [nest a whole cluster](/hypervisors/vinception/) inside it. The trade-off is that when you reboot it, everything goes down.

## Mini PC

For most people this is the best place to start. New and used 1-liter machines are quiet, sip power, and are cheap enough to add a second one later. See [Mini PCs and 1-liter desktops](/hardware/mini-pcs/).

## Custom build

You choose every part, can fit many drives and PCIe cards, and can keep it quiet with large fans. Consumer platforms usually lack remote management, and many don't support ECC. See [custom builds](/start-here/building-a-homelab/#custom-builds).

## Used server

These range from small towers to dual-socket rack servers. They offer a lot of RAM and drive bays for the money, plus built-in remote management. They're also noisy and use far more power than a mini PC. Match the server to your needs, because a 24-core, 384GB machine running eight light VMs just heats the room. See [Used enterprise servers](/hardware/used-enterprise-servers/).

## Your own computer

This costs nothing, and modern desktops are powerful. Install a [desktop hypervisor](/hypervisors/choosing-a-hypervisor/#desktop-hypervisors), or use WSL 2 and Docker on Windows. Lab work competes with your daily use, and the lab stops when you turn the computer off, but it's perfect for study labs and trying things out.

## Renting hardware

Dedicated servers from providers such as Hetzner and OVHcloud give you real hardware with no noise, heat or power at home. Some small providers will also colocate a server you own, or sell you one on a rent-to-own basis. Compare the monthly price against your local electricity costs, as renting can work out cheaper where power is expensive. Treat a rented server as public by default, because it's directly on the internet. See [Securing a Homelab](/start-here/securing-a-homelab/).

## Getting the most from one host

- **Use containers for services** and VMs for things that need their own kernel. See [Containers and Kubernetes](/hypervisors/containers-and-kubernetes/).
- **Back up off the box.** A single host means a single failure takes everything. See [Backups](/management/backups/).
- **Plan your maintenance.** Choose a time for updates and reboots, and make sure VMs restart on their own afterward.
- **Add a UPS** if the machine holds data you care about. See [Power](/housing/power/#ups).
