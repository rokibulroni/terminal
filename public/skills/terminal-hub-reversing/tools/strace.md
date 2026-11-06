# strace

> Traces the system calls and signals of a process — see which files it opens, what it sends and why it fails.

- Category: Reverse Engineering
- Commands: 18
- Page: https://terminal.rokibulroni.com/tool/reversing/strace
- Homepage: https://strace.io
- Documentation: https://man7.org/linux/man-pages/man1/strace.1.html
- Tags: tracing, system calls, debugging

## Install

- apt: `sudo apt install strace`
- dnf: `sudo dnf install strace`

## Tracing

### strace <command>

```bash
strace <command>
```

Example:

```bash
strace ./app
```

Runs a program and prints every system call with arguments and return values to stderr.

### strace -p <pid>

```bash
strace -p <pid>
```

Example:

```bash
sudo strace -p 1337
```

Attaches to a running process.

### strace -f <command>

```bash
strace -f <command>
```

Example:

```bash
strace -f ./server
```

Follows child processes and threads.

### strace -o <file> <command>

```bash
strace -o <file> <command>
```

Example:

```bash
strace -o trace.txt ./app
```

Writes the trace to a file.

### strace -ff -o <prefix> <command>

```bash
strace -ff -o <prefix> <command>
```

Example:

```bash
strace -ff -o trace ./server
```

One output file per process (trace.<pid>).


## Filtering

### strace -e trace=<calls> <command>

```bash
strace -e trace=<calls> <command>
```

Example:

```bash
strace -e trace=openat,read ./app
```

Only the listed system calls.

### strace -e trace=%file <command>

```bash
strace -e trace=%file <command>
```

Example:

```bash
strace -e trace=%file ./app
```

Every call that takes a file name — shows config files and libraries it looks for.

### strace -e trace=%network <command>

```bash
strace -e trace=%network <command>
```

Example:

```bash
strace -e trace=%network curl -s example.com
```

Network calls: socket, connect, sendto and friends.

### strace -e trace=%process <command>

```bash
strace -e trace=%process <command>
```

Example:

```bash
strace -f -e trace=%process ./installer
```

Process lifecycle: fork, clone, execve, exit.

### strace -e trace=execve -f <command>

```bash
strace -e trace=execve -f <command>
```

Example:

```bash
strace -e trace=execve -f ./setup.sh
```

Every program a script launches.

### strace -e status=failed <command>

```bash
strace -e status=failed <command>
```

Example:

```bash
strace -e status=failed ./app
```

Only calls that failed (strace 5.2+) — quickly shows missing files and permission errors.


## Detail and timing

### strace -s <n> <command>

```bash
strace -s <n> <command>
```

Example:

```bash
strace -s 256 -e trace=write ./app
```

Shows up to n characters of string arguments (default 32).

### strace -tt -T <command>

```bash
strace -tt -T <command>
```

Example:

```bash
strace -tt -T ./app
```

Microsecond timestamps and time spent in each call.

### strace -c <command>

```bash
strace -c <command>
```

Example:

```bash
strace -c ./app
```

A summary table of call counts, errors and time instead of a full trace.

### strace -y <command>

```bash
strace -y <command>
```

Example:

```bash
strace -y ./app
```

Prints the path behind each file descriptor.

### strace -k <command>

```bash
strace -k <command>
```

Example:

```bash
strace -k -e trace=openat ./app
```

Prints a stack trace for each call.


## Library calls

### ltrace <command>

```bash
ltrace <command>
```

Example:

```bash
ltrace ./crackme
```

Traces calls into shared libraries — strcmp calls often reveal hard-coded passwords.

### ltrace -e <function> <command>

```bash
ltrace -e <function> <command>
```

Example:

```bash
ltrace -e strcmp ./crackme
```

Traces only the named library function.

## Related tools

- [GDB](https://terminal.rokibulroni.com/tool/reversing/gdb)
- [ps](https://terminal.rokibulroni.com/tool/linux/ps)
