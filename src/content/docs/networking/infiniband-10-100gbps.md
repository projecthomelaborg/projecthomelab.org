---
title: "InfiniBand for 10–100Gbps"
description: "Infiniband is a relatively longstanding networking technology originally made popular by the HPC crowd, and used for large-scale parallel computing tasks…"
sidebar:
  label: "InfiniBand for 10–100Gbps"
  order: 3
lastUpdated: 2020-07-31
wikiTitle: "Infiniband for 10Gbps to 100Gbps Networking"
---

Infiniband is a relatively longstanding networking technology originally made popular by the HPC crowd, and used for large-scale parallel computing tasks where Remote Direct Memory Access and the Message Passing Interface were vital to keep scientific calculations humming along. The legacy of all of this is that Infiniband, whilst not as consumer friendly as RJ45-based 1GbE or 10GbE, made the transition from 10Gb to 20Gb, then 40Gb and 56Gb and hit 100Gb a few years back. Such is the hunger for high-performance networking in the HPC space that old equipment is often discarded relatively quickly and the 10Gb and 20Gb parts are now relatively common. The Mellanox ConnectX-2 is a great example of this where a 2-port 40Gb (per port) card can be found for £35-40 on ebay with no difficulty.

However, as a quick inspection of cards will reveal, the connections aren't as straightforward as ethernet. We have:

- QSFP+ (QSFP28) The current ruler with 28bit wide channels x4 enabling 100Gb use cases. Most cards in this space are typically 100Gb as well as 100Gb Infiniband
- QSFP+ (QSFP14) This is what you will see on more common FDR (56Gbit) cards, it consists of a 14bit wide channel x4
- QSFP+ (QSFP10) If it just says QSFP+ it usually means this standard 10x4 for a 40Gb connection, same port type as seen on modern 40GbE switches, where a single 40GbE connection is often broken out into 4 10GbE ports.
- DDR A cable connection more often seen on direct-attached SAS disk shelves, the CX4 cable is a big thick copper cable rated for 20Gb
- SDR 10Gb original variant, older cards often PCI-X as opposed to PCI-E.

Now, as you may have guessed whilst all this is cheaper (much cheaper) than 10GbE and certainly cheaper than 40GbE there is still some cost involved. This is why I would recommend starting with 2 or 3 nodes, where a direct-connected or triangle setup is possible. In these cases connections are made host-to-host and no switch is required. Using dual-ported cards it looks like this with hosts A,B,C:

| Node | Connects to | Address 1 | Address 2 | Route 1                          | Route 2                          |
|------|-------------|-----------|-----------|----------------------------------|----------------------------------|
| A    | B,C         | 10.0.0.10 | 10.0.0.11 | route add -host 10.0.0.20 if ib0 | route add -host 10.0.0.31 if ib1 |
| B    | C,A         | 10.0.0.20 | 10.0.0.21 | route add -host 10.0.0.30 if ib0 | route add -host 10.0.0.11 if ib1 |
| C    | A,B         | 10.0.0.30 | 10.0.0.31 | route add -host 10.0.0.10 if ib0 | route add -host 10.0.0.21 if ib1 |

Now that's not the neatest arrangement to cable up but as the switch typically costs around 20x the cost of a card it's worth considering. The other point which was mentioned on a recent podcast was using a Subnet Manager. This is a concept foreign to ethernet networks, because for ethernet cards ethernet frames are understood natively. However, we're dealing with infiniband here and the native protocol ain't ethernet anymore! Of course the true aficionados would point out that using raw Infiniband is more efficient, faster and lower latency; but we (probably) aren't solving HPC problems in our home lab so TCP/IP compatability is... nice. To run TCP/IP over Infiniband we will use to IPoIB extension to Infiniband. In order to do this our network needs to have a Subnet Manager. You only need one subnet manager but they will get out of each others way and you always want at least one instance running so it makes sense to have a backup instance.

If you're using Linux then simply install opensm (http://manpages.ubuntu.com/manpages/xenial/man8/opensm.8.html) on each host and configure them all to start on boot.

If you're on ESXi then there's a great post by Erik (https://www.bussink.ch/?p=1306) and one by Vladan (https://www.vladan.fr/infiniband-in-the-lab-the-missing-piece-for-vsan/)

Once the subnet is up, set the IP addresses and you're off!
