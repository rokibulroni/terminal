# su

> Switches to another user (root by default) in a new shell, optionally as a login shell or for a single command.

- Category: Linux
- Commands: 12
- Page: https://terminal.rokibulroni.com/tool/linux/su
- Homepage: https://github.com/util-linux/util-linux
- Documentation: https://man7.org/linux/man-pages/man1/su.1.html
- Tags: users, privilege

## Install

- apt: `sudo apt install util-linux`

## Switching users

### su

```bash
su
```

Becomes root in the current environment after entering root’s password.

### su -

```bash
su -
```

A full root login shell: resets the environment and changes to /root. Usually what you want.

### su - <user>

```bash
su - <user>
```

Example:

```bash
su - postgres
```

A login shell as another user.

### su -c "<command>" <user>

```bash
su -c "<command>" <user>
```

Example:

```bash
su -c "whoami" alice
```

Runs one command as another user.

### su -s <shell> <user>

```bash
su -s <shell> <user>
```

Example:

```bash
sudo su -s /bin/bash www-data
```

Uses a specific shell, needed for service accounts whose shell is /usr/sbin/nologin.

### su -p <user>

```bash
su -p <user>
```

Keeps the current environment variables.

### exit

```bash
exit
```

Leaves the su shell and returns to your own user.


## Compared with sudo

### sudo -i

```bash
sudo -i
```

A root login shell using your own password and sudo rights.

### sudo -u <user> <command>

```bash
sudo -u <user> <command>
```

Example:

```bash
sudo -u www-data id
```

Runs one command as another user via sudo.

### sudo -s

```bash
sudo -s
```

A root shell that keeps your environment.


## Auditing

### grep -E "su(\[|:)" /var/log/auth.log

```bash
grep -E "su(\[|:)" /var/log/auth.log
```

Successful and failed su attempts on Debian and Ubuntu (/var/log/secure on RHEL).

### cat /etc/pam.d/su

```bash
cat /etc/pam.d/su
```

PAM rules for su — for example, whether only the wheel group may use it.

## Related tools

- [whoami](https://terminal.rokibulroni.com/tool/linux/whoami)
- [chown](https://terminal.rokibulroni.com/tool/linux/chown)
