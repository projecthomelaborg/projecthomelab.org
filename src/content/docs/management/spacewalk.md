---
title: "Spacewalk"
description: "Spacewalk is a great open source project which delivers a Linux systems management solution. According to the project's wiki page, here's what Spacewalk…"
sidebar:
  label: "Spacewalk"
  order: 14
lastUpdated: 2025-01-31
wikiTitle: "Spacewalk"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

## Introduction

Spacewalk is a great open source project which delivers a Linux systems management solution. According to the [project's wiki page](https://fedorahosted.org/spacewalk/), here's what Spacewalk allows you to do:

- Inventory your systems (hardware and software information)
- Install and update software on your systems
- Collect and distribute your custom software packages into manageable groups
- Provision (Kickstart) your systems
- Manage and deploy configuration files to your systems
- Provision virtual guests
- Start/stop/configure virtual guests

As you it can be seen from the above list, patch management is only a small subset of features available in Spacewalk and it trully is a very versatile tool.

As our homelab grows, manual patch management can become a bit of a nightmare. This is where Spacewalk really comes in handy, making it possible to patch your entire environment in a matter of minutes, at the same time ensuring that all operating systems are patched to the same baseline.

## Requirements

## Installation

This installation guide assumes that we use Centos 7 to install our Spacewalk server.

First of all, we will need to install the spacewalk-repo package

    rpm -Uvh http://yum.spacewalkproject.org/2.5/RHEL/7/x86_64/spacewalk-repo-2.5-3.el7.noarch.rpm

## How to manage your systems with Spacewalk

TBC

## External Links

Here's some links related to Spacewalk

| Title                                                     | Description                                     |
|-----------------------------------------------------------|-------------------------------------------------|
| [Spacewalk Wiki](https://fedorahosted.org/spacewalk/wiki) | Good place to start - Spacewalk Wiki            |
| [Homelab blogpost Title B](http://link.to/something)      | This is a great article about Microservers      |
| [Homelab blogpost Title C](http://link.to/something)      | This article shows you step by step how to blah |

External Links
