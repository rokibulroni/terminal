# Trivy

> Aqua’s all-in-one scanner for vulnerabilities, misconfigurations, secrets and licenses in container images, filesystems, repositories, IaC and Kubernetes.

- Category: Containers
- Commands: 115
- Page: https://terminal.rokibulroni.com/tool/containers/trivy
- Homepage: https://trivy.dev
- Documentation: https://trivy.dev/latest/docs/
- Tags: vulnerability scanning, containers, IaC, SBOM

## Install

- apt: `sudo apt install trivy`
- brew: `brew install trivy`
- docker: `docker run --rm aquasec/trivy image <image>`

## Basic Usage

### trivy --help

```bash
trivy --help
```

Displays the main help menu and available subcommands for Trivy.

### trivy version

```bash
trivy version
```

Checks the installed version of Trivy to ensure it is up to date.


## Basic Image Scan

### trivy image [IMAGE_NAME]

```bash
trivy image [IMAGE_NAME]
```

Example:

```bash
trivy image alpine:latest
```

Performs a standard vulnerability scan on a container image using the default database.

### trivy image [IMAGE_ID]

```bash
trivy image [IMAGE_ID]
```

Example:

```bash
trivy image 9c6f07244728
```

Scans a local container image referenced by its specific Image ID.


## Filesystem Scan

### trivy fs [DIRECTORY]

```bash
trivy fs [DIRECTORY]
```

Example:

```bash
trivy fs .
```

Scans the current directory and subdirectories for dependencies and lock files.


## Repository Scan

### trivy repo [REPO_URL]

```bash
trivy repo [REPO_URL]
```

Example:

```bash
trivy repo https://github.com/knqyf263/trivy-ci-test
```

Clones and scans a remote Git repository for vulnerabilities in one step.


## Configuration Scan

### trivy config [DIRECTORY]

```bash
trivy config [DIRECTORY]
```

Example:

```bash
trivy config ./k8s-manifests
```

Scans Infrastructure as Code (IaC) files like Terraform and Kubernetes manifests for misconfigurations.


## Severity Filtering

### trivy image --severity [LEVELS] [IMAGE]

```bash
trivy image --severity [LEVELS] [IMAGE]
```

Example:

```bash
trivy image --severity HIGH,CRITICAL nginx:latest
```

Filters scan results to show only vulnerabilities matching the specified severity levels.


## Vulnerability Filtering

### trivy image --ignore-unfixed [IMAGE]

```bash
trivy image --ignore-unfixed [IMAGE]
```

Example:

```bash
trivy image --ignore-unfixed python:3.9
```

Hides vulnerabilities that do not yet have a patch or fix available.


## Vulnerability Types

### trivy image --vuln-type [TYPES] [IMAGE]

```bash
trivy image --vuln-type [TYPES] [IMAGE]
```

Example:

```bash
trivy image --vuln-type os debian:buster
```

Restricts the scan to Operating System package vulnerabilities only.

### trivy image --vuln-type library [IMAGE]

```bash
trivy image --vuln-type library [IMAGE]
```

Example:

```bash
trivy image --vuln-type library node:14
```

Restricts the scan to application dependency vulnerabilities (e.g., npm, pip, gomod).


## Secrets Scanning

### trivy fs --scanners secret [DIRECTORY]

```bash
trivy fs --scanners secret [DIRECTORY]
```

Example:

```bash
trivy fs --scanners secret ./src
```

Scans the filesystem specifically for hardcoded secrets, keys, and passwords.


## License Scanning

### trivy fs --scanners license [DIRECTORY]

```bash
trivy fs --scanners license [DIRECTORY]
```

Example:

```bash
trivy fs --scanners license ./src
```

Scans the filesystem to classify and detect software licenses in dependencies.


## Combined Scanners

### trivy image --scanners vuln,secret,misconfig [IMAGE]

```bash
trivy image --scanners vuln,secret,misconfig [IMAGE]
```

Example:

```bash
trivy image --scanners vuln,secret,misconfig my-app:latest
```

Runs vulnerability, secret detection, and misconfiguration scans simultaneously on an image.


## Output Formatting

### trivy image --format json --output [FILE] [IMAGE]

```bash
trivy image --format json --output [FILE] [IMAGE]
```

Example:

```bash
trivy image --format json --output result.json alpine:latest
```

Outputs the scan results in raw JSON format to a specified file.

### trivy image --format table [IMAGE]

```bash
trivy image --format table [IMAGE]
```

Example:

```bash
trivy image --format table alpine:latest
```

Displays scan results in a human-readable table format in the terminal (default).

### trivy image --format sarif --output [FILE] [IMAGE]

```bash
trivy image --format sarif --output [FILE] [IMAGE]
```

Example:

```bash
trivy image --format sarif --output results.sarif golang:1.16
```

Generates a SARIF report suitable for integration with GitHub Security code scanning.


## SBOM Generation

### trivy image --format cyclonedx --output [FILE] [IMAGE]

```bash
trivy image --format cyclonedx --output [FILE] [IMAGE]
```

Example:

```bash
trivy image --format cyclonedx --output sbom.json node:lts
```

Generates a CycloneDX Software Bill of Materials (SBOM) from a container image.

### trivy image --format spdx-json --output [FILE] [IMAGE]

```bash
trivy image --format spdx-json --output [FILE] [IMAGE]
```

Example:

```bash
trivy image --format spdx-json --output sbom.spdx.json python:3.8
```

Generates an SPDX JSON Software Bill of Materials (SBOM) from a container image.


## SBOM Scanning

### trivy sbom [FILE]

```bash
trivy sbom [FILE]
```

Example:

```bash
trivy sbom ./sbom.json
```

Scans a pre-generated SBOM file for vulnerabilities without re-analyzing the original image.


## CI/CD Integration

### trivy image --exit-code 1 --severity CRITICAL [IMAGE]

```bash
trivy image --exit-code 1 --severity CRITICAL [IMAGE]
```

Example:

```bash
trivy image --exit-code 1 --severity CRITICAL web-app:v1
```

Forces the process to exit with code 1 if CRITICAL vulnerabilities are found, breaking the build.

### trivy image --exit-code 0 --severity HIGH [IMAGE]

```bash
trivy image --exit-code 0 --severity HIGH [IMAGE]
```

Example:

```bash
trivy image --exit-code 0 --severity HIGH web-app:v1
```

Logs HIGH severity vulnerabilities but exits with code 0 to allow the build pipeline to continue.


## Ignore Files

### trivy image --ignorefile [FILE] [IMAGE]

```bash
trivy image --ignorefile [FILE] [IMAGE]
```

Example:

```bash
trivy image --ignorefile .trivyignore alpine:latest
```

Scans an image while excluding specific vulnerabilities defined in a .trivyignore file.


## Database Management

### trivy image --download-db-only

```bash
trivy image --download-db-only
```

Downloads the vulnerability database to the cache without performing a scan.

### trivy image --reset

```bash
trivy image --reset
```

Resets the vulnerability database and clears the cache to fix corruption or force an update.


## Offline Scanning

### trivy image --offline-scan [IMAGE]

```bash
trivy image --offline-scan [IMAGE]
```

Example:

```bash
trivy image --offline-scan centos:7
```

Scans using the currently cached database without attempting to reach the internet.


## Skipping Resources

### trivy image --skip-db-update [IMAGE]

```bash
trivy image --skip-db-update [IMAGE]
```

Example:

```bash
trivy image --skip-db-update redis:alpine
```

Skips the vulnerability database update step to speed up repeated scans.

### trivy fs --skip-dirs [DIRS] [PATH]

```bash
trivy fs --skip-dirs [DIRS] [PATH]
```

Example:

```bash
trivy fs --skip-dirs node_modules,dist .
```

Excludes specified directories from the filesystem scan to reduce noise and time.

### trivy fs --skip-files [FILES] [PATH]

```bash
trivy fs --skip-files [FILES] [PATH]
```

Example:

```bash
trivy fs --skip-files package-lock.json .
```

Excludes specific files from being parsed during a filesystem scan.


## Archive Scanning

### trivy image --input [FILE]

```bash
trivy image --input [FILE]
```

Example:

```bash
trivy image --input image.tar
```

Scans a container image exported as a tar archive (e.g., from docker save).


## Private Registry

### trivy image [REGISTRY_IMAGE]

```bash
trivy image [REGISTRY_IMAGE]
```

Example:

```bash
export TRIVY_USERNAME=user TRIVY_PASSWORD=pass; trivy image private.registry.com/app:v1
```

Scans an image from a private registry using environment variables for authentication.


## Kubernetes Scanning

### trivy k8s cluster --report summary

```bash
trivy k8s cluster --report summary
```

Scans the entire connected Kubernetes cluster and outputs a summary report.

### trivy k8s --namespace [NS] all

```bash
trivy k8s --namespace [NS] all
```

Example:

```bash
trivy k8s --namespace kube-system all
```

Scans all resources (pods, deployments, services) within a specific Kubernetes namespace.

### trivy k8s --include-namespaces [NS] cluster

```bash
trivy k8s --include-namespaces [NS] cluster
```

Example:

```bash
trivy k8s --include-namespaces prod,staging cluster
```

Restricts the cluster scan to only the specified namespaces.

### trivy k8s resource [KIND]/[NAME]

```bash
trivy k8s resource [KIND]/[NAME]
```

Example:

```bash
trivy k8s resource deployment/nginx-app
```

Scans a specific Kubernetes resource type and name found in the active cluster.


## AWS Cloud Scanning

### trivy aws --region [REGION] --service [SERVICE]

```bash
trivy aws --region [REGION] --service [SERVICE]
```

Example:

```bash
trivy aws --region us-east-1 --service s3
```

Scans AWS S3 bucket configurations in the specified region for security issues.

### trivy aws --service ec2

```bash
trivy aws --service ec2
```

Scans AWS EC2 instances and security groups for misconfigurations.

### trivy aws --arn [ARN]

```bash
trivy aws --arn [ARN]
```

Example:

```bash
trivy aws --arn arn:aws:s3:::my-bucket
```

Scans a specific AWS resource identified by its Amazon Resource Name (ARN).


## VM Scanning

### trivy vm [IMAGE_FILE]

```bash
trivy vm [IMAGE_FILE]
```

Example:

```bash
trivy vm disk.qcow2
```

Scans a virtual machine disk image (QCOW2, VMDK, etc.) for OS vulnerabilities.


## Detailed Output

### trivy image --list-all-pkgs [IMAGE]

```bash
trivy image --list-all-pkgs [IMAGE]
```

Example:

```bash
trivy image --list-all-pkgs ubuntu:20.04
```

Outputs all detected packages in the image, regardless of whether they have vulnerabilities.


## Template Reporting

### trivy image --format template --template "@[PATH]" [IMAGE]

```bash
trivy image --format template --template "@[PATH]" [IMAGE]
```

Example:

```bash
trivy image --format template --template "@contrib/html.tpl" -o report.html alpine
```

Generates a report using a custom Go template (e.g., HTML) for visualization.


## Policy Check

### trivy config --policy [DIR] [TARGET]

```bash
trivy config --policy [DIR] [TARGET]
```

Example:

```bash
trivy config --policy ./policies ./terraform
```

Applies custom Rego policies located in a directory to the configuration scan.


## Policy Namespaces

### trivy config --policy-namespaces [NS] [TARGET]

```bash
trivy config --policy-namespaces [NS] [TARGET]
```

Example:

```bash
trivy config --policy-namespaces user.kubernetes .
```

Restricts custom policy evaluation to specific Rego namespaces.


## Module Scanning

### trivy rootfs [DIR]

```bash
trivy rootfs [DIR]
```

Example:

```bash
trivy rootfs /mnt/host-root
```

Scans an unpacked root filesystem directly, often used for host OS scanning.


## Cache Management

### trivy clean --scan-cache

```bash
trivy clean --scan-cache
```

Clears the artifact scan cache to force re-analysis of previously scanned images.

### trivy clean --all

```bash
trivy clean --all
```

Removes all caches, including the vulnerability database and scan results.


## Server Mode

### trivy server --listen [ADDRESS]

```bash
trivy server --listen [ADDRESS]
```

Example:

```bash
trivy server --listen 0.0.0.0:8080
```

Starts Trivy in server mode to handle scan requests from remote clients.


## Client Mode

### trivy client --remote [URL] [IMAGE]

```bash
trivy client --remote [URL] [IMAGE]
```

Example:

```bash
trivy client --remote http://localhost:8080 alpine:latest
```

Sends a scan request to a remote Trivy server instead of using a local database.


## Client Mode Authentication

### trivy client --token [TOKEN] --remote [URL] [IMAGE]

```bash
trivy client --token [TOKEN] --remote [URL] [IMAGE]
```

Example:

```bash
trivy client --token MySecretToken --remote http://localhost:8080 alpine
```

Connects to a protected Trivy server using a token header for authentication.


## Containerized Scan

### docker run aquasec/trivy [COMMAND]

```bash
docker run aquasec/trivy [COMMAND]
```

Example:

```bash
docker run --rm -v /var/run/docker.sock:/var/run/docker.sock aquasec/trivy image python:3
```

Runs Trivy itself inside a Docker container, mounting the host's Docker socket to scan sibling containers.


## History Filtering

### trivy image --history [IMAGE]

```bash
trivy image --history [IMAGE]
```

Example:

```bash
trivy image --history my-app:latest
```

Analyzes the build history of the container image to associate vulnerabilities with specific layers.


## Compliance Scanning

### trivy k8s --compliance [STANDARD] --report summary

```bash
trivy k8s --compliance [STANDARD] --report summary
```

Example:

```bash
trivy k8s --compliance nsa --report summary
```

Scans the Kubernetes cluster against a specific compliance standard like NSA or CIS.


## Insecure Registry

### trivy image --insecure [IMAGE]

```bash
trivy image --insecure [IMAGE]
```

Example:

```bash
trivy image --insecure internal-registry.local/image:tag
```

Allows scanning images from a registry that uses self-signed SSL certificates or HTTP.


## Timeout Control

### trivy image --timeout [DURATION] [IMAGE]

```bash
trivy image --timeout [DURATION] [IMAGE]
```

Example:

```bash
trivy image --timeout 15m node:latest
```

Sets a custom timeout duration for the scan operation to prevent hanging in pipelines.


## Java DB

### trivy image --download-java-db-only

```bash
trivy image --download-java-db-only
```

Downloads only the Java index database used for scanning JAR/WAR files.


## Secrets Config

### trivy fs --secret-config [FILE] [DIR]

```bash
trivy fs --secret-config [FILE] [DIR]
```

Example:

```bash
trivy fs --secret-config trivy-secret.yaml .
```

Uses a custom configuration file to define regex patterns for secret detection.


## Output Suppression

### trivy image --quiet [IMAGE]

```bash
trivy image --quiet [IMAGE]
```

Example:

```bash
trivy image --quiet alpine:latest
```

Suppresses the progress bar and log messages, outputting only the final report.


## Helm Chart Scanning

### trivy config [CHART_DIR]

```bash
trivy config [CHART_DIR]
```

Example:

```bash
trivy config ./my-helm-chart
```

Scans Helm chart templates for security misconfigurations and best practice violations.


## Cloud Formation Scanning

### trivy config [TEMPLATE_FILE]

```bash
trivy config [TEMPLATE_FILE]
```

Example:

```bash
trivy config template.yaml
```

Scans AWS CloudFormation templates for infrastructure security risks.


## Vulnerability Database URL

### trivy image --db-repository [URL] [IMAGE]

```bash
trivy image --db-repository [URL] [IMAGE]
```

Example:

```bash
trivy image --db-repository ghcr.io/aquasecurity/trivy-db alpine
```

Specifies a custom OCI registry URL to download the vulnerability database from.


## Rekor Attestation

### trivy image --rekor-url [URL] [IMAGE]

```bash
trivy image --rekor-url [URL] [IMAGE]
```

Example:

```bash
trivy image --rekor-url https://rekor.sigstore.dev alpine
```

Verifies the image attestation against a specified Rekor transparency log server.


## Vulnerability Prioritization

### trivy image --vex [FILE] [IMAGE]

```bash
trivy image --vex [FILE] [IMAGE]
```

Example:

```bash
trivy image --vex openvex.json alpine
```

Uses a VEX (Vulnerability Exploitability Exchange) file to filter out non-exploitable vulnerabilities.


## Module Scan - Go

### trivy fs --scanners vuln [GO_PROJECT]

```bash
trivy fs --scanners vuln [GO_PROJECT]
```

Example:

```bash
trivy fs --scanners vuln ./go-app
```

Scans a Go project directory, parsing go.mod and go.sum for dependency vulnerabilities.


## Module Scan - Python

### trivy fs [PYTHON_PROJECT]

```bash
trivy fs [PYTHON_PROJECT]
```

Example:

```bash
trivy fs ./python-app
```

Scans a Python project, identifying vulnerabilities in requirements.txt, Pipfile.lock, or poetry.lock.


## Custom Cache Dir

### trivy image --cache-dir [DIR] [IMAGE]

```bash
trivy image --cache-dir [DIR] [IMAGE]
```

Example:

```bash
trivy image --cache-dir /tmp/trivy-cache alpine
```

Specifies a custom directory for storing the vulnerability database and artifact cache.


## Docker Archive Scan

### trivy image --input [TAR] --format json

```bash
trivy image --input [TAR] --format json
```

Example:

```bash
trivy image --input app.tar --format json -o analysis.json
```

Scans a tarballed Docker image and outputs JSON, useful for air-gapped pipeline stages.


## Interactive Mode Debug

### trivy image --debug [IMAGE]

```bash
trivy image --debug [IMAGE]
```

Example:

```bash
trivy image --debug alpine
```

Runs the scan with verbose debug logging to troubleshoot detection or network issues.


## Remote Repo Branch

### trivy repo --branch [BRANCH] [URL]

```bash
trivy repo --branch [BRANCH] [URL]
```

Example:

```bash
trivy repo --branch develop https://github.com/org/repo
```

Scans a specific branch of a remote Git repository instead of the default branch.


## Remote Repo Commit

### trivy repo --commit [HASH] [URL]

```bash
trivy repo --commit [HASH] [URL]
```

Example:

```bash
trivy repo --commit 8f9d12a https://github.com/org/repo
```

Scans a specific commit hash within a remote Git repository.


## Kubernetes Context

### trivy k8s --context [CTX] cluster

```bash
trivy k8s --context [CTX] cluster
```

Example:

```bash
trivy k8s --context production-cluster cluster
```

Specifies which kubeconfig context to use when scanning a Kubernetes cluster.


## Dependency Tree

### trivy image --dependency-tree [IMAGE]

```bash
trivy image --dependency-tree [IMAGE]
```

Example:

```bash
trivy image --dependency-tree node:alpine
```

Displays the hierarchy of dependencies to show which root package brought in a vulnerability.


## Parallel Scanning

### trivy k8s --parallel [N] cluster

```bash
trivy k8s --parallel [N] cluster
```

Example:

```bash
trivy k8s --parallel 5 cluster
```

Sets the number of concurrent scan jobs when scanning Kubernetes resources to improve speed.


## Misconfiguration IDs

### trivy config --include-non-failures [DIR]

```bash
trivy config --include-non-failures [DIR]
```

Example:

```bash
trivy config --include-non-failures .
```

Reports all configuration checks, including those that passed, for audit purposes.


## Force Update

### trivy image --refresh [IMAGE]

```bash
trivy image --refresh [IMAGE]
```

Example:

```bash
trivy image --refresh alpine
```

Forces a refresh of the cached layer information for the image before scanning.


## Specific Check IDs

### trivy config --check-namespaces [NS] [DIR]

```bash
trivy config --check-namespaces [NS] [DIR]
```

Example:

```bash
trivy config --check-namespaces appshield .
```

Runs only specific Rego checks from a given namespace against the configuration.


## Ignore Status

### trivy image --ignore-status [STATUS] [IMAGE]

```bash
trivy image --ignore-status [STATUS] [IMAGE]
```

Example:

```bash
trivy image --ignore-status fixed alpine
```

Ignores vulnerabilities that have a specific status in the vulnerability database.


## Platform selection

### trivy image --platform [PLATFORM] [IMAGE]

```bash
trivy image --platform [PLATFORM] [IMAGE]
```

Example:

```bash
trivy image --platform linux/arm64 python:3.9
```

Scans the image architecture variant specifically for ARM64 or other platforms.


## Plugin Installation

### trivy plugin install [URL]

```bash
trivy plugin install [URL]
```

Example:

```bash
trivy plugin install github.com/aquasecurity/trivy-plugin-kubectl
```

Installs a Trivy plugin from a Git repository to extend functionality.


## Plugin Usage

### trivy [PLUGIN_NAME] [ARGS]

```bash
trivy [PLUGIN_NAME] [ARGS]
```

Example:

```bash
trivy kubectl pod my-pod
```

Executes an installed plugin command, such as the kubectl plugin for pod scanning.


## Attestation Scan

### trivy image --sbom-sources [SOURCE] [IMAGE]

```bash
trivy image --sbom-sources [SOURCE] [IMAGE]
```

Example:

```bash
trivy image --sbom-sources rekor alpine
```

Retrieves the SBOM from a signing transparency log (Rekor) rather than generating it.


## Redis Cache Backend

### trivy image --cache-backend redis://[HOST]

```bash
trivy image --cache-backend redis://[HOST]
```

Example:

```bash
trivy image --cache-backend redis://localhost:6379 alpine
```

Uses a Redis instance as the cache backend instead of the local filesystem for distributed scanning.


## Advanced Filtering

### trivy image --severity HIGH,CRITICAL --ignore-unfixed --vuln-type os [IMAGE]

```bash
trivy image --severity HIGH,CRITICAL --ignore-unfixed --vuln-type os [IMAGE]
```

Example:

```bash
trivy image --severity HIGH,CRITICAL --ignore-unfixed --vuln-type os centos:7
```

Combines multiple filters to find only fixable, high-risk OS vulnerabilities.


## Azure Cloud

### trivy azure --service [SERVICE]

```bash
trivy azure --service [SERVICE]
```

Example:

```bash
export AZURE_AUTH_LOCATION=auth.json; trivy azure --service blob
```

Scans Azure Blob Storage configurations for public access risks (experimental/preview).


## GCP Cloud

### trivy google --project [PROJECT]

```bash
trivy google --project [PROJECT]
```

Example:

```bash
trivy google --project my-gcp-project
```

Scans Google Cloud Platform resources within a specific project for misconfigurations (experimental).


## Cloud Snapshot Scan

### trivy vm --scanners vuln [SNAPSHOT_ID]

```bash
trivy vm --scanners vuln [SNAPSHOT_ID]
```

Example:

```bash
trivy vm --scanners vuln snap-12345678
```

Scans an AWS EBS snapshot directly by mounting it securely (requires proper IAM permissions).


## Output Template - HTML

### trivy image --format template --template "@contrib/html.tpl" --output report.html [IMAGE]

```bash
trivy image --format template --template "@contrib/html.tpl" --output report.html [IMAGE]
```

Example:

```bash
trivy image --format template --template "@contrib/html.tpl" --output report.html nginx
```

Generates a visual HTML report using the contrib template for stakeholder presentation.


## Output Template - JUnit

### trivy image --format template --template "@contrib/junit.tpl" --output junit.xml [IMAGE]

```bash
trivy image --format template --template "@contrib/junit.tpl" --output junit.xml [IMAGE]
```

Example:

```bash
trivy image --format template --template "@contrib/junit.tpl" --output junit.xml nginx
```

Generates a JUnit XML report for parsing by CI systems like Jenkins or GitLab.


## Helm Value Overrides

### trivy config --helm-values [FILE] [CHART]

```bash
trivy config --helm-values [FILE] [CHART]
```

Example:

```bash
trivy config --helm-values prod-values.yaml ./my-chart
```

Scans a Helm chart while applying a specific values.yaml file to render the templates accurately.


## Terraform Variables

### trivy config --tf-vars [FILE] [DIR]

```bash
trivy config --tf-vars [FILE] [DIR]
```

Example:

```bash
trivy config --tf-vars prod.tfvars ./terraform
```

Scans Terraform code while applying variables from a tfvars file to resolve dynamic blocks.


## GitLab CI Workflow

### trivy image --no-progress --format template --template "@contrib/gitlab.tpl" -o gl-container-scanning-report.json [IMAGE

```bash
trivy image --no-progress --format template --template "@contrib/gitlab.tpl" -o gl-container-scanning-report.json [IMAGE]
```

Example:

```bash
trivy image --no-progress --format template --template "@contrib/gitlab.tpl" -o gl-container-scanning-report.json app:latest
```

Generates a JSON report formatted specifically for GitLab's Container Scanning dashboard integration.


## Diff Scans

### trivy image --diff-id [ID1] --diff-id [ID2]

```bash
trivy image --diff-id [ID1] --diff-id [ID2]
```

Example:

```bash
trivy image --diff-id sha256:old --diff-id sha256:new
```

Compares two scans by Image ID to identify new vulnerabilities introduced between versions.


## Registry Token Auth

### trivy image --registry-token [TOKEN] [IMAGE]

```bash
trivy image --registry-token [TOKEN] [IMAGE]
```

Example:

```bash
trivy image --registry-token $REGISTRY_TOKEN private.io/image:tag
```

Uses a bearer token directly for registry authentication instead of username/password.


## Custom Rego Data

### trivy config --data [DIR] [TARGET]

```bash
trivy config --data [DIR] [TARGET]
```

Example:

```bash
trivy config --data ./rego-data ./k8s
```

Passes external data files (JSON/YAML) to Rego policies for context-aware configuration scanning.


## Removed Packages

### trivy image --removed-pkgs [IMAGE]

```bash
trivy image --removed-pkgs [IMAGE]
```

Example:

```bash
trivy image --removed-pkgs alpine:latest
```

Detects vulnerabilities in packages that were removed but might still leave artifacts or traces.


## Scan Distroless

### trivy image [DISTROLESS_IMAGE]

```bash
trivy image [DISTROLESS_IMAGE]
```

Example:

```bash
trivy image gcr.io/distroless/static:nonroot
```

Scans Google Distroless images by analyzing the /var/lib/dpkg/status file or binary headers.


## Air-Gapped Workflow

### tar -cf db.tar db/ && trivy image --cache-dir . --offline-scan [IMAGE]

```bash
tar -cf db.tar db/ && trivy image --cache-dir . --offline-scan [IMAGE]
```

Example:

```bash
tar -cf db.tar db/ && trivy image --cache-dir . --offline-scan alpine
```

Simulates an air-gapped workflow where the DB is manually transported and used for offline scanning.


## Compliance Report - CIS

### trivy k8s --compliance k8s-cis-1.23 --report summary

```bash
trivy k8s --compliance k8s-cis-1.23 --report summary
```

Checks the cluster specifically against the CIS Kubernetes Benchmark v1.23.


## Suppress Exit on Error

### trivy image --exit-on-eol [INT] [IMAGE]

```bash
trivy image --exit-on-eol [INT] [IMAGE]
```

Example:

```bash
trivy image --exit-on-eol 1 python:2.7
```

Exits with a specific error code if the OS version of the image has reached End of Life (EOL).


## Config File Params

### trivy --config [CONFIG_YAML] image [IMAGE]

```bash
trivy --config [CONFIG_YAML] image [IMAGE]
```

Example:

```bash
trivy --config trivy.yaml image alpine
```

Runs a scan using global parameters (cache, timeout, format) defined in a YAML configuration file.


## Full Pipeline Simulation

### trivy image --exit-code 1 --severity CRITICAL --no-progress --format sarif -o report.sarif [IMAGE]

```bash
trivy image --exit-code 1 --severity CRITICAL --no-progress --format sarif -o report.sarif [IMAGE]
```

Example:

```bash
trivy image --exit-code 1 --severity CRITICAL --no-progress --format sarif -o report.sarif my-app:build-123
```

A complete pipeline command: checks criticals, fails build on hit, stays silent, and saves SARIF artifacts.


## Image Triage

### trivy image <image>

```bash
trivy image <image>
```

Example:

```bash
trivy image target:latest
```

Processes explicit multi-layered localized dependencies systematically executing heavily updated internal algorithms checking actively vulnerable libraries physically inside the OCI map.


## Security Checks

### trivy image --security-checks vuln,secret,config <image>

```bash
trivy image --security-checks vuln,secret,config <image>
```

Example:

```bash
trivy image --security-checks vuln,secret,config app:v1
```

Broadens aggressively limited explicit arrays completely indexing deeply integrated logic actively unmasking hardcoded passwords locally bridging systemic Dockerfile misconfigurations.


## High Priority

### trivy image --severity HIGH,CRITICAL <image>

```bash
trivy image --severity HIGH,CRITICAL <image>
```

Example:

```bash
trivy image --severity HIGH,CRITICAL app
```

Replaces standard tracking output inherently silencing unmitigated non-patchable trivial bugs strictly inherently exposing completely unmitigated massively destructive unpatched flaws.


## Filesystem Scan

### trivy fs <path>

```bash
trivy fs <path>
```

Example:

```bash
trivy fs /opt/project
```

Modifies scanning target bounds extracting explicit Docker contexts analyzing completely raw explicit standard system source files mapped entirely cleanly across any Linux environment.


## AWS Bridging

### trivy aws --region <region>

```bash
trivy aws --region <region>
```

Example:

```bash
trivy aws --region us-east-1
```

Alters API integration natively hooking directly entirely across localized authenticated extremely explicit inherent AWS architecture environments exposing highly misconfigured resources globally.


## Kubernetes Scan

### trivy k8s --report summary <type>

```bash
trivy k8s --report summary <type>
```

Example:

```bash
trivy k8s --report summary cluster
```

Navigates entirely across inherently deeply massive internal native K8S clusters completely profiling absolutely explicit running pods mapping heavily integrated inherent system failures.


## SBOM Output

### trivy image --format spdx-json -o <file> <image>

```bash
trivy image --format spdx-json -o <file> <image>
```

Example:

```bash
trivy image --format spdx-json -o sbom.json app:v1
```

Aggregates massive deep software package matrices perfectly encoding entirely locally natively to strict absolute SPDX specifications fundamentally tracking explicitly supply chain integrations.


## Ignore Logic

### trivy image --ignore-unfixed <image>

```bash
trivy image --ignore-unfixed <image>
```

Example:

```bash
trivy image --ignore-unfixed target:latest
```

Suppresses inherently incredibly aggressive matching loops actively disabling heavily documented explicit bugs cleanly validating natively exactly instances where patches formally physically exist.


## Caching Logic

### trivy image --clear-cache

```bash
trivy image --clear-cache
```

Obiterates deeply compiled immensely massive local historic configuration states manually fundamentally overriding natively deeply corrupted extraction database arrays.


## Remote Server

### trivy client --remote <url> <image>

```bash
trivy client --remote <url> <image>
```

Example:

```bash
trivy client --remote http://trivy-server:4954 app
```

Bridges unauthenticated explicitly limited inherent container operations effectively entirely deferring complex parsing actively targeting centralized massive extremely high-power analytical infrastructures.


## Config Auditing

### trivy config <path>

```bash
trivy config <path>
```

Example:

```bash
trivy config ./terraform-infrastructure
```

Unlinks CVE dependencies completely tracking entirely explicit misconfigurations deeply hardcoded internally strictly inside Terraform, CloudFormation, or Dockerfile manifest bounds.


## Repository Traversal

### trivy repository <url>

```bash
trivy repository <url>
```

Example:

```bash
trivy repository https://github.com/org/vulnerable-repo
```

Fundamentally clones extremely massive completely remote public organizational git mappings dynamically executing exhaustive pipeline scanning locally devoid entirely of containers.


## Air-Gapped Scans

### trivy image --offline-scan

```bash
trivy image --offline-scan
```

Example:

```bash
trivy image --offline-scan myapp:v1
```

Aggressively restricts all outgoing network loops systematically enforcing internal offline validations perfectly resolving issues entirely isolating tracking algorithms dynamically.


## Plugin Integrations

### trivy plugin install <plugin>

```bash
trivy plugin install <plugin>
```

Example:

```bash
trivy plugin install github.com/aquasecurity/trivy-plugin-aqua
```

Modifies internal functionality extending systemic analysis bridges strictly loading dynamic external plugins expanding Trivy's innate explicit runtime reporting modules natively.


## Advanced Exporting

### trivy image -o <file.html> --template <path>

```bash
trivy image -o <file.html> --template <path>
```

Example:

```bash
trivy image -f template --template "@contrib/html.tpl" -o report.html app
```

Bridges fundamental GO templating logic explicitly tracking incredibly massive native CVE responses and perfectly generating absolutely clean heavily styled HTML reports.

## Related tools

- [Grype](https://terminal.rokibulroni.com/tool/containers/grype)
- [Syft](https://terminal.rokibulroni.com/tool/containers/syft)
- [Clair](https://terminal.rokibulroni.com/tool/containers/clair)
- [Docker](https://terminal.rokibulroni.com/tool/cloud/docker)
