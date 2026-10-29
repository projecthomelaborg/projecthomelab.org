---
title: "Hyper-converged Infrastructure"
description: "According to wikipedia, \"A hyper-converged infrastructure (aka hyperconvergence) is an IT infrastructure framework for integrating storage, networking and…"
sidebar:
  label: "Hyper-converged Infrastructure"
  order: 3
lastUpdated: 2020-07-31
wikiTitle: "Hyper-converged Infrastructure"
---

## Introduction

<figure class="wiki-figure" style="max-width:250px"><img src="/images/a/ac/HCI.png" alt="HCI" loading="lazy" decoding="async"></figure>

[According to wikipedia](https://en.wikipedia.org/wiki/Hyper-converged_infrastructure), *"A hyper-converged infrastructure (aka hyperconvergence) is an IT infrastructure framework for integrating storage, networking and virtualization computing in a data center. In a hyperconvergence environment all elements of the storage, compute and network components are optimized to work together on a single commodity appliance from a single vendor. The term is a neologism of Converged infrastructure."*

Translated into English(!), [Hyper-convergence](/storage/hyper-converged-infrastructure/) or [hyper-converged infrastructure](/storage/hyper-converged-infrastructure/) (HCI) is the current hotness in IT, and can reduce some of the costs and complexity involved in running your homelab!

## Pros and Cons

There are a great many benefits to running [Hyper-converged Infrastructure](/storage/hyper-converged-infrastructure/) (HCI) for small businesses, ROBO, etc, and these use cases can be directly equated to the requirements of many homelab users.

If you have sufficient budget and space to run multiple physical chassis in your lab, then perhaps HCI is an ideal solution for you as it comes with the following key benefits:

- No need to invest in a separate physical storage device, saving on budget, power/cooling, and noise.
- Using a mixture of flash and spindle drives, for typical homelab workloads you can expect to get excellent performance as most of the working set will live in flash (for which a reasonable rule of thumb is around 10% of your RAW spindle capacity).
- Many of the HCI solutions include full support for all of the latest storage enhancements to hypervisors, such as VSAN which supports both VAAI and VVols. This is ideal for helping you to learn these technologies early on in their product lifecycles.
- Assuming you have a reasonable number of bays in each physical host, HCI can potentially scale *mahoosively*. For example even using small towers with just 4 bays per host, would allow up to 36-40TB of raw space in a 3-node cluster using relatively inexpensive 4TB drives! Even assuming the use of 1x2TB drive and 1x 250GB flash device per host you still end up with 6.75TB of raw space which is more than enough to run a very decent homelab!
- Lastly one massive benefit if you like to keep your lab running 24/7, is the ability to take down individual nodes for maintenance, patching, etc, whilst your lab stays up! With most [local storage](/storage/storage-options/#local-storage), [whitebox](/storage/storage-options/#whitebox-storage), and even [vendor NAS](/storage/storage-options/#vendor-nas) solutions are going to be built on a single controller architecture, meaning to complete patching of your [storage software](/storage/storage-software/) you have to take down all of your lab VMs. For many of us this is a right pain in the rear, and use of HCI avoids this!

<figure class="wiki-figure" style="max-width:250px"><img src="/images/2/23/Vsan.png" alt="Vsan" loading="lazy" decoding="async"></figure>

HCI in a homelab is not without its drawbacks in the homelab environment of course:

- It is generally best practice to keep capacity across all nodes roughly the same, so assuming a minimum of 3 nodes in a cluster, as you scale capacity in future you will need to buy at least 3 drives at a time
- You will require chassis with sufficient drive bays to accommodate typically a minimum of two drives.
- To get decent scalability you probably wont want to use an ultra-SFF chassis, though people are already running VSAN on [Intel NUCs](/hardware/intel-nuc/). You just have to remember that with a maximum of two drives, if you want to increase storage capacity you either need to replace drives, or add nodes to your cluster.
- There are fewer options available for HCI and SDS than other solutions, however as the HCI market grows this can be expected to increase both through additional competitors entering the market, and incumbents introducing free tiers in the same fashion as Nutanix did with [Nutanix CE](/storage/) in recent times.
- Most HCI solutions require reasonably durable flash devices. On a consumer budget you are at a greater risk of needing to replace drives if you use your lab a lot. If you are reasonably conservative in workloads, and use decent consumer drives such as those tested and recommended in the [Open Homelab VSAN](/storage/vmware-vsan/) article, you can expect to get a decent lifetime out of your flash devices and this becomes a non-issue.
- HCI can be reasonably intensive on your network, so if possible, it is worthwhile considering the use of a dedicated NIC / port for your storage traffic.
- Some HCI solutions can require a minimum of 1-2 vCPUs and 2-8GB RAM from every host in your cluster. If you are using small hosts with minimal resources, you can end up dedicating significant capacity to your [storage software](/storage/storage-software/) and losing capacity for running VMs. Ideally for an HCI solution you would probably want to run a minimum of 32GB per host to counteract this.

## Costs

There are four key sources of costs for a homelab HCI solution. Those are:

1.  Compute nodes
    - These will vary by your requirements but could be anything from [Intel NUCs](/hardware/intel-nuc/), to whitebox hosts, and even full size vendor servers (e.g. [HP ML110](/hardware/), [HP MicroServer](/hardware/hp-microserver/) etc.
    - See our article on **[Compute](/start-here/building-a-homelab/#compute)** for more ideas on chassis and form factors!
    - Bear in mind that some HCI software will require a significant amount of resources especially RAM, so you may wish to consider a minimum of 16-32GB RAM per node. YMMV depending on software vendor.
2.  Drives (ideally identical per node, but depending on the [software solution](/storage/storage-software/) used, they don't have to be). These typically consist of a combination of one or more of the following:
    - Flash Tier(s) which could be made up of one or more of the following:
      - [NVMe](https://en.wikipedia.org/wiki/NVM_Express) / PCI flash device(s) - These can be pretty expensive, and should only really be considered if you want to do a true all flash [HCI](HCI) solution.
      - [M.2 flash device(s)](https://en.wikipedia.org/wiki/M.2) - These are significantly less expensive than most typical PCI flash devices, can be presented as an [NVMe](https://en.wikipedia.org/wiki/NVM_Express) or [mSATA](https://en.wikipedia.org/wiki/Serial_ATA#Mini-SATA_.28mSATA.29) and are an ideal solution if you are building a small form factor lab, such as an [Intel NUC](Intel_NUC) [nanolab](/start-here/nanolab/)! They can be found online for as little as £40 (\$60) for a 128GB device.
      - SSD(s) - At current prices, a 128-256GB flash device should be very inexpensive and combined with a 1-2TB spindle will be a cost effective and capacious solution! Prices start from as little as £30 (\$45) for a 128GB drive, but at these prices, you probably want to start with a larger 240GB drive as a minimum (£55 / \$80) to provide longer SSD life and a bit more future proofing.
    - Spindle Tier
      - Normally one or more 5400/7200 RPM drives is plenty for a homelab scenario, but the critical thing is working out how large your working set is and match your flash and spindle tiers. Many HCI solutions now support all flash, so this tier should be considered optional. Go for bang-for-buck here with 1-2TB maximum storage per drive, as you will have at least 3 drives in a 3-node HCI solution, which is tonnes of space for a homelab!
3.  Networking
    - If you want to use standard 1Gbps networking then this is of minimal cost, though you may want to buy a switch which can support VLANs as a minimum, for segregation of traffic.
    - If you want to use [10Gbps networking](/networking/), which is the general industry recommendation (though doesn't actually matter at a small scale), expect to get your credit card out!
4.  [Software](/storage/storage-software/) - This can vary anything from free to really expensive!
    - A number of popular HCI vendors provide a free community edition or non-production edition of their [software](/storage/storage-software/).
    - Other vendors such as [VMware Licensing](/licensing/vmware/) provide an NFR licensing method which will cost up to a couple of hundred dollars per year.
    - If you get involved with certain vendor advocacy programmes such as [vExpert](/licensing/vmware/) or [PernixPro](/storage/pernixdata/), you can be provided with free licenses for [software](/storage/storage-software/).

## Flash-to Spindle Ration and the Working Set Size

Assuming you are not using an all-flash HCI solution, to ensure your lab has the optimum performance, you will want the active data in your VMs to stay within the flash tier most of the time. If you cannot afford enough flash to do this, your lab will always be limited to the performance of its slowest component (i.e. your spindles).

As per [this article from VMware's Chief Storage Guru](http://cormachogan.com/2014/11/14/tips-for-a-successful-virtual-san-proof-of-concept-poc/), [Cormac Hogan](https://twitter.com/CormacJHogan) when designing for [VMware VSAN](VMware_VSAN):

*The design goal should be for your application’s working set to be mostly in cache. VMs running on VSAN will send all their writes to cache, and will always try to read from cache. A read cache miss will result in data being fetched from the magnetic disk layer, thus increasing latency. This is an important design goal, and VMware recommends flash be sized at 10% of consumed VMDK size (excluding any failures to tolerate settings/mirror copies), but you may want to use more depending on your workloads. This value represents a typical working set.*

*Keep in mind, that as you scale up by adding new larger magnetic disks for capacity, and add more virtual machine workloads, you will have to increase your flash capacity too, so plan ahead. It might be good to start with a larger flash size to begin with if you do plan on scaling your workloads on VSAN over time.*

## Use Cases

The main use cases for using a [Hyper-converged Infrastructure](/storage/hyper-converged-infrastructure/) are typically a combination of one or more of the the following:

- You know you have reasonably significant budget and compute costs, as you will be starting with a minimum of 3-4 compute hosts for your lab.
- You are probably going down this route to then save yourself having to spend more money on a NAS or dedicated storage appliance / whitebox server

## Example Disk Configuration and Bill of Materials

## Solutions

For a list of HCI [software](/storage/storage-software/) vendors and solutions which are appropriate for homelab use, see the **[Homelab Storage Software](/storage/storage-software/)** article.
