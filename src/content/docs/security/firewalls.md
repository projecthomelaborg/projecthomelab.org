---
title: "Firewalls"
description: "Compare OPNsense, pfSense, OpenWrt and other firewalls for a homelab, and decide whether to run yours on hardware or in a VM."
sidebar:
  label: "Firewalls"
  order: 4
lastUpdated: 2026-10-30
wikiTitle: "Firewalls"
---

A dedicated firewall is one of the most useful things you can add to a homelab. It routes between your [VLANs](/networking/ip-addressing/#vlans-and-segmentation), controls what can reach what, and teaches you real networking.

## Options

| Software | Cost | Good for | Notes |
| --- | --- | --- | --- |
| [OPNsense](https://opnsense.org/) | Free | Most homelabs | FreeBSD-based, regular releases, with a modern interface and many plugins |
| [pfSense CE](https://www.pfsense.org/) | Free | Following existing guides | Long established. Netgate focuses more on its paid Plus edition |
| [OpenWrt](https://openwrt.org/) | Free | Low-cost routers | Linux-based. Good for reusing consumer hardware |
| [VyOS](https://vyos.io/) | Free rolling builds | Command-line and routing practice | Network-engineer style. Good for automation and BGP practice |
| [MikroTik RouterOS](https://mikrotik.com/) | Included with hardware | Lots of features at a low price | Also offers a [virtual router (CHR)](https://help.mikrotik.com/docs/spaces/ROS/pages/18350234/Cloud+Hosted+Router+CHR), with a speed-limited free tier |
| [Sophos Firewall Home Edition](https://www.sophos.com/en-us/free-tools/sophos-xg-firewall-home-edition) | Free for home use | Learning a commercial product | Limited to 4 cores and 6GB of RAM when we checked. The older Sophos UTM [reached end of life in 2026](https://community.sophos.com/utm-firewall/lifecycle-and-migration/f/recommenced-reads/139151/sophos-utm-sg-end-of-life-frequently-asked-questions), so don't start on it |
| UniFi gateways | Hardware | An all-in-one [UniFi](/networking/ubiquiti/) network | Simple, but less flexible |

## Hardware or a VM?

**A separate box** is the usual advice. A low-power mini PC with two or more Intel NICs is the most popular option. Your network keeps working when you restart your lab, so your family won't lose internet access when you're experimenting.

**A VM** works well in a nested lab or on a host dedicated to it, but your whole network depends on that host. If you do it for your main firewall:

- Pass through a dedicated NIC for the WAN connection, or use a dedicated bridge.
- Don't give the host itself an address on the WAN side.
- Keep your ISP's router or a spare device handy for when things break.
- Make sure the firewall VM starts first.

## Rules to start with

1. Default to blocking traffic between VLANs.
2. Allow your trusted network to reach the services it needs.
3. Restrict the management network to a few admin devices.
4. Block IoT and guest networks from all of your private ranges, but allow internet access.
5. Don't allow any inbound traffic from the internet, except your VPN if you need it.
6. Log blocked traffic while you're building your rules, so you can see what breaks.

## Going further

- **Intrusion detection:** Suricata and CrowdSec are available for many platforms. See [Endpoint protection and intrusion detection](/security/antivirus/).
- **DNS filtering:** Unbound, AdGuard Home or Pi-hole block a lot of ads and malicious domains.
- **High availability:** OPNsense and pfSense support CARP for a failover pair. It's great for learning, and overkill for most homes.
- **Configuration backups:** export your configuration regularly, and keep a copy off the box.
