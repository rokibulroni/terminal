---
name: terminal-hub-traffic
description: "Copy-ready Traffic Analysis command reference (Packet capture, protocol analysis and traffic replay) covering tcpdump, TShark, Wireshark CLI tools, netsniff-ng, ngrep, Tcpreplay, Ettercap, Sniffit. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a traffic analysis task from the terminal."
license: MIT
---

# Traffic Analysis commands

Capture packets, filter them down to what matters and dissect protocols. Includes interception tools for authorised man-in-the-middle testing.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Packet Capture & Analysis

- **tcpdump** — The classic packet capture tool: capture and filter traffic with BPF expressions and write it to pcap files for later analysis. [`tools/TCPDump.md`](tools/TCPDump.md), 85 commands. Sections: Interface Selection, Basic Capture, Output Formatting, Capture Count, Verbosity, Quiet Output, Link Layer, Packet Display, +39 more.
- **TShark** — Wireshark’s terminal version: capture and decode traffic with full dissectors and display filters, and extract fields to text. [`tools/tshark.md`](tools/tshark.md), 100 commands. Sections: Basic Packet Capture, Packet Count and Duration Control, Writing Capture Files, Reading PCAP Files, Capture Filters (BPF), Display Filters, Output Formats, Timestamp and Time Format Control, +20 more.
- **Wireshark CLI tools** — The utilities that ship with Wireshark — editcap, mergecap, capinfos, dumpcap and text2pcap — for working with capture files. [`tools/wireshark-cli.md`](tools/wireshark-cli.md), 100 commands. Sections: Setup and Info, Interface Listing, File Metadata, Basic Capture, Capture Limits, Ring Buffer, Capture Filters, Promiscuous Mode, +45 more.
- **netsniff-ng** — A high-performance Linux networking toolkit using zero-copy packet mmap: capture, replay, traffic generation and analysis. [`tools/netsniff-ng.md`](tools/netsniff-ng.md), 45 commands. Sections: Basic Packet Capture, Console Output Formatting, Quiet and Silent Mode, Promiscuous Mode Control, Writing PCAP Files, Reading PCAP Files, Traffic Replay, Replay Timing Control, +29 more.
- **ngrep** — “Network grep” — matches regular expressions against packet payloads, like grep for network traffic. [`tools/ngrep.md`](tools/ngrep.md), 100 commands. Sections: Basic Pattern Matching, Interface Selection, Quiet Mode, Case Insensitive Matching, Invert Matching, Word Boundary Matching, Port Filtering, Host Filtering, +58 more.
- **Tcpreplay** — Replays captured pcap traffic onto a network at chosen speeds — useful for testing IDS rules and network devices. [`tools/tcpreplay.md`](tools/tcpreplay.md), 50 commands. Sections: General Information, Interface Selection, Basic Replay, Replay Speed Control, Packet Rate Limiting, Bandwidth Limiting, Preload and Caching, Looping and Continuous, +23 more.

### MITM & Sniffing

- **Ettercap** — A suite for man-in-the-middle attacks on LANs: ARP poisoning, sniffing and content filtering, for authorised testing. [`tools/ettercap.md`](tools/ettercap.md), 60 commands. Sections: Basic Usage, Interface Selection, Basic Passive Sniffing, Text, Curses, and Daemon Modes, Quiet, Verbose, and Debug Modes, Promiscuous Mode Control, Blue Team Detection and Validation, Logging and Output Files, +23 more.
- **Sniffit** — A legacy packet sniffer with an interactive ncurses mode for watching TCP sessions in real time. [`tools/sniffit.md`](tools/sniffit.md), 60 commands. Sections: Basic Capture, Interface Selection, Host and Port Filtering, Protocol Selection, ASCII and Hex Output, Output Formatting, Performance and Buffer Control, Logging and File Output, +13 more.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/traffic. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/traffic/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
