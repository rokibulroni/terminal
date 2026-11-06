# cd

> The shell built-in that changes the current directory, including shortcuts for home, previous and parent directories.

- Category: Linux
- Commands: 13
- Page: https://terminal.rokibulroni.com/tool/linux/cd
- Documentation: https://www.gnu.org/software/bash/manual/bash.html#index-cd
- Tags: navigation, shell built-in

## Navigation

### cd <path>

```bash
cd <path>
```

Example:

```bash
cd /var/log
```

Changes the current directory to an absolute or relative path.

### cd

```bash
cd
```

With no argument, returns to your home directory.

### cd ~

```bash
cd ~
```

Also goes home; ~ expands to $HOME.

### cd ~<user>

```bash
cd ~<user>
```

Example:

```bash
cd ~alice
```

Goes to another user's home directory, if you have permission.

### cd ..

```bash
cd ..
```

Moves up one level to the parent directory.

### cd ../..

```bash
cd ../..
```

Moves up two levels.

### cd -

```bash
cd -
```

Jumps back to the previous directory and prints its path — toggles between two locations.


## Links and the stack

### cd -P <path>

```bash
cd -P <path>
```

Example:

```bash
cd -P /var/www/current
```

Resolves symbolic links and enters the physical directory.

### pushd <path>

```bash
pushd <path>
```

Example:

```bash
pushd /etc/nginx
```

Changes directory and pushes the old one onto a stack.

### popd

```bash
popd
```

Returns to the directory on top of the stack.

### dirs -v

```bash
dirs -v
```

Shows the directory stack with index numbers.


## Tips

### cd "<path with spaces>"

```bash
cd "<path with spaces>"
```

Example:

```bash
cd "My Documents"
```

Quote paths that contain spaces, or escape each space with a backslash.

### CDPATH=.:~/projects

```bash
CDPATH=.:~/projects
```

Example:

```bash
CDPATH=.:~/projects; cd terminal
```

Sets extra base directories that cd searches, so you can jump to frequent folders by name.

## Related tools

- [pwd](https://terminal.rokibulroni.com/tool/linux/pwd)
- [ls](https://terminal.rokibulroni.com/tool/linux/ls)
