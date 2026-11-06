# Clair

> An open-source service for static analysis of vulnerabilities in container images, typically used with registries via clairctl.

- Category: Containers
- Commands: 13
- Page: https://terminal.rokibulroni.com/tool/containers/clair
- Homepage: https://github.com/quay/clair
- Documentation: https://quay.github.io/clair/
- Tags: vulnerability scanning, containers, registry

## Install

- docker: `docker pull quay.io/projectquay/clair:latest`

## Reports

### clairctl report <image>

```bash
clairctl report <image>
```

Example:

```bash
clairctl report quay.io/org/app:latest
```

Submits an image’s manifest to a Clair server and prints the vulnerabilities it finds.

### clairctl report -o json <image>

```bash
clairctl report -o json <image>
```

Example:

```bash
clairctl report -o json quay.io/org/app:latest
```

JSON output for scripting.

### clairctl report -o xml <image>

```bash
clairctl report -o xml <image>
```

Example:

```bash
clairctl report -o xml app:latest
```

XML output (for example for older CI plug-ins).

### clairctl --host <url> report <image>

```bash
clairctl --host <url> report <image>
```

Example:

```bash
clairctl --host http://clair.internal:6060 report app:latest
```

Points at a specific Clair instance.

### clairctl -D report <image>

```bash
clairctl -D report <image>
```

Debug logging, useful when an image fails to index.


## Server

### clair -conf <config>

```bash
clair -conf <config>
```

Example:

```bash
clair -conf /etc/clair/config.yaml
```

Starts Clair. The mode setting (combo, indexer, matcher, notifier) decides which services run.

### docker run -p 6060:6060 -v <dir>:/config quay.io/projectquay/clair:<version> -conf /config/config.yaml

```bash
docker run -p 6060:6060 -v <dir>:/config quay.io/projectquay/clair:<version> -conf /config/config.yaml
```

Example:

```bash
docker run -p 6060:6060 -v $PWD:/config quay.io/projectquay/clair:4.8.0 -conf /config/config.yaml
```

Runs Clair in a container. It needs a PostgreSQL database configured in config.yaml.

### curl http://<host>:6061/healthz

```bash
curl http://<host>:6061/healthz
```

Example:

```bash
curl http://localhost:6061/healthz
```

Checks the introspection health endpoint.

### curl http://<host>:6061/metrics

```bash
curl http://<host>:6061/metrics
```

Example:

```bash
curl http://localhost:6061/metrics
```

Prometheus metrics, including indexing and matching latency.


## Offline databases

### clairctl export-updaters <file>

```bash
clairctl export-updaters <file>
```

Example:

```bash
clairctl export-updaters updates.json.gz
```

Downloads vulnerability data on a connected machine for an air-gapped install.

### clairctl import-updaters <file>

```bash
clairctl import-updaters <file>
```

Example:

```bash
clairctl import-updaters updates.json.gz
```

Imports exported vulnerability data into an offline Clair database.


## API

### curl -X POST http://<host>:6060/indexer/api/v1/index_report -d @<manifest>

```bash
curl -X POST http://<host>:6060/indexer/api/v1/index_report -d @<manifest>
```

Example:

```bash
curl -X POST http://localhost:6060/indexer/api/v1/index_report -d @manifest.json
```

Indexes an image manifest directly through the API.

### curl http://<host>:6060/matcher/api/v1/vulnerability_report/<digest>

```bash
curl http://<host>:6060/matcher/api/v1/vulnerability_report/<digest>
```

Example:

```bash
curl http://localhost:6060/matcher/api/v1/vulnerability_report/sha256:abc…
```

Fetches the vulnerability report for an indexed manifest digest.

## Related tools

- [Trivy](https://terminal.rokibulroni.com/tool/containers/trivy)
- [Grype](https://terminal.rokibulroni.com/tool/containers/grype)
