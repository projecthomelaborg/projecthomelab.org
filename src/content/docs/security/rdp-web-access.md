---
title: "RD Web Access"
description: "This is a brief article about configuring RD Web Access for your home lab"
sidebar:
  label: "RD Web Access"
  order: 2
lastUpdated: 2020-07-31
wikiTitle: "RDP Web Access"
---

## Introduction

This is a brief article about configuring RD Web Access for your home lab

## Pros and Cons

If you don't have MSDN this can cost a few hundred for a Windows License then around £25 for a 5 User TSCAL

## Costs

Free if you have access to an MSDN license or happy with the 90/180 trials to learn

## What will you need

- About an hour maybe two depending on the speed of your environment
- At least 2 VMs and a DC as a minimum
- The same amount of spare IPs to VMs
- Access to your router/firewall
- Ideally a trust certificate
- 1 public IP or a NAT from a load balancer

## Use Cases

The use cases for this type of technology are for accessing your environment over standard SSL ports. This helps with locked down company environments as it doesn't rely on port 3389 for RDP

## Solutions

Firstly I shall start by saying I have configured this as bare bones to limit the amount of resources I use on my environment and also what works for me. If you are studying for your MCSA I would suggest you build this out and include a RD Web Access server, RD Virtualization Host and a RD Connection Broker. I used my Gateway as a session broker as most my traffic would be coming from here.

Firstly start by getting your two new VMs up and running and ready to join to your domain (sys prepped, WSUS etc)

From here use any naming convention you want but I used

- Corprdsgw01.domain.com - This will be your RD Gateway
- Corprdssh011.domain.com - This will be where your session gets dropped onto

You will also need another machine for licensing, I usually opt for this on my secondary DC

**Please note I will put notes in for alternative config if only using two machines. I couldn't do this as I already had an environment on this domain**

I am also to happy to explain I do the configuration this way as it allows you to install .NET 3.5 if you are still using the old fat clients for your hyper-visors

## Configuring the RD Gateway server

Start by logging into the Corprdsgw01 machine, within server manager select add roles

<figure class="wiki-figure" style="max-width:400px"><img src="/images/8/81/Rdsguide1.png" alt="Rdsguide1" loading="lazy" decoding="async"></figure>

Press next and select Role-Based or Feature-based installation

<figure class="wiki-figure" style="max-width:400px"><img src="/images/5/5a/Rdsguide2.png" alt="Rdsguide2" loading="lazy" decoding="async"></figure>

Ensure you server is selected as you may already have these in a group

<figure class="wiki-figure" style="max-width:400px"><img src="/images/c/c5/Rdsguide3.png" alt="Rdsguide3" loading="lazy" decoding="async"></figure>

Within this window select 'Remote Desktop Services'

<figure class="wiki-figure" style="max-width:400px"><img src="/images/0/0d/Rdsguide4.png" alt="Rdsguide4" loading="lazy" decoding="async"></figure>

This following window allows you to install .NET 3.5 for older applications and web browsers

<figure class="wiki-figure" style="max-width:400px"><img src="/images/8/8f/Rdsguide5.png" alt="Rdsguide5" loading="lazy" decoding="async"></figure>

Select next on this window

<figure class="wiki-figure" style="max-width:400px"><img src="/images/f/f5/Rdsguide6.png" alt="Rdsguide6" loading="lazy" decoding="async"></figure>

Within this window select Remote Desktop Gateway **Also select Remote Desktop Broker and Web Access if you only plan to have two machines**

<figure class="wiki-figure" style="max-width:400px"><img src="/images/9/93/Rdsguide7.png" alt="Rdsguide7" loading="lazy" decoding="async"></figure>

The system will now guide you through the NPS server roles. Keep these at the default for now but can help you lock down access going forward

<figure class="wiki-figure" style="max-width:400px"><img src="/images/0/0f/Rdsguide8.png" alt="Rdsguide8" loading="lazy" decoding="async"></figure>

<figure class="wiki-figure" style="max-width:400px"><img src="/images/1/18/Rdsguide9.png" alt="Rdsguide9" loading="lazy" decoding="async"></figure>

Again follow the standard settings for IIS

<figure class="wiki-figure" style="max-width:400px"><img src="/images/0/0f/Rdsguide10.PNG" alt="Rdsguide10" loading="lazy" decoding="async"></figure>

<figure class="wiki-figure" style="max-width:400px"><img src="/images/1/1f/Rdsguide11.PNG" alt="Rdsguide11" loading="lazy" decoding="async"></figure>

Finally confirm the installation, once complete reboot the VM

<figure class="wiki-figure" style="max-width:400px"><img src="/images/8/8b/Rdsguide12.PNG" alt="Rdsguide12" loading="lazy" decoding="async"></figure>

## Configuring the RD Session Host

Follow all the above sections for your RDS host but on this screen select Remote Desktop Session Host

<figure class="wiki-figure" style="max-width:400px"><img src="/images/8/8b/Rdsguide12.PNG" alt="Rdsguide12" loading="lazy" decoding="async"></figure>

## Configuring the RD Session Host

Follow all the above sections for your License server but on this screen select Remote Desktop Licensing

<figure class="wiki-figure" style="max-width:400px"><img src="/images/8/8b/Rdsguide12.PNG" alt="Rdsguide12" loading="lazy" decoding="async"></figure>

## Configuring the services to talk

Firstly I would suggest you ensure all the VMs have been rebooted. When logging in ensure you use a domain admin account for the next steps

Firstly start by clicking manage in the server manager and select Create Server Group

<figure class="wiki-figure" style="max-width:400px"><img src="/images/1/10/Rdsguide15.PNG" alt="Rdsguide15" loading="lazy" decoding="async"></figure>

Within this window add your RDS boxes and license server

<figure class="wiki-figure" style="max-width:400px"><img src="/images/8/84/Rdsguide16.PNG" alt="Rdsguide16" loading="lazy" decoding="async"></figure>

Click on your server group and then select Add Roles and Features

<figure class="wiki-figure" style="max-width:400px"><img src="/images/3/3f/Rdsguide17.PNG" alt="Rdsguide17" loading="lazy" decoding="async"></figure>

This time ensure you have selected Remote Desktop Services Installation

<figure class="wiki-figure" style="max-width:400px"><img src="/images/a/a4/Rdsguide18.PNG" alt="Rdsguide18" loading="lazy" decoding="async"></figure>

Select standard deployment

<figure class="wiki-figure" style="max-width:400px"><img src="/images/5/54/Rdsguide19.PNG" alt="Rdsguide19" loading="lazy" decoding="async"></figure>

On this following screen select Session-Based desktop deployment and select next on the screen after

<figure class="wiki-figure" style="max-width:400px"><img src="/images/9/90/Rdsguide20.PNG" alt="Rdsguide20" loading="lazy" decoding="async"></figure>

<figure class="wiki-figure" style="max-width:400px"><img src="/images/1/18/Rdsguide21.PNG" alt="Rdsguide21" loading="lazy" decoding="async"></figure>

In the next screen select your session broker. **If in the 2 VM scenario this should be your gateway server**

<figure class="wiki-figure" style="max-width:400px"><img src="/images/6/61/Rdsguide22.PNG" alt="Rdsguide22" loading="lazy" decoding="async"></figure>

In the next step as above if in a two VM scenario select your gateway server. If you didnt do it previously select install RD Web Access Role **Image is for illustrative purposes**

<figure class="wiki-figure" style="max-width:400px"><img src="/images/e/e9/Rdsguide23.PNG" alt="Rdsguide23" loading="lazy" decoding="async"></figure>

Finally select the confirmation screen and allow the restarts

<figure class="wiki-figure" style="max-width:400px"><img src="/images/4/42/Rdsguide24.PNG" alt="Rdsguide24" loading="lazy" decoding="async"></figure>

<figure class="wiki-figure" style="max-width:400px"><img src="/images/4/42/Rdsguide24.PNG" alt="Rdsguide24" loading="lazy" decoding="async"></figure>

<figure class="wiki-figure" style="max-width:400px"><img src="/images/7/77/Rdsguide26.PNG" alt="Rdsguide26" loading="lazy" decoding="async"></figure>

<figure class="wiki-figure" style="max-width:400px"><img src="/images/a/a1/Rdsguide27.PNG" alt="Rdsguide27" loading="lazy" decoding="async"></figure>

Once this completes on the server you configured your group select the following option

<figure class="wiki-figure" style="max-width:400px"><img src="/images/e/ec/Rdsguide28.PNG" alt="Rdsguide28" loading="lazy" decoding="async"></figure>

If you have done things correctly you should now see the following screen, Press the RD Gateway + icon

<figure class="wiki-figure" style="max-width:400px"><img src="/images/d/d9/Rdsguide29.PNG" alt="Rdsguide29" loading="lazy" decoding="async"></figure>

In here select your RDS gateway server

<figure class="wiki-figure" style="max-width:400px"><img src="/images/3/32/Rdsguide30.PNG" alt="Rdsguide30" loading="lazy" decoding="async"></figure>

**You may get this error if you havent rebooted**

<figure class="wiki-figure" style="max-width:400px"><img src="/images/d/dd/Rdsguide31.PNG" alt="Rdsguide31" loading="lazy" decoding="async"></figure>

In the FQDN type in your full domain name and if you have a split zone this will be the same internally. If you want to get access outside of course you will need to use your external domain name

<figure class="wiki-figure" style="max-width:400px"><img src="/images/3/33/Rdsguide32.PNG" alt="Rdsguide32" loading="lazy" decoding="async"></figure>

Confirm the next two screen

<figure class="wiki-figure" style="max-width:400px"><img src="/images/d/da/Rdsguide33.PNG" alt="Rdsguide33" loading="lazy" decoding="async"></figure>

<figure class="wiki-figure" style="max-width:400px"><img src="/images/c/c4/Rdsguide34.PNG" alt="Rdsguide34" loading="lazy" decoding="async"></figure>

Do the same for the License server

<figure class="wiki-figure" style="max-width:400px"><img src="/images/d/d9/Rdsguide35.PNG" alt="Rdsguide35" loading="lazy" decoding="async"></figure>

<figure class="wiki-figure" style="max-width:400px"><img src="/images/a/ae/Rdsguide36.PNG" alt="Rdsguide36" loading="lazy" decoding="async"></figure>

If you have done everything right you will now get the screen below

<figure class="wiki-figure" style="max-width:400px"><img src="/images/4/4b/Rdsguide37.PNG" alt="Rdsguide37" loading="lazy" decoding="async"></figure>

From the left bar select Collections

<figure class="wiki-figure" style="max-width:400px"><img src="/images/2/22/Rdsguide38.PNG" alt="Rdsguide38" loading="lazy" decoding="async"></figure>

Once the menu is open select tasks and then create session collection

<figure class="wiki-figure" style="max-width:400px"><img src="/images/8/87/Rdsguide39.PNG" alt="Rdsguide39" loading="lazy" decoding="async"></figure>

Select next to the following screen and appropriately name your RDS collection

<figure class="wiki-figure" style="max-width:400px"><img src="/images/d/d2/Rdsguide40.PNG" alt="Rdsguide40" loading="lazy" decoding="async"></figure>

<figure class="wiki-figure" style="max-width:400px"><img src="/images/9/95/Rdsguide41.PNG" alt="Rdsguide41" loading="lazy" decoding="async"></figure>

Select your session host you create earlier

<figure class="wiki-figure" style="max-width:400px"><img src="/images/a/a9/Rdsguide42.PNG" alt="Rdsguide42" loading="lazy" decoding="async"></figure>

Apply a relevant group of people who you want to have access

<figure class="wiki-figure" style="max-width:400px"><img src="/images/1/16/Rdsguide43.PNG" alt="Rdsguide43" loading="lazy" decoding="async"></figure>

If you have a file server you can create a profile disk

<figure class="wiki-figure" style="max-width:400px"><img src="/images/6/6d/Rdsguide44.PNG" alt="Rdsguide44" loading="lazy" decoding="async"></figure>

Select create to finish your collection

<figure class="wiki-figure" style="max-width:400px"><img src="/images/3/3f/Rdsguide45.PNG" alt="Rdsguide45" loading="lazy" decoding="async"></figure>

If require select your RDS group, tasks and then Publish RemoteApp

<figure class="wiki-figure"><img src="/images/8/83/Rdsguide46.PNG" alt="Rdsguide46" loading="lazy" decoding="async"></figure>

<figure class="wiki-figure" style="max-width:400px"><img src="/images/4/4b/Rdsguide47.PNG" alt="Rdsguide47" loading="lazy" decoding="async"></figure>

Assume you have already install the apps you want to access tick these to publish them

<figure class="wiki-figure" style="max-width:400px"><img src="/images/5/50/Rdsguide48.PNG" alt="Rdsguide48" loading="lazy" decoding="async"></figure>

Confirm your selections

<figure class="wiki-figure" style="max-width:400px"><img src="/images/9/91/Rdsguide49.PNG" alt="Rdsguide49" loading="lazy" decoding="async"></figure>

<figure class="wiki-figure" style="max-width:400px"><img src="/images/e/ec/Rdsguide50.PNG" alt="Rdsguide50" loading="lazy" decoding="async"></figure>

## Testing your config

To try out your system go to the following url <https://yourgw.yourdomain.com/RDWeb>. For now you will need to accept the certificate issue

<figure class="wiki-figure" style="max-width:400px"><img src="/images/8/81/Rdsguide51.PNG" alt="Rdsguide51" loading="lazy" decoding="async"></figure>

<figure class="wiki-figure" style="max-width:400px"><img src="/images/2/2f/Rdsguide52.PNG" alt="Rdsguide52" loading="lazy" decoding="async"></figure>

Try and log in of which you should see your apps

<figure class="wiki-figure" style="max-width:400px"><img src="/images/c/c7/Rdsguide53.PNG" alt="Rdsguide53" loading="lazy" decoding="async"></figure>

Select an app and you should now see the following screen, select connect. This is down to the fact you have not got a trusted certificate

<figure class="wiki-figure" style="max-width:400px"><img src="/images/7/70/Rdsguide54.PNG" alt="Rdsguide54" loading="lazy" decoding="async"></figure>

Fingers crossed your app should appear

<figure class="wiki-figure"><img src="/images/2/23/Rdsguide55.PNG" alt="Rdsguide55" loading="lazy" decoding="async"></figure>

## Securing your environment

This section will be updated when the certificates section has been populated.

## Exposing this to the world....

I will update this shortly with a common UK router configuration as you will need to NAT some ports from the outside world.

## Known Issues and Solutions

This is specifically to detail any issues with the technology being discussed, and how to resolve them. See the [Intel NUC](/hardware/intel-nuc/) page for an example.

- You may want to deliver several services or pages on port 443
  - Head over to my page about load balancing to learn more if you only have 1 public IP
- Requires several servers or understanding a DMZ
  - Don't go for best practice but it may compromise security
