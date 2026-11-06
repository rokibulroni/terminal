---
name: terminal-hub-linux
description: "Copy-ready Linux command reference (Core Linux commands for files, processes, packages and text) covering ls, cd, pwd, cp, mv, rm, mkdir, chmod, chown, tar, cat, less, head, tail, grep, find, awk, sed, cut, sort, uniq, wc, ps, top, kill, systemctl, journalctl, df, du, free, whoami, su, history, ip, ping, APT, DNF, pacman. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a linux task from the terminal."
license: MIT
---

# Linux commands

The foundation everything else is built on. These commands work on practically every Linux distribution and most of them on macOS too.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Files & Directories

- **ls** — Lists directory contents with sizes, permissions, owners, timestamps and hidden files. [`tools/ls.md`](tools/ls.md), 19 commands. Sections: Basics, Sorting, Details, Security checks.
- **cd** — The shell built-in that changes the current directory, including shortcuts for home, previous and parent directories. [`tools/cd.md`](tools/cd.md), 13 commands. Sections: Navigation, Links and the stack, Tips.
- **pwd** — Prints the full path of the current working directory, optionally resolving symbolic links. [`tools/pwd.md`](tools/pwd.md), 6 commands. Sections: Basics.
- **cp** — Copies files and directories, preserving attributes when asked. [`tools/cp.md`](tools/cp.md), 12 commands. Sections: Basics, Preserving attributes, Links.
- **mv** — Moves or renames files and directories. [`tools/mv.md`](tools/mv.md), 10 commands. Sections: Basics, Renaming many files.
- **rm** — Removes files and directories. There is no recycle bin — deletion is immediate. [`tools/rm.md`](tools/rm.md), 11 commands. Sections: Files, Directories, Secure deletion.
- **mkdir** — Creates directories, including parent paths and with specific permissions. [`tools/mkdir.md`](tools/mkdir.md), 8 commands. Sections: Basics.
- **chmod** — Changes file permissions using symbolic or octal modes, including setuid, setgid and sticky bits. [`tools/chmod.md`](tools/chmod.md), 17 commands. Sections: Symbolic modes, Octal modes, Special bits, Recursive.
- **chown** — Changes the owner and group of files and directories. [`tools/chown.md`](tools/chown.md), 10 commands. Sections: Basics.
- **tar** — Creates and extracts archives, with gzip, bzip2, xz or zstd compression. [`tools/tar.md`](tools/tar.md), 13 commands. Sections: Creating, Extracting, Inspecting.

### Text Processing

- **cat** — Concatenates files and prints them to standard output — view, combine and create files. [`tools/cat.md`](tools/cat.md), 13 commands. Sections: Viewing, Combining and creating, Recon.
- **less** — A pager for viewing large files and command output one screen at a time, with search and follow mode. [`tools/less.md`](tools/less.md), 12 commands. Sections: Opening, Inside less.
- **head** — Prints the first lines or bytes of files — quick previews of logs and data. [`tools/head.md`](tools/head.md), 8 commands. Sections: Basics, In pipelines.
- **tail** — Prints the last lines of files and follows them as they grow — the standard way to watch logs. [`tools/tail.md`](tools/tail.md), 9 commands. Sections: Basics, Following logs.
- **grep** — Searches text for lines matching a pattern, with regular expressions, recursion and context. [`tools/grep.md`](tools/grep.md), 21 commands. Sections: Basics, Searching trees, Patterns, Context.
- **find** — Searches the directory tree by name, type, size, time, owner or permissions — and runs actions on matches. [`tools/find.md`](tools/find.md), 22 commands. Sections: By name and type, By size and time, By owner and permission, Acting on results.
- **awk** — A pattern-scanning language for column-based text: extract fields, compute totals and reformat output. [`tools/awk.md`](tools/awk.md), 15 commands. Sections: Fields, Filtering, Counting and summing, Formatting.
- **sed** — A stream editor for filtering and transforming text: substitutions, deletions and in-place file edits. [`tools/sed.md`](tools/sed.md), 16 commands. Sections: Substitution, Editing files, Selecting lines, Inserting.
- **cut** — Extracts columns, fields or characters from each line of input. [`tools/cut.md`](tools/cut.md), 9 commands. Sections: Fields, Characters and bytes, In pipelines.
- **sort** — Sorts lines of text alphabetically, numerically, by field or by human-readable size. [`tools/sort.md`](tools/sort.md), 14 commands. Sections: Basics, Keys and fields, Large data.
- **uniq** — Filters or counts adjacent duplicate lines — usually paired with sort. [`tools/uniq.md`](tools/uniq.md), 9 commands. Sections: Basics, Fields.
- **wc** — Counts lines, words, characters and bytes in files or input. [`tools/wc.md`](tools/wc.md), 10 commands. Sections: Basics, In pipelines.

### Processes & Services

- **ps** — Reports a snapshot of running processes, with owners, resource usage and full command lines. [`tools/ps.md`](tools/ps.md), 16 commands. Sections: Listing, Sorting and formatting, Investigation.
- **top** — A live, sortable view of processes and system load, CPU and memory. [`tools/top.md`](tools/top.md), 15 commands. Sections: Running, Keys inside top, Alternatives.
- **kill** — Sends signals to processes — terminate gracefully, force-kill, reload or pause. [`tools/kill.md`](tools/kill.md), 13 commands. Sections: Signals, By name, Jobs.
- **systemctl** — Controls systemd: start, stop, enable and inspect services, timers and the boot target. [`tools/systemctl.md`](tools/systemctl.md), 19 commands. Sections: Services, Inspecting, Editing and system.
- **journalctl** — Queries the systemd journal: logs by service, boot, time range, priority and more. [`tools/journalctl.md`](tools/journalctl.md), 21 commands. Sections: Reading, Filtering, Output and maintenance.

### System & Users

- **df** — Reports free and used disk space on mounted file systems. [`tools/df.md`](tools/df.md), 8 commands. Sections: Basics.
- **du** — Estimates how much space files and directories use — find what is filling a disk. [`tools/du.md`](tools/du.md), 11 commands. Sections: Basics, Finding space hogs.
- **free** — Shows total, used and available memory and swap. [`tools/free.md`](tools/free.md), 10 commands. Sections: Basics, Deeper.
- **whoami** — Prints the effective user name — the first question after landing a shell. [`tools/whoami.md`](tools/whoami.md), 13 commands. Sections: Identity, Privileges, Who else is here.
- **su** — Switches to another user (root by default) in a new shell, optionally as a login shell or for a single command. [`tools/su.md`](tools/su.md), 12 commands. Sections: Switching users, Compared with sudo, Auditing.
- **history** — The shell built-in that lists, searches and re-runs previous commands, and manages the history file. [`tools/history.md`](tools/history.md), 16 commands. Sections: Viewing, Re-running, Managing, Forensics.

### Networking

- **ip** — The iproute2 tool for addresses, links, routes, neighbours and network namespaces — the modern replacement for ifconfig and route. [`tools/ip.md`](tools/ip.md), 17 commands. Sections: Addresses, Links, Routing, Neighbours and namespaces.
- **ping** — Sends ICMP echo requests to test reachability and measure round-trip time. [`tools/ping.md`](tools/ping.md), 11 commands. Sections: Basics, Diagnostics.

### Package Managers

- **APT** — Debian and Ubuntu’s package manager: install, update, search and remove software and inspect package sources. [`tools/apt.md`](tools/apt.md), 20 commands. Sections: Installing, Upgrading and removing, Querying, Holding.
- **DNF** — The package manager for Fedora, RHEL and derivatives: install, update, query and roll back packages. [`tools/dnf.md`](tools/dnf.md), 19 commands. Sections: Installing, Updating and removing, Querying, History.
- **pacman** — Arch Linux’s package manager: sync, install, upgrade, query and clean packages. [`tools/pacman.md`](tools/pacman.md), 15 commands. Sections: Installing, Removing, Querying.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/linux. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/linux/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
