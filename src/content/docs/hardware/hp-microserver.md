---
title: "HP MicroServer"
description: "A MicroServer is a small form factor OEM server manufactured by HP. There have been a number of variants of the MicroServer with the latest being the…"
sidebar:
  label: "HP MicroServer"
  order: 7
lastUpdated: 2020-07-31
wikiTitle: "HP MicroServer"
---

<figure class="wiki-figure" style="max-width:300px"><img src="/images/6/61/HPE-MicroServer-Gen10.jpg" alt="HP MicroServer Gen10" loading="lazy" decoding="async"><figcaption>HP MicroServer Gen10</figcaption></figure>

<figure class="wiki-figure" style="max-width:300px"><img src="/images/2/2b/MicroServerGen8.png" alt="HP MicroServer Gen8" loading="lazy" decoding="async"><figcaption>HP MicroServer Gen8</figcaption></figure>

## MicroServer's Introduction

A MicroServer is a small form factor OEM server manufactured by HP. There have been a number of variants of the MicroServer with the latest being the Gen10. The Gen8 models were based on an Intel CPU architecture whilst the current Gen10 and previous G7 model are AMD. It has a huge number of features typically found on an enterprise server squeezed into a small chassis.

## Pros and Cons

'''Pro’s

- Hardware on VMware Hardware Compatibility List (HCL) for ESXi 6
- Low noise
- Space for 4 x 3.5” HDD’s and 1 SSD, more with expansion bracket.
- Small form factor server
- Built in iLo
- Internal USB slot
- On-board RAID controller
- 2 x NIC’s as standard
- 2 x Half Height PCIe 3 Expansion slots
- Cashback deals reduce cost

'''Cons

- Max 32Gb RAM
- Standard AMD CPU is not very powerful and only 2 cores (4 Core Optional)
- Embedded RAID Controller is RAID 0/1/10 only

## Tested HW Configurations

| Server Model | Type     | Part                                                                                                   |
|--------------|----------|--------------------------------------------------------------------------------------------------------|
| Gen8         | CPU      | CPU Model to go here                                                                                   |
| Gen8         | Memory   | Kingston 16GB 1333MHz DDR3 ECC CL9 DIMM (Kit of 2 x 8GB)                                               |
| N36L         | Memory   | Kingston KVR1333D3E9SK2/16G, 1333 MHz, DDR3, ECC CL9 DIMM Kit (2x8 GB), 240-pin - Tested with ESXi 6.0 |
| N36L         | NIC Card | HP NC112T PCI Express Gigabit (Intel 82574L chipset) - Tested with ESXi 6.0                            |

Tested Hardware Configurations

## Modifications

- Bracket for mounting an 4 internal SSD's in addition to the 4 LFF drive bays [Gen8 drive bracket](http://homeservershow.com/hp-microserver-gen8-drive-bracket.html)
- Case dampening to cure reverberation to make MicroServer even quieter [Reverberation noise reduction](http://vgeeky.co.uk/2016/03/14/microserver-gen-8-reverberation-noise-reduction)

## Links

[G7 QuickSpecs](https://h20195.www2.hpe.com/v2/GetDocument.aspx?docname=c04111672)  
[Gen8 QuickSpecs](https://h20195.www2.hpe.com/v2/GetPDF.aspx/c04128132.pdf)  
[Gen10 QuickSpecs](https://h20195.www2.hpe.com/v2/Getdocument.aspx?docname=a00008701enw)  
[HPE Promotions Page (for cash back offers - UK)](https://www.hpe.com/uk/en/solutions/smb/jrit-promotions.html)
