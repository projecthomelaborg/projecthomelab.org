---
title: "Used enterprise servers"
description: "Used rack and tower servers offer lots of cores, RAM and drive bays for the money. Learn what to buy, what to avoid and what they really cost to run."
sidebar:
  label: "Used enterprise servers"
  order: 2
lastUpdated: 2026-10-30
---

Decommissioned servers are a classic way into homelabbing, and they offer capabilities that small machines can't match: lots of RAM slots and drive bays, redundant power, and out-of-band management. The trade-offs are noise, heat and your power bill. Do the math before you buy.

## Is a server right for you?

**A used server makes sense if you:**

- Need a lot of RAM, PCIe slots or drive bays in one machine.
- Want experience with iDRAC, iLO and real server hardware.
- Have a garage, basement or other place where the noise won't bother anyone.

**A [mini PC](/hardware/mini-pcs/) is probably better if you:**

- Live in a small home or have the lab in a shared room.
- Pay a lot for electricity.
- Will run mostly containers and light VMs.

## What it really costs

A two-socket server can idle at 100W to 200W or more, while a mini PC can idle at under 15W. At 150W and $0.18 per kWh, a server costs about $237 per year to run, compared with about $24 for a mini PC at 15W. Where power is more expensive, that gap can pay for new hardware in a year or two. See [what a watt costs](/housing/power/#what-a-watt-costs).

## What generation to buy

Generally, buy the newest generation you can afford. Newer servers are more efficient and quieter, and they'll keep getting hypervisor support for longer.

| Era | Examples | Memory | Our take |
| --- | --- | --- | --- |
| DDR3 | Dell R610, R710, HP DL360 G7 | DDR3 | Avoid. They use a lot of power, are slow, and lack modern CPU features |
| Early DDR4 | Dell R630, R730, HPE DL360 and DL380 Gen9 | DDR4 | The budget entry point. Check that current hypervisor releases still support the CPU |
| Later DDR4 | Dell R640, R740, HPE Gen10 | DDR4 | A strong choice as prices come down, with better efficiency and NVMe options |
| Current generations | Dell R650 and later, HPE Gen10 Plus and later | DDR4 or DDR5 | Good but costly, especially with memory prices high |

These servers also come in tower versions, such as the Dell T-series and HPE ML-series. They're usually far quieter than rack models with similar specs. Single-socket servers and workstations such as the Dell Precision and HP Z series are worth considering, too.

## What to check when buying

- **Out-of-band management licenses:** iDRAC Express and basic iLO don't include a full remote console. The Enterprise or Advanced licenses do, so check if the seller includes one.
- **Drive caddies and rails:** these are often sold separately, and can be costly.
- **RAID controller:** for ZFS or Ceph, you want an HBA or a controller that can be flashed to or set to HBA mode.
- **PSU size:** higher-wattage PSUs are less efficient at low loads. Choose the smallest that covers your needs.
- **CPU choice:** low-power and higher-efficiency models can make a big difference to your running costs.
- **Firmware access:** Dell makes updates widely available, whereas HPE puts many behind a support entitlement. Check before you buy.
- **Size:** many rack servers are very deep. Measure your rack first.
- **Weight:** you'll need rails, and a shelf or a strong rack, as well as help moving them.

## Taming noise

- Update the firmware. Servers often run their fans harder on old versions.
- Use parts the server recognizes. Third-party PCIe cards and drives can make some models run fans faster.
- See [Noise](/housing/noise/) for other tips.

Fan speed overrides using third-party tools exist for some models, but use them with care. You could cook the server if you get them wrong.

## Related

- [Dell PowerEdge naming](/hardware/dell-poweredge/)
- [ECC memory](/hardware/ecc-memory/)
- [Headless access](/management/headless-access/)
- [Archived model notes](/archive/) for specific older servers
