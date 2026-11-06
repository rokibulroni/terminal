---
name: terminal-hub-iot
description: "Copy-ready IoT & Hardware command reference (Raspberry Pi configuration, GPIO, I²C and camera tools) covering raspi-config, vcgencmd, GPIO tools, i2c-tools, libcamera apps. Use when the user needs exact syntax, flags, examples or explanations for these tools, or asks how to do a iot & hardware task from the terminal."
license: MIT
---

# IoT & Hardware commands

Command-line tools for working with single-board computers and attached hardware — mostly Raspberry Pi, but the I²C and GPIO concepts carry over to other boards.

## How to use this skill

1. Pick the tool from the index below that fits the user’s task.
2. Read its reference file (`tools/<file>.md`) for every command, grouped by section, with an example and explanation for each. Only open the files you need.
3. Commands use placeholders such as `<target>`, `<ip>`, `TARGET_IP`, `{target}` and example private addresses (10.x, 192.168.x, 192.0.2.x). Replace them with the user’s real values; never run a command with a placeholder still in it.
4. Explain what the command does before the user runs it, and prefer the least intrusive option that answers the question.
5. Only run offensive or intrusive commands against systems the user owns or is explicitly authorised to test. If authorisation is unclear, ask before suggesting active scanning, exploitation or credential attacks.

If a tool you need isn’t listed here, the `terminal-hub` skill lists every category, or fetch `https://terminal.rokibulroni.com/api/v1/manifest.json`.

## Tool index

### Raspberry Pi System

- **raspi-config** — The Raspberry Pi configuration tool, interactive or scriptable: enable interfaces, set locale, expand storage and tune boot options. [`tools/raspi-config.md`](tools/raspi-config.md), 15 commands. Sections: Interactive, Non-interactive, Querying.
- **vcgencmd** — Queries the Raspberry Pi’s VideoCore firmware: temperature, clock speeds, voltages, throttling state and memory split. [`tools/vcgencmd.md`](tools/vcgencmd.md), 16 commands. Sections: Health, Clocks, Memory and firmware.

### Hardware Interfaces

- **GPIO tools** — Reading and driving Raspberry Pi GPIO pins from the shell using pinctrl and the libgpiod utilities (gpiodetect, gpioget, gpioset). [`tools/gpio.md`](tools/gpio.md), 14 commands. Sections: Discovering, Reading and writing (libgpiod), pinctrl (Raspberry Pi OS), Python.
- **i2c-tools** — Utilities to detect, read and write devices on an I²C bus: i2cdetect, i2cget, i2cset and i2cdump. [`tools/i2c-tools.md`](tools/i2c-tools.md), 14 commands. Sections: Discovering, Reading, Writing, Setup.
- **libcamera apps** — Capture stills and video from Raspberry Pi camera modules with rpicam-still, rpicam-vid and friends (formerly libcamera-*). [`tools/libcamera.md`](tools/libcamera.md), 13 commands. Sections: Detecting, Stills, Video.

## Fresh data

This skill was generated from https://terminal.rokibulroni.com/category/iot. For the latest version of a tool, fetch `https://terminal.rokibulroni.com/api/v1/tools/iot/<slug>.md`, or connect the MCP server at `https://terminal.rokibulroni.com/mcp`.
