---
title: "AutoLab"
description: "== AutoLab Overview == AutoLab is a package of build automation for your nested vSphere lab. Its main aim is to make your lab disposable, so you have no…"
sidebar:
  label: "AutoLab"
  order: 7
lastUpdated: 2020-07-31
wikiTitle: "AutoLab"
---

<figure class="wiki-figure" style="max-width:400px"><img src="/images/6/66/AutoLab_color_leftside_Cropped.jpg" alt="AutoLab color leftside Cropped" loading="lazy" decoding="async"></figure>

== AutoLab Overview == [AutoLab](http://www.labguides.com/autolab) is a package of build automation for your nested vSphere lab.  
Its main aim is to make your lab disposable, so you have no fear of breaking a carefully crafted home lab by trying something silly or misconfiguring a feature.  
AutoLab is deployed on top of your existing VMware virtualization platform, Workstation, Fusion, Player or ESXi. The AutoLab is just a collection of VMs  
On the development system the basic AutoLab can be rebuilt in under two hours with minimal manual intervention.  
Your first AutoLab build will take longer, finding all the parts & putting them in the right place can be confusing.

## AutoLab Requirements

You will need a reasonably beefy physical machine to deplopy AutoLab. AutoLab is developed on a Quad Core i7 with 32GB of RAM, a 240GB SSD and a 2TB hard disk. An SSD is important if you don't want to wait all day for VMs to boot and at least 16GB of RAM is required, more is always better.  
While AutoLab is running on your physical machine, don;t plan on doing anything else with that machine. AutoLab should chew up all your RAM so the lab runs as fast as possible. I always use a second laptop to read emails & documentation while I'm AutoLabing.  
Autolab can run on a PC, a MAC, or on [Ravello](/cloud/cloud-homelabs/#ravello) or [Bare Metal Cloud](/cloud/cloud-homelabs/#bare-metal-cloud), these options allow you to rent hardware rather than having to buy your own lab machine.  
You will also need the installers for the versions of vSphere you want to test as well as a Windows Server Trial ISO. There are a few more pieces of licensed software you will need, everything is outlined in the deployment guide which is on the AutoLab site. Autolab has it's own support forum on this [sub-Reddit](http://reddit.com/r/AutoLab/)  
== Inside AutoLab == The AutoLab VMs live inside their own, private network. Isolated from your normal lab network. Once your AutoLab is built it will contain a few VMs:

- FreeNAS shard storage and build server
- FreeSCO router
- Windows Domain Controller with SQL Express
- Windows vCenter
- Up to three ESXi servers

If you use all of the automation then the ESXi servers will form an HA & DRS cluster with both NFS and iSCSI datastores provided by the FreeNAS VM. There is even a TTYLinux VM that can run inside the cluster. If you provide some Windows ISOs then some nested VMs can be created too.  
== More than vSphere == In addition to the basic vSphere cluster the following additional products are supported with AutoLab:

- VMware View
- [Veeam Backup & Replication](/management/#veeam-backup-&-replication)
- [Veeam One](/management/#veeam-one)
