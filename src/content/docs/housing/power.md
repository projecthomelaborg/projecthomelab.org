---
title: "Power"
description: "Work out what your lab costs to run, measure its real power use, and choose a UPS, power distribution and a power supply."
sidebar:
  label: "Power"
  order: 3
lastUpdated: 2026-10-30
wikiTitle: "Power"
---

Power is often the largest long-term cost of a homelab, and the one people forget when they spot a cheap server.

## What a watt costs

For something that runs all the time:

**Annual cost = watts × 8.76 × your price per kWh**

One watt running all year uses 8.76 kWh. These figures use $0.18 per kWh, so scale them to your own rate.

| Average draw | Example | kWh per year | Cost per year |
| --- | --- | --- | --- |
| 10W | N100 mini PC | 88 | $16 |
| 30W | Three mini PCs | 263 | $47 |
| 60W | Small NAS and switch | 526 | $95 |
| 150W | Used two-socket server | 1,314 | $237 |
| 400W | A small rack | 3,504 | $631 |

Heat adds to this. Everything you consume ends up as heat in the room, so you may also pay for cooling in summer, though you'll offset some heating in winter.

## Measure it

Don't trust nameplate ratings. They show the maximum a power supply can deliver, not what the machine uses.

- A plug-in power meter costs little and shows the real draw.
- Smart plugs with energy monitoring can feed the data into Home Assistant or [your monitoring](/management/monitoring/).
- Servers report their power use through iDRAC and iLO.
- On Linux, [PowerTOP](https://github.com/fenrus75/powertop) can help you find savings.

## Reducing your bill

- Turn off what you aren't using. Wake-on-LAN or a [BMC](/management/headless-access/) can start machines on demand.
- Consolidate. One efficient machine often replaces several old ones.
- Enable C-states and ASPM in the firmware. This makes a big difference to idle power on many systems.
- Spin down hard drives you rarely use, although that has trade-offs for drive life and wake-up time.
- SFP+ with DAC cables uses less power than 10GBASE-T.

## PSU

A good power supply is more efficient and quieter. Look for 80 Plus Gold or better, and don't oversize it, because many PSUs are less efficient at the very low loads a lab spends its time at. Used servers often offer several PSU sizes, so buy the smallest that will do the job.

When sizing a system with many hard drives, allow for their startup current, which is much higher than their running power.

## UPS

A UPS protects against outages, brownouts, and many surges, and gives your systems time to shut down cleanly. That's especially important for data you care about.

- **Sizing:** add up your real power use, not nameplate ratings, and allow some headroom. Check both watts and VA.
- **Type:** line-interactive units suit most labs. Double-conversion units are cleaner but use more power and often have louder fans.
- **Waveform:** many modern power supplies with active PFC prefer pure sine wave output, as opposed to the cheaper "simulated" sine wave.
- **Automatic shutdown:** connect the UPS by USB or network, and use [NUT](https://networkupstools.org/) or apcupsd to shut down your machines when the battery gets low. Test it. Most NAS systems and Proxmox can use NUT too.
- **Batteries:** lead-acid batteries usually last a few years, so budget for replacement and test yours regularly. LiFePO4 units cost more but last longer.
- **Noise:** some UPS units whine or have fans that run constantly. Check before putting one in a bedroom or living room.

Protect your network gear as well, since a server's no use if you can't reach it.

## PDUs

A power distribution unit (PDU) gets power to your rack. Basic PDUs are little more than a tidy power strip for your rack.

Switched PDUs let you turn individual outlets on and off remotely, so you can:

- Reboot a hung host, even one without a BMC.
- Turn off lab nodes when they aren't being used, and bring them back when you need them.

Used APC units are common on eBay, but they can be noisy and have old, insecure management interfaces. Keep them on your management network. For a few devices, smart plugs that run locally, such as ones with [Tasmota](https://tasmota.github.io/docs/) firmware, are a cheaper option.

## Circuits and safety

- Know the limit of your circuit, and what else is on it. In the US, a standard 15A, 120V circuit should have no more than about 1,440W of continuous load. In the UK, a 13A plug supplies up to about 3kW, but check the limits of your ring circuit and extension leads.
- Don't daisy-chain power strips.
- If you're running high loads continuously, ask an electrician to check your wiring. Heat at a loose connection or a cheap extension lead is a real fire risk.
- Lithium batteries, in particular cheap ones, need to be treated with care.
