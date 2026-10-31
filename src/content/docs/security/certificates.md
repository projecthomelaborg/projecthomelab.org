---
title: "Certificates"
description: "Get trusted HTTPS certificates in your homelab, even for private services, using Let's Encrypt with DNS validation, or your own certificate authority."
sidebar:
  label: "Certificates"
  order: 7
lastUpdated: 2026-10-30
wikiTitle: "Certificates"
---

Valid certificates encrypt your traffic and prove you're talking to the right server. They also stop you from getting used to clicking through browser warnings, which is a bad habit to build.

Today, you don't need to pay for a certificate for your lab, and manual renewal is on its way out.

## Which option?

| Option | Cost | Trusted by default | Good for |
| --- | --- | --- | --- |
| [ACME with DNS validation](#lets-encrypt-with-dns-validation) | Free | Yes | Most labs, including private services |
| [Your own CA](#your-own-certificate-authority) | Free | Only on devices you set up | Learning PKI, or Active Directory labs |
| [Self-signed](#self-signed) | Free | No | Quick tests |
| Paid CA | Varies | Yes | Rarely needed in a homelab |

## Let's Encrypt with DNS validation

[Let's Encrypt](https://letsencrypt.org/) issues free certificates using the ACME protocol. [ZeroSSL](https://zerossl.com/) and others also support ACME.

The usual HTTP challenge requires your server to be reachable from the internet. The [DNS challenge](https://letsencrypt.org/docs/challenge-types/#dns-01-challenge) instead proves ownership by creating a DNS record, so **your service can stay completely private**. You also can get a wildcard certificate this way.

You'll need:

1. A domain you own, such as a cheap one just for your lab.
2. A DNS provider with an API, such as Cloudflare.
3. A tool to handle the certificates, such as:
   - A reverse proxy with built-in ACME, such as [Caddy](https://caddyserver.com/), [Traefik](https://traefik.io/) or [Nginx Proxy Manager](https://nginxproxymanager.com/).
   - A general ACME client, such as [Certbot](https://certbot.eff.org/), [acme.sh](https://github.com/acmesh-official/acme.sh) or [lego](https://go-acme.github.io/lego/).
   - [cert-manager](https://cert-manager.io/) on Kubernetes.
   - Built-in support. Proxmox VE and OPNsense both handle ACME themselves.

Then, point an internal DNS record such as `app.lab.example.com` to your private IP address.

Two notes:

- Certificates are logged in public [Certificate Transparency logs](https://certificate.transparency.dev/), so hostnames become public. A wildcard certificate keeps your individual service names from appearing there.
- Limit your DNS API token to only the zone it needs, and treat it like a password.

## Shorter lifetimes

Automate renewal now, rather than doing it by hand. The CA/Browser Forum has [cut the maximum lifetime of public certificates](https://www.digicert.com/blog/tls-certificate-lifetimes-will-officially-reduce-to-47-days) on this schedule:

| From | Maximum lifetime |
| --- | --- |
| March 15, 2026 | 200 days |
| March 15, 2027 | 100 days |
| March 15, 2029 | 47 days |

Let's Encrypt certificates already last for no more than 90 days. These limits don't apply to private CAs.

## Your own certificate authority

Running a private CA is great practice, and you can issue certificates with whatever lifetime you choose. The catch is that you have to install your root certificate on every device that needs to trust it, which can be hard on phones and appliances.

- [step-ca](https://smallstep.com/docs/step-ca/) is a small CA that supports ACME, so your tools can renew automatically.
- [mkcert](https://github.com/FiloSottile/mkcert) makes development certificates quickly.
- [Active Directory Certificate Services](https://learn.microsoft.com/en-us/windows-server/identity/ad-cs/active-directory-certificate-services-overview) is useful for Windows-focused labs and common in enterprises. Group Policy handles the trust.

Protect your CA's private key well. Anyone holding it can impersonate any service to any device that trusts your CA.

## Self-signed

Self-signed certificates encrypt traffic but don't prove identity, and browsers will warn about them. Appliances and hypervisors often use them by default. That's fine while you're setting things up, but it's worth replacing them for anything that you use regularly.

## Keep TLS up to date

Disable old TLS versions on your services, and keep your web servers patched. Mozilla's [SSL Configuration Generator](https://ssl-config.mozilla.org/) gives you good settings for most software.
