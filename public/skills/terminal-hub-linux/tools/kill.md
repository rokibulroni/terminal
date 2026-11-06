# kill

> Sends signals to processes — terminate gracefully, force-kill, reload or pause.

- Category: Linux
- Commands: 13
- Page: https://terminal.rokibulroni.com/tool/linux/kill
- Documentation: https://man7.org/linux/man-pages/man1/kill.1.html
- Tags: processes, signals

## Install

- apt: `sudo apt install procps`

## Signals

### kill <pid>

```bash
kill <pid>
```

Example:

```bash
kill 1337
```

Sends SIGTERM (15) asking the process to exit cleanly.

### kill -9 <pid>

```bash
kill -9 <pid>
```

Example:

```bash
kill -9 1337
```

SIGKILL: ends the process immediately. It cannot clean up, so use it last.

### kill -HUP <pid>

```bash
kill -HUP <pid>
```

Example:

```bash
kill -HUP $(pidof nginx)
```

SIGHUP: many daemons reload their configuration on this signal.

### kill -STOP <pid>

```bash
kill -STOP <pid>
```

Example:

```bash
kill -STOP 1337
```

Freezes a process without killing it — useful to preserve a suspicious process for memory capture.

### kill -CONT <pid>

```bash
kill -CONT <pid>
```

Example:

```bash
kill -CONT 1337
```

Resumes a stopped process.

### kill -l

```bash
kill -l
```

Lists every signal name and number.

### kill -0 <pid>

```bash
kill -0 <pid>
```

Example:

```bash
kill -0 1337 && echo alive
```

Checks a process exists without sending anything.


## By name

### pkill <name>

```bash
pkill <name>
```

Example:

```bash
pkill -f "python3 server.py"
```

Signals processes by name; -f matches the full command line.

### pkill -u <user>

```bash
pkill -u <user>
```

Example:

```bash
sudo pkill -u mallory
```

Ends every process of a user — part of locking out a compromised account.

### killall <name>

```bash
killall <name>
```

Example:

```bash
killall firefox
```

Signals every process with that exact name.

### pgrep -l <name>

```bash
pgrep -l <name>
```

Example:

```bash
pgrep -l ssh
```

Previews which processes a pattern matches before you kill them.


## Jobs

### kill %<job>

```bash
kill %<job>
```

Example:

```bash
kill %1
```

Signals a background job from the current shell.

### fuser -k <port>/tcp

```bash
fuser -k <port>/tcp
```

Example:

```bash
sudo fuser -k 8080/tcp
```

Kills whatever is listening on a port.

## Related tools

- [ps](https://terminal.rokibulroni.com/tool/linux/ps)
- [top](https://terminal.rokibulroni.com/tool/linux/top)
- [systemctl](https://terminal.rokibulroni.com/tool/linux/systemctl)
