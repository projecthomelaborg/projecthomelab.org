---
title: "Securing a Homelab"
description: "The security basics that matter most in a homelab: stay off the public internet, separate your networks, patch, and keep backups an attacker can't reach."
sidebar:
  label: "Securing a Homelab"
  order: 6
lastUpdated: 2026-10-30
wikiTitle: "Homelab Security"
---

First and foremost, despite what you may read online or see in video tutorials, **stop opening your network to the public internet.** Use a [secure remote access method](/security/remote-access/) instead. Automated scanners will find any exposed service within hours, and lab software is often old, misconfigured or never patched.

## The basics, in priority order

1. **Don't expose management interfaces. Ever.** That covers hypervisor consoles, BMCs such as iDRAC and iLO, NAS admin pages, and RDP and SSH. Old BMC firmware in particular should be treated as untrustworthy, so keep it on its own network.
2. **Use a VPN or mesh network** for access from outside. See [Remote Access](/security/remote-access/).
3. **Separate your networks.** Put the lab, your personal devices and IoT devices on different VLANs, with [firewall](/security/firewalls/) rules between them. Then a compromised test VM can't reach your family's laptops. See [IP addressing and VLANs](/networking/ip-addressing/#vlans-and-segmentation).
4. **Patch automatically where you can.** See [Patching](/management/patching/).
5. **Protect logins.** Use a password manager, unique passwords, multi-factor authentication where available, and SSH keys rather than passwords.
6. **Keep backups an attacker can't reach.** Use different credentials from the lab, and keep an off-site or immutable copy. See [Backups](/management/backups/).
7. **Use valid certificates** so you aren't training yourself to click through warnings. See [Certificates](/security/certificates/).

## If something really must be public

Sometimes you need to host something for other people. If so:

- Publish only that one service, through a reverse proxy or tunnel.
- Put it on an isolated network segment that can't reach the rest of your home network.
- Require authentication in front of it where you can, with a tool such as Authelia, Authentik or your tunnel provider's access controls.
- Add rate limiting and blocking with a tool such as CrowdSec.
- Keep it patched, and watch its logs.
- Check your internet provider's terms of service.

## Don't keep secrets in your repository

If your lab's configuration lives in Git, and it should, keep passwords and API keys out of it. Tools such as SOPS with age, or Ansible Vault, let you encrypt secrets and store them safely alongside your code. This is especially important if the repository is public.

## Further reading

- [Remote Access](/security/remote-access/)
- [Firewalls](/security/firewalls/)
- [Endpoint protection and intrusion detection](/security/antivirus/)
- [Apache Guacamole](/security/guacamole/)
- [Certificates](/security/certificates/)
