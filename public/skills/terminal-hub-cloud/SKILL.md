---
name: terminal-hub-cloud
description: "Copy-ready Cloud command reference (AWS, Azure and GCP CLIs plus Kubernetes and Docker security) covering AWS CLI, Azure CLI, Google Cloud CLI, kube-bench, kube-hunter, kubectl, Docker Bench for Security, Docker, Trivy. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a cloud task from the terminal."
license: MIT
---

# Cloud commands

Operate and audit cloud accounts from the command line, and assess Kubernetes clusters and Docker hosts against hardening benchmarks.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Cloud Providers

- **AWS CLI** — Amazon’s official command line for AWS: manage IAM, S3, EC2, Lambda and every other service, and audit an account’s configuration. [`tools/awscli.md`](tools/awscli.md), 92 commands. Sections: Basic Syntax & Version, Configuration, Identity (STS), IAM (Users), IAM (Roles), IAM (Policies), IAM (Security), S3 (Storage), +53 more.
- **Azure CLI** — Microsoft’s cross-platform CLI for Azure: manage subscriptions, Entra ID, VMs, storage and networking, and review security posture. [`tools/az-cli.md`](tools/az-cli.md), 160 commands. Sections: Basic Syntax and Help, Configuration, Extensions, Authentication, Subscription Management, Resource Group Management, Compute Operations, Network Management, +60 more.
- **Google Cloud CLI** — The gcloud CLI for Google Cloud: manage projects, IAM, Compute Engine, GKE and storage from the terminal. [`tools/gcloud.md`](tools/gcloud.md), 160 commands. Sections: Basic Setup, Authentication, Configuration, Project Management, Identity & Access (IAM), Compute Engine, Networking, Cloud Storage, +60 more.

### Kubernetes Security

- **kube-bench** — Checks whether a Kubernetes cluster is deployed securely by running the CIS Kubernetes Benchmark tests against nodes and control plane. [`tools/kube-bench.md`](tools/kube-bench.md), 60 commands. Sections: Basic Execution, Target Selection, Output Formatting, Specific Checks, Skipping Checks, Benchmark Versions, Cloud Specific, Version Override, +25 more.
- **kube-hunter** — Hunts for security weaknesses in Kubernetes clusters from inside or outside, reporting exposed components and known issues. Archived upstream but still informative. [`tools/kube-hunter.md`](tools/kube-hunter.md), 60 commands. Sections: Basic Execution, Remote Scanning, Local Scanning, Active Hunting, Reporting and Output, Targeted Hunting, Internal/Pod Mode, Automation & Integration, +18 more.
- **kubectl** — The Kubernetes command line: inspect and manage clusters, workloads, RBAC and secrets — and check what an identity is allowed to do. [`tools/kubectl.md`](tools/kubectl.md), 125 commands. Sections: Basic Syntax & Help, Cluster Information, Context & Configuration, Namespace Management, Resource Inspection (Basic), Resource Inspection (Detail), Imperative Creation, Debugging & Interaction, +28 more.

### Container Security

- **Docker Bench for Security** — A script that checks a Docker host against dozens of CIS Docker Benchmark best practices for production deployments. [`tools/docker-bench-security.md`](tools/docker-bench-security.md), 50 commands. Sections: Basic Execution, Output and Reporting, Host and Daemon Configuration, Image and Build Configuration, Container and Runtime Security, Specific Check Targeting, Excluding Checks, Image Filter, +17 more.
- **Docker** — The Docker CLI: build, run and inspect containers and images, and audit their configuration, mounts, capabilities and networks. [`tools/docker.md`](tools/docker.md), 140 commands. Sections: Basic Setup and Verification, Image Management, Container Lifecycle, Container Interaction, Container Inspection, Networking, Storage and Volumes, Building Images, +23 more.
- **Trivy** — Aqua’s all-in-one scanner for vulnerabilities, misconfigurations, secrets and licenses in container images, filesystems, repositories, IaC and Kubernetes. [`tools/trivy.md`](tools/trivy.md), 115 commands. Sections: Basic Usage, Basic Image Scan, Filesystem Scan, Repository Scan, Configuration Scan, Severity Filtering, Vulnerability Filtering, Vulnerability Types, +90 more.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/cloud. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/cloud/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
