---
title: "Home Wi-Fi"
description: "Just because it's a home network, doesn't mean you don't deserve decent wi-fi, with enterprise level features!"
sidebar:
  label: "Home Wi-Fi"
  order: 5
lastUpdated: 2020-07-31
wikiTitle: "Home Wi-Fi"
---

Just because it's a home network, doesn't mean you don't deserve decent wi-fi, with enterprise level features!

## Cisco Meraki

See Full Article

## Aerohive

This brand focuses on ease of management, fast deployment and L7 visibility. The serial number of each device is added to your account during the sale and as soon as you connect them to a network with internet access, they show up in the web-based management console (http://myhive.aerohive.com). You can set up profiles in the management console that defines all the properties of the Access Point (passwords, availability of a local console/SSH, IP addresses, VLAN IDs, RADIUS authentication, wireless profiles, frequencies, mesh backhaul and many other properties). The goal is to never log in to the device itself. Just plug it in and it's ready to use. This approach has obvious benefits for remote and branch office deployments. Just get someone to unbox the thing, plug it in and it works. Changes needed in a lot of locations? Just edit the policy and the access points will update themselves. Each access point uses deep packet inspection to analyse traffic. The results are reported to the web management console so you can see who did what when. Sites that use SSL are trackable by IP address so you can report on them anyhow. You are able to build policies based on this traffic analysis (for example: no more Facebook access after 10 pm or higher priority for World of Warcraft when this traffic originates from daddies game machine). Multiple access points offer the ability for client triangulation, fast roaming and other nifty stuff. The downside to the web-based management approach is that you need access to the web management console in order to use the advanced features. If your support expires, so does your access to the management console. You are able to manage the access points themselves using a standard console cable or through the SSH console so the devices do not become worthless without a support contract. You do miss all the nice features though.

## Ubiquiti Networks

This line of enterprise grade network access points are designed to be reliable, easily scalable, high-speed, and high performance. In order to manage these access points, Ubiquity requires that you host the UniFi web based controller software on your network, or purchase a cloud key. The two lower end models, the UAP-AC-LITE and UAP-AC-LR, support 24V passive PoE, while the two higher end models, the UAP-AC-PRO and the UAP-AC-EDU, are compatible with 802.3af PoE/802.3at PoE+ and 802.3at PoE+ respectively.

## Mikrotik

Linux based network appliances from Eastern Europe. Cheap, reliable and power efficient. By no means easily configurable because of the sheer amount of knobs and dials that are available for tweaking and optimizing. Depending on the hardware model you choose, the device can be optimized for switching, routing, Wifi or any combination of these three components. Mikrotik makes two different software versions:

- RouterOS - Full fledged VPN endpoint/router/switch/access point OS. Some features depend on the model Routerboard you buy.
- SwitchOS - Offers simple web-based configuration. Only for layer2 stuff: Does offer VLAN support, port based bandwith control, port mirroring and simple ACLs. Does not offer routing protocols, no Wifi configuration, no DHCP/DNS/other services, no firewalling, no NATing, no mangle rules etc.

When possible, avoid the SwitchOS based devices as the RouterOS devices cost just a little more but offer way more features. Mikrotik offers a virtual appliance that works well in an ESXi or Hyper-V hypervisor. The free version of this virtual appliance is limited to 1Mbit throughput but fully functional. For example: it can serve as a Wireless Controller without issues.

You could buy a Mikrotik CRS125-24G-1S-2HnD-IN (24 port gigabit switch (+ 1 SFP) with built-in router and 802.11n access point) to use at home. Set it up as your domestic gateway device, firewall, VPN endpoint (for when you're not at home or to connect to a similar device at a relative/friend), wireless controller for central management of the access points throughout your home (have a look at the RBwAPG-5HacT2HnD-BE for a small and fast AC model) and have ports to spare for your homelab equipment.

## Other Vendors

- [Open-Mesh](/networking/)
- [UniFi](https://www.ubnt.com/enterprise/)
