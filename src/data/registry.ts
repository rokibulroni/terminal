/**
 * Content registry — the single source of truth for categories, their
 * tool groupings and editorial copy.
 *
 * Tool command data lives in `data/tools/<category>/<slug>.json`. The
 * directory a tool file lives in is its canonical category; a slug listed
 * in another category's group is a cross-listing that links to the
 * canonical page.
 *
 * This file must stay dependency-free (no imports, erasable TypeScript only)
 * because the Node build scripts import it directly.
 */

export interface ToolGroupDef {
  name: string;
  tools: string[];
}

export interface CategoryDef {
  id: string;
  name: string;
  /** lucide-react icon name */
  icon: string;
  /** One-line summary used on cards and in meta descriptions. */
  description: string;
  /** Longer editorial intro shown at the top of the category page. */
  intro: string;
  groups: ToolGroupDef[];
}

export const SITE = {
  name: 'Terminal',
  title: 'Terminal — Cybersecurity Command Reference',
  tagline: 'The command reference for security work',
  description:
    'Searchable, copy-ready command references for penetration testing, network analysis, forensics, cloud security and Linux administration — with explanations for every command.',
  url: 'https://terminal.rokibulroni.com',
  repo: 'https://github.com/rokibulroni/terminal',
  author: {
    name: 'Rokibul Roni',
    url: 'https://rokibulroni.com',
    github: 'https://github.com/rokibulroni',
    linkedin: 'https://linkedin.com/in/rokibulroni',
  },
  ogImage: '/og.png',
} as const;

export const CATEGORIES: CategoryDef[] = [
  {
    id: 'network',
    name: 'Network',
    icon: 'Network',
    description: 'Port scanning, host discovery and network mapping.',
    intro:
      'Find out what is alive on a network and what it is running. Start with host discovery, move to fast port sweeps, then fingerprint services in depth. Only scan networks you own or are explicitly authorised to test.',
    groups: [
      { name: 'Port Scanners', tools: ['nmap', 'masscan', 'RustScan', 'Unicornscan', 'ZMap', 'naabu'] },
      { name: 'Host Discovery', tools: ['arp-scan', 'fping', 'hping3', 'netdiscover', 'amap', 'ike-scan'] },
      { name: 'Network Analysis', tools: ['netstat', 'ss', 'iperf', 'p0f'] },
    ],
  },
  {
    id: 'web',
    name: 'Web',
    icon: 'Globe',
    description: 'Web application recon, content discovery and vulnerability scanning.',
    intro:
      'Tools for mapping and testing web applications: collect URLs, discover hidden content, fingerprint technologies and probe for common vulnerability classes such as SQL injection and XSS.',
    groups: [
      { name: 'Fuzzing & Content Discovery', tools: ['dirsearch', 'ffuf', 'gobuster', 'wfuzz'] },
      { name: 'Vulnerability Scanners', tools: ['nikto', 'nuclei', 'wpscan'] },
      { name: 'Injection Testing', tools: ['sqlmap', 'xsser'] },
      { name: 'Recon & URLs', tools: ['gau', 'waybackurls', 'httpx', 'whatweb'] },
    ],
  },
  {
    id: 'enumeration',
    name: 'Enumeration',
    icon: 'Search',
    description: 'Service enumeration for SMB, LDAP, SNMP and NFS.',
    intro:
      'Once you know which services are exposed, enumeration pulls out the details: users, shares, groups, policies and exports. Most of these tools target Windows and directory services.',
    groups: [
      { name: 'SMB & Samba', tools: ['enum4linux', 'nbtscan', 'rpcclient', 'smbclient'] },
      { name: 'LDAP & Active Directory', tools: ['crackmapexec-enum', 'ldapsearch'] },
      { name: 'SNMP', tools: ['snmpcheck', 'snmpwalk'] },
      { name: 'NFS', tools: ['nfs-showmount', 'showmount'] },
    ],
  },
  {
    id: 'exploitation',
    name: 'Exploitation',
    icon: 'Bug',
    description: 'Exploit frameworks, C2, payload generation and exploit search.',
    intro:
      'Frameworks and utilities for validating vulnerabilities in authorised engagements: search public exploits, generate payloads and operate command-and-control frameworks.',
    groups: [
      { name: 'Frameworks & C2', tools: ['metasploit', 'msfconsole', 'sliver', 'covenant'] },
      { name: 'Exploit Search', tools: ['exploitdb', 'searchsploit'] },
      { name: 'Payloads & Social Engineering', tools: ['msfvenom', 'setoolkit'] },
    ],
  },
  {
    id: 'credentials',
    name: 'Credentials',
    icon: 'Key',
    description: 'Password cracking, online brute force and wordlist generation.',
    intro:
      'Audit password strength offline with GPU and CPU crackers, test login services for weak credentials, and build targeted wordlists. Always work from authorised hash dumps and in-scope services.',
    groups: [
      { name: 'Offline Cracking', tools: ['hashcat', 'john'] },
      { name: 'Online Brute Force', tools: ['hydra', 'medusa', 'ncrack', 'patator'] },
      { name: 'Wordlist Generation', tools: ['cewl', 'crunch', 'rsmangler'] },
    ],
  },
  {
    id: 'lateral',
    name: 'Lateral Movement',
    icon: 'GitBranch',
    description: 'Remote execution and movement between hosts.',
    intro:
      'Techniques for executing commands on other hosts with valid credentials — over SMB, WMI, WinRM, RDP and SSH. These are the same protocols administrators use, which is why defenders watch them closely.',
    groups: [
      { name: 'SMB & WMI Execution', tools: ['crackmapexec', 'psexec', 'smbexec', 'wmiexec'] },
      { name: 'Remote Shells', tools: ['evil-winrm', 'winrm', 'rdp', 'ssh'] },
    ],
  },
  {
    id: 'wireless',
    name: 'Wireless',
    icon: 'Wifi',
    description: 'Wi-Fi auditing, packet capture and WPA/WPS testing.',
    intro:
      'Put an adapter into monitor mode, capture handshakes and audit Wi-Fi security. Wireless testing needs a compatible adapter and written permission for the networks involved.',
    groups: [
      { name: 'Aircrack-ng Suite', tools: ['aircrack-ng', 'aireplay-ng', 'airmon-ng', 'airodump-ng'] },
      { name: 'Interface & AP Config', tools: ['iw', 'iwconfig', 'hostapd'] },
      { name: 'WPS Attacks', tools: ['bully', 'reaver'] },
    ],
  },
  {
    id: 'forensics',
    name: 'Forensics',
    icon: 'FileSearch',
    description: 'Memory analysis, disk forensics, carving and timelines.',
    intro:
      'Investigate what happened on a system: analyse memory images, examine file systems, carve deleted files, extract metadata and build super-timelines. Work on copies, never on original evidence.',
    groups: [
      { name: 'Memory Analysis', tools: ['volatility', 'volatility3'] },
      { name: 'File Carving & Firmware', tools: ['binwalk', 'foremost', 'sleuthkit', 'bulk-extractor'] },
      { name: 'Disk & Timeline', tools: ['autopsy', 'plaso'] },
      { name: 'Artifact Utilities', tools: ['exiftool', 'strings'] },
    ],
  },
  {
    id: 'monitoring',
    name: 'Monitoring',
    icon: 'Activity',
    description: 'IDS/IPS, endpoint telemetry and log-driven defence.',
    intro:
      'The defender’s toolbox: network intrusion detection, endpoint auditing and automated response. Useful for blue teams, and for red teams who want to understand what their activity looks like.',
    groups: [
      { name: 'Network IDS / IPS', tools: ['snort', 'suricata', 'zeek'] },
      { name: 'Endpoint & Auditing', tools: ['auditd', 'osquery', 'sysmon', 'wazuh-agent'] },
      { name: 'Active Response', tools: ['fail2ban'] },
    ],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    icon: 'Cloud',
    description: 'AWS, Azure and GCP CLIs plus Kubernetes and Docker security.',
    intro:
      'Operate and audit cloud accounts from the command line, and assess Kubernetes clusters and Docker hosts against hardening benchmarks.',
    groups: [
      { name: 'Cloud Providers', tools: ['awscli', 'az-cli', 'gcloud'] },
      { name: 'Kubernetes Security', tools: ['kube-bench', 'kube-hunter', 'kubectl'] },
      { name: 'Container Security', tools: ['docker-bench-security', 'docker', 'trivy'] },
    ],
  },
  {
    id: 'traffic',
    name: 'Traffic Analysis',
    icon: 'Radio',
    description: 'Packet capture, protocol analysis and traffic replay.',
    intro:
      'Capture packets, filter them down to what matters and dissect protocols. Includes interception tools for authorised man-in-the-middle testing.',
    groups: [
      { name: 'Packet Capture & Analysis', tools: ['TCPDump', 'tshark', 'wireshark-cli', 'netsniff-ng', 'ngrep', 'tcpreplay'] },
      { name: 'MITM & Sniffing', tools: ['ettercap', 'sniffit'] },
    ],
  },
  {
    id: 'utilities',
    name: 'Utilities',
    icon: 'Wrench',
    description: 'HTTP clients, socket tools, multiplexers and data wrangling.',
    intro:
      'The everyday utilities every operator leans on: transfer data, relay sockets, keep sessions alive and slice through JSON and text.',
    groups: [
      { name: 'Networking Utilities', tools: ['Netcat', 'curl', 'httpie', 'socat', 'wget'] },
      { name: 'Terminal Sessions', tools: ['screen', 'tmux', 'watch'] },
      { name: 'Data Processing', tools: ['jq', 'xargs'] },
    ],
  },
  {
    id: 'osint',
    name: 'OSINT',
    icon: 'Eye',
    description: 'Open-source intelligence and external attack-surface recon.',
    intro:
      'Map an organisation’s public footprint — subdomains, email addresses, exposed services — using public data sources, mostly without touching the target directly.',
    groups: [
      { name: 'Recon Frameworks', tools: ['amass', 'recon-ng', 'spiderfoot', 'theHarvester'] },
      { name: 'Internet Search Engines', tools: ['shodan'] },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile',
    icon: 'Smartphone',
    description: 'Android debugging, APK reversing and runtime instrumentation.',
    intro:
      'Assess mobile apps: talk to devices over ADB, unpack and rebuild APKs, and hook running apps with Frida-based tooling to inspect and bypass client-side controls.',
    groups: [
      { name: 'Android Utilities', tools: ['adb', 'apktool'] },
      { name: 'Instrumentation & Assessment', tools: ['frida', 'objection', 'drozer'] },
    ],
  },
  {
    id: 'containers',
    name: 'Containers',
    icon: 'Box',
    description: 'Container image scanning and software bill of materials.',
    intro:
      'Find known vulnerabilities, secrets and misconfigurations in container images and file systems, and generate SBOMs to track what is inside them.',
    groups: [
      { name: 'Vulnerability Scanning', tools: ['trivy', 'grype', 'clair'] },
      { name: 'SBOM', tools: ['syft'] },
    ],
  },
  {
    id: 'reversing',
    name: 'Reverse Engineering',
    icon: 'Cpu',
    description: 'Debuggers, disassemblers and system-call tracing.',
    intro:
      'Understand binaries without source code: disassemble, decompile, debug step by step and trace system calls.',
    groups: [
      { name: 'Debugging & Tracing', tools: ['gdb', 'strace'] },
      { name: 'Disassemblers & Frameworks', tools: ['ghidra', 'objdump', 'radare2'] },
    ],
  },
  {
    id: 'linux',
    name: 'Linux',
    icon: 'TerminalSquare',
    description: 'Core Linux commands for files, processes, packages and text.',
    intro:
      'The foundation everything else is built on. These commands work on practically every Linux distribution and most of them on macOS too.',
    groups: [
      { name: 'Files & Directories', tools: ['ls', 'cd', 'pwd', 'cp', 'mv', 'rm', 'mkdir', 'chmod', 'chown', 'tar'] },
      { name: 'Text Processing', tools: ['cat', 'less', 'head', 'tail', 'grep', 'find', 'awk', 'sed', 'cut', 'sort', 'uniq', 'wc'] },
      { name: 'Processes & Services', tools: ['ps', 'top', 'kill', 'systemctl', 'journalctl'] },
      { name: 'System & Users', tools: ['df', 'du', 'free', 'whoami', 'su', 'history'] },
      { name: 'Networking', tools: ['ip', 'ping'] },
      { name: 'Package Managers', tools: ['apt', 'dnf', 'pacman'] },
    ],
  },
  {
    id: 'iot',
    name: 'IoT & Hardware',
    icon: 'CircuitBoard',
    description: 'Raspberry Pi configuration, GPIO, I²C and camera tools.',
    intro:
      'Command-line tools for working with single-board computers and attached hardware — mostly Raspberry Pi, but the I²C and GPIO concepts carry over to other boards.',
    groups: [
      { name: 'Raspberry Pi System', tools: ['raspi-config', 'vcgencmd'] },
      { name: 'Hardware Interfaces', tools: ['gpio', 'i2c-tools', 'libcamera'] },
    ],
  },
];

/** Tools featured on the home page. Must exist in the data set. */
export const FEATURED_TOOLS = [
  'nmap', 'ffuf', 'nuclei', 'sqlmap', 'hashcat', 'hydra',
  'metasploit', 'tshark', 'volatility3', 'trivy', 'kubectl', 'jq',
];

/** Legacy URLs that should permanently redirect. */
export const REDIRECTS: { from: string; to: string }[] = [
  { from: '/tool/cloud/trivy', to: '/tool/containers/trivy' },
];
