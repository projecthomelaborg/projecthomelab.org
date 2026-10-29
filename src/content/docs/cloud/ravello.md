---
title: "Ravello"
description: "Ravello Systems have their own public cloud platform that runs on top of other public cloud platforms. They have a mit=raculous hypervisor that runs on…"
sidebar:
  label: "Ravello"
  order: 2
lastUpdated: 2020-07-31
wikiTitle: "Ravello"
---

## What is Ravello?

[Ravello Systems](https://www.ravellosystems.com/) have their own public cloud platform that runs on top of other public cloud platforms. They have a mit=raculous hypervisor that runs on top of other hypervisors and allows hypervisors to run in VM's on top of itself. This hypervisor is the center of Ravello's own cloud platform. They also have network virtualization and storage virtualization features.

### Billing

Ravello's customers can choose whether to deploy their VMs on top of Amazon's AWS or Googles GCP platform. Ravello then buys VMs from the chosen public cloud to run their own hypervisor and then their customer's VMs. Ravello pays AWS or GCP for the VMs they use and then bills their customers for the customer's VMs. Ravello charges for CPU running hours as well as storage space and public IP addresses. Usually, the CPU run time is the largest part of the bill, so powering off your lab when you are done is important.

### vExpert Program

Ravello has a great program for vExperts. Current vExperts receive 1000 vCPU hours per month for free, along with the storage and networking resources that Ravello would normally charge for. This would allow a typical vSphere lab of 16 vCPUs to be run for nearly 60 hours per month for free.

### Blueprints

One of the nice features of Ravello's cloud platform is the ability to create a group of VMs as a template, this is a blueprint. You can deploy a lab from a blueprint, or deploy multiple copies of the same lab for different purposes. Ravello also has a public repository, called the [Ravello Repo](https://www.ravellosystems.com/repo/), for blueprints that can be downloaded into your account. Be warned, blueprints are stored in your account and you will be billed for disk capacity to store them. The Repo contains blueprints for AutoLab as well as the Nutanix community edition and many different OpenStack variants.

### Challenges

The Ravello platform has a few wrinkles that you need to be aware of as you begin using it.

- Uploading. You will need to upload any licensed software into Ravello, they do not have service provider licensing with VMware or Microsoft, One possible solution is using the Ravello cloud itself as the upload source see [vhorizon's](http://vhorizon.co.uk/using-ravello-cloud-for-the-bandwidth-embarrassed/) blog post on the initial steps required.
- Performance. Due to the layers of virtualization, you will want to allocate more resources to your VMs than you might otherwise.
- Networking. It can take a little while to understand how networking behaves on Ravello, particularly public IP addresses, and port forwarding
