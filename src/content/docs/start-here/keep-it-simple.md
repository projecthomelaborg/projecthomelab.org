---
title: "Keep It Simple Stupid"
description: "Keep It Simple Stupid should be a guiding principle for every homelab build!"
sidebar:
  label: "Keep It Simple Stupid"
  order: 6
lastUpdated: 2020-07-31
wikiTitle: "Keep It Simple Stupid"
---

## Introduction

Keep It Simple Stupid should be a guiding principle for every homelab build!

You really want to spend your time learning in your lab, and not managing the lab. These time saving tips will help you achieve that!

## KISS Tips

- Don't configure your VMs to require manual installation of Windows or Linux OS updates! In this day and age, the chances of a patch causing a major lab outage is minimal, and even if it does, who cares? Just rebuild! Either use WSUS to roll out patches, or set automatic updates, but remember you are probably running on limited compute, so don't set all your VMs to update at the same time, on the same day of the week!
