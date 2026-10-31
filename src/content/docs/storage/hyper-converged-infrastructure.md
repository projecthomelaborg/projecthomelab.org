---
title: "Hyper-converged Infrastructure"
description: "Hyper-converged infrastructure runs storage and VMs on the same cluster nodes. Learn the benefits, the costs, and the realistic options for a homelab."
sidebar:
  label: "Hyper-converged Infrastructure"
  order: 3
lastUpdated: 2026-10-30
wikiTitle: "Hyper-converged Infrastructure"
---

Hyper-converged infrastructure (HCI) combines compute and storage on the same machines. Instead of a separate storage box, each node contributes its local drives to a shared pool. If a node fails or needs patching, your VMs keep running on the others.

## Pros and cons

**Pros**

- You don't need a separate storage device, which saves on hardware, power and noise.
- You can take down individual nodes for maintenance while the lab stays up. Most NAS and storage servers have only one controller, which means an update takes down all your VMs.
- It scales by adding nodes, and it matches how many enterprises and clouds work.

**Cons**

- You need at least three nodes for most platforms. With only two, there's usually no safe way to decide which node is right after a failure, unless you add a third vote.
- It's generally best to keep nodes roughly identical, so growing can mean buying several drives at a time.
- Each node must have room for storage drives, which rules out some mini PCs.
- Replication means less usable space. Three copies of your data means a third of your raw capacity.
- It takes CPU and RAM away from your VMs. Some platforms need a lot.
- It relies heavily on your network. See below.

## What you need

- **Nodes:** three or more. [Mini PCs](/hardware/mini-pcs/) with spare M.2 slots work well if they also have fast networking. See also [used servers](/hardware/used-enterprise-servers/).
- **Network:** 10Gb is the practical minimum for Ceph on flash. 2.5Gb works for learning, and 1Gb is painful. Use a dedicated network or VLAN for storage traffic. See [10Gb and faster networking](/networking/10gbps-networking/).
- **Drives:** all-flash is now the normal choice for this. Avoid low-end consumer drives. Distributed storage issues many synchronous writes, and SSDs with power-loss protection handle these far better, so used enterprise drives are often the best value.
- **RAM:** allow roughly 4GB or more per Ceph OSD (one drive) on top of what your VMs need. Plan for more on other platforms.

## Solutions

| Platform | Minimum nodes | Cost | Notes |
| --- | --- | --- | --- |
| [Proxmox VE with Ceph](/hypervisors/proxmox-ve/#clustering) | 3 | Free | The most popular homelab route, with Ceph managed from the Proxmox interface |
| [XCP-ng with XOSTOR](/hypervisors/xcp-ng/#clustering) | 3 recommended | Paid plans | Based on LINSTOR |
| [Harvester](https://harvesterhci.io/) | 1, 3 for HA | Free | VMs on Kubernetes with Longhorn. Needs a lot of RAM per node |
| [VMware vSAN](/storage/vmware-vsan/) | 3 or more | [Program license](/licensing/vmware/) | Well suited to nested labs |
| [Nutanix CE](https://www.nutanix.com/products/community-edition) | 1, 3 or 4 | Free | Good if you need Nutanix skills. Community reports suggest [at least 32GB of RAM](https://itnext.io/guide-setting-up-a-three-node-nutanix-ce-2-1-cluster-on-bare-metal-73d37d59688e) per node, and it's picky about hardware. Check its [requirements](https://portal.nutanix.com/) |
| [Windows Server Storage Spaces Direct](https://learn.microsoft.com/en-us/windows-server/storage/storage-spaces/storage-spaces-direct-overview) | 2 | Datacenter license or evaluation | Useful if you work with Microsoft platforms |

A complete list of software is on the [storage software](/storage/storage-software/) page.

## Do you really need it?

Probably not, unless you want to learn it or you want your services to survive a node going down. If you just want redundancy for a few VMs, **ZFS replication between two nodes** is much simpler. It's not synchronous, so a failure can lose a few minutes of writes, but that's often acceptable at home.

You can also practice HCI in a [nested lab](/hypervisors/vinception/) to learn the concepts before you buy any hardware. Performance will be poor, but failure behavior is realistic enough to learn from.
