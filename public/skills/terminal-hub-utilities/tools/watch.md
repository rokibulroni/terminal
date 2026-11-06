# watch

> Runs a command repeatedly and shows its output full-screen, highlighting what changes between runs.

- Category: Utilities
- Commands: 75
- Page: https://terminal.rokibulroni.com/tool/utilities/watch
- Documentation: https://man7.org/linux/man-pages/man1/watch.1.html
- Tags: monitoring, repetition

## Install

- apt: `sudo apt install procps`
- brew: `brew install watch`

## Basic Command Monitoring

### watch date

```bash
watch date
```

Executes the date command repeatedly to display the current system time in real time.

### watch ls

```bash
watch ls
```

Monitors the contents of the current directory, updating every 2 seconds by default.

### watch -h

```bash
watch -h
```

Displays the help message summarizing available flags and usage syntax.

### watch -v

```bash
watch -v
```

Outputs the version information of the watch utility.


## Interval and Timing Control

### watch -n 5 date

```bash
watch -n 5 date
```

Changes the update interval to run the command every 5 seconds instead of the default.

### watch --interval 10 uptime

```bash
watch --interval 10 uptime
```

Uses the long-form flag to set a 10-second refresh rate for monitoring system uptime.

### watch -n 0.1 ls -l

```bash
watch -n 0.1 ls -l
```

Sets a sub-second interval of 100 milliseconds for high-frequency monitoring.


## Output and Difference Highlighting

### watch -d date

```bash
watch -d date
```

Highlights the specific characters that change between updates to visualize differences.

### watch --differences ls -l

```bash
watch --differences ls -l
```

Uses the long-form flag to highlight changes in file attributes or directory contents.

### watch --differences=permanent date

```bash
watch --differences=permanent date
```

Keeps changed highlights persistent on screen (cumulative) rather than clearing them.

### watch -d=cumulative uptime

```bash
watch -d=cumulative uptime
```

Accumulates highlights over time to track all changes that have occurred since start.


## Header and Title Control

### watch -t date

```bash
watch -t date
```

Suppresses the header line showing the interval and command to display only output.

### watch --no-title ls

```bash
watch --no-title ls
```

Removes the default title bar using the long-form flag for cleaner output.

### watch -n 1 -t echo 'Custom Monitor'

```bash
watch -n 1 -t echo 'Custom Monitor'
```

Runs a command without a header to create a simple static display or banner.


## Color and Formatting

### watch -c ls --color=always

```bash
watch -c ls --color=always
```

Interprets ANSI color codes in the command output to preserve colored text.

### watch --color tree -C

```bash
watch --color tree -C
```

Enables color interpretation for commands like tree that support forced color output.


## Error and Exit Handling

### watch -e cat /tmp/status.txt

```bash
watch -e cat /tmp/status.txt
```

Freezes the watch display if the command returns a non-zero exit code (error).

### watch --errexit ls /root/secret

```bash
watch --errexit ls /root/secret
```

Stops updates immediately if the command fails, allowing the user to see the error.

### watch -b /path/to/script.sh

```bash
watch -b /path/to/script.sh
```

Emits a beep sound if the command exits with a non-zero status code.

### watch --beep ls /nonexistent

```bash
watch --beep ls /nonexistent
```

Audible alert triggered repeatedly on every interval where the command fails.


## Automation and Triggers

### watch -g ls -l /tmp/trigger_file

```bash
watch -g ls -l /tmp/trigger_file
```

Exits the watch utility completely as soon as the output of the command changes.

### watch --chgexit du -sh /var/log

```bash
watch --chgexit du -sh /var/log
```

Monitors directory size and terminates the loop automatically when the size changes.


## Precision and Timing

### watch -p -n 2 date

```bash
watch -p -n 2 date
```

Enables precise timing mode to attempt running exactly every N seconds, compensating for drift.

### watch --precise -n 1 sleep 0.5

```bash
watch --precise -n 1 sleep 0.5
```

Maintains strict interval timing even if the command execution takes significant time.


## Quoting and Shell Handling

### watch "ps aux | grep nginx"

```bash
watch "ps aux | grep nginx"
```

Uses double quotes to pass a pipeline string to the shell for execution.

### watch 'ls -l | wc -l'

```bash
watch 'ls -l | wc -l'
```

Uses single quotes to prevent local shell expansion and pass the pipe to the watch shell.

### watch -n 1 "echo $RANDOM"

```bash
watch -n 1 "echo $RANDOM"
```

Double quotes allow the variable to be expanded once at the start (static output).

### watch -n 1 'echo $RANDOM'

```bash
watch -n 1 'echo $RANDOM'
```

Single quotes ensure the variable is expanded inside the loop (dynamic output).

### watch -x ls -l

```bash
watch -x ls -l
```

Uses the exec flag to run the command directly without wrapping it in sh -c (if supported).


## System Administration Monitoring

### watch free -m

```bash
watch free -m
```

Monitors system memory usage in megabytes in real time.

### watch df -h

```bash
watch df -h
```

Tracks disk space usage across all mounted filesystems with human-readable sizes.

### watch uptime

```bash
watch uptime
```

Continuously displays system load averages and uptime duration.

### watch -n 1 "ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%cpu | head"

```bash
watch -n 1 "ps -eo pid,ppid,cmd,%mem,%cpu --sort=-%cpu | head"
```

Monitors the top CPU-consuming processes, updating every second.

### watch -d "cat /proc/loadavg"

```bash
watch -d "cat /proc/loadavg"
```

Highlights changes in the raw system load average values from the proc filesystem.


## Network Monitoring (Lab Safe)

### watch ss -tuln

```bash
watch ss -tuln
```

Monitors listening TCP and UDP ports in real time.

### watch -n 1 "netstat -an | grep ESTABLISHED"

```bash
watch -n 1 "netstat -an | grep ESTABLISHED"
```

Tracks active established network connections updating every second.

### watch ip addr show

```bash
watch ip addr show
```

Monitors network interface status and IP address assignments.

### watch -d "ip route show"

```bash
watch -d "ip route show"
```

Highlights any changes to the system routing table.


## SOC Monitoring Use Cases

### watch -n 5 w

```bash
watch -n 5 w
```

Monitors logged-in users and their current activities every 5 seconds.

### watch -d "who"

```bash
watch -d "who"
```

Highlights new user logins or logouts immediately.

### watch "last -n 10"

```bash
watch "last -n 10"
```

Constantly displays the last 10 login entries to catch recent access.

### watch -n 1 "journalctl -n 10 --no-pager"

```bash
watch -n 1 "journalctl -n 10 --no-pager"
```

Tails the systemd journal logs in real time without using a pager.


## Blue Team Defensive Validation

### watch -d -n 0.5 "ls -la /tmp"

```bash
watch -d -n 0.5 "ls -la /tmp"
```

Monitors the temporary directory at high speed to detect file drops during attacks.

### watch -d "md5sum /etc/passwd"

```bash
watch -d "md5sum /etc/passwd"
```

Tracks the checksum of a critical file to visually alert on integrity tampering.

### watch -n 1 "ps -ef --forest"

```bash
watch -n 1 "ps -ef --forest"
```

Visualizes the process tree hierarchy to spot suspicious parent-child relationships.

### watch -d "ls -l /etc/cron.d /etc/cron.hourly"

```bash
watch -d "ls -l /etc/cron.d /etc/cron.hourly"
```

Monitors cron directories for the persistence mechanism creation.


## Incident Response Simulation

### watch -n 1 "lsof -i -P -n | grep LISTEN"

```bash
watch -n 1 "lsof -i -P -n | grep LISTEN"
```

Real-time tracking of listening ports to identify unauthorized services or backdoors.

### watch -n 0.5 -d "cat /proc/interrupts"

```bash
watch -n 0.5 -d "cat /proc/interrupts"
```

Monitors hardware interrupts to detect keylogging or device anomalies.

### watch -n 1 "tail -f /var/log/auth.log"

```bash
watch -n 1 "tail -f /var/log/auth.log"
```

Simulates a dashboard for authentication logs to spot brute force attempts.


## Advanced Workflow Integration

### watch -n 300 /usr/local/bin/backup_check.sh

```bash
watch -n 300 /usr/local/bin/backup_check.sh
```

Runs a custom maintenance script every 5 minutes for passive monitoring.

### watch -n 1 "dmesg | tail -n 20"

```bash
watch -n 1 "dmesg | tail -n 20"
```

Monitors the kernel ring buffer for hardware or driver errors.

### watch -t -n 0.5 "echo 'System Status'; date; uptime"

```bash
watch -t -n 0.5 "echo 'System Status'; date; uptime"
```

Combines multiple commands into a custom status dashboard with no header.

### watch -c -n 1 "git status -s"

```bash
watch -c -n 1 "git status -s"
```

Monitors a git repository for changes in real time, useful during development.

### watch -g "pidof process_name"

```bash
watch -g "pidof process_name"
```

Waits for a specific process to start or stop by exiting when the PID list changes.


## Complex Monitoring Logic

### watch -n 1 'if [ -f /tmp/lock ]; then echo "Locked"; else echo "Open"; fi'

```bash
watch -n 1 'if [ -f /tmp/lock ]; then echo "Locked"; else echo "Open"; fi'
```

Executes shell logic inside the watch loop to monitor application state files.

### watch -d "stat -c '%y %n' *"

```bash
watch -d "stat -c '%y %n' *"
```

Monitors modification timestamps of all files in the directory.

### watch -n 0.2 "cat /sys/class/thermal/thermal_zone0/temp"

```bash
watch -n 0.2 "cat /sys/class/thermal/thermal_zone0/temp"
```

High-frequency monitoring of CPU temperature sensors.


## Docker and Container Monitoring

### watch docker ps

```bash
watch docker ps
```

Monitors running Docker containers in real time.

### watch -n 1 "docker stats --no-stream"

```bash
watch -n 1 "docker stats --no-stream"
```

Captures a snapshot of container resource usage every second.

### watch -d "podman ps -a"

```bash
watch -d "podman ps -a"
```

Highlights state changes in Podman containers (start/stop/exit).


## Kubernetes Monitoring (Lab)

### watch kubectl get pods

```bash
watch kubectl get pods
```

Monitors the status of Kubernetes pods in the current namespace.

### watch -d "kubectl get events --sort-by=.metadata.creationTimestamp"

```bash
watch -d "kubectl get events --sort-by=.metadata.creationTimestamp"
```

Highlights new cluster events sorted by creation time.


## Systemd Service Monitoring

### watch -n 1 "systemctl list-units --type=service --state=running"

```bash
watch -n 1 "systemctl list-units --type=service --state=running"
```

Tracks currently running systemd services.

### watch -d "systemctl status nginx"

```bash
watch -d "systemctl status nginx"
```

Monitors the detailed status output of a specific service for state changes.


## File System Forensics

### watch -n 1 "find /tmp -mmin -1"

```bash
watch -n 1 "find /tmp -mmin -1"
```

Lists files in the temp directory modified within the last minute.

### watch -d "ls -lR /etc/ | sha256sum"

```bash
watch -d "ls -lR /etc/ | sha256sum"
```

Monitors the integrity of the entire etc directory listing structure.


## User and Group Management

### watch -d "cat /etc/group"

```bash
watch -d "cat /etc/group"
```

Highlights any changes to system groups, useful for privilege escalation monitoring.

### watch -d "cat /etc/shadow"

```bash
watch -d "cat /etc/shadow"
```

Monitors the shadow file (permission permitting) to see password hash changes.


## Hardware Resources

### watch -n 1 "grep 'cpu MHz' /proc/cpuinfo"

```bash
watch -n 1 "grep 'cpu MHz' /proc/cpuinfo"
```

Monitors current CPU frequency scaling across all cores.

### watch -n 1 "cat /proc/meminfo | grep Dirty"

```bash
watch -n 1 "cat /proc/meminfo | grep Dirty"
```

Tracks dirty memory pages waiting to be written to disk.


## Advanced Combined Flags

### watch -p -n 0.1 -d -t ls -l

```bash
watch -p -n 0.1 -d -t ls -l
```

Combines precision, sub-second interval, diff highlighting, and no title for minimal high-speed monitoring.

### watch -c -n 5 -b /path/to/healthcheck.sh

```bash
watch -c -n 5 -b /path/to/healthcheck.sh
```

Runs a colorized health check every 5 seconds and beeps if the check fails.

### watch -g -n 2 "curl -s -I http://localhost:8080"

```bash
watch -g -n 2 "curl -s -I http://localhost:8080"
```

Polls a local web server headers and exits if the response changes.

### watch --differences=permanent --interval=1 "ps -eo pid,cmd,user | grep root"

```bash
watch --differences=permanent --interval=1 "ps -eo pid,cmd,user | grep root"
```

Permanently highlights new root processes appearing in the process list.

### watch -n 1 'date +%T; echo "---"; uptime; echo "---"; free -h'

```bash
watch -n 1 'date +%T; echo "---"; uptime; echo "---"; free -h'
```

Constructs a multi-section text dashboard using a single command string.

## Related tools

- [top](https://terminal.rokibulroni.com/tool/linux/top)
- [tail](https://terminal.rokibulroni.com/tool/linux/tail)
