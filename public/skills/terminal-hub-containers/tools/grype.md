# Grype

> Anchore’s vulnerability scanner for container images and filesystems; pairs naturally with Syft SBOMs.

- Category: Containers
- Commands: 19
- Page: https://terminal.rokibulroni.com/tool/containers/grype
- Homepage: https://github.com/anchore/grype
- Documentation: https://github.com/anchore/grype#readme
- Tags: vulnerability scanning, containers, SBOM

## Install

- brew: `brew install grype`
- other: `curl -sSfL https://raw.githubusercontent.com/anchore/grype/main/install.sh | sh -s -- -b /usr/local/bin`

## Scanning

### grype <image>

```bash
grype <image>
```

Example:

```bash
grype nginx:1.27
```

Scans a container image (pulled from a registry or the local Docker daemon) and lists vulnerable packages with severity and fixed versions.

### grype dir:<path>

```bash
grype dir:<path>
```

Example:

```bash
grype dir:./app
```

Scans a directory on disk, such as a project with lock files.

### grype sbom:<file>

```bash
grype sbom:<file>
```

Example:

```bash
grype sbom:./sbom.spdx.json
```

Scans an existing SBOM instead of the image — fast and repeatable.

### grype docker-archive:<file>

```bash
grype docker-archive:<file>
```

Example:

```bash
grype docker-archive:image.tar
```

Scans an image saved with docker save.

### grype registry:<image>

```bash
grype registry:<image>
```

Example:

```bash
grype registry:ghcr.io/org/app:latest
```

Pulls directly from a registry without needing a Docker daemon.

### grype <image> --scope all-layers

```bash
grype <image> --scope all-layers
```

Example:

```bash
grype python:3.12 --scope all-layers
```

Also reports packages removed in later layers but still present in the image.

### grype <image> --platform <os/arch>

```bash
grype <image> --platform <os/arch>
```

Example:

```bash
grype alpine:3.20 --platform linux/arm64
```

Scans a specific platform variant of a multi-arch image.


## Filtering and CI

### grype <image> --only-fixed

```bash
grype <image> --only-fixed
```

Example:

```bash
grype node:20 --only-fixed
```

Shows only vulnerabilities that already have a fix available — the actionable list.

### grype <image> --fail-on <severity>

```bash
grype <image> --fail-on <severity>
```

Example:

```bash
grype app:latest --fail-on high
```

Exits with status 1 if anything at or above the severity is found, failing a CI job.

### grype <image> --ignore-states <states>

```bash
grype <image> --ignore-states <states>
```

Example:

```bash
grype app:latest --ignore-states wont-fix,unknown
```

Hides findings whose fix state you have accepted.

### grype <image> -c <config>

```bash
grype <image> -c <config>
```

Example:

```bash
grype app:latest -c .grype.yaml
```

Uses a config file, for example with an ignore list of accepted CVEs.


## Output

### grype <image> -o json

```bash
grype <image> -o json
```

Example:

```bash
grype app:latest -o json > grype.json
```

Machine-readable JSON with full match details.

### grype <image> -o sarif

```bash
grype <image> -o sarif
```

Example:

```bash
grype app:latest -o sarif > grype.sarif
```

SARIF for GitHub code scanning and other tools.

### grype <image> -o cyclonedx

```bash
grype <image> -o cyclonedx
```

Example:

```bash
grype app:latest -o cyclonedx
```

A CycloneDX document with vulnerability data.

### grype <image> -o template -t <file>

```bash
grype <image> -o template -t <file>
```

Example:

```bash
grype app:latest -o template -t html.tmpl > report.html
```

Renders a custom Go template, for example an HTML report.


## Database

### grype db status

```bash
grype db status
```

Shows the vulnerability database version and when it was built.

### grype db update

```bash
grype db update
```

Downloads the latest database.

### grype db check

```bash
grype db check
```

Reports whether a newer database is available.

### grype explain --id <cve> < <json>

```bash
grype explain --id <cve> < <json>
```

Example:

```bash
grype app:latest -o json | grype explain --id CVE-2024-3094
```

Explains why a CVE matched and which packages it affects.

## Related tools

- [Syft](https://terminal.rokibulroni.com/tool/containers/syft)
- [Trivy](https://terminal.rokibulroni.com/tool/containers/trivy)
- [Clair](https://terminal.rokibulroni.com/tool/containers/clair)
