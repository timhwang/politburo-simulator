# Survive the Politburo

A historically-accurate text adventure where you play as a real Soviet Politburo member, trying to survive 22 Party Congresses from 1918 to 1990.

**[Play Now](https://timhwang.github.io/politburo-simulator/)**

## About

Choose from real historical figures — Molotov, Mikoian, Kalinin, and others — and navigate the treacherous politics of the Soviet Union across seven decades. Every scenario is grounded in real events: the succession struggles after Lenin's death, Stalin's purges, Khrushchev's thaw, Brezhnev's stagnation, and Gorbachev's collapse.

Your character's real historical fate shapes the difficulty. Play as someone who was executed, and history itself works against you.

## Features

- **136 real Politburo members** drawn from historical records, with accurate tenure dates and fates
- **220 historically-grounded scenarios** across 22 Congresses (10 per Congress)
- **51 emergency crisis events** — assassination attempts, surprise votes, foreign policy emergencies
- **67 secret dossier events** — intercepted NKVD reports, denunciations, and private letters
- **AI-generated pixel art** — SimCity 2000-style scene images and character portraits
- **Alliance & rivalry system** — form political alliances with real Politburo colleagues (who can be purged, leaving you exposed)
- **Three-stat system** — Loyalty, Cunning, and Reputation with diminishing returns and stat tension
- **Faction tracks** — Left/Right economic axis and Dove/Hawk policy axis
- **Pravda newspaper** — procedurally generated headlines between turns
- **Achievement system** — 20+ achievements based on your political career
- **4 game modes** — Standard Campaign, Iron Curtain (hidden stats), Great Purge Challenge, Speed Run
- **8-bit Soviet mood music** — toggle-able chiptune soundtrack

## How It Works

Each Congress presents a historically-accurate political dilemma. Your choices affect three stats:

- **Loyalty** — How the party leadership views you
- **Cunning** — Your political survival instincts
- **Reputation** — Your standing among colleagues and the public

After each choice, a survival check determines if you make it to the next Congress. The check factors in your choice's base survival rate, your stats, alliance bonuses, and proximity to your character's real historical death.

Stats have **diminishing returns** (gains halved above 70, quartered above 85) and **tension** between them — high cunning erodes loyalty and reputation, while high loyalty or reputation constrains cunning. You can't simply max one stat to win.

## Data Source

Politburo member data is drawn from the [Soviet Leadership Data Project](https://sovietleadershipdata.pages.dev/), covering all full and candidate members from the 7th through 28th Party Congresses.

## Tech

Pure static HTML/JS — no frameworks, no build step, no server required. Runs entirely in the browser. Hosted on GitHub Pages.

- Game engine and UI: vanilla JavaScript
- Styling: CSS with Soviet-era aesthetic (dark reds, golds, serif typography)
- Scene images: Generated via OpenAI's gpt-image-1 API (SimCity 2000 pixel art style)
- Character portraits: Generated via OpenAI's gpt-image-1 API
- Music: Web Audio API chiptune synthesizer
- Fallback graphics: HTML5 Canvas procedural pixel art

## License

MIT
