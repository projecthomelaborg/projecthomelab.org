---
title: "10Gb and faster networking"
description: "When a homelab needs more than gigabit, compare 2.5Gb, 10Gb SFP+, 10GBASE-T and 25Gb, and learn which parts to buy."
sidebar:
  label: "10Gb and faster networking"
  order: 2
lastUpdated: 2026-10-30
wikiTitle: "10Gbps Homelab Networking"
---

Gigabit is fine for many labs. You'll notice the difference with faster networking if you run shared storage or Ceph, migrate VMs often, or move big files to a NAS with flash or several drives. Your internet speed and most self-hosted services won't benefit at all.

## Which speed?

| Speed | Cabling | Good for | Watch out for |
| --- | --- | --- | --- |
| **2.5GbE** | Existing Cat5e or better | Cheap upgrade for mini PCs and NAS boxes | Check NIC drivers on non-Linux hypervisors |
| **5GbE** | Cat5e or Cat6 | USB adapters and some NAS models | Fewer switches available |
| **10GbE SFP+** | DAC or fiber | Racks, servers, storage networks | Needs SFP+ ports on both ends |
| **10GBASE-T** | Cat6 or Cat6a | Reusing existing cable runs | Hotter and uses more power than SFP+ |
| **25GbE SFP28** | DAC or fiber | Ceph and fast storage networks | Used NICs are cheap, but switches can be loud |
| **40/100GbE QSFP** | DAC or fiber | Direct links between hosts | Loud switches, high power, and PCIe limits |

## Connecting hosts

- **DAC (direct-attach copper) cables** are the cheapest choice for short runs in a rack. Use them where you can.
- **Fiber** is cheap, light and runs for long distances. For short links, use OM3 or OM4 multimode fiber and SR optics. Use single-mode for long runs through a house.
- **SFP+ to RJ45 modules** are useful, but they run very hot and may not suit every switch. Check the switch maker's guidance on how many it supports.
- Vendors may lock their switches and NICs to approved optics. Sites such as [FS](https://www.fs.com/) and [10Gtek](https://www.10gtek.com/) sell compatible modules.

## You may not need a switch

Two hosts can connect directly, and three hosts can connect in a ring using dual-port NICs. This is a cheap way to get a fast storage or migration network. The [Proxmox documentation](https://pve.proxmox.com/wiki/Full_Mesh_Network_for_Ceph_Server) explains a full-mesh setup for Ceph.

## Network cards

Popular used choices include the Intel X520 and X710, and the Mellanox (now NVIDIA) ConnectX-4 and later. Check these things first:

- **Hypervisor support.** Newer hypervisor releases drop older cards. The Mellanox ConnectX-3 is cheap and common but is being phased out by vendors.
- **PCIe bandwidth.** Each 10Gb port needs about two PCIe 3.0 lanes, so a dual-port card needs x4. Mini PCs may only offer an M.2 adapter.
- **Power and cooling.** Server NICs expect server airflow, so they may overheat in a quiet desktop case. Point a small fan at them.
- **Counterfeits.** Cheap Intel-branded cards are often fakes. Buy from reputable sellers.

## Switches

For most labs, a small fanless or quiet switch is a far better choice than an old data center switch:

- **Small and quiet:** MikroTik, TP-Link Omada and UniFi all offer small 2.5Gb and 10Gb switches. Many have no fan or a quiet one.
- **Used enterprise:** Brocade, Arista and others can be excellent value, offering many ports for the money. They also tend to be loud and power-hungry, so check before buying.

For the most part, 10Gb is only worth it between devices that can use it. Your storage needs to be fast enough, too. A single hard drive won't fill even a 2.5Gb link.

## Jumbo frames

A 9000-byte MTU can lower CPU use on old hardware, but it's rarely needed on modern hardware and can cause confusing failures if every device on the path isn't set the same. If you do use it, keep it on a dedicated storage network.

## Testing

Measure your actual speed with [iperf3](https://iperf.fr/):

```sh
iperf3 -s                 # on one host
iperf3 -c <server-ip> -P 4   # on the other
```

For speeds above 25Gb, InfiniBand is another option. See [InfiniBand for 10–100Gbps](/networking/infiniband-10-100gbps/).
