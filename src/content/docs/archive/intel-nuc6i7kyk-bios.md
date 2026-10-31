---
title: "Intel NUC6I7KYK BIOS Configuration"
description: "Installing VMware ESXi 6.0 Update 2 on the Intel Skull Canyon NUC6I7KYK requires some specific BIOS settings. Here are the settings used with BIOS 0034."
sidebar:
  label: "Intel NUC6I7KYK BIOS Configuration"
  order: 3
lastUpdated: 2020-07-31
wikiTitle: "Intel NUC6I7KYK BIOS Configuration"
---

:::caution[Archived article]
These settings apply to ESXi 6.0 on 2016 hardware. ESXi 6.x has long been out of support.
:::

Installing VMware ESXi 6.0 Update 2 on the [Intel Skull Canyon NUC6I7KYK](/archive/intel-nuc6i7kyk/) requires some specific BIOS settings. Here are the settings used with BIOS 0034.

| BIOS\Devices\USB              | Default       | ESXi 6.0 Update 2 install |
|-------------------------------|---------------|---------------------------|
| USB Legacy                    | On            | Disabled                  |
| Portable Device Charging Mode | Charging Only | Disabled                  |
| USB Ports (Port -01-08)       | Enabled       | Enabled                   |

| BIOS\Devices\SATA | Default    | ESXi 6.0 Update 2 install |
|-------------------|------------|---------------------------|
| Chipset SATA      | AHCI       | Disabled                  |
| Chipset SATA      | S.M.A.R.T. | Disabled                  |
| HDD Activity LED  | On         | Disabled                  |
| M.2 PCIe SSD LEG  | On         | Disabled                  |

| BIOS\Devices\Onboard Devices | Default  | ESXi 6.0 Update 2 install                                                      |
|------------------------------|----------|--------------------------------------------------------------------------------|
| Audio                        | On       | Disabled                                                                       |
| LAN                          | On       | On                                                                             |
| Thunderbolt Controller       | On       | On (I did disable it for the install as part of my Stop error troubleshooting} |
| WLAN                         | On       | Disabled                                                                       |
| BlueTooth                    | On       | Disabled                                                                       |
| Near Field Communicattion    | Disabled | Disabled                                                                       |
| SD Card                      | Read     | Read/Write                                                                     |

| Legacy Device Configuration | Default | ESXi 6.0 Update 2 install |
|-----------------------------|---------|---------------------------|
| Enhanced Consumer IR        | On      | Disabled                  |
| High Precision Event Timers | On      | Disabled                  |
| Num Lock                    | On      | Disabled                  |

| Performance\Processor        | Default | ESXi 6.0 Update 2 install |
|------------------------------|---------|---------------------------|
| Real-Time Performance Tuning | On      | Disabled                  |

| Power                 | Default          | ESXi 6.0 Update 2 install |
|-----------------------|------------------|---------------------------|
| Performance Selection | Balanced Enabled | Max Performance           |

| Secondary Power Setting     | Header text | Header text |
|-----------------------------|-------------|-------------|
| Intel Ready Mode Technology | On          | Disable     |
| Power Sense                 | On          | Disable     |
| After Power Failure         | Stay Off    | Power On    |
