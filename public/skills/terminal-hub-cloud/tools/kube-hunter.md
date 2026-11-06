# kube-hunter

> Hunts for security weaknesses in Kubernetes clusters from inside or outside, reporting exposed components and known issues. Archived upstream but still informative.

- Category: Cloud
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/cloud/kube-hunter
- Homepage: https://github.com/aquasecurity/kube-hunter
- Tags: Kubernetes, penetration testing

## Install

- pipx: `pipx install kube-hunter`
- docker: `docker run -it --rm --network host aquasec/kube-hunter`

## Basic Execution

### kube-hunter

```bash
kube-hunter
```

Runs kube-hunter in interactive mode to select scan types manually.

### kube-hunter --list

```bash
kube-hunter --list
```

Lists all available passive and active hunters (plugins) currently supported.

### kube-hunter --version

```bash
kube-hunter --version
```

Displays the current version of the kube-hunter tool.

### kube-hunter --help

```bash
kube-hunter --help
```

Shows the help menu with all available command-line arguments and flags.


## Remote Scanning

### kube-hunter --remote [IP]

```bash
kube-hunter --remote [IP]
```

Example:

```bash
kube-hunter --remote 192.168.1.100
```

Scans a specific remote IP address for Kubernetes vulnerabilities.

### kube-hunter --remote [DNS_NAME]

```bash
kube-hunter --remote [DNS_NAME]
```

Example:

```bash
kube-hunter --remote k8s-cluster.example.com
```

Scans a specific remote domain name for Kubernetes exposure.

### kube-hunter --cidr [CIDR_BLOCK]

```bash
kube-hunter --cidr [CIDR_BLOCK]
```

Example:

```bash
kube-hunter --cidr 192.168.0.0/24
```

Performs a scan across an entire network CIDR range to find Kubernetes nodes.

### kube-hunter --remote [IP1] --remote [IP2]

```bash
kube-hunter --remote [IP1] --remote [IP2]
```

Example:

```bash
kube-hunter --remote 192.168.1.50 --remote 192.168.1.51
```

Scans multiple distinct remote IP addresses in a single execution.

### kube-hunter --url [URL]

```bash
kube-hunter --url [URL]
```

Example:

```bash
kube-hunter --url https://192.168.1.100:6443
```

Targets a specific Kubernetes API server URL for assessment.


## Local Scanning

### kube-hunter --interface

```bash
kube-hunter --interface
```

Selects a local network interface to scan via interactive mode.

### kube-hunter --network [INTERFACE_TYPE]

```bash
kube-hunter --network [INTERFACE_TYPE]
```

Example:

```bash
kube-hunter --network host
```

Configures the network scanning mode to use the host network interface.


## Active Hunting

### kube-hunter --active

```bash
kube-hunter --active
```

Enables active hunting mode to attempt harmless exploitation of found vulnerabilities.

### kube-hunter --remote [IP] --active

```bash
kube-hunter --remote [IP] --active
```

Example:

```bash
kube-hunter --remote 192.168.1.100 --active
```

Performs an active vulnerability scan against a specific remote target.

### kube-hunter --cidr [CIDR] --active

```bash
kube-hunter --cidr [CIDR] --active
```

Example:

```bash
kube-hunter --cidr 10.0.0.0/16 --active
```

Scans a network range and actively verifies vulnerabilities on discovered nodes.


## Reporting and Output

### kube-hunter --report json

```bash
kube-hunter --report json
```

Outputs the scan results in JSON format for automated parsing.

### kube-hunter --report yaml

```bash
kube-hunter --report yaml
```

Outputs the scan results in YAML format for configuration management tools.

### kube-hunter --report plain

```bash
kube-hunter --report plain
```

Outputs the scan results in plain text format for human readability.

### kube-hunter --log [LEVEL]

```bash
kube-hunter --log [LEVEL]
```

Example:

```bash
kube-hunter --log debug
```

Sets the logging verbosity level to debug for detailed troubleshooting.

### kube-hunter --log warn

```bash
kube-hunter --log warn
```

Reduces logging verbosity to show only warnings and errors.

### kube-hunter --statistics

```bash
kube-hunter --statistics
```

Displays execution statistics at the end of the scan.


## Targeted Hunting

### kube-hunter --include-hunters [HUNTER_NAME]

```bash
kube-hunter --include-hunters [HUNTER_NAME]
```

Example:

```bash
kube-hunter --include-hunters KubeletDiscovery
```

Runs only the specified hunter, skipping all other checks.

### kube-hunter --exclude-hunters [HUNTER_NAME]

```bash
kube-hunter --exclude-hunters [HUNTER_NAME]
```

Example:

```bash
kube-hunter --exclude-hunters KubeletDiscovery
```

Runs all hunters except the one specified.

### kube-hunter --include-hunters [LIST]

```bash
kube-hunter --include-hunters [LIST]
```

Example:

```bash
kube-hunter --include-hunters KubeletDiscovery,DashboardDiscovery
```

Runs a comma-separated list of specific hunters for a focused audit.


## Internal/Pod Mode

### kube-hunter --pod

```bash
kube-hunter --pod
```

Flags execution as running inside a pod to leverage internal service discovery.

### kube-hunter --quick

```bash
kube-hunter --quick
```

Performs a quick scan by limiting subnet ranges and timeouts.


## Automation & Integration

### kube-hunter --dispatch stdout

```bash
kube-hunter --dispatch stdout
```

Forces results to standard output, useful for simple pipe operations.

### kube-hunter --dispatch http --dispatch-url [URL]

```bash
kube-hunter --dispatch http --dispatch-url [URL]
```

Example:

```bash
kube-hunter --dispatch http --dispatch-url https://collector.example.com/api
```

Sends scan reports via HTTP POST to a remote collector URL.


## Advanced Configuration

### kube-hunter --mapping

```bash
kube-hunter --mapping
```

Outputs a mapping of the discovered nodes and cluster topology.

### kube-hunter --cidr [CIDR] --mapping

```bash
kube-hunter --cidr [CIDR] --mapping
```

Example:

```bash
kube-hunter --cidr 192.168.0.0/16 --mapping
```

Maps the topology of a specific network range without running full vulnerability checks.


## Cloud Security Posture

### kube-hunter --remote [IP] --include-hunters GKEKubeletAnonymous

```bash
kube-hunter --remote [IP] --include-hunters GKEKubeletAnonymous
```

Example:

```bash
kube-hunter --remote 35.1.1.1 --include-hunters GKEKubeletAnonymous
```

Checks specifically for anonymous Kubelet access on GKE clusters.

### kube-hunter --remote [IP] --include-hunters EKSKubeletAnonymous

```bash
kube-hunter --remote [IP] --include-hunters EKSKubeletAnonymous
```

Example:

```bash
kube-hunter --remote 54.1.1.1 --include-hunters EKSKubeletAnonymous
```

Checks specifically for anonymous Kubelet access on EKS clusters.

### kube-hunter --remote [IP] --include-hunters AKSKubeletAnonymous

```bash
kube-hunter --remote [IP] --include-hunters AKSKubeletAnonymous
```

Example:

```bash
kube-hunter --remote 20.1.1.1 --include-hunters AKSKubeletAnonymous
```

Checks specifically for anonymous Kubelet access on AKS clusters.


## Blue Team Validation

### kube-hunter --remote [IP] --report json > scan_results.json

```bash
kube-hunter --remote [IP] --report json > scan_results.json
```

Example:

```bash
kube-hunter --remote 192.168.1.100 --report json > scan_results.json
```

Saves remote scan results to a JSON file for defensive analysis.

### kube-hunter --cidr [CIDR] --active --log warn

```bash
kube-hunter --cidr [CIDR] --active --log warn
```

Example:

```bash
kube-hunter --cidr 10.0.0.0/8 --active --log warn
```

Runs a low-noise active scan over a large network to identify critical misconfigurations.


## Purple Team Simulation

### kube-hunter --active --include-hunters MountServiceToken

```bash
kube-hunter --active --include-hunters MountServiceToken
```

Actively attempts to mount and read service account tokens to simulate privilege escalation.

### kube-hunter --active --include-hunters AnonymousAccess

```bash
kube-hunter --active --include-hunters AnonymousAccess
```

Actively tests if anonymous users can access restricted API endpoints.


## Incident Response

### kube-hunter --list | grep [KEYWORD]

```bash
kube-hunter --list | grep [KEYWORD]
```

Example:

```bash
kube-hunter --list | grep etcd
```

Filters the hunter list to identify available checks for specific components like etcd.

### kube-hunter --remote [IP] --include-hunters EtcdRemoteAccess

```bash
kube-hunter --remote [IP] --include-hunters EtcdRemoteAccess
```

Example:

```bash
kube-hunter --remote 192.168.1.20 --include-hunters EtcdRemoteAccess
```

Verifies if the etcd service is exposed and accessible remotely.


## Advanced Workflow

### kube-hunter --remote [IP] --report json --dispatch http --dispatch-url [URL]

```bash
kube-hunter --remote [IP] --report json --dispatch http --dispatch-url [URL]
```

Example:

```bash
kube-hunter --remote 10.10.10.10 --report json --dispatch http --dispatch-url https://webhook.site/uuid
```

Combines JSON reporting with HTTP dispatch for immediate remote logging.

### kube-hunter --pod --active --report yaml

```bash
kube-hunter --pod --active --report yaml
```

Runs inside a pod in active mode and generates a YAML report for GitOps processing.

### kube-hunter --cidr [CIDR] --exclude-hunters [NOISY_HUNTERS]

```bash
kube-hunter --cidr [CIDR] --exclude-hunters [NOISY_HUNTERS]
```

Example:

```bash
kube-hunter --cidr 192.168.0.0/16 --exclude-hunters KubeletDiscovery,ProxyDiscovery
```

Scans a network while excluding specific noisy discovery hunters.


## Validation & Compliance

### kube-hunter --include-hunters DashboardDiscovery,DashboardProxy

```bash
kube-hunter --include-hunters DashboardDiscovery,DashboardProxy
```

Focuses the audit strictly on Kubernetes Dashboard exposures.

### kube-hunter --include-hunters KubeletReadOnlyPorts,KubeletSecurePort

```bash
kube-hunter --include-hunters KubeletReadOnlyPorts,KubeletSecurePort
```

Focuses the audit strictly on Kubelet port configurations.


## Active Exploitation

### kube-hunter --active --include-hunters RCE

```bash
kube-hunter --active --include-hunters RCE
```

Attempts to verify Remote Code Execution vulnerabilities in discovered services.


## Pipeline Integration

### kube-hunter --cidr [CIDR] --report json --log none

```bash
kube-hunter --cidr [CIDR] --report json --log none
```

Example:

```bash
kube-hunter --cidr 172.16.0.0/12 --report json --log none
```

Runs a silent scan outputting only JSON, ideal for parsing in CI pipelines.


## Specific Vulnerability

### kube-hunter --include-hunters CVE-2018-1002105

```bash
kube-hunter --include-hunters CVE-2018-1002105
```

Checks specifically for the critical Kubernetes privilege escalation vulnerability (if supported by version).


## Specific Service

### kube-hunter --remote [IP] --include-hunters ProxyDiscovery

```bash
kube-hunter --remote [IP] --include-hunters ProxyDiscovery
```

Example:

```bash
kube-hunter --remote 192.168.1.1 --include-hunters ProxyDiscovery
```

Checks specifically for an exposed Kubernetes Proxy service.

### kube-hunter --remote [IP] --include-hunters AzureSpnExposure

```bash
kube-hunter --remote [IP] --include-hunters AzureSpnExposure
```

Example:

```bash
kube-hunter --remote 192.168.1.5 --include-hunters AzureSpnExposure
```

Checks for exposed Azure Service Principal Names in the cluster.


## Network Mapping

### kube-hunter --cidr [CIDR] --quick --report json

```bash
kube-hunter --cidr [CIDR] --quick --report json
```

Example:

```bash
kube-hunter --cidr 192.168.1.0/24 --quick --report json
```

Performs a fast network discovery scan and outputs results as JSON.


## Full Audit

### kube-hunter --remote [IP] --active --log debug

```bash
kube-hunter --remote [IP] --active --log debug
```

Example:

```bash
kube-hunter --remote 192.168.1.10 --active --log debug
```

Runs a comprehensive active audit on a single host with full debug logging.


## Containerized Execution

### docker run -it --rm --network host aquasec/kube-hunter

```bash
docker run -it --rm --network host aquasec/kube-hunter
```

Runs the official kube-hunter container using the host network for visibility.

### docker run --rm aquasec/kube-hunter --cidr [CIDR]

```bash
docker run --rm aquasec/kube-hunter --cidr [CIDR]
```

Example:

```bash
docker run --rm aquasec/kube-hunter --cidr 192.168.1.0/24
```

Runs the kube-hunter container to scan a specific remote CIDR.

### docker run --rm aquasec/kube-hunter --pod

```bash
docker run --rm aquasec/kube-hunter --pod
```

Runs the container in pod mode (useful when deployed as a Job inside K8s).


## Complex Workflow

### kube-hunter --cidr [CIDR] --active --dispatch http --dispatch-url [URL] --report json

```bash
kube-hunter --cidr [CIDR] --active --dispatch http --dispatch-url [URL] --report json
```

Example:

```bash
kube-hunter --cidr 10.0.0.0/8 --active --dispatch http --dispatch-url http://log-server:8080 --report json
```

Maximal command combining range scan, active hunting, JSON reporting, and HTTP dispatch.


## Specific Hunter

### kube-hunter --include-hunters ApiServerDiscovery

```bash
kube-hunter --include-hunters ApiServerDiscovery
```

Limits the scan to identifying if the API server is discoverable.

### kube-hunter --include-hunters EtcdDiscovery

```bash
kube-hunter --include-hunters EtcdDiscovery
```

Limits the scan to identifying if the Etcd service is discoverable.

### kube-hunter --active --include-hunters KubectlClient

```bash
kube-hunter --active --include-hunters KubectlClient
```

Actively checks if an exposed kubectl client configuration can be exploited.

### kube-hunter --active --include-hunters HelmDiscovery

```bash
kube-hunter --active --include-hunters HelmDiscovery
```

Checks for exposed Helm Tiller instances (relevant for older clusters).


## Timeout Tuning

### kube-hunter --remote [IP] --request-timeout [SECONDS]

```bash
kube-hunter --remote [IP] --request-timeout [SECONDS]
```

Example:

```bash
kube-hunter --remote 192.168.1.1 --request-timeout 5
```

Sets a custom timeout for network requests to handle slow networks.


## Cleanup

### pkill -f kube-hunter

```bash
pkill -f kube-hunter
```

Forcefully terminates running kube-hunter processes.

## Related tools

- [kube-bench](https://terminal.rokibulroni.com/tool/cloud/kube-bench)
- [kubectl](https://terminal.rokibulroni.com/tool/cloud/kubectl)
