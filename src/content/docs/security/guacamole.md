---
title: "Apache Guacamole"
description: "Guacamole is a clientless remote desktop gateway. It supports standard protocols like VNC, SSH and RDP. It is considered clientless becuase no client…"
sidebar:
  label: "Apache Guacamole"
  order: 3
lastUpdated: 2020-07-31
wikiTitle: "Guacamole"
---

<figure class="wiki-figure" style="max-width:100px"><img src="/images/0/06/Guac-tricolor.png" alt="Guac tricolor" loading="lazy" decoding="async"></figure>

## Introduction

[Guacamole](http://guac-dev.org/) is a clientless remote desktop gateway. It supports standard protocols like VNC, SSH and RDP. It is considered clientless becuase no client software is required at any point. Guacamole is an HTML5 based web application and the only software required for use is a web browser that supports HTML5.

## Cost

Guacamole is a free and open-source.

## Use Cases

Guacamole has a pretty simple use case.

1\. You have some sort of server you would like to access remotely (or multiple servers).

2\. You don't want to open up RDP/SSH ports to the web (389/22).

3\. You want a single location to remote into all machines on your network

## Deployment

Deployment can be somewhat lengthy, but another homelabber has created a very good guide on deploying Guacamole 0.9.9 on centos 7 [Here](https://deviantengineer.com/2015/02/guacamole-centos7/).

It is recommended to secure Guacamole in a DMZ or behind an NGINX reverse proxy.

## External Links

- [Guacamole Home Page](http://guac-dev.org/)
- [DeviantEngineer Guide](https://deviantengineer.com/2015/02/guacamole-centos7/)
