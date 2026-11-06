---
name: terminal-hub-lateral
description: "Copy-ready Lateral Movement command reference (Remote execution and movement between hosts) covering CrackMapExec / NetExec, PsExec, smbexec, wmiexec, Evil-WinRM, WinRM, RDP clients, SSH. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a lateral movement task from the terminal."
license: MIT
---

# Lateral Movement commands

Techniques for executing commands on other hosts with valid credentials — over SMB, WMI, WinRM, RDP and SSH. These are the same protocols administrators use, which is why defenders watch them closely.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### SMB & WMI Execution

- **CrackMapExec / NetExec** — The Swiss-army knife for Windows networks: spray credentials, execute commands and dump secrets across SMB, WinRM, LDAP and MSSQL. NetExec (nxc) is the maintained fork. [`tools/crackmapexec.md`](tools/crackmapexec.md), 100 commands. Sections: Basic Syntax & Help, Network Discovery, Authentication Testing, Pass-the-Hash, Kerberos Authentication, Enumeration, Spidering, WinRM Usage, +24 more.
- **PsExec** — Running commands on remote Windows hosts via the Service Control Manager — Sysinternals PsExec and Impacket’s psexec.py. [`tools/psexec.md`](tools/psexec.md), 55 commands. Sections: Basic Remote Execution, Authentication Handling, Automation, Privilege Escalation, Interactive Sessions, File Execution, Performance Control, Priority Management, +30 more.
- **smbexec** — Impacket’s smbexec.py: a semi-interactive shell over SMB that creates a service per command instead of uploading a binary. [`tools/smbexec.md`](tools/smbexec.md), 45 commands. Sections: Basic Remote Execution, NTLM Hash Authentication, Authentication Handling, Kerberos Authentication, Service Customization, Execution Mode, Target Specification, Output and Debugging, +24 more.
- **wmiexec** — Impacket’s wmiexec.py: a semi-interactive shell over DCOM/WMI that leaves fewer artefacts than service-based execution. [`tools/wmiexec.md`](tools/wmiexec.md), 30 commands. Sections: Basic Remote Execution, Target Specification, Command Execution Workflows, NTLM Hash Authentication, Kerberos Authentication, Output and Logging, Lateral Movement Simulation, Blue Team Defensive Validation, +5 more.

### Remote Shells

- **Evil-WinRM** — The go-to WinRM shell for penetration testers: upload and download files, load PowerShell scripts and pass the hash. [`tools/evil-winrm.md`](tools/evil-winrm.md), 25 commands. Sections: Basic Remote Connection, Authentication Handling, Transport Security, Target Specification, Advanced Authentication, Key-Based Authentication, Script & Module Loading, Executable Loading, +16 more.
- **WinRM** — Windows Remote Management from Linux and PowerShell: Enter-PSSession, Invoke-Command and service configuration. [`tools/winrm.md`](tools/winrm.md), 60 commands. Sections: Basic Configuration, Service Status, Target Specification, Listener Configuration, Client Configuration, Service Configuration, Interactive Session, Legacy Execution, +22 more.
- **RDP clients** — Connecting to Windows Remote Desktop from Linux with xfreerdp and rdesktop — including pass-the-hash, drive sharing and clipboard. [`tools/rdp.md`](tools/rdp.md), 60 commands. Sections: Basic RDP Syntax, Authentication Handling, Target and Port Specification, Display Configuration, Resource Redirection, Security and Certificate Options, Performance Tuning, Proxy and Gateway Usage, +14 more.
- **SSH** — OpenSSH: secure remote login, key management, file transfer and port forwarding — local, remote and dynamic SOCKS tunnels. [`tools/ssh.md`](tools/ssh.md), 85 commands. Sections: Basic Remote Connection, Target Specification, Transport Options, Authentication Handling, Key-Based Authentication, Configuration Usage, Command Execution, Session Control, +26 more.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/lateral. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/lateral/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
