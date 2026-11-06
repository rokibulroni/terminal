---
name: terminal-hub-containers
description: "Copy-ready Containers command reference (Container image scanning and software bill of materials) covering Trivy, Grype, Clair, Syft. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a containers task from the terminal."
license: MIT
---

# Containers commands

Find known vulnerabilities, secrets and misconfigurations in container images and file systems, and generate SBOMs to track what is inside them.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Vulnerability Scanning

- **Trivy** — Aqua’s all-in-one scanner for vulnerabilities, misconfigurations, secrets and licenses in container images, filesystems, repositories, IaC and Kubernetes. [`tools/trivy.md`](tools/trivy.md), 115 commands. Sections: Basic Usage, Basic Image Scan, Filesystem Scan, Repository Scan, Configuration Scan, Severity Filtering, Vulnerability Filtering, Vulnerability Types, +90 more.
- **Grype** — Anchore’s vulnerability scanner for container images and filesystems; pairs naturally with Syft SBOMs. [`tools/grype.md`](tools/grype.md), 19 commands. Sections: Scanning, Filtering and CI, Output, Database.
- **Clair** — An open-source service for static analysis of vulnerabilities in container images, typically used with registries via clairctl. [`tools/clair.md`](tools/clair.md), 13 commands. Sections: Reports, Server, Offline databases, API.

### SBOM

- **Syft** — Generates a software bill of materials (SBOM) from container images and filesystems in SPDX, CycloneDX and other formats. [`tools/syft.md`](tools/syft.md), 17 commands. Sections: Generating SBOMs, Formats, Inspecting, Attestation.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/containers. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/containers/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
