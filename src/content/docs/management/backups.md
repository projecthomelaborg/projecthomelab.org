---
title: "Backups"
description: "Protect your homelab with the 3-2-1 rule. Compare Proxmox Backup Server, Veeam, restic, Kopia and more, and learn to test your restores."
sidebar:
  label: "Backups"
  order: 1
lastUpdated: 2026-10-30
wikiTitle: "Backups"
---

Everything breaks eventually, and a homelab tends to break more often because you're the one breaking it. Set up backups before you need them.

**Snapshots, RAID and replication are not backups.** They won't save you from ransomware, a bad script or a house fire if they're all on the same system.

## The 3-2-1 rule

Keep **3** copies of your data, on **2** different kinds of storage, with **1** copy off-site. Many people now add an offline or immutable copy that an attacker with your lab's credentials couldn't delete.

You needn't protect everything. Decide what's irreplaceable (photos, documents, your password vault), and what you can rebuild (a test VM). If your lab is well [automated](/management/automation/), you may only need to back up its data and configuration.

## Backing up VMs

| Tool | Cost | Works with | Notes |
| --- | --- | --- | --- |
| [Proxmox Backup Server](#proxmox-backup-server) | Free, with optional paid support | Proxmox VE, plus Linux hosts through its client | Deduplicated, incremental and fast |
| [Xen Orchestra](/hypervisors/xcp-ng/) | Depends on edition | XCP-ng | Built into the management tool |
| [Veeam Community Edition](https://www.veeam.com/products/free/backup-recovery.html) | Free for up to 10 workloads | Proxmox VE, VMware, Hyper-V, Windows, Linux | Great for learning a tool common in business. The server runs on Windows and newer versions on Linux. [Check the license counts](https://www.veeam.com/products/free/backup-recovery.html) |
| [NAKIVO](https://www.nakivo.com/) | Free edition and paid | VMware, Hyper-V, Proxmox and others | Can install directly on some NAS devices. Offers a free not-for-resale license to some IT pros |
| Synology Active Backup | Included with supported NAS models | VMware, Hyper-V, PCs and servers | Convenient if you already own a Synology NAS |

Free ESXi doesn't provide the APIs these tools use, so check support if you [run VMware](/licensing/vmware/#free-esxi).

### Proxmox Backup Server

If you run Proxmox VE, this is an obvious choice. Install it on a separate machine, or at least on separate disks. It deduplicates across backups, so keeping many of them doesn't use much space. It can also sync to a second server off-site. Remember that a backup server running as a VM on the host it protects won't help when that host dies.

## Backing up files and containers

| Tool | Notes |
| --- | --- |
| [restic](https://restic.net/) | Encrypted and deduplicated. Works with S3, Backblaze B2, SFTP and others. A single binary |
| [BorgBackup](https://www.borgbackup.org/) | Encrypted and deduplicated. Pair it with [borgmatic](https://torsion.org/borgmatic/) to configure it easily |
| [Kopia](https://kopia.io/) | Similar to restic, with an optional graphical interface |
| [rclone](https://rclone.org/) | Copies and syncs to many cloud providers. It's a sync tool rather than a true backup tool, unless you set it up carefully |
| ZFS send and receive | Replicates snapshots between ZFS systems. [Sanoid and Syncoid](https://github.com/jimsalterjrs/sanoid) automate this |

For containers, back up your volumes and Compose files. Dump databases, or stop the service first, because copying a running database's files can give you a corrupt backup.

## Where to keep the off-site copy

- **Cloud object storage**, such as Backblaze B2 or Wasabi. Encrypt your data first, and check minimum-retention and download charges.
- **A second machine at a friend or relative's house**, connected over a [VPN](/security/remote-access/). Agree to host each other's backups.
- **A rotating USB drive**, stored somewhere else. It's cheap, it's offline by default, and it works as long as you remember to do it.

## Protect the backups themselves

- Use different credentials for your backups than for your lab.
- Have the backup server pull data where you can, so that a compromised host can't delete it.
- Use immutable or append-only storage where it's available.
- Encrypt off-site copies, and store the key somewhere outside of your lab. A backup you can't decrypt is useless.

## Test your restores

A backup you haven't restored from is just a theory. Every few months, restore a VM or a folder to somewhere safe and check that it works. Schedule it, and set up [monitoring](/management/monitoring/) to alert you if your backup jobs fail.
