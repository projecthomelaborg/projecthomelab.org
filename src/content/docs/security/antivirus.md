---
title: "Antivirus and UTMs"
description: "Although the title of this article suggests you need some antivirus for your homelab, in reality you need something more robust if you plan to allow your…"
sidebar:
  label: "Antivirus and UTMs"
  order: 5
lastUpdated: 2025-10-31
wikiTitle: "Homelab Antivirus"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

## Introduction

Although the title of this article suggests you need some antivirus for your homelab, in reality you need something more robust if you plan to allow your homelab to do anything on the internet other than connect to your favourite vendor sites. You need a threat management / threat protection solution.

## Solutions

The following are a number of free commercial-grade threat management solutions from Enterprise vendors which have been tested by the community, listed by category:

| Category  | Vendor                        | Product & Link                                                                                                           | Notes                                                                                                                                                                    |
|-----------|-------------------------------|--------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| UTM       | [Sophos](/security/)   | [UTM Home Edition](https://www.sophos.com/en-us/products/free-tools/sophos-utm-home-edition.aspx#)                       | Free for up to 50 IPs on your network. Can run as a VM appliance or native physical.                                                                                     |
| Client AV | [Sophos](/security/)   | [Sophos Home Edition (Win/OSX)](https://www.sophos.com/en-us/lp/sophos-home.aspx)                                        | Free for PCs and Macs                                                                                                                                                    |
| Client AV | [Sophos](/security/)   | [Sophos for Linux](https://www.sophos.com/en-us/products/free-tools/sophos-antivirus-for-linux.aspx)                     | Free for Linux                                                                                                                                                           |
| Firewall  | [Sophos](/security/)   | [Sophos XG Firewall Home Edition](https://www.sophos.com/en-us/products/free-tools/sophos-xg-firewall-home-edition.aspx) | Includes anti-malware, web security and URL filtering, application control, IPS, traffic shaping, VPN, reporting and monitoring!                                         |
| Firewall  | pfsense | [pfsense Firewall](https://www.pfsense.org/)                                                                             | Lightweight, free and open source firewall based on FreeBSD with a host of plugins and great community support. Runs well as a virtual appliance, or on low end hardware |

Free Security Software and Appliances

## Commercial Solutions (Trial)

| Category | Vendor                      | Product & Link                                                       | Notes                                                |
|----------|-----------------------------|----------------------------------------------------------------------|------------------------------------------------------|
| Various  | McAfee | [McAfee ePolicy Orchestrator](https://www.trellix.com/products/epo/) | Commercial enterprise software, available as a trial |

Commercial Solutions offered as a trial basis
