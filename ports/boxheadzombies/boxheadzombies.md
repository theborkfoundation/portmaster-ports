---
name: "Box Head: Zombies Must Die!"
alias: boxheadzombies
updated: "2026-10-30"
game_version: "3.7.6 (2003212)"
game_bundle: com.migoigames.boxheadzombiesmustdie
tags: [Unity, IL2CPP, PortMaster]
---

The Android build of the top-down zombie shooter, recompiled to run natively on
Linux/KMSDRM. Boots through the load sequence into the first chapter with sound
and controller input; developed and tested in the kit's QEMU VM and on an R36S
(640×480, around 22 fps).

The game peaks at about 1.1 GB of RAM. On a 1 GB handheld, enable the CFW's
zram tool (768 MB is enough) before launching, or the kernel will kill the game
while the first scene loads.

No game data is included — the loader reads the files you provide yourself.
