/** Glossary of terms used across the reference. Dependency-free. */

export interface GlossaryTerm {
  term: string;
  slug: string;
  definition: string;
  /** Related tool slugs. */
  tools?: string[];
  /** Related term slugs. */
  see?: string[];
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    "term": "Active Directory (AD)",
    "slug": "active-directory",
    "definition": "Microsoft’s directory service for Windows networks. It stores users, groups, computers and policies in a central database on domain controllers, and authenticates them with Kerberos and NTLM. Its complexity makes it a frequent target in enterprise assessments.",
    "tools": [
      "impacket",
      "bloodhound-python",
      "crackmapexec"
    ],
    "see": [
      "kerberos",
      "domain-controller",
      "ntlm"
    ]
  },
  {
    "term": "AS-REP roasting",
    "slug": "as-rep-roasting",
    "definition": "An attack against Active Directory accounts that have Kerberos pre-authentication disabled. The domain controller returns an encrypted blob that can be cracked offline to recover the account password, with no valid credentials needed.",
    "tools": [
      "impacket",
      "rubeus",
      "hashcat"
    ],
    "see": [
      "kerberos",
      "kerberoasting"
    ]
  },
  {
    "term": "Brute force",
    "slug": "brute-force",
    "definition": "Trying every possibility in a space — passwords, directories, parameters — until something works. Online brute force hits a live service; offline brute force runs against captured hashes and is limited only by hardware.",
    "tools": [
      "hydra",
      "hashcat",
      "ffuf"
    ],
    "see": [
      "dictionary-attack",
      "password-spraying"
    ]
  },
  {
    "term": "C2 (Command and Control)",
    "slug": "c2",
    "definition": "The infrastructure an operator uses to communicate with compromised hosts: issuing commands, receiving output and staging further tools. Frameworks like Sliver and Metasploit provide implants and a server to manage them.",
    "tools": [
      "sliver",
      "metasploit",
      "covenant"
    ],
    "see": [
      "payload"
    ]
  },
  {
    "term": "CIDR",
    "slug": "cidr",
    "definition": "Classless Inter-Domain Routing notation writes an IP range as an address and prefix length, such as 10.0.0.0/24. The number after the slash is how many leading bits are fixed; /24 is 256 addresses. Scanners and firewall rules use it everywhere.",
    "tools": [
      "nmap",
      "masscan"
    ],
    "see": [
      "subnet"
    ]
  },
  {
    "term": "CVE",
    "slug": "cve",
    "definition": "A Common Vulnerabilities and Exposures identifier, such as CVE-2021-44228, is a unique reference for a publicly known security flaw. Scanners and exploit databases key off CVE numbers to tell you whether a version is affected.",
    "tools": [
      "nuclei",
      "searchsploit",
      "trivy"
    ]
  },
  {
    "term": "DCSync",
    "slug": "dcsync",
    "definition": "An attack in which a host with directory-replication rights asks a domain controller for account password data, including the all-important krbtgt key, using the same protocol real DCs use to sync. It yields every hash in the domain without touching the DC’s disk.",
    "tools": [
      "impacket",
      "mimikatz"
    ],
    "see": [
      "active-directory",
      "golden-ticket",
      "domain-controller"
    ]
  },
  {
    "term": "Dictionary attack",
    "slug": "dictionary-attack",
    "definition": "A password attack that tries entries from a wordlist rather than every possible combination. It trades completeness for speed and works because people reuse common and predictable passwords.",
    "tools": [
      "hashcat",
      "john",
      "hydra"
    ],
    "see": [
      "brute-force",
      "wordlist"
    ]
  },
  {
    "term": "DNS",
    "slug": "dns",
    "definition": "The Domain Name System translates names like example.com into IP addresses and holds other records (MX, TXT, NS). In recon it is a rich source: subdomains, mail servers and misconfigurations such as permitted zone transfers.",
    "tools": [
      "dig",
      "dnsrecon",
      "dnsx"
    ],
    "see": [
      "zone-transfer",
      "subdomain"
    ]
  },
  {
    "term": "Domain controller",
    "slug": "domain-controller",
    "definition": "A Windows server that runs Active Directory, authenticates users and enforces policy for a domain. Compromising a domain controller — or its krbtgt account — usually means control of the entire domain.",
    "tools": [
      "impacket",
      "crackmapexec"
    ],
    "see": [
      "active-directory",
      "dcsync"
    ]
  },
  {
    "term": "Enumeration",
    "slug": "enumeration",
    "definition": "The methodical extraction of detail from a discovered service: users, shares, versions, endpoints and configuration. It is the bridge between knowing a service exists and knowing how to attack it.",
    "tools": [
      "enum4linux",
      "ldapsearch",
      "nmap"
    ],
    "see": [
      "fingerprinting"
    ]
  },
  {
    "term": "Exploit",
    "slug": "exploit",
    "definition": "Code or a technique that takes advantage of a vulnerability to make software behave in an unintended way, such as running attacker-supplied commands. A proof-of-concept demonstrates the flaw; a weaponised exploit achieves a goal reliably.",
    "tools": [
      "metasploit",
      "searchsploit"
    ],
    "see": [
      "cve",
      "payload",
      "rce"
    ]
  },
  {
    "term": "Fingerprinting",
    "slug": "fingerprinting",
    "definition": "Identifying what a target is running — operating system, service, version, framework — from the way it responds. Accurate fingerprinting narrows the field of relevant exploits and misconfigurations.",
    "tools": [
      "nmap",
      "whatweb",
      "httpx"
    ],
    "see": [
      "enumeration"
    ]
  },
  {
    "term": "Fuzzing",
    "slug": "fuzzing",
    "definition": "Sending many varied or malformed inputs to a target to find hidden content or trigger faults. In web testing, fuzzing a path or parameter with a wordlist discovers endpoints and injection points.",
    "tools": [
      "ffuf",
      "wfuzz",
      "feroxbuster"
    ],
    "see": [
      "brute-force"
    ]
  },
  {
    "term": "Golden ticket",
    "slug": "golden-ticket",
    "definition": "A forged Kerberos ticket-granting ticket created from a domain’s krbtgt hash. Because the krbtgt key signs all tickets, a golden ticket lets an attacker impersonate any user, including Domain Admin, for as long as the key is unchanged.",
    "tools": [
      "mimikatz",
      "impacket"
    ],
    "see": [
      "kerberos",
      "dcsync",
      "active-directory"
    ]
  },
  {
    "term": "Hash",
    "slug": "hash",
    "definition": "The fixed-length output of a one-way function applied to data such as a password. Systems store password hashes instead of plaintext; attackers crack them offline or, with NTLM, pass them directly to authenticate.",
    "tools": [
      "hashcat",
      "john"
    ],
    "see": [
      "pass-the-hash",
      "rainbow-table"
    ]
  },
  {
    "term": "IDS / IPS",
    "slug": "ids-ips",
    "definition": "An Intrusion Detection System watches traffic or hosts and alerts on suspicious activity; an Intrusion Prevention System also blocks it. Testers care because noisy techniques trip these systems and reveal the assessment.",
    "tools": [
      "snort",
      "suricata",
      "zeek"
    ]
  },
  {
    "term": "Kerberoasting",
    "slug": "kerberoasting",
    "definition": "An attack that requests Kerberos service tickets for accounts with a Service Principal Name, then cracks them offline to recover the service account password. Any authenticated domain user can do it, which is what makes it dangerous.",
    "tools": [
      "impacket",
      "rubeus",
      "hashcat"
    ],
    "see": [
      "kerberos",
      "as-rep-roasting",
      "active-directory"
    ]
  },
  {
    "term": "Kerberos",
    "slug": "kerberos",
    "definition": "The ticket-based authentication protocol at the heart of Active Directory. Clients get a ticket-granting ticket from a domain controller, then exchange it for service tickets. Many AD attacks abuse quirks of this flow.",
    "tools": [
      "impacket",
      "rubeus",
      "kerbrute"
    ],
    "see": [
      "active-directory",
      "kerberoasting",
      "golden-ticket"
    ]
  },
  {
    "term": "Lateral movement",
    "slug": "lateral-movement",
    "definition": "Moving from one compromised host to others inside a network, usually with stolen credentials over normal admin protocols like SMB, WMI and WinRM. It expands access toward high-value targets.",
    "tools": [
      "crackmapexec",
      "psexec",
      "evil-winrm"
    ],
    "see": [
      "pass-the-hash",
      "pivoting"
    ]
  },
  {
    "term": "LLMNR / NBT-NS poisoning",
    "slug": "llmnr-poisoning",
    "definition": "An attack on legacy Windows name-resolution protocols. When a host fails a DNS lookup and broadcasts for help, the attacker answers, the victim authenticates to them, and their NetNTLM hash is captured for cracking or relaying.",
    "tools": [
      "responder",
      "impacket"
    ],
    "see": [
      "ntlm",
      "pass-the-hash",
      "relay-attack"
    ]
  },
  {
    "term": "MITM (man-in-the-middle)",
    "slug": "mitm",
    "definition": "An attacker positioned between two parties so that traffic flows through them, allowing it to be read or altered. On a LAN this is often achieved with ARP spoofing.",
    "tools": [
      "ettercap",
      "responder"
    ],
    "see": [
      "relay-attack"
    ]
  },
  {
    "term": "NTLM",
    "slug": "ntlm",
    "definition": "A challenge-response authentication protocol still widely used in Windows networks alongside Kerberos. Its hashes can be captured, cracked, relayed, or passed directly to authenticate, which drives many AD attacks.",
    "tools": [
      "responder",
      "crackmapexec",
      "impacket"
    ],
    "see": [
      "pass-the-hash",
      "relay-attack",
      "kerberos"
    ]
  },
  {
    "term": "Pass-the-hash",
    "slug": "pass-the-hash",
    "definition": "Authenticating to a Windows service using an account’s NTLM hash instead of its plaintext password. Because the hash is the credential for NTLM, cracking is unnecessary — the hash alone grants access.",
    "tools": [
      "crackmapexec",
      "impacket",
      "mimikatz"
    ],
    "see": [
      "ntlm",
      "hash",
      "lateral-movement"
    ]
  },
  {
    "term": "Password spraying",
    "slug": "password-spraying",
    "definition": "Trying one or a few common passwords against many accounts, rather than many passwords against one. Spreading attempts across accounts stays under lockout thresholds and often finds at least one weak password.",
    "tools": [
      "kerbrute",
      "crackmapexec",
      "hydra"
    ],
    "see": [
      "brute-force",
      "dictionary-attack"
    ]
  },
  {
    "term": "Payload",
    "slug": "payload",
    "definition": "The code that runs on a target after a vulnerability is triggered — a reverse shell, a Meterpreter session, or a command. Payload generators build these for different platforms and delivery methods.",
    "tools": [
      "msfvenom",
      "metasploit"
    ],
    "see": [
      "exploit",
      "reverse-shell",
      "c2"
    ]
  },
  {
    "term": "Pivoting",
    "slug": "pivoting",
    "definition": "Using a compromised host as a stepping stone to reach networks you cannot touch directly, by tunnelling or proxying traffic through it. It is how an external foothold becomes internal access.",
    "tools": [
      "chisel",
      "ligolo-ng",
      "proxychains"
    ],
    "see": [
      "lateral-movement",
      "reverse-shell"
    ]
  },
  {
    "term": "Privilege escalation",
    "slug": "privilege-escalation",
    "definition": "Gaining higher permissions than you started with — from a normal user to root or SYSTEM (vertical), or to another peer account (horizontal). Local escalation usually exploits misconfiguration more than code bugs.",
    "tools": [
      "find",
      "mimikatz"
    ],
    "see": [
      "suid",
      "exploit"
    ]
  },
  {
    "term": "RCE (remote code execution)",
    "slug": "rce",
    "definition": "A vulnerability class that lets an attacker run their own commands on a target over the network. It is among the most severe outcomes, since it typically leads straight to a shell.",
    "tools": [
      "metasploit",
      "nuclei"
    ],
    "see": [
      "exploit",
      "payload",
      "reverse-shell"
    ]
  },
  {
    "term": "Rainbow table",
    "slug": "rainbow-table",
    "definition": "A precomputed table that maps hashes back to their inputs, trading disk space for cracking speed. Salting passwords defeats rainbow tables by making each hash unique.",
    "tools": [
      "hashcat"
    ],
    "see": [
      "hash",
      "dictionary-attack"
    ]
  },
  {
    "term": "Reverse shell",
    "slug": "reverse-shell",
    "definition": "A shell session in which the target connects outbound to the attacker, who is listening, rather than the attacker connecting in. Outbound connections often slip past firewalls that block inbound ones.",
    "tools": [
      "Netcat",
      "socat",
      "msfvenom"
    ],
    "see": [
      "payload",
      "pivoting",
      "rce"
    ]
  },
  {
    "term": "Relay attack",
    "slug": "relay-attack",
    "definition": "Forwarding captured authentication to a third system instead of cracking it, so the attacker is accepted as the victim. NTLM relay is the common form and can escalate to domain compromise.",
    "tools": [
      "impacket",
      "responder"
    ],
    "see": [
      "ntlm",
      "llmnr-poisoning",
      "pass-the-hash"
    ]
  },
  {
    "term": "SBOM",
    "slug": "sbom",
    "definition": "A Software Bill of Materials lists every component and dependency in a piece of software. Generated from images or source, it feeds vulnerability scanners and supports supply-chain security.",
    "tools": [
      "syft",
      "trivy",
      "grype"
    ],
    "see": [
      "cve"
    ]
  },
  {
    "term": "SQL injection",
    "slug": "sql-injection",
    "definition": "A web vulnerability where unsanitised input is placed into a database query, letting an attacker read or modify data, bypass authentication, or sometimes reach the operating system. One of the oldest and most impactful web flaws.",
    "tools": [
      "sqlmap"
    ],
    "see": [
      "xss",
      "fuzzing"
    ]
  },
  {
    "term": "Subdomain",
    "slug": "subdomain",
    "definition": "A host under a parent domain, such as mail.example.com. Enumerating subdomains expands the attack surface, often revealing forgotten or less-protected applications.",
    "tools": [
      "subfinder",
      "amass",
      "dnsx"
    ],
    "see": [
      "dns",
      "enumeration"
    ]
  },
  {
    "term": "SUID",
    "slug": "suid",
    "definition": "A Unix permission bit that makes a program run with the privileges of its owner rather than the user who launched it. A SUID-root binary that can be misused is a classic local privilege-escalation route.",
    "tools": [
      "find"
    ],
    "see": [
      "privilege-escalation"
    ]
  },
  {
    "term": "Subnet",
    "slug": "subnet",
    "definition": "A logical subdivision of an IP network. A subnet mask or CIDR prefix defines which addresses belong to it. Knowing the subnet tells a scanner the range of hosts to probe.",
    "tools": [
      "nmap",
      "ip"
    ],
    "see": [
      "cidr"
    ]
  },
  {
    "term": "Wordlist",
    "slug": "wordlist",
    "definition": "A file of candidate values — passwords, usernames, directories, subdomains — fed to cracking and fuzzing tools. Good results depend on choosing or building a wordlist that fits the target.",
    "tools": [
      "hashcat",
      "ffuf",
      "cewl"
    ],
    "see": [
      "dictionary-attack",
      "fuzzing",
      "brute-force"
    ]
  },
  {
    "term": "XSS",
    "slug": "xss",
    "definition": "Cross-site scripting injects attacker-controlled script into pages other users view, running in their browser. It can steal sessions, perform actions as the victim, or deface content.",
    "tools": [
      "xsser",
      "nuclei"
    ],
    "see": [
      "sql-injection",
      "fuzzing"
    ]
  },
  {
    "term": "Zone transfer",
    "slug": "zone-transfer",
    "definition": "A DNS mechanism (AXFR) for copying an entire zone between servers. If a name server allows it to anyone, it hands over every record in the domain — an immediate and complete recon win.",
    "tools": [
      "dig",
      "dnsrecon"
    ],
    "see": [
      "dns",
      "enumeration"
    ]
  }
];
