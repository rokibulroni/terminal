# kube-bench

> Checks whether a Kubernetes cluster is deployed securely by running the CIS Kubernetes Benchmark tests against nodes and control plane.

- Category: Cloud
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/cloud/kube-bench
- Homepage: https://github.com/aquasecurity/kube-bench
- Documentation: https://github.com/aquasecurity/kube-bench/blob/main/docs/running.md
- Tags: Kubernetes, CIS benchmark, hardening

## Install

- brew: `brew install kube-bench`
- docker: `docker run --rm --pid=host -v /etc:/etc:ro -v /var:/var:ro aquasec/kube-bench:latest`

## Basic Execution

### kube-bench

```bash
kube-bench
```

Runs the default CIS benchmark checks based on auto-detected Kubernetes version and node type.

### kube-bench run

```bash
kube-bench run
```

Explicitly triggers the run command to execute benchmarks using default settings.

### kube-bench version

```bash
kube-bench version
```

Displays the installed version of the kube-bench tool.


## Target Selection

### kube-bench run --targets master

```bash
kube-bench run --targets master
```

Executes security checks specifically designed for the Kubernetes master/control plane node.

### kube-bench run --targets node

```bash
kube-bench run --targets node
```

Executes security checks specifically designed for Kubernetes worker nodes.

### kube-bench run --targets etcd

```bash
kube-bench run --targets etcd
```

Runs checks specifically targeting the etcd data store configuration and security.

### kube-bench run --targets policies

```bash
kube-bench run --targets policies
```

Runs checks aimed at validating Kubernetes policies and RBAC configurations.

### kube-bench run --targets controlplane

```bash
kube-bench run --targets controlplane
```

Target alias often used interchangeably with master to check control plane components.

### kube-bench run --targets master,node

```bash
kube-bench run --targets master,node
```

Executes benchmark checks for both master and worker node roles simultaneously.

### kube-bench run --targets master,etcd

```bash
kube-bench run --targets master,etcd
```

Combines control plane and etcd checks in a single execution run.


## Output Formatting

### kube-bench run --json

```bash
kube-bench run --json
```

Outputs the audit results in structured JSON format for parsing and automation.

### kube-bench run --junit

```bash
kube-bench run --junit
```

Outputs the audit results in JUnit XML format for CI/CD pipeline integration.

### kube-bench run --noremediations

```bash
kube-bench run --noremediations
```

Runs checks but suppresses the remediation suggestions in the output to reduce clutter.

### kube-bench run --noresults

```bash
kube-bench run --noresults
```

Suppresses the detailed results output, useful when only interested in exit codes or logs.


## Specific Checks

### kube-bench run --check <ID>

```bash
kube-bench run --check <ID>
```

Example:

```bash
kube-bench run --check 1.1.1
```

Executes only the specific benchmark check identified by the provided ID.

### kube-bench run --check <ID_LIST>

```bash
kube-bench run --check <ID_LIST>
```

Example:

```bash
kube-bench run --check 1.1.1,1.1.2,1.1.3
```

Executes a comma-separated list of specific benchmark check IDs.


## Skipping Checks

### kube-bench run --skip <ID>

```bash
kube-bench run --skip <ID>
```

Example:

```bash
kube-bench run --skip 1.1.1
```

Runs all default checks except the specific ID provided.

### kube-bench run --skip <ID_LIST>

```bash
kube-bench run --skip <ID_LIST>
```

Example:

```bash
kube-bench run --skip 1.1.1,1.1.2
```

Runs all default checks while excluding the comma-separated list of IDs.


## Benchmark Versions

### kube-bench run --benchmark cis-1.5

```bash
kube-bench run --benchmark cis-1.5
```

Forces the usage of the legacy CIS Kubernetes Benchmark v1.5.

### kube-bench run --benchmark cis-1.6

```bash
kube-bench run --benchmark cis-1.6
```

Forces the usage of the CIS Kubernetes Benchmark v1.6.

### kube-bench run --benchmark cis-1.7

```bash
kube-bench run --benchmark cis-1.7
```

Forces the usage of the CIS Kubernetes Benchmark v1.7.

### kube-bench run --benchmark cis-1.20

```bash
kube-bench run --benchmark cis-1.20
```

Forces the usage of the CIS Kubernetes Benchmark v1.20.

### kube-bench run --benchmark cis-1.23

```bash
kube-bench run --benchmark cis-1.23
```

Forces the usage of the CIS Kubernetes Benchmark v1.23.


## Cloud Specific

### kube-bench run --benchmark eks-1.2.0

```bash
kube-bench run --benchmark eks-1.2.0
```

Runs the CIS benchmark specifically tailored for Amazon EKS v1.2.0.

### kube-bench run --benchmark gke-1.0

```bash
kube-bench run --benchmark gke-1.0
```

Runs the CIS benchmark specifically tailored for Google Kubernetes Engine (GKE).

### kube-bench run --benchmark aks-1.0

```bash
kube-bench run --benchmark aks-1.0
```

Runs the CIS benchmark specifically tailored for Azure Kubernetes Service (AKS).

### kube-bench run --benchmark rh-0.0.1

```bash
kube-bench run --benchmark rh-0.0.1
```

Runs the benchmark specifically tailored for Red Hat OpenShift environments.

### kube-bench run --benchmark ack-1.0

```bash
kube-bench run --benchmark ack-1.0
```

Runs the CIS benchmark specifically tailored for Alibaba Cloud Container Service.


## Version Override

### kube-bench run --version <K8S_VER>

```bash
kube-bench run --version <K8S_VER>
```

Example:

```bash
kube-bench run --version 1.24
```

Manually specifies the Kubernetes version to select the appropriate benchmark set.


## Configuration

### kube-bench run --config-dir <PATH>

```bash
kube-bench run --config-dir <PATH>
```

Example:

```bash
kube-bench run --config-dir /etc/kube-bench/cfg
```

Specifies a custom directory path to look for benchmark configuration files.

### kube-bench run --config <FILE>

```bash
kube-bench run --config <FILE>
```

Example:

```bash
kube-bench run --config /custom/config.yaml
```

Specifies a custom configuration file instead of the default config.yaml.


## Logging

### kube-bench run --log_level 1

```bash
kube-bench run --log_level 1
```

Sets the logging verbosity to level 1 for basic info logging.

### kube-bench run --log_level 2

```bash
kube-bench run --log_level 2
```

Sets the logging verbosity to level 2 for more detailed debug information.


## Advanced Workflow

### kube-bench run --targets master --json --noremediations

```bash
kube-bench run --targets master --json --noremediations
```

Runs master checks outputting pure JSON without remediation text for cleaner data ingestion.

### kube-bench run --targets node --junit --skip <ID>

```bash
kube-bench run --targets node --junit --skip <ID>
```

Example:

```bash
kube-bench run --targets node --junit --skip 4.1.1
```

Runs node checks, skips a known false positive, and outputs JUnit XML for CI pipelines.

### kube-bench run --targets etcd --check <ID_LIST> --json

```bash
kube-bench run --targets etcd --check <ID_LIST> --json
```

Example:

```bash
kube-bench run --targets etcd --check 2.1,2.2 --json
```

Audits specific etcd configurations and outputs the result in JSON.

### kube-bench run --benchmark cis-1.23 --targets master

```bash
kube-bench run --benchmark cis-1.23 --targets master
```

Forces a specific modern CIS benchmark version on the master node regardless of detection.


## Containerized Execution

### kube-bench run --targets node --version <VER>

```bash
kube-bench run --targets node --version <VER>
```

Example:

```bash
kube-bench run --targets node --version 1.25
```

Typical command used inside a Job definition to audit the node hosting the pod.


## File Output

### kube-bench run --json > report.json

```bash
kube-bench run --json > report.json
```

Standard shell redirection to save JSON audit results to a file for later analysis.

### kube-bench run --junit > junit.xml

```bash
kube-bench run --junit > junit.xml
```

Standard shell redirection to save JUnit XML results to a file for Jenkins/GitLab.


## Performance Tuning

### kube-bench run --v 0

```bash
kube-bench run --v 0
```

Runs with minimal verbosity, reducing IO overhead during execution.


## Blue Team Validation

### kube-bench run --check <CRITICAL_IDS>

```bash
kube-bench run --check <CRITICAL_IDS>
```

Example:

```bash
kube-bench run --check 1.2.1,1.2.2
```

Rapidly validates the state of specific critical control plane configurations during an incident.


## Compliance Audit

### kube-bench run --targets master,node,etcd --json

```bash
kube-bench run --targets master,node,etcd --json
```

Full cluster compliance sweep outputting a comprehensive JSON report.


## Custom Config

### kube-bench run --config-dir cfg/ --benchmark <CUSTOM>

```bash
kube-bench run --config-dir cfg/ --benchmark <CUSTOM>
```

Example:

```bash
kube-bench run --config-dir cfg/ --benchmark custom-1.0
```

Runs a custom-defined benchmark suite located in a specific directory.


## Specific Check Group

### kube-bench run --check 1.1

```bash
kube-bench run --check 1.1
```

Runs all sub-checks under section 1.1 (e.g., API Server configuration).


## Environment Override

### kube-bench run --version <OLD_VER>

```bash
kube-bench run --version <OLD_VER>
```

Example:

```bash
kube-bench run --version 1.15
```

Simulates an audit for an older Kubernetes version to test legacy compliance rules.


## EKS Analysis

### kube-bench run --benchmark eks-1.2.0 --targets node

```bash
kube-bench run --benchmark eks-1.2.0 --targets node
```

Validates worker node security posture specifically against EKS standards.


## GKE Analysis

### kube-bench run --benchmark gke-1.0 --targets node

```bash
kube-bench run --benchmark gke-1.0 --targets node
```

Validates worker node security posture specifically against GKE standards.


## Combined Filter

### kube-bench run --targets master --skip <FAILING_IDS>

```bash
kube-bench run --targets master --skip <FAILING_IDS>
```

Example:

```bash
kube-bench run --targets master --skip 1.1.9,1.1.10
```

Runs master checks while ignoring known failing controls that are accepted risks.


## DevOps Pipeline

### kube-bench run --targets node --json --noremediations > result.json

```bash
kube-bench run --targets node --json --noremediations > result.json
```

Optimized command for automated pipeline jobs to capture node status silently.


## Interactive Debug

### kube-bench run --log_level 2 --check <ID>

```bash
kube-bench run --log_level 2 --check <ID>
```

Example:

```bash
kube-bench run --log_level 2 --check 1.2.5
```

High verbosity run on a single check to troubleshoot why a specific audit is failing.


## Post-Incident

### kube-bench run --targets policies --json

```bash
kube-bench run --targets policies --json
```

Audits RBAC and ServiceAccount policies specifically to detect permission drifts.


## Legacy Support

### kube-bench run --benchmark cis-1.4

```bash
kube-bench run --benchmark cis-1.4
```

Runs very old benchmark definitions for maintaining legacy system audits.


## Control Plane Only

### kube-bench run --targets controlplane --json

```bash
kube-bench run --targets controlplane --json
```

Focuses strictly on the control plane components for managed service validations.


## Automated Parsing

### kube-bench run --json --noresults

```bash
kube-bench run --json --noresults
```

Generates JSON structure without human-readable summaries, maximizing parsing speed.


## Full System Audit

### kube-bench run --targets master,node,etcd,policies

```bash
kube-bench run --targets master,node,etcd,policies
```

Maximum coverage command targeting every available component and policy.


## Specific Benchmark Path

### kube-bench run --config-dir /opt/kube-bench/cfg

```bash
kube-bench run --config-dir /opt/kube-bench/cfg
```

Directs kube-bench to load configuration from a non-standard system location.


## CI/CD Gate

### kube-bench run --junit --targets master --skip <FLAKY>

```bash
kube-bench run --junit --targets master --skip <FLAKY>
```

Example:

```bash
kube-bench run --junit --targets master --skip 1.2.20
```

Production gate check outputting JUnit, ignoring flaky tests to prevent build failures.


## Quick Sanity Check

### kube-bench run --check 1.1.1,1.1.2,1.1.3

```bash
kube-bench run --check 1.1.1,1.1.2,1.1.3
```

Runs only the first three API server checks as a quick health signal.


## Documentation Generation

### kube-bench run --json > current_audit.json

```bash
kube-bench run --json > current_audit.json
```

Snapshots the current security posture to a JSON file for documentation and comparison.

## Related tools

- [kube-hunter](https://terminal.rokibulroni.com/tool/cloud/kube-hunter)
- [kubectl](https://terminal.rokibulroni.com/tool/cloud/kubectl)
- [Docker Bench for Security](https://terminal.rokibulroni.com/tool/cloud/docker-bench-security)
