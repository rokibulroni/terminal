# auditd

> The Linux Audit daemon: records system calls, file access and command execution according to rules, for compliance and detection.

- Category: Monitoring
- Commands: 150
- Page: https://terminal.rokibulroni.com/tool/monitoring/auditd
- Homepage: https://github.com/linux-audit/audit-userspace
- Documentation: https://man7.org/linux/man-pages/man8/auditctl.8.html
- Tags: Linux, auditing, detection

## Install

- apt: `sudo apt install auditd`
- dnf: `sudo dnf install audit`

## Service Management

### systemctl status auditd

```bash
systemctl status auditd
```

Checks the current operational status of the audit daemon service.

### systemctl start auditd

```bash
systemctl start auditd
```

Starts the audit daemon if it is currently stopped.

### systemctl stop auditd

```bash
systemctl stop auditd
```

Stops the audit daemon service completely.

### systemctl restart auditd

```bash
systemctl restart auditd
```

Restarts the audit daemon to reload configurations.

### systemctl enable auditd

```bash
systemctl enable auditd
```

Enables the audit daemon to start automatically at system boot.

### service auditd rotate

```bash
service auditd rotate
```

Forces the rotation of audit log files immediately.

### service auditd resume

```bash
service auditd resume
```

Resumes logging after auditd was suspended due to disk space issues.


## Audit Control

### auditctl -s

```bash
auditctl -s
```

Displays the current status, variables, and settings of the kernel audit system.

### auditctl -e 1

```bash
auditctl -e 1
```

Enables the audit system if it has been disabled.

### auditctl -e 0

```bash
auditctl -e 0
```

Temporarily disables the audit system and stops logging.

### auditctl -e 2

```bash
auditctl -e 2
```

Locks the audit configuration so it cannot be changed until reboot.

### auditctl -b 8192

```bash
auditctl -b 8192
```

Increases the audit buffer size to 8192 messages to prevent loss.

### auditctl -f 1

```bash
auditctl -f 1
```

Sets failure mode to print a message to syslog on critical errors.

### auditctl -f 2

```bash
auditctl -f 2
```

Sets failure mode to trigger a kernel panic on critical errors.

### auditctl -r 0

```bash
auditctl -r 0
```

Disables the rate limit for generated audit messages.


## Rule Management

### auditctl -l

```bash
auditctl -l
```

Lists all currently loaded audit rules.

### auditctl -D

```bash
auditctl -D
```

Deletes all currently loaded audit rules.


## File Monitoring

### auditctl -w /etc/passwd -p wa -k passwd_changes

```bash
auditctl -w /etc/passwd -p wa -k passwd_changes
```

Watches /etc/passwd for write or attribute changes and tags with key.

### auditctl -w /etc/shadow -p wa -k shadow_access

```bash
auditctl -w /etc/shadow -p wa -k shadow_access
```

Watches /etc/shadow for write or attribute changes.

### auditctl -w /bin/bash -p x -k shell_exec

```bash
auditctl -w /bin/bash -p x -k shell_exec
```

Logs every execution of the bash binary.

### auditctl -w /etc/sudoers -p wa -k sudo_mod

```bash
auditctl -w /etc/sudoers -p wa -k sudo_mod
```

Monitors the sudoers file for unauthorized modifications.

### auditctl -W /etc/passwd

```bash
auditctl -W /etc/passwd
```

Removes the watch rule specifically for /etc/passwd.


## Syscall Auditing

### auditctl -a always,exit -F arch=b64 -S openat -k file_open

```bash
auditctl -a always,exit -F arch=b64 -S openat -k file_open
```

Audits the openat syscall on 64-bit architecture upon exit.

### auditctl -a always,exit -F arch=b64 -S execve -k process_spawn

```bash
auditctl -a always,exit -F arch=b64 -S execve -k process_spawn
```

Audits process creation via execve on 64-bit systems.

### auditctl -a always,exit -F arch=b64 -S unlink -S rmdir -k deletion

```bash
auditctl -a always,exit -F arch=b64 -S unlink -S rmdir -k deletion
```

Audits file and directory deletion events.

### auditctl -a always,exit -F arch=b64 -S chmod -S fchmod -S chown -k perm_mod

```bash
auditctl -a always,exit -F arch=b64 -S chmod -S fchmod -S chown -k perm_mod
```

Audits changes to file permissions or ownership.

### auditctl -a always,exit -F arch=b64 -S mount -S umount2 -k storage_mount

```bash
auditctl -a always,exit -F arch=b64 -S mount -S umount2 -k storage_mount
```

Audits mounting and unmounting of filesystems.

### auditctl -a always,exit -F arch=b64 -S settimeofday -S clock_settime -k time_change

```bash
auditctl -a always,exit -F arch=b64 -S settimeofday -S clock_settime -k time_change
```

Audits attempts to change the system time.

### auditctl -a always,exit -F arch=b64 -S init_module -S delete_module -k kernel_mod

```bash
auditctl -a always,exit -F arch=b64 -S init_module -S delete_module -k kernel_mod
```

Audits loading and unloading of kernel modules.


## User Monitoring

### auditctl -a always,exit -F arch=b64 -S all -F auid=1001 -k user_monitor

```bash
auditctl -a always,exit -F arch=b64 -S all -F auid=1001 -k user_monitor
```

Audits all syscalls made by the user with Audit UID 1001.

### auditctl -a always,exit -F arch=b64 -S execve -F uid=0 -k root_exec

```bash
auditctl -a always,exit -F arch=b64 -S execve -F uid=0 -k root_exec
```

Audits command execution attempted by the root user.

### auditctl -a always,exit -F arch=b64 -S all -F gid=100 -k group_monitor

```bash
auditctl -a always,exit -F arch=b64 -S all -F gid=100 -k group_monitor
```

Audits all actions performed by members of GID 100.

### auditctl -a always,exit -F arch=b64 -S execve -F euid=0 -k effective_root

```bash
auditctl -a always,exit -F arch=b64 -S execve -F euid=0 -k effective_root
```

Audits executions where the effective user ID is root.


## Filter Optimization

### auditctl -a always,exit -F arch=b64 -S open -F success=0 -k open_fail

```bash
auditctl -a always,exit -F arch=b64 -S open -F success=0 -k open_fail
```

Only audits open syscalls that result in failure.

### auditctl -a always,exit -F arch=b64 -S open -F auid>=1000 -F auid!=4294967295 -k human_activity

```bash
auditctl -a always,exit -F arch=b64 -S open -F auid>=1000 -F auid!=4294967295 -k human_activity
```

Audits file opens by real human users, ignoring daemons and unset AUIDs.


## Network Auditing

### auditctl -a always,exit -F arch=b64 -S connect -k net_connect

```bash
auditctl -a always,exit -F arch=b64 -S connect -k net_connect
```

Audits outgoing network connection attempts.

### auditctl -a always,exit -F arch=b64 -S accept -k net_accept

```bash
auditctl -a always,exit -F arch=b64 -S accept -k net_accept
```

Audits incoming network connection acceptances.

### auditctl -a always,exit -F arch=b64 -S bind -k net_bind

```bash
auditctl -a always,exit -F arch=b64 -S bind -k net_bind
```

Audits attempts to bind a socket to a local address or port.


## Persistent Configuration

### augenrules --load

```bash
augenrules --load
```

Compiles rules from /etc/audit/rules.d/ and loads them into the kernel.

### augenrules --check

```bash
augenrules --check
```

Checks if the rules in kernel memory match the persistent configuration.


## Log Searching

### ausearch -m USER_LOGIN

```bash
ausearch -m USER_LOGIN
```

Searches logs for user login events.

### ausearch -m USER_AUTH

```bash
ausearch -m USER_AUTH
```

Searches logs for authentication attempts.

### ausearch -m SYSCALL -sv no

```bash
ausearch -m SYSCALL -sv no
```

Searches for system call events that failed.

### ausearch -ua 1000

```bash
ausearch -ua 1000
```

Searches for events triggered by the user with UID 1000.

### ausearch -k passwd_changes

```bash
ausearch -k passwd_changes
```

Searches for events tagged with the key 'passwd_changes'.

### ausearch -f /etc/shadow

```bash
ausearch -f /etc/shadow
```

Searches for any events related to the file /etc/shadow.

### ausearch -p 1234

```bash
ausearch -p 1234
```

Searches for events generated by process ID 1234.

### ausearch -ts today

```bash
ausearch -ts today
```

Searches for events that occurred today.

### ausearch -ts recent

```bash
ausearch -ts recent
```

Searches for events that occurred in the last 10 minutes.

### ausearch -ts 08:00:00 -te 17:00:00

```bash
ausearch -ts 08:00:00 -te 17:00:00
```

Searches for events between 8 AM and 5 PM today.

### ausearch -tm pts/0

```bash
ausearch -tm pts/0
```

Searches for events originating from terminal pts/0.

### ausearch -i -k shell_exec

```bash
ausearch -i -k shell_exec
```

Searches for 'shell_exec' events and interprets numeric IDs to names.

### ausearch -x /usr/bin/passwd

```bash
ausearch -x /usr/bin/passwd
```

Searches for execution events of the passwd binary.

### ausearch -c httpd

```bash
ausearch -c httpd
```

Searches for events generated by the command name 'httpd'.

### ausearch --raw

```bash
ausearch --raw
```

Outputs search results in raw format suitable for parsing.


## Reporting

### aureport

```bash
aureport
```

Generates a general summary report of all audit events.

### aureport -au

```bash
aureport -au
```

Generates a report of all authentication attempts.

### aureport -l

```bash
aureport -l
```

Generates a report of all login events.

### aureport -p

```bash
aureport -p
```

Generates a report of process related events.

### aureport -f

```bash
aureport -f
```

Generates a report of all file related events.

### aureport -u

```bash
aureport -u
```

Generates a report summarizing events by user.

### aureport -s

```bash
aureport -s
```

Generates a report summarizing system call events.

### aureport -t

```bash
aureport -t
```

Generates a report of events by log time range.

### aureport -c

```bash
aureport -c
```

Generates a report of configuration change events.

### aureport -m

```bash
aureport -m
```

Generates a report of account modification events.

### aureport -x

```bash
aureport -x
```

Generates a report of executable execution events.

### aureport --failed

```bash
aureport --failed
```

Generates a summary report of only failed events.

### aureport --success

```bash
aureport --success
```

Generates a summary report of only successful events.

### aureport -ts yesterday -te today

```bash
aureport -ts yesterday -te today
```

Generates a report covering events from yesterday to today.

### aureport -u -i

```bash
aureport -u -i
```

Generates a user summary report with numeric IDs resolved to names.


## Advanced Rules

### auditctl -a always,exit -F arch=b64 -S ptrace -k tracing

```bash
auditctl -a always,exit -F arch=b64 -S ptrace -k tracing
```

Audits attempts to trace processes (often used by debuggers or malware).

### auditctl -a always,exit -F arch=b64 -S mknod -S mknodat -k special_files

```bash
auditctl -a always,exit -F arch=b64 -S mknod -S mknodat -k special_files
```

Audits creation of special device files.

### auditctl -a always,exit -F arch=b64 -S rename -S renameat -k file_rename

```bash
auditctl -a always,exit -F arch=b64 -S rename -S renameat -k file_rename
```

Audits file renaming operations.

### auditctl -a always,exit -F arch=b64 -S adjtimex -S settimeofday -k time_modification

```bash
auditctl -a always,exit -F arch=b64 -S adjtimex -S settimeofday -k time_modification
```

Audits advanced time adjustment syscalls.

### auditctl -a always,exit -F arch=b64 -S swapon -S swapoff -k swap_mod

```bash
auditctl -a always,exit -F arch=b64 -S swapon -S swapoff -k swap_mod
```

Audits enabling or disabling of swap space.

### auditctl -w /var/log/audit/ -p wa -k audit_log_tampering

```bash
auditctl -w /var/log/audit/ -p wa -k audit_log_tampering
```

Watches the audit log directory itself for tampering attempts.

### auditctl -w /sbin/insmod -p x -k module_insertion

```bash
auditctl -w /sbin/insmod -p x -k module_insertion
```

Watches the insmod binary for execution.

### auditctl -w /sbin/rmmod -p x -k module_removal

```bash
auditctl -w /sbin/rmmod -p x -k module_removal
```

Watches the rmmod binary for execution.


## Process Tracing

### autrace /bin/ls

```bash
autrace /bin/ls
```

Traces the 'ls' command and logs all its syscalls.

### autrace -r /usr/bin/python3 script.py

```bash
autrace -r /usr/bin/python3 script.py
```

Traces a python script execution including resource usage.


## SOC Workflow

### ausearch -k net_connect | aureport -f -i

```bash
ausearch -k net_connect | aureport -f -i
```

Finds network connection events and reports which files (sockets) were accessed.

### ausearch -ul 1000 -m USER_LOGIN -i

```bash
ausearch -ul 1000 -m USER_LOGIN -i
```

Investigates all login events for a specific user ID.

### ausearch -k passwd_changes -ts today | aureport -u -i

```bash
ausearch -k passwd_changes -ts today | aureport -u -i
```

Identifies which users modified password files today.

### ausearch -m PROCTITLE -i

```bash
ausearch -m PROCTITLE -i
```

Searches for events containing process title information (command line args).

### ausearch -k root_exec -i | grep ' /bin/bash'

```bash
ausearch -k root_exec -i | grep ' /bin/bash'
```

Filters root execution logs specifically for bash shells.


## Blue Team Validation

### auditctl -s | grep 'enabled'

```bash
auditctl -s | grep 'enabled'
```

Validates that the audit service is currently enabled.

### ausearch -m DAEMON_ABORT

```bash
ausearch -m DAEMON_ABORT
```

Checks logs for instances where the audit daemon crashed or aborted.

### ausearch -m ANOM_PROMISCUOUS

```bash
ausearch -m ANOM_PROMISCUOUS
```

Searches for network interfaces entering promiscuous mode (sniffing).

### ausearch -m ANOM_ABEND

```bash
ausearch -m ANOM_ABEND
```

Searches for applications that terminated abnormally (segfaults).

### ausearch -f /root/.ssh/authorized_keys -i

```bash
ausearch -f /root/.ssh/authorized_keys -i
```

Monitors access to root SSH keys for unauthorized persistence.


## Compliance

### auditctl -a always,exit -F arch=b64 -S fchown -S fchownat -k ownership_change

```bash
auditctl -a always,exit -F arch=b64 -S fchown -S fchownat -k ownership_change
```

Compliance rule to track all file ownership changes.

### auditctl -a always,exit -F arch=b64 -S setxattr -S lsetxattr -S fsetxattr -k attr_mod

```bash
auditctl -a always,exit -F arch=b64 -S setxattr -S lsetxattr -S fsetxattr -k attr_mod
```

Compliance rule to track extended attribute modifications.

### auditctl -w /var/log/tallylog -p wa -k logins

```bash
auditctl -w /var/log/tallylog -p wa -k logins
```

Monitors the tallylog file for failed login attempt tracking.

### auditctl -w /etc/group -p wa -k group_mod

```bash
auditctl -w /etc/group -p wa -k group_mod
```

Monitors the group file for changes to user groups.

### auditctl -w /etc/issue -p wa -k banner_mod

```bash
auditctl -w /etc/issue -p wa -k banner_mod
```

Monitors changes to the system login banner.


## Incident Response

### ausearch --start recent -m EXECVE -i | grep 'nc -e'

```bash
ausearch --start recent -m EXECVE -i | grep 'nc -e'
```

Hunts for recent executions of netcat reverse shells.

### ausearch -f /tmp -i | grep 'EXECVE'

```bash
ausearch -f /tmp -i | grep 'EXECVE'
```

Investigates any binaries executed from the /tmp directory.

### ausearch -f /dev/shm -i

```bash
ausearch -f /dev/shm -i
```

Checks for suspicious file activity in shared memory (malware staging).

### ausearch -k kernel_mod -i

```bash
ausearch -k kernel_mod -i
```

Checks for unauthorized kernel module loading (rootkits).

### ausearch -m USER_CMD -i --failed

```bash
ausearch -m USER_CMD -i --failed
```

Reviews failed sudo commands to detect privilege escalation attempts.

### ausearch -ts today -m LOGIN -F success=no

```bash
ausearch -ts today -m LOGIN -F success=no
```

Lists all failed login attempts from the current day.

### ausearch -k deletion -i | grep '/var/log'

```bash
ausearch -k deletion -i | grep '/var/log'
```

Detects attempts to delete log files to cover tracks.


## Advanced Filtering

### auditctl -a always,exit -F arch=b64 -S socket -F a0=2 -k ipv4_socket

```bash
auditctl -a always,exit -F arch=b64 -S socket -F a0=2 -k ipv4_socket
```

Audits creation of IPv4 sockets specifically.

### auditctl -a always,exit -F arch=b64 -S socket -F a0=10 -k ipv6_socket

```bash
auditctl -a always,exit -F arch=b64 -S socket -F a0=10 -k ipv6_socket
```

Audits creation of IPv6 sockets specifically.

### auditctl -a always,exit -F dir=/home -F uid=0 -C auid!=obj_uid -k admin_home_access

```bash
auditctl -a always,exit -F dir=/home -F uid=0 -C auid!=obj_uid -k admin_home_access
```

Audits root accessing home directories not belonging to them.

### auditctl -a always,exit -F arch=b64 -S execve -F exe=/usr/bin/wget -k suspicious_download

```bash
auditctl -a always,exit -F arch=b64 -S execve -F exe=/usr/bin/wget -k suspicious_download
```

Specifically audits execution of wget.

### auditctl -a always,exit -F arch=b64 -S execve -F exe=/usr/bin/curl -k suspicious_download

```bash
auditctl -a always,exit -F arch=b64 -S execve -F exe=/usr/bin/curl -k suspicious_download
```

Specifically audits execution of curl.

### auditctl -a always,exit -F arch=b64 -S execve -F exe=/usr/bin/ncat -k reverse_shell_tool

```bash
auditctl -a always,exit -F arch=b64 -S execve -F exe=/usr/bin/ncat -k reverse_shell_tool
```

Audits ncat execution, often used for reverse shells.


## Configuration Maintenance

### sh -c 'auditctl -R /etc/audit/audit.rules'

```bash
sh -c 'auditctl -R /etc/audit/audit.rules'
```

Manually reloads rules from the legacy audit.rules file.

### grep -i 'backlog' /var/log/syslog

```bash
grep -i 'backlog' /var/log/syslog
```

Checks system logs for audit backlog limit exceeded warnings.

### auditctl -m 'Audit checkpoint: System update started'

```bash
auditctl -m 'Audit checkpoint: System update started'
```

Injects a custom text message into the audit log for marking events.


## Automated Analysis

### aureport --summary

```bash
aureport --summary
```

Provides a high-level statistical summary of all audit events.

### ausearch -te now -ts recent -i | aureport -f

```bash
ausearch -te now -ts recent -i | aureport -f
```

Pipelines recent logs into a file access report.

### ausearch -k deletion | aureport -f -i

```bash
ausearch -k deletion | aureport -f -i
```

Reports exactly which files were deleted based on the deletion key.

### ausearch -m AVC -i

```bash
ausearch -m AVC -i
```

Searches for SELinux Access Vector Cache denials.

### ausearch -m USER_TTY -i

```bash
ausearch -m USER_TTY -i
```

Searches for TTY (terminal) allocation events.


## Deep Dive

### auditctl -a always,exit -F arch=b64 -S clone -S fork -S vfork -k process_fork

```bash
auditctl -a always,exit -F arch=b64 -S clone -S fork -S vfork -k process_fork
```

Audits all process forking methods.

### auditctl -a always,exit -F arch=b64 -S kill -k process_kill

```bash
auditctl -a always,exit -F arch=b64 -S kill -k process_kill
```

Audits the kill syscall to track process termination signals.

### auditctl -a always,exit -F arch=b64 -S ptrace -F a0=4 -k process_injection

```bash
auditctl -a always,exit -F arch=b64 -S ptrace -F a0=4 -k process_injection
```

Audits PTRACE_POKETEXT/DATA calls, indicative of code injection.

### auditctl -a always,exit -F arch=b64 -S memfd_create -k memory_exec

```bash
auditctl -a always,exit -F arch=b64 -S memfd_create -k memory_exec
```

Audits creation of memory file descriptors, used by fileless malware.

### auditctl -a always,exit -F arch=b64 -S prctl -k process_control

```bash
auditctl -a always,exit -F arch=b64 -S prctl -k process_control
```

Audits process control operations.


## Immutable Systems

### sed -i 's/immutable = 0/immutable = 1/' /etc/audit/auditd.conf

```bash
sed -i 's/immutable = 0/immutable = 1/' /etc/audit/auditd.conf
```

Configures auditd to start in immutable mode via config file.


## Log Management

### grep 'max_log_file' /etc/audit/auditd.conf

```bash
grep 'max_log_file' /etc/audit/auditd.conf
```

Checks the maximum size of a single audit log file.

### grep 'max_log_file_action' /etc/audit/auditd.conf

```bash
grep 'max_log_file_action' /etc/audit/auditd.conf
```

Checks what action auditd takes when a log file fills up.

### grep 'space_left_action' /etc/audit/auditd.conf

```bash
grep 'space_left_action' /etc/audit/auditd.conf
```

Checks action taken when disk space is running low.

### grep 'admin_space_left_action' /etc/audit/auditd.conf

```bash
grep 'admin_space_left_action' /etc/audit/auditd.conf
```

Checks action taken when disk space is critically low.


## Real-time Monitoring

### tail -f /var/log/audit/audit.log

```bash
tail -f /var/log/audit/audit.log
```

Tails the raw audit log file for real-time observation.

### tail -f /var/log/audit/audit.log | ausearch -i

```bash
tail -f /var/log/audit/audit.log | ausearch -i
```

Tails the log and pipes it to ausearch for real-time interpretation.


## Log Decoding

### ausearch -i -f /usr/bin/sudo | less

```bash
ausearch -i -f /usr/bin/sudo | less
```

Pages through interpreted audit logs related to sudo execution.

### aureport --node

```bash
aureport --node
```

Reports events by node name (useful in clustered environments).


## Privilege Auditing

### auditctl -a always,exit -F arch=b64 -S setuid -S setgid -k privilege_escalation

```bash
auditctl -a always,exit -F arch=b64 -S setuid -S setgid -k privilege_escalation
```

Audits explicit calls to set user or group identity.

### auditctl -a always,exit -F arch=b64 -S capset -k capability_change

```bash
auditctl -a always,exit -F arch=b64 -S capset -k capability_change
```

Audits changes to process capabilities.


## Filesystem Integrity

### auditctl -w /boot/ -p wa -k boot_integrity

```bash
auditctl -w /boot/ -p wa -k boot_integrity
```

Monitors the boot directory for modifications (kernel tampering).

### auditctl -w /lib64/ld-linux-x86-64.so.2 -p wa -k library_hijack

```bash
auditctl -w /lib64/ld-linux-x86-64.so.2 -p wa -k library_hijack
```

Monitors the dynamic linker for tampering.


## Complex Queries

### ausearch -k user_monitor -ts today -te 12:00:00

```bash
ausearch -k user_monitor -ts today -te 12:00:00
```

Filters user monitor events for the morning session only.

### ausearch -m CRYPTO_KEY_USER

```bash
ausearch -m CRYPTO_KEY_USER
```

Searches for events related to cryptographic key usage.

### ausearch -m SERVICE_START -i

```bash
ausearch -m SERVICE_START -i
```

Searches for service start events.

### ausearch -m SERVICE_STOP -i

```bash
ausearch -m SERVICE_STOP -i
```

Searches for service stop events.


## Container Auditing

### auditctl -a always,exit -F arch=b64 -S unshare -k container_creation

```bash
auditctl -a always,exit -F arch=b64 -S unshare -k container_creation
```

Audits namespace unsharing, often used in container creation.

### auditctl -a always,exit -F arch=b64 -S setns -k container_entry

```bash
auditctl -a always,exit -F arch=b64 -S setns -k container_entry
```

Audits entry into an existing namespace (container exec).

### auditctl -a always,exit -F arch=b64 -S pivot_root -k container_pivot

```bash
auditctl -a always,exit -F arch=b64 -S pivot_root -k container_pivot
```

Audits pivoting of the root filesystem.


## Search Optimization

### ausearch --checkpoint ./checkpoint.txt

```bash
ausearch --checkpoint ./checkpoint.txt
```

Performs a search and saves a checkpoint to resume later.

### ausearch --checkpoint ./checkpoint.txt --resume

```bash
ausearch --checkpoint ./checkpoint.txt --resume
```

Resumes a search from the saved checkpoint file.


## Automation

### ausearch -ts today -m AVC --raw | audit2allow

```bash
ausearch -ts today -m AVC --raw | audit2allow
```

Pipes raw AVC denials to audit2allow to generate SELinux policies.

### aureport --input /var/log/audit/audit.log.1

```bash
aureport --input /var/log/audit/audit.log.1
```

Generates a report from a rotated (archived) log file.

### ausearch -if /var/log/audit/audit.log.1 -m LOGIN

```bash
ausearch -if /var/log/audit/audit.log.1 -m LOGIN
```

Searches for login events within a specific rotated log file.


## Cleanup

### auditctl -D

```bash
auditctl -D
```

Removes all rules in preparation for a clean shutdown or reset.

### systemctl stop auditd

```bash
systemctl stop auditd
```

Stops the daemon after testing is complete.

### rm /etc/audit/rules.d/test.rules

```bash
rm /etc/audit/rules.d/test.rules
```

Removes temporary test rule files.

### augenrules --load

```bash
augenrules --load
```

Reloads the default configuration to restore system state.

## Related tools

- [osquery](https://terminal.rokibulroni.com/tool/monitoring/osquery)
- [Sysmon](https://terminal.rokibulroni.com/tool/monitoring/sysmon)
- [journalctl](https://terminal.rokibulroni.com/tool/linux/journalctl)
