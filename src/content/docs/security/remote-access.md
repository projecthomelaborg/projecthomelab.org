---
title: "Remote Access"
description: "There are two main scenarios which could be referred to as remote access; access from a remote external location into your network, and headless access to…"
sidebar:
  label: "Remote Access"
  order: 1
lastUpdated: 2025-02-21
wikiTitle: "Remote Access"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

There are two main scenarios which could be referred to as remote access; access from a remote external location into your network, and headless access to your homelab servers (e.g. if they're in the loft). For information on headless access see the [Headless Access](/management/headless-access/) article.

## Introduction

For many people, remote access is not important as you predominantly use the lab from home in your free time, but for others remote access is critical. Some example use cases for remote access are described below.

## Use Cases

The use cases for remote access to your homelab include:

- You use your homelab as a gateway to provide remote access to your home network
- The homelab as a cheap dev/test environment, because your employer is too mean to pay for a proper one! Many people use their homelabs for testing out work solutions and issues prior to implementing them on live systems.
- Your homelab is actually hosted in a location other than your home, for example if your employer provides you with rack space, or you use a colocation environment

## Solutions

Solutions include, but are not limited to the following:

| Category  | Product                           | Link                                        | Notes                                                                                                                                                                                                                                                                                                                                                                                                                     |
|-----------|-----------------------------------|---------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Software  | Windows RDS                       | [RDP Web Access](/security/rdp-web-access/) | Built into Windows! Extra flexibility and security can be provided through RD Web Access.                                                                                                                                                                                                                                                                                                                                 |
| Software  | OpenVPN                           | <https://openvpn.net/>                      | Comes available as a standard installable download for Linux, or a ready-to-use OVA licensed for two concurrent users!                                                                                                                                                                                                                                                                                                    |
| Software  | WireGuard | <https://www.wireguard.com>                 | A very lightweight, yet powerful and fast, open source VPN. Clients available for Windows, Mac, Linux, iOS, Android, and many other systems. Can be a bit tricky to initially setup.                                                                                                                                                                                                                                      |
| HW Router | Draytek                           | <https://www.draytek.com/>                  | If you want to do it in hardware, the Draytek home routers are the defacto standard for awesome routers which have built in VPN capabilities. Recommended models include Draytek Vigor 2925 (all variants),Y,Z                                                                                                                                                                                                            |
| HW Router | Netgear                           | <https://www.Netgear.com/>                  | Alternative hardware, the Netgear home routers are good routers which have built in VPN capabilities. A particular good one is the D6400 due to universal usage across ADSL/VDSL/Cable or any Ethernet service) Although, to note, a lot of the Netgear router use OpenVPN for the VPN Feature - it is limited to TAP type and not TUN - so Android and iOS support not supported. \*This might change with new firmwares |

Remote Access Solutions

### OpenVPN

OpenVPN is a popular remote access solution that is built into many firewalls, both commercial and free/open source. For example, a popular deployment option of OpenVPN is through the OPNsense firewall. By deploying OpenVPN through your network firewall directly, you get better control over network routing, network security, and it's generally easier to configure and manage. Most firewall providers will provide an automated way of downloading a package with the OpenVPN client and/or the profile.

### WireGuard

Another VPN option built into most modern firewalls is WireGuard. The firewalls will help generate the necessary keys and creating peers.
