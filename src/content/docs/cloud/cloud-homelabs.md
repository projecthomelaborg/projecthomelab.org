---
title: "Cloud Homelabs"
description: "There are many reasons as to why you would want to run a local \"on premises\" homelab, but equally there are plenty of reasons why you might also want to…"
sidebar:
  label: "Cloud Homelabs"
  order: 1
lastUpdated: 2021-07-15
wikiTitle: "Cloud Homelabs"
stub: true
---

:::note[This article is unfinished]
It was started on the old wiki but never completed. If you know this topic, [help finish it](/contribute/).
:::

<figure class="wiki-figure" style="max-width:250px"><img src="/images/7/73/Charge.jpg" alt="Charge" loading="lazy" decoding="async"></figure>

## Introduction

There are many reasons as to why you would want to run a local "on premises" homelab, but equally there are plenty of reasons why you might also want to consider simply running your lab in a cloud service provider's platform. Here we discuss some of the options available to move to the cloud and get that noisy spinning rust out of your living room / office!

## Pros and Cons

The key benefits to moving to using a cloud homelab are:

- Massive WAF as the cloud homelab makes no noise, takes up no space and is completely invisible to your partner!
- No big capex investments required for you at home to buy physical kit (such as compute hosts, network switches, NAS arrays, etc. Instead the cost of your homelab is spread across its lifetime
- If you do not need to run some or all of your homelab running 24/7, then the cloud homelab is ideal, as you only pay for it when it's running! If you are a very infrequent labber who doesn't need to do much at the actual hypervisor level, it could indeed be an ideal solution, or at least good enough!
- Taking that a step further, if you don't use your cloud homelab for a few weeks or months, it doesn't cost you a penny!

<figure class="wiki-figure" style="max-width:200px"><img src="/images/c/c3/GoodEnough.png" alt="GoodEnough" loading="lazy" decoding="async"></figure>

- Flexibility and scalability of the cloud means you can spin up very large environments for testing, then blow them away. In your homelab your homelab is limited to your maximum resource capacity.
- The number of features and technologies available in the cloud
- Licensing is both a pro and a con in the cloud. Certain software you may wish to use may not be compatible with running n multi-tenant compute, but using the licensing built into the cloud platforms mean your licensing is covered automatically (taking Amazon RDS or Azure SQL as perfect examples - SQL licensing is included!). You can even rent some software solutions on an hourly basis, meaning you can fully test some software for as long as you need and only pay a matter of a few pennies to pounds!

Key negatives to using a cloud homelab:

- You have to be very careful to configure the appropriate security and alerting safeguards, to ensure you don't either have your account compromised, or indeed accidentally leave machines running and end up with a huge bill. Setting things like billing alerts can help to mitigate this. Also keeping tight control of your account passwords and keys!
- You don't have that warm fuzzy feeling of doing a local manual install on real tin, and all the potential fiddling and tweaking it sometimes requires (YMMV)
- With the typical internet connection for most folk being asynchronous DSL 2+ (FTTC if you're lucky), upload speeds can make things a bit painful when transferring data and machine images from your home machines.
- Not ideal if you want something which runs multiple machines 24/7 as the costs can spiral.
- Security in general is something you will need to spend a bit more time thinking about if you want to run your homelab in the cloud.

## Use Cases

The main use cases for cloud homelabs are:

- You have no space for a homelab
- You have no budget to buy the kit for a homelab up front
- You don't need to run your homelab 24/7, and may even only require it irregularly
- You aren't that interested in doing bare metal installation, and are more keen about testing the hypervisors themselves, or software and services on top

## Solutions

The following is a list of potential cloud computing providers for your Cloud Homelab:

| Vendor                                                                                                                                                                                       | Free / Trial Link\*                                                                      | Pricing Link                                                          | Pricing Calculator                                                                      | Notes                                                                                                                            |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------|-----------------------------------------------------------------------|-----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------|
| [Amazon AWS](/cloud/)                                                                                                                                                          | [12 Months Free Tier](https://aws.amazon.com/free/)                                      | [Pricing](https://aws.amazon.com/pricing/services/)                   | [Calculator](https://calculator.s3.amazonaws.com/index.html)                            | The AWS free tier extends beyond 12 months for some services. You can gain \$credit by being signing up to all trials and betas. |
| Bare Metal Cloud                                                                                                                                              | None?                                                                                    | [Pricing](https://www.baremetalcloud.com/signUp/)                     | None                                                                                    | If you want a true bare metal install experience, why not just pay by the hour?                                                  |
| Google Cloud Platform                                                                                                                                    | [\$300 / 60 days](https://console.cloud.google.com/freetrial)                            | [Pricing](https://cloud.google.com/pricing/)                          | [Calculator](https://cloud.google.com/products/calculator/)                             |                                                                                                                                  |
| [Microsoft Azure](/cloud/)                                                                                                                                                | [\$200 / 30 days](https://azure.microsoft.com/pricing/free-trial/)                       | [Pricing](https://azure.microsoft.com/pricing/)                       | [Calculator](https://azure.microsoft.com/pricing/calculator/)                           |                                                                                                                                  |
| [Ravello](/cloud/ravello/)                                                                                                                                                                | [6 VMs / 14 days](https://www.ravellosystems.com/free-trial-description)                 | [Pricing](https://www.ravellosystems.com/pricing)                     | [Calculator](https://www.ravellosystems.com/pricing)                                    | Very simple pricing. Currently [free to vExperts](https://www.ravellosystems.com/go/vexpert)!                                    |
| VMware vCloud Air                                                                                                                                            | [\$300 / 30 days](http://vcloud.vmware.com/service-offering/vcloudair-ondemand-campaign) | [Pricing](http://vcloud.vmware.com/uk/service-offering/pricing-guide) | [Calculator](http://vcloud.vmware.com/uk/service-offering/pricing-calculator/on-demand) | Very expensive for public IPs.                                                                                                   |
| \*Free/Trial: Keep in mind these offers are subject to change at any time and the terms of the offer may change. If you know the new free credit or trial limit, please feel free to update! |                                                                                          |                                                                       |                                                                                         |                                                                                                                                  |

Cloud Homelab Vendors

## Costs

Costs will vary depending on which cloud provider you use, and whether you are a member of any particular vendor advocacy programmes.

The good thing is that all of the major cloud vendors are completely transparent in their pricing. The bad thing is that although all of the major cloud vendors are completely transparent in their pricing, it's usually ridiculously complex!

The key thing here is that the more you use your lab, and the more VMs you want to run 24/7, the more it will cost you. If you simply need to spin up a few VMs for a few hours per month, then a cloud homelab will be by far the cheapest option!

## Vendor Overviews

### Amazon AWS

Amazon provide one of the most generous "free tier" options of all vendors. 12 months of free (limited) access to a load of their services, including the ability to run one Linux VM, one Windows VM and one RDS (database) instance 24/7/365! Actually this breaks down for the EC2 instances as 750 hours per month, which you can use however you like. For example you could run 10 instances for 3 days!

<figure class="wiki-figure" style="max-width:250px"><img src="/images/6/62/Security-keys-meme.jpg" alt="Security keys meme" loading="lazy" decoding="async"></figure>

This is a truly excellent service from the world's biggest biggest cloud vendor, and can potentially leave you with a bill of pennies to a couple of dollars at the end of the month, even with pretty heavy use! Just make sure you turn off your instances at the end of each session and look after your keys, and you wont pay anything for them except their storage (which is a pittance anyway)! A couple of key links for setting up your AWS account are below:

- [Creating a Billing Alarm](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/free-tier-alarms.html)
- [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [Root Account Credentials vs. IAM User Credentials](https://docs.aws.amazon.com/general/latest/gr/root-vs-iam.html)

For more information and advice on using Amazon AWS as your homelab, see our dedicated page on [Amazon AWS](/cloud/) homelabs.

### Bare Metal Cloud

Bare Metal Cloud are a really interesting "physical cloud" solution! As per their own [website](http://baremetalcloud.com):

*We provide bare-metal dedicated servers which are unrestricted and not shared. You have full access down to the to the bare-metal of the hardware. All servers come with an OS of your choice but you have full permissions to reinstall or change anything you wish.*

So here's the cool bit! You can spin up your own hypervisors or whatever you want on their tin, and simply pay by the hour! When you combine Bare Metal Cloud with [AutoLab](/management/autolab/), you can have your lab up and running in a very short time, and be labbing on physical tin in somebody else's data centre!

If you want to see an example of this working, [Mike Laverick](https://twitter.com/Mike_Laverick) did a great article on his blog here:

- [Bare Metal Cloud for your Auto-Lab](http://www.mikelaverick.com/2013/03/not-ready-bare-metal-cloud-for-your-auto-lab/)

For more information and advice on using Bare Metal Cloud as your homelab, see our dedicated page on Bare Metal Cloud homelabs.

### Google Cloud Platform

In comparison to most vendors (except AWS), GCP provide a pretty decent length 60 day free trial, with a set amount of credit.

For more information and advice on using Google Cloud Platform as your homelab, see our dedicated page on Google Cloud Platform homelabs.

### Microsoft Azure

For more information and advice on using [Microsoft Azure](/cloud/) as your homelab, see our dedicated page on [Microsoft Azure](/cloud/) homelabs.

### Ravello

Ravello is a really interesting product which impressed so much, [Oracle acquired them recently for ~\$500m](https://www.theregister.co.uk/2016/02/23/oracle_acquires_ravello_will_bake_it_into_big_red_cloud/)!

Their key concept is that they are effectively a cloud hypervisor which can run on top of any public cloud, allowing you then to nest your chosen hypervisor and VMs inside of it! Yes, indeed this is taking [vInception](/hypervisors/vinception/) to a whole new level; [Cloud vInception](/hypervisors/vinception/)!!! You use a very easy to use visio-style SaaS interface to design your lab, and once you are ready to deploy it, they then choose whatever is the most cost effective cloud to run it on at that time. You are then simply charged by the hour for resources consumed. Simples!

In a very gracious move, Ravello is free for vExperts! Despite their recent acquisition, they have stated that the free access will continue for now. If you are a vExpert, go here to apply:

- [Ravello vExpert Free Access](https://www.ravellosystems.com/go/vexpert)

[Jason Langer](https://twitter.com/jaslanger) did an excellent writeup comparing the cost of running a homelab vs using Ravello, and the results were pretty impressive based on the use case of 12 hours per week (pretty heavy use!):

- [Can You Replace Your Home Lab with Ravello Systems?](http://www.virtuallanger.com/2015/07/09/can-you-replace-your-home-lab-with-ravello-systems/)

For more information and advice on using [Ravello](/cloud/ravello/) as your homelab, see our dedicated page on [Ravello](/cloud/ravello/) homelabs.

### VMware vCloud Air

For more information and advice on using VMware vCloud Air as your homelab, see our dedicated page on VMware vCloud Air homelabs.

## Cloud Storage

## Thoughts on Free Trials

<figure class="wiki-figure" style="max-width:250px"><img src="/images/e/ed/Free.jpg" alt="Free" loading="lazy" decoding="async"></figure>

We at the Open Homelab project do not condone in any way abusing trials. We would however suggest that if you have had a trial, and your partner, mother, father, neighbour etc wanted to have a trial too, and give you access to play with their account, that might be a great way of sharing the knowledge and gaining more lab time. That said, with something like Amazon AWS, many of the services are free well beyond the 12 month trial period, and you can gain access to free credit by simply taking part in trials of new services, many of which pay out up to \$25 each, which should be more than enough to keep your account going for some time!

## Free Cloud Homelabs

A question you may want to ask yourself, is what is the reason you want to run the lab itself? If the main reason is just to play with specific vendor software, then why not just use their free labs? Many of them are effectively just run on a sandbox basis, where you can choose to follow their pre-scripted instructions, or you could just go off piste and mess about with whatever you like (as long as permissions allow!).

This obviously wont apply to every vendor, but many of the most common, such as VMware and Microsoft, do.

Visit the **[Free Learning Resources](/community/free-learning-resources/)** page for a list of [free online labs](/community/free-learning-resources/) and training!
