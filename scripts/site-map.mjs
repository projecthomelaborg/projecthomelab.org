// Single source of truth for where each wiki article lives on the new site.
// Used by the importer (scripts/import-mediawiki.mjs) and the redirect
// generator (scripts/build-htaccess.mjs). Since the 2026 refresh these describe
// the old wiki's layout plus new sections; articles are edited directly, so
// don't re-run `npm run import:wiki`. See src/data/moved.json for moved pages.

// Where the site's source lives on GitHub. "Edit this page" links, the
// header GitHub icon and the contribute guide point here.
export const GITHUB_REPO = 'https://github.com/projecthomelaborg/projecthomelab.org';

export const sections = [
  {
    dir: 'start-here',
    label: 'Start here',
    blurb: 'Work out what you need, pick a lab style, and plan the build.',
    pages: [
      ['Requirements Gathering', 'requirements'],
      ['Homelab Categories', 'homelab-categories'],
      ['Building a Homelab', 'building-a-homelab'],
      ['Managing a Homelab', 'managing-a-homelab'],
      ['Homelab Security', 'securing-a-homelab', 'Securing a Homelab'],
      ['Keep It Simple Stupid', 'keep-it-simple'],
      ['Single Host Virtualisation', 'single-host-virtualisation'],
      ['Nanolab', 'nanolab'],
      ['Homelab Decision Trees', 'decision-trees'],
    ],
  },
  {
    dir: 'hardware',
    label: 'Hardware',
    blurb: 'Mini PCs, used servers, custom builds and the parts that go in them.',
    pages: [
      ['Intel NUC', 'intel-nuc'],
      ['Intel NUC6I7KYK', 'intel-nuc6i7kyk'],
      ['Intel NUC6I7KYK BIOS Configuration', 'intel-nuc6i7kyk-bios'],
      ['Supermicro Xeon D-1500', 'supermicro-xeon-d-1500'],
      ['Shuttle XPC SZ170 R8 V2', 'shuttle-xpc-sz170-r8-v2'],
      ['Gigabyte BRIX', 'gigabyte-brix'],
      ['HP MicroServer', 'hp-microserver'],
      ['HP ML110', 'hp-ml110'],
      ['HP M110', 'hp-m110'],
      ['HPE ProLiant DL20', 'hpe-proliant-dl20'],
      ['HPE ProLiant DL360 Gen9', 'hpe-proliant-dl360-gen9'],
      ['Dell PowerEdge', 'dell-poweredge'],
      ['Whitebox Homelab Motherboards', 'whitebox-motherboards'],
      ['ECC Memory', 'ecc-memory'],
      ['The Unofficial Homelab HCL', 'hcl', 'The unofficial homelab HCL'],
      ['ZSeries', 'ibm-z-series', 'IBM Z series mainframes'],
      ['Unisys', 'unisys-clearpath', 'Unisys ClearPath'],
      ['Antec ISK-600m', 'antec-isk-600m'],
      ['Corsair Carbide 400R', 'corsair-carbide-400r'],
      ['Corsair Obsidian 900D', 'corsair-obsidian-900d'],
      ['Phanteks Enthoo Primo', 'phanteks-enthoo-primo'],
      ['SilverStone SG10', 'silverstone-sg10'],
    ],
  },
  {
    dir: 'housing',
    label: 'Housing your lab',
    blurb: 'Racks, power, cooling and keeping the noise down.',
    pages: [
      ['Homelab Racks', 'racks'],
      ['Lack Rack', 'lack-rack'],
      ['Power', 'power'],
      ['UPS', 'ups'],
      ['Cooling', 'cooling'],
      ['Noise', 'noise'],
      ['Cable Management', 'cable-management'],
      ['Wife Acceptance Factor', 'wife-acceptance-factor'],
    ],
  },
  {
    dir: 'storage',
    label: 'Storage',
    blurb: 'Local disks, ZFS, NAS, Ceph, hyper-converged and storage software.',
    pages: [
      ['Storage', 'storage-options', 'Storage options'],
      ['Homelab Storage Software', 'storage-software'],
      ['Hyper-converged Infrastructure', 'hyper-converged-infrastructure'],
      ['VMware VSAN', 'vmware-vsan'],
      ['Nutanix CE', 'nutanix-ce'],
      ['Synology DS 1513+/1515+', 'synology-ds1513-ds1515', 'Synology DS1513+ / DS1515+'],
      ['PernixData', 'pernixdata'],
      ['Intel Cache Acceleration Software', 'intel-cas'],
    ],
  },
  {
    dir: 'networking',
    label: 'Networking',
    blurb: 'Addressing, VLANs, 2.5–100Gb, Wi-Fi and network gear.',
    pages: [
      ['IP Addressing', 'ip-addressing'],
      ['10Gbps Homelab Networking', '10gbps-networking'],
      ['Infiniband for 10Gbps to 100Gbps Networking', 'infiniband-10-100gbps', 'InfiniBand for 10–100Gbps'],
      ['Infiniband', 'infiniband'],
      ['Home Wi-Fi', 'wifi'],
      ['Cisco Cataylst', 'cisco-catalyst', 'Cisco Catalyst'],
      ['Cisco Meraki', 'cisco-meraki'],
      ['Ubiquiti', 'ubiquiti'],
      ['Open-Mesh', 'open-mesh'],
      ['KEMP', 'kemp'],
      ['VMware NSX', 'vmware-nsx'],
    ],
  },
  {
    dir: 'hypervisors',
    label: 'Hypervisors and containers',
    blurb: 'Proxmox, XCP-ng, KVM, Hyper-V, VMware, Kubernetes and nested labs.',
    pages: [
      ['Homelab Hypervisor Choices', 'choosing-a-hypervisor', 'Choosing a hypervisor'],
      ['VMware vSphere', 'vmware-vsphere'],
      ['Microsoft Hyper-V', 'hyper-v'],
      ['KVM', 'kvm'],
      ['Proxmox VE', 'proxmox-ve'],
      ['Bhyve', 'bhyve'],
      ['Virtual Machine vInception', 'vinception', 'vInception (nested virtualization)'],
      ['Nested lab architecture', 'nested-lab-architecture'],
    ],
  },
  {
    dir: 'management',
    label: 'Management',
    blurb: 'Running the lab day to day: backups, monitoring, automation and patching.',
    pages: [
      ['Managing your VMware vSphere Homelab without vCenter', 'vsphere-without-vcenter', 'vSphere without vCenter'],
      ['Running Your vSphere Management Cluster on Hyper-V', 'vsphere-management-cluster-on-hyper-v', 'vSphere management cluster on Hyper-V'],
      ['Headless Access', 'headless-access'],
      ['Managing your Homelab from a Mobile Device', 'mobile-devices'],
      ['Managing your Homelab via PS4', 'ps4', 'Managing your lab from a PS4'],
      ['Managing your Homelab via Xbox', 'xbox', 'Managing your lab from an Xbox'],
      ['AutoLab', 'autolab'],
      ['Jenkins in the Homelab', 'jenkins'],
      ['Chef', 'chef'],
      ['Puppet', 'puppet'],
      ['Backups', 'backups'],
      ['Veeam', 'veeam'],
      ['Nakivo', 'nakivo'],
      ['Spacewalk', 'spacewalk'],
      ['WSUS', 'wsus'],
      ['Ticketing Systems', 'ticketing-systems'],
    ],
  },
  {
    dir: 'security',
    label: 'Security',
    blurb: 'Remote access done safely, firewalls, detection and certificates.',
    pages: [
      ['Remote Access', 'remote-access'],
      ['RDP Web Access', 'rdp-web-access', 'RD Web Access'],
      ['Guacamole', 'guacamole', 'Apache Guacamole'],
      ['Firewalls', 'firewalls'],
      ['Homelab Antivirus', 'antivirus', 'Antivirus and UTMs'],
      ['Sophos', 'sophos'],
      ['Certificates', 'certificates'],
    ],
  },
  {
    dir: 'licensing',
    label: 'Licensing',
    blurb: 'Getting legitimate lab licenses for VMware and Microsoft software.',
    pages: [
      ['Microsoft Licensing', 'microsoft'],
      ['VMware Licensing', 'vmware'],
    ],
  },
  {
    dir: 'cloud',
    label: 'Cloud labs',
    blurb: 'Running some or all of your lab on someone else’s hardware.',
    pages: [
      ['Cloud Homelabs', 'cloud-homelabs'],
      ['Ravello', 'ravello'],
      ['Amazon Web Services', 'aws'],
      ['Microsoft Azure', 'azure'],
    ],
  },
  {
    dir: 'archive',
    label: 'Archive',
    blurb: 'Older build logs and notes on retired products, kept for reference.',
    pages: [],
  },
  {
    dir: 'community',
    label: 'Community',
    blurb: 'Who runs the project, how to contribute, and the lighter side of labbing.',
    pages: [
      ['Homelab Horror Stories', 'horror-stories'],
      ['Jargon Buster', 'jargon-buster'],
      ['Free Learning Resources', 'free-learning-resources'],
      ['Founders', 'founders'],
    ],
  },
];

// Pages written by hand for the new site. The importer never overwrites them.
// Old wiki titles listed here redirect to the hand-written page.
export const handWritten = {
  About: '/about/',
  'Get Involved': '/contribute/',
  'Beginners Guide to Wiki Editing': '/contribute/',
  'Beginners Guide to WikiMedia Editing': '/contribute/',
  'Article Template': '/contribute/#article-layout',
  Brainstorming: '/contribute/#wanted-articles',
  'Project Homelab:General disclaimer': '/about/#disclaimer',
  'Project Homelab:About': '/about/',
  Disclaimer: '/about/#disclaimer',
  'Main Page': '/',
};

// Old pages that have no equivalent; send them somewhere useful.
export const extraRedirects = {
  News: 'https://forums.projecthomelab.org/forumdisplay.php?fid=2',
  'HOWTO Articles': '/start-here/',
  'HP Microserver': 'HP MicroServer',
  'Decision Trees': 'Homelab Decision Trees',
  AWS: 'Amazon Web Services',
  Azure: 'Microsoft Azure',
  Antivirus: 'Homelab Antivirus',
  'Cloud vInception': 'Virtual Machine vInception',
  'Beginners Guide': '/contribute/',
  Whitebox: '/start-here/building-a-homelab/#custom-builds',
  'Open Homelab Bug Tracker': 'https://issues.projecthomelab.org',
};

// An article with less real prose than this is treated as an empty stub:
// it isn't published, its old URL redirects to its section, and it is listed
// under "Wanted articles" on the Contribute page.
export const MIN_PROSE_CHARS = 260;
