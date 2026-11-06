---
name: terminal-hub-credentials
description: "Copy-ready Credentials command reference (Password cracking, online brute force and wordlist generation) covering Hashcat, John the Ripper, Hydra, Medusa, Ncrack, Patator, CeWL, Crunch, RSMangler. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a credentials task from the terminal."
license: MIT
---

# Credentials commands

Audit password strength offline with GPU and CPU crackers, test login services for weak credentials, and build targeted wordlists. Always work from authorised hash dumps and in-scope services.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Offline Cracking

- **Hashcat** — The world’s fastest GPU password cracker: hundreds of hash types with dictionary, rule, mask and hybrid attack modes. [`tools/hashcat.md`](tools/hashcat.md), 100 commands. Sections: Basic Syntax & Help, Benchmarking, Hash Mode Identification, Basic Dictionary Attack, Rule Based Attack, Mask Attack, Custom Charsets, Hybrid Attack, +27 more.
- **John the Ripper** — A versatile password cracker (use the “jumbo” build) with automatic hash detection and *2john helpers for files, archives and keys. [`tools/john.md`](tools/john.md), 60 commands. Sections: Basic Usage, Installation & Test, Format Identification, Specific Format, Dictionary Attack, Standard Input, Rule Based Attack, Single Crack Mode, +39 more.

### Online Brute Force

- **Hydra** — A fast, parallel online login brute-forcer supporting SSH, FTP, HTTP forms, SMB, RDP, databases and dozens more protocols. [`tools/hydra.md`](tools/hydra.md), 75 commands. Sections: Basic Syntax, Basic Credential Testing, Target Specification, Username and Password Handling, Password Generation, Target Lists, Protocol Specific: RDP, Protocol Specific: SMB, +48 more.
- **Medusa** — A speedy, parallel, modular login brute-forcer — an alternative to Hydra with thread-per-host design. [`tools/medusa.md`](tools/medusa.md), 55 commands. Sections: Basic Syntax & Help, Basic Credential Testing, Target Specification, Username List Usage, Password List Usage, Full Wordlist Attack, Combo File Attack, Port Specification, +44 more.
- **Ncrack** — Nmap project’s high-speed network authentication cracker for RDP, SSH, SMB, FTP and other services, with timing controls. [`tools/ncrack.md`](tools/ncrack.md), 75 commands. Sections: Basic Ncrack Usage, Single Target Testing, Wordlist Based Testing, Target Specification, Protocol Specific - Windows, Protocol Specific - Database, Protocol Specific - Web, Protocol Specific - Mail, +30 more.
- **Patator** — A modular, highly configurable multi-purpose brute-forcer with fine-grained control over responses and retries. [`tools/patator.md`](tools/patator.md), 100 commands. Sections: Basic Credential Testing, Basic Dictionary Attacks, Combinator Attacks, Payload Generation, Web Authentication (Basic), Web Authentication (Digest), Web Authentication (Form), Response Analysis, +68 more.

### Wordlist Generation

- **CeWL** — Spiders a website and builds a custom wordlist from the words it finds — great for targeted password guesses. [`tools/cewl.md`](tools/cewl.md), 60 commands. Sections: Basic Wordlist Generation, Depth Control, Word Length Filtering, Case Handling, Character Handling, Word Counting, Offsite Crawling, Authentication, +29 more.
- **Crunch** — Generates wordlists from character sets and patterns — every combination of a given length, or a precise mask. [`tools/crunch.md`](tools/crunch.md), 100 commands. Sections: Basic Wordlist Generation, Character Set Handling, Pattern Based Generation, Permutation Generation, Output File Control, Start and End Blocks, Handling Duplicates, File Splitting, +45 more.
- **RSMangler** — Takes a wordlist and produces mangled variations — reversals, leetspeak, case changes, appended years — for password attacks. [`tools/rsmangler.md`](tools/rsmangler.md), 45 commands. Sections: Basic Wordlist Mangling, Output Handling, Standard Input/Output, Length Control, Mutation Control, Advanced Combination, Minimal Mutation Workflow, Strict Formatting, +20 more.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/credentials. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/credentials/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
