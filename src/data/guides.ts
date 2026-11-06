/**
 * Workflow guides: curated, ordered walkthroughs that link into tool pages.
 * Dependency-free so build scripts can import it.
 */

export interface GuideStep {
  title: string;
  body: string;
  /** Tool slug this step uses (links to its page). */
  tool?: string;
  /** Copy-ready commands for this step. */
  commands?: { command: string; note?: string }[];
}

export interface Guide {
  slug: string;
  title: string;
  description: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  minutes: number;
  tags: string[];
  /** Plain-language framing shown before the steps. */
  intro: string;
  prerequisites?: string[];
  steps: GuideStep[];
  /** Closing advice. */
  outro?: string;
  updated: string;
}

export const GUIDES: Guide[] = [
  {
    "slug": "network-recon-from-zero",
    "title": "Network recon from zero",
    "description": "Go from a single IP range to a map of live hosts, open ports and running services.",
    "level": "Beginner",
    "minutes": 20,
    "tags": [
      "recon",
      "scanning",
      "network",
      "nmap"
    ],
    "intro": "You have been given a network range and permission to test it. This walkthrough takes you from nothing to a clear picture of what is alive and what it is running, in the order an experienced tester would work. Only scan networks you own or are explicitly authorised to assess.",
    "prerequisites": [
      "An in-scope IP address or CIDR range",
      "A Linux box with nmap installed",
      "Written authorisation for the target"
    ],
    "steps": [
      {
        "title": "Find the live hosts",
        "body": "Before port scanning, work out which addresses respond. A quick ARP sweep on a local segment, or an nmap ping sweep across a routed range, saves you from scanning dead space.",
        "tool": "nmap",
        "commands": [
          {
            "command": "nmap -sn 10.10.10.0/24 -oA hosts",
            "note": "Ping sweep; no port scan. Writes results in all formats."
          },
          {
            "command": "arp-scan -l",
            "note": "Layer-2 discovery on the local segment — finds hosts that ignore ping."
          }
        ]
      },
      {
        "title": "Fast sweep for open ports",
        "body": "Scan the live hosts quickly to see which ports are open before spending time on detailed probes. A fast scanner like RustScan or masscan finds the ports; nmap then investigates them.",
        "tool": "RustScan",
        "commands": [
          {
            "command": "rustscan -a 10.10.10.5 --range 1-65535 -- -sV",
            "note": "RustScan finds open ports, then hands them to nmap for service detection."
          },
          {
            "command": "masscan 10.10.10.0/24 -p1-65535 --rate 1000 -oL masscan.txt",
            "note": "Sweep a whole range fast; tune the rate to the network."
          }
        ]
      },
      {
        "title": "Fingerprint the services",
        "body": "For each open port, identify the service, version and — where useful — the operating system. Version detail drives everything that follows, from exploit search to default-credential checks.",
        "tool": "nmap",
        "commands": [
          {
            "command": "nmap -sV -sC -p 22,80,443,445 10.10.10.5 -oA services",
            "note": "Version detection plus the default safe scripts on the ports you found."
          },
          {
            "command": "nmap -sV -p- --min-rate 1000 10.10.10.5",
            "note": "A thorough all-ports version scan when time allows."
          }
        ]
      },
      {
        "title": "Enumerate the interesting services",
        "body": "Turn versions into findings. Web servers, SMB and SNMP each have dedicated enumeration tools that pull out far more than a port scan.",
        "tool": "whatweb",
        "commands": [
          {
            "command": "whatweb http://10.10.10.5",
            "note": "Identify the web stack and versions."
          },
          {
            "command": "enum4linux -a 10.10.10.5",
            "note": "Users, shares and policy from SMB."
          }
        ]
      },
      {
        "title": "Record and prioritise",
        "body": "Keep your output in a consistent format so nothing is lost and you can diff later. Prioritise by exposure and known vulnerabilities, not by port number.",
        "tool": "nmap",
        "commands": [
          {
            "command": "nmap --script vuln -p 80,443 10.10.10.5",
            "note": "Check for widely known issues on the web ports."
          }
        ]
      }
    ],
    "outro": "From here, each live service becomes its own thread: web apps lead into the web-app enumeration guide, SMB and LDAP into enumeration tooling, and version numbers into searchsploit and nuclei. Keep everything scoped and logged.",
    "updated": "2026-11-06"
  },
  {
    "slug": "web-app-enumeration",
    "title": "Web application enumeration",
    "description": "Map a web application’s surface: technologies, hidden content, parameters and obvious vulnerability classes.",
    "level": "Intermediate",
    "minutes": 25,
    "tags": [
      "web",
      "recon",
      "content discovery",
      "fuzzing"
    ],
    "intro": "A web server is open on port 443. This guide maps the application the way a tester does: fingerprint the stack, discover content and endpoints, then probe the most common vulnerability classes. Stay inside the agreed scope and rate limits.",
    "prerequisites": [
      "An in-scope web application URL",
      "ffuf, nuclei and a wordlist installed",
      "A proxy such as Burp or mitmproxy (optional but recommended)"
    ],
    "steps": [
      {
        "title": "Fingerprint the stack",
        "body": "Identify the server, framework, CMS and any versions. This tells you which wordlists, scanners and known issues are relevant.",
        "tool": "whatweb",
        "commands": [
          {
            "command": "whatweb -a 3 https://target.example.com",
            "note": "Aggressive fingerprint of technologies and versions."
          },
          {
            "command": "httpx -u https://target.example.com -title -tech-detect -status-code",
            "note": "Probe and summarise the response in one line."
          }
        ]
      },
      {
        "title": "Discover subdomains and live hosts",
        "body": "Applications often sprawl across subdomains. Enumerate them passively, then keep the ones that actually serve traffic.",
        "tool": "subfinder",
        "commands": [
          {
            "command": "subfinder -d example.com -silent | httpx -silent",
            "note": "Passive subdomains, filtered to live web servers."
          }
        ]
      },
      {
        "title": "Brute-force content",
        "body": "Find directories, files and endpoints that are not linked. Choose a wordlist that matches the stack you fingerprinted.",
        "tool": "ffuf",
        "commands": [
          {
            "command": "ffuf -u https://target.example.com/FUZZ -w raft-medium-directories.txt -mc 200,301,302,403",
            "note": "Directory discovery, filtered to interesting status codes."
          },
          {
            "command": "feroxbuster -u https://target.example.com -x php,txt --depth 2",
            "note": "Recursive discovery with extensions."
          }
        ]
      },
      {
        "title": "Collect URLs and parameters",
        "body": "Crawl the app and pull historical URLs to find parameters worth testing. Parameters are where injection lives.",
        "tool": "katana",
        "commands": [
          {
            "command": "katana -u https://target.example.com -silent | tee urls.txt",
            "note": "Crawl for in-app URLs."
          },
          {
            "command": "gau example.com | grep \"=\" | tee params.txt",
            "note": "Historical URLs that carry query parameters."
          }
        ]
      },
      {
        "title": "Scan for known issues",
        "body": "Run a template-based scanner for CVEs, misconfigurations and exposures. Review findings by hand — scanners produce false positives.",
        "tool": "nuclei",
        "commands": [
          {
            "command": "nuclei -u https://target.example.com -s medium,high,critical",
            "note": "Run medium-and-above templates against the target."
          }
        ]
      },
      {
        "title": "Probe injection points",
        "body": "Test the parameters you collected for the classic classes. Start carefully; destructive payloads belong only in explicitly authorised tests.",
        "tool": "sqlmap",
        "commands": [
          {
            "command": "sqlmap -u \"https://target.example.com/item?id=1\" --batch --level 2",
            "note": "Automated SQL-injection detection on one parameter."
          }
        ]
      }
    ],
    "outro": "Treat scanner output as leads, not conclusions. The real work is confirming each finding manually, understanding its impact, and writing it up with a clear reproduction. Keep within scope, authentication rules and rate limits throughout.",
    "updated": "2026-11-06"
  },
  {
    "slug": "linux-privilege-escalation-checklist",
    "title": "Linux privilege-escalation checklist",
    "description": "A methodical local enumeration pass to find the path from a low-privilege shell to root.",
    "level": "Intermediate",
    "minutes": 20,
    "tags": [
      "privilege escalation",
      "linux",
      "post-exploitation"
    ],
    "intro": "You have a shell as an unprivileged user on an in-scope Linux host and want to escalate to root. Privilege escalation is mostly enumeration: the path is usually already there, waiting to be noticed. Work through these checks in order.",
    "prerequisites": [
      "A shell on an authorised Linux target",
      "Basic familiarity with the Linux file system"
    ],
    "steps": [
      {
        "title": "Know who you are",
        "body": "Establish your user, groups and sudo rights first. Membership of groups like sudo, docker, lxd or disk is often the whole game.",
        "tool": "whoami",
        "commands": [
          {
            "command": "id",
            "note": "Your UID, GID and supplementary groups."
          },
          {
            "command": "sudo -l",
            "note": "What you may run with sudo — look for NOPASSWD and editable scripts."
          }
        ]
      },
      {
        "title": "Understand the system",
        "body": "Record the distribution and kernel version. An out-of-date kernel may have a public local exploit, and the distro decides which paths apply.",
        "tool": "cat",
        "commands": [
          {
            "command": "cat /etc/os-release",
            "note": "Distribution and version."
          },
          {
            "command": "uname -a",
            "note": "Kernel version and architecture."
          }
        ]
      },
      {
        "title": "Hunt SUID and capabilities",
        "body": "Files that run as another user are a top escalation route. Compare what you find against GTFOBins.",
        "tool": "find",
        "commands": [
          {
            "command": "find / -perm -4000 -type f 2>/dev/null",
            "note": "SUID binaries."
          },
          {
            "command": "getcap -r / 2>/dev/null",
            "note": "Binaries with Linux capabilities such as cap_setuid."
          }
        ]
      },
      {
        "title": "Look at scheduled jobs",
        "body": "Cron jobs and systemd timers that run as root and call writable scripts or use wildcards are a classic win.",
        "tool": "systemctl",
        "commands": [
          {
            "command": "cat /etc/crontab; ls -la /etc/cron.*",
            "note": "System cron jobs and directories."
          },
          {
            "command": "systemctl list-timers --all",
            "note": "systemd timers, the modern equivalent."
          }
        ]
      },
      {
        "title": "Check writable and interesting files",
        "body": "World-writable files owned by root, readable backups, and credentials in config or history files all lead somewhere.",
        "tool": "grep",
        "commands": [
          {
            "command": "find / -writable -type f ! -path \"/proc/*\" 2>/dev/null",
            "note": "Files your user can write."
          },
          {
            "command": "grep -rniE \"password|api[_-]?key|secret\" /var/www /home 2>/dev/null",
            "note": "Hard-coded secrets to reuse."
          }
        ]
      },
      {
        "title": "Review network and processes",
        "body": "Services bound to localhost may be exploitable only from the box, and processes running as root reveal more attack surface.",
        "tool": "ps",
        "commands": [
          {
            "command": "ps aux | grep -v \"\\]$\"",
            "note": "Processes, kernel threads hidden."
          },
          {
            "command": "ss -tlnp",
            "note": "Listening ports, including localhost-only services."
          }
        ]
      }
    ],
    "outro": "If manual checks come up short, an automated enumerator such as linpeas can surface what you missed — but understanding each finding by hand is what makes you reliable. Only escalate on systems you are authorised to test.",
    "updated": "2026-11-06"
  },
  {
    "slug": "active-directory-enumeration",
    "title": "Active Directory enumeration",
    "description": "From valid domain credentials to a map of users, groups and attack paths toward Domain Admin.",
    "level": "Advanced",
    "minutes": 30,
    "tags": [
      "active directory",
      "windows",
      "kerberos",
      "enumeration"
    ],
    "intro": "You have one set of valid domain credentials — perhaps from password spraying or a captured hash — and a route to a domain controller. This guide enumerates the domain and finds attack paths, all with tools that run from Linux. For authorised engagements only, against domains you are permitted to test.",
    "prerequisites": [
      "Valid domain credentials (password or NT hash)",
      "Network access to a domain controller",
      "impacket, NetExec and BloodHound installed"
    ],
    "steps": [
      {
        "title": "Validate the credentials",
        "body": "Confirm the credentials work and see what they can reach across SMB before anything else.",
        "tool": "crackmapexec",
        "commands": [
          {
            "command": "netexec smb 10.10.10.0/24 -u svc -p Password123",
            "note": "Spray the credential across the subnet and list hosts, signing and shares."
          },
          {
            "command": "netexec smb 10.10.10.1 -u svc -p Password123 --users",
            "note": "Enumerate domain users from the DC."
          }
        ]
      },
      {
        "title": "Enumerate the directory",
        "body": "Pull users, groups, computers and policy from LDAP. The password policy tells you how aggressively you can spray.",
        "tool": "ldapsearch",
        "commands": [
          {
            "command": "netexec ldap 10.10.10.1 -u svc -p Password123 --kdcHost 10.10.10.1 --bloodhound --collection All",
            "note": "Enumerate and collect BloodHound data in one step."
          }
        ]
      },
      {
        "title": "Collect attack paths with BloodHound",
        "body": "Ingest the domain into BloodHound to see the shortest paths from your foothold to high-value targets.",
        "tool": "bloodhound-python",
        "commands": [
          {
            "command": "bloodhound-python -u svc -p Password123 -d corp.local -ns 10.10.10.1 -c All --zip",
            "note": "Collect objects, ACLs and sessions into a zip for import."
          }
        ]
      },
      {
        "title": "Roast Kerberos",
        "body": "AS-REP and Kerberoasting turn ordinary accounts into crackable hashes with no special privileges.",
        "tool": "impacket",
        "commands": [
          {
            "command": "GetNPUsers.py corp.local/ -usersfile users.txt -no-pass -dc-ip 10.10.10.1",
            "note": "AS-REP roast accounts without pre-auth."
          },
          {
            "command": "GetUserSPNs.py corp.local/svc:Password123 -dc-ip 10.10.10.1 -request",
            "note": "Kerberoast service accounts."
          }
        ]
      },
      {
        "title": "Crack what you collected",
        "body": "Feed the roasted hashes to hashcat offline. Cracked service accounts are often a step up in privilege.",
        "tool": "hashcat",
        "commands": [
          {
            "command": "hashcat -m 13100 kerb.txt rockyou.txt",
            "note": "Crack TGS-REP (Kerberoast) hashes."
          },
          {
            "command": "hashcat -m 18200 asrep.txt rockyou.txt",
            "note": "Crack AS-REP hashes."
          }
        ]
      },
      {
        "title": "Check certificate services",
        "body": "AD CS misconfigurations (ESC1 and friends) are a common and reliable path to Domain Admin.",
        "tool": "certipy",
        "commands": [
          {
            "command": "certipy find -u svc@corp.local -p Password123 -dc-ip 10.10.10.1 -vulnerable -stdout",
            "note": "Flag vulnerable certificate templates."
          }
        ]
      }
    ],
    "outro": "BloodHound usually makes the next move obvious: a group membership, an ACL, or a delegation that leads upward. Validate each edge before acting on it, and keep careful notes — AD paths can be long, and defenders are watching these exact protocols.",
    "updated": "2026-11-06"
  },
  {
    "slug": "linux-incident-triage",
    "title": "Incident triage on Linux",
    "description": "First-response enumeration on a possibly compromised Linux host, without destroying evidence.",
    "level": "Intermediate",
    "minutes": 25,
    "tags": [
      "dfir",
      "incident response",
      "linux",
      "forensics"
    ],
    "intro": "A Linux server is behaving oddly and you suspect a compromise. This guide is a calm first-response pass: gather volatile information, look for persistence and signs of intrusion, and preserve evidence as you go. Where possible, capture memory before you start poking, and work from copies.",
    "prerequisites": [
      "Shell access to the affected host (ideally root)",
      "Somewhere safe to store collected evidence",
      "Change-control approval for live response"
    ],
    "steps": [
      {
        "title": "Capture the volatile picture",
        "body": "Record what is running, who is logged in and what is connected right now. This information is gone after a reboot.",
        "tool": "ps",
        "commands": [
          {
            "command": "ps auxf > /evidence/ps.txt",
            "note": "Full process tree."
          },
          {
            "command": "ss -tulpna > /evidence/connections.txt",
            "note": "All sockets with owning processes."
          },
          {
            "command": "w; who; last -n 50",
            "note": "Current and recent logins."
          }
        ]
      },
      {
        "title": "Look for suspicious processes",
        "body": "Hunt for processes whose binary was deleted after launch, or that run from odd locations — classic malware behaviour.",
        "tool": "ps",
        "commands": [
          {
            "command": "ls -l /proc/*/exe 2>/dev/null | grep deleted",
            "note": "Running binaries removed from disk."
          },
          {
            "command": "ls -la /proc/<pid>/cwd",
            "note": "Working directory of a suspicious PID."
          }
        ]
      },
      {
        "title": "Check persistence locations",
        "body": "Attackers come back. Review cron, systemd units and timers, and startup files for anything unexpected.",
        "tool": "systemctl",
        "commands": [
          {
            "command": "systemctl list-unit-files --state=enabled",
            "note": "Services set to start at boot."
          },
          {
            "command": "systemctl list-timers --all",
            "note": "Timers, a favourite persistence spot."
          },
          {
            "command": "cat /etc/crontab; ls -la /etc/cron.* /var/spool/cron/*",
            "note": "Cron jobs for every user."
          }
        ]
      },
      {
        "title": "Review authentication and logs",
        "body": "Failed and successful logins, sudo use and service restarts build a timeline of what happened and when.",
        "tool": "journalctl",
        "commands": [
          {
            "command": "journalctl --since \"yesterday\" -p warning",
            "note": "Warnings and errors in a time window."
          },
          {
            "command": "grep -Ei \"Accepted|Failed password|sudo\" /var/log/auth.log",
            "note": "SSH and sudo activity."
          }
        ]
      },
      {
        "title": "Inspect accounts and keys",
        "body": "New accounts, UID-0 accounts other than root, and unexpected SSH keys are common backdoors.",
        "tool": "awk",
        "commands": [
          {
            "command": "awk -F: '$3==0' /etc/passwd",
            "note": "Every UID-0 account — only root should appear."
          },
          {
            "command": "find / -name authorized_keys 2>/dev/null -exec ls -la {} \\;",
            "note": "SSH keys across the system."
          }
        ]
      },
      {
        "title": "Preserve what you found",
        "body": "Hash and copy the artefacts you collected so they hold up later. Note timestamps and keep originals untouched.",
        "tool": "strings",
        "commands": [
          {
            "command": "sha256sum /evidence/* > /evidence/hashes.txt",
            "note": "Hash the collected evidence."
          },
          {
            "command": "tar -czf evidence-$(hostname)-$(date +%F).tar.gz /evidence",
            "note": "Bundle it for handoff."
          }
        ]
      }
    ],
    "outro": "This is triage, not a full forensic investigation. If you confirm a compromise, preserve a memory image and disk copy for deeper analysis with Volatility and Sleuth Kit, and follow your organisation’s incident process for containment and reporting.",
    "updated": "2026-11-06"
  },
  {
    "slug": "wifi-assessment",
    "title": "Wi-Fi assessment basics",
    "description": "Capture a WPA2 handshake and audit the passphrase — the core workflow of a wireless assessment.",
    "level": "Intermediate",
    "minutes": 20,
    "tags": [
      "wireless",
      "wifi",
      "wpa",
      "cracking"
    ],
    "intro": "This guide covers the fundamental WPA2-PSK assessment loop: put an adapter into monitor mode, find the target network, capture a handshake and test the passphrase offline. You need a wireless adapter that supports monitor mode and injection, and written permission for the network you are testing.",
    "prerequisites": [
      "A Wi-Fi adapter that supports monitor mode and injection",
      "The aircrack-ng suite installed",
      "Written authorisation for the target network"
    ],
    "steps": [
      {
        "title": "Enable monitor mode",
        "body": "Switch your adapter from managed to monitor mode so it can capture raw 802.11 frames. Stop any processes that would interfere.",
        "tool": "airmon-ng",
        "commands": [
          {
            "command": "sudo airmon-ng check kill",
            "note": "Stop network managers that disrupt capture."
          },
          {
            "command": "sudo airmon-ng start wlan0",
            "note": "Put the adapter into monitor mode (becomes wlan0mon)."
          }
        ]
      },
      {
        "title": "Survey the airspace",
        "body": "List nearby networks and clients to identify your target’s channel and BSSID.",
        "tool": "airodump-ng",
        "commands": [
          {
            "command": "sudo airodump-ng wlan0mon",
            "note": "Scan all channels; note the target BSSID and channel."
          }
        ]
      },
      {
        "title": "Capture the handshake",
        "body": "Lock onto the target channel and capture traffic. You need a client to authenticate while you are listening.",
        "tool": "airodump-ng",
        "commands": [
          {
            "command": "sudo airodump-ng -c 6 --bssid AA:BB:CC:DD:EE:FF -w capture wlan0mon",
            "note": "Focus on one network and write the capture to disk."
          }
        ]
      },
      {
        "title": "Force a reconnect (optional)",
        "body": "If no client authenticates on its own, a targeted deauthentication makes one reconnect, producing the handshake. Use sparingly and only in scope.",
        "tool": "aireplay-ng",
        "commands": [
          {
            "command": "sudo aireplay-ng --deauth 3 -a AA:BB:CC:DD:EE:FF -c 11:22:33:44:55:66 wlan0mon",
            "note": "Send a few deauth frames to one client to trigger a reconnect."
          }
        ]
      },
      {
        "title": "Crack the passphrase",
        "body": "With a captured handshake, test it against a wordlist offline. hashcat on a GPU is far faster than aircrack-ng for large lists.",
        "tool": "aircrack-ng",
        "commands": [
          {
            "command": "aircrack-ng -w rockyou.txt -b AA:BB:CC:DD:EE:FF capture-01.cap",
            "note": "Dictionary attack with aircrack-ng."
          },
          {
            "command": "hcxpcapngtool -o hash.hc22000 capture-01.cap && hashcat -m 22000 hash.hc22000 rockyou.txt",
            "note": "Convert and crack on a GPU with hashcat."
          }
        ]
      },
      {
        "title": "Restore the adapter",
        "body": "Return the adapter to managed mode and restart networking when you are done.",
        "tool": "airmon-ng",
        "commands": [
          {
            "command": "sudo airmon-ng stop wlan0mon",
            "note": "Leave monitor mode."
          },
          {
            "command": "sudo systemctl restart NetworkManager",
            "note": "Bring normal networking back."
          }
        ]
      }
    ],
    "outro": "A cracked passphrase demonstrates weak PSK selection; report it with a recommendation for a long, random passphrase or a move to WPA3 / 802.1X. Never test networks you do not have explicit permission to assess.",
    "updated": "2026-11-06"
  }
];
