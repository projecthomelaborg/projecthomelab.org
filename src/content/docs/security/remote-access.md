---
title: "Remote Access"
description: "Reach your homelab from anywhere without opening ports. Compare mesh VPNs, WireGuard, OpenVPN and tunnels, and find out which is right for you."
sidebar:
  label: "Remote Access"
  order: 1
lastUpdated: 2026-10-30
wikiTitle: "Remote Access"
---

There are two kinds of remote access. This page covers how to reach your network from elsewhere. For managing a machine without a screen, see [Headless Access](/management/headless-access/).

**Don't forward ports for RDP, SSH, or management interfaces.** Use one of the options below.

## Which option?

| Option | Open port needed? | Works behind CGNAT? | Good for |
| --- | --- | --- | --- |
| [Mesh VPN](#mesh-vpns) | No | Yes | Most people. Easy private access to everything |
| [WireGuard](#wireguard) | Yes (one UDP port) | No, without a relay | Control and no third party |
| [OpenVPN](#openvpn) | Yes | No, without a relay | Compatibility, including TCP 443 on restrictive networks |
| [Tunnels](#tunnels) | No | Yes | Publishing a web service to other people |
| [Guacamole](/security/guacamole/) | Behind one of the above | Depends | Browser-based desktop and SSH access |

CGNAT means your ISP shares one public IP address among many customers, which stops inbound connections reaching you. It's common on mobile and fiber services. To check, compare the WAN address on your router with what an IP lookup site shows. If they don't match, you're probably behind CGNAT.

## Mesh VPNs

Mesh VPNs connect your devices directly using WireGuard, with a coordination service to handle keys and find a path through NAT. There's little to configure.

- [Tailscale](https://tailscale.com/) is the most popular option. It has a free personal plan, and you can advertise a whole subnet from one device so that you don't have to install it everywhere.
- [Headscale](https://headscale.net/) is an open source, self-hosted control server for Tailscale clients.
- [NetBird](https://netbird.io/) is an open source alternative that you can self-host or use as a service.
- [ZeroTier](https://www.zerotier.com/) is a similar service that works at Layer 2.

Using a hosted service means you trust that provider's control plane. Tailnet Lock and self-hosting reduce that trust if it concerns you.

## WireGuard

[WireGuard](https://www.wireguard.com/) is a fast, simple, modern VPN built into the Linux kernel. Most firewalls, including OPNsense and pfSense, support it directly. You forward one UDP port, and it doesn't respond to unauthenticated traffic, so scanners can't easily detect it. You need a public IP address, or a cheap VPS as a relay. Use dynamic DNS if your address changes.

## OpenVPN

[OpenVPN](https://openvpn.net/) is older and slower than WireGuard, but it's mature and is built into many firewalls. It's useful for networks that block UDP, because it can run over TCP port 443. For a new setup, start with WireGuard unless you need this.

## Tunnels

A tunnel makes an outbound connection from your network to a provider, which then forwards public traffic back to your service. This means you don't need any open ports.

- [Cloudflare Tunnel](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/) is free and pairs well with Cloudflare Access for login protection. Cloudflare can see the traffic, since it terminates TLS. Check its terms if you plan to stream media.
- [Pangolin](https://github.com/fosrl/pangolin) and similar tools let you self-host the same idea on a cheap VPS.

Tunnels make a service public, so only use them for services intended for others. See [if something really must be public](/start-here/securing-a-homelab/#if-something-really-must-be-public).

## Windows Remote Desktop

Use RDP through your VPN rather than exposing it. If you need browser access or want to practice Microsoft's stack, see [RD Web Access](/security/rdp-web-access/) or [Apache Guacamole](/security/guacamole/).

## Use cases

- Reaching home services from your phone.
- Working on your lab from the office or while you're traveling, as long as your employer's policies allow it.
- Reaching a server you've colocated, or one in a friend or family member's home.
- Using your home connection on untrusted Wi-Fi.

## Tips

- Use your VPN's split-tunnel setting, unless you specifically want to send all traffic home.
- Avoid common subnets such as 192.168.1.0/24, or you'll get [address clashes](/networking/ip-addressing/#pick-a-private-range) on other networks.
- Revoke access for lost devices right away.
- Keep your VPN gateway patched.
- If you rely on remote access, keep a second way in, in case the first fails while you're away.
