---
title: "Nested lab architecture"
description: "A nested lab utilizes the 'nested virtualization' concept. Let me explain"
sidebar:
  label: "Nested lab architecture"
  order: 8
lastUpdated: 2020-07-31
wikiTitle: "Nested lab architecture"
---

A nested lab utilizes the 'nested virtualization' concept. Let me explain

1.  The first layer of a nested lab architecture is the physical layer. It's the server(s) that make up your home lab. It has a hypervisor installed. For proper nested virtualization, I strongly recommend ESXi. Even the free version can do nested virtualization, but having a fully licensed lab through [VMUG Advantage](https://openhomelab.org/index.php?title=VMware_Licensing) is recommended. The hardware and hypervisor are installed once, and serve as a stable base to work with. You don't horse around with these layers as they provide the infrastructure and resources for your lab, they're not stuff 'to play around with' (at least not after the initial joy of configuring these two after buying a new home lab).
2.  This 'production'-like layer includes other stuff like a vCenter Appliance, a NAS, DHCP/DNS server and more. Again, these provide the infrastructure for your lab environment, but you don't play around with this stuff. I run a vCenter Appliance, a pfSense networking VM (for routing, firewalling, NAT, DHCP, DNS and more) and a Windows VM as a NAS.

## Difference between a production workload and a lab workload

I run ESXi on my physical box, and I have various VMs running to provide the lab infra. I don't touch these components. These are the production workloads that provide me with a working lab environment.  
I also have various nested ESXi and VCSA VMs running. These are specific lab workloads to test out specific stuff, like a new vSphere beta version.  
I could've installed the vSphere beta on the physical box, but that compromises other labs I might have running due to bugs, stability issues, etc.  
See how I distinguish between 'production' and 'lab' workloads (even if they're the same product, like ESXi or vCenter)?  

## A Windows VM as a NAS

Yes, I run a Windows VM as a NAS (and it doubles as a Data Copy Management workstation). Why? Because it is brilliant in how I operate my lab. Imagine the following scenario:  
*I have some dedicated lab time during a weekend, and I get cracking. I want to test out the new vSphere beta, so I go to the beta download site and download a bunch of ISOs and OVAs on my laptop over a relatively slow WiFi connection. I then copy these over to my NFS NAS so I can access them from within ESXi to build a nested lab.*  
  
See how this puts distance (in terms of physical closeness, but also in terms of connectivity: bandwidth and latency) between me and my lab? This is why I've built a Windows NAS VM (presenting the same folders on the NAS via SMB to my home network and via NFS to ESXi). This is how I work:  
*I have some dedicated lab time during a weekend, and I get cracking. I want to test out the new vSphere beta, so I RDP into my Windows NAS VM, fire up a browser, go to the beta download site and download a bunch of ISOs and OVAs to the default download folder, which is shared via NFS to ESXi. I can immediately start building my nested lab.*
