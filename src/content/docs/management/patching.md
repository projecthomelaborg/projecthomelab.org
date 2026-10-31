---
title: "Patching"
description: "Keep your lab patched without giving up your weekends, with automatic updates for Linux and Windows, container image updates and hypervisor maintenance."
sidebar:
  label: "Patching"
  order: 4
lastUpdated: 2026-10-30
wikiTitle: "WSUS"
---

Unpatched systems are a common way in for attackers. On a lab machine you can rebuild, the risk of an automatic update breaking something is usually smaller than the risk of skipping patches. Stagger your updates, so your hosts aren't all busy at once, and so one bad update doesn't take everything out.

## Linux

- **Debian and Ubuntu:** turn on [unattended-upgrades](https://wiki.debian.org/UnattendedUpgrades).
- **Fedora and RHEL-family systems:** use [dnf-automatic](https://docs.fedoraproject.org/en-US/quick-docs/autoupdates/).
- **Many machines:** run an [Ansible](/management/automation/) playbook on a schedule, one group at a time, so you can reboot in a controlled way.
- **Central management:** [Uyuni](https://www.uyuni-project.org/) (the successor to [Spacewalk](/archive/spacewalk/)) and [Foreman with Katello](https://theforeman.org/) manage patching, inventory and provisioning. They're worthwhile if you want to learn those tools, but they're overkill for a few VMs.

Remember that kernel updates need a reboot to take effect. Check with `needrestart` on Debian-based systems or `dnf needs-restarting` on RHEL-based ones.

Don't build anything new on CentOS Linux, as both 7 and 8 have reached end of life. Use AlmaLinux, Rocky Linux, CentOS Stream, Debian or Ubuntu LTS instead.

## Windows

- **Standalone or a few machines:** configure Windows Update settings with Group Policy or local policy.
- **WSUS:** Microsoft [deprecated WSUS](https://techcommunity.microsoft.com/blog/windows-itpro-blog/windows-server-update-services-wsus-deprecation/4250436) in 2024. It's still included in Windows Server and still works, but it isn't getting new features. It's fine to learn since many businesses still use it. Don't build a long-term plan around it.
- **Microsoft's modern approach:** [Azure Update Manager](https://learn.microsoft.com/en-us/azure/update-manager/overview) and Windows Autopatch are cloud-based and may have licensing or usage costs.

## Containers

Rebuilding with a newer image is the way to patch a container. Don't update them in place.

- [Renovate](https://docs.renovatebot.com/) opens pull requests when new image versions are available, so you can review them first. It works very well if you keep your Compose files in Git.
- [Diun](https://crazymax.dev/diun/) notifies you of new images without changing anything.
- Auto-updaters that pull `latest` are convenient, but they can apply a breaking change while you're away. Use them only for services you can afford to have break.

## Hypervisors, firmware and appliances

- **Hypervisors:** a reboot affects every VM, so choose a time. In a cluster, migrate VMs and do one node at a time. Read the release notes first, and be careful with major version upgrades.
- **Firmware:** BIOS, BMC and SSD updates fix real security and stability problems. Check at least a couple of times a year.
- **Network gear and NAS devices:** these are easy to forget, and they're among the most exposed devices you own. Turn on update notifications.
- **Unsupported hardware:** when a device stops getting updates, replace it, or isolate it on a restricted network.
