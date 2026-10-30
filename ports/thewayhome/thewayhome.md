---
name: "The Way Home: Pixel Roguelike"
alias: thewayhome
updated: "2026-10-30"
game_version: "2.6.4 (175)"
game_bundle: io.concode.p3
tags: [Unity, IL2CPP, PortMaster]
---

The Android build of the pixel roguelike, recompiled to run natively on Linux —
SDL2 on KMSDRM or the CFW's Mali fbdev backend. Rendering, input, audio and save
data work; developed and tested in the kit's QEMU VM and on an R36S
(Debian/ArkOS, Mali-G31, aarch64).

The game is driven through a virtual Xbox-style gamepad, and the on-screen touch
HUD is hidden.

No game data is included — the loader reads the files you provide yourself.
