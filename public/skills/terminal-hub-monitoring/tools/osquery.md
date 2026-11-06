# osquery

> Exposes the operating system as a SQL database: query processes, users, ports, packages and more across Linux, macOS and Windows.

- Category: Monitoring
- Commands: 85
- Page: https://terminal.rokibulroni.com/tool/monitoring/osquery
- Homepage: https://osquery.io
- Documentation: https://osquery.readthedocs.io
- Tags: endpoint visibility, SQL, detection

## Install

- apt: `sudo apt install osquery`
- brew: `brew install --cask osquery`
- windows: `winget install osquery.osquery`

## Interactive Query Shell

### osqueryi

```bash
osqueryi
```

Launches the interactive osquery shell for live ad-hoc system querying.

### osqueryi --help

```bash
osqueryi --help
```

Displays the list of available command-line flags and options for the interactive shell.

### .help

```bash
.help
```

Lists the available meta-commands within the interactive shell environment.

### .tables

```bash
.tables
```

Lists all available tables that can be queried on the current operating system.

### .schema

```bash
.schema
```

Example:

```bash
.schema users
```

Displays the structure and column definitions for a specific table.

### .mode

```bash
.mode
```

Example:

```bash
.mode pretty
```

Sets the output display mode to pretty-print, line, list, or csv for better readability.

### .quit

```bash
.quit
```

Exits the interactive osquery shell safely.


## System Information

### SELECT version FROM osquery_info;

```bash
SELECT version FROM osquery_info;
```

Retrieves the currently installed version of the osquery agent.

### SELECT * FROM system_info;

```bash
SELECT * FROM system_info;
```

Example:

```bash
SELECT hostname, cpu_brand, physical_memory FROM system_info;
```

Queries core hardware and operating system details including hostname and memory.

### SELECT * FROM uptime;

```bash
SELECT * FROM uptime;
```

Example:

```bash
SELECT total_seconds FROM uptime;
```

Checks how long the system has been running since the last reboot.

### SELECT * FROM os_version;

```bash
SELECT * FROM os_version;
```

Example:

```bash
SELECT name, major, minor, patch FROM os_version;
```

Details the specific operating system version and build number.


## User & Account Auditing

### SELECT * FROM users;

```bash
SELECT * FROM users;
```

Example:

```bash
SELECT uid, username, description FROM users;
```

Lists all local user accounts present on the system.

### SELECT * FROM groups;

```bash
SELECT * FROM groups;
```

Example:

```bash
SELECT gid, groupname FROM groups;
```

Lists all local groups defined on the system.

### SELECT * FROM logged_in_users;

```bash
SELECT * FROM logged_in_users;
```

Example:

```bash
SELECT user, tty, host, time FROM logged_in_users;
```

Identifies users currently logged into the system and their source.

### SELECT * FROM last;

```bash
SELECT * FROM last;
```

Example:

```bash
SELECT username, time, type FROM last;
```

Reviews the history of system logins and reboots.


## Process Monitoring

### SELECT * FROM processes;

```bash
SELECT * FROM processes;
```

Example:

```bash
SELECT pid, name, path, cmdline FROM processes;
```

Enumerates all currently running processes on the host.

### SELECT * FROM process_envs;

```bash
SELECT * FROM process_envs;
```

Example:

```bash
SELECT pid, key, value FROM process_envs WHERE pid = 1;
```

inspects the environment variables associated with a specific process ID.

### SELECT * FROM process_open_files;

```bash
SELECT * FROM process_open_files;
```

Example:

```bash
SELECT pid, fd, path FROM process_open_files WHERE pid = <PID>;
```

Lists all file descriptors currently opened by a specific process.

### SELECT * FROM process_memory_map;

```bash
SELECT * FROM process_memory_map;
```

Example:

```bash
SELECT pid, path, permissions FROM process_memory_map WHERE pid = <PID>;
```

Examines the memory map of a process to see loaded shared libraries.


## Network Analysis

### SELECT * FROM listening_ports;

```bash
SELECT * FROM listening_ports;
```

Example:

```bash
SELECT port, protocol, address FROM listening_ports;
```

Identifies ports that are currently in a listening state on the host.

### SELECT * FROM process_open_sockets;

```bash
SELECT * FROM process_open_sockets;
```

Example:

```bash
SELECT pid, local_port, remote_address, remote_port FROM process_open_sockets;
```

Maps active network sockets to the processes that own them.

### SELECT * FROM interface_addresses;

```bash
SELECT * FROM interface_addresses;
```

Example:

```bash
SELECT interface, address, mask FROM interface_addresses;
```

Lists the IP addresses assigned to network interfaces.

### SELECT * FROM dns_resolvers;

```bash
SELECT * FROM dns_resolvers;
```

Checks the DNS servers configured for the system.

### SELECT * FROM etc_hosts;

```bash
SELECT * FROM etc_hosts;
```

Example:

```bash
SELECT address, hostnames FROM etc_hosts;
```

Reads the static host definitions from the hosts file.


## File System Inspection

### SELECT * FROM file;

```bash
SELECT * FROM file;
```

Example:

```bash
SELECT path, size, mode, uid FROM file WHERE path = '/etc/passwd';
```

Retrieves metadata for a specific file on the disk.

### SELECT * FROM hash;

```bash
SELECT * FROM hash;
```

Example:

```bash
SELECT path, sha256 FROM hash WHERE path = '/bin/ls';
```

Calculates the cryptographic hash (MD5, SHA1, SHA256) of a specific file.

### Recursive File Search

```bash
Recursive File Search
```

Example:

```bash
SELECT path, filename FROM file WHERE directory = '/etc/' AND filename LIKE '%.conf';
```

Performs a wildcard search for files within a specific directory.


## Software & Packages

### SELECT * FROM deb_packages;

```bash
SELECT * FROM deb_packages;
```

Example:

```bash
SELECT name, version, status FROM deb_packages;
```

Lists installed Debian-based packages (Ubuntu/Debian systems).

### SELECT * FROM rpm_packages;

```bash
SELECT * FROM rpm_packages;
```

Example:

```bash
SELECT name, version, release FROM rpm_packages;
```

Lists installed RPM-based packages (RHEL/CentOS systems).

### SELECT * FROM python_packages;

```bash
SELECT * FROM python_packages;
```

Example:

```bash
SELECT name, version FROM python_packages;
```

Enumerates globally installed Python libraries.


## Persistence Mechanisms

### SELECT * FROM startup_items;

```bash
SELECT * FROM startup_items;
```

Example:

```bash
SELECT name, path, status FROM startup_items;
```

Checks for items configured to run automatically at system boot.

### SELECT * FROM crontab;

```bash
SELECT * FROM crontab;
```

Example:

```bash
SELECT command, path FROM crontab;
```

Audits scheduled cron jobs for all users.

### SELECT * FROM systemd_units;

```bash
SELECT * FROM systemd_units;
```

Example:

```bash
SELECT id, active_state, load_state FROM systemd_units;
```

Inspects systemd services and their current status on Linux systems.

### SELECT * FROM kernel_modules;

```bash
SELECT * FROM kernel_modules;
```

Example:

```bash
SELECT name, size FROM kernel_modules;
```

Lists loaded kernel modules or drivers which could indicate rootkits.


## Daemon Configuration

### osqueryd --flagfile

```bash
osqueryd --flagfile
```

Example:

```bash
osqueryd --flagfile /etc/osquery/osquery.flags
```

Starts the osquery daemon using a specific flag file for configuration.

### osqueryd --config_check

```bash
osqueryd --config_check
```

Validates the syntax of the configuration file without starting the daemon.

### osqueryd --verbose

```bash
osqueryd --verbose
```

Enables verbose logging to standard output for debugging daemon issues.

### osqueryd --pidfile

```bash
osqueryd --pidfile
```

Example:

```bash
osqueryd --pidfile /var/run/osqueryd.pid
```

Specifies the location to write the daemon's process ID file.


## Logging & Output

### osqueryi --json

```bash
osqueryi --json
```

Example:

```bash
osqueryi --json "SELECT * FROM users"
```

Executes a query and outputs the result in strict JSON format.

### osqueryi --csv

```bash
osqueryi --csv
```

Example:

```bash
osqueryi --csv "SELECT * FROM users"
```

Executes a query and outputs the result in CSV format.

### osqueryd --logger_plugin

```bash
osqueryd --logger_plugin
```

Example:

```bash
osqueryd --logger_plugin filesystem
```

Configures the daemon to write logs to the local filesystem.

### osqueryd --logger_path

```bash
osqueryd --logger_path
```

Example:

```bash
osqueryd --logger_path /var/log/osquery
```

Sets the specific directory where filesystem logs will be stored.


## Performance Tuning

### osqueryd --watchdog_level

```bash
osqueryd --watchdog_level
```

Example:

```bash
osqueryd --watchdog_level 3
```

Sets the strictness of the watchdog process that monitors daemon resource usage.

### osqueryd --watchdog_memory_limit

```bash
osqueryd --watchdog_memory_limit
```

Example:

```bash
osqueryd --watchdog_memory_limit 500
```

Limits the memory (in MB) the daemon can use before being restarted.

### osqueryd --watchdog_utilization_limit

```bash
osqueryd --watchdog_utilization_limit
```

Example:

```bash
osqueryd --watchdog_utilization_limit 20
```

Limits the CPU utilization percentage the daemon is allowed to consume.


## Event Auditing

### SELECT * FROM process_events;

```bash
SELECT * FROM process_events;
```

Example:

```bash
SELECT pid, path, time FROM process_events;
```

Queries the real-time event buffer for process executions (requires audit enabling).

### SELECT * FROM file_events;

```bash
SELECT * FROM file_events;
```

Example:

```bash
SELECT target_path, action, time FROM file_events;
```

Queries the event buffer for file system changes monitored by FIM configurations.

### SELECT * FROM socket_events;

```bash
SELECT * FROM socket_events;
```

Example:

```bash
SELECT local_port, remote_address, action FROM socket_events;
```

Queries the event buffer for network socket connections and binds.

### osqueryd --disable_events=false

```bash
osqueryd --disable_events=false
```

Ensures the eventing subsystem is enabled for table based auditing.

### osqueryd --events_expiry

```bash
osqueryd --events_expiry
```

Example:

```bash
osqueryd --events_expiry 3600
```

Sets the time in seconds before events expire from the internal buffer.


## TLS & Remote Logging

### osqueryd --tls_hostname

```bash
osqueryd --tls_hostname
```

Example:

```bash
osqueryd --tls_hostname osquery.example.com
```

Defines the remote TLS server hostname for configuration and log shipping.

### osqueryd --enroll_secret_path

```bash
osqueryd --enroll_secret_path
```

Example:

```bash
osqueryd --enroll_secret_path /etc/osquery/enroll.secret
```

Points to the file containing the shared secret used for authenticating to the TLS server.

### osqueryd --config_plugin tls

```bash
osqueryd --config_plugin tls
```

Instructs the daemon to pull its configuration from the remote TLS server.


## SOC Monitoring Workflow

### JOIN Processes and Users

```bash
JOIN Processes and Users
```

Example:

```bash
SELECT p.pid, p.name, u.username FROM processes p JOIN users u ON p.uid = u.uid;
```

Correlates running processes with the specific user account running them.

### JOIN Listening Ports and Processes

```bash
JOIN Listening Ports and Processes
```

Example:

```bash
SELECT p.name, l.port, l.protocol FROM listening_ports l JOIN processes p ON l.pid = p.pid;
```

Identifies exactly which process binary is responsible for an open port.


## Blue Team Validation

### Verify Firewall Rules

```bash
Verify Firewall Rules
```

Example:

```bash
SELECT * FROM iptables;
```

Audits the current iptables ruleset to ensure firewall policy compliance.

### Check Mount Points

```bash
Check Mount Points
```

Example:

```bash
SELECT device, path, type FROM mounts;
```

Verifies that filesystems are mounted with correct options (e.g., noexec on tmp).

### Audit SSH Keys

```bash
Audit SSH Keys
```

Example:

```bash
SELECT * FROM authorized_keys;
```

Lists all public keys authorized to SSH into user accounts.

### Detect World Writable Files

```bash
Detect World Writable Files
```

Example:

```bash
SELECT path, mode FROM file WHERE directory = '/etc/' AND mode LIKE '%777';
```

Scans critical directories for files that are writable by any user.


## Purple Team Simulation

### Detect Reverse Shells

```bash
Detect Reverse Shells
```

Example:

```bash
SELECT * FROM processes WHERE cmdline LIKE '%/dev/tcp/%';
```

Hunts for common bash reverse shell patterns in command lines.

### Detect Suspicious Parentage

```bash
Detect Suspicious Parentage
```

Example:

```bash
SELECT p1.name AS parent, p2.name AS child FROM processes p1 JOIN processes p2 ON p1.pid = p2.parent WHERE p1.name = 'httpd' AND p2.name = 'bash';
```

Identifies web server processes spawning unexpected shells.

### Detect Deleted Executables

```bash
Detect Deleted Executables
```

Example:

```bash
SELECT name, pid, on_disk FROM processes WHERE on_disk = 0;
```

Finds processes running from binaries that have been deleted from the disk.

### Detect High Port Traffic

```bash
Detect High Port Traffic
```

Example:

```bash
SELECT * FROM process_open_sockets WHERE remote_port > 1024 AND state = 'ESTABLISHED';
```

Monitors for connections to non-standard high ports often used for C2.


## Threat Hunting

### Hunt for Netcat

```bash
Hunt for Netcat
```

Example:

```bash
SELECT pid, cmdline FROM processes WHERE name = 'nc' OR name = 'netcat';
```

Scans active processes for the presence of the netcat utility.

### Hunt for Base64 Commands

```bash
Hunt for Base64 Commands
```

Example:

```bash
SELECT * FROM shell_history WHERE command LIKE '%base64%';
```

Searches user shell history for potentially obfuscated base64 commands.

### Hash Running Processes

```bash
Hash Running Processes
```

Example:

```bash
SELECT p.name, p.pid, h.sha256 FROM processes p JOIN hash h ON p.path = h.path;
```

Calculates the SHA256 hash of the binary for every running process.


## Incident Response

### Dump Process List JSON

```bash
Dump Process List JSON
```

Example:

```bash
osqueryi --json "SELECT * FROM processes"
```

Exports the full process state to JSON for offline analysis during an incident.

### Dump Open Files JSON

```bash
Dump Open Files JSON
```

Example:

```bash
osqueryi --json "SELECT * FROM process_open_files"
```

Captures a snapshot of all files held open by processes for forensic review.

### Identify Malware Path

```bash
Identify Malware Path
```

Example:

```bash
SELECT path, size FROM file WHERE directory = '/tmp' AND size > 0;
```

Quickly inspects temporary directories for dropped executable payloads.

### Check Sudoers Changes

```bash
Check Sudoers Changes
```

Example:

```bash
SELECT * FROM file WHERE path = '/etc/sudoers';
```

Verifies the metadata of the sudoers file to check for unauthorized modification.


## Automation & Scripting

### Batch Query Execution

```bash
Batch Query Execution
```

Example:

```bash
osqueryi < query_list.sql
```

Feeds a file containing multiple SQL queries directly into the osquery shell.

### Pack Configuration

```bash
Pack Configuration
```

Example:

```bash
SELECT * FROM osquery_packs;
```

Introspects the currently loaded query packs defined in the configuration.

### Schedule Introspection

```bash
Schedule Introspection
```

Example:

```bash
SELECT * FROM osquery_schedule;
```

Displays the execution schedule and performance stats of configured queries.


## Advanced Configuration

### Extensions Loading

```bash
Extensions Loading
```

Example:

```bash
osqueryi --extension /path/to/extension.ext
```

Loads an external extension to add new tables or capabilities to osquery.

### Custom Socket Path

```bash
Custom Socket Path
```

Example:

```bash
osqueryi --socket /var/osquery/osquery.em
```

Connects the shell to a daemon running on a non-standard socket path.


## Container Monitoring

### Docker Info

```bash
Docker Info
```

Example:

```bash
SELECT * FROM docker_info;
```

Retrieves high-level information about the Docker daemon if present.

### Docker Containers

```bash
Docker Containers
```

Example:

```bash
SELECT id, image, status FROM docker_containers;
```

Lists active Docker containers and their current running status.


## MacOS Specific

### Launchd Agents

```bash
Launchd Agents
```

Example:

```bash
SELECT label, path, run_at_load FROM launchd;
```

Audits macOS launch daemons and agents for persistence.

### Gatekeeper Status

```bash
Gatekeeper Status
```

Example:

```bash
SELECT assessments_enabled FROM gatekeeper;
```

Checks if macOS Gatekeeper security assessment is enabled.


## Windows Specific

### Services Inspection

```bash
Services Inspection
```

Example:

```bash
SELECT name, display_name, status FROM services;
```

Lists installed services and their running state on Windows.

### Registry Auto-Start

```bash
Registry Auto-Start
```

Example:

```bash
SELECT name, data FROM registry WHERE key LIKE '%Run%';
```

Queries the Windows registry for keys that execute programs at startup.


## Cleanup

### Flush Logs

```bash
Flush Logs
```

Example:

```bash
osqueryd --force
```

Forces the daemon to flush logs to the configured backend immediately.

### Kill Daemon

```bash
Kill Daemon
```

Example:

```bash
pkill osqueryd
```

Terminates the osquery daemon process (Linux/Unix).

### Remove Pidfile

```bash
Remove Pidfile
```

Example:

```bash
rm /var/run/osqueryd.pid
```

Manually removes the pidfile if the daemon crashed or did not exit cleanly.


## Verification

### Check Daemon Status

```bash
Check Daemon Status
```

Example:

```bash
ps aux | grep osqueryd
```

Verifies from the system shell that the osquery daemon is running.

## Related tools

- [auditd](https://terminal.rokibulroni.com/tool/monitoring/auditd)
- [Sysmon](https://terminal.rokibulroni.com/tool/monitoring/sysmon)
- [Wazuh agent](https://terminal.rokibulroni.com/tool/monitoring/wazuh-agent)
