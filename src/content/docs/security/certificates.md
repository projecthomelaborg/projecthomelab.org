---
title: "Certificates"
description: "This section is to assist you in the basics of certificates, how to generate them or even a few examples of free Certificate authorities and even some…"
sidebar:
  label: "Certificates"
  order: 7
lastUpdated: 2020-07-31
wikiTitle: "Certificates"
---

## Introduction

This section is to assist you in the basics of certificates, how to generate them or even a few examples of free Certificate authorities and even some paid ones

## Pros and Cons

The pros of securing your home lab with certificates is if you are accessing this via the web you know your data and/or credentials are 'safe' within transit. I use the word safe as this depends on the cipher used and any known vulnerabilities that crop up. For example the heartbleed bug <http://heartbleed.com/>

## Costs

Free to £\$£\$ hundreds

## Use Cases

The use cases for this type of technology can be used in SSL VPNs, RDP Web Access, Citrix Netscalers, VMware vCenter/Horizon desktops

## Known Issues and Solutions

- Self Signed certificates
  - Self signed certficates can be used for free but wont be trusted by any machine outside your domain
- Free CA's
  - There are some free CA's such as *<https://www.startssl.com/>* (no longer issuing as of 1 Jan 2018) or the latest up coming project <https://letsencrypt.org/> as well as <https://www.sslforfree.com/>
- Paid for CA's
  - There are a few common CA's you can use such as <https://www.digicert.com> or <https://ssl.comodo.com/free-ssl-certificate.php> who offer a free 90 day trial so you can make sure you are happy
