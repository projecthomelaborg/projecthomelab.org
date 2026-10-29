---
title: "The unofficial homelab HCL"
description: "This Mikrotik Cloud Router Switch provides tons of features, and can be purchased at a decent price. Cheaper models with less ports do exist. The CRS can…"
sidebar:
  label: "The unofficial homelab HCL"
  order: 15
lastUpdated: 2020-07-31
wikiTitle: "The Unofficial Homelab HCL"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

## Networking Equipment

See also :Category:Networking

### MikroTik

#### Switches

##### CRS125-24G-1S-IN

This Mikrotik Cloud Router Switch provides tons of features, and can be purchased at a decent price. Cheaper models with less ports do exist. The CRS can be provide advanced services such as DHCP, Certificate Authority Server, and DNS Server. This switch supports an MTU size of 4064.

<figure class="wiki-figure"><img src="/images/2/2c/Crs125.jpg" alt="Mirktoik Cloud Router Switch - 24 Port" loading="lazy" decoding="async"><figcaption>Mirktoik Cloud Router Switch - 24 Port</figcaption></figure>

[Mikrotik CRS125-24G-1S-IN](https://routerboard.com/CRS125-24G-1S-IN)

### Routers

#### OpenWRT

Anything on the [OpenWRT](https://wiki.openwrt.org/toh/start) (or it's imminent successor [LEDE](https://lede-project.org/toh/views/toh_available_864)) will enable you to support some useful and fancy features with a good level of reliability and feature parity between models, making for a nice familiar setup routine and enabling you to do some nice tricks like routing between VLANs on home equipment.

### Ubiquiti

#### Switches

Cisco SFP-H10GB-CU3M

## SSDs

### PCIe

#### FusionIO

- [Fusion-io ioDrive2 785GB, Product Number:F00-001-785G-CS-0001](http://www.ebay.com/sch/i.html?_from=R40&_sacat=0&_nkw=F00-001-785G-CS-0001&_sop=15)

This card is on the HCL, and since it's older it can be found for cheap, but it's an enterprise drive!

`lspci -v`  
`0000:02:00.0 Mass storage controller Mass storage controller: SanDisk ioMemory [fioiom0]`  
`vmkchdev -l |grep 0000:02:00.0`  
`0000:02:00.0 1aed:2001 1aed:2001 vmkernel fioiom0`

## Desktop Hardware

Standard business/consumer desktops are often workable as low cost hypervisor hosts. They are usually available for a sensible price second hand on ebay and local sale sites, or possibly from an employer who is having a hardware refresh and is happy to loan a budding homelabber some old hardware. Desktop hardware would not usually be found in, for example, VMware's official HCL but will often still work in a vendor-unsupported configuration. The models below have been successfully used by the community.

| Manufacturer | Model             | Hypervisor         | Configuration Notes                                                                                                                        |
|--------------|-------------------|--------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| Dell         | OptiPlex 790 USFF | vSphere ESXi 6.0U2 | A practial ultra-small form factor where space is an issue, but additional PCI cards are not required. Implemented with 16GB (2x8GB) DIMM. |
| Intel        | NUC               | vSphere            | See [Main Page](/hardware/intel-nuc/#intel-nuc-models) for full list of models                                                             |
| Example      | Example           | Example            | Example                                                                                                                                    |
