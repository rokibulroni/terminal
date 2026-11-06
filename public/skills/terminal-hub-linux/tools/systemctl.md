# systemctl

> Controls systemd: start, stop, enable and inspect services, timers and the boot target.

- Category: Linux
- Commands: 19
- Page: https://terminal.rokibulroni.com/tool/linux/systemctl
- Homepage: https://systemd.io
- Documentation: https://www.freedesktop.org/software/systemd/man/latest/systemctl.html
- Tags: services, systemd, persistence

## Services

### systemctl status <unit>

```bash
systemctl status <unit>
```

Example:

```bash
systemctl status ssh
```

State, main PID, memory use and the latest log lines for a service.

### sudo systemctl start <unit>

```bash
sudo systemctl start <unit>
```

Example:

```bash
sudo systemctl start nginx
```

Starts a service now.

### sudo systemctl stop <unit>

```bash
sudo systemctl stop <unit>
```

Example:

```bash
sudo systemctl stop nginx
```

Stops a service.

### sudo systemctl restart <unit>

```bash
sudo systemctl restart <unit>
```

Example:

```bash
sudo systemctl restart ssh
```

Stops and starts it again.

### sudo systemctl reload <unit>

```bash
sudo systemctl reload <unit>
```

Example:

```bash
sudo systemctl reload nginx
```

Reloads configuration without dropping connections, if the service supports it.

### sudo systemctl enable --now <unit>

```bash
sudo systemctl enable --now <unit>
```

Example:

```bash
sudo systemctl enable --now fail2ban
```

Starts the service and makes it start at boot.

### sudo systemctl disable --now <unit>

```bash
sudo systemctl disable --now <unit>
```

Example:

```bash
sudo systemctl disable --now telnet.socket
```

Stops it and removes it from boot.

### sudo systemctl mask <unit>

```bash
sudo systemctl mask <unit>
```

Example:

```bash
sudo systemctl mask rpcbind
```

Prevents a unit from being started at all, even as a dependency.


## Inspecting

### systemctl list-units --type=service --state=running

```bash
systemctl list-units --type=service --state=running
```

Every running service.

### systemctl list-unit-files --state=enabled

```bash
systemctl list-unit-files --state=enabled
```

Everything set to start at boot — a key persistence check.

### systemctl --failed

```bash
systemctl --failed
```

Units that failed to start.

### systemctl list-timers --all

```bash
systemctl list-timers --all
```

systemd timers, the modern replacement for cron and another persistence location.

### systemctl cat <unit>

```bash
systemctl cat <unit>
```

Example:

```bash
systemctl cat ssh
```

Prints the unit file plus any drop-in overrides.

### systemctl show <unit> -p ExecStart,User,FragmentPath

```bash
systemctl show <unit> -p ExecStart,User,FragmentPath
```

Example:

```bash
systemctl show nginx -p ExecStart,User,FragmentPath
```

Specific properties: the command it runs, the user and where the unit file lives.

### systemctl list-dependencies <unit>

```bash
systemctl list-dependencies <unit>
```

Example:

```bash
systemctl list-dependencies multi-user.target
```

What a unit pulls in.


## Editing and system

### sudo systemctl edit <unit>

```bash
sudo systemctl edit <unit>
```

Example:

```bash
sudo systemctl edit nginx
```

Creates a drop-in override instead of editing the vendor unit file.

### sudo systemctl daemon-reload

```bash
sudo systemctl daemon-reload
```

Reloads unit files after you change them.

### systemctl --user list-units

```bash
systemctl --user list-units
```

Per-user services, which run without root and are easy to overlook.

### systemctl get-default

```bash
systemctl get-default
```

The target the system boots into (graphical or multi-user).

## Related tools

- [journalctl](https://terminal.rokibulroni.com/tool/linux/journalctl)
- [ps](https://terminal.rokibulroni.com/tool/linux/ps)
