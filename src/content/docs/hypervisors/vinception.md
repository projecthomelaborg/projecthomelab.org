---
title: "Nested virtualization"
description: "Run hypervisors inside VMs to build a whole virtual cluster on one machine. Learn how to enable it on each platform and what to expect."
sidebar:
  label: "Nested virtualization"
  order: 8
lastUpdated: 2026-10-30
wikiTitle: "Virtual Machine vInception"
---

Nested virtualization means running a hypervisor inside a VM. It lets you build a multi-node cluster on one physical machine, or try a different hypervisor without touching your host. The community has long called it "vInception", and Simon Gallagher's [vTARDIS](https://vinf.net/vtardis/) was an early example.

It's great for learning cluster behavior, upgrades and failover, and it's free if you already have the hardware. It's not a good way to measure performance.

## Enabling it

The physical CPU must support hardware virtualization. You also need to expose it to the guest.

| Host | How to enable it |
| --- | --- |
| **Proxmox VE or KVM** | Enabled by default on current kernels. Set the VM's CPU type to `host` |
| **Hyper-V** | Run `Set-VMProcessor -VMName <name> -ExposeVirtualizationExtensions $true` with the VM off, and allow MAC spoofing on its network adapter |
| **ESXi** | In the VM's CPU settings, enable **Expose hardware assisted virtualization to the guest OS** |
| **VMware Workstation or Fusion** | Enable the same option in the VM's processor settings |
| **Public cloud** | Only on selected instance types, or on bare-metal instances |

To check on a Linux KVM host, run the command below. It prints `1` or `Y` if nesting is on (use `kvm_amd` on AMD):

```sh
cat /sys/module/kvm_intel/parameters/nested
```

## Type 1 or Type 2 host?

**A Type 1 host** (Proxmox, ESXi, Hyper-V on a dedicated machine) is the better option if you can dedicate a machine to it. You get better performance and it can run all the time. If you have a physical cluster too, you can migrate the nested lab between hosts when you do maintenance.

**A Type 2 host** ([a desktop hypervisor](/hypervisors/choosing-a-hypervisor/#desktop-hypervisors)) is the cheapest way in. It's ideal for a laptop or for occasional study, and it's probably where most homelabbers started. Downtime follows your desktop's reboots and sleep, and there's no migration between hosts.

Note that when Hyper-V or features that depend on it, such as WSL 2 or Windows' virtualization-based security, are on, other desktop hypervisors on Windows run on top of it. That usually works, but can be slower.

## Tips

- **RAM is the limit.** Each nested node needs its own memory, plus overhead. Don't overcommit too heavily.
- **Use fast storage.** Nested disk I/O goes through several layers, so NVMe helps a lot.
- **Allow promiscuous traffic if needed.** Nested VMs use MAC addresses the outer hypervisor doesn't know about. ESXi port groups often need promiscuous mode and forged transmits allowed, or MAC learning. Proxmox bridges generally work without changes.
- **Isolate the network.** Give the nested lab its own bridge or VLAN, with a small router VM such as OPNsense or VyOS. Then its DHCP server can't interfere with your home network.
- **Don't go deeper than you need to.** Each layer costs you performance. One level is useful, and more than that is mostly for fun.
- **Take snapshots at known-good points**, so you can roll back quickly when an experiment goes wrong.

## Which combinations work well?

| Outer host | Inner hypervisor | Notes |
| --- | --- | --- |
| Proxmox or KVM | Proxmox or KVM | Works very well |
| Proxmox or KVM | ESXi | Works, but ESXi is picky about virtual hardware. Use `e1000e` or `vmxnet3` NICs, and the `host` CPU type |
| Proxmox or KVM | Hyper-V | Works, but needs specific CPU and firmware settings |
| ESXi | ESXi | The best-supported route for VMware labs. Community templates are available from [William Lam](https://williamlam.com/nested-virtualization) |
| Hyper-V | Hyper-V | Supported by Microsoft |

## Example

For one way to organize a nested lab, see [Nested lab architecture](/hypervisors/nested-lab-architecture/).
