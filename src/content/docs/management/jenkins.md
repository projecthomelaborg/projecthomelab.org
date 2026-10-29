---
title: "Jenkins in the Homelab"
description: "Jenkins is an open source automation platform, who describe themselves as The leading open source automation server, Jenkins provides hundreds of plugins…"
sidebar:
  label: "Jenkins in the Homelab"
  order: 8
lastUpdated: 2020-07-31
wikiTitle: "Jenkins in the Homelab"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

<figure class="wiki-figure" style="max-width:200px"><img src="/images/2/24/Jenkins.png" alt="Jenkins" loading="lazy" decoding="async"></figure>

## Introduction

Jenkins is an open source automation platform, who [describe themselves](https://jenkins.io/) as *The leading open source automation server, Jenkins provides hundreds of [plugins](https://wiki.jenkins-ci.org/display/JENKINS/Plugins) to support building, deploying and automating any project.*

Primarily used by developers for [pipelining](https://jenkins.io/doc/pipeline/) their code through development stages and into production, it's primary function is to enable "Continuous Integration and Continuous Delivery". However, the platform itself is extremely extensible, and being Java based, runs on almost any OS. This makes it a really interesting choice as a base for introducing automation into your homelab and controlling it from a single console! (Nobody said Single Pain of Glass! \*Drink\*!)

## Pros and Cons

TBC

## Costs

The basic version of Jenkins (with no high availability features) is completely free! Enterprise versions and even SaaS are available. For a zero cost solution, run it on Linux!

## Use Cases

So you can of course use this as a tool for deploying and automating code, but being an extensible platform with scheduling capabilities, why not use it as a scheduling tool as well? You dont even need to install a single slave either, just spin up your Jenkins master server, then use that to either SSH or run PowerShell scripts on all of your managed VMs, and monitor their progress via the dashboard! It couldn't be simpler!

## Known Issues and Solutions

- If you do try to remotely deploy a slave to a Windows instance, it can be quite painful and requires lots of firewall ports and registry changes. Best just to avoid slaves in a small environment, but if you do need them:
  - [Windows slaves fail to start via DCOM](https://wiki.jenkins-ci.org/display/JENKINS/Windows+slaves+fail+to+start+via+DCOM)

## Example Jobs

**TBC**

## External Links

Below are listed a number of curated links to blog posts from community members about how they used Jenkins for task scheduling and automation.

| Title                                                                                                                                  | Description                                                               |
|----------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| [Drop that cron - use Jenkins instead for scheduled jobs](https://www.cloudbees.com/blog/drop-cron-use-jenkins-instead-scheduled-jobs) | Discusses why you might use Jenkins as a scheduler                        |
| [Replace Local Cron With Jenkins](http://www.panozzaj.com/blog/2014/05/02/replace-local-cron-with-jenkins/)                            | Examples of Jenkins automation, such as automating OS patching            |
| [Jenkins Plugins](https://wiki.jenkins-ci.org/display/JENKINS/Plugins)                                                                 | Primary plugin repo, with plugins for Windows, Linux and generic features |

External Links
