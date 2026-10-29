---
title: "VMware VSAN"
description: "This is the article template page. When you create a brand new article, you could simply copy all of the content / code from here, then replace it with…"
sidebar:
  label: "VMware VSAN"
  order: 4
lastUpdated: 2020-07-31
wikiTitle: "VMware VSAN"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

## Introduction

This is the article template page. When you create a brand new article, you could simply copy all of the content / code from here, then replace it with your own content! :)

Bear in mind that some or all of these sections may not be relevant to your article, so please delete or add sections as appropriate.

## Pros and Cons

XYZ

## Licensing

ABC

## Use Cases

The use cases for this type of technology are blah blah

## Feature History

- 1st release
- \[...\]
- VSAN 6.2

## VSAN Configuration

- Hybrid
- All Flash

## Implementation type

- VSAN cluster
- Stretched Cluster
- ROBO
- Single node (unsupported)
- Nested ?

## Sizing Guide

## Monitoring

- VSAN Observer
- VSAN 6.2 Performance Service
- vRealize Log Insight
- Sexigraf

## Known Issues and Solutions

This is specifically to detail any issues with the technology being discussed, and how to resolve them. See the [Intel NUC](/hardware/intel-nuc/) page for an example.

- Disable VSAN Device Monitoring
  - esxcli system settings advanced set -o /LSOM/VSANDeviceMonitoring -i 0

<!-- -->

- Disable VSAN Slow Device Unmounting
  - esxcli system settings advanced set -o /LSOM/lsomSlowDeviceUnmount -i 0

## VSAN Homelab HCL

**As this is a storage platform where you might end up migrating your homelab production data, keep in mind that by using components not certified by VMware, you can end up in [VSAN](https://virtualhobbit.com/2016/05/02/my-self-inflicted-vsan-nightmare/) [nightmare](https://www.reddit.com/r/vmware/comments/26zbkb/my_vsan_nightmare/). But YMMV.**

The official VSAN HCL file is available [here](http://partnerweb.vmware.com/service/vsan/all.json). This is a JSON formatted file which is the source of knowledge behind the VSAN Health Check Plugin. This is a good start to finding VSAN compatible hardware, which can be also found on the VMware's official HCL.

| Form Factor | Type | Manufacturer | Model   | Capacities Available (GB)  | Recommended tier | On VMware HCL | Notes                                                                                                       |
|-------------|------|--------------|---------|----------------------------|------------------|---------------|-------------------------------------------------------------------------------------------------------------|
| 2.5"        | SSD  | Samsung      | EVO 850 | 120, 250, 500, 1000, 2000! | Capacity         | ?             | Great for capacity tier. For caching, using something with better [DWPD](/community/jargon-buster/#storage). |
| mSATA       | SSD  | Intel        | 525     | 30,60,120,240              | TBC              | ?             |                                                                                                             |
| M.2         | NVMe | Samsung      | SM951   | 128                        | Caching          | ?             | Very quick NVMe device!                                                                                     |
| 2.5"        | SSD  | Samsung      | SM863   | 120,240,480,960,1920       | Cache/Capacity   | Yes           | Affordable drives which can be found on official HCL.                                                       |

Tested and Proven VSAN Homelab SSDs
