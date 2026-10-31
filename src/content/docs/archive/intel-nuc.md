---
title: "Intel NUC"
description: "The Intel NUC (Next Unit of Computing - typically pronounced \"nook\") is an ultra small form factor desktop computer produced by Intel, available as either:"
sidebar:
  label: "Intel NUC"
  order: 1
lastUpdated: 2020-07-31
wikiTitle: "Intel NUC"
---

:::caution[Archived article]
Intel left the NUC business in 2023 and ASUS took over the line. This page covers the Intel-era models and vSphere-era workarounds. For current options, see [Mini PCs and 1-liter desktops](/hardware/mini-pcs/).
:::

<figure class="wiki-figure" style="max-width:300px"><img src="/images/9/98/NUC-Gen5.png" alt="Generation 5 NUCs" loading="lazy" decoding="async"><figcaption>Generation 5 NUCs</figcaption></figure>

## NUCipedia Introduction

The Intel NUC ([Next Unit of Computing](http://www.intel.co.uk/content/www/uk/en/nuc/overview.html) - typically pronounced *"nook"*) is an ultra small form factor desktop computer produced by Intel, available as either:

- Kit with motherboard installed in a case, with included power supply
- Motherboard only SKU, where you supply your own case

At a basic level, you then only need to supply your own RAM, storage, screen, keyboard and mouse for a fully working solution.

Homelabs built from [Intel NUCs](/archive/intel-nuc/) are sometimes referred to as [Nanolabs](/start-here/nanolab/).

## Pros and Cons

The key benefits of the NUC all centre around its massive [WAF](/housing/household-acceptance/), due to its tiny size and minimal noise unless under high load. This means that you can locate them just about anywhere without risk of irritation from noise, such as in your home office, or even your living room!

The biggest drawbacks with the NUC were historically the limit of 16GB per node and the lack of a second NIC port. The former has now been resolved as of the 6th generation model, which now supports up to 32GB per node, and there are now multiple methods as detailed below, to provide a second or even a third ethernet adapter.

Newer models come with two chassis options, one of which supports a second 2.5" drive bay. These are typically a better buy as the additional case space allows more airflow, and keeps them cooler, even if you plan not to populate the bay.

Native headless access is only available via vPro on a handful of models, including the DC53427HYE and NUC5i5MYHE, typically only for i5 processors. Beyond that you would need to use some form of remote KVM solution if you need this level of remote management.

Lastly for maximum geek factor, Intel provide you with the ability to print your own [custom NUC lids](http://www.intel.com/content/www/us/en/nuc/nuc-replaceable-lid.html) using your 3D printer! One of the organisations mentioned by Intel also provide a number of other NUC products, including a [custom lid with built in USB ports](http://www.gorite.com/nuc-lid-additional-dual-usb-20-ports-gr-lid-000), and an [additional ethernet port](http://www.gorite.com/additional-rj45-port-to-the-nuc), though details on the driver version are not yet released.

## NUC Costs

NUCs are not a budget option, but are reasonably inexpensive considering their size, power, and long warranty from Intel.

- A new model is typically priced at around £200-£300 (\$250-\$400).
- You then need to simply add RAM and storage, which varies by model and generation.
- M.2 SSDs are supported by 5th Gen models and later. Previous models support mSATA SSDs.
- The larger chassis models support standard 2.5" SATA drives.
- RAM for Gen 5 and older models use DDR3L SODIMMs which have come down in price significantly in the last couple of years. Newer models take DDR4 which is still relatively highly priced.
- Older models came with a notebook-style brick power supply, but no C5 kettle lead, so watch out for that!
- It is typically possible to boot from USB into your favourite hypervisor, but these can usually be picked up for free at trade shows, or for a few pounds/dollars online.
- If you wish to add a single or dual port USB 3.0 NIC to your NUC, you can expect to pay £20-£40 (\$25-60).

As the range have been available for some time, they now typically come up second hand on Ebay on a regular basis for as much as 50%+ off for a Gen3/4 model. These are a great investment if you want to build out your NUCfrastructure on a budget!

## Use Cases

The primary use case for Intel NUCs are when you need a very small, silent homelab, which can fit into just about any space and any room, be it your office, your living room, or even your bedroom!

In addition, due to the very low power consumption, they are ideal from a "green" perspective, as well as keeping your electricity bill low.

Beyond that of course, there is a certain nerdy coolness to running a very powerful and fully featured lab in just a few inches of compute, especially if you combine it with some of the [NUC Racks](/archive/intel-nuc/#racking-nucs)! :)

The main time you should avoid using Intel NUCs is if you plan to run their CPUs constantly at a high utilisation. In this case their cooling will need to kick in, which can generate a very irritating high pitched noise. If you want something which is permanently running at high CPU utilisation but stays quiet, your best bet is probably a whitebox solution in a tower case, utilising silent fans and a silent, "gold" rated PSU, though you can expect your power bill to go up in this instance.

## Adding a Second NIC to your NUC

<figure class="wiki-figure" style="max-width:250px"><img src="/images/e/e9/USB-NIC.jpg" alt="USB NIC" loading="lazy" decoding="async"></figure>

For many people, the lack of a second ethernet NIC is an irritation at best, and a deal breaker at worst. For Windows bare metal installs this is less of an issue, but for vSphere it is a significant challenge.

A number of people have written about how to hack up a second NIC, and more recently William Lam has managed to get a USB NIC working in his lab with vSphere 5.5 and 6.0!

WARNING: We take no responsibility if you brick you NUC or void its warranty by following any of the articles below!

- [Working USB Ethernet Adapter (NIC) for ESXi](http://www.virtuallyghetto.com/2016/03/working-usb-ethernet-adapter-nic-for-esxi.html)
- [Functional USB 3.0 Ethernet Adapter (NIC) driver for ESXi 5.5 & 6.0](http://www.virtuallyghetto.com/2016/03/functional-usb-3-0-ethernet-adapter-nic-driver-for-esxi-5-5-6-0.html)
- [Adding a Second Ethernet Port to an Intel NUC via Mini PCIe](http://blog.fosketts.net/2015/06/05/adding-a-second-ethernet-port-to-an-intel-nuc-via-mini-pcie/)
- [Adding a second NIC to a 5th Gen Intel NUC (Or other PCIe Cards)](http://www.virten.net/2015/09/adding-a-second-nic-to-a-5th-gen-intel-nuc-or-other-pcie-cards/)

## Racking NUCs

<figure class="wiki-figure" style="max-width:130px"><img src="/images/a/ab/VSANLegoRack.png" alt="VSANLegoRack" loading="lazy" decoding="async"></figure>

Much like Pringles, you will quickly find that you can't have just one NUC, so the question then becomes how to manage the devices and cabling. Some very innovative solutions have been created by members of the community, including:

- [A Lego NUC Rack for a cluster running VMware VSAN, with a mini Top of Rack switch](http://vmnick0.me/?p=7)
- [Atlantis Computing's custom NUC case](https://community.atlantiscomputing.com/blog/Atlantis/September-2015/Four-Intel-NUCs-on-steroids)
- [A *NUC Sack* - 3D printable custom mini NUC rack](http://www.jaas.co/2014/09/18/small-things-nuc-sack/)
- 3D print your own [NUC Stacking Rings](http://www.thingiverse.com/thing:689704)
- If you just want to rack the motherboards, minus cases, another 3D printable solution is a [Shoebox size datacenter](http://itq.nl/shoebox-size-datacenter-hardware/)

## Known Issues and Solutions

The following is a list of known issues with the Intel NUC as a homelab:

- NUC models without the 2.5" SATA bays have a tendency to run hotter than those with them. As such under load the likelihood of the very annoying high speed fans spinning up is higher.
  - The temperature of the non SATA models can be reduced by running them on their sides, as detailed in the following article: [NanoLab – Part 6 – Keeping Your NUCs Cool](http://tekhead.it/blog/2014/11/nanolab-part-6-keeping-your-nucs-cool-quick-tip/)
- As the NUCs release significant amounts of heat via their case, this can get quite hot, which in turn passes heat into any attached USB devices, specifically flash drives which are often used as a boot device for hypervisors such as [VMware vSphere](/hypervisors/vmware-vsphere/) ESXi. As the flash drives then run much hotter than usual, a higher than expected rate of failure of them has been experienced.
  - A simple and cheap workaround for keeping flash drives cool is detailed in the following article: [NanoLab – Part 10 – Your NUCs are nice and cool, but what about your stick?](http://tekhead.it/blog/2015/11/nanolab-part-10-your-nucs-are-nice-and-cool-but-what-about-your-stick/)
- Firmware update issues have been experienced.
  - It is possible to get around these via a BIOS recovery and jumper configuration as detailed in the following article: [NanoLab – Part 5 – Intel NUC BIOS Update Issues FwUpdateFullBuffer](http://tekhead.it/blog/2014/10/nanolab-part-5-intel-nuc-bios-update-issues-fwupdatefullbuffer/)
- Black remote console when using vPro and headless NUC
  - Can be resolved by adding a dummy HDMI connector as described in the following article: [Running the Intel NUC headless with VMware ESXi](http://www.vfrank.org/2015/04/28/running-the-intel-nuc-headless-with-vmware-esxi/)
- ESXi 6.0 installation will fail on Intel NUC6I7KYK, without specific reconfiguration of the BIOS
  - [Follow the BIOS configuration here to enable installation of used ESXi 6.0 Update 2.](/archive/intel-nuc6i7kyk-bios/)

<figure class="wiki-figure" style="max-width:300px"><img src="/images/9/9e/NUC-Gen2.jpg" alt="NUC Gen2" loading="lazy" decoding="async"></figure>

## Intel NUC Models

The following table lists all NUC models with local GigE ports, which are compatible with running [VMware vSphere](/hypervisors/vmware-vsphere/). All other models are excluded.

<table>
<thead>
<tr>
<th><p>Gen</p></th>
<th><p>Intel kit</p></th>
<th><p>Intel board</p></th>
<th><p>Processor</p></th>
<th><p>TDP</p></th>
<th><p>CPU<br />
Bench</p></th>
<th><p>GPU</p></th>
<th><p>Max<br />
RAM</p></th>
<th><p>External<br />
Ports</p></th>
<th><p>Networking &amp;<br />
Driver Model</p></th>
<th><p>Internal<br />
SATA</p></th>
<th><p>Internal M.2<br />
SSD/NVMe</p></th>
</tr>
</thead>
<tbody>
<tr>
<td><p>1st Sandy Bridge</p></td>
<td><p><a href="http://ark.intel.com/products/71484/Intel-NUC-Kit-DCCP847DY">DCCP847DYE</a></p></td>
<td><p><a href="http://ark.intel.com/products/71620/Intel-NUC-Board-DCP847SK">DCP847SKE</a></p></td>
<td><p>Celeron 847</p></td>
<td><p>17 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Celeron+847+%40+1.10GHz">952</a></p></td>
<td><p>HD Graphics 2000</p></td>
<td><p>16 GB</p></td>
<td><p>USB 2.0 (×3)</p></td>
<td><p>GigE (×1)</p></td>
<td><p>No</p></td>
<td></td>
</tr>
<tr>
<td><p>2nd Ivy Bridge</p></td>
<td><p><a href="http://ark.intel.com/products/71275/Intel-NUC-Kit-DC3217IY">DC3217IYE</a></p></td>
<td><p><a href="http://ark.intel.com/products/71286/Intel-NUC-Board-D33217GK">D33217GK</a></p></td>
<td><p>Core i3-3217U</p></td>
<td><p>17 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i3-3217U+%40+1.80GHz">2291</a></p></td>
<td><p>HD Graphics 4000</p></td>
<td><p>16 GB</p></td>
<td><p>USB 2.0 (×3)</p></td>
<td><p>Intel 82579V GigE (×1)</p></td>
<td><p>No</p></td>
<td></td>
</tr>
<tr>
<td><p>2nd Ivy Bridge</p></td>
<td><p><a href="http://ark.intel.com/products/74483/Intel-NUC-Kit-DC53427HY">DC53427HYE</a></p></td>
<td><p><a href="http://ark.intel.com/products/74484/Intel-NUC-Board-D53427RK">D53427RKE</a></p></td>
<td><p>Core i5-3427U</p></td>
<td><p>17 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-3427U+%40+1.80GHz">3530</a></p></td>
<td><p>HD Graphics 4000</p></td>
<td><p>16 GB</p></td>
<td><p>USB 2.0 (×2)<br />
USB 3.0 (×1)</p></td>
<td><p>Intel 82579LM GigE (×1)</p></td>
<td><p>No</p></td>
<td></td>
</tr>
<tr>
<td><p>3rd Bay Trail</p></td>
<td><p><a href="http://ark.intel.com/products/78953/Intel-NUC-Kit-DN2820FYK">DN2820FYKH</a></p></td>
<td><p>DN2820FYB</p></td>
<td><p>Celeron N2820 /<br />
Celeron N2830</p></td>
<td><p>7.5 W</p></td>
<td><p><a href="https://www.cpubenchmark.net/cpu.php?cpu=Intel+Celeron+N2820+%40+2.13GHz&amp;id=2145">983</a> /<br />
<a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Celeron+N2830+%40+2.16GHz">993</a></p></td>
<td><p>HD Graphics</p></td>
<td><p>8 GB</p></td>
<td><p>USB 2.0 (×2)<br />
USB 3.0 (×1)</p></td>
<td><p>Intel 82579V (TBC!) GigE (×1)<br />
802.11bgn &amp; Bluetooth 4.0</p></td>
<td><p>Yes (×1)</p></td>
<td></td>
</tr>
<tr>
<td><p>4th Haswell</p></td>
<td><p><a href="http://ark.intel.com/products/76978/Intel-NUC-Kit-D34010WYK">D34010WYK</a></p></td>
<td><p><a href="http://ark.intel.com/products/76976/Intel-NUC-Board-D34010WYB">D34010WYB</a></p></td>
<td><p>Core i3-4010U</p></td>
<td><p>15 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i3-4010U+%40+1.70GHz">2435</a></p></td>
<td><p>HD Graphics 4400</p></td>
<td><p>16 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I218V GigE (×1)</p></td>
<td><p>No</p></td>
<td></td>
</tr>
<tr>
<td><p>4th Haswell</p></td>
<td><p>D34010WYKH</p></td>
<td><p>D34010WYB</p></td>
<td><p>Core i3-4010U</p></td>
<td><p>15 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i3-4010U+%40+1.70GHz">2435</a></p></td>
<td><p>HD Graphics 4400</p></td>
<td><p>16 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I218V GigE (×1)</p></td>
<td><p>Yes (×1)</p></td>
<td></td>
</tr>
<tr>
<td><p>4th Haswell</p></td>
<td><p><a href="http://ark.intel.com/products/76977/Intel-NUC-Kit-D54250WYK">D54250WYK</a></p></td>
<td><p><a href="http://ark.intel.com/products/76975/Intel-NUC-Board-D54250WYB">D54250WYB</a></p></td>
<td><p>Core i5-4250U</p></td>
<td><p>15 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-4250U+%40+1.30GHz">3454</a></p></td>
<td><p>HD Graphics 5000</p></td>
<td><p>16 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I218V GigE (×1)</p></td>
<td><p>No</p></td>
<td></td>
</tr>
<tr>
<td><p>4th Haswell</p></td>
<td><p>D54250WYKH</p></td>
<td><p>D54250WYB</p></td>
<td><p>Core i5-4250U</p></td>
<td><p>15 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-4250U+%40+1.30GHz">3454</a></p></td>
<td><p>HD Graphics 5000</p></td>
<td><p>16 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I218V GigE (×1)</p></td>
<td><p>Yes (×1)</p></td>
<td></td>
</tr>
<tr>
<td><p>5th Broadwell</p></td>
<td><p>|<a href="http://www.intel.com/content/www/us/en/nuc/nuc-kit-nuc5i7ryh.html">NUC5i7RYH</a></p></td>
<td><p><a href="https://downloadmirror.intel.com/24794/eng/NUC5i7RYB_NUC5i7RYBR_TechProdSpec02.pdf">NUC5i7RYB</a></p></td>
<td><p>Core i7-5557U</p></td>
<td><p>28 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i7-5557U+%40+3.10GHz">4967</a></p></td>
<td><p>HD Graphics 5000</p></td>
<td><p>16 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I218V GigE (×1)</p></td>
<td><p>Yes (×1)</p></td>
<td></td>
</tr>
<tr>
<td><p>5th Broadwell</p></td>
<td><p><a href="http://www.intel.com/content/www/us/en/nuc/nuc-kit-nuc5i5ryh.html">NUC5i5RYH</a></p></td>
<td><p><a href="http://downloadmirror.intel.com/24565/eng/NUC5i5RYB_NUC5i3RYB_TechProdSpec02.pdf">NUC5i5RYB</a></p></td>
<td><p>Core i5-5250U</p></td>
<td><p>15 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-5250U+%40+1.60GHz">3628</a></p></td>
<td><p>HD Graphics 5000</p></td>
<td><p>16 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I218V GigE (×1)</p></td>
<td><p>Yes (×1)</p></td>
<td></td>
</tr>
<tr>
<td><p>5th Broadwell</p></td>
<td><p><a href="https://www-ssl.intel.com/content/www/us/en/nuc/nuc-kit-nuc5i5ryk.html">NUC5i5RYK</a></p></td>
<td><p><a href="http://downloadmirror.intel.com/24565/eng/NUC5i5RYB_NUC5i3RYB_TechProdSpec01.pdf">NUC5i5RYB</a></p></td>
<td><p>Core i5-5250U</p></td>
<td><p>15 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-5250U+%40+1.60GHz">3628</a></p></td>
<td><p>HD Graphics 5000</p></td>
<td><p>16 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I218V GigE (×1)</p></td>
<td><p>Yes (×1)</p></td>
<td></td>
</tr>
<tr>
<td><p>5th Broadwell</p></td>
<td><p><a href="http://www.intel.com/content/www/us/en/nuc/nuc-kit-nuc5i3ryh.html">NUC5i3RYH</a></p></td>
<td><p><a href="http://downloadmirror.intel.com/24565/eng/NUC5i5RYB_NUC5i3RYB_TechProdSpec02.pdf">NUC5i3RYB</a></p></td>
<td><p>Core i3-5010U</p></td>
<td><p>15 W</p></td>
<td><p><a href="https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i3-5010U+%40+2.10GHz">3069</a></p></td>
<td><p>HD Graphics 5000</p></td>
<td><p>16 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I218V GigE (×1)</p></td>
<td><p>Yes (×1)</p></td>
<td></td>
</tr>
<tr>
<td><p>5th Broadwell</p></td>
<td><p><a href="https://www-ssl.intel.com/content/www/us/en/nuc/nuc-kit-nuc5i3ryk.html">NUC5i3RYK</a></p></td>
<td><p><a href="http://downloadmirror.intel.com/24565/eng/NUC5i5RYB_NUC5i3RYB_TechProdSpec01.pdf">NUC5i3RYB</a></p></td>
<td><p>Core i3-5010U</p></td>
<td><p>15 W</p></td>
<td><p><a href="https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i3-5010U+%40+2.10GHz">3069</a></p></td>
<td><p>HD Graphics 5000</p></td>
<td><p>16 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I218V GigE (×1)</p></td>
<td><p>Yes (×1)</p></td>
<td></td>
</tr>
<tr>
<td><p>5th Broadwell</p></td>
<td><p><a href="http://www.intel.com/content/www/us/en/nuc/nuc-kit-nuc5i3myhe-board-nuc5i3mybe.html">NUC5i3MYHE</a></p></td>
<td><p><a href="http://www.intel.com/content/www/us/en/nuc/nuc-kit-nuc5i3myhe-board-nuc5i3mybe.html">NUC5i3MYBE</a></p></td>
<td><p>Core i3-5010U</p></td>
<td><p>15 W</p></td>
<td><p><a href="https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i3-5010U+%40+2.10GHz">3069</a></p></td>
<td><p>HD Graphics 5000</p></td>
<td><p>16 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I218V GigE (×1)</p></td>
<td><p>Yes (×1)</p></td>
<td></td>
</tr>
<tr>
<td><p>5th Broadwell</p></td>
<td><p><a href="http://www.intel.com/content/www/us/en/nuc/nuc-kit-nuc5i5myhe-board-nuc5i5mybe.html">NUC5i5MYHE</a></p></td>
<td><p><a href="http://www.intel.com/content/www/us/en/nuc/nuc-kit-nuc5i5myhe-board-nuc5i5mybe.html">NUC5i5MYBE</a></p></td>
<td><p>Core i5-5300U vPro</p></td>
<td><p>15 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-5300U+%40+2.30GHz">3787</a></p></td>
<td><p>HD Graphics 5000</p></td>
<td><p>16 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I218V GigE (×1)</p></td>
<td><p>Yes (×1)</p></td>
<td></td>
</tr>
<tr>
<td><p>6th Skylake</p></td>
<td><p><a href="http://ark.intel.com/products/89186/Intel-NUC-Kit-NUC6i3SYK">NUC6i3SYK</a></p></td>
<td></td>
<td><p>Core i3-6100U</p></td>
<td><p>15 W</p></td>
<td><p><a href="https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i3-6100U+%40+2.30GHz&amp;id=2623">3529</a></p></td>
<td><p>HD Graphics 520</p></td>
<td><p>32 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I219V GigE (×1)</p></td>
<td><p>No</p></td>
<td></td>
</tr>
<tr>
<td><p>6th Skylake</p></td>
<td><p><a href="http://ark.intel.com/products/89189/Intel-NUC-Kit-NUC6i3SYH">NUC6i3SYH</a></p></td>
<td></td>
<td><p>Core i3-6100U</p></td>
<td><p>15 W</p></td>
<td><p><a href="https://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i3-6100U+%40+2.30GHz&amp;id=2623">3529</a></p></td>
<td><p>HD Graphics 520</p></td>
<td><p>32 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I219V GigE (×1)</p></td>
<td><p>Yes (×1)</p></td>
<td></td>
</tr>
<tr>
<td><p>6th Skylake</p></td>
<td><p><a href="http://ark.intel.com/products/89188/Intel-NUC-Kit-NUC6i5SYK">NUC6i5SYK</a></p></td>
<td></td>
<td><p>Core i5-6260U</p></td>
<td><p>15 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-6260U+%40+1.80GHz">4345</a></p></td>
<td><p>Iris Graphics 540</p></td>
<td><p>32 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I219V GigE (×1)</p></td>
<td><p>No</p></td>
<td></td>
</tr>
<tr>
<td><p>6th Skylake</p></td>
<td><p><a href="http://ark.intel.com/products/89190/Intel-NUC-Kit-NUC6i5SYH">NUC6i5SYH</a></p></td>
<td></td>
<td><p>Core i5-6260U</p></td>
<td><p>15 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i5-6260U+%40+1.80GHz">4345</a></p></td>
<td><p>Iris Graphics 540</p></td>
<td><p>32 GB</p></td>
<td><p>USB 3.0 (×4)</p></td>
<td><p>Intel I219V GigE (×1)</p></td>
<td><p>Yes (×1)</p></td>
<td></td>
</tr>
<tr>
<td><p>6th Skylake</p></td>
<td><p><a href="http://ark.intel.com/products/89187/Intel-NUC-Kit-NUC6i7KYK">NUC6i7KYK</a></p></td>
<td><p><a href="http://www.intel.com/content/www/us/en/nuc/nuc-kit-nuc6i7kyk-features-configurations.html">NUC6i7KYK Features</a></p></td>
<td><p>Core i7-6770HQ</p></td>
<td><p>45 W</p></td>
<td><p><a href="http://www.cpubenchmark.net/cpu.php?cpu=Intel+Core+i7-6770HQ+%40+2.60GHz&amp;id=2759">9478</a></p></td>
<td><p>Iris Graphics Pro 580</p></td>
<td><p>32 GB</p></td>
<td><p>USB 3.0 (×4)<br />
Thunderbolt 3 (40Gbps) (x1)</p></td>
<td><p>Intel I219LM GigE (×1)</p></td>
<td><p>No</p></td>
<td><p>PCIe x4 Gen3 NVMe or AHCI SSD (x2)<br />
2242/2280</p></td>
</tr>
</tbody>
</table>

## Further Reading

- [More information about the Intel NUC6I7KYK](/archive/intel-nuc6i7kyk/)
