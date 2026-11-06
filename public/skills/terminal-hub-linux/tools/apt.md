# APT

> Debian and Ubuntu’s package manager: install, update, search and remove software and inspect package sources.

- Category: Linux
- Commands: 20
- Page: https://terminal.rokibulroni.com/tool/linux/apt
- Homepage: https://wiki.debian.org/Apt
- Documentation: https://manpages.debian.org/apt
- Tags: packages, Debian, Ubuntu

## Installing

### sudo apt update

```bash
sudo apt update
```

Refreshes the package lists from the configured repositories. Run this before installing or upgrading.

### sudo apt install <package>

```bash
sudo apt install <package>
```

Example:

```bash
sudo apt install nmap
```

Installs a package and its dependencies.

### sudo apt install --no-install-recommends <package>

```bash
sudo apt install --no-install-recommends <package>
```

Example:

```bash
sudo apt install --no-install-recommends ffuf
```

Skips recommended extras to keep the system lean.

### sudo apt install ./<file>.deb

```bash
sudo apt install ./<file>.deb
```

Example:

```bash
sudo apt install ./tool_1.0_amd64.deb
```

Installs a local .deb and resolves its dependencies.

### sudo apt reinstall <package>

```bash
sudo apt reinstall <package>
```

Example:

```bash
sudo apt reinstall openssh-server
```

Reinstalls a package, restoring modified files.


## Upgrading and removing

### sudo apt upgrade

```bash
sudo apt upgrade
```

Upgrades installed packages without removing any.

### sudo apt full-upgrade

```bash
sudo apt full-upgrade
```

Upgrades and allows removals when dependencies change.

### apt list --upgradable

```bash
apt list --upgradable
```

Shows pending upgrades.

### sudo apt remove <package>

```bash
sudo apt remove <package>
```

Example:

```bash
sudo apt remove telnet
```

Removes a package but keeps its configuration.

### sudo apt purge <package>

```bash
sudo apt purge <package>
```

Example:

```bash
sudo apt purge apache2
```

Removes a package and its configuration.

### sudo apt autoremove

```bash
sudo apt autoremove
```

Removes dependencies no longer needed.


## Querying

### apt search <term>

```bash
apt search <term>
```

Example:

```bash
apt search wordlist
```

Searches package names and descriptions.

### apt show <package>

```bash
apt show <package>
```

Example:

```bash
apt show hashcat
```

Version, size, dependencies and description.

### apt list --installed

```bash
apt list --installed
```

Every installed package.

### apt-cache policy <package>

```bash
apt-cache policy <package>
```

Example:

```bash
apt-cache policy openssl
```

Installed and candidate versions and which repository each comes from.

### dpkg -L <package>

```bash
dpkg -L <package>
```

Example:

```bash
dpkg -L openssh-server
```

Files installed by a package.

### dpkg -S <path>

```bash
dpkg -S <path>
```

Example:

```bash
dpkg -S /usr/bin/nc
```

Which package owns a file.

### dpkg --verify

```bash
dpkg --verify
```

Reports installed files whose checksums no longer match the package — a quick integrity check after a compromise.


## Holding

### sudo apt-mark hold <package>

```bash
sudo apt-mark hold <package>
```

Example:

```bash
sudo apt-mark hold linux-image-generic
```

Pins a package at its current version.

### apt-mark showmanual

```bash
apt-mark showmanual
```

Packages that were installed explicitly rather than as dependencies.

## Related tools

- [DNF](https://terminal.rokibulroni.com/tool/linux/dnf)
- [pacman](https://terminal.rokibulroni.com/tool/linux/pacman)
