# history

> The shell built-in that lists, searches and re-runs previous commands, and manages the history file.

- Category: Linux
- Commands: 16
- Page: https://terminal.rokibulroni.com/tool/linux/history
- Documentation: https://www.gnu.org/software/bash/manual/bash.html#Bash-History-Builtins
- Tags: shell built-in, forensics

## Viewing

### history

```bash
history
```

Numbered list of commands from this shell session and the history file.

### history <n>

```bash
history <n>
```

Example:

```bash
history 20
```

The last n commands.

### history | grep <text>

```bash
history | grep <text>
```

Example:

```bash
history | grep ssh
```

Searches past commands.

### Ctrl-R

```bash
Ctrl-R
```

Reverse incremental search: type part of a command and press Ctrl-R again for older matches.

### HISTTIMEFORMAT="%F %T " history

```bash
HISTTIMEFORMAT="%F %T " history
```

Shows when each command was run (bash records times only if this was set when they ran).


## Re-running

### !!

```bash
!!
```

Repeats the last command — sudo !! reruns it as root.

### !<n>

```bash
!<n>
```

Example:

```bash
!42
```

Runs command number n.

### !<prefix>

```bash
!<prefix>
```

Example:

```bash
!ssh
```

Runs the most recent command starting with the text.

### !$

```bash
!$
```

The last argument of the previous command.

### ^<old>^<new>

```bash
^<old>^<new>
```

Example:

```bash
^tcp^udp
```

Reruns the previous command with a substitution.


## Managing

### history -c

```bash
history -c
```

Clears the in-memory history of this session.

### history -d <n>

```bash
history -d <n>
```

Example:

```bash
history -d 105
```

Deletes one entry.

### history -a

```bash
history -a
```

Writes this session’s commands to the history file now.

### <command>

```bash
<command>
```

Example:

```bash
export API_KEY=secret
```

With HISTCONTROL=ignorespace, a leading space keeps a command out of history.


## Forensics

### cat /home/*/.bash_history /root/.bash_history 2>/dev/null

```bash
cat /home/*/.bash_history /root/.bash_history 2>/dev/null
```

Reads history files for every user. Empty or missing files, or a link to /dev/null, can indicate tampering.

### ls -la ~/.*history

```bash
ls -la ~/.*history
```

Lists history files for different shells (bash, zsh, python, mysql, less).

## Related tools

- [grep](https://terminal.rokibulroni.com/tool/linux/grep)
- [tail](https://terminal.rokibulroni.com/tool/linux/tail)
