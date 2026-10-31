---
title: "Nested lab architecture"
description: "A practical pattern for a nested lab: keep a stable base layer that you don't experiment on, and put disposable labs on top."
sidebar:
  label: "Nested lab architecture"
  order: 9
lastUpdated: 2026-10-30
wikiTitle: "Nested lab architecture"
---

This pattern comes from community member Joep Piscaer's nested lab. It was originally built on ESXi, but the idea works on any hypervisor that supports [nested virtualization](/hypervisors/vinception/). The key is to separate the parts you depend on from the parts you experiment with.

## The layers

| Layer | What's in it | How to treat it |
| --- | --- | --- |
| **Physical** | Hardware and the outer hypervisor | Install once and leave it alone |
| **Lab services** | Router and firewall VM, DNS and DHCP, file shares, a management tool | Treat it as production, even at home |
| **Lab workloads** | Nested hypervisors and their VMs | Break it, delete it, and rebuild it |

The same product can appear in different layers. A vCenter or Proxmox instance that manages your lab belongs in the services layer. Another copy that you're test-upgrading is a workload. What matters is what breaks if it goes down.

## Keep your downloads next to the lab

Downloading ISOs and templates to your laptop over Wi-Fi and copying them to your NAS is slow and tedious. Instead, keep a small jump host VM inside the lab, reachable by remote desktop or SSH.

Download from there directly to a folder that's shared to your hypervisors over NFS, and to your home network over SMB. Your installation media is then available as soon as the download finishes, without another copy. The original lab used a Windows VM for this, but a small Linux VM or a NAS share works just as well.

## Network design

Give the lab workloads their own bridge or VLAN behind the router VM. That gives you:

- Freedom to run your own DHCP and DNS in the lab without affecting the rest of the house.
- A single point at which to control what the lab can reach.
- The option to run the same IP plan in multiple copies of a lab.

See [IP addressing and VLANs](/networking/ip-addressing/).

## Make the workloads disposable

The workload layer pays off when you can rebuild it easily. Use templates, snapshots, and [automation](/management/automation/), so a broken lab costs you minutes rather than a weekend.
