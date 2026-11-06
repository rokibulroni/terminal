---
name: terminal-hub-wireless
description: "Copy-ready Wireless command reference (Wi-Fi auditing, packet capture and WPA/WPS testing) covering Aircrack-ng, aireplay-ng, airmon-ng, airodump-ng, iw, iwconfig, hostapd, Bully, Reaver. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a wireless task from the terminal."
license: MIT
---

# Wireless commands

Put an adapter into monitor mode, capture handshakes and audit Wi-Fi security. Wireless testing needs a compatible adapter and written permission for the networks involved.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Aircrack-ng Suite

- **Aircrack-ng** — The core of the Aircrack-ng suite: cracks WEP keys and WPA/WPA2-PSK handshakes captured from Wi-Fi networks. [`tools/aircrack-ng.md`](tools/aircrack-ng.md), 80 commands. Sections: Suite Setup & Management, Network Discovery, Capture File Handling, Injection Testing, Red Team Attack Simulation, Basic Aircrack-ng Syntax, WEP Attack Workflows, WPA Cracking Basics, +16 more.
- **aireplay-ng** — Injects 802.11 frames: deauthentication, fake authentication and ARP replay to generate traffic or capture handshakes. [`tools/aireplay-ng.md`](tools/aireplay-ng.md), 55 commands. Sections: Basic Syntax, Injection Capability Test, Deauthentication, Fake Authentication, Interactive Packet Replay, ARP Request Replay, Chopchop Attack, Fragmentation Attack, +29 more.
- **airmon-ng** — Puts wireless interfaces into monitor mode and stops processes that would interfere with packet capture. [`tools/airmon-ng.md`](tools/airmon-ng.md), 55 commands. Sections: Basic Syntax, Interfering Process Management, Monitor Mode Enablement, Monitor Mode Disablement, Output and Logging, Advanced Troubleshooting, Red Team Preparation, Blue Team Defensive Validation, +28 more.
- **airodump-ng** — Captures raw 802.11 frames and lists nearby access points and clients — the first step for handshake capture. [`tools/airodump-ng.md`](tools/airodump-ng.md), 60 commands. Sections: Basic Wireless Monitoring, Interface and Channel Control, Access Point Filtering, Encryption Filtering, Output and Logging, Red Team Reconnaissance, Blue Team Defensive Validation, Display and Visualization Control, +22 more.

### Interface & AP Config

- **iw** — The modern nl80211 tool for configuring Linux wireless devices: scan, set channels, switch modes and inspect capabilities. [`tools/iw.md`](tools/iw.md), 100 commands. Sections: Basic Syntax & Help, Wireless Device Enumeration, Interface Information, Scanning & Discovery, Interface Mode Management, Virtual Interface Management, Frequency & Channel Control, TX Power Configuration, +32 more.
- **iwconfig** — The legacy wireless-extensions tool for viewing and setting interface parameters like mode, channel and power. Prefer iw on modern systems. [`tools/iwconfig.md`](tools/iwconfig.md), 72 commands. Sections: Basic Syntax, Interface Status, ESSID Configuration, Mode Management, Frequency Management, Access Point Targeting, Bitrate Configuration, Power Control, +23 more.
- **hostapd** — A user-space daemon that turns a wireless card into an access point — used for test networks and rogue-AP assessments. [`tools/hostapd.md`](tools/hostapd.md), 60 commands. Sections: Basic Access Point Startup, Logging and Debugging, Configuration File Handling, Open Network Workflow, Interface Management, SSID and Visibility, WPA2-PSK Configuration, WPA Mixed Mode Configuration, +31 more.

### WPS Attacks

- **Bully** — A WPS brute-force tool written in C, an alternative to Reaver with improved handling of some access points. [`tools/bully.md`](tools/bully.md), 50 commands. Sections: Basic Bully Syntax, Interface and Target Specification, WPS PIN Attack Workflows, Timing and Rate Control, Output and Logging, Advanced Configuration, Red Team Attack Simulation, Purple Team Detection, +20 more.
- **Reaver** — Brute-forces WPS PINs to recover WPA/WPA2 passphrases from access points with vulnerable WPS implementations. [`tools/reaver.md`](tools/reaver.md), 45 commands. Sections: Basic Syntax, Basic WPS Attack, Target Specification, Channel Control, Output and Logging, Association Control, Timing Control, Lockout Handling, +27 more.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/wireless. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/wireless/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
