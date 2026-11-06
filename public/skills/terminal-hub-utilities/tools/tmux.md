# tmux

> A terminal multiplexer: split windows into panes, keep sessions alive after disconnect and script complex layouts.

- Category: Utilities
- Commands: 105
- Page: https://terminal.rokibulroni.com/tool/utilities/tmux
- Homepage: https://github.com/tmux/tmux
- Documentation: https://github.com/tmux/tmux/wiki
- Tags: terminal, sessions, productivity

## Install

- apt: `sudo apt install tmux`
- brew: `brew install tmux`

## Session Start

### tmux

```bash
tmux
```

Starts a new tmux session with a default numerical name.

### tmux new -s [name]

```bash
tmux new -s [name]
```

Example:

```bash
tmux new -s production
```

Starts a new session with a specific custom name for easier identification.


## Session Management

### tmux ls

```bash
tmux ls
```

Lists all currently running tmux sessions.

### tmux attach -t [name]

```bash
tmux attach -t [name]
```

Example:

```bash
tmux attach -t production
```

Attaches to an existing background session identified by its name.

### tmux attach -d -t [name]

```bash
tmux attach -d -t [name]
```

Example:

```bash
tmux attach -d -t dev
```

Attaches to a session and detaches any other clients currently attached to it.

### Prefix + d

```bash
Prefix + d
```

Example:

```bash
Ctrl-b d
```

Detaches from the current session, leaving it running in the background.

### tmux rename-session -t [current] [new]

```bash
tmux rename-session -t [current] [new]
```

Example:

```bash
tmux rename-session -t 0 webserver
```

Renames an existing session to a new label.

### Prefix + $

```bash
Prefix + $
```

Example:

```bash
Ctrl-b $
```

Interactively prompts to rename the current session.

### tmux kill-session -t [name]

```bash
tmux kill-session -t [name]
```

Example:

```bash
tmux kill-session -t database
```

Terminates a specific session and closes all its windows and panes.

### tmux kill-server

```bash
tmux kill-server
```

Kills the tmux server and all sessions, windows, and panes immediately.


## Window Management

### Prefix + c

```bash
Prefix + c
```

Example:

```bash
Ctrl-b c
```

Creates a new window within the current session.

### tmux new-window -n [name]

```bash
tmux new-window -n [name]
```

Example:

```bash
tmux new-window -n logs
```

Creates a new window with a specified name.

### Prefix + ,

```bash
Prefix + ,
```

Example:

```bash
Ctrl-b ,
```

Prompts to rename the current window.

### Prefix + n

```bash
Prefix + n
```

Example:

```bash
Ctrl-b n
```

Switches to the next window in the list.

### Prefix + p

```bash
Prefix + p
```

Example:

```bash
Ctrl-b p
```

Switches to the previous window in the list.

### Prefix + [number]

```bash
Prefix + [number]
```

Example:

```bash
Ctrl-b 2
```

Switches directly to the window at the specified index.

### Prefix + w

```bash
Prefix + w
```

Example:

```bash
Ctrl-b w
```

Opens an interactive list to select a specific window from any session.

### Prefix + &

```bash
Prefix + &
```

Example:

```bash
Ctrl-b &
```

Prompts confirmation to kill (close) the current window.

### tmux move-window -r

```bash
tmux move-window -r
```

Renumbers all windows in the session sequentially to remove gaps.


## Pane Management

### Prefix + %

```bash
Prefix + %
```

Example:

```bash
Ctrl-b %
```

Splits the current pane vertically into two side-by-side panes.

### Prefix + "

```bash
Prefix + "
```

Example:

```bash
Ctrl-b "
```

Splits the current pane horizontally into two top-and-bottom panes.

### Prefix + o

```bash
Prefix + o
```

Example:

```bash
Ctrl-b o
```

Cycles focus to the next pane in the current window.

### Prefix + Arrow Key

```bash
Prefix + Arrow Key
```

Example:

```bash
Ctrl-b Up
```

Moves focus to the pane in the direction of the arrow key.

### Prefix + x

```bash
Prefix + x
```

Example:

```bash
Ctrl-b x
```

Prompts confirmation to kill (close) the current pane.

### Prefix + z

```bash
Prefix + z
```

Example:

```bash
Ctrl-b z
```

Toggles zoom on the current pane, making it fill the entire window.

### Prefix + {

```bash
Prefix + {
```

Example:

```bash
Ctrl-b {
```

Swaps the current pane with the previous pane.

### Prefix + }

```bash
Prefix + }
```

Example:

```bash
Ctrl-b }
```

Swaps the current pane with the next pane.

### Prefix + Space

```bash
Prefix + Space
```

Example:

```bash
Ctrl-b Space
```

Cycles through the available automated pane layouts.

### tmux break-pane

```bash
tmux break-pane
```

Detaches the current pane and moves it into its own new window.

### tmux join-pane -t [window]

```bash
tmux join-pane -t [window]
```

Example:

```bash
tmux join-pane -t :1
```

Moves the current pane into an existing window.

### tmux resize-pane -[U/D/L/R] [amount]

```bash
tmux resize-pane -[U/D/L/R] [amount]
```

Example:

```bash
tmux resize-pane -D 10
```

Resizes the current pane in a specific direction by a number of cells.


## Copy Mode & Scrollback

### Prefix + [

```bash
Prefix + [
```

Example:

```bash
Ctrl-b [
```

Enters copy mode to scroll through history and select text.

### Prefix + PgUp

```bash
Prefix + PgUp
```

Example:

```bash
Ctrl-b PgUp
```

Enters copy mode and scrolls up one page immediately.

### q

```bash
q
```

Quits copy mode and returns to the command prompt.

### g

```bash
g
```

Example:

```bash
g (in vi-copy mode)
```

Goes to the very top of the scrollback history.

### G

```bash
G
```

Example:

```bash
G (in vi-copy mode)
```

Goes to the very bottom of the scrollback history.

### /

```bash
/
```

Example:

```bash
/error (in vi-copy mode)
```

Searches forward in the scrollback buffer for a specific pattern.

### ?

```bash
?
```

Example:

```bash
?warning (in vi-copy mode)
```

Searches backward in the scrollback buffer for a specific pattern.

### Space

```bash
Space
```

Example:

```bash
Space (in vi-copy mode)
```

Starts text selection in copy mode.

### Enter

```bash
Enter
```

Example:

```bash
Enter (in vi-copy mode)
```

Copies the selected text to the tmux paste buffer and exits copy mode.


## Buffer Management

### Prefix + ]

```bash
Prefix + ]
```

Example:

```bash
Ctrl-b ]
```

Pastes the most recently copied text from the tmux buffer.

### tmux list-buffers

```bash
tmux list-buffers
```

Displays a history of copied text segments stored in buffers.

### tmux show-buffer

```bash
tmux show-buffer
```

Displays the contents of the current paste buffer without pasting it.

### tmux save-buffer [file]

```bash
tmux save-buffer [file]
```

Example:

```bash
tmux save-buffer ~/clipboard.txt
```

Saves the contents of the paste buffer to a file.

### tmux load-buffer [file]

```bash
tmux load-buffer [file]
```

Example:

```bash
tmux load-buffer ~/config.txt
```

Loads text from a file into a new paste buffer.


## Configuration

### tmux show-options -g

```bash
tmux show-options -g
```

Displays the global session options currently active.

### tmux show-window-options -g

```bash
tmux show-window-options -g
```

Displays the global window options currently active.

### tmux source-file [path]

```bash
tmux source-file [path]
```

Example:

```bash
tmux source-file ~/.tmux.conf
```

Reloads the tmux configuration file without restarting the server.

### Prefix + :

```bash
Prefix + :
```

Example:

```bash
Ctrl-b :
```

Opens the tmux command prompt for entering commands interactively.


## Key Bindings

### tmux list-keys

```bash
tmux list-keys
```

Lists all current key bindings.

### tmux bind-key [key] [command]

```bash
tmux bind-key [key] [command]
```

Example:

```bash
tmux bind-key R source-file ~/.tmux.conf
```

Binds a specific command to a key combination.

### tmux unbind-key [key]

```bash
tmux unbind-key [key]
```

Example:

```bash
tmux unbind-key C-b
```

Removes a specific key binding.


## Environment

### tmux show-environment

```bash
tmux show-environment
```

Displays the global environment variables for the tmux session.

### tmux set-environment [name] [value]

```bash
tmux set-environment [name] [value]
```

Example:

```bash
tmux set-environment PRODUCTION true
```

Sets a global environment variable for the session.


## Status Bar Customization

### tmux set-option -g status-position [top/bottom]

```bash
tmux set-option -g status-position [top/bottom]
```

Example:

```bash
tmux set-option -g status-position top
```

Moves the status bar to the top or bottom of the screen.

### tmux set-option -g status-bg [color]

```bash
tmux set-option -g status-bg [color]
```

Example:

```bash
tmux set-option -g status-bg red
```

Changes the background color of the status bar.

### tmux set-option -g status-left-length [number]

```bash
tmux set-option -g status-left-length [number]
```

Example:

```bash
tmux set-option -g status-left-length 50
```

Increases the character limit for the left side of the status bar.

### tmux set-option -g status-interval [seconds]

```bash
tmux set-option -g status-interval [seconds]
```

Example:

```bash
tmux set-option -g status-interval 1
```

Sets how frequently the status bar updates in seconds.


## Automation & Scripting

### tmux new-session -d -s [name] '[command]'

```bash
tmux new-session -d -s [name] '[command]'
```

Example:

```bash
tmux new-session -d -s backup 'sh ./backup.sh'
```

Starts a detached session that immediately runs a specific background command.

### tmux send-keys -t [target] '[keys]' Enter

```bash
tmux send-keys -t [target] '[keys]' Enter
```

Example:

```bash
tmux send-keys -t mysession:0 'top' Enter
```

Sends keystrokes to a specific pane as if typed by the user.

### tmux run-shell '[script]'

```bash
tmux run-shell '[script]'
```

Example:

```bash
tmux run-shell '~/scripts/alert.sh'
```

Executes a shell command or script in the background.

### tmux if-shell '[condition]' '[cmd1]' '[cmd2]'

```bash
tmux if-shell '[condition]' '[cmd1]' '[cmd2]'
```

Example:

```bash
tmux if-shell 'true' 'display "Yes"' 'display "No"'
```

Executes a tmux command conditionally based on a shell command's success.

### tmux wait-for [channel]

```bash
tmux wait-for [channel]
```

Example:

```bash
tmux wait-for task_complete
```

Blocks execution until a signal is received on a specific channel.

### tmux wait-for -S [channel]

```bash
tmux wait-for -S [channel]
```

Example:

```bash
tmux wait-for -S task_complete
```

Sends a signal to a waiting tmux client to resume execution.


## Operational Workflows

### tmux set-window-option synchronize-panes on

```bash
tmux set-window-option synchronize-panes on
```

Broadcasts all keystrokes to every pane in the current window simultaneously.

### tmux pipe-pane -o '[command]'

```bash
tmux pipe-pane -o '[command]'
```

Example:

```bash
tmux pipe-pane -o 'cat >> ~/session.log'
```

Pipes all output from the current pane to a file for logging.

### tmux pipe-pane

```bash
tmux pipe-pane
```

Stops piping output from the current pane.

### tmux capture-pane -S -

```bash
tmux capture-pane -S -
```

Captures the entire visible text and scrollback history of the pane into a buffer.

### tmux respawn-pane -k

```bash
tmux respawn-pane -k
```

Kills the process in the pane and restarts the shell or original command.

### tmux respawn-window -k

```bash
tmux respawn-window -k
```

Kills processes in the window and restarts the window environment.


## Blue Team Defensive

### tmux set-window-option monitor-activity on

```bash
tmux set-window-option monitor-activity on
```

Highlights the window in the status bar if output activity is detected.

### tmux set-window-option monitor-silence [seconds]

```bash
tmux set-window-option monitor-silence [seconds]
```

Example:

```bash
tmux set-window-option monitor-silence 30
```

Alerts if no output is received in a pane for a specified duration.

### tmux set-option -g visual-bell on

```bash
tmux set-option -g visual-bell on
```

Flashes the status bar instead of making a sound when a bell occurs.

### tmux lock-session

```bash
tmux lock-session
```

Locks the session requiring a password (if configured) to resume.

### tmux list-clients

```bash
tmux list-clients
```

Shows all users or terminals currently attached to the session.

### tmux detach-client -t [client]

```bash
tmux detach-client -t [client]
```

Example:

```bash
tmux detach-client -t /dev/pts/1
```

Forcibly removes a specific client connection from the session.


## Incident Response

### tmux new -s IR -d; tmux pipe-pane -t IR -o 'cat >> ir_log.txt'

```bash
tmux new -s IR -d; tmux pipe-pane -t IR -o 'cat >> ir_log.txt'
```

Workflow to start a detached session and immediately begin logging everything.

### tmux clock-mode

```bash
tmux clock-mode
```

Example:

```bash
Prefix + t
```

Displays a large digital clock, useful for timestamping screenshots.


## Advanced Workflow

### tmux link-window -s [src] -t [dst]

```bash
tmux link-window -s [src] -t [dst]
```

Example:

```bash
tmux link-window -s dev:0 -t prod:1
```

Links a window so it appears in multiple sessions simultaneously.

### tmux unlink-window -t [target]

```bash
tmux unlink-window -t [target]
```

Example:

```bash
tmux unlink-window -t prod:1
```

Removes a linked window from the current session without destroying it.

### tmux refresh-client -S

```bash
tmux refresh-client -S
```

Updates the client status line and redraws the screen.

### tmux select-layout tiled

```bash
tmux select-layout tiled
```

Example:

```bash
Prefix + Alt + 5
```

Arranges all panes in the current window in a tiled grid.

### tmux select-layout even-horizontal

```bash
tmux select-layout even-horizontal
```

Example:

```bash
Prefix + Alt + 1
```

Arranges all panes in equal-width columns.

### tmux select-layout even-vertical

```bash
tmux select-layout even-vertical
```

Example:

```bash
Prefix + Alt + 2
```

Arranges all panes in equal-height rows.

### tmux select-layout main-horizontal

```bash
tmux select-layout main-horizontal
```

Example:

```bash
Prefix + Alt + 3
```

Arranges one large main pane on top and smaller panes below.

### tmux select-layout main-vertical

```bash
tmux select-layout main-vertical
```

Example:

```bash
Prefix + Alt + 4
```

Arranges one large main pane on the left and smaller panes on the right.

### tmux rotate-window

```bash
tmux rotate-window
```

Example:

```bash
Prefix + Ctrl-o
```

Rotates the positions of panes within the current window.


## Shared Sessions

### tmux -S /tmp/shared_socket new -s shared

```bash
tmux -S /tmp/shared_socket new -s shared
```

Creates a session using a specific socket file for multi-user access.

### tmux -S /tmp/shared_socket attach -t shared

```bash
tmux -S /tmp/shared_socket attach -t shared
```

Attaches to a session located at a specific socket path.

### chmod 777 /tmp/shared_socket

```bash
chmod 777 /tmp/shared_socket
```

External command often used to grant permissions for shared socket access.


## Configuration

### tmux set-option -g history-limit [lines]

```bash
tmux set-option -g history-limit [lines]
```

Example:

```bash
tmux set-option -g history-limit 10000
```

Increases the scrollback buffer size to store more history.

### tmux set-option -g base-index 1

```bash
tmux set-option -g base-index 1
```

Sets window numbering to start at 1 instead of 0.

### tmux set-window-option -g pane-base-index 1

```bash
tmux set-window-option -g pane-base-index 1
```

Sets pane numbering to start at 1 instead of 0.

### tmux set-option -g renumber-windows on

```bash
tmux set-option -g renumber-windows on
```

Automatically renumbers windows when one is closed.

### tmux set-option -g mouse on

```bash
tmux set-option -g mouse on
```

Enables mouse support for selecting panes and resizing.


## SOC Workflow

### tmux split-window -h 'htop'; tmux split-window -v 'tail -f /var/log/syslog'

```bash
tmux split-window -h 'htop'; tmux split-window -v 'tail -f /var/log/syslog'
```

One-line command to set up a monitoring dashboard.

### tmux set-hook -g alert-activity 'run-shell "echo Alert >> ~/alerts.log"'

```bash
tmux set-hook -g alert-activity 'run-shell "echo Alert >> ~/alerts.log"'
```

Configures a hook to run a script whenever activity is detected.

### tmux set-hook -g session-created 'source-file ~/.tmux_soc.conf'

```bash
tmux set-hook -g session-created 'source-file ~/.tmux_soc.conf'
```

Automatically applies a specific config when a new session is created.


## Scripting

### tmux list-panes -a -F '#{pane_id} #{pane_current_command}'

```bash
tmux list-panes -a -F '#{pane_id} #{pane_current_command}'
```

Lists all panes and their currently running commands using a format string.

### tmux list-windows -F '#{window_index}: #{window_name}'

```bash
tmux list-windows -F '#{window_index}: #{window_name}'
```

Lists windows with a custom output format for scripting parsing.


## Pane Management

### tmux display-panes

```bash
tmux display-panes
```

Example:

```bash
Prefix + q
```

Briefly displays the index numbers of visible panes.

### tmux select-pane -t [id]

```bash
tmux select-pane -t [id]
```

Example:

```bash
tmux select-pane -t 1
```

Selects a pane directly by its visible index number.


## Advanced

### tmux switch-client -t [session]

```bash
tmux switch-client -t [session]
```

Example:

```bash
tmux switch-client -t backend
```

Switches the current client to a different session without detaching.

### tmux last-window

```bash
tmux last-window
```

Example:

```bash
Prefix + l
```

Toggles between the current window and the previously selected window.

### tmux last-pane

```bash
tmux last-pane
```

Example:

```bash
Prefix + ;
```

Toggles between the current pane and the previously active pane.

## Related tools

- [GNU Screen](https://terminal.rokibulroni.com/tool/utilities/screen)
- [SSH](https://terminal.rokibulroni.com/tool/lateral/ssh)
