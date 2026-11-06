# Docker Bench for Security

> A script that checks a Docker host against dozens of CIS Docker Benchmark best practices for production deployments.

- Category: Cloud
- Commands: 50
- Page: https://terminal.rokibulroni.com/tool/cloud/docker-bench-security
- Homepage: https://github.com/docker/docker-bench-security
- Documentation: https://github.com/docker/docker-bench-security#running-docker-bench-for-security
- Tags: Docker, CIS benchmark, hardening

## Install

- other: `git clone https://github.com/docker/docker-bench-security.git && cd docker-bench-security && sudo sh docker-bench-security.sh`

## Basic Execution

### sudo ./docker-bench-security.sh

```bash
sudo ./docker-bench-security.sh
```

Executes the full CIS Docker Benchmark audit script against the local host using default settings.

### docker run --rm --net host --pid host --userns host --cap-add audit_control -v /etc:/etc:ro -v /var/lib:/var/lib:ro -v /

```bash
docker run --rm --net host --pid host --userns host --cap-add audit_control -v /etc:/etc:ro -v /var/lib:/var/lib:ro -v /var/run/docker.sock:/var/run/docker.sock:ro --label docker_bench_security docker/docker-bench-security
```

Runs Docker Bench for Security from a container with necessary volume mounts and privileges to audit the host.

### sudo ./docker-bench-security.sh -h

```bash
sudo ./docker-bench-security.sh -h
```

Displays the help menu listing all available flags and execution options.


## Output and Reporting

### sudo ./docker-bench-security.sh -l <filename>

```bash
sudo ./docker-bench-security.sh -l <filename>
```

Example:

```bash
sudo ./docker-bench-security.sh -l my-audit-log
```

Runs the benchmark and saves the output to a specified log file in the current directory.

### sudo ./docker-bench-security.sh -p

```bash
sudo ./docker-bench-security.sh -p
```

Prevents the script from writing any log files to disk, outputting only to stdout.


## Host and Daemon Configuration

### sudo ./docker-bench-security.sh -c host_configuration

```bash
sudo ./docker-bench-security.sh -c host_configuration
```

Limits the audit strictly to Section 1: Host Configuration checks.

### sudo ./docker-bench-security.sh -c docker_daemon_configuration

```bash
sudo ./docker-bench-security.sh -c docker_daemon_configuration
```

Limits the audit strictly to Section 2: Docker Daemon Configuration checks.

### sudo ./docker-bench-security.sh -c docker_daemon_configuration_files

```bash
sudo ./docker-bench-security.sh -c docker_daemon_configuration_files
```

Limits the audit strictly to Section 3: Docker Daemon Configuration Files checks.


## Image and Build Configuration

### sudo ./docker-bench-security.sh -c container_images

```bash
sudo ./docker-bench-security.sh -c container_images
```

Limits the audit strictly to Section 4: Container Images and Build File checks.


## Container and Runtime Security

### sudo ./docker-bench-security.sh -c container_runtime

```bash
sudo ./docker-bench-security.sh -c container_runtime
```

Limits the audit strictly to Section 5: Container Runtime checks.

### sudo ./docker-bench-security.sh -c docker_security_operations

```bash
sudo ./docker-bench-security.sh -c docker_security_operations
```

Limits the audit strictly to Section 6: Docker Security Operations checks.

### sudo ./docker-bench-security.sh -c docker_swarm_configuration

```bash
sudo ./docker-bench-security.sh -c docker_swarm_configuration
```

Limits the audit strictly to Section 7: Docker Swarm Configuration checks.


## Specific Check Targeting

### sudo ./docker-bench-security.sh -c check_1.1

```bash
sudo ./docker-bench-security.sh -c check_1.1
```

Runs only the specific check 1.1 regarding Linux Kernel Capabilities.

### sudo ./docker-bench-security.sh -c check_2.1,check_2.2

```bash
sudo ./docker-bench-security.sh -c check_2.1,check_2.2
```

Runs a comma-separated list of specific checks, ignoring all others.


## Excluding Checks

### sudo ./docker-bench-security.sh -e check_2.6

```bash
sudo ./docker-bench-security.sh -e check_2.6
```

Runs the full benchmark but explicitly excludes check 2.6 (TLS authentication).

### sudo ./docker-bench-security.sh -e check_4.5,check_5.1

```bash
sudo ./docker-bench-security.sh -e check_4.5,check_5.1
```

Runs the full benchmark while excluding multiple specific checks defined by a comma-separated list.

### sudo ./docker-bench-security.sh -e docker_swarm_configuration

```bash
sudo ./docker-bench-security.sh -e docker_swarm_configuration
```

Runs the full benchmark but skips the entire Docker Swarm Configuration section.


## Image Filter

### sudo ./docker-bench-security.sh -t <image_tag>

```bash
sudo ./docker-bench-security.sh -t <image_tag>
```

Example:

```bash
sudo ./docker-bench-security.sh -t postgres
```

Limits the container image checks to only images matching the specified tag.


## Output and Reporting

### sudo ./docker-bench-security.sh -j

```bash
sudo ./docker-bench-security.sh -j
```

Outputs the audit results in JSON format to the console for parsing.

### sudo ./docker-bench-security.sh -j -l output.json

```bash
sudo ./docker-bench-security.sh -j -l output.json
```

Runs the benchmark and saves the results in JSON format to a specific file.


## Container Execution Variants

### docker run --rm --net host --pid host --userns host --cap-add audit_control -v /etc:/etc:ro -v /var/lib:/var/lib:ro -v /

```bash
docker run --rm --net host --pid host --userns host --cap-add audit_control -v /etc:/etc:ro -v /var/lib:/var/lib:ro -v /var/run/docker.sock:/var/run/docker.sock:ro --label docker_bench_security docker/docker-bench-security -c host_configuration
```

Runs only the host configuration checks using the containerized version of the tool.

### docker run --rm --net host --pid host --userns host --cap-add audit_control -v /etc:/etc:ro -v /var/lib:/var/lib:ro -v /

```bash
docker run --rm --net host --pid host --userns host --cap-add audit_control -v /etc:/etc:ro -v /var/lib:/var/lib:ro -v /var/run/docker.sock:/var/run/docker.sock:ro --label docker_bench_security docker/docker-bench-security -e check_1.1
```

Runs the containerized benchmark excluding specific kernel capability checks.


## Environment Configuration

### export DOCKER_CONTENT_TRUST=1 && sudo ./docker-bench-security.sh

```bash
export DOCKER_CONTENT_TRUST=1 && sudo ./docker-bench-security.sh
```

Enables Docker Content Trust in the shell before running the benchmark to satisfy DCT checks.

### sudo -E ./docker-bench-security.sh

```bash
sudo -E ./docker-bench-security.sh
```

Preserves existing environment variables (like proxy settings) when running the script as root.


## Logging and Auditing

### sudo ./docker-bench-security.sh -c check_1.2.1

```bash
sudo ./docker-bench-security.sh -c check_1.2.1
```

Validates specifically if a separate partition for containers has been created.

### sudo ./docker-bench-security.sh -c check_2.12

```bash
sudo ./docker-bench-security.sh -c check_2.12
```

Checks specifically if centralized and remote logging is configured for the Docker daemon.


## Access Control

### sudo ./docker-bench-security.sh -c check_2.13

```bash
sudo ./docker-bench-security.sh -c check_2.13
```

Verifies that the Docker daemon performs live restoration to reduce downtime.

### sudo ./docker-bench-security.sh -c check_3.1,check_3.2

```bash
sudo ./docker-bench-security.sh -c check_3.1,check_3.2
```

Audits the ownership and permissions of the docker.service and docker.socket files.


## Automation and Pipeline

### sudo ./docker-bench-security.sh -j | jq .

```bash
sudo ./docker-bench-security.sh -j | jq .
```

Pipes the JSON output to jq for immediate formatted validation in a terminal.

### sudo ./docker-bench-security.sh -j > docker-bench-results.json

```bash
sudo ./docker-bench-security.sh -j > docker-bench-results.json
```

Redirects JSON output to a file for ingestion by SIEM or dashboard tools.


## Advanced Filtering

### sudo ./docker-bench-security.sh -c host_configuration,container_runtime -e check_1.2

```bash
sudo ./docker-bench-security.sh -c host_configuration,container_runtime -e check_1.2
```

Combines inclusion and exclusion flags to audit host and runtime sections but skip disk partition checks.

### sudo ./docker-bench-security.sh -c check_4.1 -t production_image

```bash
sudo ./docker-bench-security.sh -c check_4.1 -t production_image
```

Checks user creation within containers only for images tagged 'production_image'.


## Cloud Posture

### sudo ./docker-bench-security.sh -c check_2.4

```bash
sudo ./docker-bench-security.sh -c check_2.4
```

Verifies that insecure registries are not allowed in the daemon configuration.

### sudo ./docker-bench-security.sh -c check_2.11

```bash
sudo ./docker-bench-security.sh -c check_2.11
```

Ensures that Userland Proxy is disabled if hairpin NAT is available.


## Blue Team Validation

### sudo ./docker-bench-security.sh -c check_5.10

```bash
sudo ./docker-bench-security.sh -c check_5.10
```

Verifies that memory usage limits are set for containers to prevent DoS attacks.

### sudo ./docker-bench-security.sh -c check_5.11

```bash
sudo ./docker-bench-security.sh -c check_5.11
```

Verifies that CPU priority is set appropriately for containers.

### sudo ./docker-bench-security.sh -c check_5.12

```bash
sudo ./docker-bench-security.sh -c check_5.12
```

Ensures the container's root filesystem is mounted as read-only.

### sudo ./docker-bench-security.sh -c check_5.31

```bash
sudo ./docker-bench-security.sh -c check_5.31
```

Checks that the docker socket is not mounted inside any container.


## Compliance Auditing

### sudo ./docker-bench-security.sh -l /var/log/audit/docker_compliance_$(date +%F).log

```bash
sudo ./docker-bench-security.sh -l /var/log/audit/docker_compliance_$(date +%F).log
```

Generates a timestamped compliance log file in a dedicated audit directory.


## Incident Response

### sudo ./docker-bench-security.sh -c check_5.25

```bash
sudo ./docker-bench-security.sh -c check_5.25
```

Checks if container health checks are configured to detect compromised or stalled services.

### sudo ./docker-bench-security.sh -c check_2.15

```bash
sudo ./docker-bench-security.sh -c check_2.15
```

Validates that User Namespace Remapping is enabled to mitigate privilege escalation attacks.


## Advanced Container Runtime

### docker run --rm --net host --pid host --userns host --cap-add audit_control -v /etc:/etc:ro -v /var/lib:/var/lib:ro -v /

```bash
docker run --rm --net host --pid host --userns host --cap-add audit_control -v /etc:/etc:ro -v /var/lib:/var/lib:ro -v /var/run/docker.sock:/var/run/docker.sock:ro --label docker_bench_security docker/docker-bench-security -j > report.json
```

Runs the containerized audit in a pipeline and saves JSON output to the host.


## CI/CD Integration

### sh -c 'sudo ./docker-bench-security.sh -j' | grep -q '"Warn": 0'

```bash
sh -c 'sudo ./docker-bench-security.sh -j' | grep -q '"Warn": 0'
```

Pipeline check that fails if any warnings are detected in the JSON output.

### sh -c 'sudo ./docker-bench-security.sh -j' | grep -q '"Fail": 0'

```bash
sh -c 'sudo ./docker-bench-security.sh -j' | grep -q '"Fail": 0'
```

Pipeline check that fails if any hard failures are detected in the JSON output.


## Advanced Customization

### sudo ./docker-bench-security.sh -b -l custom.log -c container_images -e check_4.6

```bash
sudo ./docker-bench-security.sh -b -l custom.log -c container_images -e check_4.6
```

Runs a customized audit on images, logging to a file, excluding health check validation.


## Legacy Compatibility

### sudo ./docker-bench-security.sh -c 1,2,3

```bash
sudo ./docker-bench-security.sh -c 1,2,3
```

Runs checks for sections 1, 2, and 3 using the older comma-separated integer syntax.


## Docker Rootless

### docker-bench-security.sh

```bash
docker-bench-security.sh
```

Attempts to run the script without sudo, useful for verifying rootless docker configurations.


## Network Security

### sudo ./docker-bench-security.sh -c check_5.9

```bash
sudo ./docker-bench-security.sh -c check_5.9
```

Checks if the container's network bridge is set to the default docker0.

### sudo ./docker-bench-security.sh -c check_2.6

```bash
sudo ./docker-bench-security.sh -c check_2.6
```

Verifies that TLS authentication is configured for the Docker daemon.


## Cleanup

### rm docker-bench-security.log.json

```bash
rm docker-bench-security.log.json
```

Removes the default JSON log file generated by the tool after audit completion.

## Related tools

- [Docker](https://terminal.rokibulroni.com/tool/cloud/docker)
- [kube-bench](https://terminal.rokibulroni.com/tool/cloud/kube-bench)
- [Trivy](https://terminal.rokibulroni.com/tool/containers/trivy)
