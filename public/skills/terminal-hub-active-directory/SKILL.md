---
name: terminal-hub-active-directory
description: "Copy-ready Active Directory command reference (Windows domain attacks: Kerberos, credentials, relaying and attack paths) covering Impacket, CrackMapExec / NetExec, Kerbrute, Certipy, Mimikatz, Rubeus, BloodHound.py, Responder. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a active directory task from the terminal."
license: MIT
---

# Active Directory commands

Attacking and auditing Windows Active Directory environments: enumerate the domain, roast and spray Kerberos, relay NTLM, dump credentials and map attack paths to Domain Admin. For authorised engagements against domains you are permitted to test.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Protocol Toolkits

- **Impacket** — A collection of Python classes and ready-made scripts for Windows network protocols (SMB, MS-RPC, Kerberos, LDAP) — the backbone of modern Active Directory exploitation. [`tools/impacket.md`](tools/impacket.md), 13 commands. Sections: Credentials & hashes, Kerberos attacks, Remote execution, Relaying & databases.
- **CrackMapExec / NetExec** — The Swiss-army knife for Windows networks: spray credentials, execute commands and dump secrets across SMB, WinRM, LDAP and MSSQL. NetExec (nxc) is the maintained fork. [`tools/crackmapexec.md`](tools/crackmapexec.md), 100 commands. Sections: Basic Syntax & Help, Network Discovery, Authentication Testing, Pass-the-Hash, Kerberos Authentication, Enumeration, Spidering, WinRM Usage, +24 more.

### Kerberos & Credentials

- **Kerbrute** — A fast Go tool for Kerberos pre-authentication: username enumeration and password spraying against a domain controller, with no Windows event 4625 noise. [`tools/kerbrute.md`](tools/kerbrute.md), 5 commands. Sections: Enumeration, Password attacks, Output.
- **Certipy** — A tool for enumerating and abusing Active Directory Certificate Services (AD CS) — vulnerable templates, certificate theft and shadow credentials. [`tools/certipy.md`](tools/certipy.md), 6 commands. Sections: Enumeration, Abuse (ESC1), Shadow credentials & more.
- **Mimikatz** — The classic Windows post-exploitation tool for extracting plaintext passwords, hashes and Kerberos tickets from memory, and for pass-the-hash, pass-the-ticket and golden-ticket attacks. [`tools/mimikatz.md`](tools/mimikatz.md), 11 commands. Sections: Credentials, Kerberos tickets, Pass-the-hash.
- **Rubeus** — A C# toolset for raw Kerberos interaction and abuse on Windows: ticket requests, Kerberoasting, AS-REP roasting, pass-the-ticket and delegation attacks. [`tools/rubeus.md`](tools/rubeus.md), 7 commands. Sections: Ticket requests, Roasting, Harvesting & abuse.

### Enumeration & Relaying

- **BloodHound.py** — A Python ingestor for BloodHound that collects Active Directory objects, ACLs and sessions from Linux, revealing attack paths to high-value targets. [`tools/bloodhound-python.md`](tools/bloodhound-python.md), 8 commands. Sections: Collection, Using the data.
- **Responder** — An LLMNR, NBT-NS and mDNS poisoner that captures Windows authentication hashes on a local network, and a staging ground for NTLM relay attacks. [`tools/responder.md`](tools/responder.md), 8 commands. Sections: Poisoning, Relaying setup, Loot.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/active-directory. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/active-directory/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
