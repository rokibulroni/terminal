# Linux privilege-escalation checklist

> A methodical local enumeration pass to find the path from a low-privilege shell to root.

- Level: Intermediate
- Time: ~20 minutes
- Tags: privilege escalation, linux, post-exploitation
- Page: https://terminal.rokibulroni.com/guide/linux-privilege-escalation-checklist
- Updated: 2026-11-06

You have a shell as an unprivileged user on an in-scope Linux host and want to escalate to root. Privilege escalation is mostly enumeration: the path is usually already there, waiting to be noticed. Work through these checks in order.

## Prerequisites

- A shell on an authorised Linux target
- Basic familiarity with the Linux file system

## 1. Know who you are

Establish your user, groups and sudo rights first. Membership of groups like sudo, docker, lxd or disk is often the whole game.

Tool: [whoami](https://terminal.rokibulroni.com/api/v1/tools/linux/whoami.md)

```bash
id
```

Your UID, GID and supplementary groups.

```bash
sudo -l
```

What you may run with sudo — look for NOPASSWD and editable scripts.

## 2. Understand the system

Record the distribution and kernel version. An out-of-date kernel may have a public local exploit, and the distro decides which paths apply.

Tool: [cat](https://terminal.rokibulroni.com/api/v1/tools/linux/cat.md)

```bash
cat /etc/os-release
```

Distribution and version.

```bash
uname -a
```

Kernel version and architecture.

## 3. Hunt SUID and capabilities

Files that run as another user are a top escalation route. Compare what you find against GTFOBins.

Tool: [find](https://terminal.rokibulroni.com/api/v1/tools/linux/find.md)

```bash
find / -perm -4000 -type f 2>/dev/null
```

SUID binaries.

```bash
getcap -r / 2>/dev/null
```

Binaries with Linux capabilities such as cap_setuid.

## 4. Look at scheduled jobs

Cron jobs and systemd timers that run as root and call writable scripts or use wildcards are a classic win.

Tool: [systemctl](https://terminal.rokibulroni.com/api/v1/tools/linux/systemctl.md)

```bash
cat /etc/crontab; ls -la /etc/cron.*
```

System cron jobs and directories.

```bash
systemctl list-timers --all
```

systemd timers, the modern equivalent.

## 5. Check writable and interesting files

World-writable files owned by root, readable backups, and credentials in config or history files all lead somewhere.

Tool: [grep](https://terminal.rokibulroni.com/api/v1/tools/linux/grep.md)

```bash
find / -writable -type f ! -path "/proc/*" 2>/dev/null
```

Files your user can write.

```bash
grep -rniE "password|api[_-]?key|secret" /var/www /home 2>/dev/null
```

Hard-coded secrets to reuse.

## 6. Review network and processes

Services bound to localhost may be exploitable only from the box, and processes running as root reveal more attack surface.

Tool: [ps](https://terminal.rokibulroni.com/api/v1/tools/linux/ps.md)

```bash
ps aux | grep -v "\]$"
```

Processes, kernel threads hidden.

```bash
ss -tlnp
```

Listening ports, including localhost-only services.

## Wrap-up

If manual checks come up short, an automated enumerator such as linpeas can surface what you missed — but understanding each finding by hand is what makes you reliable. Only escalate on systems you are authorised to test.
