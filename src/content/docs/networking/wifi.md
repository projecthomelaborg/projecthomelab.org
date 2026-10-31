---
title: "Home Wi-Fi"
description: "Just because it's a home network doesn't mean you can't have good Wi-Fi. Compare UniFi, Omada, MikroTik, OpenWrt and more."
sidebar:
  label: "Home Wi-Fi"
  order: 5
lastUpdated: 2026-10-30
wikiTitle: "Home Wi-Fi"
---

Just because it's a home network doesn't mean you can't have great Wi-Fi with enterprise-level features. A separate router, switch and access points (APs) also make your network far easier to manage than an all-in-one ISP box.

## What matters

- **Placement beats specs.** One AP in the middle of each floor, mounted high and away from metal, usually beats a more expensive AP in a cupboard.
- **Wired backhaul.** Connect your APs with Ethernet wherever you can. Mesh over wireless loses speed at each hop.
- **Wi-Fi standards.** Wi-Fi 6 (802.11ax) is a sensible minimum. Wi-Fi 6E and Wi-Fi 7 add the uncrowded 6GHz band, but it doesn't travel through walls well, and you need compatible clients and a multi-gig uplink to benefit.
- **VLAN-tagged SSIDs.** Put trusted, IoT and guest devices on separate SSIDs mapped to separate [VLANs](/networking/ip-addressing/#vlans-and-segmentation).
- **PoE.** Most business APs are powered over Ethernet, so check that your switch or injector provides enough power. Wi-Fi 7 APs often need PoE+ or better.

## Options

| Vendor | Management | Good for | Watch out for |
| --- | --- | --- | --- |
| [Ubiquiti UniFi](/networking/ubiquiti/) | Self-hosted or console | A polished, all-in-one system | Hardware availability, some cloud account features |
| [TP-Link Omada](https://www.omadanetworks.com/) | Self-hosted, hardware or cloud | Value for money | Less polish than UniFi |
| [MikroTik](https://mikrotik.com/) | RouterOS | Maximum control at low cost | A steep learning curve, and its APs are rarely the strongest choice |
| [OpenWrt](https://openwrt.org/) | Self-managed | Reusing consumer routers, full control | Check the [hardware table](https://openwrt.org/toh/start) before you buy |
| [Cisco Meraki](https://meraki.cisco.com/) | Cloud only | Learning Meraki if you already work with it | Requires an ongoing license |
| Used enterprise (Aruba, Ruckus and others) | Varies | Great radios for little money | Older models may lack security updates and need a controller |

Older guides may recommend Open-Mesh or Aerohive. Open-Mesh was acquired by Datto, and Aerohive by Extreme Networks. Used hardware from either may depend on a discontinued cloud service, so check before you buy.

## Security

- Use WPA3 where your devices support it, with WPA2/WPA3 transition mode for older ones.
- Turn off WPS.
- Keep IoT devices on their own network.
- If you want to learn enterprise authentication, try WPA2/WPA3-Enterprise with FreeRADIUS or a similar tool.
- Keep your firmware up to date. Older APs that no longer get updates should be replaced.
