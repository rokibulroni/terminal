# ps

> Reports a snapshot of running processes, with owners, resource usage and full command lines.

- Category: Linux
- Commands: 16
- Page: https://terminal.rokibulroni.com/tool/linux/ps
- Homepage: https://gitlab.com/procps-ng/procps
- Documentation: https://man7.org/linux/man-pages/man1/ps.1.html
- Tags: processes, triage

## Install

- apt: `sudo apt install procps`

## Listing

### ps aux

```bash
ps aux
```

Every process on the system (BSD style): user, PID, CPU and memory share, start time and full command.

### ps -ef

```bash
ps -ef
```

Every process (System V style) with parent PIDs — good for seeing what started what.

### ps -ef --forest

```bash
ps -ef --forest
```

Draws the process tree, making a suspicious child under a web server easy to spot.

### ps -u <user>

```bash
ps -u <user>
```

Example:

```bash
ps -u www-data
```

Processes owned by one user.

### ps -p <pid> -o pid,ppid,user,etime,cmd

```bash
ps -p <pid> -o pid,ppid,user,etime,cmd
```

Example:

```bash
ps -p 1337 -o pid,ppid,user,etime,cmd
```

Chosen columns for one process, including how long it has been running.

### ps -C <name>

```bash
ps -C <name>
```

Example:

```bash
ps -C sshd
```

Processes by command name.


## Sorting and formatting

### ps aux --sort=-%cpu | head

```bash
ps aux --sort=-%cpu | head
```

The top CPU consumers.

### ps aux --sort=-%mem | head

```bash
ps aux --sort=-%mem | head
```

The top memory consumers.

### ps -eo pid,user,lstart,cmd

```bash
ps -eo pid,user,lstart,cmd
```

Exact start time of each process — useful for incident timelines.

### ps -eo pid,ppid,cmd --no-headers

```bash
ps -eo pid,ppid,cmd --no-headers
```

Scriptable output without the header line.

### ps -eLf

```bash
ps -eLf
```

Shows individual threads.


## Investigation

### ps aux | grep -v "\]$"

```bash
ps aux | grep -v "\]$"
```

Hides kernel threads (shown in brackets) to focus on user-space processes.

### ls -l /proc/<pid>/exe

```bash
ls -l /proc/<pid>/exe
```

Example:

```bash
ls -l /proc/1337/exe
```

Shows the binary a process is really running; “(deleted)” means it was removed from disk after starting — a common malware trick.

### cat /proc/<pid>/cmdline | tr "\0" " "

```bash
cat /proc/<pid>/cmdline | tr "\0" " "
```

Example:

```bash
cat /proc/1337/cmdline | tr "\0" " "
```

Reads the exact command line, arguments included.

### ls -l /proc/<pid>/cwd

```bash
ls -l /proc/<pid>/cwd
```

Example:

```bash
ls -l /proc/1337/cwd
```

Shows the working directory of a process.

### pgrep -a <name>

```bash
pgrep -a <name>
```

Example:

```bash
pgrep -a python
```

Finds PIDs by name and shows their command lines.

## Related tools

- [top](https://terminal.rokibulroni.com/tool/linux/top)
- [kill](https://terminal.rokibulroni.com/tool/linux/kill)
- [ss](https://terminal.rokibulroni.com/tool/network/ss)
