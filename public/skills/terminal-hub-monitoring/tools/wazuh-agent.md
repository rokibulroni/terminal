# Wazuh agent

> The endpoint agent for the open-source Wazuh SIEM/XDR: log collection, file-integrity monitoring and vulnerability detection.

- Category: Monitoring
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/monitoring/wazuh-agent
- Homepage: https://wazuh.com
- Documentation: https://documentation.wazuh.com/current/user-manual/agent/index.html
- Tags: SIEM, XDR, file integrity

## Install

- other: `See https://documentation.wazuh.com/current/installation-guide/wazuh-agent/`

## Service Management

### systemctl start wazuh-agent

```bash
systemctl start wazuh-agent
```

Starts the Wazuh agent service on a Linux endpoint using systemd.

### systemctl stop wazuh-agent

```bash
systemctl stop wazuh-agent
```

Stops the Wazuh agent service on a Linux endpoint to halt monitoring.

### systemctl restart wazuh-agent

```bash
systemctl restart wazuh-agent
```

Restarts the Wazuh agent service to apply configuration changes.

### systemctl status wazuh-agent

```bash
systemctl status wazuh-agent
```

Displays the current operational status and recent logs of the Wazuh agent service.


## Service Management (Windows)

### net start WazuhSvc

```bash
net start WazuhSvc
```

Starts the Wazuh agent service on a Windows endpoint using the command line.


## Service Management (Legacy)

### /var/ossec/bin/wazuh-control start

```bash
/var/ossec/bin/wazuh-control start
```

Manually starts the agent processes using the internal control script.


## Service Management

### /var/ossec/bin/wazuh-control info

```bash
/var/ossec/bin/wazuh-control info
```

Provides version information and build details of the installed Wazuh agent.


## Agent Registration

### /var/ossec/bin/agent-auth -m <MANAGER_IP>

```bash
/var/ossec/bin/agent-auth -m <MANAGER_IP>
```

Example:

```bash
/var/ossec/bin/agent-auth -m 192.168.1.100
```

Registers the agent with the Wazuh manager using the manager's IP address.

### /var/ossec/bin/agent-auth -m <MANAGER_IP> -A <AGENT_NAME>

```bash
/var/ossec/bin/agent-auth -m <MANAGER_IP> -A <AGENT_NAME>
```

Example:

```bash
/var/ossec/bin/agent-auth -m 192.168.1.100 -A WebServer01
```

Registers the agent with a specific custom name instead of the hostname.

### /var/ossec/bin/agent-auth -m <MANAGER_IP> -P <PASSWORD>

```bash
/var/ossec/bin/agent-auth -m <MANAGER_IP> -P <PASSWORD>
```

Example:

```bash
/var/ossec/bin/agent-auth -m 192.168.1.100 -P secretpass
```

Registers the agent using a password for authentication with the manager.

### /var/ossec/bin/agent-auth -m <MANAGER_IP> -G <GROUP>

```bash
/var/ossec/bin/agent-auth -m <MANAGER_IP> -G <GROUP>
```

Example:

```bash
/var/ossec/bin/agent-auth -m 192.168.1.100 -G web_servers
```

Registers the agent and immediately assigns it to a specific configuration group.

### /var/ossec/bin/agent-auth -m <MANAGER_IP> -v <CERT_PATH> -k <KEY_PATH>

```bash
/var/ossec/bin/agent-auth -m <MANAGER_IP> -v <CERT_PATH> -k <KEY_PATH>
```

Example:

```bash
/var/ossec/bin/agent-auth -m 192.168.1.100 -v agent.cert -k agent.key
```

Registers the agent using SSL/TLS certificates for mutual authentication.


## Key Management

### /var/ossec/bin/manage_agents -i <KEY_STRING>

```bash
/var/ossec/bin/manage_agents -i <KEY_STRING>
```

Example:

```bash
/var/ossec/bin/manage_agents -i MTIzIDQ1NiA3ODkg...
```

Manually imports a pre-generated authentication key on the agent.

### cat /var/ossec/etc/client.keys

```bash
cat /var/ossec/etc/client.keys
```

Displays the contents of the client keys file to verify registration status.

### rm /var/ossec/etc/client.keys

```bash
rm /var/ossec/etc/client.keys
```

Removes the client key file to force re-registration of the agent.


## Configuration Handling

### /var/ossec/bin/verify-agent-conf

```bash
/var/ossec/bin/verify-agent-conf
```

Checks the ossec.conf file for syntax errors before restarting the service.

### grep '<manager_address>' /var/ossec/etc/ossec.conf

```bash
grep '<manager_address>' /var/ossec/etc/ossec.conf
```

Verifies the configured Wazuh manager IP address in the configuration file.

### sed -i 's/<protocol>udp/<protocol>tcp/' /var/ossec/etc/ossec.conf

```bash
sed -i 's/<protocol>udp/<protocol>tcp/' /var/ossec/etc/ossec.conf
```

Switches the agent transport protocol from UDP to TCP via command line.


## Log Collection

### tail -f /var/ossec/logs/ossec.log

```bash
tail -f /var/ossec/logs/ossec.log
```

Monitors the Wazuh agent's internal operational log in real-time.

### grep 'Error' /var/ossec/logs/ossec.log

```bash
grep 'Error' /var/ossec/logs/ossec.log
```

Filters the internal log file for error messages to troubleshoot issues.

### tail -f /var/ossec/logs/active-responses.log

```bash
tail -f /var/ossec/logs/active-responses.log
```

Monitors the execution log of active response scripts on the endpoint.


## Network Monitoring

### netstat -vatn | grep 1514

```bash
netstat -vatn | grep 1514
```

Verifies if the agent has an established TCP connection to the manager on port 1514.

### tcpdump -i any port 1514

```bash
tcpdump -i any port 1514
```

Captures network packets on port 1514 to debug connectivity issues with the manager.


## FIM Actions

### /var/ossec/bin/syscheck_update -l

```bash
/var/ossec/bin/syscheck_update -l
```

List synchronized files in the FIM database (if local tool is enabled).

### touch /etc/test_fim_file

```bash
touch /etc/test_fim_file
```

Creates a test file to validate if File Integrity Monitoring is triggering alerts.

### echo 'modification' >> /etc/test_fim_file

```bash
echo 'modification' >> /etc/test_fim_file
```

Modifies a monitored file to verify FIM modification detection.


## Active Response

### ls -l /var/ossec/active-response/bin/

```bash
ls -l /var/ossec/active-response/bin/
```

Lists available active response scripts executable by the agent.

### /var/ossec/active-response/bin/host-deny.sh add - <IP_ADDRESS>

```bash
/var/ossec/active-response/bin/host-deny.sh add - <IP_ADDRESS>
```

Example:

```bash
/var/ossec/active-response/bin/host-deny.sh add - 192.168.1.50
```

Manually triggers the host-deny active response script to test IP blocking.

### /var/ossec/active-response/bin/firewall-drop.sh delete - <IP_ADDRESS>

```bash
/var/ossec/active-response/bin/firewall-drop.sh delete - <IP_ADDRESS>
```

Example:

```bash
/var/ossec/active-response/bin/firewall-drop.sh delete - 192.168.1.50
```

Manually removes a firewall block created by the firewall-drop active response.


## Process Monitoring

### ps aux | grep wazuh-agentd

```bash
ps aux | grep wazuh-agentd
```

Checks if the main agent daemon process is running.

### ps aux | grep wazuh-logcollector

```bash
ps aux | grep wazuh-logcollector
```

Verifies that the log collector process is active and running.

### ps aux | grep wazuh-syscheckd

```bash
ps aux | grep wazuh-syscheckd
```

Verifies that the FIM (syscheck) daemon is active and running.


## Troubleshooting (Debug)

### echo 'wazuh_modules.debug=2' >> /var/ossec/etc/local_internal_options.conf

```bash
echo 'wazuh_modules.debug=2' >> /var/ossec/etc/local_internal_options.conf
```

Enables verbose debug logging for Wazuh modules in the internal options file.

### echo 'agent.debug=2' >> /var/ossec/etc/local_internal_options.conf

```bash
echo 'agent.debug=2' >> /var/ossec/etc/local_internal_options.conf
```

Enables verbose debug logging specifically for the agent communication process.


## Validation & Testing

### logger 'Test Wazuh Alert'

```bash
logger 'Test Wazuh Alert'
```

Generates a syslog message to test if the log collector is reading syslog.

### cat /etc/shadow

```bash
cat /etc/shadow
```

Simulates a read of a sensitive file to test access monitoring rules.


## Validation & Testing (Windows)

### eventcreate /ID 1 /L Application /T INFORMATION /SO 'WazuhTest' /D 'Test Log'

```bash
eventcreate /ID 1 /L Application /T INFORMATION /SO 'WazuhTest' /D 'Test Log'
```

Creates a dummy Windows Event Log entry to verify Windows log collection.


## Advanced Config

### sed -i 's/<disabled>yes/<disabled>no/' /var/ossec/etc/ossec.conf

```bash
sed -i 's/<disabled>yes/<disabled>no/' /var/ossec/etc/ossec.conf
```

Enables a disabled module (like SCA or Syscollector) via command line stream editor.


## Rootcheck

### /var/ossec/bin/wazuh-control restart

```bash
/var/ossec/bin/wazuh-control restart
```

Restarts the agent, which forces a rootcheck and syscheck scan based on default frequency.


## Queue Management

### ls -lh /var/ossec/queue/rids/

```bash
ls -lh /var/ossec/queue/rids/
```

Checks the size of the request ID queue files to monitor for queue corruption.

### rm /var/ossec/queue/rids/sender_counter

```bash
rm /var/ossec/queue/rids/sender_counter
```

Resets the sender counter if the agent falls out of sync with the manager (use caution).


## Performance Tuning

### echo 'syscheck.sleep=2' >> /var/ossec/etc/local_internal_options.conf

```bash
echo 'syscheck.sleep=2' >> /var/ossec/etc/local_internal_options.conf
```

Adjusts the sleep time between FIM file checks to reduce CPU usage.

### echo 'logcollector.queue_size=1024' >> /var/ossec/etc/local_internal_options.conf

```bash
echo 'logcollector.queue_size=1024' >> /var/ossec/etc/local_internal_options.conf
```

Increases the log collector queue size to handle high-volume log bursts.


## Automation

### grep -q 'Client version' /var/ossec/logs/ossec.log && echo 'Upgraded'

```bash
grep -q 'Client version' /var/ossec/logs/ossec.log && echo 'Upgraded'
```

Scriptable check to verify if an agent upgrade has completed successfully.


## Docker Monitoring

### usermod -aG docker wazuh

```bash
usermod -aG docker wazuh
```

Adds the wazuh user to the docker group so the agent can monitor Docker events.


## Auditd Integration

### auditctl -w /etc/passwd -p wa -k identity

```bash
auditctl -w /etc/passwd -p wa -k identity
```

Adds a Linux audit rule to watch /etc/passwd, which Wazuh can then ingest.

### cat /var/log/audit/audit.log

```bash
cat /var/log/audit/audit.log
```

Verifies that the audit log exists and is populated for Wazuh to read.


## System Inventory

### sqlite3 /var/ossec/queue/syscollector/db/local.db 'SELECT * FROM packages LIMIT 5;'

```bash
sqlite3 /var/ossec/queue/syscollector/db/local.db 'SELECT * FROM packages LIMIT 5;'
```

Directly queries the local Syscollector SQLite database to view inventory data.


## Clean Uninstall

### yum remove wazuh-agent

```bash
yum remove wazuh-agent
```

Uninstalls the Wazuh agent package on RHEL/CentOS systems.

### apt-get purge wazuh-agent

```bash
apt-get purge wazuh-agent
```

Uninstalls and removes configuration files for the Wazuh agent on Debian/Ubuntu.

### rm -rf /var/ossec

```bash
rm -rf /var/ossec
```

Manually removes the installation directory to ensure a completely clean slate.


## Connectivity Test

### nc -zv <MANAGER_IP> 1514

```bash
nc -zv <MANAGER_IP> 1514
```

Example:

```bash
nc -zv 192.168.1.100 1514
```

Uses Netcat to test if the manager's registration/event port is reachable.


## Log Perms

### chmod 644 /var/log/custom_app.log

```bash
chmod 644 /var/log/custom_app.log
```

Ensures a custom log file is readable by the Wazuh agent user for collection.


## Packet Capture

### tcpdump -w wazuh_debug.pcap -s 0 host <MANAGER_IP> and port 1514

```bash
tcpdump -w wazuh_debug.pcap -s 0 host <MANAGER_IP> and port 1514
```

Example:

```bash
tcpdump -w wazuh_debug.pcap -s 0 host 192.168.1.100 and port 1514
```

Captures full packets to/from manager for advanced protocol analysis in Wireshark.


## Advanced Debug

### strace -p $(pidof wazuh-agentd)

```bash
strace -p $(pidof wazuh-agentd)
```

Traces system calls of the running agent daemon to debug hangs or crashes.

### lsof -p $(pidof wazuh-logcollector)

```bash
lsof -p $(pidof wazuh-logcollector)
```

Lists all files currently open by the log collector to verify file handles.


## Status Check

### /var/ossec/bin/agent_control -l

```bash
/var/ossec/bin/agent_control -l
```

Lists active agents (Note: This is a manager command but useful in hybrid testing).


## Policy Validation

### /var/ossec/bin/rootcheck_control -i 001

```bash
/var/ossec/bin/rootcheck_control -i 001
```

Queries rootcheck database for agent 001 (Manager side command for validation).


## Agent Upgrade

### /var/ossec/bin/agent_upgrade -a 001 -f <package_path>

```bash
/var/ossec/bin/agent_upgrade -a 001 -f <package_path>
```

Example:

```bash
/var/ossec/bin/agent_upgrade -a 001 -f wazuh_agent_v4.x.wpk
```

Forces a remote upgrade of agent 001 from the manager (WPK file required).


## Cleanup

### systemctl disable wazuh-agent

```bash
systemctl disable wazuh-agent
```

Disables the Wazuh agent from starting automatically on system boot.

## Related tools

- [osquery](https://terminal.rokibulroni.com/tool/monitoring/osquery)
- [Sysmon](https://terminal.rokibulroni.com/tool/monitoring/sysmon)
- [auditd](https://terminal.rokibulroni.com/tool/monitoring/auditd)
