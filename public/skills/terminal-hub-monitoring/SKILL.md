---
name: terminal-hub-monitoring
description: "Copy-ready Monitoring command reference (IDS/IPS, endpoint telemetry and log-driven defence) covering Snort, Suricata, Zeek, auditd, osquery, Sysmon, Wazuh agent, Fail2ban. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a monitoring task from the terminal."
license: MIT
---

# Monitoring commands

The defender’s toolbox: network intrusion detection, endpoint auditing and automated response. Useful for blue teams, and for red teams who want to understand what their activity looks like.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Network IDS / IPS

- **Snort** — A network intrusion detection and prevention system that inspects traffic in real time against a rule language. [`tools/snort.md`](tools/snort.md), 75 commands. Sections: Basic Snort Syntax, Sniffer Mode Operation, Interface Selection, Packet Logger Mode, Configuration File Usage, Network Intrusion Detection Mode, Alert Generation, Packet Capture Handling, +22 more.
- **Suricata** — A high-performance, multi-threaded IDS/IPS and network security monitoring engine with EVE JSON logging. [`tools/suricata.md`](tools/suricata.md), 65 commands. Sections: General Information, Configuration Testing, Basic Packet Capture, Offline Analysis, Configuration Management, Logging & Output, Rule Management, Filtering & BPF, +25 more.
- **Zeek** — A network security monitor that turns traffic into rich, structured logs of connections, DNS, HTTP, TLS and files. [`tools/zeek.md`](tools/zeek.md), 60 commands. Sections: Basic Syntax & Help, Interface Selection, Offline Analysis, Configuration, Policy Management, Filtering, Logging Formats, File Analysis, +25 more.

### Endpoint & Auditing

- **auditd** — The Linux Audit daemon: records system calls, file access and command execution according to rules, for compliance and detection. [`tools/auditd.md`](tools/auditd.md), 150 commands. Sections: Service Management, Audit Control, Rule Management, File Monitoring, Syscall Auditing, User Monitoring, Filter Optimization, Network Auditing, +24 more.
- **osquery** — Exposes the operating system as a SQL database: query processes, users, ports, packages and more across Linux, macOS and Windows. [`tools/osquery.md`](tools/osquery.md), 85 commands. Sections: Interactive Query Shell, System Information, User & Account Auditing, Process Monitoring, Network Analysis, File System Inspection, Software & Packages, Persistence Mechanisms, +17 more.
- **Sysmon** — Microsoft Sysinternals System Monitor: logs process creation, network connections, file changes and more to the Windows (and Linux) event log. [`tools/sysmon.md`](tools/sysmon.md), 75 commands. Sections: Basic Help, Schema Information, Sysmon Installation, Configuration Management, Driver Management, Advanced Installation, Service Management, Driver Verification, +44 more.
- **Wazuh agent** — The endpoint agent for the open-source Wazuh SIEM/XDR: log collection, file-integrity monitoring and vulnerability detection. [`tools/wazuh-agent.md`](tools/wazuh-agent.md), 60 commands. Sections: Service Management, Service Management (Windows), Service Management (Legacy), Agent Registration, Key Management, Configuration Handling, Log Collection, Network Monitoring, +23 more.

### Active Response

- **Fail2ban** — Watches log files for repeated failures — SSH, web logins, mail — and bans offending IPs with firewall rules. [`tools/fail2ban.md`](tools/fail2ban.md), 105 commands. Sections: Service Management, Client Connectivity, Global Status, Global Operations, Jail Inspection, Jail Management, Logging Configuration, Database Operations, +34 more.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/monitoring. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/monitoring/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
