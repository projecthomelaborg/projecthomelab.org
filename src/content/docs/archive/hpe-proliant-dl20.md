---
title: "HPE ProLiant DL20"
description: "The HPE DL20 is a fairly new, dense and compact server powered by Intel® Pentium®, Core i3 and E3-1200 v5 processors and provides a unique blend of…"
sidebar:
  label: "HPE ProLiant DL20"
  order: 10
lastUpdated: 2020-07-31
wikiTitle: "HPE ProLiant DL20"
---

:::caution[Archived article]
This covers the Gen9 model and ESXi 6.x. Prices and compatibility notes are from that period.
:::

## HPE DL20 Gen 9 Introduction

The [HPE DL20](http://www.hpe.com/uk/en/product-catalog/servers/proliant-servers/pip.hpe-proliant-dl20-gen9-server.1008556817.html) is a fairly new, dense and compact server powered by Intel® Pentium®, Core i3 and E3-1200 v5 processors and provides a unique blend of enterprise-class capabilities at a great value—making it an ideal rack server platform for growing businesses and service providers. It offers outstanding configuration flexibility to cater to a wide variety of business requirements at an affordable price point. The DL20 Gen9 Server offers a range of HPE Qualified options to fit most needs like affordable drives for light workloads, solid state drives for the demanding requirements, from a single non-hot plug power supply to an efficient HPE Hot Plug Redundant Power supply, from multiple storage controllers to the HPE FlexibleLOM networking cards—helping customers find the right configuration for their workloads.

<figure class="wiki-figure" style="max-width:125px"><img src="/images/a/ab/VSANLegoRack.png" alt="You may want an image here!" loading="lazy" decoding="async"><figcaption>You may want an image here!</figcaption></figure>

## Pros

- On the VMware 6 U1 up to 6.5 HCLs
- Very quiet (Many WAF points!!)
- Shallow 1U server - almost square, will fit into small cabinets
- On-board USB 3.0 for boot
- Choice of 3.5" or Hot-swap 2.5" hard drives or SSDs
- Choice of CPU families
- Choice of a single PSU or 2 redundant PSUs
- 64GB RAM Capacity
- Uses the standard HP Custom vSphere ISO
- On-board SATA connectors for M.2
- Uses the pretty spinning LED drive caddies
- Comes with a rapid-rails kit.

## Cons

- No front panel monitor port
- No front panel USB 3.0 ports - USB 2.0 only
- One of the rear network ports doubles as the iLO port
- DDR4 is still quite expensive
- Only 2 PCIe3 x8 expansion slots
- Complains if you use non-HP HDDs but runs fine
- Uses the irritating spinning LED drive caddies

## Costs

- £550 or thereabouts for the basic server
- Depending on where you buy comes with 1 x 8GB or 1 x 16GB DDR4
- No HDDs

## Use Cases

Use cases range from light workloads up to reasonably heavy workloads. Runs ESXi 6 and 6.5 with no trouble. 2 together form a quiet yet powerful lab environment and the 2 x 1Gbs and 2 PCIe slots are not so much of a restriction in a lab environment. Melanox ConnectX 10Gbs cards are easily available on eBay and also on the vSphere HCL, and 1 in each host with a crossover gives plenty of room for multiple VLANs and very fast vMotion! In addition, a Starttech single or dual USB 3.0 to 1Gbs adapter works really well and can be secured to the top of the server with velcro. This gives 4 x 1Gbs ports.

As a VMware Advantage account holder I run the full-fat vSphere Enterprise Plus 6 on mine without any issues, booting off a small USB 3.0 32GB internally-mounted drive. Just upgraded the VCSA to 6.5 and its getting to be a nice system. TBH I'd like to add a thrid server but 2 is fine for now. 64GB in each would be nice now. My lab has a 3TB WD Red mirrored pair for storage sat in my old Synology 2-bay NAS.

The spinning LED caddies are a matter of personal opinion. They can get on your nerves after a while.

## Adding more NICs to your DL20

William Lam has managed to get a USB NIC working in his lab with vSphere 5.5 and 6.0 and they do indeed work a treat, but max. Jumbo frames is 2048kb.

- [Working USB Ethernet Adapter (NIC) for ESXi](http://www.virtuallyghetto.com/2016/03/working-usb-ethernet-adapter-nic-for-esxi.html)
- [Functional USB 3.0 Ethernet Adapter (NIC) driver for ESXi 5.5 & 6.0](http://www.virtuallyghetto.com/2016/03/functional-usb-3-0-ethernet-adapter-nic-driver-for-esxi-5-5-6-0.html)

## Adding Cheap and Simple 10Gbs

Mellanox MT26448 ConnectX 10GbE. (PCIe 2.0) - eBay, shipped from the US, arrived on Christmas Eve. £48 delivered, looked new. In the box - 2 x cards, 2 x 2m cables with SFP+ at each end.

Installation:

- Shut down server and unplug
- Remove top cover and remove daughter-board
- Install card on low-profile side
- Re-install daughter-board
- Close server and reconnect power
- Fire It Up!
- Repeat for the 2nd server.
- Configure 2 new vmk ports – eg 192.168.120.1 and 192.168.120.2 with a Netmask of 255.255.255.252.
- Swap the vMotion traffic over.
- Hook up the cable
- Enjoy 10Gbs between hosts
