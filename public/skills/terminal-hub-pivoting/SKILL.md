---
name: terminal-hub-pivoting
description: "Copy-ready Pivoting & Tunneling command reference (Proxies and tunnels for reaching internal networks through a foothold) covering Chisel, Ligolo-ng, sshuttle, ProxyChains-NG. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a pivoting & tunneling task from the terminal."
license: MIT
---

# Pivoting & Tunneling commands

Once you have a foothold, pivoting tools route your traffic deeper into a network. Build SOCKS proxies, forward ports and tunnel whole subnets through a compromised host — always within the agreed scope.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Tunnels & Proxies

- **Chisel** — A fast TCP/UDP tunnel over HTTP secured with SSH, in a single Go binary — used to build SOCKS proxies and port forwards through firewalls during pivoting. [`tools/chisel.md`](tools/chisel.md), 7 commands. Sections: Server (attacker), Reverse SOCKS proxy, Port forwards.
- **Ligolo-ng** — A modern tunneling tool that exposes internal networks through a lightweight TUN interface — pivot without proxychains, using normal routing. [`tools/ligolo-ng.md`](tools/ligolo-ng.md), 9 commands. Sections: Proxy (attacker), Agent (compromised host), Routing (in the proxy console).
- **sshuttle** — A transparent proxy that tunnels a whole subnet over a plain SSH connection, with DNS support and no special software on the remote host. [`tools/sshuttle.md`](tools/sshuttle.md), 7 commands. Sections: Basics, Options.

### Proxy Clients

- **ProxyChains-NG** — Forces any program’s TCP traffic through a chain of SOCKS or HTTP proxies — the standard way to run tools across a SOCKS pivot. [`tools/proxychains.md`](tools/proxychains.md), 8 commands. Sections: Configuration, Running tools, Tips.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/pivoting. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/pivoting/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
