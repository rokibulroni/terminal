# Terminal glossary

Definitions of security and networking terms used across https://terminal.rokibulroni.com.

## Active Directory (AD)

Microsoft’s directory service for Windows networks. It stores users, groups, computers and policies in a central database on domain controllers, and authenticates them with Kerberos and NTLM. Its complexity makes it a frequent target in enterprise assessments.

Tools: [Impacket](https://terminal.rokibulroni.com/api/v1/tools/active-directory/impacket.md), [BloodHound.py](https://terminal.rokibulroni.com/api/v1/tools/active-directory/bloodhound-python.md), [CrackMapExec / NetExec](https://terminal.rokibulroni.com/api/v1/tools/lateral/crackmapexec.md)

See also: Kerberos, Domain controller, NTLM

## AS-REP roasting

An attack against Active Directory accounts that have Kerberos pre-authentication disabled. The domain controller returns an encrypted blob that can be cracked offline to recover the account password, with no valid credentials needed.

Tools: [Impacket](https://terminal.rokibulroni.com/api/v1/tools/active-directory/impacket.md), [Rubeus](https://terminal.rokibulroni.com/api/v1/tools/active-directory/rubeus.md), [Hashcat](https://terminal.rokibulroni.com/api/v1/tools/credentials/hashcat.md)

See also: Kerberos, Kerberoasting

## Brute force

Trying every possibility in a space — passwords, directories, parameters — until something works. Online brute force hits a live service; offline brute force runs against captured hashes and is limited only by hardware.

Tools: [Hydra](https://terminal.rokibulroni.com/api/v1/tools/credentials/hydra.md), [Hashcat](https://terminal.rokibulroni.com/api/v1/tools/credentials/hashcat.md), [ffuf](https://terminal.rokibulroni.com/api/v1/tools/web/ffuf.md)

See also: Dictionary attack, Password spraying

## C2 (Command and Control)

The infrastructure an operator uses to communicate with compromised hosts: issuing commands, receiving output and staging further tools. Frameworks like Sliver and Metasploit provide implants and a server to manage them.

Tools: [Sliver](https://terminal.rokibulroni.com/api/v1/tools/exploitation/sliver.md), [Metasploit Framework](https://terminal.rokibulroni.com/api/v1/tools/exploitation/metasploit.md), [Covenant](https://terminal.rokibulroni.com/api/v1/tools/exploitation/covenant.md)

See also: Payload

## CIDR

Classless Inter-Domain Routing notation writes an IP range as an address and prefix length, such as 10.0.0.0/24. The number after the slash is how many leading bits are fixed; /24 is 256 addresses. Scanners and firewall rules use it everywhere.

Tools: [Nmap](https://terminal.rokibulroni.com/api/v1/tools/network/nmap.md), [Masscan](https://terminal.rokibulroni.com/api/v1/tools/network/masscan.md)

See also: Subnet

## CVE

A Common Vulnerabilities and Exposures identifier, such as CVE-2021-44228, is a unique reference for a publicly known security flaw. Scanners and exploit databases key off CVE numbers to tell you whether a version is affected.

Tools: [Nuclei](https://terminal.rokibulroni.com/api/v1/tools/web/nuclei.md), [SearchSploit](https://terminal.rokibulroni.com/api/v1/tools/exploitation/searchsploit.md), [Trivy](https://terminal.rokibulroni.com/api/v1/tools/containers/trivy.md)

## DCSync

An attack in which a host with directory-replication rights asks a domain controller for account password data, including the all-important krbtgt key, using the same protocol real DCs use to sync. It yields every hash in the domain without touching the DC’s disk.

Tools: [Impacket](https://terminal.rokibulroni.com/api/v1/tools/active-directory/impacket.md), [Mimikatz](https://terminal.rokibulroni.com/api/v1/tools/active-directory/mimikatz.md)

See also: Active Directory (AD), Golden ticket, Domain controller

## Dictionary attack

A password attack that tries entries from a wordlist rather than every possible combination. It trades completeness for speed and works because people reuse common and predictable passwords.

Tools: [Hashcat](https://terminal.rokibulroni.com/api/v1/tools/credentials/hashcat.md), [John the Ripper](https://terminal.rokibulroni.com/api/v1/tools/credentials/john.md), [Hydra](https://terminal.rokibulroni.com/api/v1/tools/credentials/hydra.md)

See also: Brute force, Wordlist

## DNS

The Domain Name System translates names like example.com into IP addresses and holds other records (MX, TXT, NS). In recon it is a rich source: subdomains, mail servers and misconfigurations such as permitted zone transfers.

Tools: [dig](https://terminal.rokibulroni.com/api/v1/tools/network/dig.md), [dnsrecon](https://terminal.rokibulroni.com/api/v1/tools/network/dnsrecon.md), [dnsx](https://terminal.rokibulroni.com/api/v1/tools/web/dnsx.md)

See also: Zone transfer, Subdomain

## Domain controller

A Windows server that runs Active Directory, authenticates users and enforces policy for a domain. Compromising a domain controller — or its krbtgt account — usually means control of the entire domain.

Tools: [Impacket](https://terminal.rokibulroni.com/api/v1/tools/active-directory/impacket.md), [CrackMapExec / NetExec](https://terminal.rokibulroni.com/api/v1/tools/lateral/crackmapexec.md)

See also: Active Directory (AD), DCSync

## Enumeration

The methodical extraction of detail from a discovered service: users, shares, versions, endpoints and configuration. It is the bridge between knowing a service exists and knowing how to attack it.

Tools: [enum4linux](https://terminal.rokibulroni.com/api/v1/tools/enumeration/enum4linux.md), [ldapsearch](https://terminal.rokibulroni.com/api/v1/tools/enumeration/ldapsearch.md), [Nmap](https://terminal.rokibulroni.com/api/v1/tools/network/nmap.md)

See also: Fingerprinting

## Exploit

Code or a technique that takes advantage of a vulnerability to make software behave in an unintended way, such as running attacker-supplied commands. A proof-of-concept demonstrates the flaw; a weaponised exploit achieves a goal reliably.

Tools: [Metasploit Framework](https://terminal.rokibulroni.com/api/v1/tools/exploitation/metasploit.md), [SearchSploit](https://terminal.rokibulroni.com/api/v1/tools/exploitation/searchsploit.md)

See also: CVE, Payload, RCE (remote code execution)

## Fingerprinting

Identifying what a target is running — operating system, service, version, framework — from the way it responds. Accurate fingerprinting narrows the field of relevant exploits and misconfigurations.

Tools: [Nmap](https://terminal.rokibulroni.com/api/v1/tools/network/nmap.md), [WhatWeb](https://terminal.rokibulroni.com/api/v1/tools/web/whatweb.md), [httpx](https://terminal.rokibulroni.com/api/v1/tools/web/httpx.md)

See also: Enumeration

## Fuzzing

Sending many varied or malformed inputs to a target to find hidden content or trigger faults. In web testing, fuzzing a path or parameter with a wordlist discovers endpoints and injection points.

Tools: [ffuf](https://terminal.rokibulroni.com/api/v1/tools/web/ffuf.md), [Wfuzz](https://terminal.rokibulroni.com/api/v1/tools/web/wfuzz.md), [feroxbuster](https://terminal.rokibulroni.com/api/v1/tools/web/feroxbuster.md)

See also: Brute force

## Golden ticket

A forged Kerberos ticket-granting ticket created from a domain’s krbtgt hash. Because the krbtgt key signs all tickets, a golden ticket lets an attacker impersonate any user, including Domain Admin, for as long as the key is unchanged.

Tools: [Mimikatz](https://terminal.rokibulroni.com/api/v1/tools/active-directory/mimikatz.md), [Impacket](https://terminal.rokibulroni.com/api/v1/tools/active-directory/impacket.md)

See also: Kerberos, DCSync, Active Directory (AD)

## Hash

The fixed-length output of a one-way function applied to data such as a password. Systems store password hashes instead of plaintext; attackers crack them offline or, with NTLM, pass them directly to authenticate.

Tools: [Hashcat](https://terminal.rokibulroni.com/api/v1/tools/credentials/hashcat.md), [John the Ripper](https://terminal.rokibulroni.com/api/v1/tools/credentials/john.md)

See also: Pass-the-hash, Rainbow table

## IDS / IPS

An Intrusion Detection System watches traffic or hosts and alerts on suspicious activity; an Intrusion Prevention System also blocks it. Testers care because noisy techniques trip these systems and reveal the assessment.

Tools: [Snort](https://terminal.rokibulroni.com/api/v1/tools/monitoring/snort.md), [Suricata](https://terminal.rokibulroni.com/api/v1/tools/monitoring/suricata.md), [Zeek](https://terminal.rokibulroni.com/api/v1/tools/monitoring/zeek.md)

## Kerberoasting

An attack that requests Kerberos service tickets for accounts with a Service Principal Name, then cracks them offline to recover the service account password. Any authenticated domain user can do it, which is what makes it dangerous.

Tools: [Impacket](https://terminal.rokibulroni.com/api/v1/tools/active-directory/impacket.md), [Rubeus](https://terminal.rokibulroni.com/api/v1/tools/active-directory/rubeus.md), [Hashcat](https://terminal.rokibulroni.com/api/v1/tools/credentials/hashcat.md)

See also: Kerberos, AS-REP roasting, Active Directory (AD)

## Kerberos

The ticket-based authentication protocol at the heart of Active Directory. Clients get a ticket-granting ticket from a domain controller, then exchange it for service tickets. Many AD attacks abuse quirks of this flow.

Tools: [Impacket](https://terminal.rokibulroni.com/api/v1/tools/active-directory/impacket.md), [Rubeus](https://terminal.rokibulroni.com/api/v1/tools/active-directory/rubeus.md), [Kerbrute](https://terminal.rokibulroni.com/api/v1/tools/active-directory/kerbrute.md)

See also: Active Directory (AD), Kerberoasting, Golden ticket

## Lateral movement

Moving from one compromised host to others inside a network, usually with stolen credentials over normal admin protocols like SMB, WMI and WinRM. It expands access toward high-value targets.

Tools: [CrackMapExec / NetExec](https://terminal.rokibulroni.com/api/v1/tools/lateral/crackmapexec.md), [PsExec](https://terminal.rokibulroni.com/api/v1/tools/lateral/psexec.md), [Evil-WinRM](https://terminal.rokibulroni.com/api/v1/tools/lateral/evil-winrm.md)

See also: Pass-the-hash, Pivoting

## LLMNR / NBT-NS poisoning

An attack on legacy Windows name-resolution protocols. When a host fails a DNS lookup and broadcasts for help, the attacker answers, the victim authenticates to them, and their NetNTLM hash is captured for cracking or relaying.

Tools: [Responder](https://terminal.rokibulroni.com/api/v1/tools/active-directory/responder.md), [Impacket](https://terminal.rokibulroni.com/api/v1/tools/active-directory/impacket.md)

See also: NTLM, Pass-the-hash, Relay attack

## MITM (man-in-the-middle)

An attacker positioned between two parties so that traffic flows through them, allowing it to be read or altered. On a LAN this is often achieved with ARP spoofing.

Tools: [Ettercap](https://terminal.rokibulroni.com/api/v1/tools/traffic/ettercap.md), [Responder](https://terminal.rokibulroni.com/api/v1/tools/active-directory/responder.md)

See also: Relay attack

## NTLM

A challenge-response authentication protocol still widely used in Windows networks alongside Kerberos. Its hashes can be captured, cracked, relayed, or passed directly to authenticate, which drives many AD attacks.

Tools: [Responder](https://terminal.rokibulroni.com/api/v1/tools/active-directory/responder.md), [CrackMapExec / NetExec](https://terminal.rokibulroni.com/api/v1/tools/lateral/crackmapexec.md), [Impacket](https://terminal.rokibulroni.com/api/v1/tools/active-directory/impacket.md)

See also: Pass-the-hash, Relay attack, Kerberos

## Pass-the-hash

Authenticating to a Windows service using an account’s NTLM hash instead of its plaintext password. Because the hash is the credential for NTLM, cracking is unnecessary — the hash alone grants access.

Tools: [CrackMapExec / NetExec](https://terminal.rokibulroni.com/api/v1/tools/lateral/crackmapexec.md), [Impacket](https://terminal.rokibulroni.com/api/v1/tools/active-directory/impacket.md), [Mimikatz](https://terminal.rokibulroni.com/api/v1/tools/active-directory/mimikatz.md)

See also: NTLM, Hash, Lateral movement

## Password spraying

Trying one or a few common passwords against many accounts, rather than many passwords against one. Spreading attempts across accounts stays under lockout thresholds and often finds at least one weak password.

Tools: [Kerbrute](https://terminal.rokibulroni.com/api/v1/tools/active-directory/kerbrute.md), [CrackMapExec / NetExec](https://terminal.rokibulroni.com/api/v1/tools/lateral/crackmapexec.md), [Hydra](https://terminal.rokibulroni.com/api/v1/tools/credentials/hydra.md)

See also: Brute force, Dictionary attack

## Payload

The code that runs on a target after a vulnerability is triggered — a reverse shell, a Meterpreter session, or a command. Payload generators build these for different platforms and delivery methods.

Tools: [msfvenom](https://terminal.rokibulroni.com/api/v1/tools/exploitation/msfvenom.md), [Metasploit Framework](https://terminal.rokibulroni.com/api/v1/tools/exploitation/metasploit.md)

See also: Exploit, Reverse shell, C2 (Command and Control)

## Pivoting

Using a compromised host as a stepping stone to reach networks you cannot touch directly, by tunnelling or proxying traffic through it. It is how an external foothold becomes internal access.

Tools: [Chisel](https://terminal.rokibulroni.com/api/v1/tools/pivoting/chisel.md), [Ligolo-ng](https://terminal.rokibulroni.com/api/v1/tools/pivoting/ligolo-ng.md), [ProxyChains-NG](https://terminal.rokibulroni.com/api/v1/tools/pivoting/proxychains.md)

See also: Lateral movement, Reverse shell

## Privilege escalation

Gaining higher permissions than you started with — from a normal user to root or SYSTEM (vertical), or to another peer account (horizontal). Local escalation usually exploits misconfiguration more than code bugs.

Tools: [find](https://terminal.rokibulroni.com/api/v1/tools/linux/find.md), [Mimikatz](https://terminal.rokibulroni.com/api/v1/tools/active-directory/mimikatz.md)

See also: SUID, Exploit

## Rainbow table

A precomputed table that maps hashes back to their inputs, trading disk space for cracking speed. Salting passwords defeats rainbow tables by making each hash unique.

Tools: [Hashcat](https://terminal.rokibulroni.com/api/v1/tools/credentials/hashcat.md)

See also: Hash, Dictionary attack

## RCE (remote code execution)

A vulnerability class that lets an attacker run their own commands on a target over the network. It is among the most severe outcomes, since it typically leads straight to a shell.

Tools: [Metasploit Framework](https://terminal.rokibulroni.com/api/v1/tools/exploitation/metasploit.md), [Nuclei](https://terminal.rokibulroni.com/api/v1/tools/web/nuclei.md)

See also: Exploit, Payload, Reverse shell

## Relay attack

Forwarding captured authentication to a third system instead of cracking it, so the attacker is accepted as the victim. NTLM relay is the common form and can escalate to domain compromise.

Tools: [Impacket](https://terminal.rokibulroni.com/api/v1/tools/active-directory/impacket.md), [Responder](https://terminal.rokibulroni.com/api/v1/tools/active-directory/responder.md)

See also: NTLM, LLMNR / NBT-NS poisoning, Pass-the-hash

## Reverse shell

A shell session in which the target connects outbound to the attacker, who is listening, rather than the attacker connecting in. Outbound connections often slip past firewalls that block inbound ones.

Tools: [Netcat](https://terminal.rokibulroni.com/api/v1/tools/utilities/Netcat.md), [socat](https://terminal.rokibulroni.com/api/v1/tools/utilities/socat.md), [msfvenom](https://terminal.rokibulroni.com/api/v1/tools/exploitation/msfvenom.md)

See also: Payload, Pivoting, RCE (remote code execution)

## SBOM

A Software Bill of Materials lists every component and dependency in a piece of software. Generated from images or source, it feeds vulnerability scanners and supports supply-chain security.

Tools: [Syft](https://terminal.rokibulroni.com/api/v1/tools/containers/syft.md), [Trivy](https://terminal.rokibulroni.com/api/v1/tools/containers/trivy.md), [Grype](https://terminal.rokibulroni.com/api/v1/tools/containers/grype.md)

See also: CVE

## SQL injection

A web vulnerability where unsanitised input is placed into a database query, letting an attacker read or modify data, bypass authentication, or sometimes reach the operating system. One of the oldest and most impactful web flaws.

Tools: [sqlmap](https://terminal.rokibulroni.com/api/v1/tools/web/sqlmap.md)

See also: XSS, Fuzzing

## Subdomain

A host under a parent domain, such as mail.example.com. Enumerating subdomains expands the attack surface, often revealing forgotten or less-protected applications.

Tools: [Subfinder](https://terminal.rokibulroni.com/api/v1/tools/web/subfinder.md), [OWASP Amass](https://terminal.rokibulroni.com/api/v1/tools/osint/amass.md), [dnsx](https://terminal.rokibulroni.com/api/v1/tools/web/dnsx.md)

See also: DNS, Enumeration

## Subnet

A logical subdivision of an IP network. A subnet mask or CIDR prefix defines which addresses belong to it. Knowing the subnet tells a scanner the range of hosts to probe.

Tools: [Nmap](https://terminal.rokibulroni.com/api/v1/tools/network/nmap.md), [ip](https://terminal.rokibulroni.com/api/v1/tools/linux/ip.md)

See also: CIDR

## SUID

A Unix permission bit that makes a program run with the privileges of its owner rather than the user who launched it. A SUID-root binary that can be misused is a classic local privilege-escalation route.

Tools: [find](https://terminal.rokibulroni.com/api/v1/tools/linux/find.md)

See also: Privilege escalation

## Wordlist

A file of candidate values — passwords, usernames, directories, subdomains — fed to cracking and fuzzing tools. Good results depend on choosing or building a wordlist that fits the target.

Tools: [Hashcat](https://terminal.rokibulroni.com/api/v1/tools/credentials/hashcat.md), [ffuf](https://terminal.rokibulroni.com/api/v1/tools/web/ffuf.md), [CeWL](https://terminal.rokibulroni.com/api/v1/tools/credentials/cewl.md)

See also: Dictionary attack, Fuzzing, Brute force

## XSS

Cross-site scripting injects attacker-controlled script into pages other users view, running in their browser. It can steal sessions, perform actions as the victim, or deface content.

Tools: [XSSer](https://terminal.rokibulroni.com/api/v1/tools/web/xsser.md), [Nuclei](https://terminal.rokibulroni.com/api/v1/tools/web/nuclei.md)

See also: SQL injection, Fuzzing

## Zone transfer

A DNS mechanism (AXFR) for copying an entire zone between servers. If a name server allows it to anyone, it hands over every record in the domain — an immediate and complete recon win.

Tools: [dig](https://terminal.rokibulroni.com/api/v1/tools/network/dig.md), [dnsrecon](https://terminal.rokibulroni.com/api/v1/tools/network/dnsrecon.md)

See also: DNS, Enumeration
