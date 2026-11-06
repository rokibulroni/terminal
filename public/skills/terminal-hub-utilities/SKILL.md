---
name: terminal-hub-utilities
description: "Copy-ready Utilities command reference (HTTP clients, socket tools, multiplexers and data wrangling) covering Netcat, curl, HTTPie, socat, Wget, GNU Screen, tmux, watch, jq, xargs. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a utilities task from the terminal."
license: MIT
---

# Utilities commands

The everyday utilities every operator leans on: transfer data, relay sockets, keep sessions alive and slice through JSON and text.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Networking Utilities

- **Netcat** — The TCP/IP Swiss-army knife: connect to and listen on ports, transfer files, banner-grab and catch reverse shells. [`tools/Netcat.md`](tools/Netcat.md), 60 commands. Sections: Basic TCP Connections, UDP Connections, Listening Mode, Port Scanning, Banner Grabbing, File Transfer (Receive), File Transfer (Send), Timeout and Connection Control, +35 more.
- **curl** — Transfers data with URLs over HTTP, FTP and many other protocols. Indispensable for testing APIs, headers and authentication. [`tools/curl.md`](tools/curl.md), 150 commands. Sections: Basic Syntax, Redirect Handling, File Handling, HTTP Methods, Data Submission, Query Parameters, Headers, Authentication, +48 more.
- **HTTPie** — A human-friendly HTTP client with intuitive syntax, JSON support and coloured output — great for exploring APIs. [`tools/httpie.md`](tools/httpie.md), 100 commands. Sections: Basic HTTP Request, URL Parameters, Data Submission (JSON), Data Submission (Form), Headers, Data Submission (Files), Authentication, Session Management, +15 more.
- **socat** — A bidirectional data relay between almost any two endpoints — sockets, files, pipes, TLS — ideal for port forwarding and stable shells. [`tools/socat.md`](tools/socat.md), 150 commands. Sections: Basic Syntax & Help, Basic STDIO, Basic File Operations, Basic TCP Client, Basic TCP Server, Basic UDP Client, Basic UDP Server, TCP Server (Persistent), +140 more.
- **Wget** — A non-interactive downloader for HTTP, HTTPS and FTP that can resume, retry and mirror entire websites recursively. [`tools/wget.md`](tools/wget.md), 125 commands. Sections: Basic Usage, Download Resilience, Logging and Output, Bandwidth and Networking, HTTP Headers and User Agent, Authentication, Session Management, Proxy Configuration, +18 more.

### Terminal Sessions

- **GNU Screen** — The original terminal multiplexer: detachable sessions, multiple windows and serial-console access. [`tools/screen.md`](tools/screen.md), 100 commands. Sections: Basic Syntax, Session Management, Internal Navigation, Window Management, Region Management, Copy and Scroll, Configuration, Logging, +18 more.
- **tmux** — A terminal multiplexer: split windows into panes, keep sessions alive after disconnect and script complex layouts. [`tools/tmux.md`](tools/tmux.md), 105 commands. Sections: Session Start, Session Management, Window Management, Pane Management, Copy Mode & Scrollback, Buffer Management, Configuration, Key Bindings, +11 more.
- **watch** — Runs a command repeatedly and shows its output full-screen, highlighting what changes between runs. [`tools/watch.md`](tools/watch.md), 75 commands. Sections: Basic Command Monitoring, Interval and Timing Control, Output and Difference Highlighting, Header and Title Control, Color and Formatting, Error and Exit Handling, Automation and Triggers, Precision and Timing, +15 more.

### Data Processing

- **jq** — A lightweight command-line JSON processor: filter, transform and pretty-print JSON from APIs, logs and tool output. [`tools/jq.md`](tools/jq.md), 120 commands. Sections: Basic Usage, Field Access, Array Operations, Object Construction, Input/Output Control, Structure Analysis, Math & Logic, Transformation, +46 more.
- **xargs** — Builds and runs command lines from standard input — the glue for batch operations and parallel jobs in pipelines. [`tools/xargs.md`](tools/xargs.md), 105 commands. Sections: Basic Syntax, Argument Limiting, Delimiter Control, Input Management, Execution Safety, Argument Replacement, Line Based Processing, Null Termination, +70 more.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/utilities. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/utilities/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
