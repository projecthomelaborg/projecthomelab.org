---
title: "vSphere without vCenter"
description: "Running standalone/free VMware vSphere ESXi Hypervisors without vCenter means you're missing out on some of the features- creating templates, cloning,…"
sidebar:
  label: "vSphere without vCenter"
  order: 1
lastUpdated: 2020-07-31
wikiTitle: "Managing your VMware vSphere Homelab without vCenter"
---

:::caution[Archived article]
Several tools here have changed. The host client is now built into ESXi, and backup APIs aren't available on free ESXi. Read [VMware licensing](/licensing/vmware/) first.
:::

Running standalone/free [VMware vSphere](/hypervisors/vmware-vsphere/) ESXi Hypervisors without vCenter means you're missing out on some of the features- creating templates, cloning, moving VMs from host to host etc. There are ways to get vCenter licensing on your homelab - [VMUG Advantage](https://www.vmug.com/Advantage) and the [vExpert Scheme](https://communities.vmware.com/community/vmtn/vexpert) are a couple of good examples -however there are some workarounds you can do to imitate some of the functionality.

## PowerShell

With Microsoft Windows 8 and Windows 10 comes great responsibility! in Microsoft PowerShell you can now power on your hosts via there IPMI/ILO interface (if you have IPMI connected hosts obviously!). with the commandlets you can:

1.  Get Information on the IPMI connected host (Get-PcsvDevice)
2.  Power On an IPMI connected host (Start-PcsvDevice)
3.  Power Off an IPMI connected host (Stop-PcsvDevice)

### Links

## ESXi Embedded Host Client

VMware Labs has created a web management interface for ESXi that installs directly on the ESXi server.

All you need to manage ESXi is a browser. No extras required (no Java, no Flash, even works from Safari on an iPad)!

<https://labs.vmware.com/flings/esxi-embedded-host-client>

Simply download the installation file from VMware, ssh into your ESXi host and install it. No reboot required.

When installed the server can be managed from <https://><i>servername</i>/ui

## PowerCLI

PowerCLI won't let you do anything you're not licensed for- just because the Move-VM cmdlet exists doesn't mean it will run and let you vMotion guests- but you can use PowerCLI to move or copy VMs, there's just a bit of thinking involved to put the script together. For example, to move a VM between independent ESXi hosts with no shared storage we could

1.  Shutdown the Source VM on the Source Host (see the Shutdown-VMGuest cmdlet)
2.  De-register the Source VM on the Source Host (see Remove-VM)
3.  Mount the Source Datastore as a PowerShell Drive (see Get-Datastore and New-PSDrive)
4.  Mount the Target Datastore as a PowerShell Drive
5.  Move the VM files (so all the config files, VMDK's etc) between the two Drives (see Copy-DatastoreItem)
6.  Register the (now Target) VM on the Target Host (see New-VM -VMFilePath)
7.  Power on the Target VM (see Start-VM)

All of these steps are available at the Free licensing level and higher.

### Links

## ESXi Shell

There's lots of functionality available through the ESXi Shell- remember, as with PowerCLI, you still don't have access to unlicensed features just because you're using the command line.

### Links

- [How to Copy VMs Directly Between ESXi Hosts Without Shared Storage](http://www.virtuallyghetto.com/2012/06/how-to-copy-vms-directly-between-esxi.html)
- [Using SCP to copy files to or from an ESX host](https://kb.vmware.com/selfservice/microsites/search.do?language=en_US&cmd=displayKC&externalId=1918)

## VMware Converter

This free tool from VMware allows you to move Virtual Machines between different infrastructures so can be used, amongst other things, to cold-migrate between ESXi hosts.

### Links

[VMware Converter Product Page (including Download and Documentation)](http://www.vmware.com/uk/products/converter/)

## Veeam Backup

Veeam Backup, right from the free offering, allows you to backup a VM and this backup can be restored to a different target host- in effect a cold-migration with an intermediate step.

### Links

[Veeam](/management/) on Open Homelab

## Someone else's vCenter

Creating an OVF/OVA template requires vCenter, but you can deploy them direct to an ESXi host. So if you have access to a VCenter somewhere outside your homelab (an employer perhaps) then you can use that to create the OVF files and then deploy them back at home.

<figure class="wiki-figure" style="max-width:200px"><img src="/images/e/e8/Deploy-OVF-Template-Host.png" alt="Deploy OVF Template" loading="lazy" decoding="async"><figcaption>Deploy OVF Template</figcaption></figure>
