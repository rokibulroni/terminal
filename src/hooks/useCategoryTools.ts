import { useState, useEffect } from 'react';

export interface ToolGroup {
  groupName: string;
  tools: string[];
}

export const CATEGORY_TOOLS: Record<string, ToolGroup[]> = {
  'network': [
    { groupName: 'Port Scanners', tools: ['nmap', 'masscan', 'RustScan', 'Unicornscan', 'ZMap', 'naabu'] },
    { groupName: 'Host Discovery', tools: ['arp-scan', 'fping', 'hping3', 'netdiscover', 'amap', 'ike-scan'] },
    { groupName: 'Network Analysis', tools: ['netstat', 'ss', 'iperf', 'p0f'] }
  ],
  'web': [
    { groupName: 'Fuzzing & Bruteforce', tools: ['dirsearch', 'ffuf', 'gobuster', 'wfuzz'] },
    { groupName: 'Vulnerability Scanners', tools: ['nikto', 'nuclei', 'wpscan'] },
    { groupName: 'Injection Attacks', tools: ['sqlmap', 'xsser'] },
    { groupName: 'Recon & URLs', tools: ['gau', 'waybackurls', 'httpx', 'whatweb'] }
  ],
  'enumeration': [
    { groupName: 'SMB & Samba', tools: ['enum4linux', 'nbtscan', 'rpcclient', 'smbclient'] },
    { groupName: 'LDAP & AD', tools: ['crackmapexec-enum', 'ldapsearch'] },
    { groupName: 'SNMP', tools: ['snmpcheck', 'snmpwalk'] },
    { groupName: 'NFS', tools: ['nfs-showmount', 'showmount'] }
  ],
  'exploitation': [
    { groupName: 'Frameworks', tools: ['metasploit', 'msfconsole', 'sliver', 'covenant'] },
    { groupName: 'Exploit Search', tools: ['exploitdb', 'searchsploit'] },
    { groupName: 'Payloads & Tools', tools: ['msfvenom', 'setoolkit'] }
  ],
  'credentials': [
    { groupName: 'Password Cracking', tools: ['hashcat', 'john'] },
    { groupName: 'Online Bruteforce', tools: ['hydra', 'medusa', 'ncrack', 'patator'] },
    { groupName: 'Wordlist Generation', tools: ['cewl', 'crunch', 'rsmangler'] }
  ],
  'lateral': [
    { groupName: 'Active Directory / SMB', tools: ['crackmapexec', 'psexec', 'smbexec', 'wmiexec'] },
    { groupName: 'Remoting', tools: ['evil-winrm', 'winrm', 'rdp', 'ssh'] }
  ],
  'wireless': [
    { groupName: 'Aircrack Suite', tools: ['aircrack-ng', 'aireplay-ng', 'airmon-ng', 'airodump-ng'] },
    { groupName: 'Config & Analysis', tools: ['iw', 'iwconfig', 'hostapd'] },
    { groupName: 'WPS Attacks', tools: ['bully', 'reaver'] }
  ],
  'forensics': [
    { groupName: 'Memory Analysis', tools: ['volatility', 'volatility3'] },
    { groupName: 'File Carving', tools: ['binwalk', 'foremost', 'sleuthkit', 'bulk-extractor'] },
    { groupName: 'Disk & Triage', tools: ['autopsy', 'plaso'] },
    { groupName: 'Analysis Utilities', tools: ['exiftool', 'strings'] }
  ],
  'monitoring': [
    { groupName: 'IDS / IPS', tools: ['snort', 'suricata', 'zeek'] },
    { groupName: 'Endpoints & Auditing', tools: ['auditd', 'osquery', 'sysmon', 'wazuh-agent'] },
    { groupName: 'Log Management', tools: ['fail2ban'] }
  ],
  'cloud': [
    { groupName: 'Cloud Providers', tools: ['awscli', 'az-cli', 'gcloud'] },
    { groupName: 'Kubernetes Auditing', tools: ['kube-bench', 'kube-hunter', 'kubectl'] },
    { groupName: 'Container Security', tools: ['docker-bench-security', 'docker', 'trivy'] }
  ],
  'traffic': [
    { groupName: 'Packet Capture', tools: ['TCPDump', 'tshark', 'wireshark-cli', 'netsniff-ng', 'ngrep', 'tcpreplay'] },
    { groupName: 'MITM & Sniffing', tools: ['ettercap', 'sniffit'] }
  ],
  'utilities': [
    { groupName: 'Networking Utilities', tools: ['Netcat', 'curl', 'httpie', 'socat', 'wget'] },
    { groupName: 'Terminal Multiplexers', tools: ['screen', 'tmux', 'watch'] },
    { groupName: 'Data Processing', tools: ['jq', 'xargs'] }
  ],
  'osint': [
    { groupName: 'Recon & Discovery', tools: ['amass', 'recon-ng', 'spiderfoot', 'theHarvester'] },
    { groupName: 'Search Engines', tools: ['shodan'] }
  ],
  'mobile': [
    { groupName: 'Android Utilities', tools: ['adb', 'apktool'] },
    { groupName: 'Instrumentation & Reversing', tools: ['frida', 'objection', 'drozer'] }
  ],
  'containers': [
    { groupName: 'Vulnerability Scanning', tools: ['clair', 'grype', 'trivy'] },
    { groupName: 'SBOM', tools: ['syft'] }
  ],
  'reversing': [
    { groupName: 'Debuggers', tools: ['gdb', 'strace'] },
    { groupName: 'Disassemblers & Frameworks', tools: ['ghidra', 'objdump', 'radare2'] }
  ],
  'linux': [
    { groupName: 'Package Managers', tools: ['apt', 'dnf', 'pacman'] },
    { groupName: 'Networking Commands', tools: ['ping', 'ip'] },
    { groupName: 'File & Directories', tools: ['ls', 'cd', 'pwd', 'cp', 'mv', 'rm', 'mkdir', 'chmod', 'chown', 'tar'] },
    { groupName: 'Process Management', tools: ['top', 'ps', 'kill', 'systemctl', 'journalctl'] },
    { groupName: 'System Information', tools: ['df', 'du', 'free', 'whoami', 'history'] },
    { groupName: 'Text Processing', tools: ['find', 'grep', 'awk', 'sed', 'cut', 'sort', 'uniq', 'wc', 'cat', 'less', 'tail', 'head'] }
  ],
  'iot': [
    { groupName: 'Raspberry Pi Basics', tools: ['raspi-config', 'vcgencmd', 'gpio'] },
    { groupName: 'Hardware Interfaces', tools: ['i2c-tools', 'libcamera'] }
  ]
};

interface UseCategoryToolsReturn {
  groups: ToolGroup[];
  totalCount: number;
  loading: boolean;
}

export function useCategoryTools(categoryId: string): UseCategoryToolsReturn {
  const [groups, setGroups] = useState<ToolGroup[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const categoryGroups = CATEGORY_TOOLS[categoryId] || [];
    setGroups(categoryGroups);
    setTotalCount(categoryGroups.reduce((acc, group) => acc + group.tools.length, 0));
    setLoading(false);
  }, [categoryId]);

  return { groups, totalCount, loading };
}

export function getAllCategories() {
  return Object.keys(CATEGORY_TOOLS);
}

export function getTotalToolCount() {
  return Object.values(CATEGORY_TOOLS).reduce((acc, groups) => {
    return acc + groups.reduce((sum, group) => sum + group.tools.length, 0);
  }, 0);
}

