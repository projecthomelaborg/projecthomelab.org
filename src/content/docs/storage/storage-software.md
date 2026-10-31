---
title: "Homelab Storage Software"
description: "Compare TrueNAS, Unraid, OpenMediaVault, Ceph, Windows Storage Spaces and other storage software you can use in a homelab."
sidebar:
  label: "Homelab Storage Software"
  order: 2
lastUpdated: 2026-10-30
wikiTitle: "Homelab Storage Software"
---

There's a lot of storage software available. Some of it's open source and built for small systems, and some is a free or simulated version of an enterprise product. Check the current limits before you commit, since free tiers change.

## NAS operating systems

| Software | Cost | Block | File | Good for | Notes |
| --- | --- | --- | --- | --- | --- |
| [TrueNAS Community Edition](https://www.truenas.com/truenas-community-edition/) | Free | ✔ | ✔ | ZFS with a good interface | Linux-based, with apps and VMs. Replaces FreeNAS, TrueNAS CORE and SCALE |
| [Unraid](https://unraid.net/) | Paid | | ✔ | Mixed drive sizes, media libraries | Can add one drive at a time, and now also supports ZFS. Has good Docker and VM support |
| [OpenMediaVault](https://www.openmediavault.org/) | Free | ✔ | ✔ | Older or low-power hardware | Lightweight and based on Debian |
| [XigmaNAS](https://xigmanas.com/) | Free | ✔ | ✔ | FreeBSD fans | Descended from the original FreeNAS code |
| Plain Linux | Free | ✔ | ✔ | Learning | ZFS, mdraid, LVM, Samba and NFS. Often overlooked and very capable |
| [Proxmox VE](/hypervisors/proxmox-ve/) | Free | ✔ | | Combining storage and VMs | Has ZFS and Ceph built in, but no built-in NAS interface |
| Windows Server | Licensed | ✔ | ✔ | Microsoft-focused labs | SMB, NFS, iSCSI target and Storage Spaces. Free for 180 days as an [evaluation](/licensing/microsoft/#evaluations) |

## Distributed and hyper-converged storage

| Software | Cost | Block | File | Object | Notes |
| --- | --- | --- | --- | --- | --- |
| [Ceph](https://ceph.io/) | Free | ✔ | ✔ | ✔ | The standard for open source scale-out storage. Built into Proxmox. Needs three or more nodes |
| [Longhorn](https://longhorn.io/) | Free | ✔ | | | Block storage for Kubernetes. Simple to run |
| [LINSTOR and DRBD](https://linbit.com/linstor/) | Free | ✔ | | | Replicated block storage that runs well on fewer nodes |
| [StarWind Virtual SAN](https://www.starwindsoftware.com/starwind-virtual-san) | Free tier | ✔ | | | Two-node storage. Check the current limits |
| [VMware vSAN](/storage/vmware-vsan/) | [Program license](/licensing/vmware/) | ✔ | | | Comes with VCF licensing |
| [Nutanix CE](https://www.nutanix.com/products/community-edition) | Free | ✔ | ✔ | | Requires a [capable cluster](/storage/hyper-converged-infrastructure/#solutions) |

## Object storage

These give you an S3-compatible API, which many backup and Kubernetes tools can use.

| Software | Notes |
| --- | --- |
| [Garage](https://garagehq.deuxfleurs.fr/) | Lightweight, and built for small, distributed self-hosted setups |
| [SeaweedFS](https://github.com/seaweedfs/seaweedfs) | Fast, with support for many small files |
| [Ceph RGW](https://docs.ceph.com/en/latest/radosgw/) | The object gateway in Ceph. Good if you already run Ceph |
| [MinIO](https://github.com/minio/minio) | Long the default choice, but it has cut features from its community edition. Check its current status before adopting it |

## Vendor simulators

If you need to learn a specific enterprise platform, look for its simulator or community edition. For example, NetApp offers an ONTAP simulator to customers and partners, and Dell has offered virtual editions of some of its products. Access to these tends to require a vendor account, and terms vary.

## Retired or best avoided

Many older guides mention these products. Skip them for new builds:

- **FreeNAS, TrueNAS CORE:** FreeNAS became TrueNAS CORE, and new development has moved to the Linux-based Community Edition.
- **Openfiler, NexentaStor Community Edition, ESOS, EMC vVNX, ScaleIO, ViPR, HPE StoreVirtual VSA:** these are abandoned, replaced or no longer offered in a free form.
- **GlusterFS:** development has slowed, and Red Hat has ended its commercial product. Use Ceph or LINSTOR for new builds.
- **XPEnology:** running Synology's OS on non-Synology hardware breaks its license terms, so it [doesn't belong here](/about/#disclaimer).
