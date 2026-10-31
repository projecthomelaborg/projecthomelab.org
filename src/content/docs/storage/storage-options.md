---
title: "Storage options"
description: "Compare local NVMe, ZFS storage servers, vendor NAS devices, hyper-converged storage and cloud storage for your homelab, and plan your capacity."
sidebar:
  label: "Storage options"
  order: 1
lastUpdated: 2026-10-30
wikiTitle: "Storage"
---

Storage causes more indecision than almost anything else in a homelab. Luckily, most options are valid, and it's usually possible to reuse your drives if you change your mind. Ask yourself:

- How much do you need now, and how fast will it grow?
- How fast does it need to be?
- Will it hold anything you can't replace, such as photos?
- How will you [back it up](/management/backups/)? RAID and replication aren't backups.
- Do you want to learn storage, or just have it work?
- What's your budget, including power and noise?

## The options

Roughly in order of cost, cheapest first:

| Option | Good for | Limits |
| --- | --- | --- |
| [Local storage](#local-storage) | Single hosts, speed, simplicity | Tied to one host |
| [Custom storage server](#custom-storage-server) | Learning, flexibility, lots of capacity | You maintain it |
| [Vendor NAS](#vendor-nas) | Personal data, low maintenance | Cost, often a modest CPU |
| [Hyper-converged](#software-defined-and-hyper-converged) | Clusters, keeping VMs up during maintenance | Needs several nodes and a fast network |
| [Enterprise array](#enterprise-array) | Learning a specific vendor's platform | Power, noise, spares |
| [Cloud storage](#cloud-storage) | Off-site backups | Slow to restore and a monthly cost |

### Local storage

NVMe drives in your host are fast, cheap and simple. For most single-host labs this is all you need for VMs and containers.

For protection against a drive failure, use a ZFS or Btrfs mirror, or Linux mdraid. If you need more slots, a PCIe adapter card can add M.2 drives on boards that support bifurcation.

You won't get live migration without shared storage, though ZFS replication offers a useful halfway point. Rebooting the host also takes down everything on it.

### Custom storage server

A separate machine, or a VM with its disks passed through, runs [storage software](/storage/storage-software/) such as TrueNAS and shares storage over NFS, SMB or iSCSI. This is closer to a real environment and unlocks live migration between hosts.

The usual choice is **ZFS**, which offers checksums to catch silent corruption, snapshots, replication and compression. Rules that will save you some pain:

- Give ZFS direct access to the disks. Use an HBA in IT mode, not a hardware RAID card.
- Mirrors are simple and fast for VMs. RAIDZ suits bulk data. Since OpenZFS 2.3, you can [expand a RAIDZ vdev](https://github.com/openzfs/zfs/releases/tag/zfs-2.3.0) one disk at a time.
- Avoid SMR hard drives for ZFS, as they can rebuild extremely slowly.
- Buy enough RAM for your dataset. Avoid dedup unless you've done the sizing.

The drawback is that it's one more thing to maintain, and any patching of the storage host takes down VMs that depend on it.

### Vendor NAS

Synology, QNAP, Ugreen, Asustor and others sell appliances that are quick to set up and need little attention. They're a good home for personal data even if you build everything else yourself.

Things to check:

- **Drive policies:** Synology's 2025 models restricted third-party drives, and the company [reversed course with DSM 7.3](https://www.techzine.eu/news/devices/135275/synology-lifts-artificial-restrictions-on-third-party-storage) after a backlash. Check the current compatibility rules for the model you're buying, especially for M.2 drives.
- **CPU and RAM:** many low-end models struggle with VMs and containers.
- **Network speed:** look for at least 2.5Gb if you plan to run VMs from it.
- **Security:** don't expose the admin interface to the internet, since NAS devices are a favorite ransomware target.

### Software-defined and hyper-converged

Storage is spread across your cluster's nodes, and each node also runs VMs, so you can take down a host for maintenance while the lab keeps running. See [Hyper-converged infrastructure](/storage/hyper-converged-infrastructure/).

### Enterprise array

Occasionally a real array turns up on eBay or from an old employer. It's great for learning a specific vendor's platform, but be ready for serious noise, vibration and power use. A shelf can use a few hundred watts, and the controllers can add more. Spare parts and firmware can also be hard to get without a support contract. Most people are better off with the vendor's free simulator, if there is one.

### Cloud storage

S3-compatible storage from Backblaze B2, Wasabi, Cloudflare R2 or a large provider makes a good off-site backup target. Encrypt your data before you send it, and check egress and minimum-retention charges. See [Backups](/management/backups/).

## Flash or hard drives?

Use flash for anything running VMs, containers or databases. VMs boot faster, it's silent, and it removes the most common performance bottleneck. Keep hard drives for bulk data such as media and backups, where they're still far cheaper per terabyte.

For flash:

- Consumer NVMe is fine for most labs, but check the endurance rating (TBW).
- Workloads with heavy writes, such as Ceph and ZFS SLOGs, benefit greatly from enterprise SSDs with power-loss protection, and these are often cheap when bought used. Check the remaining wear when you buy them.
- Hard drives are noisy, so keep them away from where you sleep. See [Noise](/housing/noise/).

Caching and tiering products were popular when flash was expensive. They're rarely worth the complexity now, since all-flash is so affordable for VM storage.

## Capacity

- Most labs start well with 1TB of NVMe, but measure what you actually use.
- A "1TB" drive holds about 931GiB once it's in your operating system.
- Keep 15 to 20% free on most systems, since performance falls as pools get full, particularly on copy-on-write filesystems such as ZFS.
- Thin provisioning lets you overcommit, but you need to watch actual use. Otherwise, a full disk takes down everything at once.

## Keep lab and personal data separate

Don't let today's experiment endanger your family photos. Unless you have a tight budget, store personal data on a separate system, or at least a separate pool with different credentials. That protects you from test scripts that delete the wrong thing, and from a compromised lab VM.

Whatever your budget, follow the same principles:

- Separate lab and personal storage.
- Back up what you care about, using the [3-2-1 rule](/management/backups/#the-3-2-1-rule).
- Keep one copy off-site, in case of fire or theft.
- Use different accounts for your backups than for the systems they protect.
