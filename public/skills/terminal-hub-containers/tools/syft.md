# Syft

> Generates a software bill of materials (SBOM) from container images and filesystems in SPDX, CycloneDX and other formats.

- Category: Containers
- Commands: 17
- Page: https://terminal.rokibulroni.com/tool/containers/syft
- Homepage: https://github.com/anchore/syft
- Documentation: https://github.com/anchore/syft/wiki
- Tags: SBOM, containers, supply chain

## Install

- brew: `brew install syft`
- other: `curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin`

## Generating SBOMs

### syft <image>

```bash
syft <image>
```

Example:

```bash
syft nginx:1.27
```

Lists every package found in an image as a table.

### syft dir:<path>

```bash
syft dir:<path>
```

Example:

```bash
syft dir:.
```

Catalogues a directory — lock files, manifests and binaries.

### syft file:<path>

```bash
syft file:<path>
```

Example:

```bash
syft file:./app.jar
```

Catalogues a single file such as a JAR or binary.

### syft docker-archive:<file>

```bash
syft docker-archive:<file>
```

Example:

```bash
syft docker-archive:image.tar
```

Reads an image saved with docker save.

### syft registry:<image>

```bash
syft registry:<image>
```

Example:

```bash
syft registry:ghcr.io/org/app:latest
```

Pulls straight from a registry without a Docker daemon.

### syft <image> --scope all-layers

```bash
syft <image> --scope all-layers
```

Example:

```bash
syft app:latest --scope all-layers
```

Includes packages from every layer, even ones deleted later.

### syft <image> --exclude <glob>

```bash
syft <image> --exclude <glob>
```

Example:

```bash
syft dir:. --exclude './node_modules/**'
```

Skips paths you do not want catalogued.


## Formats

### syft <image> -o spdx-json

```bash
syft <image> -o spdx-json
```

Example:

```bash
syft app:latest -o spdx-json > sbom.spdx.json
```

SPDX JSON, a widely accepted SBOM standard.

### syft <image> -o cyclonedx-json

```bash
syft <image> -o cyclonedx-json
```

Example:

```bash
syft app:latest -o cyclonedx-json > sbom.cdx.json
```

CycloneDX JSON, preferred by many security platforms.

### syft <image> -o syft-json

```bash
syft <image> -o syft-json
```

Example:

```bash
syft app:latest -o syft-json > sbom.json
```

Syft’s own lossless format with the most detail.

### syft <image> -o table -o spdx-json=<file>

```bash
syft <image> -o table -o spdx-json=<file>
```

Example:

```bash
syft app:latest -o table -o spdx-json=sbom.json
```

Writes several formats in one run.

### syft convert <sbom> -o <format>

```bash
syft convert <sbom> -o <format>
```

Example:

```bash
syft convert sbom.json -o cyclonedx-json
```

Converts an existing SBOM between formats.


## Inspecting

### syft <image> -o json | jq '.artifacts[] | {name, version, type}'

```bash
syft <image> -o json | jq '.artifacts[] | {name, version, type}'
```

Example:

```bash
syft alpine -o json | jq '.artifacts[] | {name, version, type}'
```

Extracts package names, versions and ecosystems with jq.

### syft <image> --select-catalogers <name>

```bash
syft <image> --select-catalogers <name>
```

Example:

```bash
syft dir:. --select-catalogers python
```

Runs only particular catalogers, such as Python or Java.

### syft cataloger list

```bash
syft cataloger list
```

Lists all available catalogers.


## Attestation

### syft attest --output spdx-json <image>

```bash
syft attest --output spdx-json <image>
```

Example:

```bash
syft attest --output spdx-json ghcr.io/org/app:1.0
```

Generates an SBOM and signs it as an in-toto attestation with cosign.

### syft <image> -o spdx-json | grype

```bash
syft <image> -o spdx-json | grype
```

Pipes the SBOM straight into Grype for vulnerability matching.

## Related tools

- [Grype](https://terminal.rokibulroni.com/tool/containers/grype)
- [Trivy](https://terminal.rokibulroni.com/tool/containers/trivy)
