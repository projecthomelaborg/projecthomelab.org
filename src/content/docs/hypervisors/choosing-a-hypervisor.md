---
title: "Choosing a hypervisor"
description: "Compare Proxmox VE, XCP-ng, KVM, Hyper-V, VMware and others by cost, ease of use and what they're good for in a homelab."
sidebar:
  label: "Choosing a hypervisor"
  order: 1
lastUpdated: 2026-10-30
wikiTitle: "Homelab Hypervisor Choices"
---

If you have no strong reason to pick something else, **start with [Proxmox VE](/hypervisors/proxmox-ve/)**. It's free, runs on nearly anything, and has a large community. If your job uses a particular platform, the better choice may be whatever helps your career.

| Platform | Cost for a lab | Clustering | Containers | Hardware support | Choose it if |
| --- | --- | --- | --- | --- | --- |
| [Proxmox VE](/hypervisors/proxmox-ve/) | Free, with optional paid support | Yes | LXC built in | Broad (Linux) | You want the sensible default |
| [XCP-ng](/hypervisors/xcp-ng/) | Free, with optional paid support | Yes | Not built in | Broad | You like the Xen and vCenter style of working |
| [KVM and libvirt](/hypervisors/kvm/) | Free | Do it yourself | Separate tools | Broad (Linux) | You want to learn the layers underneath |
| [Hyper-V](/hypervisors/hyper-v/) | Windows license or evaluation | Yes | Windows-focused | Broad (Windows) | You work in a Microsoft shop |
| [VMware vSphere](/hypervisors/vmware-vsphere/) | Free only in a limited form; see [licensing](/licensing/vmware/) | Requires a paid or program license | Via VCF | Narrow | You need VMware skills for work |
| TrueNAS or Unraid | Free or paid | Limited | Yes | Broad | Storage comes first, VMs second |
| Nutanix CE | Free | Yes | Via add-ons | Fussy, and needs lots of RAM | You want to learn Nutanix |

If you only plan to run containers, you may not need a hypervisor at all. See [Containers and Kubernetes](/hypervisors/containers-and-kubernetes/).

## Type 1 hypervisors

### Proxmox VE

A Debian-based platform that combines KVM virtual machines and LXC containers with a web interface, clustering, ZFS and Ceph. See [Proxmox VE](/hypervisors/proxmox-ve/).

### XCP-ng

An open source Xen platform, forked from XenServer and managed with Xen Orchestra. See [XCP-ng](/hypervisors/xcp-ng/).

### KVM with libvirt

KVM is built into the Linux kernel and underpins Proxmox, many public clouds, and other platforms. Running it directly teaches you a lot. See [KVM](/hypervisors/kvm/).

### Microsoft Hyper-V

Part of Windows Server and the Pro and Enterprise editions of Windows. The free standalone Hyper-V Server ended with the 2019 version. See [Hyper-V](/hypervisors/hyper-v/).

### VMware vSphere

Still widespread in enterprises, but much harder to justify at home since Broadcom's licensing changes. See [VMware vSphere](/hypervisors/vmware-vsphere/) and [VMware licensing](/licensing/vmware/).

### Other options

- **XenServer:** the commercial Xen platform that XCP-ng descended from. It has [a free tier for small installs](https://www.theregister.com/2024/03/27/xenserver_8_returns/), though check the current limits.
- **Nutanix Community Edition:** a free version of Nutanix's platform and its AHV hypervisor. It has steep [hardware requirements](/storage/hyper-converged-infrastructure/#solutions).
- **OpenStack:** a private cloud platform. It's heavy for a home lab, but MicroStack and Kolla make it easier to try if you need the skills.
- **Harvester:** SUSE's open source platform that runs VMs on Kubernetes. It needs a lot of RAM.
- **Incus:** a community-led manager for containers and VMs, forked from LXD. It's lightweight and well suited to Linux users.
- **oVirt:** the upstream of Red Hat Virtualization, which Red Hat has stepped back from. We wouldn't start a new lab on it.
- **Oracle VM:** Oracle's Xen-based product has been superseded, and we wouldn't start a new lab on it either.

## Desktop hypervisors

These run on your existing computer. They're free, quick to set up, and perfect for a study lab. They don't offer clustering of their own, and the lab stops when your computer does.

| Host OS | Options |
| --- | --- |
| Windows | Hyper-V (Pro and Enterprise), VMware Workstation Pro, VirtualBox, WSL 2 for Linux environments |
| macOS | VMware Fusion, UTM, Parallels (paid), and lightweight tools such as OrbStack, Lima and Colima |
| Linux | virt-manager with KVM, GNOME Boxes, VMware Workstation Pro, VirtualBox |

VMware made [Workstation Pro and Fusion Pro free](https://www.computerworld.com/article/3604503/vmware-makes-workstation-and-fusion-free-for-everyone.html) for all uses, though you need a Broadcom account to download them.

On Apple Silicon Macs, VMs generally need to be Arm builds. x86 guests run only through slow emulation, which limits what you can nest on them. Hypervisors like ESXi and Proxmox are built primarily for x86.

## What to compare

- **Hardware support:** Linux-based platforms run on nearly anything. ESXi's driver list is much narrower and often excludes consumer NICs. Check before you buy.
- **Backup support:** check that your preferred [backup tool](/management/backups/) works with it. Free ESXi, for example, doesn't offer backup APIs.
- **Community size:** in a homelab, forums and blogs are your support contract.
- **Licensing stability:** vendor terms can change suddenly, so have an exit plan and keep your VMs portable.
- **Migration tools:** Proxmox and others can import VMware VMs directly, which makes moving much easier.
