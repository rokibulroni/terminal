# DNF

> The package manager for Fedora, RHEL and derivatives: install, update, query and roll back packages.

- Category: Linux
- Commands: 19
- Page: https://terminal.rokibulroni.com/tool/linux/dnf
- Homepage: https://github.com/rpm-software-management/dnf
- Documentation: https://dnf.readthedocs.io
- Tags: packages, Fedora, RHEL

## Installing

### sudo dnf install <package>

```bash
sudo dnf install <package>
```

Example:

```bash
sudo dnf install nmap
```

Installs a package with its dependencies.

### sudo dnf install <file>.rpm

```bash
sudo dnf install <file>.rpm
```

Example:

```bash
sudo dnf install ./tool-1.0.x86_64.rpm
```

Installs a local RPM and resolves dependencies.

### sudo dnf reinstall <package>

```bash
sudo dnf reinstall <package>
```

Example:

```bash
sudo dnf reinstall openssh-server
```

Reinstalls a package.

### sudo dnf install epel-release

```bash
sudo dnf install epel-release
```

Enables EPEL, which carries many security tools on RHEL-based systems.


## Updating and removing

### sudo dnf check-update

```bash
sudo dnf check-update
```

Lists available updates.

### sudo dnf upgrade

```bash
sudo dnf upgrade
```

Upgrades every package.

### sudo dnf upgrade --security

```bash
sudo dnf upgrade --security
```

Applies only security updates.

### dnf updateinfo list security

```bash
dnf updateinfo list security
```

Lists outstanding security advisories.

### sudo dnf remove <package>

```bash
sudo dnf remove <package>
```

Example:

```bash
sudo dnf remove telnet
```

Removes a package.

### sudo dnf autoremove

```bash
sudo dnf autoremove
```

Removes unneeded dependencies.


## Querying

### dnf search <term>

```bash
dnf search <term>
```

Example:

```bash
dnf search wireshark
```

Searches packages.

### dnf info <package>

```bash
dnf info <package>
```

Example:

```bash
dnf info openssl
```

Package details.

### dnf provides <path>

```bash
dnf provides <path>
```

Example:

```bash
dnf provides /usr/bin/dig
```

Which package supplies a file or command.

### dnf list installed

```bash
dnf list installed
```

Installed packages.

### dnf repolist

```bash
dnf repolist
```

Enabled repositories.

### rpm -qf <path>

```bash
rpm -qf <path>
```

Example:

```bash
rpm -qf /usr/bin/ssh
```

Which installed package owns a file.

### rpm -Va

```bash
rpm -Va
```

Verifies every installed file against the RPM database and flags changes to size, checksum or permissions.


## History

### dnf history

```bash
dnf history
```

Every install, upgrade and removal transaction.

### sudo dnf history undo <id>

```bash
sudo dnf history undo <id>
```

Example:

```bash
sudo dnf history undo 42
```

Rolls back a transaction.

## Related tools

- [APT](https://terminal.rokibulroni.com/tool/linux/apt)
- [pacman](https://terminal.rokibulroni.com/tool/linux/pacman)
