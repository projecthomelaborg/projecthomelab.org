---
title: "Building a Homelab"
description: "This section of the site deals with the multitude of options you have available to you when you come to design, procure and build your homelab."
sidebar:
  label: "Building a Homelab"
  order: 3
lastUpdated: 2025-01-31
wikiTitle: "Building a Homelab"
---

## Introduction

This section of the site deals with the multitude of options you have available to you when you come to design, procure and build your homelab.

Once you have [gathered your requirements](/start-here/requirements/), the next step wil most likely to be decide on [which category of homelab suits you best](/start-here/homelab-categories/), and subsequently you can follow the links below to find out information about your different infrastructure options.

## Compute

Assuming you don't go for a [Cloud Lab](/cloud/cloud-homelabs/), then for your compute layer, you have two very simple options; build or buy.

Much like when procuring a PC, if you choose to buy from a known (or unknown!) vendor, you may be able to get a decent price for the overall solution, though the level of flexibility after you have unwrapped it may be limited. The biggest advantage to building your own is that you can choose every single component which goes into your hosts, individually. This can of course be a pain if you want to make sure you have every component fully supported by your favourite hypervisor and version, but then again with great power comes great complexity! :)

### Vendor Style

Here you have three very simple options. Rack mount, Tower, or Small form factor. There is one other bonus option which is Laptop/Notebook, and if you need this, you will most definitely know it (for example SEs and Road Warriors love to carry a demo lab with them at all times!

<table>
<caption>Popular / Recommended Vendor Servers</caption>
<thead>
<tr>
<th><p>Small Form Factor &amp; Barebones PCs</p></th>
<th><p>Vendor Towers</p></th>
<th><p>Vendor Rack Servers</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><ul>
<li><a href="/hardware/intel-nuc/">Intel NUC</a>
<ul>
<li><a href="/hardware/intel-nuc6i7kyk/">Intel NUC6I7KYK</a></li>
</ul></li>
<li><a href="/hardware/">Gigabyte BRIX</a></li>
<li>Shuttle XH61V</li>
<li><a href="/hardware/shuttle-xpc-sz170-r8-v2/">Shuttle XPC SZ170 R8 V2</a></li>
<li>ASRock C2750D4I</li>
<li><a href="/hardware/supermicro-xeon-d-1500/">Supermicro Xeon D-1500</a></li>
</ul></td>
<td><ul>
<li><a href="/hardware/hp-microserver/">HP MicroServer</a></li>
<li><a href="/hardware/">HP ML110</a></li>
<li>HP ML305</li>
<li>HP ML310</li>
<li><a href="/hardware/dell-poweredge/">Dell PowerEdge</a></li>
</ul></td>
<td><ul>
<li><a href="/hardware/hpe-proliant-dl20/">HPE ProLiant DL20</a></li>
<li>HPE DL380</li>
<li><a href="/hardware/dell-poweredge/">Dell PowerEdge</a></li>
<li>SuperMicro SuperServer</li>
</ul></td>
</tr>
</tbody>
</table>

Popular / Recommended Vendor Servers

### Whitebox Servers

AKA Roll your own!

<table>
<caption>Popular / Recommended Cases</caption>
<thead>
<tr>
<th><p>Whitebox Desktop/Tower Cases</p></th>
<th><p>Small Form Factor Servers</p></th>
<th><p>Whitebox Rack Cases</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><ul>
<li><a href="/hardware/corsair-obsidian-900d/">Corsair Obsidian 900D</a></li>
<li><a href="/hardware/corsair-carbide-400r/">Corsair Carbide 400R</a></li>
<li>Fractal Design Define R3 / R4 / R5</li>
<li><a href="/hardware/phanteks-enthoo-primo/">Phanteks Enthoo Primo</a> Black</li>
</ul></td>
<td><ul>
<li><a href="/hardware/">SilverStone SG10</a></li>
<li><a href="/hardware/antec-isk-600m/">Antec ISK-600m</a></li>
</ul></td>
<td><ul>
<li>Supermicro SC505-203B</li>
</ul></td>
</tr>
</tbody>
</table>

Popular / Recommended Cases

Lastly, once you know what case size you like, you need to decide what kind of motherboard will fit into it! Here are a few examples which have been tried and tested by the community:

A full list of tested [Whitebox Homelab Motherboards](/hardware/whitebox-motherboards/) is available here:

- [Whitebox Homelab Motherboards](/hardware/whitebox-motherboards/)

## Processors

When choosing a processor, the use case for your homelab will determine if the processor is a good fit. Make a list of functional requirements and choose the processor that handles these. Since memory will be the most likely bottleneck when running multiple virtual machines, don't get to carried away finding the most powerful processor.

General rules of thumb Newer processors are build using a smaller etching method. This means the processor will use less power. Newer processors contain newer instruction sets. AES, memory table virtualization and h264 video processing are a clear example of instructions that speed up some of the workloads. Since using an instruction set requires the right drivers and software, your mileage may vary. If your workload benefits from an instruction set, you'll see both power savings and increased performance.

For convenience sake, we'll split up processors into three groups:

- Small - maximum of ~16GB RAM
- Medium - Maximum of 32GB or 64GB RAM
- Large - everything over 64GB RAM

### Small processors

Are usually designed for low-power devices such as NAS appliances, TVs and mini-notebooks. Newer versions of these kinds of processors (such as the Intel Braswell and AMD AM1 Kabini) are quite capable, but no speed devils. If you're going to build a machine that will be on 24/7 and perform relatively easy tasks (router, NAS, containers, home automation and/or home security) these are the best fit for the job. The power usage of the small processors group is pint-sized. The cheapest versions of these will be soldered to the motherboard and generally do not support more than two memory slots with a limited amount of memory.

### Medium processors

Contain your average desktop PC processors and derivatives. Great performance when you just want to build a fast homelab to test or use a moderate amount of workloads. Think Intel socket 1150 and AMD socket AM3+. A general maximum for these kind of processors is four to six cores and 32GB or 64GB RAM. They come with the most up-to-date instruction sets and can have high core clock speeds (up to 4GHz). Motherboards for this type have one socket to place your processor and two to four memory slots. While these are perfectly capable and, with some care during your build, reasonably power efficient, they have an upper limit to the amount of workloads that they can handle simultaneously.

### Large processors

These usually fall into the enthusiast, workstation or server grade processors. Think Intel socket 2011-3 and AMD Opteron. While these processors don't use a lot of power in idle mode, the amount of cores and addressable memory can handle much more workloads than the medium processors and can draw a significant amount of power out of a wall socket. Most of the processors in this category can be placed onto a multi-socket motherboard. This type of motherboard houses two or four processors. While all this raw processing power is awesome, don't forget your functional requirements. Burning lots of Watts might not be such a good idea when the money could buy you faster/bigger storage, more networking or more memory.

## [Storage](/storage/storage-options/)

The main [storage](/storage/storage-options/) category can be found [here](/storage/storage-options/). Articles include:

- [Homelab Storage Introduction, Types and Options](/storage/storage-options/)
- [Hyper-converged Infrastructure](/storage/hyper-converged-infrastructure/)
- [Homelab Storage Software](/storage/storage-software/)

## Networking

- [10Gbps Homelab Networking](/networking/) - *Stub*
- [Homelab Wi-fi](/networking/wifi/) - *Stub*
- [Infiniband for 10Gbps to 100Gbps Networking](/networking/infiniband-10-100gbps/)

## Power, Cooling and Noise

- [Power](/housing/power/) - *Stub*
- [Cooling](/housing/) - *Stub*
- [Noise](/housing/noise/)

## [Hypervisors](/hypervisors/choosing-a-hypervisor/)

- [Homelab Hypervisor Choices](/hypervisors/choosing-a-hypervisor/)
- [Virtual Machine vInception / vTARDIS (including Type 1 vs Type 2 Hypervisors)](/hypervisors/vinception/)

## Licensing

- [Microsoft Licensing](/licensing/microsoft/)
- [VMware Licensing](/licensing/vmware/)
- Citrix Licensing

## The Cloud

- [Cloud Homelabs](/cloud/cloud-homelabs/)
