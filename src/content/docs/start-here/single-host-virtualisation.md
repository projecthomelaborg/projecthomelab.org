---
title: "Single Host Virtualisation"
description: "The most barebones aproach to a homelab is using a single host computer. Here we will focus on three approaches: Whitebox builds, pre-built servers and…"
sidebar:
  label: "Single Host Virtualisation"
  order: 7
lastUpdated: 2020-08-04
wikiTitle: "Single Host Virtualisation"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

## Introduction

The most barebones aproach to a homelab is using a single host computer. Here we will focus on three approaches: Whitebox builds, pre-built servers and your personal computer.

## Whitebox dedicated host

This one is a no-brainer. You choose your hardware, install a type 1 or 2 hypervisor and you have a dedicated machine to work with. It allows for greater flexibility in choosing your hardware and controlling the overall cost of the build, however, unless you go for server or workstation-grade hardware, prepare to lose access to enterprise-only features (IPMI, for example) and other features (64GB+ RAM support, ECC, etc). Also, if using a hypervisor with a Hardware Compatibility List, check your build (and the internet) before buying, to ensure that your hardware is compatible with the hypervisor or that you can, at least, load specific drivers during installation to ensure full compatibility.

For more information refer to [the whitebox section of Building a Homelab](/start-here/building-a-homelab/#whitebox-servers).

## Pre-built servers

Ranging from cheaper, SMB-oriented servers like the HP Microserver line to full blown 4u-dual-socketed-enterprise-goodness, they are the usual go-to when setting up your homelab. Usually fully supported by most hypervisors right out of the box, they provide a more enterprise-like experience. Due to their big range of applications, their hardware specifications can change considerably. For example, let's choose 3 different servers from HP to illustrate the differences and their intended usage:

<table>
<thead>
<tr>
<th><p>Server</p></th>
<th><p>Number of CPU Sockets</p></th>
<th><p>Number of RAM slots</p></th>
<th><p>Max RAM</p></th>
<th><p>Intended use</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>HP Microserver Gen8</p></td>
<td><p>1</p></td>
<td><p>2</p></td>
<td><p>16GB (2x8GB DDR3 ECC Unbuffered)</p></td>
<td><p>file server/light virtualization for SMBs</p></td>
</tr>
<tr>
<td><p>HP Proliant DL120 G7</p></td>
<td><p>1</p></td>
<td><p>4</p></td>
<td><p>32GB (4x8GB DDR3 ECC Unbuffered)</p></td>
<td><p>single-application server/light-medium virtualization/Web</p></td>
</tr>
<tr>
<td><p>HP Proliant DL380 G7</p></td>
<td><p>2</p></td>
<td><p>18</p></td>
<td><p>48GB (12x2GB DDR3 ECC Unbuffered @ 1066MHz)<br />
384GB (12x32GB DDR3 ECC Registered @ 800MHz)</p></td>
<td><p>medium-large scale virtualization</p></td>
</tr>
</tbody>
</table>

While it is quite tempting to go down the high-performance road, one must be careful. These servers have heavy power consumption, are noisy, etc. The golden rule is to scale the server to the needs of the lab, and not the other way around. Doing it in such a way allows one to make the most out of the hardware, instead of having a 24-core, 300GB RAM behemoth running only 8 light VMs and sinking lots of unneeded power.

There are lots of advantages by going with a pre-built server:

- Entry-level servers (Microservers/TS140/etc) are cheap and good quality, capable of running most lab environments.
- Older generation hardware readily available from ebay/craigslist/etc.
- Usually quite cheap for the hardware if buying used, and cheap to upgrade as well.
- Good brand ones will have extensive information available on the internet, which can become a life-saver when diagnosing some weird problem
- Old servers are still quite capable of running everything you can throw at it

However, there are also some cons:

- Rack-mounted servers are noisy and power-hungry
- They might throw a fit if using non-OEM parts (the microservers do this) and/or have non-standard parts (PSU, fans, headers, etc).
- New servers outside the SMB level are quite expensive.
- Low [WAF](/housing/wife-acceptance-factor/)

Everything considered, they are a solid choice, however, care must be taken to choose the appropriate hardware.

## Personal computer

## Colo/Data Center

There are some web hosting providers that will provide equipment for either rent or "rent to own" (RTO means that after a period of time, the equipment actually becomes yours). A good provider of RTO is [Dacentec](https://billing.dacentec.com/hostbill/?affid=815). They provide a mix of servers in a data center environment for a low monthly cost. Not every server is RTO, but there are some that are. After 12 monthly payments, the server becomes yours and you can colocate it with them for a low monthly fee.

The thing to keep in mind with data center equipment is that you get to off-set your costs for power and cooling, which may work in your favor. This is one of the reasons why I prefer to colo - the cost of coloing a server or two might actually be cheaper depending on your situation and requirements.
