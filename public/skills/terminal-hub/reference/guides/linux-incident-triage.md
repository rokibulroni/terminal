# Incident triage on Linux

> First-response enumeration on a possibly compromised Linux host, without destroying evidence.

- Level: Intermediate
- Time: ~25 minutes
- Tags: dfir, incident response, linux, forensics
- Page: https://terminal.rokibulroni.com/guide/linux-incident-triage
- Updated: 2026-11-06

A Linux server is behaving oddly and you suspect a compromise. This guide is a calm first-response pass: gather volatile information, look for persistence and signs of intrusion, and preserve evidence as you go. Where possible, capture memory before you start poking, and work from copies.

## Prerequisites

- Shell access to the affected host (ideally root)
- Somewhere safe to store collected evidence
- Change-control approval for live response

## 1. Capture the volatile picture

Record what is running, who is logged in and what is connected right now. This information is gone after a reboot.

Tool: [ps](https://terminal.rokibulroni.com/api/v1/tools/linux/ps.md)

```bash
ps auxf > /evidence/ps.txt
```

Full process tree.

```bash
ss -tulpna > /evidence/connections.txt
```

All sockets with owning processes.

```bash
w; who; last -n 50
```

Current and recent logins.

## 2. Look for suspicious processes

Hunt for processes whose binary was deleted after launch, or that run from odd locations — classic malware behaviour.

Tool: [ps](https://terminal.rokibulroni.com/api/v1/tools/linux/ps.md)

```bash
ls -l /proc/*/exe 2>/dev/null | grep deleted
```

Running binaries removed from disk.

```bash
ls -la /proc/<pid>/cwd
```

Working directory of a suspicious PID.

## 3. Check persistence locations

Attackers come back. Review cron, systemd units and timers, and startup files for anything unexpected.

Tool: [systemctl](https://terminal.rokibulroni.com/api/v1/tools/linux/systemctl.md)

```bash
systemctl list-unit-files --state=enabled
```

Services set to start at boot.

```bash
systemctl list-timers --all
```

Timers, a favourite persistence spot.

```bash
cat /etc/crontab; ls -la /etc/cron.* /var/spool/cron/*
```

Cron jobs for every user.

## 4. Review authentication and logs

Failed and successful logins, sudo use and service restarts build a timeline of what happened and when.

Tool: [journalctl](https://terminal.rokibulroni.com/api/v1/tools/linux/journalctl.md)

```bash
journalctl --since "yesterday" -p warning
```

Warnings and errors in a time window.

```bash
grep -Ei "Accepted|Failed password|sudo" /var/log/auth.log
```

SSH and sudo activity.

## 5. Inspect accounts and keys

New accounts, UID-0 accounts other than root, and unexpected SSH keys are common backdoors.

Tool: [awk](https://terminal.rokibulroni.com/api/v1/tools/linux/awk.md)

```bash
awk -F: '$3==0' /etc/passwd
```

Every UID-0 account — only root should appear.

```bash
find / -name authorized_keys 2>/dev/null -exec ls -la {} \;
```

SSH keys across the system.

## 6. Preserve what you found

Hash and copy the artefacts you collected so they hold up later. Note timestamps and keep originals untouched.

Tool: [strings](https://terminal.rokibulroni.com/api/v1/tools/forensics/strings.md)

```bash
sha256sum /evidence/* > /evidence/hashes.txt
```

Hash the collected evidence.

```bash
tar -czf evidence-$(hostname)-$(date +%F).tar.gz /evidence
```

Bundle it for handoff.

## Wrap-up

This is triage, not a full forensic investigation. If you confirm a compromise, preserve a memory image and disk copy for deeper analysis with Volatility and Sleuth Kit, and follow your organisation’s incident process for containment and reporting.
