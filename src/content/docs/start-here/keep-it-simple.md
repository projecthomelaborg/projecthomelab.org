---
title: "Keep It Simple"
description: "Time-saving habits that let you spend your time learning in the lab instead of maintaining it."
sidebar:
  label: "Keep It Simple"
  order: 7
lastUpdated: 2026-10-30
wikiTitle: "Keep It Simple Stupid"
---

Keep It Simple, Stupid (KISS) should be a guiding principle for every homelab. You want to spend your time learning in your lab, not nursing it along.

- **Automate updates on disposable machines.** If a patch breaks something, rebuild it. Stagger the schedule so everything isn't busy at the same time on limited hardware. See [Patching](/management/patching/).
- **Separate what you depend on from what you play with.** Keep your DNS, your backups and your family's photos away from today's experiment.
- **Make rebuilding cheap.** Use templates, cloud-init, Compose files and [Ansible](/management/automation/), so a rebuild takes minutes instead of a weekend.
- **Start small and add when it hurts.** You probably don't need a Kubernetes cluster to run three containers, unless learning Kubernetes is the point.
- **Prefer boring defaults.** Use the supported install method, the default storage layout, and the documented upgrade path.
- **Turn things off.** If you're not using it, shut it down. You'll save money and have less to patch.
- **Write down what you did**, briefly, while you still remember. Future you will be grateful.
