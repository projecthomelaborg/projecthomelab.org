---
title: "Monitoring and logging"
description: "Find out your lab is broken before someone else tells you. Start simply with Uptime Kuma, and work up to Prometheus, Grafana, Zabbix and central logging."
sidebar:
  label: "Monitoring and logging"
  order: 2
lastUpdated: 2026-10-30
wikiTitle: "Monitoring"
---

Monitoring tells you what's broken and helps you learn why. It's also one of the most employable skills you can practice in a lab. Start small, and only add what you'll actually look at.

## Where to start

1. **Check whether your services are up.** [Uptime Kuma](https://github.com/louislam/uptime-kuma) takes minutes to set up, and sends notifications to your phone.
2. **Watch the hosts.** [Beszel](https://github.com/henrygd/beszel) and [Netdata](https://www.netdata.cloud/) are quick ways to see CPU, memory, disk use and more.
3. **Watch your drives.** Set up SMART alerts, and ZFS scrub and error alerts. Failing disks are your most likely hardware problem.
4. **Check that your backups ran.** Use an alert such as [Healthchecks](https://healthchecks.io/), which notifies you when an expected job doesn't report in.

## Bigger tools

| Tool | Type | Notes |
| --- | --- | --- |
| [Prometheus](https://prometheus.io/) and [Grafana](https://grafana.com/) | Metrics and dashboards | The modern standard, particularly with Kubernetes. Well worth learning |
| [Zabbix](https://www.zabbix.com/) | All-in-one monitoring | Common in businesses, with a lot of built-in templates. Takes some time to set up |
| [LibreNMS](https://www.librenms.org/) | Network monitoring | Excellent auto-discovery for switches, routers and other SNMP devices |
| [Checkmk](https://checkmk.com/) | All-in-one monitoring | Has a free community edition with auto-discovery |
| [Icinga](https://icinga.com/) | Infrastructure monitoring | A modern tool with roots in Nagios |
| [Nagios Core](https://www.nagios.org/) | Infrastructure monitoring | The old classic. Still around, but newer tools are often easier to start with |
| [Observium](https://www.observium.org/) | Network monitoring | Has a free community edition with delayed updates |

## Logging

Central logging lets you search everything in one place, and it preserves logs if a machine dies or is compromised.

| Tool | Notes |
| --- | --- |
| [Grafana Loki](https://grafana.com/oss/loki/) | Lightweight. Indexes labels rather than the full text of each log line. Pairs well with Grafana |
| [Graylog](https://graylog.org/) | Full-featured log management. Needs more resources |
| [OpenSearch](https://opensearch.org/) or Elastic Stack | Very capable, and common in business. They use a lot of RAM |
| [VictoriaLogs](https://docs.victoriametrics.com/victorialogs/) | Efficient and relatively new |

To send logs, use Alloy, Fluent Bit, or Vector, or just use plain rsyslog if you prefer to keep it simple.

## Alert carefully

Too many alerts soon get ignored. Alert on what you need to act on, like a failing disk, a failed backup, or a service down for more than a few minutes. Use dashboards for everything else. [ntfy](https://ntfy.sh/) and [Gotify](https://gotify.net/) are self-hosted options for push notifications, and most tools can send email or chat messages as well.

If your monitoring runs on the same host that it monitors, it can't tell you when that host dies. An external check, such as a small monitor on a cheap VPS or a free service, covers that gap.
