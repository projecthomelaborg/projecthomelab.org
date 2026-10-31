---
title: "Requirements Gathering"
description: "Work out what your homelab is for, what you can run, and what your space and budget allow before you spend anything."
sidebar:
  label: "Requirements Gathering"
  order: 1
lastUpdated: 2026-10-30
wikiTitle: "Requirements Gathering"
---

Before you spend anything, work out what the lab is for. The answer decides almost everything else, and it's usually cheaper than you first expect. Plenty of labs start on a single used mini PC.

## Questions to answer first

**What do you want to do with it?**

- Learn for a job or a certification? Note which products you actually need to touch.
- Run services at home, such as media, photos, home automation or backups? Then reliability matters more than variety.
- Tinker and try things? Then flexibility matters most.

**Where will it live?**

- How big can it be, and do you have room for a rack?
- How much noise can you tolerate? Lots, a little, or none because it's in your bedroom?
- Is there enough airflow, power and network access at that spot?

**What can you spend?**

- What's your budget up front, and can you add to it over time?
- What can you afford in electricity? A machine that's always on costs money every month. See [what a watt costs](/housing/power/#what-a-watt-costs).
- What do you already own that you could reuse?

**How will you use it?**

- Does it need to run all the time, or only when you're studying?
- Do other people at home depend on it? If your DNS or Wi-Fi runs on the lab, then breaking the lab breaks the house.
- At peak, how much RAM, how many cores and how much storage will your workloads need?
- Does anything need to survive a host failure, or is that just something you want to learn about?
- How will you reach it when you're away? See [Remote Access](/security/remote-access/).

**How will you protect it?**

- What data would you be upset to lose? That data needs [real backups](/management/backups/), which means copies somewhere other than the lab.
- How will you license the software? Open source removes this question for most labs. If you need vendor products, check [VMware](/licensing/vmware/) and [Microsoft](/licensing/microsoft/) terms before you commit, because they have changed a lot.

## Typical homelabber profiles

Most people are a mix of these.

| Profile | What they care about | Usually ends up with |
| --- | --- | --- |
| **The self-hoster** | Running useful services at home, with little fuss | A mini PC or NAS running containers, and good backups |
| **The career builder** | Getting hands-on with skills employers ask for, on a tight budget | One or two used mini PCs, Proxmox, Kubernetes and automation |
| **The enterprise mirror** | Matching what they run at work | A used rack server or small cluster, with vendor licensing if they can get it |
| **The noise-sensitive** | Silence, because the lab shares a room with people | Mini PCs, flash storage and fanless networking |
| **The garage owner** | Plenty of space and no noise limits | Rack gear, 10Gb or faster networking, and a bigger power bill |
| **The part-timer** | Occasional study without much upkeep | A nested lab on their desktop, or short-lived cloud labs |
| **The tinkerer** | Whatever's new this month | Something flexible that's easy to wipe and rebuild |

## Common workloads

Think about which of these you'd run. Some are very light, and others need serious hardware.

| Area | Examples |
| --- | --- |
| **Virtualization** | [Proxmox VE](/hypervisors/proxmox-ve/), [XCP-ng](/hypervisors/xcp-ng/), [KVM](/hypervisors/kvm/), [Hyper-V](/hypervisors/hyper-v/), [VMware](/hypervisors/vmware-vsphere/) |
| **Containers** | [Docker, Podman and Kubernetes](/hypervisors/containers-and-kubernetes/) |
| **Network services** | DNS filtering (Pi-hole, AdGuard Home), reverse proxies, [VPNs](/security/remote-access/), [firewalls](/security/firewalls/) |
| **Infrastructure practice** | Active Directory or FreeIPA, [Ansible and Terraform or OpenTofu](/management/automation/), [monitoring](/management/monitoring/), certificate authorities |
| **Home services** | Home Assistant, Jellyfin or Plex, Immich, Nextcloud, Vaultwarden, Frigate for cameras |
| **Developer tools** | Forgejo or GitLab, CI runners, container registries, databases |
| **AI** | Local models with Ollama. This is the one workload where a GPU matters, and VRAM is the limit |

## What most labs have in common

- **RAM runs out first.** CPUs sit idle most of the time in most labs, but memory doesn't. Buy for RAM before core count, and check current prices first, because they have been unusually high since late 2025.
- **Idle power matters more than peak power**, because a lab spends nearly all its time idle.
- **Noise and heat decide where hardware can live**, and a machine you can't stand to leave on won't get used.
- **Flexibility beats capacity.** Your plans will change.

## Next step

Once you have answers, [pick a style of lab](/start-here/homelab-categories/), or use the [decision guide](/start-here/decision-trees/) for a shortcut.
