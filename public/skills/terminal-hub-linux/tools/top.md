# top

> A live, sortable view of processes and system load, CPU and memory.

- Category: Linux
- Commands: 15
- Page: https://terminal.rokibulroni.com/tool/linux/top
- Homepage: https://gitlab.com/procps-ng/procps
- Documentation: https://man7.org/linux/man-pages/man1/top.1.html
- Tags: processes, performance

## Install

- apt: `sudo apt install procps`

## Running

### top

```bash
top
```

A live view of load, CPU, memory and the busiest processes. Press q to quit.

### top -u <user>

```bash
top -u <user>
```

Example:

```bash
top -u postgres
```

Only one user’s processes.

### top -p <pid>,<pid>

```bash
top -p <pid>,<pid>
```

Example:

```bash
top -p 1337,2048
```

Watches specific processes.

### top -d <seconds>

```bash
top -d <seconds>
```

Example:

```bash
top -d 1
```

Changes the refresh interval.

### top -o %MEM

```bash
top -o %MEM
```

Sorts by memory instead of CPU.

### top -b -n 1 | head -n 20

```bash
top -b -n 1 | head -n 20
```

Batch mode: one snapshot printed as plain text, suitable for logs and scripts.

### top -H -p <pid>

```bash
top -H -p <pid>
```

Example:

```bash
top -H -p 1337
```

Shows the threads of one process.


## Keys inside top

### P / M / T

```bash
P / M / T
```

Sort by CPU, memory or running time.

### c

```bash
c
```

Toggle full command lines.

### 1

```bash
1
```

Show each CPU core separately.

### k

```bash
k
```

Send a signal to a process by PID.

### V

```bash
V
```

Tree view of parents and children.

### W

```bash
W
```

Save the current layout to ~/.config/procps/toprc.


## Alternatives

### htop

```bash
htop
```

A friendlier interactive viewer with mouse support, tree view and per-core bars.

### btop

```bash
btop
```

A modern resource monitor that also shows disk and network graphs.

## Related tools

- [ps](https://terminal.rokibulroni.com/tool/linux/ps)
- [free](https://terminal.rokibulroni.com/tool/linux/free)
- [kill](https://terminal.rokibulroni.com/tool/linux/kill)
