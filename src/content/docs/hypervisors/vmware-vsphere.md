---
title: "VMware vSphere"
description: "VMware vSphere is a virtualisation platform used by many organisations and often a favourite for Homelab setups. It is a suite of products including…"
sidebar:
  label: "VMware vSphere"
  order: 2
lastUpdated: 2020-07-31
wikiTitle: "VMware vSphere"
---

## Introduction

VMware vSphere is a virtualisation platform used by many organisations and often a favourite for Homelab setups. It is a suite of products including (amongst other features) a hypervisor (ESXi), management platform (vCenter), monitoring, planning, and automating components.

## Pros and Cons

### Pro

vSphere offers enterprise grade features and centralized management for licensed editions through vCenter Server. vCenter is offered for both Windows and through the vCenter Server Appliance (VCSA), which is deployed via an OVA template. High Availability built into hypervisor. Workload migration or host maintenance is seamless by leveraging feature sets such as vMotion or Storage vMotion. Resource balancing is built-in through Distributed Resource Scheduler (DRS) which relieves the management burdens of balancing cluster resources. vSphere offers integration with all major storage vendors for performance benefits. (This includes popular homelab options such as Synology.) Additionally vSphere ships with a software-defined storage solution built in called Virtual SAN (VSAN), reducing the need to purchase a SAN for a home lab. Starting with vSphere 6.0U2 an HTML5 web host client is built in further easing single host management.

vSphere is available in a free edition with limited, non-clustered feature sets.

### Cons

Licensed editions (evaluation, VMUG Advantage, etc) are needed for clustering and advanced feature sets.

- Multi-host management and advanced features can be expensive (but check out [Managing your VMware vSphere Homelab without vCenter](/management/vsphere-without-vcenter/) for tips).

## Costs

vSphere (ESXi) costs vary between licensing tier: -Free ESXi -vSphere Standard -vSphere Enterprise (End of Availability announced for 6/28/2016) -vSphere Enterprise Plus (See [VMware Licensing](/licensing/vmware/) for full licensing and feature details.)

VMware offers free 60-day evaluation licensing for vSphere. The trial includes all Enterprise Plus feature sets to meet proof of concept testing, VMware certification training, or home lab use. Note, evaluation licensing is not for production use and does not include support.

Home-lab or testing licensing is available on a 365x evaluation through the [VMUG Advantage membership](https://www.vmug.com/evalexperience) for \$200 per user per year. \*Corporate discounts are available. Products included with the VMUG Advantage membership are:

`   VMware vCenter Server Standard for vSphere 6`  
`   VMware vSphere® with Operations Management™ Enterprise Plus`  
`   VMware vCloud Suite® Standard`  
`   VMware vRealize Operations™`  
`   VMware vRealize Log Insight™`  
`   VMware vRealize Operations for Horizon®`  
`   VMware Horizon® Advanced Edition`  
`   VMware Virtual SAN™`

## Use Cases

vSphere is suitable where a Type 1 Hypervisor is required for deploying direct to hardware. It also works in a nested hypervisor environment. Many HomeLabs are running vSphere because their owners are IT Pro's who use the platform in their day jobs and the HomeLab is used for learning and research purposes.

Expanding one's skills or testing knowledge in lab/non-production environment. Motivating factors include studying to master certification exams, such as the VMware Certified Professional (VCP), or other non-VMware exams where virtualization offers benefit by running multiple machines on single desktop or laptop. A vSphere lab could also facilitate testbed for practicing a migration scenarios prior to deploying in a production environment.

## External Links

| Title                                                                                      | Description                     |
|--------------------------------------------------------------------------------------------|---------------------------------|
| [<http://www.vmware.com/uk/products/vsphere/>](http://www.vmware.com/uk/products/vsphere/) | The VMware vSphere Product Page |

External Links
