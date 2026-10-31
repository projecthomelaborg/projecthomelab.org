---
title: "VMware Licensing"
description: "What you can legally run in a homelab since Broadcom's changes: free ESXi, VMUG Advantage, certification-based licenses and free desktop hypervisors."
sidebar:
  label: "VMware Licensing"
  order: 1
lastUpdated: 2026-10-30
wikiTitle: "VMware Licensing"
---

VMware licensing for homelabs has changed a lot since Broadcom's acquisition, and it could change again. This reflects what we could confirm in October 2026. **Check the linked pages before you spend money.**

## Options at a glance

| Option | Cost | What you get | Main limit |
| --- | --- | --- | --- |
| [Workstation Pro and Fusion Pro](#desktop-hypervisors) | Free | Desktop hypervisors | No vendor support |
| [Hands-on Labs](#hands-on-labs) | Free | Browser-based labs | Not your own environment |
| [Free ESXi 8](#free-esxi) | Free | A single standalone ESXi 8 host | No vCenter, clustering or backup APIs, and no version 9 |
| [Evaluation mode](#evaluation) | Free | Full features for about 60 days | Time limit |
| [VCP certification](#certification) | Exam fee | vSphere Standard, 32 cores | Personal use, renewed yearly |
| [VMUG Advantage and VCP-VCF](#vmug-advantage) | Membership and exam fee | VCF and more, for personal use | Membership and certification needed |

## Desktop hypervisors

Workstation Pro and Fusion Pro are [free for commercial, educational and personal use](https://www.computerworld.com/article/3604503/vmware-makes-workstation-and-fusion-free-for-everyone.html). You'll need a free Broadcom account to download them. They're a low-cost way to run a small nested lab.

## Hands-on Labs

[VMware Hands-on Labs](https://labs.hol.vmware.com/) gives you free, guided environments in your browser. Try these first if you only need to see how a product works.

## Free ESXi

Broadcom withdrew free ESXi in 2024, then [brought it back in April 2025](https://www.theregister.com/2025/04/14/vmware_free_esxi_returns/) with ESXi 8.0 Update 3e, available through the Broadcom support portal. The release notes describe it as an unsupported, entry-level hypervisor.

Keep these limits in mind:

- It can't join vCenter, so there's no clustering, vMotion or HA.
- It doesn't provide the APIs that most VM backup tools rely on.
- We found no free edition for version 9, and reports differ on how freely it will get updates. Don't assume this will last.

If you only want one free host, [Proxmox VE](/hypervisors/proxmox-ve/) or [XCP-ng](/hypervisors/xcp-ng/) gives you much more for the same price.

## Evaluation

A newly installed ESXi host and vCenter run with all features for about 60 days. That's fine for a short study sprint, but expect to rebuild the lab when it ends.

## Certification

Broadcom [offers free personal-use licenses to certified professionals](https://blogs.vmware.com/cloud-foundation/2025/04/14/free-home-lab-licenses-for-vmware-certified-professionals/). Passing the VCP-VVF Administrator exam, or a qualifying VCP-VCF exam, gives you **vSphere Standard with 32 cores for one year**, requested through Broadcom's certification portal. No VMUG membership is needed for this. Exam costs are extra.

## VMUG Advantage

The EVALExperience licenses that made VMUG Advantage so popular [ended for new requests](https://blogs.vmware.com/code/2025/03/19/vmug-advantage-home-lab-license-guide/). Membership alone no longer gets you licenses. You need [VMUG Advantage](https://vmug.com/advantage) ($210 per year when we checked) **and** a passed VCP-VCF exam. That combination gets you personal-use VCF licenses for up to three years, and members can also access products such as vDefend and Avi. Members also get an exam discount.

Use the same email address on your Broadcom and VMUG accounts so the two can be linked.

## vExpert

vExperts used to get licenses as a program benefit. [That ended in 2025](https://www.vladan.fr/no-more-free-licenses-of-vmware-vsphere-for-vexperts-whats-your-options), and they now follow the same VMUG and certification route, though with a reported discount on membership.

## A note on license keys

You'll find sites that offer VMware keys for free. Don't use them. Apart from the [legal issue](/about/#disclaimer), these sites are a common way to deliver malware. Project Homelab only covers legitimate licensing.

## Is it worth it?

If VMware skills are part of your job or job search, the certification route costs a fairly small amount and gets you a certification too. If it's just for your home, open source alternatives are free and have no renewal risk.
