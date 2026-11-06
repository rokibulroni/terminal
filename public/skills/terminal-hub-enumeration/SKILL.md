---
name: terminal-hub-enumeration
description: "Copy-ready Enumeration command reference (Service enumeration for SMB, LDAP, SNMP and NFS) covering enum4linux, nbtscan, rpcclient, smbclient, CrackMapExec (enumeration), ldapsearch, snmp-check, snmpwalk, NFS enumeration, showmount. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a enumeration task from the terminal."
license: MIT
---

# Enumeration commands

Once you know which services are exposed, enumeration pulls out the details: users, shares, groups, policies and exports. Most of these tools target Windows and directory services.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### SMB & Samba

- **enum4linux** — A wrapper around Samba tools that enumerates users, groups, shares, password policy and OS details from Windows and Samba hosts. [`tools/enum4linux.md`](tools/enum4linux.md), 45 commands. Sections: Basic Enumeration, Verbose Mode, Complete Enumeration, NetBIOS Name Enumeration, OS Information, User Enumeration, Machine Enumeration, Share Enumeration, +37 more.
- **nbtscan** — Scans networks for NetBIOS name information — hostnames, logged-in users and MAC addresses of Windows machines. [`tools/nbtscan.md`](tools/nbtscan.md), 30 commands. Sections: Basic NetBIOS Host Discovery, Single Host Scanning, Range Based Scanning, Multiple Target Scanning, Verbose Output Modes, OS and Server Type Identification, Combined Verbose Enumeration, Quiet and Minimal Output, +22 more.
- **rpcclient** — Samba’s MS-RPC client. Queries domain users, groups, password policies and SIDs over SMB, often with a null or low-privilege session. [`tools/rpcclient.md`](tools/rpcclient.md), 100 commands. Sections: Basic Connection, Authentication, Transport Configuration, Security Options, Batch Mode, Server Information, OS and Server Information, Shares and Resources, +58 more.
- **smbclient** — An FTP-like client for SMB/CIFS shares: list shares, browse, upload and download files, with or without credentials. [`tools/smbclient.md`](tools/smbclient.md), 60 commands. Sections: Share Enumeration, Basic Connection, Domain Authentication, Authentication, Kerberos Authentication, Connection Options, Target Specification, NetBIOS, +38 more.

### LDAP & Active Directory

- **CrackMapExec (enumeration)** — Using CrackMapExec/NetExec to enumerate SMB, LDAP, WinRM and MSSQL across a network: shares, users, sessions, policies and more. [`tools/crackmapexec-enum.md`](tools/crackmapexec-enum.md), 65 commands. Sections: SMB Host Enumeration, Null Session and Anonymous Enumeration, SMB Share Enumeration, SMB User and Group Enumeration, SMB Session and Logged On User Discovery, SMB Password Policy Enumeration, Credential Validation and Authentication Checks, SMB Local Admin Discovery, +13 more.
- **ldapsearch** — The OpenLDAP query client. Dumps users, groups, computers and attributes from LDAP and Active Directory with precise filters. [`tools/ldapsearch.md`](tools/ldapsearch.md), 70 commands. Sections: Basic Connection, Authentication, Security & Encryption, Scope Control, Attribute Selection, Output Formatting, Referrals & Aliases, Performance & Limits, +20 more.

### SNMP

- **snmp-check** — Enumerates SNMP devices and prints a readable report of system info, network interfaces, routes, processes and installed software. [`tools/snmpcheck.md`](tools/snmpcheck.md), 32 commands. Sections: Basic SNMP Enumeration, Target and Transport Specification, Community String Based Enumeration, SNMP Version Selection, System Information Enumeration, Network Interface Enumeration, Red Team Network Reconnaissance, Rate and Performance Control, +13 more.
- **snmpwalk** — Walks an SNMP agent’s MIB tree with GETNEXT requests, retrieving everything the community string exposes. [`tools/snmpwalk.md`](tools/snmpwalk.md), 60 commands. Sections: Basic SNMP Enumeration, OID Based Enumeration, Output Formatting, Rate and Performance Control, MIB Usage and Name Resolution, Advanced Error Handling, Debug and Verbose Modes, Target and Transport Specification, +18 more.

### NFS

- **NFS enumeration** — Enumerating and mounting NFS exports: list shares, check their access controls and mount them to inspect files and permissions. [`tools/nfs-showmount.md`](tools/nfs-showmount.md), 25 commands. Sections: Basic Export Enumeration, Hostname Based Enumeration, Local Host Enumeration, Local Host Enumeration (Explicit), Client Access and Permission Enumeration, Blue Team Exposure Validation, Listing Mounted Directories, Quiet and Script Friendly Output, +11 more.
- **showmount** — Queries an NFS server’s mount daemon for exported directories and which clients may mount them. [`tools/showmount.md`](tools/showmount.md), 20 commands. Sections: Basic Export Enumeration, Hostname and DNS Based Enumeration, Client Access and Permission Enumeration, Listing Mounted Clients, Listing Exported Directories, NFS Server Status Queries, Local Host Enumeration, General Tool Information, +9 more.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/enumeration. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/enumeration/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
