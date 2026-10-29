---
title: "Power"
description: "See this forum post for good overview of considerations when sizing a power supply (from a NAS perspective, but generally applicable for other use-cases)."
sidebar:
  label: "Power"
  order: 3
lastUpdated: 2020-07-31
wikiTitle: "Power"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

## Introduction

## PSU

See this [forum post](https://forums.freenas.org/index.php?threads/proper-power-supply-sizing-guidance.38811/) for good overview of considerations when sizing a power supply (from a [NAS](NAS) perspective, but generally applicable for other use-cases).

## UPS

A UPS is a really useful device to have in the home, whether you are using it for a homelab, or simply to protect your home NAS / PC. As well as providing a battery backup for any brownouts, blackouts, or simply when a fuse / RCD on your consumer unit trips, they are also very effective at insulating your expensive <s>toys</s> electronic equipment from electrical spikes, surges and noise.

One thing to be aware of is that some UPS models often make an irritating high pitched noise, which can be distracting and lower your WAF if it is placed in a high family area such as the living room or bedroom.

For more information on specific models tested by the community, see the [UPS](/housing/) page.

## PDUs

## Remote PDUs

<figure class="wiki-figure" style="max-width:300px"><img src="/images/8/82/Masterswitch-interface.gif" alt="Masterswitch interface" loading="lazy" decoding="async"></figure>

Remote PDUs are very useful for several reasons. You can use them to remotely:

- reboot non-responsive hosts, even without iLO or similar
- power off one or more nodes in your lab when not in use, and remotely turn it back on again as required

This is useful functionality, even if you do have reasonably easy physical access to your lab as (for example) you can use it to remotely boot your lab whilst in the office or away from your homelab location

Bear in mind though, that most remote PDUs are typically rack mountable, so you either need to be able to stack them somewhere, or have at least a small rack.

Examples of tested homelab remote PDUs are as follows:

- [APC AP 9212 Masterswitch PDU](ftp://ftp.apc.com/apc/public/hardware/mswitch/firmware/ms/v220/usrguide.pdf)
  - Costs around £100-£150 (\$150-\$225) used on ebay and can power up to 8 devices
  - Controlled through a very simple web interface, though secured by http only, so be careful with password choices

## Cables

## Connectors

## Circuits

## Power Bills

<figure class="wiki-figure" style="max-width:200px"><img src="/images/0/09/Greatpower.png" alt="Greatpower" loading="lazy" decoding="async"></figure>

**Still under construction**

In the meantime, here is a meme to test image uploads!
