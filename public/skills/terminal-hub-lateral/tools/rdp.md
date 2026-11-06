# RDP clients

> Connecting to Windows Remote Desktop from Linux with xfreerdp and rdesktop — including pass-the-hash, drive sharing and clipboard.

- Category: Lateral Movement
- Commands: 60
- Page: https://terminal.rokibulroni.com/tool/lateral/rdp
- Homepage: https://www.freerdp.com
- Documentation: https://github.com/FreeRDP/FreeRDP/wiki/CommandLineInterface-(3.x)
- Tags: RDP, remote desktop, Windows

## Install

- apt: `sudo apt install freerdp2-x11`
- brew: `brew install freerdp`

## Basic RDP Syntax

### xfreerdp /v:192.168.1.10

```bash
xfreerdp /v:192.168.1.10
```

Initiates a standard RDP connection to the target IP address using default settings.

### xfreerdp /v:win-server.example.com

```bash
xfreerdp /v:win-server.example.com
```

Connects to a target server using its DNS hostname.


## Authentication Handling

### xfreerdp /u:administrator /v:192.168.1.10

```bash
xfreerdp /u:administrator /v:192.168.1.10
```

Specifies the username to use for the connection attempt.

### xfreerdp /u:user /p:password123 /v:192.168.1.10

```bash
xfreerdp /u:user /p:password123 /v:192.168.1.10
```

Provides both username and password directly in the command line for automated login.

### xfreerdp /u:user /d:CORP /v:192.168.1.10

```bash
xfreerdp /u:user /d:CORP /v:192.168.1.10
```

Specifies the Active Directory domain for the user account.


## Target and Port Specification

### xfreerdp /v:192.168.1.10 /port:3389

```bash
xfreerdp /v:192.168.1.10 /port:3389
```

Explicitly sets the destination port, useful if RDP is listening on a non-standard port.


## Display Configuration

### xfreerdp /v:192.168.1.10 /f

```bash
xfreerdp /v:192.168.1.10 /f
```

Launches the RDP session in full-screen mode.

### xfreerdp /v:192.168.1.10 /size:1280x720

```bash
xfreerdp /v:192.168.1.10 /size:1280x720
```

Sets a specific window resolution for the remote desktop session.

### xfreerdp /v:192.168.1.10 /size:80%

```bash
xfreerdp /v:192.168.1.10 /size:80%
```

Sets the RDP window size to a percentage of the local screen size.

### xfreerdp /v:192.168.1.10 /multimon

```bash
xfreerdp /v:192.168.1.10 /multimon
```

Enables multiple monitor support, spanning the session across all local screens.


## Resource Redirection

### xfreerdp /u:user /v:192.168.1.10 +clipboard

```bash
xfreerdp /u:user /v:192.168.1.10 +clipboard
```

Enables clipboard sharing between the local host and the remote RDP session.

### xfreerdp /u:user /v:192.168.1.10 /drive:share,/home/user/files

```bash
xfreerdp /u:user /v:192.168.1.10 /drive:share,/home/user/files
```

Mounts a local directory as a mapped drive inside the remote Windows session.

### xfreerdp /v:192.168.1.10 /sound:sys:alsa

```bash
xfreerdp /v:192.168.1.10 /sound:sys:alsa
```

Redirects remote audio output to the local machine using the ALSA backend.

### xfreerdp /v:192.168.1.10 /microphone:sys:alsa

```bash
xfreerdp /v:192.168.1.10 /microphone:sys:alsa
```

Redirects local microphone input to the remote session.

### xfreerdp /v:192.168.1.10 +printing

```bash
xfreerdp /v:192.168.1.10 +printing
```

Enables local printer redirection to the remote host.


## Security and Certificate Options

### xfreerdp /v:192.168.1.10 /cert-ignore

```bash
xfreerdp /v:192.168.1.10 /cert-ignore
```

Ignores any invalid or self-signed certificate errors from the target.

### xfreerdp /v:192.168.1.10 /cert-tofu

```bash
xfreerdp /v:192.168.1.10 /cert-tofu
```

Uses Trust on First Use policy to accept the certificate once and warn on changes.

### xfreerdp /v:192.168.1.10 /sec:nla

```bash
xfreerdp /v:192.168.1.10 /sec:nla
```

Forces the usage of Network Level Authentication (NLA) protocol.

### xfreerdp /v:192.168.1.10 /sec:tls

```bash
xfreerdp /v:192.168.1.10 /sec:tls
```

Forces the usage of TLS encryption for the connection.

### xfreerdp /v:192.168.1.10 /sec:rdp

```bash
xfreerdp /v:192.168.1.10 /sec:rdp
```

Falls back to standard RDP security (often less secure) if other methods fail.


## Performance Tuning

### xfreerdp /v:192.168.1.10 /network:lan

```bash
xfreerdp /v:192.168.1.10 /network:lan
```

Optimizes connection settings for a high-speed Local Area Network.

### xfreerdp /v:192.168.1.10 /network:modem

```bash
xfreerdp /v:192.168.1.10 /network:modem
```

Optimizes connection settings for low-bandwidth connections by disabling wallpapers and themes.

### xfreerdp /v:192.168.1.10 /bpp:16

```bash
xfreerdp /v:192.168.1.10 /bpp:16
```

Reduces color depth to 16-bit to save bandwidth.

### xfreerdp /v:192.168.1.10 +compression

```bash
xfreerdp /v:192.168.1.10 +compression
```

Enables bulk compression to reduce data transfer size.


## Proxy and Gateway Usage

### xfreerdp /v:internal-pc /g:gateway.example.com

```bash
xfreerdp /v:internal-pc /g:gateway.example.com
```

Connects to an internal target via an RD Gateway server.

### xfreerdp /v:internal-pc /g:gateway.example.com /gu:gatewayuser /gp:gatewaypass

```bash
xfreerdp /v:internal-pc /g:gateway.example.com /gu:gatewayuser /gp:gatewaypass
```

Authenticates to the RD Gateway with specific credentials different from the target host.


## Lateral Movement Simulation

### xfreerdp /v:192.168.1.10 /u:admin /pth:E52CAC67419A9A224A3B108F3FA6CB6D

```bash
xfreerdp /v:192.168.1.10 /u:admin /pth:E52CAC67419A9A224A3B108F3FA6CB6D
```

Performs a Pass-the-Hash attack to authenticate using an NTLM hash instead of a password.

### xfreerdp /v:192.168.1.10 /restricted-admin

```bash
xfreerdp /v:192.168.1.10 /restricted-admin
```

Connects in Restricted Admin mode, preventing credential exposure to the target machine.

### xfreerdp /v:192.168.1.10 /client-hostname:spoofed-host

```bash
xfreerdp /v:192.168.1.10 /client-hostname:spoofed-host
```

Spoofs the client hostname sent to the server during the connection sequence.


## Automation and Scripting

### xfreerdp /v:192.168.1.10 +auto-reconnect

```bash
xfreerdp /v:192.168.1.10 +auto-reconnect
```

Automatically attempts to reconnect if the session drops.

### xfreerdp /v:192.168.1.10 /auto-reconnect-max-retries:10

```bash
xfreerdp /v:192.168.1.10 /auto-reconnect-max-retries:10
```

Limits the number of automatic reconnection attempts to 10.

### xfreerdp /v:192.168.1.10 /app:"||cmd"

```bash
xfreerdp /v:192.168.1.10 /app:"||cmd"
```

Uses RemoteApp feature to launch a single application (cmd) instead of a full desktop.


## Tunneling and Port Forwarding

### ssh -L 33389:192.168.1.10:3389 user@jumpbox -f -N && xfreerdp /v:127.0.0.1 /port:33389

```bash
ssh -L 33389:192.168.1.10:3389 user@jumpbox -f -N && xfreerdp /v:127.0.0.1 /port:33389
```

Tunnels RDP traffic through an SSH jumpbox via local port forwarding.


## Advanced RDP Configuration

### xfreerdp /v:192.168.1.10 /kbd:0x00000409

```bash
xfreerdp /v:192.168.1.10 /kbd:0x00000409
```

Forces the keyboard layout to US English to prevent mapping issues.

### xfreerdp /v:192.168.1.10 +fonts

```bash
xfreerdp /v:192.168.1.10 +fonts
```

Enables font smoothing (ClearType) for better text readability.

### xfreerdp /v:192.168.1.10 -wallpaper

```bash
xfreerdp /v:192.168.1.10 -wallpaper
```

Explicitly disables the desktop wallpaper to improve responsiveness.


## Red Team Operational Use

### xfreerdp /v:192.168.1.10 /drive:c,/ /drive:etc,/etc

```bash
xfreerdp /v:192.168.1.10 /drive:c,/ /drive:etc,/etc
```

Exposes the entire local root filesystem to the remote compromised host for exfiltration.

### xfreerdp /v:192.168.1.10 /log-level:DEBUG

```bash
xfreerdp /v:192.168.1.10 /log-level:DEBUG
```

Runs the client with verbose logging to debug authentication failures or protocol errors.


## Native Windows Client (mstsc)

### mstsc /v:192.168.1.10

```bash
mstsc /v:192.168.1.10
```

Basic command line execution for the native Windows Remote Desktop Connection client.

### mstsc /v:192.168.1.10 /admin

```bash
mstsc /v:192.168.1.10 /admin
```

Connects to the console session (Session 0) or the administrative session of the server.

### mstsc /v:192.168.1.10 /f

```bash
mstsc /v:192.168.1.10 /f
```

Starts the native Windows RDP client immediately in full-screen mode.

### mstsc /v:192.168.1.10 /w:1024 /h:768

```bash
mstsc /v:192.168.1.10 /w:1024 /h:768
```

Launches the native client with specific width and height dimensions.

### mstsc /edit connection.rdp

```bash
mstsc /edit connection.rdp
```

Opens an existing RDP configuration file for editing without connecting.

### mstsc /shadow:1 /v:192.168.1.10 /control

```bash
mstsc /shadow:1 /v:192.168.1.10 /control
```

Shadows (views) session ID 1 on the target server with control privileges.

### mstsc /shadow:1 /v:192.168.1.10 /noConsentPrompt

```bash
mstsc /shadow:1 /v:192.168.1.10 /noConsentPrompt
```

Shadows a session attempting to bypass the user consent prompt (requires policy configuration).


## Purple Team Detection Testing

### xfreerdp /v:192.168.1.10 /sec:rdp /cert-ignore

```bash
xfreerdp /v:192.168.1.10 /sec:rdp /cert-ignore
```

Deliberately downgrades security to test if the target alerts on weak encryption protocols.

### xfreerdp /u:baduser /p:wrongpass /v:192.168.1.10

```bash
xfreerdp /u:baduser /p:wrongpass /v:192.168.1.10
```

Generates a failed login event (Event ID 4625) to test SIEM alerting rules.

### xfreerdp /v:192.168.1.10 /drive:*,/tmp

```bash
xfreerdp /v:192.168.1.10 /drive:*,/tmp
```

Mounts all available local drives to test DLP controls or monitoring of drive redirection.


## Blue Team Defensive Validation

### nmap -p 3389 --script rdp-enum-encryption 192.168.1.10

```bash
nmap -p 3389 --script rdp-enum-encryption 192.168.1.10
```

Checks which encryption levels and security protocols are enforced by the RDP service.

### nmap -p 3389 --script rdp-ntlm-info 192.168.1.10

```bash
nmap -p 3389 --script rdp-ntlm-info 192.168.1.10
```

Extracts domain and server information from the RDP service without full authentication.


## Combined Real World Workflow

### xfreerdp /v:192.168.1.10 /u:admin /p:pass /size:90% +clipboard /drive:share,./payloads /cert-ignore

```bash
xfreerdp /v:192.168.1.10 /u:admin /p:pass /size:90% +clipboard /drive:share,./payloads /cert-ignore
```

A typical admin workflow connecting with credentials, sharing payloads, and ignoring cert warnings.


## Incident Response Simulation

### xfreerdp /v:192.168.1.10 +bitmap-cache-persist

```bash
xfreerdp /v:192.168.1.10 +bitmap-cache-persist
```

Enables persistent bitmap caching to generate cache files for forensic artifact testing.

### xfreerdp /v:192.168.1.10 /timeout:60000

```bash
xfreerdp /v:192.168.1.10 /timeout:60000
```

Sets a connection timeout to test how the server logs incomplete or timed-out handshake attempts.


## Advanced Auth

### xfreerdp /v:192.168.1.10 /smartcard:soft:pfx:/path/to/cert.pfx

```bash
xfreerdp /v:192.168.1.10 /smartcard:soft:pfx:/path/to/cert.pfx
```

Emulates a smart card authentication using a software PFX certificate file.

### xfreerdp /v:192.168.1.10 /kerberos:auto

```bash
xfreerdp /v:192.168.1.10 /kerberos:auto
```

Attempts to authenticate using a Kerberos ticket granting ticket (TGT) from the current cache.


## Legacy/Alternative Client

### rdesktop -u user -p password -g 1024x768 192.168.1.10

```bash
rdesktop -u user -p password -g 1024x768 192.168.1.10
```

Connects using the legacy rdesktop client with geometry settings.

### rdesktop -r disk:local=/home/user 192.168.1.10

```bash
rdesktop -r disk:local=/home/user 192.168.1.10
```

Connects with rdesktop and redirects a local disk.


## Tunneling and Port Forwarding

### socat TCP4-LISTEN:3389,fork TCP4:192.168.1.10:3389

```bash
socat TCP4-LISTEN:3389,fork TCP4:192.168.1.10:3389
```

Creates a simple port forwarder using socat to expose an internal RDP host.


## Security Protocol Selection

### xfreerdp /v:192.168.1.10 /ssl-protocol:TLSv1.2

```bash
xfreerdp /v:192.168.1.10 /ssl-protocol:TLSv1.2
```

Strictly enforces the use of TLS version 1.2 for the connection.


## Cleanup and Termination

### pkill -f xfreerdp

```bash
pkill -f xfreerdp
```

Forcefully terminates all running xfreerdp processes.

## Related tools

- [Ncrack](https://terminal.rokibulroni.com/tool/credentials/ncrack)
- [Evil-WinRM](https://terminal.rokibulroni.com/tool/lateral/evil-winrm)
