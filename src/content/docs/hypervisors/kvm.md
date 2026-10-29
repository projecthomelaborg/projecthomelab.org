---
title: "KVM"
description: "Kernel-based Virtual Machine (KVM), is a hypervisor built into the Linux kernel. KVM can run a wide range of GNU/Linux, Windows and other operating…"
sidebar:
  label: "KVM"
  order: 4
lastUpdated: 2020-07-31
wikiTitle: "KVM"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

## **Introduction**

  
Kernel-based Virtual Machine (KVM), is a hypervisor built into the Linux kernel. KVM can run a wide range of GNU/Linux, Windows and other operating systems. For more information check out [Guest Support Status](http://www.linux-kvm.org/page/Guest_Support_Status). KVM is similar to Xen with couple of important differences. First, since KVM is part of the Linux kernel it uses the regular Linux scheduler and memory management, resulting in it being smaller and more featureful. On the other hand, KVM relies on a processor that supports x86 hardware virtual machine (HVM) CPU extensions, whereas Xen allows running modified operating systems on non-HVM x86 processors using paravirtualization. HVM is also referred to as hardware-assisted virtualization or native virtualization.  
  
== **Check for KVM Support** ==  
***NOTE:*** Before proceeding you should ensure that virtualization is enabled in your BIOS. This process will vary slightly depending on your system. Refer to your system documentation or perform a web search for specific steps on enabling virtualization in your system BIOS.  
  
As mentioned previously, KVM requires the virtual machine (VM) host processor has hardware virtualization support. For Intel processors, this is VT-x, and AMD-V for AMD. Two methods can be used to verify this capability. The first is with the `lscpu` command.  
  
`$ lscpu`  
  
If your machine supports hardware virtualization it will be identified in the output. Since `lscpu` gathers information from sysfs and `/proc/cpuinfo`, another approach is to grep the `/proc/cpuinfo` file as follows  
  
`$egrep 'vmx|svm|0xc0f' /proc/cpuinfo`  
  
If nothing is displayed then your CPU does not support hardware virtualization.  
  
== **Host Setup** ==  
  
  
== **Guest Setup** ==
