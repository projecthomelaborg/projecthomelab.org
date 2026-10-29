---
title: "IP Addressing"
description: "When it comes to your homelab, IP addressing is important. There are a few points to consider before settling on an IP addressing scheme. Keep in mind…"
sidebar:
  label: "IP Addressing"
  order: 1
lastUpdated: 2020-08-01
wikiTitle: "IP Addressing"
---

When it comes to your homelab, IP addressing is important. There are a few points to consider before settling on an IP addressing scheme. Keep in mind that changing IPs or mixing and matching IP schemes is not recommended and can be difficult.

### Picking a Supernet

First things first, you want to pick a supernet. Typically, this will be one of the three RFC 1918 private address ranges. I suggest using 10.0.0.0/8 because this gives you well over 16 million IPs to play with - which comes in very handy when implementing VLANs and avoiding overlaps.

| RFC1918 name | IP address range              | Number of addresses | Largest CIDR block (subnet mask) | Host ID size | Mask bits | *Classful* description[^1] |
|--------------|-------------------------------|---------------------|-------------------------------------------------------------------------------|--------------|-----------|-----------------------------------------------------------|
| 24-bit block | 10.0.0.0 – 10.255.255.255     | 16,777,216          | 10.0.0.0/8 (255.0.0.0)                                                        | 24 bits      | 8 bits    | single class A network                                    |
| 20-bit block | 172.16.0.0 – 172.31.255.255   | 1,048,576           | 172.16.0.0/12 (255.240.0.0)                                                   | 20 bits      | 12 bits   | 16 contiguous class B networks                            |
| 16-bit block | 192.168.0.0 – 192.168.255.255 | 65,536              | 192.168.0.0/16 (255.255.0.0)                                                  | 16 bits      | 16 bits   | 256 contiguous class C networks                           |

#### Avoiding 192.168.0.0/16

I strongly recommend avoiding the 192.168.0.0/16 range of IPs due to backward compatibility issues. The reason is that some older networking devices or software may not recognize classless networking. While you *can* do 192.168.0.0/25, this may not make some legacy devices happy. Usually, with classful, you can go smaller, not larger. Although this is rare, you can occasionally run into problems.

[^1]: Classful addressing is obsolete and has not been used in the Internet since the implementation of Classless Inter-Domain Routing (CIDR), starting in 1993. For example, while 10.0.0.0/8 was a single class A network, it is common for organizations to divide it into smaller /16 or /24 networks. Contrary to a common misconception, a /16 subnet of a class A network is not referred to as a class B network. Likewise, a /24 subnet of a class A or B network is not referred to as a class C network. The class is determined by the first three bits of the prefix.[^2]
