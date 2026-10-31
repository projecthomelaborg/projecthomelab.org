---
title: "KVM"
description: "KVM is the hypervisor built into the Linux kernel. Learn how to check for support, install it with libvirt, and create your first VM."
sidebar:
  label: "KVM"
  order: 4
lastUpdated: 2026-10-30
wikiTitle: "KVM"
---

Kernel-based Virtual Machine (KVM) is the hypervisor built into the Linux kernel. It underpins Proxmox VE, many public clouds, and other platforms. Running it directly on a Linux server takes more work than using a packaged platform, but it teaches you how everything fits together.

KVM follows the Unix approach of doing one job well. It runs VMs, and other tools handle the rest:

| Layer | Common tools |
| --- | --- |
| Device emulation | QEMU |
| VM management | libvirt, `virsh` on the command line |
| Graphical management | Cockpit (web), virt-manager (desktop) |
| Networking | Linux bridges, Open vSwitch |
| Storage | Local files (qcow2), LVM, ZFS, Ceph |

## Check for support

First, make sure virtualization is enabled in your firmware. Then check that the CPU supports it:

```sh
lscpu | grep -i virtualization
```

Intel CPUs show `VT-x`, and AMD CPUs show `AMD-V`.

## Install it

On Debian or Ubuntu:

```sh
sudo apt install qemu-system-x86 libvirt-daemon-system virtinst
sudo adduser "$USER" libvirt
```

On Fedora or RHEL-family systems:

```sh
sudo dnf install qemu-kvm libvirt virt-install
sudo systemctl enable --now libvirtd
```

Log out and back in, then run the validator. It reports anything that's missing:

```sh
virt-host-validate qemu
```

## Create a VM

```sh
virt-install \
  --name test \
  --memory 2048 \
  --vcpus 2 \
  --disk size=20 \
  --cdrom ~/isos/debian.iso \
  --osinfo detect=on,require=off
```

Then manage it with `virsh`:

```sh
virsh list --all
virsh start test
virsh shutdown test
```

For repeatable builds, use a distribution's cloud image with [cloud-init](https://cloud-init.io/) rather than installing from an ISO each time. See [Automation](/management/automation/).

## Web management

If you'd rather not use the command line, [Cockpit](https://cockpit-project.org/) with its machines plugin gives you a browser interface. If you run Linux on the desktop, [virt-manager](https://virt-manager.org/) can connect to remote hosts over SSH.

## Networking and storage

The default libvirt network uses NAT, so VMs can reach out but other machines can't reach them. To put VMs on your LAN, create a bridge with your distribution's network tooling, such as Netplan or NetworkManager. The old `brctl` command is deprecated in favor of `ip link`.

## Further reading

- [libvirt documentation](https://libvirt.org/docs.html)
- [Arch Wiki on KVM](https://wiki.archlinux.org/title/KVM) and [QEMU](https://wiki.archlinux.org/title/QEMU), which are useful on any distribution
