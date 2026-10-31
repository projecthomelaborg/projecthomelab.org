---
title: "Automation"
description: "Make your lab disposable. Use templates, cloud-init, Ansible, Terraform or OpenTofu, Git and CI so you can rebuild in minutes rather than a weekend."
sidebar:
  label: "Automation"
  order: 3
lastUpdated: 2026-10-30
wikiTitle: "Jenkins in the Homelab"
---

Automation makes your lab disposable. When you can rebuild something in minutes, you stop being afraid to break it, and you learn faster. These are also some of the most valuable skills you can bring to a job.

Don't try to automate everything at once. Start with whatever you keep repeating.

## A sensible order to learn in

1. **Keep your configuration in Git.** Compose files, scripts and notes all belong in version control. Host your repositories on [Forgejo](https://forgejo.org/) or [GitLab](https://about.gitlab.com/), or a hosted service. Keep [secrets out of your repository](/start-here/securing-a-homelab/#dont-keep-secrets-in-your-repository).
2. **Build templates.** Use a VM template, and [cloud-init](https://cloud-init.io/) to set the hostname, users and SSH keys at first boot. [Packer](https://developer.hashicorp.com/packer) builds the images themselves.
3. **Configure with Ansible.** It's agentless, working over SSH or WinRM, and it's a very common job skill. Write a playbook that does your baseline: users, updates, monitoring agents and so on.
4. **Provision with infrastructure as code.** Define your VMs and networks in Terraform or OpenTofu.
5. **Run it all from a pipeline.** Apply changes when you push to Git. This gets you into CI/CD and GitOps.

## Tools

| Tool | What it's for | Notes |
| --- | --- | --- |
| [Ansible](https://docs.ansible.com/) | Configuration and orchestration | The best place to start. [AWX](https://github.com/ansible/awx) and [Semaphore](https://semaphoreui.com/) add a web interface |
| [OpenTofu](https://opentofu.org/) | Provisioning infrastructure | An open source fork of Terraform |
| [Terraform](https://developer.hashicorp.com/terraform) | Provisioning infrastructure | The industry standard, now under the Business Source License. Both have community Proxmox providers |
| [Packer](https://developer.hashicorp.com/packer) | Building VM images | Makes consistent templates |
| [cloud-init](https://cloud-init.io/) | First-boot setup | Supported by most Linux images and hypervisors |
| [Flux](https://fluxcd.io/) or [Argo CD](https://argo-cd.readthedocs.io/) | GitOps for Kubernetes | The cluster keeps itself matched to your Git repository |
| [NixOS](https://nixos.org/) | Declaring a whole OS | Very reproducible, with a steep learning curve |
| [Puppet](https://www.puppet.com/) and [Chef](https://www.chef.io/) | Configuration management | Still found in enterprises, but with less of the mindshare and fewer community guides. Check current open source licensing. The community fork of Puppet is [OpenVox](https://voxpupuli.org/openvox/). Learn them if your job needs them |

## CI and scheduled jobs

[Forgejo Actions](https://forgejo.org/docs/latest/user/actions/), [GitLab CI](https://docs.gitlab.com/ci/) and [GitHub Actions](https://docs.github.com/actions) can test and deploy your changes. Use self-hosted runners with care on public repositories, since anyone can open a pull request that could run code on your network.

[Jenkins](https://www.jenkins.io/) remains widely used in business and is worth learning if your workplace uses it. It's also a useful scheduler. Its web interface shows the history and output of every job, and you can run scripts against your machines over SSH without installing an agent on each of them. This makes it a nicer way to see what happened than cron, if you're willing to maintain Java and plugins.

For simple schedules, systemd timers are built in and log to the journal.

## Scripting

PowerShell works on Windows, Linux and macOS, and there are modules for Hyper-V and for VMware (VCF PowerCLI). Python and Bash are useful for everything else. A hypervisor's API is usually the most flexible way to automate it. Proxmox, for example, has a [full REST API](https://pve.proxmox.com/wiki/Proxmox_VE_API).
