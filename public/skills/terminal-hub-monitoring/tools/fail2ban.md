# Fail2ban

> Watches log files for repeated failures — SSH, web logins, mail — and bans offending IPs with firewall rules.

- Category: Monitoring
- Commands: 105
- Page: https://terminal.rokibulroni.com/tool/monitoring/fail2ban
- Homepage: https://github.com/fail2ban/fail2ban
- Documentation: https://github.com/fail2ban/fail2ban/wiki
- Tags: intrusion prevention, SSH, firewall

## Install

- apt: `sudo apt install fail2ban`
- dnf: `sudo dnf install fail2ban`

## Service Management

### systemctl start fail2ban

```bash
systemctl start fail2ban
```

Starts the Fail2Ban intrusion prevention service daemon.

### systemctl stop fail2ban

```bash
systemctl stop fail2ban
```

Stops the running Fail2Ban service daemon.

### systemctl restart fail2ban

```bash
systemctl restart fail2ban
```

Restarts the Fail2Ban service to apply new configurations.

### systemctl status fail2ban

```bash
systemctl status fail2ban
```

Displays the current operational status and recent logs of the Fail2Ban service.

### fail2ban-server --version

```bash
fail2ban-server --version
```

Outputs the installed version of the Fail2Ban server.

### fail2ban-server -t

```bash
fail2ban-server -t
```

Tests the configuration files for syntax errors without starting the server.


## Client Connectivity

### fail2ban-client ping

```bash
fail2ban-client ping
```

Checks if the Fail2Ban server process is alive and responsive.

### fail2ban-client echo 'test'

```bash
fail2ban-client echo 'test'
```

Example:

```bash
fail2ban-client echo 'connectivity check'
```

Sends an echo message to the server to verify communication channels.


## Global Status

### fail2ban-client status

```bash
fail2ban-client status
```

Displays the global status including the number of currently active jails.


## Global Operations

### fail2ban-client reload

```bash
fail2ban-client reload
```

Reloads the complete configuration and all jails without restarting the process.

### fail2ban-client reload --all

```bash
fail2ban-client reload --all
```

Explicitly reloads all configuration files and jails.


## Jail Inspection

### fail2ban-client status <JAIL>

```bash
fail2ban-client status <JAIL>
```

Example:

```bash
fail2ban-client status sshd
```

Shows detailed statistics for a specific jail including current ban count and list.


## Jail Management

### fail2ban-client start <JAIL>

```bash
fail2ban-client start <JAIL>
```

Example:

```bash
fail2ban-client start nginx-http-auth
```

Manually starts a specific jail that is currently stopped.

### fail2ban-client stop <JAIL>

```bash
fail2ban-client stop <JAIL>
```

Example:

```bash
fail2ban-client stop postfix
```

Manually stops a running jail without stopping the entire service.

### fail2ban-client reload <JAIL>

```bash
fail2ban-client reload <JAIL>
```

Example:

```bash
fail2ban-client reload sshd
```

Reloads the configuration for a single specific jail.


## Logging Configuration

### fail2ban-client get loglevel

```bash
fail2ban-client get loglevel
```

Retrieves the current logging verbosity level of the server.

### fail2ban-client set loglevel <LEVEL>

```bash
fail2ban-client set loglevel <LEVEL>
```

Example:

```bash
fail2ban-client set loglevel DEBUG
```

Sets the logging verbosity to a specific level (CRITICAL, ERROR, WARNING, NOTICE, INFO, DEBUG).

### fail2ban-client get logtarget

```bash
fail2ban-client get logtarget
```

Displays the current file path or target where Fail2Ban writes its logs.

### fail2ban-client set logtarget <TARGET>

```bash
fail2ban-client set logtarget <TARGET>
```

Example:

```bash
fail2ban-client set logtarget /var/log/fail2ban-trace.log
```

Changes the log output destination to a specified file path.

### fail2ban-client set logtarget STDOUT

```bash
fail2ban-client set logtarget STDOUT
```

Redirects log output to standard output for debugging purposes.


## Database Operations

### fail2ban-client get dbfile

```bash
fail2ban-client get dbfile
```

Shows the location of the SQLite database used for persistent ban storage.

### fail2ban-client flushlogs

```bash
fail2ban-client flushlogs
```

Flushes the internal logs to the disk.


## Manual Banning

### fail2ban-client set <JAIL> banip <IP>

```bash
fail2ban-client set <JAIL> banip <IP>
```

Example:

```bash
fail2ban-client set sshd banip 192.168.1.50
```

Manually bans a specific IP address in the specified jail immediately.

### fail2ban-client set <JAIL> banip <CIDR>

```bash
fail2ban-client set <JAIL> banip <CIDR>
```

Example:

```bash
fail2ban-client set sshd banip 10.0.0.0/24
```

Manually bans an entire CIDR block in the specified jail.


## Manual Unbanning

### fail2ban-client set <JAIL> unbanip <IP>

```bash
fail2ban-client set <JAIL> unbanip <IP>
```

Example:

```bash
fail2ban-client set sshd unbanip 192.168.1.50
```

Manually unbans a specific IP address from the specified jail.

### fail2ban-client unban <IP>

```bash
fail2ban-client unban <IP>
```

Example:

```bash
fail2ban-client unban 192.168.1.50
```

Unbans a specific IP address across all jails (requires version 0.11+).

### fail2ban-client unban --all

```bash
fail2ban-client unban --all
```

Removes all active bans across all jails immediately.


## Configuration Inspection

### fail2ban-client get <JAIL> logpath

```bash
fail2ban-client get <JAIL> logpath
```

Example:

```bash
fail2ban-client get sshd logpath
```

Retrieves the log file path currently being monitored by a specific jail.

### fail2ban-client get <JAIL> failregex

```bash
fail2ban-client get <JAIL> failregex
```

Example:

```bash
fail2ban-client get sshd failregex
```

Displays the list of failure regexes currently loaded for the jail.

### fail2ban-client get <JAIL> ignoreregex

```bash
fail2ban-client get <JAIL> ignoreregex
```

Example:

```bash
fail2ban-client get sshd ignoreregex
```

Displays the list of ignore regexes currently loaded for the jail.

### fail2ban-client get <JAIL> maxretry

```bash
fail2ban-client get <JAIL> maxretry
```

Example:

```bash
fail2ban-client get sshd maxretry
```

Shows the number of failures required to trigger a ban for the jail.

### fail2ban-client get <JAIL> findtime

```bash
fail2ban-client get <JAIL> findtime
```

Example:

```bash
fail2ban-client get sshd findtime
```

Shows the time window in seconds during which failures are counted.

### fail2ban-client get <JAIL> bantime

```bash
fail2ban-client get <JAIL> bantime
```

Example:

```bash
fail2ban-client get sshd bantime
```

Shows the duration in seconds for which an IP is banned.

### fail2ban-client get <JAIL> usedns

```bash
fail2ban-client get <JAIL> usedns
```

Example:

```bash
fail2ban-client get sshd usedns
```

Checks if DNS resolution is enabled (yes, warn, no, raw) for the jail.


## Runtime Tuning

### fail2ban-client set <JAIL> maxretry <N>

```bash
fail2ban-client set <JAIL> maxretry <N>
```

Example:

```bash
fail2ban-client set sshd maxretry 5
```

Updates the maximum retry threshold for a running jail dynamically.

### fail2ban-client set <JAIL> findtime <SECONDS>

```bash
fail2ban-client set <JAIL> findtime <SECONDS>
```

Example:

```bash
fail2ban-client set sshd findtime 600
```

Updates the lookback window duration for a running jail dynamically.

### fail2ban-client set <JAIL> bantime <SECONDS>

```bash
fail2ban-client set <JAIL> bantime <SECONDS>
```

Example:

```bash
fail2ban-client set sshd bantime 3600
```

Updates the ban duration for a running jail dynamically.


## Whitelist Management

### fail2ban-client get <JAIL> ignoreip

```bash
fail2ban-client get <JAIL> ignoreip
```

Example:

```bash
fail2ban-client get sshd ignoreip
```

Lists all IP addresses and CIDR blocks currently ignored (whitelisted) by the jail.

### fail2ban-client set <JAIL> addignoreip <IP>

```bash
fail2ban-client set <JAIL> addignoreip <IP>
```

Example:

```bash
fail2ban-client set sshd addignoreip 192.168.10.5
```

Adds a specific IP address to the ignore list of a running jail.

### fail2ban-client set <JAIL> delignoreip <IP>

```bash
fail2ban-client set <JAIL> delignoreip <IP>
```

Example:

```bash
fail2ban-client set sshd delignoreip 192.168.10.5
```

Removes a specific IP address from the ignore list of a running jail.


## Action Management

### fail2ban-client get <JAIL> actions

```bash
fail2ban-client get <JAIL> actions
```

Example:

```bash
fail2ban-client get sshd actions
```

Lists the names of the actions configured for the specified jail.


## Filter Validation

### fail2ban-regex <LOGLINE> <FILTER>

```bash
fail2ban-regex <LOGLINE> <FILTER>
```

Example:

```bash
fail2ban-regex 'Failed password for root from 1.2.3.4' sshd
```

Tests a single log line string against a specific filter configuration.

### fail2ban-regex <LOGFILE> <FILTER>

```bash
fail2ban-regex <LOGFILE> <FILTER>
```

Example:

```bash
fail2ban-regex /var/log/auth.log sshd
```

Tests an entire log file against a specific filter and reports match statistics.

### fail2ban-regex --print-all-missed <LOGFILE> <FILTER>

```bash
fail2ban-regex --print-all-missed <LOGFILE> <FILTER>
```

Example:

```bash
fail2ban-regex --print-all-missed /var/log/auth.log sshd
```

Runs a regex test and prints all log lines that did NOT match the filter.

### fail2ban-regex --print-all-matched <LOGFILE> <FILTER>

```bash
fail2ban-regex --print-all-matched <LOGFILE> <FILTER>
```

Example:

```bash
fail2ban-regex --print-all-matched /var/log/auth.log sshd
```

Runs a regex test and prints only the log lines that successfully matched the filter.

### fail2ban-regex --print-all-ignored <LOGFILE> <FILTER>

```bash
fail2ban-regex --print-all-ignored <LOGFILE> <FILTER>
```

Example:

```bash
fail2ban-regex --print-all-ignored /var/log/auth.log sshd
```

Runs a regex test and prints lines that matched but were ignored due to ignoreregex.

### fail2ban-regex -D <LOGFILE> <FILTER>

```bash
fail2ban-regex -D <LOGFILE> <FILTER>
```

Example:

```bash
fail2ban-regex -D /var/log/auth.log sshd
```

Runs regex testing in debug mode, showing detailed internal processing logic.

### fail2ban-regex -v <LOGFILE> <FILTER>

```bash
fail2ban-regex -v <LOGFILE> <FILTER>
```

Example:

```bash
fail2ban-regex -v /var/log/nginx/error.log nginx-botsearch
```

Runs regex testing with verbose output to analyze processing speed and stats.


## Advanced Configuration

### fail2ban-client -d

```bash
fail2ban-client -d
```

Dumps the current configuration in a readable format for debugging start-up issues.

### fail2ban-client -i

```bash
fail2ban-client -i
```

Enters the interactive Fail2Ban shell mode.


## Log Inspection

### grep 'Ban' /var/log/fail2ban.log

```bash
grep 'Ban' /var/log/fail2ban.log
```

Searches the primary Fail2Ban log file for all ban events.

### grep 'Unban' /var/log/fail2ban.log

```bash
grep 'Unban' /var/log/fail2ban.log
```

Searches the primary Fail2Ban log file for all unban events.

### tail -f /var/log/fail2ban.log

```bash
tail -f /var/log/fail2ban.log
```

Follows the Fail2Ban log file in real-time to monitor activity.

### zgrep 'Ban' /var/log/fail2ban.log*

```bash
zgrep 'Ban' /var/log/fail2ban.log*
```

Searches for ban events in both current and rotated (gzipped) Fail2Ban logs.

### grep 'Found' /var/log/fail2ban.log

```bash
grep 'Found' /var/log/fail2ban.log
```

Searches logs for 'Found' entries indicating a filter match before a ban threshold is reached.


## Runtime Action Tuning

### fail2ban-client set <JAIL> action <ACTION> actionstart <CMD>

```bash
fail2ban-client set <JAIL> action <ACTION> actionstart <CMD>
```

Example:

```bash
fail2ban-client set sshd action iptables-multiport actionstart 'echo starting'
```

Dynamically overrides the 'actionstart' command for a specific action in a running jail.

### fail2ban-client set <JAIL> action <ACTION> actionban <CMD>

```bash
fail2ban-client set <JAIL> action <ACTION> actionban <CMD>
```

Example:

```bash
fail2ban-client set sshd action iptables-multiport actionban 'echo banning <ip>'
```

Dynamically overrides the 'actionban' command for a specific action in a running jail.

### fail2ban-client set <JAIL> action <ACTION> actionunban <CMD>

```bash
fail2ban-client set <JAIL> action <ACTION> actionunban <CMD>
```

Example:

```bash
fail2ban-client set sshd action iptables-multiport actionunban 'echo unbanning <ip>'
```

Dynamically overrides the 'actionunban' command for a specific action in a running jail.


## Python API

### fail2ban-python --version

```bash
fail2ban-python --version
```

Checks the version of the embedded Python interpreter used by Fail2Ban.


## Configuration Validation

### fail2ban-client --test

```bash
fail2ban-client --test
```

Runs a basic test to verify that the client can load the configuration modules.


## Database Analysis

### sqlite3 /var/lib/fail2ban/fail2ban.sqlite3 'SELECT * FROM bans LIMIT 5;'

```bash
sqlite3 /var/lib/fail2ban/fail2ban.sqlite3 'SELECT * FROM bans LIMIT 5;'
```

Directly queries the persistent Fail2Ban database to view the first 5 bans.

### sqlite3 /var/lib/fail2ban/fail2ban.sqlite3 'SELECT count(*) FROM bans;'

```bash
sqlite3 /var/lib/fail2ban/fail2ban.sqlite3 'SELECT count(*) FROM bans;'
```

Counts the total number of bans recorded in the persistent database history.

### sqlite3 /var/lib/fail2ban/fail2ban.sqlite3 'SELECT ip FROM bans WHERE jail="sshd";'

```bash
sqlite3 /var/lib/fail2ban/fail2ban.sqlite3 'SELECT ip FROM bans WHERE jail="sshd";'
```

Retrieves all IPs ever banned by the sshd jail from the database.


## Backend Tuning

### fail2ban-client set <JAIL> backend <BACKEND>

```bash
fail2ban-client set <JAIL> backend <BACKEND>
```

Example:

```bash
fail2ban-client set sshd backend pyinotify
```

Changes the log monitoring backend (polling, pyinotify, systemd, auto) for a running jail.

### fail2ban-client get <JAIL> backend

```bash
fail2ban-client get <JAIL> backend
```

Example:

```bash
fail2ban-client get sshd backend
```

Displays the current log monitoring backend method being used by the jail.


## Log Maintenance

### truncate -s 0 /var/log/fail2ban.log

```bash
truncate -s 0 /var/log/fail2ban.log
```

Clears the Fail2Ban log file content without deleting the file (useful during testing).


## SOC Monitoring

### fail2ban-client set <JAIL> addlogpath <FILE>

```bash
fail2ban-client set <JAIL> addlogpath <FILE>
```

Example:

```bash
fail2ban-client set sshd addlogpath /var/log/auth.log.1
```

Dynamically adds an additional log file to be monitored by a running jail.

### fail2ban-client set <JAIL> dellogpath <FILE>

```bash
fail2ban-client set <JAIL> dellogpath <FILE>
```

Example:

```bash
fail2ban-client set sshd dellogpath /var/log/auth.log.1
```

Dynamically removes a log file from being monitored by a running jail.

### awk '($(NF-1) == "Ban"){print $NF}' /var/log/fail2ban.log | sort | uniq -c | sort -n

```bash
awk '($(NF-1) == "Ban"){print $NF}' /var/log/fail2ban.log | sort | uniq -c | sort -n
```

Extracts banned IPs from logs and displays frequency counts for threat analysis.

### fail2ban-client set <JAIL> addfailregex <REGEX>

```bash
fail2ban-client set <JAIL> addfailregex <REGEX>
```

Example:

```bash
fail2ban-client set sshd addfailregex '^Failed publickey for .* from <HOST>$'
```

Injects a new failure regex into a running jail without reloading config files.

### fail2ban-client set <JAIL> delfailregex <INDEX>

```bash
fail2ban-client set <JAIL> delfailregex <INDEX>
```

Example:

```bash
fail2ban-client set sshd delfailregex 1
```

Removes a failure regex from a running jail by its index.


## Blue Team Validation

### fail2ban-client set <JAIL> banip <TEST_IP>

```bash
fail2ban-client set <JAIL> banip <TEST_IP>
```

Example:

```bash
fail2ban-client set sshd banip 192.0.2.100
```

Tests the ban action mechanism by banning a reserved test IP address.

### iptables -L -n | grep f2b

```bash
iptables -L -n | grep f2b
```

Verifies that Fail2Ban has correctly inserted its chains into the iptables firewall.

### ipset list

```bash
ipset list
```

Lists IP sets if Fail2Ban is configured to use ipset for higher performance banning.

### nft list ruleset | grep f2b

```bash
nft list ruleset | grep f2b
```

Verifies Fail2Ban rules in the nftables ruleset if using nftables backend.

### logger -p auth.warn -t sshd 'Failed password for root from 192.0.2.200 port 22 ssh2'

```bash
logger -p auth.warn -t sshd 'Failed password for root from 192.0.2.200 port 22 ssh2'
```

Injects a fake log entry into syslog to trigger Fail2Ban detection logic.

### fail2ban-regex --print-all-matched <LOG> <FILTER> | wc -l

```bash
fail2ban-regex --print-all-matched <LOG> <FILTER> | wc -l
```

Example:

```bash
fail2ban-regex --print-all-matched /var/log/auth.log sshd | wc -l
```

Counts the total number of historical matches for a specific filter in a log file.


## System Maintenance

### rm /var/lib/fail2ban/fail2ban.sqlite3

```bash
rm /var/lib/fail2ban/fail2ban.sqlite3
```

Deletes the persistent database to reset all historical ban data (requires service stop).


## Automation & Scripting

### fail2ban-client status | grep 'Jail list' | sed 's/.*: //g' | tr ',' '\n'

```bash
fail2ban-client status | grep 'Jail list' | sed 's/.*: //g' | tr ',' '\n'
```

Parses the status output to generate a clean, newline-separated list of active jails.

### fail2ban-client set <JAIL> idle on

```bash
fail2ban-client set <JAIL> idle on
```

Example:

```bash
fail2ban-client set sshd idle on
```

Sets the jail to idle mode, effectively pausing it without stopping the service.

### fail2ban-client set <JAIL> idle off

```bash
fail2ban-client set <JAIL> idle off
```

Example:

```bash
fail2ban-client set sshd idle off
```

Resumes the jail from idle mode to active monitoring.


## Incident Response

### fail2ban-client get <JAIL> banip --with-time

```bash
fail2ban-client get <JAIL> banip --with-time
```

Example:

```bash
fail2ban-client get sshd banip --with-time
```

Retrieves the list of banned IPs along with the timestamp of when they were banned.

### fail2ban-client -v -v start

```bash
fail2ban-client -v -v start
```

Starts the Fail2Ban client in high verbosity mode for troubleshooting startup failures.

### grep 'restore ban' /var/log/fail2ban.log

```bash
grep 'restore ban' /var/log/fail2ban.log
```

Checks logs to verify if bans were successfully restored from the database after a restart.

### fail2ban-client set <JAIL> action <ACTION> actioncheck

```bash
fail2ban-client set <JAIL> action <ACTION> actioncheck
```

Example:

```bash
fail2ban-client set sshd action iptables-multiport actioncheck
```

Manually triggers the 'actioncheck' command to verify firewall chain integrity.


## Compliance & Policy

### fail2ban-client set <JAIL> banaction <ACTION>

```bash
fail2ban-client set <JAIL> banaction <ACTION>
```

Example:

```bash
fail2ban-client set sshd banaction iptables-allports
```

Dynamically changes the banning action used by a jail (e.g., switching from multiport to allports).

### fail2ban-client get <JAIL> action <ACTION> actionban

```bash
fail2ban-client get <JAIL> action <ACTION> actionban
```

Example:

```bash
fail2ban-client get sshd action iptables-multiport actionban
```

Inspects the exact command string that will be executed when a ban occurs.


## Advanced Troubleshooting

### fail2ban-client --str2sec <TIME_STRING>

```bash
fail2ban-client --str2sec <TIME_STRING>
```

Example:

```bash
fail2ban-client --str2sec 1d12h
```

Converts a time string (e.g., 1d12h) into seconds to verify configuration parsing logic.

### fail2ban-client -x start

```bash
fail2ban-client -x start
```

Starts the server and forces the removal of the socket file if it exists (socket cleanup).

### fail2ban-client set <JAIL> usedns no

```bash
fail2ban-client set <JAIL> usedns no
```

Example:

```bash
fail2ban-client set sshd usedns no
```

Disables DNS resolution for a jail to improve performance and prevent DNS timeouts.

### fail2ban-client set <JAIL> usedns raw

```bash
fail2ban-client set <JAIL> usedns raw
```

Example:

```bash
fail2ban-client set sshd usedns raw
```

Sets DNS mode to raw, processing IPs exactly as they appear in logs without resolution.

### python3 -c 'import fail2ban.server.failmanager; print(fail2ban.server.failmanager)'

```bash
python3 -c 'import fail2ban.server.failmanager; print(fail2ban.server.failmanager)'
```

Verifies that the Fail2Ban python modules are correctly installed and importable.


## Recidive Handling

### fail2ban-client set recidive banip <IP>

```bash
fail2ban-client set recidive banip <IP>
```

Example:

```bash
fail2ban-client set recidive banip 192.168.1.50
```

Manually adds an IP to the recidive jail (long-term ban) usually reserved for repeat offenders.

### fail2ban-regex /var/log/fail2ban.log /etc/fail2ban/filter.d/recidive.conf

```bash
fail2ban-regex /var/log/fail2ban.log /etc/fail2ban/filter.d/recidive.conf
```

Tests the recidive filter against the Fail2Ban log itself to verify repeat offender detection.


## Advanced Regex

### fail2ban-regex 'Dec 10 10:00:00 server sshd[123]: Invalid user test from 1.2.3.4' '<HOST>'

```bash
fail2ban-regex 'Dec 10 10:00:00 server sshd[123]: Invalid user test from 1.2.3.4' '<HOST>'
```

Tests the built-in <HOST> macro against a log line to ensure it extracts the IP 1.2.3.4.


## Performance Tuning

### nice -n -10 fail2ban-server -b

```bash
nice -n -10 fail2ban-server -b
```

Starts the Fail2Ban server in the background with high CPU priority.


## System Integration

### fail2ban-client get <JAIL> action <ACTION> actionstop

```bash
fail2ban-client get <JAIL> action <ACTION> actionstop
```

Example:

```bash
fail2ban-client get sshd action iptables-multiport actionstop
```

Displays the command executed when the jail stops, useful for checking cleanup logic.


## State Management

### fail2ban-client set <JAIL> addignoreip <DNS_NAME>

```bash
fail2ban-client set <JAIL> addignoreip <DNS_NAME>
```

Example:

```bash
fail2ban-client set sshd addignoreip googlebot.com
```

Adds a DNS hostname to the ignore list (requires usedns to be enabled).


## Visual Monitoring

### watch -n 1 'fail2ban-client status sshd'

```bash
watch -n 1 'fail2ban-client status sshd'
```

Runs the status command every second to create a real-time dashboard of the sshd jail.


## Bulk Operations

### for jail in $(fail2ban-client status | grep 'Jail list' | sed 's/.*: //g' | tr ',' ' '); do fail2ban-client status $jail

```bash
for jail in $(fail2ban-client status | grep 'Jail list' | sed 's/.*: //g' | tr ',' ' '); do fail2ban-client status $jail; done
```

Loops through all active jails and prints the detailed status for each one.


## Log Rotation Support

### fail2ban-client set <JAIL> logpath <NEW_LOG_FILE>

```bash
fail2ban-client set <JAIL> logpath <NEW_LOG_FILE>
```

Example:

```bash
fail2ban-client set sshd logpath /var/log/auth.log
```

Updates the log file path for a running jail, useful during complex log rotation schemes.


## Advanced Config Dump

### fail2ban-client --dump-pretty

```bash
fail2ban-client --dump-pretty
```

Dumps the current configuration in a human-readable, indented format (requires newer versions).


## Version Compatibility

### fail2ban-client -V

```bash
fail2ban-client -V
```

Short flag to display the version of the client.


## Process Management

### pgrep -a fail2ban

```bash
pgrep -a fail2ban
```

Lists the process ID and full command line of the running Fail2Ban server.


## Cleanup

### fail2ban-client stop && rm -f /var/run/fail2ban/fail2ban.sock

```bash
fail2ban-client stop && rm -f /var/run/fail2ban/fail2ban.sock
```

Stops the client and forcefully removes the socket file to resolve connection refused errors.

## Related tools

- [journalctl](https://terminal.rokibulroni.com/tool/linux/journalctl)
- [auditd](https://terminal.rokibulroni.com/tool/monitoring/auditd)
