# free

> Shows total, used and available memory and swap.

- Category: Linux
- Commands: 10
- Page: https://terminal.rokibulroni.com/tool/linux/free
- Homepage: https://gitlab.com/procps-ng/procps
- Documentation: https://man7.org/linux/man-pages/man1/free.1.html
- Tags: memory, performance

## Install

- apt: `sudo apt install procps`

## Basics

### free -h

```bash
free -h
```

Memory and swap usage in human-readable units. “available” is the realistic figure for new programs.

### free -m

```bash
free -m
```

Values in mebibytes.

### free -g

```bash
free -g
```

Values in gibibytes.

### free -h -t

```bash
free -h -t
```

Adds a total row for RAM plus swap.

### free -h -s <seconds>

```bash
free -h -s <seconds>
```

Example:

```bash
free -h -s 2
```

Refreshes every n seconds.

### free -h -w

```bash
free -h -w
```

Wide mode: separates buffers from cache.


## Deeper

### cat /proc/meminfo

```bash
cat /proc/meminfo
```

The raw kernel memory counters that free reads.

### vmstat -s -S M

```bash
vmstat -s -S M
```

Memory statistics plus paging and swap activity.

### swapon --show

```bash
swapon --show
```

Lists swap devices and how much of each is used.

### ps aux --sort=-%mem | head

```bash
ps aux --sort=-%mem | head
```

The processes using the most memory.

## Related tools

- [top](https://terminal.rokibulroni.com/tool/linux/top)
- [ps](https://terminal.rokibulroni.com/tool/linux/ps)
- [df](https://terminal.rokibulroni.com/tool/linux/df)
