---
title: "InfiniBand for 10–100Gbps"
description: "Used InfiniBand gear can offer very fast host-to-host links for little money. Learn the connector types, the subnet manager and when Ethernet is the better choice."
sidebar:
  label: "InfiniBand for 10–100Gbps"
  order: 3
lastUpdated: 2026-10-30
wikiTitle: "Infiniband for 10Gbps to 100Gbps Networking"
---

For most homelabs, [Ethernet at 10Gb or 25Gb](/networking/10gbps-networking/) is now cheap and much simpler, and many of the same cards can run in Ethernet mode. InfiniBand remains an interesting option if you want to learn RDMA or HPC networking. Mellanox is now part of NVIDIA, and the older ConnectX-2 and ConnectX-3 cards mentioned below are losing driver support in current releases, so check before you buy.

Infiniband is a relatively longstanding networking technology originally made popular by the HPC crowd, and used for large-scale parallel computing tasks where Remote Direct Memory Access and the Message Passing Interface were vital to keep scientific calculations humming along. The legacy of all of this is that Infiniband, whilst not as consumer friendly as RJ45-based 1GbE or 10GbE, made the transition from 10Gb to 20Gb, then 40Gb and 56Gb and hit 100Gb a few years back. Such is the hunger for high-performance networking in the HPC space that old equipment is often discarded relatively quickly and the 10Gb and 20Gb parts are now relatively common. The Mellanox ConnectX series is a great example of this, with older dual-port 40Gb cards often selling cheaply on eBay.

However, as a quick inspection of cards will reveal, the connections aren't as straightforward as ethernet. We have:

- QSFP28: four channels of about 25Gb each, for 100Gb (EDR InfiniBand or 100GbE).
- QSFP14: four channels of about 14Gb each, for 56Gb (FDR InfiniBand).
- QSFP+: four channels of 10Gb each, for 40Gb (QDR InfiniBand or 40GbE). A single 40GbE connection is often broken out into four 10GbE ports.
- DDR A cable connection more often seen on direct-attached SAS disk shelves, the CX4 cable is a big thick copper cable rated for 20Gb
- SDR 10Gb original variant, older cards often PCI-X as opposed to PCI-E.

Used gear can be very cheap, but there's still some cost involved. This is why I would recommend starting with 2 or 3 nodes, where a direct-connected or triangle setup is possible. In these cases connections are made host-to-host and no switch is required. Using dual-ported cards it looks like this with hosts A,B,C:

| Node | Connects to | Address 1 | Address 2 | Route 1                          | Route 2                          |
|------|-------------|-----------|-----------|----------------------------------|----------------------------------|
| A    | B,C         | 10.0.0.10 | 10.0.0.11 | ip route add 10.0.0.20 dev ib0 | ip route add 10.0.0.31 dev ib1 |
| B    | C,A         | 10.0.0.20 | 10.0.0.21 | ip route add 10.0.0.30 dev ib0 | ip route add 10.0.0.11 dev ib1 |
| C    | A,B         | 10.0.0.30 | 10.0.0.31 | ip route add 10.0.0.10 dev ib0 | ip route add 10.0.0.21 dev ib1 |

Now that's not the neatest arrangement to cable up but as the switch typically costs around 20x the cost of a card it's worth considering. The other point to consider is the Subnet Manager. This is a concept foreign to ethernet networks, because for ethernet cards ethernet frames are understood natively. However, we're dealing with infiniband here and the native protocol ain't ethernet anymore! Of course the true aficionados would point out that using raw Infiniband is more efficient, faster and lower latency; but we (probably) aren't solving HPC problems in our home lab so TCP/IP compatability is... nice. To run TCP/IP over Infiniband we will use to IPoIB extension to Infiniband. In order to do this our network needs to have a Subnet Manager. You only need one subnet manager but they will get out of each others way and you always want at least one instance running so it makes sense to have a backup instance.

If you're using Linux then simply install `opensm` on each host and configure them all to start on boot.

Once the subnet is up, set the IP addresses and you're off!
