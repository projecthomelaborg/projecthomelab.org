---
title: "Corsair Obsidian Series 900D E-ATX Super Tower"
description: "This is an example of a self-build “white box”, using:"
sidebar:
  label: "Corsair Obsidian 900D"
  order: 20
lastUpdated: 2020-07-31
wikiTitle: "Corsair Obsidian 900D"
---

## Introduction

<figure class="wiki-figure"><img src="/images/e/e5/Corsair_Obsidian_900D.jpg" alt="Corsair Obsidian 900D" loading="lazy" decoding="async"></figure>

This is an example of a self-build “white box”, using:

- [Asus Z9PE-D8 WS Workstation Board](http://www.amazon.co.uk/gp/product/B007KGXY0K/ref=as_li_ss_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B007KGXY0K&linkCode=as2&tag=athbegsusetho-21)
- [Corsair CC-9011022-WW Obsidian Series 900D E-ATX Super Tower](http://www.amazon.co.uk/gp/product/B00B1R8JT0/ref=as_li_ss_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B00B1R8JT0&linkCode=as2&tag=athbegsusetho-21)
- Dual [Intel Xeon E5-2620 v2](http://www.amazon.co.uk/gp/product/B00F9ISZ1E/ref=as_li_ss_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B00F9ISZ1E&linkCode=as2&tag=athbegsusetho-21) Processors
- Four [Crucial 32GB kit (16GBx2) DDR3 PC3-14900](http://uk.crucial.com/gbr/en/z9pe-d8-ws/CT3712290), totalling 128GB RAM

and other components. The build was done in June 2014 but all main components are still available in the market (at the time of writing 22/04/2016).

**For full story, please see the three part series:**

- [My New Dual-Xeon Based Nested Home Lab Machine – Part I](http://atherbeg.com/2014/06/19/my-new-dual-xeon-based-nested-home-lab-machine-part-i/)
- [My New Dual-Xeon Based Nested Home Lab Machine – Part II](http://atherbeg.com/2014/06/20/my-new-dual-xeon-based-nested-home-lab-machine-part-ii/) &
- [My New Dual-Xeon Based Nested Home Lab Machine – Part III](http://atherbeg.com/2014/06/23/my-new-dual-xeon-based-nested-home-lab-machine-part-iii/)

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

## Casing

[Corsair’s Obsidian Series 900D](http://www.corsair.com/en-gb/obsidian-series-900d-super-tower-case) is for the largest of motherboards. Mainly used by gamers, this case is huge, looks good and is mainly built with aluminium.

There are plenty of bays, drive cages and up to fifteen fan mount locations. Also, there are five radiator mounting points.

Even though it’s an E-ATX casing (not SSI-EEB), it can still support the other smaller ATX variants. In case of this build, it also quite successfully accommodated an SSI-EEB motherboard – more on that below.

This casing also contains a clear side window, in case, one wants to show-off their motherboard to fellow geeks/gamers.

## Motherboard Installation

The [motherboard chosen for this build](https://www.asus.com/Motherboards/Z9PED8_WS/) (mentioned above) was of the SSI-EEB form factor. This is an important point to consider as while E-ATX and SSI-EEB motherboards are physically of the same size, some of their mounting holes are in different positions.

It required some pre-buying research to make sure the motherboard will align with most of the mounting holes. As only two mounting screws were set to miss, it was not a huge issue. Since the build, the machine has been transported up/downstairs a few times, with the big heat sinks and fans attached and there is no impact. So, if you’re going for the motherboard mentioned above, this is a safe casing to use.

In addition to that, the casing is of a sufficient size not to have its cable-management holes covered by the motherboard, once installed. If that’s too big then one could possibly go for a slightly smaller case but that’s just preference based on how tidy you want the cabling to be.

After motherboard installation, the system looks like this:

<figure class="wiki-figure"><img src="/images/4/45/Obsidian_900D_with_Motherboard.jpg" alt="Obsidian 900D with Motherboard" loading="lazy" decoding="async"></figure>

In the following picture, you can see the cabling routed underneath the motherboard:

<figure class="wiki-figure"><img src="/images/0/0d/Obsidian_900D_with_Cabling.jpg" alt="Obsidian 900D with Cabling" loading="lazy" decoding="async"></figure>

## Cooling

When it comes to silent cooling, Noctua CPU coolers are the best. So, they were the natural choice this build. In this case, [Noctua NH-U12DX i4 coolers](http://www.quietpc.com/nh-udxi4) were used. NH-U9DX i4 could also have been a good choice but it’s better to have bigger fans so that one fan per CPU is enough. There is an option to add an additional one if required. Don’t forget to factor in the height of the fans once mounted as it’s a commonly-made mistake and the casing doesn’t close, once mounted on top of the CPU.

Another consideration when buying cooling fans is RAM slot access but fortunately, the motherboard used is designed well enough to have RAM slots a bit further away. So, even with the lower NH-U9DX i4, they remain accessible.

## Graphics Card

The motherboard used, has on-board VGA so it could have been used. However, on board graphics are taxing on the CPU. So, an [MSI GeForce N210 Nvidia Graphics Card](http://www.amazon.co.uk/gp/product/B005F30LLU/ref=as_li_ss_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B005F30LLU&linkCode=as2&tag=athbegsusetho-21) was used instead. It’s an entry-level card but its modest performance does quite nicely in this case.

Later, the graphics card was replaced by a more respectable [EVGA GeForce GTX 960 SuperSC ACX 2.0+ Graphics Card](http://www.amazon.co.uk/gp/product/B00UI24Y3Y/ref=as_li_tl?ie=UTF8&camp=1634&creative=19450&creativeASIN=B00UI24Y3Y&linkCode=as2&tag=athbegsusetho-21) Still not the fastest but good enough for high-definition movies and “lower-end” gaming.

## Current Loading

This system is still in service and runs 24/7. Base OS is Windows 8.1 with VMware Workstation, which runs four nested ESXi 6.0 Update 1 hosts. Between them, the hosts have enough memory to run:

- vCenter 6.x
- vRealize Operations Manager 6.x
- vCenter Infrastructure Navigator 6.x
- vRealize Automation 6.x (minimal install)
- vRealize Automation 7.x (minimal install)
- NSX 6.x with 3 controllers
- Horizon 6.x (minimal install)
- A few other Windows servers
- About a dozen CentOS test machines

It should be mentioned that while the memory allocated to those machines have been reduced, it’s still pretty generous and can be squeezed further if required.

Some of these machines are running on all-flash VSAN and some are on a pair of LUNs, hosted on a Synology, accelerated by PernixData’s brilliant FVP 3.x (with Architect 1.x, of course!)

## Final Thoughts

There is no doubt that these kind of systems are quite expensive but they have the major benefit of being exactly what’s needed in terms of noise-levels, Performance, Expandability and Longevity.

In addition, VMware Workstation (while it lasts) does have the benefit of supporting all configurations VMware produces and even driver changes are not a head-ache – a definite advantage for some!
