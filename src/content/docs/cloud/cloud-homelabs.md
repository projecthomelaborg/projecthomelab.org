---
title: "Cloud Homelabs"
description: "Run some or all of your lab on someone else's hardware. Compare AWS, Azure, Google Cloud, Oracle, VPS and bare-metal providers, and avoid surprise bills."
sidebar:
  label: "Cloud Homelabs"
  order: 1
lastUpdated: 2026-10-30
wikiTitle: "Cloud Homelabs"
---

A cloud lab needs no space, makes no noise and takes no upfront money, and it's the only proper way to learn cloud platforms. The trade-off is that you pay for as long as it runs, and a mistake can cost you real money.

## Pros and cons

**Pros**

- There's no hardware, noise or heat at home.
- You only pay for what you use. If you only lab now and then, this may well be the cheapest option.
- You can spin up very large environments for a few hours, and then delete them.
- You can access managed services you can't run at home.
- Licensing for some software is included in the hourly price.

**Cons**

- Costs add up if machines run all the time. Storage and data transfer are charged even while you're asleep. A few VMs running around the clock usually cost more than a [mini PC](/hardware/mini-pcs/) and its electricity.
- Security is your responsibility, and your resources are on the public internet by default. Leaked keys can result in huge bills, as attackers use them to mine cryptocurrency.
- You won't get any hands-on experience with physical hardware.
- Nested virtualization is only available on some instance types, and they often cost more.
- Moving large images on a slow home upload connection can be painful.

## Use cases

- Learning AWS, Azure, Google Cloud, or Kubernetes services for your job or for a certification.
- Short projects, where you need lots of resources for a little while.
- You have no space or budget for hardware.
- A public entry point for your [home lab](/security/remote-access/#tunnels), or an external monitor for it.
- Off-site [backups](/management/backups/#where-to-keep-the-off-site-copy).

## Providers

Free tiers change often. These were correct when we checked in October 2026, so follow the links to confirm before you sign up.

| Provider | Free offer | Good for | Notes |
| --- | --- | --- | --- |
| [AWS](https://aws.amazon.com/free/) | [Up to $200 in credits](https://www.neowin.net/news/aws-free-tier-overhauled-new-users-get-200-in-credits-but-theres-a-catch/) over six months on new accounts, plus some always-free services | The most-requested cloud skills | Since July 2025, a free-plan account closes when credits or the six months run out, unless you upgrade |
| [Microsoft Azure](https://azure.microsoft.com/free/) | Trial credit, plus some services free for 12 months or always | Microsoft-focused careers | [Azure for Students](https://azure.microsoft.com/free/students) offers credit without a card |
| [Google Cloud](https://cloud.google.com/free) | Trial credit, plus an always-free tier | Kubernetes and data | Check current credit amount and length |
| [Oracle Cloud](https://www.oracle.com/cloud/free/) | Always Free tier, including Arm compute | A long-term free VM | Capacity can be hard to get, and idle free instances may be reclaimed |
| VPS providers such as [Hetzner](https://www.hetzner.com/cloud/), [DigitalOcean](https://www.digitalocean.com/) and [OVHcloud](https://www.ovhcloud.com/) | Usually none | A cheap, always-on public server | Simple and predictable monthly pricing |
| Dedicated servers such as [Hetzner](https://www.hetzner.com/sb/) and [OVHcloud](https://www.ovhcloud.com/en/bare-metal/) | None | A real hypervisor on real hardware, at a monthly rate | [Treat it as public](/start-here/securing-a-homelab/) from the first boot |

Don't sign up for multiple trial accounts to get around limits. It's against the providers' terms, and it can get your accounts closed.

## Avoiding surprise bills

Do this as soon as you create an account:

1. **Set up a budget and billing alerts.** On AWS, follow the guide to [creating a budget](https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html). Alerts only warn you, they don't cap spending, so they won't stop a runaway bill by themselves.
2. **Secure the root account.** Turn on multi-factor authentication, and then stop using that account for daily work. See the [IAM best practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html).
3. **Never commit keys to Git.** Use short-lived credentials where possible.
4. **Define your lab in code.** With [Terraform or OpenTofu](/management/automation/), a single command can destroy everything, so nothing gets left running.
5. **Set a daily reminder or schedule** to shut things down.
6. **Know what you pay for when a VM is off.** Disks, snapshots, public IPv4 addresses and load balancers all keep charging.

## Free labs instead

If you only want to try a specific product, you may not need your own account at all. See [Free Learning Resources](/community/free-learning-resources/) for hosted labs and sandboxes.
