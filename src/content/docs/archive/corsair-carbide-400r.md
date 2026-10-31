---
title: "Corsair Carbide Series 400R ATX Mid Tower"
description: "This is an example of a self-build “white box”, using:"
sidebar:
  label: "Corsair Carbide 400R"
  order: 19
lastUpdated: 2020-07-31
wikiTitle: "Corsair Carbide 400R"
---

:::caution[Archived article]
This build log uses parts from around 2016. The case may still be useful, but the platform and hypervisor notes are dated.
:::

## Introduction

<figure class="wiki-figure"><img src="/images/d/de/Corsair_Carbide_400R.png" alt="Corsair Carbide 400R" loading="lazy" decoding="async"></figure>

This is an example of a self-build “white box”, using:

- [Asus P9X79 PRO Motherboard](http://www.amazon.co.uk/gp/product/B006665HCS/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B006665HCS&linkCode=as2&tag=athbegsusetho-21)
- [Corsair Carbide Series 400R Mid-Tower Gaming Case](http://www.amazon.co.uk/gp/product/B0055Q7BR4/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B0055Q7BR4&linkCode=as2&tag=athbegsusetho-21)
- [Intel Core i7 3820 Quad Core CPU](http://www.amazon.co.uk/gp/product/B006WVVA28/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B006WVVA28&linkCode=as2&tag=athbegsusetho-21) Processor
- [Komputerbay 32GB (4x 8GB) DDR3 PC3-12800 1600MHz DIMMs](http://www.amazon.co.uk/gp/product/B006JO2KXQ/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B006JO2KXQ&linkCode=as2&tag=athbegsusetho-21) and [Crucial 32GB Kit (8GBx4), Ballistix 240-pin DIMM, DDR3 PC3-12800](http://www.crucial.com/uk/store/mpartspecs.aspx?mtbpoid=4842A351A5CA7304) totalling 64GB RAM

and other components. The build was done in September 2012 but all main components are still available in the market (at the time of writing 30/04/2016), apart from Crucial RAM Kit. That said, alternatives are available.

For full story, please see the three part series:

- [Building (or Upgrading) a Virtual Home Lab Machine – Part I](http://atherbeg.com/2012/09/30/building-or-upgrading-a-virtual-home-lab-machine-part-i/)
- [Building (or Upgrading) a Virtual Home Lab Machine – Part II](http://atherbeg.com/2012/10/31/building-or-upgrading-a-virtual-home-lab-machine-part-ii/) &
- [Building (or Upgrading) a Virtual Home Lab Machine – Part III](http://atherbeg.com/2013/01/28/building-or-upgrading-a-virtual-home-lab-machine-part-iii/)

## Points to Consider

Below are some points considered before buying the components as they are useful for any similar builds:

- **vInception Type:** ESXi or Workstation
- **Processor(s):** Family, Type, Count, Speed, Cost
- **Memory:** Brand, Type, Amount, Speed, Cost
- **Motherboard:** Type, Processor Support, RAM Support (Capacity, Speed, Type), Controllers, Peripheral Support, Built-In Networking, Form Factor
- **Storage:** Type (SSD, Spinning, Hybrid), Acceleration (VSAN, PernixData FVP etc.)
- **Casing:** Form Factor, Peripheral Support, Ease of Installation, Cooling Options
- **Power Supply Unit (PSU):** Load Capacity, Efficiency
- **Networking:** Built-in Networking, Speed, Number of ports
- **Cooling:** Generated Heat, Fan/Water cooling, Noise Factor, Space in chassis

## A bit about the casing

[Corsair’s Carbide Series 400R](http://www.corsair.com/en-gb/carbide-series-400r-mid-tower-case) is a mid-sized tower casing that houses ATX or smaller motherboards varients. This casing is mainly used by gamers so there are plenty of cooling options and looks great. It’s made of streel and is pretty robust.

There are plenty of bays, drive cages and fan mount locations, including a radiator mounting point. One nice feature is integrated support for SSDs i.e. one doesn’t need adapters to mount them. It’s also a “tool less” casing, which are pretty common these days.

This casing also contains a white LED light (aimed at gamers, obviously). Thankfully, there is an on-off switch at the front to control it.

## Motherboard Installation

Motherboard installation is pretty straight-forward and no real dramas are there to look out for. ASUS are pretty good with screws and adapters etc. so almost all scenarios are covered.

Apart from its aesthetic qualities, another reason for choosing this casing was the choice of cooling fans. I always use Noctua Coolers and this build was no different. They’re silent but pretty bulky so I like to have a casing which has plenty of space to accommodate them.

In addition to that, the casing is of a sufficient size not to have its cable-management holes covered by the motherboard, once installed. If that’s too big then one could possibly go for a slightly smaller case but that’s just preference based on how tidy you want the cabling to be.

After the whole installation, the system looks like this:

<figure class="wiki-figure"><img src="/images/0/01/Corsair_Carbide_400R_Complete_System.jpg" alt="Corsair Carbide 400R Complete System" loading="lazy" decoding="async"></figure>

## Cooling

As mentioned earlier, when it comes to silent cooling, Noctua CPU coolers are the best. In this case, [Noctua D14-2011 Dual Radiator PWM CPU Cooler](http://www.amazon.co.uk/gp/product/B0062K6BIC/ref=as_li_qf_sp_asin_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B0062K6BIC&linkCode=as2&tag=athbegsusetho-21) were used. As this exact fan is also available for another socket type, one should ensure the correct one is chosen. Don’t forget to factor in the height of the fans once mounted as it’s a commonly-made mistake and the casing doesn’t close, once mounted on top of the CPU.

Another consideration when buying cooling fans is RAM slot access but the fan is high enough to be well above the RAM slots and memory can be removed/reinserted easily.

## Storage

When the system was built, there was no VSAN and I didn’t have Synology either so I used [Starwind Software’s iSCSI SAN](http://www.starwindsoftware.com/starwind-free) That was a solution that was quite flexible and sufficiently fast to run everything that I needed to run. Since then the system has been converted to have VSAN and some storage is hosted on a Synology box.

## Current Loading

This system is still in service and runs 24/7. Base OS is Windows 7 with VMware Workstation, which runs four nested ESXi 5.5 Update 3 hosts. Between them, the hosts have enough memory to run:

- vCenter 5.5
- vRealize Operations Manager 5.x
- vCenter Infrastructure Navigator 5.x
- vRealize Automation 6.x (minimal install)
- NSX 6.x with 3 controllers
- Horizon 5.x (minimal install)
- About a dozen CentOS test machines

It should be mentioned that while the memory allocated to those machines have been reduced, it’s still pretty generous and can be squeezed further if required.

Some of these machines are running on all-flash VSAN and some are on a pair of LUNs on a Synology box.

## Final Thoughts

As this system was fully SSD-based (three in the end), it was quite expensive as SSDs were quite pricey at the time. That said, the system has run for that many years constantly without giving me any errors. With all the doubts over their useful life, this example is good proof that these systems can still live a good useful life before dying and one would probably be upgrading by that time anyway!
