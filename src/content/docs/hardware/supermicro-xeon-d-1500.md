---
title: "Supermicro Xeon D-1500"
description: "The Xeon D-1500 processor family is a low-power, high-performance System-on-Chip processor based on the 14nm Broadwell architecture. It has all the…"
sidebar:
  label: "Supermicro Xeon D-1500"
  order: 4
lastUpdated: 2020-07-31
wikiTitle: "Supermicro Xeon D-1500"
---

## Introduction to the Xeon D-1500 processor family

The [Xeon D-1500 processor family](http://www.intel.com/xeond) is a low-power, high-performance System-on-Chip processor based on the 14nm Broadwell architecture. It has all the processor features any home lab needs, like hyperthreading, VT-x and VT-d, EPT, AES-NI, NSX-NI, Trusted Execution, Execute Disable Bit and finally, SR-IOV (with some caveats; see below).

These processors have been on the market since Q4 2015 (as the 15x0 series), and have seen a 15x1 hardware update in Q1 2016. There are currently (as of May 2016) 17 different models, differencing in number of cores, frequency, amount of cache and power usage. According to Intel ARK, some specific processors take only DDR4 memory, while most accept both DDR3 and DDR4. There are also small differences in USB2.0 vs. USB3.0 support, number of SATA ports and integrated network cards (dual 1Gbit, dual 10Gbit or both).

As this is a System-on-Chip processor, it comes soldered onto the motherboard. When selecting a Xeon D-1500 system, I'd recommend picking the processor first.

## Picking the right processor

To better pick the right processor, let me give you an overview of the different models. The initial launch featured two models, the D-1540 and the D1520. These were superseded by the D-1541 and D-1521 in the late 2015 launch, also adding the various other models.

<figure class="wiki-figure"><img src="/images/4/4f/Xeond-03.png" alt="Overview" loading="lazy" decoding="async"><figcaption>Overview</figcaption></figure>

When picking the right processor, bear in mind the following differences between processors (and remember it's a SoC package, so the processor always comes with the motherboard attached!). Review the [Intel ARK comparison](http://ark.intel.com/search/advanced?s=t&FamilyText=Intel%C2%AE%20Xeon%C2%AE%20Processor%20D%20Family) between all the Xeon D-1500 processors.

1.  Generation (launch date on ARK)
2.  Cache
3.  Number of Cores
4.  Frequency (base and turbo)
5.  TDP (power usage in Watt)
6.  USB Revision
7.  Number of SATA ports
8.  Type of integrated LAN ports (number, speed) and network features embedded in the processor

## SuperMicro SuperServer mini towers with the Xeon D-1500 SoC

The SuperMicro SuperServer mini towers with the Xeon D-1500 SoC are a more powerful version of the HP MicroServer mini towers. While the physical characteristics are similar (i.e. it is a small box with a small power footprint), the performance characteristics differ wildly. The Xeon D-1500 really is a high-performance workhorse. Combined with the small footprint of the SuperServer, it makes for an ideal, albeit expensive home lab.

<figure class="wiki-figure" style="max-width:400px"><img src="/images/f/fa/Sys-5028d-tn4t_open-cropped-1bb3851b930b862fd320071d7d8070ac.jpg" alt="Sys 5028d tn4t open cropped 1bb3851b930b862fd320071d7d8070ac" loading="lazy" decoding="async"></figure>

Let's start by looking at this beast from 10,000 feet:

1.  It's small, low-power and quiet. The [Wife Acceptance Factor](/housing/wife-acceptance-factor/) is high with this one!
2.  Any of the Supermicro-based Xeon D-1500 SoC motherboards fit in this chassis, so easy to choose your own!
3.  Those motherboards have all the basics onboard: the processor, 4 memory slots for up to 128GB of RAM, onboard network interfaces (2x 1Gbit, 2x 10Gbit or both), a decent IPMI interface for remote management, an M.2 slot for PCI-e based NVMe flash storage and more.

In this article, we're specifically talking about the SuperMicro SuperServer SYS-5028D-TN4T and it's derivates (i.e. build-your-own based on a base Bill-of-Material and swapping out the SoC motherboard). The SYS-5028D-TN4T is a complete barebone package and serves as a reference to build your own. In my experience, recreating a complete barebone from scratch (offering flexibility in processor and motherboard choice) isn't hard at all. Read the section Choosing the right SoC to guide you in choosing the best motherboard for you.

### Choosing the right SoC

After picking the preferred processor, it's time to shop accompanying SuperMicro motherboards. These are the [X10-SDV](https://www.supermicro.nl/products/motherboard/Xeon3000/#1667) models. With your preferred processor in mind, go through this list, taking specific motherboard pro's and con's such as networking, SATA and USB ports into account.

### Completing the barebone package

When you've selected the right motherboard (and processor), it's time to create a Bill of Materials so it becomes a complete home lab server. Because SuperMicro lists all parts for any given product, it's easy to reverse engineer the contents of the SYS-5028D-TN4T package. Let's start on it's [product page](http://www.supermicro.nl/products/system/midtower/5028/SYS-5028D-TN4T.cfm?parts=SHOW#jump):

<figure class="wiki-figure"><img src="/images/5/5b/SuperMicro_Xeon_D_BOM_barebone.png" alt="Overview" loading="lazy" decoding="async"><figcaption>Overview</figcaption></figure>

Now drill down into the [motherboard](http://www.supermicro.nl/products/motherboard/Xeon/D/X10SDV-TLN4F.cfm?parts=SHOW#jump) and [chassis](http://www.supermicro.nl/products/chassis/tower/721/SC721TQ-250B.cfm?parts=SHOW#jump) pages to see their parts list:

<figure class="wiki-figure"><img src="/images/5/5b/SuperMicro_Xeon_D_BOM_barebone.png" alt="Overview" loading="lazy" decoding="async"><figcaption>Overview</figcaption></figure>

<figure class="wiki-figure"><img src="/images/d/d7/SuperMicro_Xeon_D_BOM_motherboard.png" alt="Overview" loading="lazy" decoding="async"><figcaption>Overview</figcaption></figure>

You'll end up with the following parts on your Bill of Material"

| Item                  | Part Number      | Qty | Part Description                                        |
|-----------------------|------------------|-----|---------------------------------------------------------|
| Motherboard / Chassis | MBD-X10SDV-TLN4F | 1   | Super X10SDV-TLN4F Motherboard                          |
| Chassis               | CSE-721TQ-250B   | 1   | Mini Tower Chassis                                      |
| Backplane             | CSE-SAS-733TQ    | 1   | 4 x 1ö SAS backplane w/SES-II                           |
| Cable 1               | CBL-0157L        | 1   | 8 pin to 8 pin ribbon SGPIO cable with tube , 40cm, PBF |
| Cable 2               | CBL-0483L        | 1   | 29cm 30AWG SATA S-S cable                               |
| Cable 3               | CBL-0473L        | 4   | 21cm 30AWG SATA S-S cable                               |

Parts List for the 5028D-TN4T

| Item        | Part Number      | Qty | Part Description         |
|-------------|------------------|-----|--------------------------|
| Motherboard | MBD-X10SDV-TLN4F | 1   | X10SDV-TLN4F Motherboard |
| I/O Cables  | CBL-0044L        | 2   | 57.5CM SATA FLAT S-S PBF |
| I/O Shield  | MCP-260-00084-0N | 1   | STD I/O SHIELD           |

Parts List for the X10SDV-TLN4F

| Item          | Part Number      | Qty | Part Description                                                   |
|---------------|------------------|-----|--------------------------------------------------------------------|
| Chassis       | CSE-721TQ-250B   | 1   | Mini-Tower Chassis (Black)                                         |
| Backplane     | CSE-SAS-733TQ    | 1   | 4 x 1ö SAS backplane w/SES-II                                      |
| Power Supply  | PWS-251-1H       | 1   | 1U 250W Flex ATX Multi-output Bronze Power Supply                  |
| Fan 1         | FAN-0124L4       | 1   | 12 CM x12 CM fan                                                   |
| Drive Tray(s) | MCP-220-00075-0B | 4   | Black gen 5.5 hot-swap 3.5" HDD tray                               |
| Drive Tray(s) | MCP-220-00024-1B | 1   | MCP-220-00024-0B without dummy HDD                                 |
| Drive Tray(s) | MCP-220-00081-0N | 1   | 3.5" dummy HDD (hollow-panned) for MCP-220-00075-0B,RoHS/REACH,PBF |

Parts List for the 5028D-TN4T

Now, you won't actually need all of these items if you're building your own, and depending on a number of variables, you need extra stuff. Let me break this down:

1.  Some SoC motherboards come with a CPU fan, some don't. You'll always need a CPU fan.
2.  If you add PCI-e based storage, like an NVMe M.2 drive, you'll want to add a case fan to keep it cool.
3.  Depending on the motherboard package, you won't need some SATA cables. The -B versions of a motherboard is a bulk version and comes with less stuff. The -O version is the retail version, and comes with cables you don't want anyway. Don't buy the -O version; it's a waste of the extra money.

### Example build

I recently built my own SuperServer, since I really only needed a 4-core system, and wanted the Xeon D-15x1 refresh. this led me to the Xeon D-1521 on the X10SDV-4C-TLN2F motherboard. Equipped with the part lists above, I set out to build my own list.

Parts List:

1.  1x X10SDV-4C-TLN2F motherboard in the -B version, which includes the MCP-260-00084-0N I/O shield. This motherboard doesn't have a CPU fan.
2.  1x CSE-721TQ-250B Mini Tower Chassis, which includes the CSE-SAS-733TQ SAS backplane, the PWS-251-1H, 1U 250W Flex ATX Multi-output Bronze Power Supply, the FAN-0124L4, 12 CM x12 CM fan, four MCP-220-00075-0B and four 3.5" disk trays and two 2.5" disk bays.
3.  1x CBL-0157L-02, 8 pin to 8 pin ribbon SGPIO cable with tube , 40cm, PBF for SES-II
4.  5x CBL-0473L, 21cm 30AWG SATA S-S cable to link up the four SATA ports on the SAS backplane to the motherboard and one for a 2.5" bay. These are very thin cables. Highly recommended
5.  1x CBL-0483L, 29cm 30AWG SATA S-S cable to link up the the second 2.5" bay.
6.  1x SSD-DM016-PHI SSD SATADOM (optional)
7.  1x Samsung 950 Pro 512GB NVMe drive (optional, but very highly recommended. Best money I ever spent on a piece of storage. The performance and latency are just... WOW.)
8.  2x Noctua NF-A6x25 PWM 60x25mm PWM fans for the CPU and case.
9.  2-4x M393A4K40BB0-CPB, Samsumg 32GB RAM modules to pimp out the server to 64 or 128GB. I highly recommend spending the extra money to get 128GB.

## Caveats

1.  When building your own, or when poking around inside the chassis, do not, I repeat, DO NOT, use both the 24-pin and the 4-pin power supply cables. It'll make your motherboard go \*poof\*.
2.  When building your own, make sure to attach the CBL-0157L for SES information exchange between your backplane and motherboard to the 'I-SGPIO1' pin block on the motherboard and JP51 on the SAS-733TQ backplane. There seem to be two different versions of the CBL-0157L cable. Buy the CBL-0157L-02 version. It's shorter and is a better candidate for cable management (i.e. tucking it away from the airflow)
3.  Make sure to include a processor fan in your build-your-own approach. Some SoC motherboards do include a CPU fan (like the X10SDV-TLN4F motherboard included with the default SYS-5028D-TN4T package), others don't. I bought the Noctua NF-A6x25 PWM fan. Check out [how to add fans](https://tinkertry.com/superserver-combined-cpu-and-m2-cooling-fan) to the motherboard.
4.  Make sure to include a case fan in your build-your-own approach if you plan to include an NVMe drive. Those sticks get HOT! I bought another Noctua NF-A6x25 PWM fan and positioned it as explained in this [Serve the Home article](http://www.servethehome.com/near-silent-powerhouse-making-a-quieter-microlab-platform/)
5.  Please make sure to set the 'High Performance' power management setting. Doesn't have a big effect on power usage (I saw a 10W increase under full load), but really does make a performance difference. Case in point: when set to 'balanced' or 'low power', I could successfully complete an Azure Stack deployment using a X10SDV-4C-TLN2F SoC motherboard.
6.  If you buy a SATA DOM (which I did), please realize that it'll take away one SATA port. In my case, this meant not being able to use the second 2.5" bay to house an SATA SSD. A good alternative to a SATA DOM is a small USB thumb drive, but be aware that there's no internal USB port to put it in. I'd recommend you buy a very small USB drive to put into one of the front or back USB ports.
7.  SR-IOV not supported on Xeon D-15x0 series, but is supported on the Xeon D-15x1 series. You want to buy the latest version of the processor anyway. Check <https://tinkertry.com/esxi-6-and-sr-iov-supported-on-supermicro-superserver-1541-10gbe-only>

## Costs

This is not a cheap build, by any means. I paid \>€1700 (\$1900) on a single server. I took a cheaper 4-core version of the motherboard, but did max out memory and storage.

## Use Cases

In the month or two I operate this lab, I've been running vSphere as the core lab infra. This means I have ESXi installed on the physical box and have a vCenter Server Appliance running. I don't tinker with these two; all other labs are nested on top. I have Azure Stack, DC/OS (https://dcos.io/), Docker Datacenter, some unikernel stuff and more running. But really, anything you can run nested on top of ESXi is fair game.

## Nested Lab Architecture

Although this is not specific to the Xeon D-1500 series or the SuperMicro barebone, i'd like to show you how I set up nested home labs. Please read [Nested_lab_architecture](/hypervisors/nested-lab-architecture/).

## Additional Resources

Now, my home lab and this article wouldn't have existed if it wasn't for Paul Braren. He runs TinkerTry.com, and really pioneered the Xeon D-1500 as a home lab. In this section, I'll point you to some further reading to learn more about the Xeon D-1500 series and the SuperMicro SoC boards. I've put these in order of relevance, so please start at the top!

General information, introductions and deep-dive:

1.  [Superguide: Supermicro SuperServer 5028D-TN4T - THE Ultimate Home Virtualization Lab](https://tinkertry.com/superguide-supermicro-superserver)
2.  [What fits in any home virtualization lab, has 8 Xeon cores, 6 drives, 128 GB memory, and 3 4K outputs from a Windows 10 VM? Your new Supermicro SuperServer Workstation!](https://tinkertry.com/superserverworkstation)
3.  [Longest email thread ever about Xeon D-1540, VMware, NVMe, VSAN, backup dedupe, and so much more...](https://tinkertry.com/long-email-about-superserver-and-vmware-and-nvme)

Some visual material

1.  [Supermicro SuperServer 5028D-TN4T Photo Gallery](https://tinkertry.com/superserverpics)
2.  [Deep dive inside video of the Supermicro SuperServer 5028D-TN4T including component installation](https://tinkertry.com/superserver-5028d-tn4t-video)

BIOS settings:

1.  \[<https://tinkertry.com/benchmarking-optimized-bios-settings-supermicro-superserver-sys-5028d-tn4t> Benchmark Optimized BIOS Settings for Supermicro SuperServer SYS-5028D-TN4
2.  \[<https://tinkertry.com/recommended-bios-settings-supermicro-superserver-sys-5028d-tn4t> Recommended BIOS Settings for Supermicro SuperServer SYS-5028D-TN4T
