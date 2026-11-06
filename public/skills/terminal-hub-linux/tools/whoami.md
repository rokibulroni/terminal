# whoami

> Prints the effective user name — the first question after landing a shell.

- Category: Linux
- Commands: 13
- Page: https://terminal.rokibulroni.com/tool/linux/whoami
- Homepage: https://www.gnu.org/software/coreutils/
- Documentation: https://man7.org/linux/man-pages/man1/whoami.1.html
- Tags: users, privilege

## Install

- apt: `sudo apt install coreutils`
- brew: `brew install coreutils`

## Identity

### whoami

```bash
whoami
```

Prints the effective user name.

### id

```bash
id
```

User ID, primary group and every supplementary group. Groups like sudo, wheel, docker, lxd or disk often mean a path to root.

### id <user>

```bash
id <user>
```

Example:

```bash
id alice
```

Another user’s IDs and groups.

### groups

```bash
groups
```

Just the group names.

### logname

```bash
logname
```

The user who originally logged in, even after su or sudo.

### echo $USER $HOME $SHELL

```bash
echo $USER $HOME $SHELL
```

Common identity environment variables.


## Privileges

### sudo -l

```bash
sudo -l
```

Lists what you may run with sudo. Entries marked NOPASSWD and editable scripts are classic escalation paths.

### sudo -n true && echo yes

```bash
sudo -n true && echo yes
```

Checks whether sudo works without a password.

### getcap -r / 2>/dev/null

```bash
getcap -r / 2>/dev/null
```

Binaries with Linux capabilities such as cap_setuid that can lead to root.


## Who else is here

### who

```bash
who
```

Users logged in now, their terminals and where they came from.

### w

```bash
w
```

Logged-in users plus what each is running and how long they have been idle.

### last -n 20

```bash
last -n 20
```

Recent logins and reboots from /var/log/wtmp.

### lastlog

```bash
lastlog
```

The last login of every account.

## Related tools

- [su](https://terminal.rokibulroni.com/tool/linux/su)
- [ps](https://terminal.rokibulroni.com/tool/linux/ps)
