---
title: "Storage options"
description: "There are so many ways to skin a cat when it comes to homelabbing, and one of the areas which often causes the most discussion and indecision is often…"
sidebar:
  label: "Storage options"
  order: 1
lastUpdated: 2020-07-31
wikiTitle: "Storage"
---

## Introduction

<figure class="wiki-figure" style="max-width:125px"><img src="/images/5/5c/Storageicon.png" alt="You may want an image here!" loading="lazy" decoding="async"><figcaption>You may want an image here!</figcaption></figure>

There are so many ways to skin a cat when it comes to homelabbing, and one of the areas which often causes the most discussion and indecision is often what storage to use. The main reason for this is quite simply that there are *so many choices*! On top of that, if you don't deal with storage on a day-to-day basis, there can be a bewildering array of [jargon and terms](/community/jargon-buster/) to get your head around before you start to configure it.

One thing you can be reasonably sure of, is that actually most of the options are perfectly valid in their own ways, and you probably can't make a bad decision, after all you are not looking for Tier 0 production performance and resilience here, it's a homelab! Also, even if you change your mind, it's usually possible to reuse drives in a different configuration if your original storage design no longer meets your requirements.

The main questions you need to ask yourself when designing your homelab storage are:

- How much storage do I need?
- How fast does my storage need to be?
- What will my storage growth rate likely be over the next 1-3 years?
- Will I storage any non-lab data on there (e.g. photos, music, CCTV footage, etc)?
- How do I protect my data (if at all)?
- Do I need VAAI support?
- Do I care about storage protocol, and if so, why?
- What is my budget?!
- Do I want something which can do native replication, or am I happy to do this at a software / hypervisor level?
- How close to a real environment do I want this to look?

## Storage Options

There are a number of key alternative storage solutions available to you in your homelab, some of which depend on your compute choices, and some of which do not. They are listed below, from roughly cheapest to most expensive (depending on your drive choices and number of nodes!):

1.  [Local drives](/storage/storage-options/#local-storage) in your [ESXi](/hypervisors/vmware-vsphere/) or [vInception](/hypervisors/vinception/)/vTARDIS host
2.  [Whitebox storage](/storage/storage-options/#whitebox-storage), typically running on a dedicated physical host (a perfect example of which would be an [HP MicroServer](/hardware/hp-microserver/)), or in some cases another VM! This typically runs open source storage software such as FreeNAS or OpenFiler.
3.  [Software Defined Storage (SDS)](/storage/storage-options/#software-defined-storage-and-hci) platform, such as [VMware VSAN](/storage/vmware-vsan/) or [Nutanix CE](/storage/)
4.  [Vendor NAS](/storage/storage-options/#vendor-nas), e.g. Synology, QNAP, ReadyNAS, etc.
5.  [Actual vendor array](/storage/storage-options/#vendor-array) (aka the eBay special)
6.  [Server Side Caching](/storage/storage-options/#server-side-caching)
7.  [Cloud Storage](/storage/storage-options/#cloud-storage)

Vendor NAS and Software Defined Storage will vary in terms of which is most expensive, depending on which drive types you buy, how many bays you have in your NAS, and which flash drive types you use (if any).

### Local Storage

This is the simplest, least expensive option, and can start from something as simple as running a lab from your local laptop drive on a 5400 RPM SATA drive, all the way to doing nested VSAN in a single host, with a load of flash drives for optimum performance.

This kind of configuration is often associated with a vInception-style setup, such as when you install a [Type 2 Hypervisor](https://en.wikipedia.org/wiki/Hypervisor#Classification) onto a Windows, Linux or Mac operating system, then run VMs inside that, some of which may even be hypervisors themselves!

Taking this a step further you could even install a [Type 1 Hypervisor](https://en.wikipedia.org/wiki/Hypervisor#Classification) such as ESXi / Hyper-V onto the physical server and run as many VMs as you can fit. Alternatively if you want to test out running multiple datastores over iSCSI or NFS, then you could even install a VM on top of your physical host, and have that present out datastores / LUNs to your other VMs using some [whitebox storage software](Storage#Whitebox_Storage). It will definitely have a performance hit, but if logical testing is all you want to do, then it is perfectly acceptable and will run well with the addition of some flash.

<figure class="wiki-figure" style="max-width:250px"><img src="/images/6/69/SharkoonQuickPort4Bay.jpg" alt="bortder" loading="lazy" decoding="async"><figcaption>bortder</figcaption></figure>

The key benefits to using local storage are:

- Simplicity - You don't need to use any storage protocols, you don't need any additional network configuration, etc. You simply start carving VMDKs from your local drives. Couldn't be easier!
- You are free to buy whatever case and compute you like, so can choose how big you want to scale your storage node, from a single drive, up to potentially a dozen or more in a single chassis!
- Cost; this is the lowest cost solution, as you have to buy the drives anyway, so you have virtually zero further overhead.

The main drawbacks are:

- Although cost is cheap, bear in mind that you are limited to the number of bays in the single host. It is possible at add additional disk bays depending on your physical chassis, for example Icy Dock have a wide range of add-on SATA disk cages which typically fit into one or more 3.5" or 5.25" slots and allow you to add more [2.5"](http://www.icydock.com/category.php?id=117) or [3.5"](http://www.icydock.com/category.php?id=113) drives. Other vendors are of course available, including for example the [Sharkoon Quickport](https://www.sharkoon.com/product/1686/12640#desc) line! :)
- To provide any decent resilience or scale significantly beyond your motherboard's maximum number of SATA slots, or even protect yourself from motherboard failures with something you can easily replace, you may require an additional SATA array card. These can be reasonably expensive, but decent enterprise ones such as [Dell PERC](http://www.dell.com/learn/uk/en/ukbsdt1/campaigns/dell-raid-controllers) (which are usually rebranded [Adaptec](https://www.adaptec.com/en-us/support/raid/) cards anyway) can even be purchased on eBay and retrofitted in a PCI slot. They typically come in 4/8/16 port configurations, but remember that the secret is to have as much cache in them as possible if you want to have decent performance.
- Lack of flexibility and scalability; both are limited to whatever you can achieve in your single host. That said, it is still possible to add further physical hosts to your cluster as long as you then accept the single point of failure of your primary host, and you have some method for sharing that storage (e.g. by installing some storage software either in the OS or in a VM on that host. Which leads us neatly onto [whitebox storage](/storage/storage-options/#whitebox-storage).
- Lastly, if you like to keep your lab running 24/7 you will need to take your lab down to patch and reboot the underlying OS, which is obviously a bit of a pain. No such thing as non-disruptive upgrades on local storage!

### Whitebox Storage

At this point, things start getting interesting, and closer to the type of configuration you are likely to see in the real world!

Using [storage software](/storage/storage-software/) installed into on either a virtual or physical server, you can present NFS or iSCSI LUNs / datastores to your hypervisor hosts, and even object storage to your virtual machines. Once this [shared storage](/storage/storage-software/) is in place, it opens up a whole load of new testing and availability possibilities, including VMware vMotion and Microsoft Live Migration.

<figure class="wiki-figure" style="max-width:200px"><img src="/images/4/49/Whitebox.jpg" alt="Whitebox" loading="lazy" decoding="async"></figure>

One of the biggest benefits to running whitebox storage is that it doesn't cost you a huge amount over just doing local storage, especially if you are using an inexpensive storage box (options such as [HP MicroServers](/hardware/hp-microserver/) are absolutely ideal for this, as they can hold at least 4 and up to 8 drives when you add a 5.25" disk expansion unit. However, any vendor or whitebox server with a handful of bays will work just fine.

Once you have your kit and your drives, the next key thing is to simply choose and install your software. Here you have a mahoosive range of software options. We have listed a number of them on the **[Homelab Storage Software](/storage/storage-software/)** page.

Another key benefit of whitebox storage (assuming you are using VMware vSphere as a hypervisor) is the ability to take advantage of VAAI. Many of the storage software vendors including, FreeNAS, NexentaStor, etc support it. VAAI has a load of very useful features (known as primitives) which will help your lab to fly, the most useful of which is the ability to offload cloning of VMs to your storage, and as such clone VMs from templates or other VMs in a few seconds!

The main drawback to running a custom storage software stack is that it is in direct contravention off the [KISS principle](/start-here/keep-it-simple/) of reducing complexity. You may end up spending a significant amount of time managing your storage software, when you could be doing other things in your lab. Nothing wrong with this of course, if you want to learn more about that storage software, and some of the vendor trialware / free restricted software (e.g. EMC vVNX, NetApp Data ONTAP sim, etc) can be absolutely ideal for this.

Similarly to the [local storage](/storage/storage-options/#local-storage) method, downtime will be required to all of your lab VMs every time you need to patch the storage host or storage software.

Finally, because this is basically just adding some more intelligent software over the top of your physical kit, most of the same benefits and drawbacks as [Local Storage](/storage/storage-options/#local-storage), with a lot more scalability and flexibility, but an equal helping of complexity to go with it!

### Software Defined Storage and HCI

There are two key categories of software defined storage which you could feasibly use in your homelab, though in reality, you are most likely to use the latter.

- Scale-Out Software Defined Storage
- Hyper-converged Infrastructure

A number of Software Defined Storage and HCI solutions are listed on the **[Homelab Storage Software](/storage/storage-software/)** page for further reading.

#### Scale-Out Software Defined Storage

Unless you have a seriously impressive budget, standard SDS solutions are likely to be something you play with in the lab, more than something which you run your lab on. The main reason for this is that it would require you to run multiple physical nodes dedicated to storage only, which most of us don't / cant afford to do. In an enterprise solution SDS is awesome as it allows you to scale as you grow, and make incremental hardware investments as you require additional capacity. Unless you are running many terabytes of data in your homelab, you are simply not going to need the scalability which SDS afford you.

The one exception to this is probably object storage, where most object storage software is based on scale-out by default, and as such would be appropriate in a homelab environment, even if in reality you actually ended up virtualising it anyway.

#### [Hyper-converged Infrastructure](/storage/hyper-converged-infrastructure/)

For more detailed information, see the **[Hyper-converged Infrastructure](/storage/hyper-converged-infrastructure/)** article.

<figure class="wiki-figure" style="max-width:350px"><img src="/images/2/23/Vsan.png" alt="Vsan" loading="lazy" decoding="async"></figure>

There are a great many benefits to running [Hyper-converged Infrastructure](/storage/hyper-converged-infrastructure/) (HCI) for small businesses, ROBO, etc, and these use cases can be directly equated to the requirements of many homelab users.

If you have sufficient budget and space to run multiple physical chassis in your lab, then perhaps HCI is an ideal solution for you as it comes with the following key benefits:

- No need to invest in a separate physical storage device, saving on budget, power/cooling, and noise.
- Using a mixture of flash and spindle drives, for typical homelab workloads you can expect to get excellent performance as most of the working set will live in flash (for which a reasonable rule of thumb is around 10% of your RAW spindle capacity).
- Many of the HCI solutions include full support for all of the latest storage enhancements to hypervisors, such as VSAN which supports both VAAI and VVols. This is ideal for helping you to learn these technologies early on in their product lifecycles.
- Assuming you have a reasonable number of bays in each physical host, HCI can potentially scale *mahoosively*. For example even using small towers with just 4 bays per host, would allow up to 36-40TB of raw space in a 3-node cluster using relatively inexpensive 4TB drives! Even assuming the use of 1x2TB drive and 1x 250GB flash device per host you still end up with 6.75TB of raw space which is more than enough to run a very decent homelab!
- Lastly one massive benefit if you like to keep your lab running 24/7, is the ability to take down individual nodes for maintenance, patching, etc, whilst your lab stays up! With most [local storage](/storage/storage-options/#local-storage), [whitebox](/storage/storage-options/#whitebox-storage), and even [vendor NAS](/storage/storage-options/#vendor-nas) solutions are going to be built on a single controller architecture, meaning to complete patching of your storage software you have to take down all of your lab VMs. For many of us this is a right pain in the rear, and use of HCI avoids this!

HCI in a homelab is not without its drawbacks in the homelab environment of course:

- It is generally best practice to keep capacity across all nodes roughly the same, so assuming a minimum of 3 nodes in a cluster, as you scale capacity in future you will need to buy at least 3 drives at a time
- You will require chassis with sufficient drive bays to accommodate typically a minimum of two drives.
- To get decent scalability you probably wont want to use an ultra-SFF chassis, though people are already running VSAN on [Intel NUCs](/hardware/intel-nuc/). You just have to remember that with a maximum of two drives, if you want to increase storage capacity you either need to replace drives, or add nodes to your cluster.
- There are fewer options available for HCI and SDS than other solutions, however as the HCI market grows this can be expected to increase both through additional competitors entering the market, and incumbents introducing free tiers in the same fashion as Nutanix did with [Nutanix CE](/storage/) in recent times.
- Most HCI solutions require reasonably durable flash devices. On a consumer budget you are at a greater risk of needing to replace drives if you use your lab a lot. If you are reasonably conservative in workloads, and use decent consumer drives such as those tested and recommended in the [Open Homelab VSAN](/storage/vmware-vsan/) article, you can expect to get a decent lifetime out of your flash devices and this becomes a non-issue.
- HCI can be reasonably intensive on your network, so if possible, it is worthwhile considering the use of a dedicated NIC / port for your storage traffic.
- Some HCI solutions can require a minimum of 1-2 vCPUs and 2-8GB RAM from every host in your cluster. If you are using small hosts with minimal resources, you can end up dedicating significant capacity to your storage software and losing capacity for running VMs. Ideally for an HCI solution you would probably want to run a minimum of 32GB per host to counteract this.

### Vendor NAS

The current most popular vendor in this category is probably Synology, but other popular vendors include QNAP, ReadyNAS, etc. One of the main reasons for using this method (assuming you have the budget), is [KISS](/start-here/keep-it-simple/). NAS devices are generally very simple to setup and maintain, so minimal feeding and watering required.

Contrary to popular belief, it is actually possible to get started in the NAS market for a relatively low cost, depending on your requirements, and how much capacity you require.

<figure class="wiki-figure" style="max-width:250px"><img src="/images/5/54/Ds415plus.jpg" alt="Ds415plus" loading="lazy" decoding="async"></figure>

The key benefits to using a vendor NAS include:

- Typically very quick and easy to setup. Plug in the drives, run a wizard, and you can tart presenting NFS shares or iSCSI LUNs within a few minutes.
- Easy to support as any major issues can be escalated to the manufacturer
- Generally very stable, meaning that you spend more time working in your lab than fixing storage issues

The main drawbacks to vendor based NAS can be:

- Cost, they are not the cheapest devices on the planet, especially compared to local storage where you have bought the drives anyway!
- Limited quantity of drive bays. Most NAS devices are 2-5 bays max. The more bays you want, the more the price will go up too!
- Most vendor NAS boxes are single controller, and as such you will typically need to take down all of your lab VMs every time you need to do a software or firmware update of your vendor box. Many vendors release patches on a monthly basis, so you can choose to either take down your lab regularly, or run with known security holes for periods.

### Vendor Array

Not for the faint hearted, a full on vendor array is rare in the wild, but they are out there! Commonly procured from eBay, they are also occasionally provided by vendors for PoCs or businesses throwing out their old kit.

If you are lucky enough to get your hands on one of these, and have the space to rack it where the noise won't drive you mad, then you can look forward to personal service from your account manager at the power company as money starts leeching from your account to theirs in huge quantities! A typical enterprise array will drain around 200-300w per shelf, and another 300-600w for the head units! It's no wonder we keep having to upgrade power and cooling capacity to data centres!

The biggest benefits are:

- Very similar to a real enterprise environment, so excellent for learning
- Devices are usually dual controller, so for 24/7 labs, very good uptime can be maintained
- Usually a rich feature set and broad set of [data services](/storage/storage-options/#data-services)

Biggest drawbacks are:

- Noise
- Vibration (can be as annoying as noise if you have it sitting in the loft or similar)
- Power consumption (ouch!)
- May even require specific power connections or three phase power, and could exceed your breaker limits on your consumer unit
- Cost of spares if anything fails
- Usually requires that you have an actual rack to house it in
- Usually requires that it is run 24/7 - enterprise arrays don't often take kindly to being turned off, especially if they are a bit older

Using a real vendor array is usually not for the faint hearted, but there are plenty of people out there using them today! Ideally if you have managed to get hold of some real vendor enterprise storage to run in your homelab, you would be best off buying a big box of chocolates for your boss or DC manager, and asking if your company can colo it for you for free in a comms room or data centre! If not, you better hope you have a well ventilated basement or garage with space for a rack!

### Server Side Caching

Although not strictly a standalone storage technology, server side caching can be used to both massively boost performance in your homelab, and make sure that any existing investments you have in (for example) your whitebox or vendor NAS / array is maximised, and you get the most longevity out of your existing kit.

Server side caches typically come in two flavours, read only and read/write, the former of which is becoming more and more rare.

Some example server side caching vendors are:

- [PernixData](/storage/pernixdata/)
- [Intel Cache Acceleration Software](/storage/)
- VMware vSphere Flash Read Cache (vFRC)

The biggest benefits with server side caching in the homelab are

- You simply provision a single SSD in each physical compute host in your lab, and you will immediately get some significant performance benefits. No need to do all-flash at your shared storage (or even use up expensive NAS slots with SSDs), just fill that full of a few spindles for plenty of capacity.
- Due to the fact that you are unlikely to be running all of your homelab VMs are full utilisation all of the time, the VM storage working set it likely to revolve mostly around whatever you are testing at the time, so you don't have to have massive SSDs to achieve generally decent performance.
- You can retro-fit server-side caching to an existing lab very easily with the addition of an SSD to each host, and a bit of software!

Disadvantages include:

- Missed read cache hits. 90% or more of your IOs may hit the server side cache and have sub millisecond latencies, but anything which doesn't will be performance limited by the maximum latency of your spindle-based storage. In the real world this can be a significant issue for business critical applications, but in the homelab this is not such a big deal! The same applies to any form of cachine or even scale-out distributed multi-tier storage as well, if your working set exceeds your flash size.
- You typically require a minimum of 2-3 compute nodes to support server side caching, each of which will require an SSD, so this is not a low-budget option.

### Cloud Storage

We go into this in more depth in the [Cloud Labs](/cloud/cloud-homelabs/) section of the site, but cloud-based storage is useful for a multitude of functions, from primary storage for a cloud lab, to an inexpensive and flexible off-site backup target for your backup and replication solution.

**NEEDS EXPANSION**

## Flash vs Spindle

<figure class="wiki-figure" style="max-width:200px"><img src="/images/f/f8/Flashmeme.jpg" alt="Flashmeme" loading="lazy" decoding="async"></figure>

In this day and age, the discussion over whether to use flash is very nearly over in the enterprise, and this holds even more true in the homelab. The cost of flash has reduced so significantly, and drive capacities have grown so significant, there is very little reason to use spindle-based storage anymore. The latter should only really be used for providing you with capacity for VMs or data, as opposed to running workloads. The performance you get out of using flash in the homelab will provide numerous benefits, including, but not limited to:

- Your VMs boot far quicker, so this gives you more reason to power everything off when not in use, saving you money and noise.
- Flash drives don't make any noise, so have a direct impact on WAF! Of course, you still need to cool them, so some moving parts will be required somewhere!
- You can clone VMs from templates in seconds, and spin up a new environment in a matter of minutes, meaning you spend more time labbing, and less time staring at progress bars.
- Traditionally storage has commonly been the bottleneck to performance. By going all flash, even with relatively slow CPUs, everything will feel snappier and your bottleneck then moves to your compute!

Of course if you already have a homelab in place and you don't have the budget to flashify it, there are other options. For example, it is also possible to emulate an SSD if you are using VMware vSphere as your hypervisor. This is really useful if you want to do things like test our VMware VSAN but you have no or an insufficient quantity of flash-based drives. William Lam covers this step by step in the following articles:

- [Emulating an SSD Virtual Disk in a VMware Environment](http://www.virtuallyghetto.com/2013/07/emulating-ssd-virtual-disk-in-vmware.html)
- [Quick Tip – Marking an HDD as SSD or SSD as HDD in ESXi](http://www.virtuallyghetto.com/2013/08/quick-tip-marking-hdd-as-ssd-or-ssd-as.html)

## Capacity

Needless to say, the old adage when it comes to storage you will inevitably find that you never have enough! It is perfectly possible to run a homelab in around 500GB of usable capacity, with which you can indeed get a lot done, but it is recommended that if you use your lab on a semi-regular basis or more, you procure at least 1TiB of storage for your lab. It doesn't all have to be blazing fast of course, but having a little flash in the mix will improve things.

Don't forget the basics of storage when it comes to capacity design:

- Converting a 1000 GB drive (storage industry typical lie of selling things in [Base 10](https://en.wikipedia.org/wiki/Decimal)), into real capacity ([Base 2](https://en.wikipedia.org/wiki/Binary_number)), you only get around 93% of your procured capacity.
- You do not want to use more than around 85-90% of your formatted / usable capacity as you need to avoid running the risk of running out altogether, and leave some space for things like snapshots, vswp files, etc.
- In a homelab you are not running production systems, so could use thin provisioning with "thin on thin", i.e. thin at the storage end, and thin at the virtual machine disk file, however this can be a nightmare to manage, so you probably want to pick "thin on thick", or "thick on thin" to simplify things. If you are running a system which supports [VAAI and UNMAP](http://cormachogan.com/2015/05/07/vsphere-6-0-storage-features-part-8-vaai-unmap-changes/), then as long as you use thin VMDK files, then space will be reclaimed automatically regardless of thick or thin at the array end.

## Mixing your Homelab and Personal Data Silos

Unless you are on a very tight budget, one best practice would be to avoid storing any critical personal data on your homelab storage, or at the very minimum setup some form of logical separation, with different permissions. This will prevent many potential issues such as a test script accidentally deleting your data, a security vulnerability being exploited in you test lab allowing someone to gain access to your personal data, etc. Similarly it is a very sensible idea to backup your personal data and keep a copy on a secure system which would not be impacted in the event of an outage or compromise of your homelab storage.

One (reasonably extreme) example of this comes from Alex Galbraith of the homelab project, who has 4x Synology devices:

- Primary Site (Home!)
  - Primary VM storage (Synology DS412+ with 4x 240GB Sandisk SSDs)
  - Primary Personal storage (Synology DS412+ with 4x 2TB WD Red Drives)
  - Backup storage (Synology DS413j with 4x 3TB WD Red Drives) - Completely different set of accounts and passwords to the primary storage devices
- Remote Site (Family Members home)
  - Remote Backup storage (Synology DS215j+ with 2x 3TB WD Red Drives) replicating key volumes from the DS413j

### Principles and Best Practices

Now this example is perhaps a bit OTT, but the principles can be applied on almost any budget:

- Segregation of VM and personal storage
- Backup key data and VMs
- Replicate or copy your backups elsewhere in case of fire/theft/lightning strike, etc

## Data Services

Enterprise storage typically provides many data services which can be integrated into your solutions. In a homelab environment, some of these can perhaps be somewhat overkill, but others can be very useful indeed. Some of the more useful are as follows:

- Thin Provisioning
- Replication
  - Synchronous / Asynchronous Replication (Local and Remote)
- Integrated snapshot and backup
  - Application and crash consistent
- Consistency groups for snapshots and replication
- Storage level backup
- VVOL support
- QoS
- Storage tiering
  - Manual and automatic
- Support for object, file and block storage
- Storage pooling and online expansion
- Thin clones
- Encryption

**NEEDS EXPANSION**

## Costs

XYZ

***Page still under construction by Alex***
