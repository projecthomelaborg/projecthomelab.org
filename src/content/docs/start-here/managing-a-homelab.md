---
title: "Managing a Homelab"
description: "Once the lab is built, you have to run it. An overview of backups, monitoring, patching, automation and documentation, mostly with free tools."
sidebar:
  label: "Managing a Homelab"
  order: 5
lastUpdated: 2026-10-30
wikiTitle: "Managing a Homelab"
---

Once the lab is built, you have to run it. That's also good practice, because these are the same skills employers look for. Nearly everything here has a free or open source option.

If you only do three things, do these, in this order:

1. Set up [backups](/management/backups/) and test a restore.
2. [Automate your updates](/management/patching/).
3. Write down what you built.

## Areas to cover

| Area | What it's for | Start with |
| --- | --- | --- |
| [Backups](/management/backups/) | Getting your data back | Proxmox Backup Server, restic or Veeam Community Edition |
| [Patching](/management/patching/) | Staying secure without spending your weekends on it | Unattended upgrades on anything you can safely rebuild |
| [Monitoring](/management/monitoring/) | Knowing it's broken before someone tells you | Uptime Kuma, then Prometheus and Grafana |
| [Automation](/management/automation/) | Rebuilding quickly and repeatably | Ansible, then Terraform or OpenTofu |
| [Headless access](/management/headless-access/) | Fixing machines without a monitor | A BMC, or an IP KVM such as PiKVM |
| [Ticketing](/management/ticketing-systems/) | Practicing help desk workflows | osTicket or Zammad |

## Write it down

Your future self won't remember why VLAN 30 exists. Keep a simple record of your IP plan, what runs where, and how to rebuild it. A Git repository of Markdown files works, and so does a wiki such as BookStack or Wiki.js. NetBox suits you if you'd like to practice proper IP address and inventory management.

Just don't host the only copy of your recovery notes on the lab you'd need them to recover.

## Keep it simple

Every service you add is something else to patch, back up and fix. See [Keep it simple](/start-here/keep-it-simple/).
