---
name: terminal-hub-mobile
description: "Copy-ready Mobile command reference (Android debugging, APK reversing and runtime instrumentation) covering ADB, Apktool, Frida, objection, drozer. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a mobile task from the terminal."
license: MIT
---

# Mobile commands

Assess mobile apps: talk to devices over ADB, unpack and rebuild APKs, and hook running apps with Frida-based tooling to inspect and bypass client-side controls.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Android Utilities

- **ADB** — Android Debug Bridge: install apps, open a shell, pull files, forward ports and read logs on Android devices and emulators. [`tools/adb.md`](tools/adb.md), 31 commands. Sections: Devices, Shell, Apps, Files and logs, Network and screen.
- **Apktool** — Decodes Android APKs to near-original resources and smali code, and rebuilds them after modification. [`tools/apktool.md`](tools/apktool.md), 16 commands. Sections: Decoding, Reviewing, Rebuilding, Frameworks.

### Instrumentation & Assessment

- **Frida** — A dynamic instrumentation toolkit: inject JavaScript into running processes on Android, iOS, Windows, macOS and Linux to trace and modify behaviour. [`tools/frida.md`](tools/frida.md), 18 commands. Sections: Setup, Discovery, Attaching and spawning, Tracing, Snippets.
- **objection** — A runtime mobile-exploration toolkit powered by Frida: bypass SSL pinning, explore the file system and dump keychains without a jailbreak. [`tools/objection.md`](tools/objection.md), 19 commands. Sections: Starting, Bypasses, Exploring.
- **drozer** — A security-testing framework for Android that interacts with app components — activities, providers, services — over IPC to find weaknesses. [`tools/drozer.md`](tools/drozer.md), 18 commands. Sections: Connecting, Recon, Activities and services, Content providers.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/mobile. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/mobile/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
