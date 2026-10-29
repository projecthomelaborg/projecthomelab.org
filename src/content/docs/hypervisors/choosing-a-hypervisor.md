---
title: "Microsoft"
description: "Microsoft Hyper-V Server is a free product that delivers enterprise-class virtualization for your datacenter and hybrid cloud. Microsoft Hyper-V Server…"
sidebar:
  label: "Choosing a hypervisor"
  order: 1
lastUpdated: 2021-02-09
wikiTitle: "Homelab Hypervisor Choices"
---

## Microsoft Windows Server 2019 Hyper-V

Microsoft Hyper-V Server is a free product that delivers enterprise-class virtualization for your datacenter and hybrid cloud. Microsoft Hyper-V Server 2019 provides new and enhanced features that can help you deliver the scale and performance needs of your mission-critical workloads.

The Windows hypervisor technology in Microsoft Hyper-V Server 2019 is the same as what's in the Microsoft Hyper-V role on Windows Server 2019. It is a stand-alone product that contains only the Windows hypervisor, a Windows Server driver model, and virtualization components. It provides a simple and reliable virtualization solution to help you improve your server utilization and reduce costs.

### Licensing

Microsoft Licensing is a dark art that only a select few will take the time to master and to remain compliant within a corporate world it most companies rely on License specialists. Whilst it is, of course, important to be fully licensed for all of the software you plan to run within the home lab, if you have a TechNet (no longer available) or MSDN subscription then you are more than likely covered (assuming you only deploy the applications and software you are licensed for). See [Microsoft Licensing](/licensing/microsoft/).

From a Hyper-V perspective, Microsoft Windows Server 2012 (inc R2) Standard Edition license means you can run upto 2 VMs per license. Any further VMs will require additional Standard License (licensing either the host for virtual instances). By far the most common scenario for virtualisation in real world environment is to purchase Data Center Edition licensing as this allows you to run unlimited instances of a virtual machine on your host servers.

That said, I believe the Microsoft Server license mode is very much trust based. Microsoft trust you will do the right thing because being caught under licensed is a very expensive mistake to make!

## Citrix

## Citrix Hypervisor (formerly XenServer)

## Microsoft Hyper-V Server

## KVM

KVM is a versatile beast and ships with virtually every Linux distribution, making it incredibly widely available. KVM supports live migration and together with other Linux tools can provide the same base features as both VMware and HyperV. The key point to realise about KVM is that KVM just runs VMs, it's not a monolithic product like ESXi and instead of trying to do everything the Unix philosophy is to [do one thing and do it well](https://en.wikipedia.org/wiki/Unix_philosophy#Do_One_Thing_and_Do_It_Well). So, KVM runs VMs but for networking you have a pick of tools from basic linux bridging with brctl for simple sharing of the host network to OpenVswitch with VXLAN for complex NFV use cases. Similarly with storage, you can either use the same disk you installed Linux on to store your VMs, or setup a clustered storage system akin to VSAN using popular alternatives like Ceph or GlusterFS.

## Proxmox

Proxmox acts as a layer above KVM to include network, storage and host cluster services under one roof. Open source and free with a paid-for support model.

## oVirt

The open-source branch of Red Hat's RHV product oVirt is similar to Proxmox in functionality.

## KVM w/ libvirt

If you are willing to get your hands dirty then you should read a primer on virsh ([Ubuntu](https://help.ubuntu.com/community/KVM/Virsh) or [Red Hat](https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/6/html/Virtualization_Administration_Guide/chap-Virtualization_Administration_Guide-Managing_guests_with_virsh.html)), a simple shell to start/stop and configure VMs on the command line. Configurations are stored and retrieved as XML and support includes starting/stopping/migrating VMs managing virtual disks across a wide variety of backends and managing virtual networks.

If you already run Linux on the desktop then the excellent [virt-manager](https://virt-manager.org/) tool is available to you.

## Oracle

## Oracle VM

## Oracle Virtualbox

## VMware

## VMware vSphere ESXi

Welcome to the joy that comes from hand-crafting your own ESXi ISOs to include that motherboard SATA controller that VMware refused to put on their HCL, loading your new ESXi with tons of VMs, running it for ages and then upgrading it forgetting about the driver and losing access to everything. Fun times.
