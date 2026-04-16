import { useState, useEffect } from 'react';

// Map of category -> tools based on the provided structure
export const CATEGORY_TOOLS: Record<string, string[]> = {
  'network': ['arp-scan', 'nmap', 'masscan', 'RustScan', 'Unicornscan', 'ZMap', 'amap', 'fping', 'hping3', 'ike-scan', 'iperf', 'naabu', 'netdiscover', 'netstat', 'p0f', 'ss'],
  'web': ['dirsearch', 'ffuf', 'gau', 'gobuster', 'httpx', 'nikto', 'nuclei', 'sqlmap', 'waybackurls', 'wfuzz', 'whatweb', 'wpscan', 'xsser'],
  'enumeration': ['crackmapexec-enum', 'enum4linux', 'ldapsearch', 'nbtscan', 'nfs-showmount', 'rpcclient', 'showmount', 'smbclient', 'snmpcheck', 'snmpwalk'],
  'exploitation': ['exploitdb', 'covenant', 'metasploit', 'msfconsole', 'msfvenom', 'searchsploit', 'setoolkit', 'sliver'],
  'credentials': ['john', 'cewl', 'crunch', 'hashcat', 'hydra', 'medusa', 'ncrack', 'patator', 'rsmangler'],
  'lateral': ['crackmapexec', 'evil-winrm', 'psexec', 'rdp', 'smbexec', 'ssh', 'winrm', 'wmiexec'],
  'wireless': ['aircrack-ng', 'aireplay-ng', 'airmon-ng', 'airodump-ng', 'bully', 'hostapd', 'iw', 'iwconfig', 'reaver'],
  'forensics': ['autopsy', 'binwalk', 'bulk-extractor', 'exiftool', 'foremost', 'plaso', 'sleuthkit', 'strings', 'volatility', 'volatility3'],
  'monitoring': ['auditd', 'fail2ban', 'osquery', 'snort', 'suricata', 'sysmon', 'wazuh-agent', 'zeek'],
  'cloud': ['docker', 'awscli', 'az-cli', 'docker-bench-security', 'gcloud', 'kube-bench', 'kube-hunter', 'kubectl', 'trivy'],
  'traffic': ['TCPDump', 'ettercap', 'netsniff-ng', 'ngrep', 'sniffit', 'tcpreplay', 'tshark', 'wireshark-cli'],
  'utilities': ['Netcat', 'curl', 'httpie', 'jq', 'screen', 'socat', 'tmux', 'watch', 'wget', 'xargs'],
  'osint': ['shodan', 'amass', 'recon-ng', 'spiderfoot', 'theHarvester'],
  'mobile': ['adb', 'frida', 'objection', 'drozer', 'apktool'],
  'containers': ['grype', 'syft', 'clair', 'trivy'],
  'reversing': ['gdb', 'ghidra', 'objdump', 'strace', 'radare2'],
  'linux': ['apt', 'dnf', 'pacman', 'systemctl', 'journalctl', 'tar', 'chmod', 'chown', 'find', 'grep', 'ls', 'cd', 'pwd', 'cp', 'mv', 'rm', 'mkdir', 'cat', 'less', 'tail', 'head', 'top', 'ps', 'kill', 'df', 'du', 'free', 'awk', 'sed', 'cut', 'sort', 'uniq', 'wc', 'ping', 'ip', 'whoami', 'su', 'history'],
  'iot': ['raspi-config', 'vcgencmd', 'gpio', 'i2c-tools', 'libcamera'],
};

interface UseCategoryToolsReturn {
  tools: string[];
  loading: boolean;
}

export function useCategoryTools(categoryId: string): UseCategoryToolsReturn {
  const [tools, setTools] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, use the static mapping
    // In a real implementation, this could dynamically discover files
    setTools(CATEGORY_TOOLS[categoryId] || []);
    setLoading(false);
  }, [categoryId]);

  return { tools, loading };
}

export function getAllCategories() {
  return Object.keys(CATEGORY_TOOLS);
}

export function getTotalToolCount() {
  return Object.values(CATEGORY_TOOLS).reduce((acc, tools) => acc + tools.length, 0);
}
