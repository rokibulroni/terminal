# pacman

> Arch Linux’s package manager: sync, install, upgrade, query and clean packages.

- Category: Linux
- Commands: 15
- Page: https://terminal.rokibulroni.com/tool/linux/pacman
- Homepage: https://archlinux.org/pacman/
- Documentation: https://archlinux.org/pacman/pacman.8.html
- Tags: packages, Arch Linux

## Installing

### sudo pacman -Syu

```bash
sudo pacman -Syu
```

Synchronises package databases and upgrades the whole system. Arch does not support partial upgrades.

### sudo pacman -S <package>

```bash
sudo pacman -S <package>
```

Example:

```bash
sudo pacman -S nmap
```

Installs a package.

### sudo pacman -S --needed <packages>

```bash
sudo pacman -S --needed <packages>
```

Example:

```bash
sudo pacman -S --needed git base-devel
```

Skips packages that are already up to date.

### sudo pacman -U <file>

```bash
sudo pacman -U <file>
```

Example:

```bash
sudo pacman -U ./tool-1.0-1-x86_64.pkg.tar.zst
```

Installs a local package file.


## Removing

### sudo pacman -R <package>

```bash
sudo pacman -R <package>
```

Example:

```bash
sudo pacman -R telnet
```

Removes a package.

### sudo pacman -Rns <package>

```bash
sudo pacman -Rns <package>
```

Example:

```bash
sudo pacman -Rns apache
```

Removes it with unneeded dependencies and saved configuration.

### sudo pacman -Rns $(pacman -Qtdq)

```bash
sudo pacman -Rns $(pacman -Qtdq)
```

Removes orphaned dependencies.

### sudo pacman -Sc

```bash
sudo pacman -Sc
```

Cleans old packages from the cache.


## Querying

### pacman -Ss <term>

```bash
pacman -Ss <term>
```

Example:

```bash
pacman -Ss wireshark
```

Searches the repositories.

### pacman -Si <package>

```bash
pacman -Si <package>
```

Example:

```bash
pacman -Si hashcat
```

Repository package details.

### pacman -Qi <package>

```bash
pacman -Qi <package>
```

Example:

```bash
pacman -Qi openssh
```

Installed package details.

### pacman -Ql <package>

```bash
pacman -Ql <package>
```

Example:

```bash
pacman -Ql openssh
```

Files installed by a package.

### pacman -Qo <path>

```bash
pacman -Qo <path>
```

Example:

```bash
pacman -Qo /usr/bin/ssh
```

Which package owns a file.

### pacman -Qe

```bash
pacman -Qe
```

Explicitly installed packages.

### pacman -Qkk <package>

```bash
pacman -Qkk <package>
```

Example:

```bash
pacman -Qkk openssh
```

Checks installed files against package metadata.

## Related tools

- [APT](https://terminal.rokibulroni.com/tool/linux/apt)
- [DNF](https://terminal.rokibulroni.com/tool/linux/dnf)
