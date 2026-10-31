---
title: "Endpoint protection and intrusion detection"
description: "How to detect threats in a homelab using network monitoring, host-based tools and antivirus, and which tools are worth your time."
sidebar:
  label: "Endpoint protection and detection"
  order: 5
lastUpdated: 2026-10-30
wikiTitle: "Homelab Antivirus"
---

Antivirus alone won't protect a homelab. Exposure, segmentation and patching come first. See [Securing a Homelab](/start-here/securing-a-homelab/). Once you have those covered, detection tools are useful for security and are great to learn if you're after a security career.

## Network detection

| Tool | What it does | Notes |
| --- | --- | --- |
| [Suricata](https://suricata.io/) | Inspects traffic for known threats | Built into or available for OPNsense and pfSense |
| [CrowdSec](https://www.crowdsec.net/) | Blocks abusive IP addresses using shared threat data | Good for public-facing services |
| [Zeek](https://zeek.org/) | Produces detailed network logs for analysis | Better for learning than for simple alerting |
| [Security Onion](https://securityonionsolutions.com/) | A complete platform that bundles network and host tools | Needs a lot of RAM |

To inspect traffic beyond your firewall, you may need a switch that supports port mirroring.

## Host detection

| Tool | What it does | Notes |
| --- | --- | --- |
| [Wazuh](https://wazuh.com/) | Open source SIEM and endpoint agent | The popular choice for a home SOC lab. Its central server needs several GB of RAM |
| [Fail2ban](https://github.com/fail2ban/fail2ban) | Blocks repeated failed logins | Simple. Less necessary if you've kept services private |
| [Lynis](https://cisofy.com/lynis/) | Audits Linux hardening | Free, and gives you a list of things to fix |

## Antivirus

- **Windows:** Microsoft Defender is built in and is a sensible default. Windows Server includes it as well.
- **Linux:** [ClamAV](https://www.clamav.net/) is useful for scanning files, such as on a mail server or a file share. Most Linux servers don't need antivirus, so spend your effort on updates and exposure.
- **Other products:** many vendors have changed or ended their free home products, so check the current terms. Also bear in mind that security agents use up resources, which can become significant on small hosts.
- **Enterprise products:** if you need one for work, ask your vendor about a trial or a partner license.

## Scanning for vulnerabilities

Try scanning your own lab. [Greenbone Community Edition](https://www.greenbone.net/en/community-edition/) (OpenVAS) and [Nmap](https://nmap.org/) show you what's exposed and out of date. For container images, use [Trivy](https://trivy.dev/) or a similar tool. Only scan systems that you own or have permission to test.
