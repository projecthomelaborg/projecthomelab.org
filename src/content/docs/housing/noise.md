---
title: "Noise"
description: "Noise is one of those things which can most impact the WAF of any proposed homelab. There are a load of factors which can contribute to maintaining…"
sidebar:
  label: "Noise"
  order: 6
lastUpdated: 2020-07-31
wikiTitle: "Noise"
---

Noise is one of those things which can most impact the WAF of any proposed homelab. There are a load of factors which can contribute to maintaining maximum WAF and those can be found below.

## Physical Location

If you are first planning your homelab, think very carefully as to where you are going to locate it. If you have a garage, shed or loft / attic space with the appropriate amount of ventilation, [power](/housing/power/), networking capability and physical security, it is strongly suggested that you consider this first as it could save you a lot of pain in the long term!

Other common locations (in preference order) are typically in a home office, in a living room, or perhaps even in a bedroom.

## Fans

Fans are the primary source of noise, and as with so many things in life, bigger is generally better! The smaller the fan, the faster it needs to spin to keep up the [CFM](https://en.wikipedia.org/wiki/Cubic_foot), i.e. push more cool air across the hot components. It is recommended that you start by avoiding any kit which has 40mm / 60mm fans wherever possible and start with a minimum of 80mm or bigger.

Beyond that you can reduce noise significantly by buying high quality, low friction (i.e. low noise) fans for cooling your case and your CPUs. Some well known and long standing quiet fan vendors include [Zalman](http://www.zalman.com), [Thermalright](http://www.thermalright.com), [Scythe](http://www.scythe-eu.com), and one well known vendor who stocks many of these components either for purchase or ideas, is [Quietpc.com](https://www.quietpc.com).

It is definitely worthwhile if you are building a [whitebox](/start-here/building-a-homelab/#whitebox-servers) server, to also invest in a [gold or platinum certified PSU](https://en.wikipedia.org/wiki/80_Plus), which means it will be ultra efficient, therefore producing less heat, requiring less cooling, and ultimately producing less noise!

If you are buying a small form factor pre-built machine (such as the [Intel NUC](/hardware/intel-nuc/)), these systems are often designed for office and home environments, and as such are ultra-quiet by default. The only exception there being when you push significant CPU workloads on them, and their fans need to spin up to keep things cool. In this scenario they can be louder than a large case [whitebox](/start-here/building-a-homelab/#whitebox-servers) solution, so make sure you know whether you are planning to run your CPUs hot all of the time, or only occasionally before you decide which \[\[Homelab Categories\|homelab category\] to go with!

The loudest possible solution is typically a rack mount server! In this case you are best to stick to a case which will support the largest fans, so ideally 2U or above. The lower the chassis, the smaller the fan diameter, and the louder the fans. Again it is possible to change out the fans doing a modding project, such as [this one detailed on youtube for a DL360](https://www.youtube.com/watch?v=PVc1YgyMkK8), but YMMV and you do this at your own risk! A noisy lab is better than fried components! Far easier is to simply locate your [rack](rack) somewhere which the noise becomes a non-issue, such as a garage or shed.

Also ensure you are running the latest firmware and drivers for your physical hardware. In many cases, servers will spin their fans at maximum speed until the firmware monitors temperatures and spins the fans down to a more reasonable rate (and noise level!).

## Fan Controllers and Resistors

<figure class="wiki-figure" style="max-width:250px"><img src="/images/d/dc/Gelid-speedtouch6.jpg" alt="Gelid speedtouch6" loading="lazy" decoding="async"></figure>

If you have a [whitebox](/start-here/building-a-homelab/#whitebox-servers) homelab or similar, it may be worthwhile considering using a custom fan controller, which is either manual or automatic (based on temperature sensors inside your case). These are generally available to sit inside a standard 5.25" or 3.5" drive bay.

You can also retro-fit resistor and variable resistor fan controller cables to your case and CPU fans which will reduce the power reaching the fan, the speed of the fan, and hence the noise! Again this is at your own risk!

As cool as LCD fan controllers look, you may be better off going with something simple like a [Zalman Fanmate 2](http://www.zalman.com/global/product/Product_Read.php?Idx=206), and spending your budget elsewhere, such as on extra RAM for your hosts!

## Vibration

<figure class="wiki-figure" style="max-width:250px"><img src="/images/0/02/Homemaderack.png" alt="Rack mount servers using 2x4 wood blocks with rubber insulation and acoustic absorption foam to reduce noise" loading="lazy" decoding="async"><figcaption>Rack mount servers using 2x4 wood blocks with rubber insulation and acoustic absorption foam to reduce noise</figcaption></figure>

If you choose to run rack mount servers, or indeed any other server with high fan speeds and large metal cases, a common problem can be vibration and hence low-frequency noise. This is especially an issue if you locate your homelab in your loft / attic where it can actually generate a significant amount of noise against the timber floors and through the rafters of the building. Indeed any wooden or hard surface can conduct and amplify this noise.

For standard servers, any kind of acoustic isolation feet can have a significant improvement on noise levels. There are a huge number of different isolation feet available on the market of all different shapes and sizes, and YMMV. Some success has been found in the community using isolation feet for Hi-Fi equipment, and one well known vendor is AcoustiProducts, whose AcoustiFeet can be very effective, and can even be retrofitted to devices such as your home NAS device. This has been proven to be successful in significantly reducing the noise from a Synology DS412+ in Alex Galbraith's homelab (situated on his wooden living room TV cabinet), but of course YMMV.

Once you get to [rack mount servers](http://openhomelab.org/index.php?title=Building_a_Homelab#Vendor_Style), it may be that you dont actually have a rack within which to mount them! In this case one option would be to separate each server in your lab by a 2"x4" block of wood with silicon / rubber door seals used to "float" the blocks and provide some acoustic dampening (as seen in the picture on the right). It is far from perfect, but it can help.

## Acoustic Insulation

### PC and Rack Acoustic Absorption Kits

Absorption kits are a very effective way to retrospectively reduce the noise emanating from your servers. They typically consist of rubber-like material around 0.5-1cm thick, which absorbs sound waves from your devices, and reduces the overall noise produced by the device. Obviously they are only effective in a case where you can physically fit them to most internal case surfaces, and leaving large areas uncovered will reduce effectiveness.

It is generally not recommended to fit acoustic material inside of [rack mount cases](/start-here/building-a-homelab/#vendor-style), as these are generally built to specific tolerances etc, however most medium sized cases are perfectly capable of squeezing in a bit of acoustic foam! That said, beware as the foam not only conduction of noise, but it also reduces conduction of heat through the metal case of your machine, so your temperatures will rise inside the case, and require more effective cooling to keep to the same temperatures.

For rack servers, it is probably better to apply the absorption kits to the rack itself, as a number of Open Homelab community members have already done!

An example of the acoustic material can be found here, but other vendors are also available! [Acoustic Absorption Kits](http://www.quietpcusa.com/Acoustic-Materials-C4.aspx)

### Acoustic Absorption Panels

<figure class="wiki-figure" style="max-width:200px"><img src="/images/8/86/Soundabsorptionpanel.jpg" alt="Soundabsorptionpanel" loading="lazy" decoding="async"></figure>

Last and frankly most extremely, you could consider some acoustic absorption foam (aka egg-crate foam!).

This is only really worthwhile considering in a situation where you have decent ventilation of your homelab, as they will significantly reduce airflow and movement of air in your chosen location, but they can be reasonably effective if placed correctly.

Absorption panels do not need to entirely surround your lab; even locating the fans at the back of your servers for example, can reduce the amount of noise reflected off of any hard surfaces, such as walls or rack backs, but again always provide sufficient space for airflow and avoid creating fire hazards!!! Common sense should previal here, and the Open Homelab project can not be responsible for your over-packing your kit and burning down the house! :)

## Cloud Labs

Lastly if you want zero noise, why not consider a [cloud based homelab](/cloud/cloud-homelabs/)?!
