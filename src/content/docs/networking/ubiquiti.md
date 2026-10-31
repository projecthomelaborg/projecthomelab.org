---
title: "Ubiquiti UniFi"
description: "Ubiquiti's UniFi line offers managed Wi-Fi, switching and routing at a home-friendly price. Learn how it works and what to consider."
sidebar:
  label: "Ubiquiti"
  order: 7
lastUpdated: 2026-10-30
wikiTitle: "Ubiquiti"
---

Ubiquiti's UniFi line is popular with homelabbers because it provides business-style managed networking at a price home users can afford, with one interface for access points, switches, gateways and cameras.

## Pros and cons

**Pros**

- It's easy to set up, with a clear interface and good statistics.
- APs are discreet and ceiling-mountable, with no aerials, so they tend to go over well at home.
- VLANs and SSIDs are simple to configure and work across the whole system.

**Cons**

- It works best when your whole network is UniFi, so it can lock you in.
- You get less fine control than you do with MikroTik or a dedicated firewall.
- Ubiquiti can change features and interfaces with software updates.
- Popular models can be out of stock.

## Managing it

You'll need a UniFi controller application, which configures and monitors your devices. The network keeps running if the controller is off, but you lose statistics and the ability to make changes. You have two main options:

- **Self-hosted:** run the [UniFi Network application](https://ui.com/download) on your server, in a VM or using a community container image. This is free and good for labs.
- **Console:** a UniFi gateway or Cloud Key runs the controller for you, as a one-box solution.

Back up your controller's configuration, and keep a copy somewhere else.

## Choosing APs

Current models are a moving target, so check [Ubiquiti's store](https://store.ui.com/) for its range. In general, look at:

- The Wi-Fi generation, with Wi-Fi 6 or 7 for anything new. Avoid old 802.11n and early 802.11ac models, even if they're cheap, as they may no longer receive firmware updates.
- The range. Long-range models don't help much unless your client devices can also transmit that far. Adding a second AP often works better.
- The power requirements. Older models may use 24V passive PoE, while newer ones use standard 802.3af/at/bt, so check that your switch or injector matches.

See [Home Wi-Fi](/networking/wifi/) for a comparison with other vendors.
