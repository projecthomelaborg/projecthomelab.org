---
title: "Jargon Buster"
description: "A glossary of the terms you'll run into while homelabbing, covering compute, networking, storage, containers, security and design."
sidebar:
  label: "Jargon Buster"
  order: 2
lastUpdated: 2026-10-30
wikiTitle: "Jargon Buster"
---

A glossary of the terms we use in IT. Even veterans run into unfamiliar ones, especially outside their own specialty.

## Compute

- **Bifurcation:** splitting one PCIe slot's lanes across several devices, such as multiple NVMe drives.
- **ECC:** error correction code memory. See [ECC Memory](/hardware/ecc-memory/).
- **HBA:** host bus adapter. A card that connects drives directly, with no RAID layer.
- **Hypervisor, Type 1:** runs directly on the hardware, such as Proxmox or ESXi.
- **Hypervisor, Type 2:** runs as an application on another OS, such as VirtualBox.
- **IOMMU:** hardware that lets you safely pass devices through to VMs (VT-d on Intel and AMD-Vi on AMD).
- **[Nanolab](/start-here/nanolab/):** a lab built from very small machines.
- **Nested virtualization:** running a hypervisor inside a VM. See [Nested virtualization](/hypervisors/vinception/).
- **P-core and E-core:** performance and efficiency cores on hybrid Intel CPUs.
- **Passthrough:** giving a VM direct control of a physical device, such as a GPU or HBA.
- **TDP:** thermal design power. A rough guide to cooling needs. It's not the same as actual power use.
- **Whitebox:** a machine built from individual parts rather than bought from a major server vendor.

## Networking

- **BMC:** baseboard management controller. See [Headless Access](/management/headless-access/).
- **CGNAT:** carrier-grade NAT, where an ISP shares one public IP across many customers.
- **DAC:** direct-attach copper cable.
- **iDRAC:** Dell's BMC.
- **iLO:** HPE's BMC.
- **IPMI:** Intelligent Platform Management Interface, a standard for talking to BMCs.
- **NIC:** network interface card.
- **PoE:** Power over Ethernet. 802.3af supplies up to 15.4W, 802.3at (PoE+) up to 30W, and 802.3bt (PoE++) up to 60W or 90W, all measured at the switch port.
- **QSFP+, QSFP28:** pluggable ports for 40Gb and 100Gb.
- **SFP:** a small pluggable port, commonly for 1Gb.
- **SFP+:** the same form factor, for 10Gb.
- **SFP28:** the same form factor, for 25Gb.
- **VLAN:** a virtual LAN. One way of splitting a physical network into separate ones.
- **VXLAN:** an overlay network that carries Layer 2 traffic over Layer 3.

## Storage

- **Btrfs:** a copy-on-write Linux filesystem.
- **Ceph:** open source distributed storage.
- **CMR, SMR:** conventional and shingled magnetic recording. SMR hard drives are slow at sustained writes, so they're a poor fit for RAID and ZFS.
- **DWPD:** drive writes per day, a measure of SSD endurance.
- **HCI:** [hyper-converged infrastructure](/storage/hyper-converged-infrastructure/).
- **IOPS:** input/output operations per second.
- **iSCSI:** a protocol that provides block storage over a network.
- **NAS:** network-attached storage, or file-level storage on a network.
- **NFS, SMB:** common network file-sharing protocols.
- **NVMe:** a fast storage protocol for flash drives over PCIe.
- **PLP:** power-loss protection, found on enterprise SSDs.
- **RAID:** a redundant array of independent disks. It isn't a backup.
- **RAIDZ:** ZFS's parity-based form of RAID.
- **S3:** Amazon's object storage API, now a common standard offered by many products.
- **SAN:** storage area network, or block-level storage on a dedicated network.
- **SAS, SATA:** drive interfaces. SAS is mainly for servers.
- **SMART:** self-monitoring data reported by drives.
- **TBW:** terabytes written, a rating of SSD endurance.
- **vdev:** a virtual device. A group of disks that makes up part of a ZFS pool.
- **ZFS:** a filesystem and volume manager with built-in checksums, snapshots and replication.

## Containers and automation

- **Compose:** a file format and tool for defining multi-container applications.
- **CI/CD:** continuous integration and delivery, or testing and deploying changes automatically.
- **cloud-init:** a standard way to configure a VM the first time it starts.
- **GitOps:** using a Git repository as the source of truth for what should be running.
- **IaC:** infrastructure as code.
- **k3s, k8s:** k8s is short for Kubernetes, and k3s is a lightweight distribution of it.
- **LXC:** Linux containers that behave like small VMs.
- **OCI:** the Open Container Initiative, which sets container image standards.

## Security

- **ACME:** the protocol used to request and renew certificates automatically.
- **CA:** a certificate authority.
- **Mesh VPN:** a VPN in which devices connect directly with one another, such as Tailscale.
- **MFA:** multi-factor authentication.
- **Reverse proxy:** a server that receives requests and passes them on to the right service.
- **SIEM:** security information and event management. A tool that collects and analyzes logs.
- **SSO:** single sign-on.
- **WireGuard:** a modern, fast VPN protocol.

## Design

- **HA:** high availability.
- **Quorum:** the majority a cluster needs to agree before it acts. It prevents split-brain.
- **MTBF:** mean time between failures.
- **MTTR:** mean time to recover.
- **RPO:** recovery point objective, or how much data you can afford to lose.
- **RTO:** recovery time objective, or how long you can afford to be down.
- **Split-brain:** when parts of a cluster lose contact and each thinks it's in charge.

## Homelab slang

- **Household acceptance factor (HAF):** how well the people you live with tolerate your lab. Older articles call this the WAF. See [Household Acceptance Factor](/housing/household-acceptance/).
- **Spinning rust:** hard disk drives.
- **vInception, vTARDIS:** older community names for nested virtualization.
- **Tinyminimicro:** used 1-liter business desktops. See [Mini PCs](/hardware/mini-pcs/).
