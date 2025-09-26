---
title: Turn On Limeide GTX300 Keyboard Backlight On Linux
desc: The backlight of my new Limeide GX300 USB keyboard did not get turned on on my Linux system out of the box. Here is how I solved it.
date: 2025-09-26T19:38:23+0800
topics: ['keyboards', 'linux']
hasCodeBlock: true
---
Recently, I ordered a new pair of USB keyboard and mouse for myself — Limeide GRX300 — through a local e-commerce store. Both keyboard and mouse have backlight, which complements my main personal computer — ASUS TUF Gaming A15 laptop.

The keyboard of my gaming laptop is perfectly functional, but I use an external keyboard to protect my laptop keyboard form overuse as much as possible, and I do enjoy typing with a mechanical keyboard. My previous USB keyboard stopped working, as none of the keys will input anything, so I bought a new one.

However, when my new USB keyboard and mouse arrived, and I plugged them in to my gaming laptop, the keyboard backlight cannot be turned on, even after pressing the function key and backlight key, while the mouse backlight did get turned on.

I soon figured out that the fact that I am using Linux, and Limeide GTX300 keyboard's backlight does not seem to support Linux out of the box was the most likely reason. Fortunately, as I searched the web, I found out that the [Arch Wiki](https://wiki.archlinux.org/title/Main_page) has an article about [keyboard backlight](https://wiki.archlinux.org/title/Keyboard_backlight) — one more reason Arch Wiki is awesome, and while I am daily driving Arch Linux, the wiki is a goldmine of information for Linux in general.

First, I installed the [`brightnessctl`](https://archlinux.org/packages/?name=brightnessctl) package, then run the `brightnessctl --list` command both after plugging in and unplugged my USB keyboard, so I could identify the input device for my USB keyboard's LED backlight — `input7::scrolllock` of class `leds`. Therefore, to turn on the backlight, I run the command as root:

```shell
echo 1 > /sys/class/leds/input7::scrolllock/brightness
```

The command works, but when I restart my PC system, the brightness setting will also get reset. Fortunately, when I searched the web for how to turn on keyboard backlight on reboot, I discovered a solution: creating a systemd service for the keyboard backlight. Shout-out to xircon on the EndeavourOS forums for the [solution](https://forum.endeavouros.com/t/how-to-have-keyboard-backlights-turned-on-at-boot/54220/16).

First, I created a `kb-light.sh` script in the directory `/usr/bin/`:
```shell
sudo -E vim /etc/bin/kb-light.sh
```
I used Vim to create and edit the script, but you can replace `vim` with another editor like `nano`.

Then, I add the following as the content of the script:
```shell
#!/usr/bin/env bash

echo 1 > /sys/class/leds/input7::scrolllock/brightness
```

After saving the script and exiting the editor, I made the script executable:
```shell
sudo chmod +x /usr/bin/kb-light/sh
```

Now, I created a `kb-light` service for systemd by using an editor to create a file for the service:

```shell
sudo -E vim /etc/systemd/system/kb-light.service
```

Then I add the following as the content of the `kb-light` service file:

```ini
[Unit]
Description=Turn on keyboard backlight

[Service]
User=root
WorkingDirectory=/usr/bin/
ExecStart=kb-light.sh
# optional items below
Restart=always
RestartSec=3

[Install]
WantedBy=multi-user.target
```

After saving the service file, I enabled and started my `kb-light` service by running the command:

```shell
sudo systemctl enable kb-light --now
```

Now not only the backlight of my Limeide GTX300 keyboard is turned on, it will get automatically turned on when I rebooted my Arch Linux system.

Admittedly, I did not expect that I needed to set up manually to turn on my USB keyboard's backlight, but on the bright side, I got to learn more about creating a systemd service.
