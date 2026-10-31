---
title: "Microsoft Hyper-V"
description: "Hyper-V is Microsoft's hypervisor, included in Windows Server and in Windows Pro and Enterprise. Learn the options and costs for a homelab."
sidebar:
  label: "Microsoft Hyper-V"
  order: 5
lastUpdated: 2026-10-30
wikiTitle: "Microsoft Hyper-V"
---

Hyper-V is Microsoft's Type 1 hypervisor. It's a good choice if your job is in a Microsoft environment or if you want to learn Active Directory, failover clustering and Windows Server alongside virtualization.

## Ways to run it

| Option | Cost | Notes |
| --- | --- | --- |
| **Windows 11 Pro or Enterprise** | Included | Turn on the Hyper-V feature. Good for a desktop lab. Not available on Home |
| **Windows Server 2025 evaluation** | Free for 180 days | Full features. Good for study labs. See [Microsoft licensing](/licensing/microsoft/) |
| **Windows Server, licensed** | Paid | Standard covers 2 Windows Server VMs per fully licensed host. Datacenter allows unlimited, and adds Storage Spaces Direct |
| **Hyper-V Server 2019** | Free | The last free standalone release. [Microsoft ended the product](https://www.virtualizationhowto.com/2025/01/hyper-v-server-2025-nope-but-sort-of/) and there's no newer version. Avoid it for new labs, since its support ends in January 2029 |

## Pros and cons

**Pros**

- It's a good match for Microsoft-focused careers and certifications.
- It has broad hardware support, using standard Windows drivers.
- It supports live migration, failover clustering and nested virtualization.
- Windows Server 2025 can build failover clusters [without an Active Directory domain](https://learn.microsoft.com/en-us/windows-server/failover-clustering/create-workgroup-cluster), which simplifies small labs.

**Cons**

- There's no longer a free server product for permanent use.
- The Windows host adds more overhead and more patching and reboots than a lean hypervisor.
- Management tools are spread across Hyper-V Manager, Failover Cluster Manager, PowerShell and Windows Admin Center.
- Linux guests work well, but community homelab guidance is thinner than for Proxmox.

## Getting started

On a Windows Server host, or on a Windows client using the elevated PowerShell prompt, enable the role:

```powershell
# Windows Server
Install-WindowsFeature -Name Hyper-V -IncludeManagementTools -Restart

# Windows 11 Pro or Enterprise
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All
```

Server Core uses fewer resources and needs fewer patches than the Desktop Experience. Manage it remotely with [Windows Admin Center](https://learn.microsoft.com/en-us/windows-server/manage/windows-admin-center/overview) or PowerShell.

To run a hypervisor inside a VM, [enable nested virtualization](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/enable-nested-virtualization) while the VM is off:

```powershell
Set-VMProcessor -VMName <name> -ExposeVirtualizationExtensions $true
```

## Related

- [Microsoft licensing](/licensing/microsoft/)
- [Hyper-V documentation](https://learn.microsoft.com/en-us/windows-server/virtualization/hyper-v/overview)
