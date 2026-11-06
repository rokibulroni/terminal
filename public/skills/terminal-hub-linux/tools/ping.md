# ping

> Sends ICMP echo requests to test reachability and measure round-trip time.

- Category: Linux
- Commands: 11
- Page: https://terminal.rokibulroni.com/tool/linux/ping
- Documentation: https://man7.org/linux/man-pages/man8/ping.8.html
- Tags: networking, ICMP, connectivity

## Install

- apt: `sudo apt install iputils-ping`

## Basics

### ping <host>

```bash
ping <host>
```

Example:

```bash
ping example.com
```

Sends echo requests until Ctrl-C and reports latency and loss.

### ping -c <n> <host>

```bash
ping -c <n> <host>
```

Example:

```bash
ping -c 4 192.168.1.1
```

Stops after n packets — what you want in scripts.

### ping -i <seconds> <host>

```bash
ping -i <seconds> <host>
```

Example:

```bash
ping -i 0.2 10.0.0.5
```

Changes the interval; below 0.2 s needs root.

### ping -W <seconds> -c 1 <host>

```bash
ping -W <seconds> -c 1 <host>
```

Example:

```bash
ping -W 1 -c 1 10.0.0.5
```

Waits at most n seconds for a reply.

### ping -q -c <n> <host>

```bash
ping -q -c <n> <host>
```

Example:

```bash
ping -q -c 20 1.1.1.1
```

Prints only the summary.

### ping -6 <host>

```bash
ping -6 <host>
```

Example:

```bash
ping -6 google.com
```

Forces IPv6.


## Diagnostics

### ping -s <bytes> <host>

```bash
ping -s <bytes> <host>
```

Example:

```bash
ping -s 1472 -M do 10.0.0.1
```

Sets payload size. With -M do (do not fragment) this finds the path MTU: 1472 + 28 bytes of headers = 1500.

### ping -D <host>

```bash
ping -D <host>
```

Prints a timestamp before each line.

### ping -c 1 <host>

```bash
ping -c 1 <host>
```

Example:

```bash
ping -c 1 10.10.10.5
```

Reads the TTL in the reply to guess the OS: about 64 for Linux and macOS, 128 for Windows, 255 for network gear.

### ping -b <broadcast>

```bash
ping -b <broadcast>
```

Example:

```bash
ping -b 192.168.1.255
```

Pings a broadcast address; most modern hosts ignore it.

### for i in $(seq 1 254); do ping -c1 -W1 <prefix>.$i | grep "bytes from" & done; wait

```bash
for i in $(seq 1 254); do ping -c1 -W1 <prefix>.$i | grep "bytes from" & done; wait
```

Example:

```bash
for i in $(seq 1 254); do ping -c1 -W1 192.168.1.$i | grep "bytes from" & done; wait
```

A quick ping sweep with nothing but bash — useful on a foothold without nmap.

## Related tools

- [fping](https://terminal.rokibulroni.com/tool/network/fping)
- [ip](https://terminal.rokibulroni.com/tool/linux/ip)
- [hping3](https://terminal.rokibulroni.com/tool/network/hping3)
