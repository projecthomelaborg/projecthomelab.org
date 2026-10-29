---
title: "vInception (nested virtualization)"
description: "vInception or vTARDIS by Simon Gallagher is the simple concept of running a physical host and nesting one or more a hypervisors on top of that host."
sidebar:
  label: "vInception (nested virtualization)"
  order: 7
lastUpdated: 2020-07-31
wikiTitle: "Virtual Machine vInception"
---

## vInception

vInception or [vTARDIS by Simon Gallagher](https://vinf.net/vtardis/) is the simple concept of running a physical host and nesting one or more a hypervisors on top of that host.

It is possible to use either a Type 1 or a Type 2 hypervisor for your vInception host.

Nesting hypervisors is great if you are on a budget, but it's also good for testing alternative hypervisors, such as running Hyper-V on top of VMware vSphere, or even OVM on top of VirtualBox!!!

## Type 1 vInception

Type 1 vInception is a very straight forward method of virtualising multiple [hypervisors](/hypervisors/choosing-a-hypervisor/) on top of a Type 1 hypervisor, such as VMware vSphere.

It is well publicised that VMware themselves actually run their development labs in a nested vSphere environment, and since vSphere 5.0 this has been fully enabled for 64-bit [hypervisors](/hypervisors/choosing-a-hypervisor/).

Typically there is no reason other than massive nerdiness to try to run more than one layer of nesting deep, i.e. a cluster on top of a host for testing purposes etc, but apparently it is actually possible to go [several layers deep](https://www.pcsteps.com/508-nested-virtualization/). Obviously you would never consider using any of this in production, but for development and testing of features it is a very useful method for faking the quantity of hosts in your cluster. In fact, Willam Lam successfully setup a [64-node VSAN cluster](http://www.virtuallyghetto.com/2015/02/updated-vsan-6-0-nested-esxi-ovf-templates-for-64-nodes-all-flash-array-fault-domain-testing.html) using just this method.

## Type 2 vInception

It's quite possible that this is where the vast majority of IT guys and girls first cut their teeth on virtualisation labbing. Using a Type 2 Hypervisor such as VMware Workstation or VMware Fusion to run another hypervisor such as [ESXi](/hypervisors/vmware-vsphere/) or [Microsoft Hyper-V](/hypervisors/hyper-v/) on top of your client operating system, you can achieve an entire multi-node virtual infrastructure on a single physical machine.

## Which Type To Use?

As with everything in the homelab, it depends!

### Type 1

Assuming you don't have the budget for a scale out physical solution, a Type 1 nested hypervisor is a great option! It allows you to test and run all of the main features of your chosen hypervisor both natively on physical hardware, as well as virtually when layered inside of your "root" host. Most commonly a Type 1 vInception config is based in a single host with [local storage](/storage/storage-options/#local-storage), but this does not have to be the case!

Bear in mind of course that every time you want to do any maintenance on your Type 1 vInception host, you will need to suspend or stop all of your VMs, which can be a pain. Typically this should not be too often though, as you are running a hypervisor instead of a client OS, which means patches are relatively irregular, and as this is non-production you will not be under the same pressure to keep completely up-to-date on the patching front.

Some people will actually run a Type 1 vInception configuration even if they have a physical cluster. The main benefit of this is if you want to test other hypervisors and newer versions of your current hypervisor without rebuilding your lab; for example, many people ran vSphere 6 on top of vSphere 5.5 during the beta period. With a Type 1 hypervisor in a scale-out cluster and some shared storage, you have the ability to vMotion or live migrate VMs between hosts, thereby mitigating any issues with patching and maintenance.

### Type 2

If you are on a very small budget and cannot afford a dedicated homelab host, or simply need portability for your homelab (i.e. a laptop), then it makes a lot of sense to run using a Type 2 hypervisor on top of your existing working machine. Typically this would be either a Windows Client OS (Windows 7/8/10), Mac OSX, or Linux.

As with Type 1 vInception, every time you want to do any maintenance on your Type 2 host, you will need to suspend or stop all of your VMs. Similarly the regularity with which you need to patch the client OS of your type 2 host means again you have to either suspend or stop all of your VMs. Lastly you will not have access to any enterprise features in a type 2 hypervisor, such even vMotion or Live Migration, which would mitigate the maintenance downtime. If you are looking for consistent uptime on your lab, a type 2 hypervisor probably isn't for you.

That said, the great things about Type 2 [hypervisors](/hypervisors/choosing-a-hypervisor/) is that they're very inexpensive, or even free, and very fast to setup You could probably run up a mini lab on the machine you're viewing this page on right now, assuming it is Intel/AMD based! Most homelab users probably started with a Type 2 hypervisor setup!

If you only plan to run a handful of VMs then why run to the complexity of a Type 1 setup, especially when a Type 2 is often more than adequate?

## Examples of vINCEPTION

- Joep Piscaer wrote an [article on his nested homelab here on openhomelab.org](/hypervisors/nested-lab-architecture/)
