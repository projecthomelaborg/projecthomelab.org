---
title: "Proxmox VE"
description: "Proxmox VE is a free, open source platform for VMs and containers, and the most popular default for homelabs. Learn what it offers and how to get started."
sidebar:
  label: "Proxmox VE"
  order: 2
lastUpdated: 2026-10-30
wikiTitle: "Proxmox VE"
---

Proxmox Virtual Environment (VE) is an open source platform that manages KVM virtual machines and LXC containers from a web interface. It's built on Debian and is a common first choice for homelabs. As of October 2026, the current release series is [9.x](https://pve.proxmox.com/wiki/Roadmap), based on Debian 13.

## Pros and cons

**Pros**

- It's free, with every feature included. A paid subscription adds the stable enterprise repository and support.
- It runs on almost anything Linux supports, from old laptops to servers.
- It has clustering, live migration, high availability, ZFS, Ceph and software-defined networking built in.
- It has a large community, with plenty of guides and videos.
- It can import VMs directly from ESXi, so it's a practical way off VMware.
- [Proxmox Backup Server](/management/backups/#proxmox-backup-server) adds fast, deduplicated backups.

**Cons**

- It's less common in large enterprises than VMware, so it may not match what your job asks for, though it's gaining ground.
- Without a subscription you'll see a login reminder and use the no-subscription repository, which gets updates sooner and with less testing.
- ZFS and cluster services write constantly, so cheap consumer SSDs can wear out faster than you expect.

## Hardware

Any 64-bit machine with virtualization extensions will work. A low-power mini PC with 16GB of RAM makes a useful first host, and you'll want an SSD for VM storage. For a cluster, see [the notes below](#clustering).

## Getting started

1. Enable virtualization (VT-x or AMD-V) in the firmware, and VT-d or AMD-Vi if you plan to pass through devices.
2. Download the ISO from [proxmox.com](https://www.proxmox.com/en/downloads), write it to a USB drive, and install. Choose ZFS if you have matching drives and enough RAM. Otherwise, the default ext4 and LVM-thin layout is fine.
3. Log in at `https://<host-ip>:8006`.
4. If you don't have a subscription, switch to the [no-subscription repository](https://pve.proxmox.com/wiki/Package_Repositories) and run the updates.
5. Create a VM, or an LXC container for lighter Linux services.
6. Set up [backups](/management/backups/) before you depend on anything you've built.

## VM or container?

- **LXC containers** share the host's kernel, start in seconds and use very little memory. They're good for simple Linux services.
- **VMs** have their own kernel and stronger isolation. Use them for Windows, for other kernels, for appliances, and for anything that's exposed to untrusted traffic. The Proxmox docs [recommend running Docker in a VM](https://pve.proxmox.com/wiki/Linux_Container), not in an LXC container.

## Clustering

- Use **three or more nodes** so the cluster keeps quorum when one fails. With two nodes, add a [QDevice](https://pve.proxmox.com/wiki/Cluster_Manager#_corosync_external_vote_support) as a third vote. A Raspberry Pi works well for this.
- Corosync, the cluster's messaging layer, is sensitive to latency. A dedicated link helps if your storage shares the same network.
- **Live migration** needs shared storage, or it can copy local disks across the network, which takes longer. ZFS replication offers a middle ground, but a failover can lose the most recent writes.
- [Ceph](/storage/hyper-converged-infrastructure/) needs three or more nodes and works best with 10Gb networking and enterprise SSDs.
- Set the VM CPU type to a common baseline, such as `x86-64-v2-AES`, if your hosts have different CPU generations.

## Known issues

- **SSD wear:** check SMART wear data periodically. Used enterprise SSDs with power-loss protection can be cheap and last far longer.
- **Upgrades between major versions:** follow the [official guide](https://pve.proxmox.com/wiki/Upgrade_from_8_to_9) and run the checker script it provides.
- **Community scripts:** helper scripts are popular and convenient, but they run with root access on your host. Read them before you run them.

## External links

- [Proxmox VE documentation](https://pve.proxmox.com/pve-docs/)
- [Proxmox community forum](https://forum.proxmox.com/)
