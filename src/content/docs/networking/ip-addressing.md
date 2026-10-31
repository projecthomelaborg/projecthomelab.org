---
title: "IP addressing and VLANs"
description: "Plan your homelab's IP addresses and VLANs so they don't conflict with VPNs and are easy to remember, with a sample plan you can copy."
sidebar:
  label: "IP addressing and VLANs"
  order: 1
lastUpdated: 2026-10-30
wikiTitle: "IP Addressing"
---

A little planning now saves a painful renumbering later. Changing IP addresses once everything depends on them is difficult, so it's worth getting a scheme you can grow into.

## Pick a private range

Use the private ranges from [RFC 1918](https://datatracker.ietf.org/doc/html/rfc1918):

| Range | Addresses | CIDR |
| --- | --- | --- |
| 10.0.0.0 – 10.255.255.255 | 16,777,216 | 10.0.0.0/8 |
| 172.16.0.0 – 172.31.255.255 | 1,048,576 | 172.16.0.0/12 |
| 192.168.0.0 – 192.168.255.255 | 65,536 | 192.168.0.0/16 |

**Pick something unusual, such as a block in 10.x.x.x or 172.16–31.x.x.** The real risk isn't the range, it's overlap. Hotels, coffee shops and most home routers use 192.168.0.x or 192.168.1.x. Your VPN can't route to your lab properly if the network you're visiting uses the same addresses. Many corporate networks also use chunks of 10.x, so if you connect through a work VPN, check for clashes there too.

Avoid `100.64.0.0/10`, which is reserved for carrier-grade NAT and used by [Tailscale](/security/remote-access/#mesh-vpns).

## A sample plan

Let the VLAN ID match the third octet, so you can tell at a glance what's what:

| VLAN | Subnet | Purpose | Internet access | Can reach |
| --- | --- | --- | --- | --- |
| 10 | 10.42.10.0/24 | Management (hypervisors, BMCs, switches) | Updates only | Everything |
| 20 | 10.42.20.0/24 | Trusted devices | Yes | Published services |
| 30 | 10.42.30.0/24 | Lab servers | Yes | Internet only |
| 40 | 10.42.40.0/24 | IoT | Limited | Nothing else |
| 50 | 10.42.50.0/24 | Guests | Yes | Nothing else |
| 60 | 10.42.60.0/24 | Storage | No | Storage clients only |
| 70 | 10.42.70.0/24 | Experiments | Optional | Nothing else |

Within each subnet, use a consistent layout. For example, use `.1` for the gateway, `.2`–`.49` for static infrastructure, and `.100`–`.199` for DHCP.

## VLANs and segmentation

VLANs split one physical network into several separate ones. For this to work, you need a managed switch, and a [firewall or router](/security/firewalls/) that can route between VLANs.

- Traffic between VLANs goes through your firewall, so that's where you control access.
- Default to denying traffic between networks, and add only the rules you need.
- Move your **management network** first, since it's the most valuable. Also, take care not to lock yourself out when you change it.
- Discovery protocols such as mDNS (used by Chromecast and AirPlay) don't cross VLANs without an mDNS repeater on your router.

## DNS

Use names instead of memorizing addresses. Run a local DNS server, such as Pi-hole, AdGuard Home, Unbound or your firewall's built-in one.

For your internal domain, avoid `.local`, which is used by mDNS and can cause lookups to behave strangely. Two good options are:

- A subdomain of a domain you own, such as `lab.example.com`. This also makes it easy to [get real certificates](/security/certificates/).
- `home.arpa`, which is [reserved for home networks](https://datatracker.ietf.org/doc/html/rfc8375).

## IPv6

Many ISPs now provide IPv6, and your lab is a good place to learn it. Remember that:

- Globally routable IPv6 addresses aren't hidden behind NAT, so your firewall has to do the job of blocking inbound traffic.
- Consider using unique local addresses (`fd00::/8`) for stable internal addressing.
- If you aren't ready to use IPv6, turn it off deliberately on your router instead of leaving it half-configured.

## Old advice to ignore

You may read that 192.168.x.x should be avoided because old devices can't handle classless subnets. That's largely a concern of the past, as classful networking has been obsolete since 1993. The VPN overlap above is the real reason to choose another range.
