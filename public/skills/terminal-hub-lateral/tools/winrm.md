# WinRM

> Windows Remote Management from Linux and PowerShell: Enter-PSSession, Invoke-Command and service configuration.

- Category: Lateral Movement
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/lateral/winrm
- Homepage: https://learn.microsoft.com/windows/win32/winrm/portal
- Documentation: https://learn.microsoft.com/powershell/scripting/learn/remoting/running-remote-commands
- Tags: WinRM, PowerShell, remote management

## Basic Configuration

### winrm quickconfig

```bash
winrm quickconfig
```

Configures the WinRM service with default settings and enables the firewall exception.

### winrm quickconfig -quiet

```bash
winrm quickconfig -quiet
```

Configures WinRM non-interactively without prompting for confirmation.


## Service Status

### winrm get winrm/config

```bash
winrm get winrm/config
```

Retrieves the full current configuration state of both Client and Service components.

### Test-WSMan

```bash
Test-WSMan
```

Tests the local WinRM service to ensure it is responding to requests.


## Target Specification

### Test-WSMan -ComputerName 192.168.1.10

```bash
Test-WSMan -ComputerName 192.168.1.10
```

Verifies that the WinRM service is accessible and listening on a remote target.

### Test-WSMan -ComputerName 192.168.1.10 -Port 5985

```bash
Test-WSMan -ComputerName 192.168.1.10 -Port 5985
```

Tests WinRM connectivity on a specific HTTP port.

### Test-WSMan -ComputerName 192.168.1.10 -Port 5986 -UseSSL

```bash
Test-WSMan -ComputerName 192.168.1.10 -Port 5986 -UseSSL
```

Tests WinRM connectivity over HTTPS using the default secure port.


## Listener Configuration

### winrm enumerate winrm/config/listener

```bash
winrm enumerate winrm/config/listener
```

Lists all configured WinRM listeners and their specific settings.

### winrm create winrm/config/Listener?Address=*+Transport=HTTP

```bash
winrm create winrm/config/Listener?Address=*+Transport=HTTP
```

Creates a new listener that accepts HTTP connections on all network interfaces.

### winrm create winrm/config/Listener?Address=*+Transport=HTTPS @{Hostname="server.domain.com";CertificateThumbprint="THUMB

```bash
winrm create winrm/config/Listener?Address=*+Transport=HTTPS @{Hostname="server.domain.com";CertificateThumbprint="THUMBPRINT_GOES_HERE"}
```

Example:

```bash
winrm create winrm/config/Listener?Address=*+Transport=HTTPS @{Hostname="server.domain.com";CertificateThumbprint="A1B2C3D4E5F6..."}
```

Creates a secure HTTPS listener bound to a specific certificate thumbprint.


## Client Configuration

### Set-Item WSMan:\localhost\Client\TrustedHosts -Value "192.168.1.10"

```bash
Set-Item WSMan:\localhost\Client\TrustedHosts -Value "192.168.1.10"
```

Adds a specific IP address to the TrustedHosts list to allow unauthenticated connection establishment.

### Set-Item WSMan:\localhost\Client\TrustedHosts -Value "*" -Force

```bash
Set-Item WSMan:\localhost\Client\TrustedHosts -Value "*" -Force
```

Configures the client to trust all hosts, often used in lab environments for testing.

### Get-Item WSMan:\localhost\Client\TrustedHosts

```bash
Get-Item WSMan:\localhost\Client\TrustedHosts
```

Displays the current list of trusted hosts configured on the client.


## Service Configuration

### winrm set winrm/config/service @{AllowUnencrypted="true"}

```bash
winrm set winrm/config/service @{AllowUnencrypted="true"}
```

Enables the service to accept unencrypted traffic, typically for debugging or legacy support.

### winrm set winrm/config/service/auth @{Basic="true"}

```bash
winrm set winrm/config/service/auth @{Basic="true"}
```

Enables Basic authentication on the service, allowing plain text credentials over the connection.


## Interactive Session

### Enter-PSSession -ComputerName 192.168.1.10 -Credential (Get-Credential)

```bash
Enter-PSSession -ComputerName 192.168.1.10 -Credential (Get-Credential)
```

Starts an interactive PowerShell session on the remote computer using prompted credentials.

### Enter-PSSession -ComputerName 192.168.1.10 -Authentication Negotiate

```bash
Enter-PSSession -ComputerName 192.168.1.10 -Authentication Negotiate
```

Connects using Negotiate authentication, which attempts Kerberos and falls back to NTLM.

### Enter-PSSession -ComputerName 192.168.1.10 -Authentication Kerberos

```bash
Enter-PSSession -ComputerName 192.168.1.10 -Authentication Kerberos
```

Forces Kerberos authentication, requiring correct SPNs and domain trust.


## Legacy Execution

### winrs -r:http://192.168.1.10:5985 -u:Admin -p:Pass cmd

```bash
winrs -r:http://192.168.1.10:5985 -u:Admin -p:Pass cmd
```

Uses the legacy WinRS tool to launch a command prompt on the remote host via HTTP.

### winrs -r:https://192.168.1.10:5986 -u:Admin -p:Pass -ssl "ipconfig /all"

```bash
winrs -r:https://192.168.1.10:5986 -u:Admin -p:Pass -ssl "ipconfig /all"
```

Executes a single command remotely over HTTPS using legacy WinRS syntax.


## Remote Command Execution

### Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { Get-Process }

```bash
Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { Get-Process }
```

Executes a PowerShell script block on the remote machine and returns objects to the local session.

### Invoke-Command -ComputerName 192.168.1.10 -FilePath .\script.ps1

```bash
Invoke-Command -ComputerName 192.168.1.10 -FilePath .\script.ps1
```

Reads a local PowerShell script file and executes its contents on the remote system.

### Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { param($p) Write-Host $p } -ArgumentList "Hello"

```bash
Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { param($p) Write-Host $p } -ArgumentList "Hello"
```

Passes local arguments into the remote script block for dynamic execution.


## Session Management

### $s = New-PSSession -ComputerName 192.168.1.10 -Credential (Get-Credential)

```bash
$s = New-PSSession -ComputerName 192.168.1.10 -Credential (Get-Credential)
```

Creates a persistent PowerShell session object stored in a variable for reuse.

### Invoke-Command -Session $s -ScriptBlock { hostname }

```bash
Invoke-Command -Session $s -ScriptBlock { hostname }
```

Executes a command inside an existing persistent session without re-authenticating.

### Get-PSSession

```bash
Get-PSSession
```

Lists all active PowerShell sessions maintained by the local client.

### Remove-PSSession -Session $s

```bash
Remove-PSSession -Session $s
```

Closes the specified persistent session and frees resources.

### Disconnect-PSSession -Id 1

```bash
Disconnect-PSSession -Id 1
```

Disconnects a session but leaves it running on the remote host for later reconnection.

### Connect-PSSession -ComputerName 192.168.1.10 -Id 1

```bash
Connect-PSSession -ComputerName 192.168.1.10 -Id 1
```

Reconnects to a previously disconnected session on a remote machine.


## File Transfer

### Copy-Item -Path .\tool.exe -Destination C:\Temp\ -ToSession $s

```bash
Copy-Item -Path .\tool.exe -Destination C:\Temp\ -ToSession $s
```

Uploads a local file to the remote system using an existing WinRM session.

### Copy-Item -Path C:\Logs\remote.log -Destination .\ -FromSession $s

```bash
Copy-Item -Path C:\Logs\remote.log -Destination .\ -FromSession $s
```

Downloads a file from the remote system to the local machine via WinRM.


## Lateral Movement

### Invoke-Command -ComputerName 192.168.1.10 -Authentication Credssp -Credential (Get-Credential) -ScriptBlock { Get-Servic

```bash
Invoke-Command -ComputerName 192.168.1.10 -Authentication Credssp -Credential (Get-Credential) -ScriptBlock { Get-Service }
```

Uses CredSSP authentication to allow the remote host to delegate the user's credentials to a second hop.

### Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { Start-Process powershell -ArgumentList '-NoProfile -ExecutionPo

```bash
Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { Start-Process powershell -ArgumentList '-NoProfile -ExecutionPolicy Bypass -File C:\payload.ps1' }
```

Remotely triggers a payload execution using Start-Process to detach from the WinRM shell.


## Red Team Ops

### Invoke-Command -ComputerName 192.168.1.10 -AsJob -ScriptBlock { 1..100 | ForEach-Object { Start-Sleep 1; $_ } }

```bash
Invoke-Command -ComputerName 192.168.1.10 -AsJob -ScriptBlock { 1..100 | ForEach-Object { Start-Sleep 1; $_ } }
```

Runs a long-running process as a background job on the remote host to avoid hanging the console.

### Receive-Job -Id 1 -Keep

```bash
Receive-Job -Id 1 -Keep
```

Retrieves the output from a background remote job while keeping the data available for future retrieval.


## Advanced Configuration

### Set-Item WSMan:\localhost\Shell\MaxMemoryPerShellMB 1024

```bash
Set-Item WSMan:\localhost\Shell\MaxMemoryPerShellMB 1024
```

Increases the memory limit for remote shells, useful when running memory-intensive tools remotely.

### winrm set winrm/config/winrs @{MaxShellsPerUser="50"}

```bash
winrm set winrm/config/winrs @{MaxShellsPerUser="50"}
```

Increases the maximum number of concurrent shells allowed per user.


## Purple Team Validation

### Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { whoami /priv }

```bash
Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { whoami /priv }
```

Checks the privilege level of the current remote session to validate successful elevation.

### Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { Get-MpComputerStatus }

```bash
Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { Get-MpComputerStatus }
```

Remotely queries Windows Defender status to check for exclusions or real-time protection state.


## Blue Team Detection

### Get-WinEvent -LogName "Microsoft-Windows-WinRM/Operational" -MaxEvents 10

```bash
Get-WinEvent -LogName "Microsoft-Windows-WinRM/Operational" -MaxEvents 10
```

Queries local WinRM operational logs to detect recent incoming connections and errors.

### Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { Get-WinEvent -LogName 'Security' -FilterXPath "*[System[EventID

```bash
Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { Get-WinEvent -LogName 'Security' -FilterXPath "*[System[EventID=4624] and EventData[Data[@Name='LogonType']='3']]" }
```

Remotely searches Security logs for Network Logon (Type 3) events associated with WinRM activity.


## Incident Response

### Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { Get-NetTCPConnection | Where-Object { $_.LocalPort -eq 5985 } }

```bash
Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { Get-NetTCPConnection | Where-Object { $_.LocalPort -eq 5985 } }
```

Identifies active TCP connections on the remote host specifically on the WinRM HTTP port.

### Disable-PSRemoting -Force

```bash
Disable-PSRemoting -Force
```

Rapidly disables PowerShell Remoting on the system to stop active lateral movement.


## JEA Configuration

### New-PSSessionConfigurationFile -Path .\JEAConfig.pssc -SessionType RestrictedRemoteServer

```bash
New-PSSessionConfigurationFile -Path .\JEAConfig.pssc -SessionType RestrictedRemoteServer
```

Creates a Just Enough Administration (JEA) configuration file to restrict remote capabilities.

### Register-PSSessionConfiguration -Name "Maintenance" -Path .\JEAConfig.pssc

```bash
Register-PSSessionConfiguration -Name "Maintenance" -Path .\JEAConfig.pssc
```

Registers a new endpoint on the local machine using the restricted JEA configuration.


## JEA Usage

### Enter-PSSession -ComputerName 192.168.1.10 -ConfigurationName "Maintenance"

```bash
Enter-PSSession -ComputerName 192.168.1.10 -ConfigurationName "Maintenance"
```

Connects to a specific named endpoint (JEA) rather than the default PowerShell endpoint.


## Advanced Automation

### Invoke-Command -ComputerName (Get-Content servers.txt) -ScriptBlock { Update-Help } -ThrottleLimit 10

```bash
Invoke-Command -ComputerName (Get-Content servers.txt) -ScriptBlock { Update-Help } -ThrottleLimit 10
```

Runs a command against a list of servers read from a file, limiting concurrent operations to 10.


## Cleanup

### Remove-Item WSMan:\localhost\Listener\* -Recurse

```bash
Remove-Item WSMan:\localhost\Listener\* -Recurse
```

Deletes all configured WinRM listeners, effectively stopping the machine from accepting connections.

### winrm invoke Restore winrm/config

```bash
winrm invoke Restore winrm/config
```

Resets the WinRM configuration to its default installation state.


## Diagnostic

### winrm identify -r:http://192.168.1.10:5985

```bash
winrm identify -r:http://192.168.1.10:5985
```

Queries the remote machine for OS version and WinRM protocol version without a full login.


## Proxy Configuration

### winrm set winrm/config/client @{NetworkDelayms="60000"}

```bash
winrm set winrm/config/client @{NetworkDelayms="60000"}
```

Adjusts the network delay timeout for the client, useful for slow or high-latency connections.


## Output Handling

### Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { Get-Service } | Select-Object -Property PSComputerName, Name, S

```bash
Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { Get-Service } | Select-Object -Property PSComputerName, Name, Status
```

Filters and formats object-based output returned from the remote session.


## Automation

### Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { $env:COMPUTERNAME } -HideComputerName

```bash
Invoke-Command -ComputerName 192.168.1.10 -ScriptBlock { $env:COMPUTERNAME } -HideComputerName
```

Executes remotely but suppresses the 'PSComputerName' property from the output display.


## Port Forwarding

### Set-Item WSMan:\localhost\Service\EnableCompatibilityHttpListener -Value $true

```bash
Set-Item WSMan:\localhost\Service\EnableCompatibilityHttpListener -Value $true
```

Enables the compatibility listener to support legacy WinRM clients or specific port forwarding scenarios.


## Double Hop

### Enable-WSManCredSSP -Role Client -DelegateComputer "*"

```bash
Enable-WSManCredSSP -Role Client -DelegateComputer "*"
```

Configures the client to allow credential delegation to any remote host (high security risk).

### Enable-WSManCredSSP -Role Server

```bash
Enable-WSManCredSSP -Role Server
```

Configures the server to accept delegated credentials from a client.


## Access Control

### Set-PSSessionConfiguration -Name Microsoft.PowerShell -ShowSecurityDescriptorUI

```bash
Set-PSSessionConfiguration -Name Microsoft.PowerShell -ShowSecurityDescriptorUI
```

Opens a GUI to interactively modify the Access Control List (ACL) for the default PowerShell endpoint.


## Troubleshooting

### Get-WSManInstance -ResourceURI wmicimv2/cim_service -SelectorSet @{Name="WinRM"} -ComputerName 192.168.1.10

```bash
Get-WSManInstance -ResourceURI wmicimv2/cim_service -SelectorSet @{Name="WinRM"} -ComputerName 192.168.1.10
```

Uses WS-Management protocol to directly query the CIM service status on a remote host.


## Mass Action

### $sessions = New-PSSession -ComputerName (Get-Content hosts.txt); Invoke-Command -Session $sessions -ScriptBlock { gpupda

```bash
$sessions = New-PSSession -ComputerName (Get-Content hosts.txt); Invoke-Command -Session $sessions -ScriptBlock { gpupdate /force }
```

Establishes persistent sessions to multiple hosts listed in a file and runs a group policy update on all.


## Cleanup

### Stop-Service WinRM

```bash
Stop-Service WinRM
```

Immediately stops the Windows Remote Management service, terminating all active connections.

## Related tools

- [Evil-WinRM](https://terminal.rokibulroni.com/tool/lateral/evil-winrm)
- [PsExec](https://terminal.rokibulroni.com/tool/lateral/psexec)
