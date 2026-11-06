# GNU Screen

> The original terminal multiplexer: detachable sessions, multiple windows and serial-console access.

- Category: Utilities
- Commands: 100
- Page: https://terminal.rokibulroni.com/tool/utilities/screen
- Homepage: https://www.gnu.org/software/screen/
- Documentation: https://www.gnu.org/software/screen/manual/screen.html
- Tags: terminal, sessions, serial

## Install

- apt: `sudo apt install screen`
- brew: `brew install screen`

## Basic Syntax

### screen

```bash
screen
```

Starts a new screen session with default settings.

### screen -version

```bash
screen -version
```

Displays the installed version of GNU Screen.

### screen -help

```bash
screen -help
```

Prints a summary of command-line options and flags.


## Session Management

### screen -ls

```bash
screen -ls
```

Lists all currently active screen sessions and their sockets.

### screen -S [name]

```bash
screen -S [name]
```

Example:

```bash
screen -S deployment_ops
```

Starts a new session with a specific descriptive name.

### screen -r [id]

```bash
screen -r [id]
```

Example:

```bash
screen -r 12345
```

Reattaches to a detached session using its process ID.

### screen -r [name]

```bash
screen -r [name]
```

Example:

```bash
screen -r deployment_ops
```

Reattaches to a detached session using its session name.

### screen -R

```bash
screen -R
```

Example:

```bash
screen -R my_session
```

Reattaches to an existing session or creates it if it does not exist.

### screen -d [name]

```bash
screen -d [name]
```

Example:

```bash
screen -d deployment_ops
```

Remotely detaches a session that is currently attached elsewhere.

### screen -d -r [name]

```bash
screen -d -r [name]
```

Example:

```bash
screen -d -r deployment_ops
```

Detaches a session from another terminal and reattaches it to the current one.

### screen -x [name]

```bash
screen -x [name]
```

Example:

```bash
screen -x joint_session
```

Attaches to a session without detaching it elsewhere for multi-display mode.

### screen -wipe

```bash
screen -wipe
```

Removes dead or crashed session sockets from the socket directory.


## Internal Navigation

### Ctrl+a ?

```bash
Ctrl+a ?
```

Example:

```bash
Press Ctrl+a then ?
```

Displays a list of current key bindings and commands.

### Ctrl+a d

```bash
Ctrl+a d
```

Example:

```bash
Press Ctrl+a then d
```

Detaches the current session and returns to the shell.


## Window Management

### Ctrl+a c

```bash
Ctrl+a c
```

Example:

```bash
Press Ctrl+a then c
```

Creates a new window within the current screen session.

### Ctrl+a n

```bash
Ctrl+a n
```

Example:

```bash
Press Ctrl+a then n
```

Switches to the next window in the list.

### Ctrl+a p

```bash
Ctrl+a p
```

Example:

```bash
Press Ctrl+a then p
```

Switches to the previous window in the list.

### Ctrl+a [0-9]

```bash
Ctrl+a [0-9]
```

Example:

```bash
Press Ctrl+a then 1
```

Switches directly to the window with the specified number.

### Ctrl+a "

```bash
Ctrl+a "
```

Example:

```bash
Press Ctrl+a then "
```

Displays an interactive list of all windows for selection.

### Ctrl+a w

```bash
Ctrl+a w
```

Example:

```bash
Press Ctrl+a then w
```

Displays a list of windows on the status line.

### Ctrl+a A

```bash
Ctrl+a A
```

Example:

```bash
Press Ctrl+a then A
```

Prompts to rename the current window title.

### Ctrl+a k

```bash
Ctrl+a k
```

Example:

```bash
Press Ctrl+a then k
```

Kills the current window and its running process.

### Ctrl+a \

```bash
Ctrl+a \
```

Example:

```bash
Press Ctrl+a then \
```

Kills all windows and terminates the screen session immediately.


## Region Management

### Ctrl+a S

```bash
Ctrl+a S
```

Example:

```bash
Press Ctrl+a then S
```

Splits the current region horizontally into two regions.

### Ctrl+a |

```bash
Ctrl+a |
```

Example:

```bash
Press Ctrl+a then |
```

Splits the current region vertically into two regions.

### Ctrl+a Tab

```bash
Ctrl+a Tab
```

Example:

```bash
Press Ctrl+a then Tab
```

Switches input focus to the next region.

### Ctrl+a Q

```bash
Ctrl+a Q
```

Example:

```bash
Press Ctrl+a then Q
```

Closes all regions except the currently focused one.

### Ctrl+a X

```bash
Ctrl+a X
```

Example:

```bash
Press Ctrl+a then X
```

Closes the currently focused region.


## Copy and Scroll

### Ctrl+a [

```bash
Ctrl+a [
```

Example:

```bash
Press Ctrl+a then [
```

Enters copy/scrollback mode to view history or select text.

### Ctrl+a ]

```bash
Ctrl+a ]
```

Example:

```bash
Press Ctrl+a then ]
```

Pastes the contents of the screen buffer into the current input.

### Ctrl+a >

```bash
Ctrl+a >
```

Example:

```bash
Press Ctrl+a then >
```

Writes the current paste buffer to a temporary file.


## Configuration

### screen -c [file]

```bash
screen -c [file]
```

Example:

```bash
screen -c .screenrc_custom
```

Starts a session using a specific configuration file.

### Ctrl+a :source

```bash
Ctrl+a :source
```

Example:

```bash
Press Ctrl+a :source .screenrc
```

Reloads the configuration file into the current session.


## Logging

### screen -L

```bash
screen -L
```

Example:

```bash
screen -L -S monitored_session
```

Starts a session with automatic output logging enabled.

### screen -Logfile [file]

```bash
screen -Logfile [file]
```

Example:

```bash
screen -L -Logfile session.log
```

Defines the specific filename for the session output log.

### Ctrl+a H

```bash
Ctrl+a H
```

Example:

```bash
Press Ctrl+a then H
```

Toggles logging on or off for the current window.

### Ctrl+a h

```bash
Ctrl+a h
```

Example:

```bash
Press Ctrl+a then h
```

Writes a hardcopy of the current view to a file.


## Security

### Ctrl+a x

```bash
Ctrl+a x
```

Example:

```bash
Press Ctrl+a then x
```

Locks the screen terminal requiring a password to unlock.


## Automation

### screen -d -m [cmd]

```bash
screen -d -m [cmd]
```

Example:

```bash
screen -d -m ./start_server.sh
```

Starts a session in detached mode running a specific command.

### screen -X [cmd]

```bash
screen -X [cmd]
```

Example:

```bash
screen -S session_name -X quit
```

Sends a command to a running screen session without attaching.

### screen -X stuff

```bash
screen -X stuff
```

Example:

```bash
screen -S sess -X stuff 'ls^M'
```

Injects keystrokes or strings into a running session window.

### screen -X screen

```bash
screen -X screen
```

Example:

```bash
screen -S sess -X screen top
```

Creates a new window running a command in a remote session.


## Advanced Config

### defscrollback [num]

```bash
defscrollback [num]
```

Example:

```bash
Add 'defscrollback 10000' to .screenrc
```

Sets the default scrollback buffer size for new windows.

### escape [key]

```bash
escape [key]
```

Example:

```bash
Add 'escape ^Bb' to .screenrc
```

Changes the command character from Ctrl-a to Ctrl-b.

### hardstatus alwayslastline

```bash
hardstatus alwayslastline
```

Example:

```bash
Add 'hardstatus alwayslastline' to .screenrc
```

Configures the status bar to always appear at the bottom.

### startup_message off

```bash
startup_message off
```

Example:

```bash
Add 'startup_message off' to .screenrc
```

Disables the copyright notice screen on startup.


## Multi-User

### multiuser on

```bash
multiuser on
```

Example:

```bash
Press Ctrl+a :multiuser on
```

Enables multi-user mode for the current session.

### acladd [user]

```bash
acladd [user]
```

Example:

```bash
Press Ctrl+a :acladd operator1
```

Grants a specific user permission to access the session.

### acldel [user]

```bash
acldel [user]
```

Example:

```bash
Press Ctrl+a :acldel operator1
```

Revokes a user's permission to access the session.

### aclchg [user] [perms]

```bash
aclchg [user] [perms]
```

Example:

```bash
Press Ctrl+a :aclchg operator1 -w
```

Modifies user permissions to read-only or write access.


## Internal Command

### Ctrl+a :number

```bash
Ctrl+a :number
```

Example:

```bash
Press Ctrl+a :number 5
```

Changes the current window's number to the specified value.

### Ctrl+a :title

```bash
Ctrl+a :title
```

Example:

```bash
Press Ctrl+a :title 'Database'
```

Renames the current window via the command prompt.

### Ctrl+a :fit

```bash
Ctrl+a :fit
```

Example:

```bash
Press Ctrl+a :fit
```

Resizes the window to the current region size.


## Operational Workflow

### screen -q

```bash
screen -q
```

Example:

```bash
screen -q -ls
```

Suppresses error messages for cleaner script output.

### Ctrl+a t

```bash
Ctrl+a t
```

Example:

```bash
Press Ctrl+a then t
```

Displays the system time and load average.

### Ctrl+a v

```bash
Ctrl+a v
```

Example:

```bash
Press Ctrl+a then v
```

Display the version and compilation date.

### Ctrl+a Z

```bash
Ctrl+a Z
```

Example:

```bash
Press Ctrl+a then Z
```

Resets the virtual terminal to its default state.

### Ctrl+a *

```bash
Ctrl+a *
```

Example:

```bash
Press Ctrl+a then *
```

Lists all currently connected displays.

### Ctrl+a _

```bash
Ctrl+a _
```

Example:

```bash
Press Ctrl+a then _
```

Monitors the window for silence (inactivity).

### Ctrl+a M

```bash
Ctrl+a M
```

Example:

```bash
Press Ctrl+a then M
```

Monitors the window for activity or output.


## SOC Workflow

### screen -D -m

```bash
screen -D -m
```

Example:

```bash
screen -D -m ./honeypot.sh
```

Starts a session detached and doesn't fork a new process.

### Ctrl+a :logfile

```bash
Ctrl+a :logfile
```

Example:

```bash
Press Ctrl+a :logfile /var/log/screen.log
```

Changes the log filename dynamically while running.

### Ctrl+a :log on

```bash
Ctrl+a :log on
```

Example:

```bash
Press Ctrl+a :log on
```

Forces logging on for evidence collection immediately.


## Blue Team Defense

### screen -x -X lockscreen

```bash
screen -x -X lockscreen
```

Example:

```bash
screen -x session_name -X lockscreen
```

Remotely locks a shared session to prevent unauthorized input.

### vbell off

```bash
vbell off
```

Example:

```bash
Add 'vbell off' to .screenrc
```

Disables the visual bell flash for stealthier operation.

### screen -S [name] -p [win] -X kill

```bash
screen -S [name] -p [win] -X kill
```

Example:

```bash
screen -S incident -p 2 -X kill
```

Remotely kills a specific window in a session without attaching.


## Scripting

### screen -p [n] -X stuff

```bash
screen -p [n] -X stuff
```

Example:

```bash
screen -S main -p 0 -X stuff $'ls\n'
```

Sends a shell command to window 0 of a detached session.

### screen -Q windows

```bash
screen -Q windows
```

Example:

```bash
screen -S main -Q windows
```

Queries a detached session for a list of active windows.

### screen -X eval

```bash
screen -X eval
```

Example:

```bash
screen -X eval 'split' 'focus' 'screen'
```

Executes multiple screen commands sequentially in one call.

### screen -X readreg

```bash
screen -X readreg
```

Example:

```bash
screen -X readreg p /tmp/buffer
```

Reads the contents of a file into a screen paste register.

### screen -X paste

```bash
screen -X paste
```

Example:

```bash
screen -X paste p
```

Pastes contents from a specific register into the window.


## Incident Response

### screen -S [name] -X hardcopy -h [file]

```bash
screen -S [name] -X hardcopy -h [file]
```

Example:

```bash
screen -S breach -X hardcopy -h /tmp/dump
```

Saves the full scrollback buffer to a file for forensics.

### Ctrl+a :sessionname

```bash
Ctrl+a :sessionname
```

Example:

```bash
Press Ctrl+a :sessionname investigation_01
```

Renames the current session to reflect incident status.

### Ctrl+a :wrap

```bash
Ctrl+a :wrap
```

Example:

```bash
Press Ctrl+a :wrap on
```

Toggles line wrapping to preserve long log lines.


## Environment

### setenv [var] [val]

```bash
setenv [var] [val]
```

Example:

```bash
Add 'setenv PROMPT_COMMAND history -a' to .screenrc
```

Sets an environment variable for all new windows.

### unsetenv [var]

```bash
unsetenv [var]
```

Example:

```bash
Add 'unsetenv SSH_AUTH_SOCK' to .screenrc
```

Removes an environment variable for security isolation.


## Advanced Workflow

### layout save [name]

```bash
layout save [name]
```

Example:

```bash
Press Ctrl+a :layout save monitoring
```

Saves the current split region layout configuration.

### layout load [name]

```bash
layout load [name]
```

Example:

```bash
Press Ctrl+a :layout load monitoring
```

Restores a previously saved split region layout.

### layout autosave on

```bash
layout autosave on
```

Example:

```bash
Press Ctrl+a :layout autosave on
```

Automatically saves the layout when changes occur.

### bind [key] [cmd]

```bash
bind [key] [cmd]
```

Example:

```bash
Add 'bind k kill' to .screenrc
```

Binds a specific key to a screen command.

### bindkey [seq] [cmd]

```bash
bindkey [seq] [cmd]
```

Example:

```bash
Add 'bindkey -k F1 prev' to .screenrc
```

Binds a keyboard function key to a screen command.

### screen -X colon

```bash
screen -X colon
```

Forces the session to enter the command prompt mode.


## Buffer Management

### Ctrl+a =

```bash
Ctrl+a =
```

Example:

```bash
Press Ctrl+a then =
```

Removes the current paste buffer.

### writebuf

```bash
writebuf
```

Example:

```bash
Press Ctrl+a :writebuf /tmp/screen-exchange
```

Writes the paste buffer to the exchange file.

### readbuf

```bash
readbuf
```

Example:

```bash
Press Ctrl+a :readbuf /tmp/screen-exchange
```

Reads the exchange file into the paste buffer.


## Flow Control

### Ctrl+a f

```bash
Ctrl+a f
```

Example:

```bash
Press Ctrl+a then f
```

Toggles flow control to fix frozen terminals.

### defflow

```bash
defflow
```

Example:

```bash
Add 'defflow off' to .screenrc
```

Sets default flow control behavior for new windows.


## Character Encoding

### defutf8 on

```bash
defutf8 on
```

Example:

```bash
Add 'defutf8 on' to .screenrc
```

Enables UTF-8 encoding by default for new windows.

### Ctrl+a :utf8 on

```bash
Ctrl+a :utf8 on
```

Example:

```bash
Press Ctrl+a :utf8 on
```

Toggles UTF-8 encoding for the current window.


## Session Hierarchy

### Ctrl+a a

```bash
Ctrl+a a
```

Example:

```bash
Press Ctrl+a then a
```

Sends a literal Ctrl+a to the application inside screen.

### screen -e^xx

```bash
screen -e^xx
```

Starts screen with Ctrl+x as the escape character for nested sessions.


## Advanced Scripting

### screen -X at

```bash
screen -X at
```

Example:

```bash
screen -X at 2 stuff 'exit^M'
```

Executes a command specifically in window number 2.

### screen -X other

```bash
screen -X other
```

Switches the window to the previously used window.

### screen -X remove

```bash
screen -X remove
```

Destroys the current region in split mode remotely.

### screen -X select

```bash
screen -X select
```

Example:

```bash
screen -X select 0
```

Forces the session to switch to window 0.


## Real World Ops

### zombie [keys]

```bash
zombie [keys]
```

Example:

```bash
Add 'zombie kr' to .screenrc
```

Keeps windows open after the process dies for inspection.

### autodetach on

```bash
autodetach on
```

Example:

```bash
Add 'autodetach on' to .screenrc
```

Automatically detaches the session on SIGHUP instead of terminating.

### pow_detach_msg

```bash
pow_detach_msg
```

Example:

```bash
Add 'pow_detach_msg none' to .screenrc
```

Disables the message displayed when detaching.

### msgminwait 0

```bash
msgminwait 0
```

Example:

```bash
Add 'msgminwait 0' to .screenrc
```

Reduces the wait time for status messages to zero.


## Advanced Workflow

### screen -r [name] -X

```bash
screen -r [name] -X
```

Example:

```bash
screen -r session -X eval 'split' 'focus' 'screen top'
```

Reattaches and immediately executes a sequence of commands.

## Related tools

- [tmux](https://terminal.rokibulroni.com/tool/utilities/tmux)
- [SSH](https://terminal.rokibulroni.com/tool/lateral/ssh)
