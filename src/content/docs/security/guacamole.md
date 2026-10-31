---
title: "Apache Guacamole"
description: "Apache Guacamole is a clientless remote desktop gateway. Access RDP, SSH and VNC from your browser, using a simple Docker deployment."
sidebar:
  label: "Apache Guacamole"
  order: 3
lastUpdated: 2026-10-30
wikiTitle: "Guacamole"
---

[Apache Guacamole](https://guacamole.apache.org/) is a clientless remote desktop gateway. It supports RDP, SSH, VNC and other protocols, and all you need is a web browser. It's free and open source.

## Use cases

- You want a single place to reach all the machines in your lab.
- You're using a computer where you can't install a VPN client or remote desktop software.
- You want to record sessions or give someone limited access to a single machine.

## Deployment

The simplest way to run it is with containers. The official [Docker installation guide](https://guacamole.apache.org/doc/gug/guacamole-docker.html) explains how to set up its three parts: the `guacamole` web app, the `guacd` proxy daemon, and a database for users and connections.

Older guides that rely on building it from source on CentOS 7 are out of date, as that OS has reached end of life.

## Securing it

Guacamole holds the keys to your whole lab, so treat it accordingly.

- Keep it on your private network, and reach it [over a VPN](/security/remote-access/). If you must publish it, put it behind a reverse proxy and an authentication layer, on a segmented network.
- Change the default `guacadmin` login immediately.
- Turn on [multi-factor authentication](https://guacamole.apache.org/doc/gug/totp-auth.html), using the TOTP extension or single sign-on.
- Use HTTPS. See [Certificates](/security/certificates/).
- Keep it up to date.
