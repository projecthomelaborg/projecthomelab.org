---
title: "Containers and Kubernetes"
description: "Many homelab services run better in containers than VMs. Learn when to use Docker, Podman or Kubernetes, and where to run them."
sidebar:
  label: "Containers and Kubernetes"
  order: 7
lastUpdated: 2026-10-30
---

Most self-hosted software now ships as a container, and containers use far less memory than one VM per service. Many labs now run a handful of VMs, with most services in containers inside them.

## Choosing a tool

| Tool | Choose it when |
| --- | --- |
| **Docker with Compose** | You want to run services at home. This is the default, and nearly every project documents it |
| **Podman** | You want rootless containers without a daemon, or you work with RHEL-family systems. Quadlet integrates containers with systemd |
| **LXC** | You want a lightweight Linux system that acts like a small VM, such as in [Proxmox](/hypervisors/proxmox-ve/#vm-or-container) |
| **Kubernetes** | You want to learn Kubernetes, or you truly need scheduling across several machines |

For a single host, Compose is usually the right call. Tools such as [Portainer](https://www.portainer.io/), [Dockge](https://dockge.kuma.pet/) and [Komodo](https://komo.do/) add a web interface if you want one.

## Do I need Kubernetes?

If your goal is running a few services at home, no. It adds a lot of moving parts. But if you're after skills for a platform or DevOps job, a home cluster is excellent practice, and breaking it costs you nothing.

Lightweight distributions make this practical on small hardware:

| Distribution | Notes |
| --- | --- |
| [k3s](https://k3s.io/) | A single small binary. Very popular for homelabs, and runs on a Raspberry Pi |
| [Talos Linux](https://www.talos.dev/) | An immutable OS built only for Kubernetes, managed entirely through an API |
| [k0s](https://k0sproject.io/) | A small, self-contained distribution that's similar to k3s |
| [kind](https://kind.sigs.k8s.io/) or [minikube](https://minikube.sigs.k8s.io/) | Short-lived clusters on your laptop for study |
| kubeadm | The upstream way to build a cluster by hand. Useful preparation for CKA-style exams |

A typical learning path:

1. Run k3s on one node and deploy an app.
2. Add an ingress controller and [cert-manager](https://cert-manager.io/).
3. Move to three nodes, and add storage using [Longhorn](https://longhorn.io/) or Rook and Ceph.
4. Manage everything with GitOps, using [Flux](https://fluxcd.io/) or [Argo CD](https://argo-cd.readthedocs.io/).

For a load balancer on bare metal, look at [MetalLB](https://metallb.io/) or Cilium.

## Running containers safely

- **Pin your image versions** rather than using `latest`, so that updates happen when you choose. [Renovate](https://docs.renovatebot.com/) can open pull requests to update them for you.
- **Be careful with the Docker socket.** Giving a container access to it is effectively giving that container root on the host.
- **Know that Docker can bypass host firewall rules.** Published ports are often reachable even when UFW or firewalld appears to block them. Bind to `127.0.0.1` or a specific IP address when a service shouldn't be public.
- **Back up your volumes**, not just your Compose files. See [Backups](/management/backups/).
- **Use trusted images**, ideally ones from the project itself, and read a Compose file before you run it.

## Things to run

The [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) list is a great place to find software. Common first choices include a reverse proxy (Caddy, Traefik or Nginx Proxy Manager), Pi-hole or AdGuard Home, Uptime Kuma, Home Assistant, Immich, Jellyfin and Vaultwarden.
