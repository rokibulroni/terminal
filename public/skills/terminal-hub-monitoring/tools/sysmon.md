# Sysmon

> Microsoft Sysinternals System Monitor: logs process creation, network connections, file changes and more to the Windows (and Linux) event log.

- Category: Monitoring
- Commands: 75
- Page: https://terminal.rokibulroni.com/tool/monitoring/sysmon
- Homepage: https://learn.microsoft.com/sysinternals/downloads/sysmon
- Documentation: https://learn.microsoft.com/sysinternals/downloads/sysmon
- Tags: Windows, event logging, detection

## Install

- apt: `sudo apt install sysmonforlinux`
- windows: `winget install Microsoft.Sysinternals.Sysmon`

## Basic Help

### sysmon -?

```bash
sysmon -?
```

Displays the basic usage help menu and command line switches for the Sysmon utility.

### sysmon -? config

```bash
sysmon -? config
```

Shows help specifically related to configuration file structure and XML schema options.


## Schema Information

### sysmon -s

```bash
sysmon -s
```

Prints the full supported configuration XML schema for the installed version of Sysmon.


## Sysmon Installation

### sysmon -i

```bash
sysmon -i
```

Installs the Sysmon driver and service with default settings (Process Create and Process Terminate only).

### sysmon -i -n

```bash
sysmon -i -n
```

Installs Sysmon with default settings plus Network Connection monitoring enabled.

### sysmon -i -h sha256

```bash
sysmon -i -h sha256
```

Installs Sysmon and configures the hashing algorithm to use SHA256 for image identification.

### sysmon -i -h md5,sha256,imphash

```bash
sysmon -i -h md5,sha256,imphash
```

Installs Sysmon configured to calculate MD5, SHA256, and IMPHASH for all process images.

### sysmon -i config.xml

```bash
sysmon -i config.xml
```

Installs Sysmon using a specific XML configuration file to define rules and filters.


## Configuration Management

### sysmon -c

```bash
sysmon -c
```

Dumps the currently active Sysmon configuration and rules to the console output.

### sysmon -c new-config.xml

```bash
sysmon -c new-config.xml
```

Updates the active Sysmon configuration using a new XML file without reinstalling the service.


## Driver Management

### sysmon -d

```bash
sysmon -d
```

Sets the name of the Sysmon driver during installation (requires uninstall/reinstall to change).


## Advanced Installation

### sysmon -i -l -n

```bash
sysmon -i -l -n
```

Installs Sysmon with Image Loading (-l) and Network Connection (-n) monitoring enabled.


## Service Management

### sc query sysmon

```bash
sc query sysmon
```

Queries the Windows Service Control Manager to check the running status of the Sysmon service.

### sc query sysmon64

```bash
sc query sysmon64
```

Queries the status of the 64-bit Sysmon service explicitly.


## Driver Verification

### fltmc instances

```bash
fltmc instances
```

Lists loaded filesystem filter drivers to verify the Sysmon driver is attached to volumes.


## Log Management

### wevtutil gl Microsoft-Windows-Sysmon/Operational

```bash
wevtutil gl Microsoft-Windows-Sysmon/Operational
```

Gets the configuration details of the Sysmon Operational event log, including size and path.

### wevtutil sl Microsoft-Windows-Sysmon/Operational /ms:209715200

```bash
wevtutil sl Microsoft-Windows-Sysmon/Operational /ms:209715200
```

Sets the maximum size of the Sysmon Operational log to approximately 200MB.


## Event Monitoring (General)

### Get-WinEvent -LogName "Microsoft-Windows-Sysmon/Operational" -MaxEvents 10

```bash
Get-WinEvent -LogName "Microsoft-Windows-Sysmon/Operational" -MaxEvents 10
```

Retrieves the 10 most recent events from the Sysmon Operational log using PowerShell.


## Process Monitoring

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=1}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=1}
```

Queries the Sysmon log specifically for Process Creation events (Event ID 1).

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=5}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=5}
```

Queries for Process Termination events (Event ID 5) to track stopped processes.


## File Monitoring

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=11}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=11}
```

Queries for File Create events (Event ID 11) to detect dropped files.

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=23}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=23}
```

Queries for File Delete events (Event ID 23), often used for detecting wiping activity.

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=26}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=26}
```

Queries for File Delete Detected events (Event ID 26) similar to ID 23 but logged via redirect.


## Registry Monitoring

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=12}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=12}
```

Queries for Registry Event Object Create/Delete (Event ID 12).

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=13}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=13}
```

Queries for Registry Value Set events (Event ID 13) to detect persistence changes.

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=14}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=14}
```

Queries for Registry Key and Value Rename events (Event ID 14).


## Network Monitoring

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=3}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=3}
```

Queries for Network Connection events (Event ID 3) to trace C2 or lateral movement.


## Driver Loading

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=6}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=6}
```

Queries for Driver Loaded events (Event ID 6) to detect rootkit or BYOVD attacks.


## Image Loading

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=7}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=7}
```

Queries for Image Loaded events (Event ID 7) to see DLLs loaded by processes.


## Remote Thread Creation

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=8}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=8}
```

Queries for CreateRemoteThread events (Event ID 8) to detect code injection.


## Raw Access Read

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=9}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=9}
```

Queries for RawAccessRead events (Event ID 9) often associated with credential dumping.


## Process Access

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=10}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=10}
```

Queries for ProcessAccess events (Event ID 10) to view handle requests like LSASS access.


## File Stream

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=15}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=15}
```

Queries for FileCreateStreamHash events (Event ID 15) to detect Alternate Data Streams (ADS).


## Sysmon Configuration Change

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=16}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=16}
```

Queries for ServiceConfigurationChange events (Event ID 16) to audit Sysmon rule updates.


## Named Pipe

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=17}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=17}
```

Queries for PipeCreated events (Event ID 17) used in Cobalt Strike or lateral movement.

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=18}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=18}
```

Queries for PipeConnected events (Event ID 18) to trace client connections to pipes.


## WMI Monitoring

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=19}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=19}
```

Queries for WmiEventFilter activity (Event ID 19) to detect WMI persistence.

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=20}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=20}
```

Queries for WmiEventConsumer activity (Event ID 20) often paired with filters for attacks.

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=21}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=21}
```

Queries for WmiEventConsumerToFilter activity (Event ID 21) which binds consumer to filter.


## DNS Logging

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=22}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=22}
```

Queries for DNS Query events (Event ID 22) to detect beaconing or malicious domains.


## Clipboard Monitoring

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=24}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=24}
```

Queries for ClipboardChange events (Event ID 24) to see process clipboard capture activity.


## Process Tampering

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=25}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=25}
```

Queries for ProcessTampering events (Event ID 25) identifying 'hollow' or 'herpaderp' images.


## File Block

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=27}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=27}
```

Queries for FileBlockExecutable events (Event ID 27) where Sysmon blocked a file write.


## File Shredding

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=28}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=28}
```

Queries for FileBlockShredding events (Event ID 28) typically related to SDelete activity.


## Advanced SOC Workflow

### Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational | Where-Object {$_.Id -eq 1 -and $_.Message -like "*powershel

```bash
Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational | Where-Object {$_.Id -eq 1 -and $_.Message -like "*powershell*"}
```

Filters recent logs for Process Creation events involving PowerShell to detect script execution.

### Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational | Group-Object Id -NoElement

```bash
Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational | Group-Object Id -NoElement
```

Provides a summary count of all Sysmon events grouped by Event ID to spot anomalies.


## Investigation Workflow

### $Events = Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational; $Events | Where-Object {$_.Id -eq 3 -and $_.Messag

```bash
$Events = Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational; $Events | Where-Object {$_.Id -eq 3 -and $_.Message -match "DestinationPort: 443"}
```

Searches for Network Connections over port 443 to correlate HTTPS traffic.

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=1} | Select-Object -First 5 | Format-

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=1} | Select-Object -First 5 | Format-List
```

Displays full details of the last 5 process creation events in a readable list format.


## Debug & Troubleshooting

### fltmc

```bash
fltmc
```

Checks the Filter Manager Control to ensure SysmonDrv is properly registered.

### reg query HKLM\SYSTEM\CurrentControlSet\Services\SysmonDrv

```bash
reg query HKLM\SYSTEM\CurrentControlSet\Services\SysmonDrv
```

Inspects the Registry to verify the Sysmon Driver service configuration.

### reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WINEVT\Channels\Microsoft-Windows-Sysmon/Operational

```bash
reg query HKLM\SOFTWARE\Microsoft\Windows\CurrentVersion\WINEVT\Channels\Microsoft-Windows-Sysmon/Operational
```

Inspects the Registry settings for the Sysmon Event Log channel.


## Cleanup

### wevtutil cl Microsoft-Windows-Sysmon/Operational

```bash
wevtutil cl Microsoft-Windows-Sysmon/Operational
```

Clears the Sysmon Operational event log, useful when resetting a lab environment.


## Uninstallation

### sysmon -u

```bash
sysmon -u
```

Uninstalls the Sysmon driver and service cleanly from the system.

### sysmon -u force

```bash
sysmon -u force
```

Forces the uninstallation of Sysmon even if the service is hanging or unresponsive.


## Purple Team Validation

### Copy-Item C:\Windows\System32\cmd.exe C:\Temp\mimikatz.exe; Start-Process C:\Temp\mimikatz.exe

```bash
Copy-Item C:\Windows\System32\cmd.exe C:\Temp\mimikatz.exe; Start-Process C:\Temp\mimikatz.exe
```

Simulates a masquerading attack (renaming cmd.exe) to test OriginalFileName detection in Event ID 1.

### nslookup malicious-test-domain.com

```bash
nslookup malicious-test-domain.com
```

Generates a DNS query to validate if Event ID 22 is correctly capturing domain lookups.

### New-Item -Path "HKCU:\Software\TestKey" -Value "MaliciousValue"

```bash
New-Item -Path "HKCU:\Software\TestKey" -Value "MaliciousValue"
```

Creates a registry key to validate if Event ID 12 or 13 is capturing registry modifications.


## Detection Logic

### Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational | Where-Object { $_.Id -eq 1 -and $_.Properties[13].Value -ne

```bash
Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational | Where-Object { $_.Id -eq 1 -and $_.Properties[13].Value -ne $_.Properties[20].Value }
```

Compares OriginalFileName and current filename in Event ID 1 to detect masquerading programmatically.


## Performance Tuning

### Measure-Command { Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational -MaxEvents 1000 }

```bash
Measure-Command { Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational -MaxEvents 1000 }
```

Measures the time taken to query Sysmon logs to assess log volume impact on performance.


## Manifest Installation

### sysmon -m

```bash
sysmon -m
```

Installs the event manifest manually, which can be useful if event logs are not rendering text descriptions.


## Advanced Config Export

### sysmon -c > C:\current_sysmon_config.xml

```bash
sysmon -c > C:\current_sysmon_config.xml
```

Exports the active configuration to a file for audit or backup purposes.


## Parent Process Hunt

### $p = Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=1} -MaxEvents 1; Get-Process -Id

```bash
$p = Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=1} -MaxEvents 1; Get-Process -Id $p.Properties[4].Value
```

Retrieves the ParentProcessId from the latest Sysmon event and looks up the running parent process.


## Alternate Stream Hunt

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=15} | Select-Object -ExpandProperty M

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=15} | Select-Object -ExpandProperty Message
```

Reads the message content of FileCreateStreamHash events to identify hidden data streams.


## WMI Persistence Hunt

### Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational | Where-Object { $_.Id -in 19,20,21 } | Format-Table TimeCrea

```bash
Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational | Where-Object { $_.Id -in 19,20,21 } | Format-Table TimeCreated,Id,Message -AutoSize
```

Aggregates all WMI-related Sysmon events to visualize complete WMI persistence mechanisms.


## Obfuscated Install

### sysmon -i config.xml -d mydriver -n

```bash
sysmon -i config.xml -d mydriver -n
```

Installs Sysmon with a custom driver name 'mydriver' to obscure its presence from basic checks.


## Log Search by Hash

### $hash = 'E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855'; Get-WinEvent -LogName Microsoft-Windows-Sysm

```bash
$hash = 'E3B0C44298FC1C149AFBF4C8996FB92427AE41E4649B934CA495991B7852B855'; Get-WinEvent -LogName Microsoft-Windows-Sysmon/Operational | Where-Object {$_.Message -match $hash}
```

Searches the entire Sysmon log history for a specific SHA256 file hash.


## Credential Dump Detection

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=10} | Where-Object {$_.Message -match

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=10} | Where-Object {$_.Message -match 'lsass.exe'}
```

Filters Process Access events specifically targeting lsass.exe, a key indicator of credential dumping.


## Archive Log

### wevtutil epl Microsoft-Windows-Sysmon/Operational C:\Evidence\sysmon_backup.evtx

```bash
wevtutil epl Microsoft-Windows-Sysmon/Operational C:\Evidence\sysmon_backup.evtx
```

Exports the current Sysmon log to an external EVTX file for offline analysis or evidence preservation.


## Automated Config Update

### Invoke-WebRequest -Uri 'https://internal.repo/sysmonconfig.xml' -OutFile 'C:\sysmon.xml'; sysmon -c C:\sysmon.xml

```bash
Invoke-WebRequest -Uri 'https://internal.repo/sysmonconfig.xml' -OutFile 'C:\sysmon.xml'; sysmon -c C:\sysmon.xml
```

Downloads a remote configuration file and immediately updates the Sysmon configuration.


## Sysmon Error Checking

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=255}

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=255}
```

Checks for Sysmon Error events (Event ID 255) which indicate internal Sysmon failures.


## Legacy Install Mode

### sysmon -i -accepteula

```bash
sysmon -i -accepteula
```

Installs Sysmon explicitly accepting the EULA (often required in automated non-interactive scripts).


## Configuration Validation

### sysmon -t config.xml

```bash
sysmon -t config.xml
```

Tests a configuration file for syntax errors without loading it (syntax depends on version, often requires dummy load).


## Pipe Connection Hunt

### Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=18} | Group-Object -Property Properti

```bash
Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; Id=18} | Group-Object -Property Properties -NoElement
```

Groups pipe connection events to identify high-frequency pipe access which may indicate C2 beacons.


## Sysmon Service Restart

### net stop sysmon; net start sysmon

```bash
net stop sysmon; net start sysmon
```

Manually restarts the Sysmon service to clear temporary states or force a reload if hung.


## Full Removal

### sysmon -u; sc delete sysmon; del C:\Windows\Sysmon.exe

```bash
sysmon -u; sc delete sysmon; del C:\Windows\Sysmon.exe
```

Performs a manual deep clean of Sysmon artifacts if the uninstaller fails.

## Related tools

- [osquery](https://terminal.rokibulroni.com/tool/monitoring/osquery)
- [Wazuh agent](https://terminal.rokibulroni.com/tool/monitoring/wazuh-agent)
- [auditd](https://terminal.rokibulroni.com/tool/monitoring/auditd)
