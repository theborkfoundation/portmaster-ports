export type Port = {
  slug: string
  name: string
  engine: string
  updated: string // ISO date of the last change to the port
  description: string
  tags: string[]
  repo: string
}

export const ports: Port[] = [
  {
    slug: "pacman256",
    name: "PAC-MAN 256",
    engine: "Unity 2017 · IL2CPP · FMOD",
    updated: "2026-10-23",
    description:
      "The Android build recompiled to run straight on KMSDRM — input, music and sound effects all working. Developed and tested on an R36S.",
    tags: ["Unity", "IL2CPP", "FMOD", "PortMaster"],
    repo: "https://github.com/ngobach/pacman256-port",
  },
  {
    slug: "crossyroad",
    name: "Crossy Road",
    engine: "Unity 2017 · IL2CPP",
    updated: "2026-10-10",
    description:
      "The endless hopper on the shared Unity loader, packaged for PortMaster with the Mali/Mesa EGL driver handling the R36S needs.",
    tags: ["Unity", "IL2CPP", "PortMaster"],
    repo: "https://github.com/ngobach/crossyroad-port",
  },
  {
    slug: "shootyskies",
    name: "Shooty Skies",
    engine: "Unity 6 · IL2CPP",
    updated: "2026-10-13",
    description:
      "Endless arcade flying on Unity 6, with the OBB payload handled by the shared first-run installer.",
    tags: ["Unity", "IL2CPP", "PortMaster"],
    repo: "https://github.com/ngobach/shootyskies-port",
  },
  {
    slug: "piffle",
    name: "Piffle",
    engine: "Unity 2019.4 · IL2CPP",
    updated: "2026-10-10",
    description:
      "A cosy puzzle game being retargeted onto the shared loader for its 2019.4 engine build.",
    tags: ["Unity", "IL2CPP"],
    repo: "https://github.com/ngobach/piffle_port",
  },
  {
    slug: "skyforce",
    name: "Sky Force Anniversary",
    engine: "Unity 6 · IL2CPP",
    updated: "2026-10-14",
    description:
      "The Android TV build, booting past the privacy splash and rendering frames on the KMSDRM test VM.",
    tags: ["Unity", "IL2CPP", "Android TV"],
    repo: "https://github.com/ngobach/skyforce-port",
  },
]
