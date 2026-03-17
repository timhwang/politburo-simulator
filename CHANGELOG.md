# Changelog

## v0.5.0 — The Orthodoxy Update (2026-03-16)

### New Mechanic: Orthodoxy Accumulator
- **Orthodoxy** is a new fourth stat that tracks your record of ideological commitment across eras
- Builds when you make loyalty-boosting choices during authoritarian eras (Stalin consolidating → Late Stalin)
- Decays slowly during non-authoritarian eras as records gather dust
- **Protects you under authoritarian rule** — high orthodoxy gives a survival bonus when the party demands conformity
- **Becomes lethal baggage during reforms** — high orthodoxy sharply penalizes survival during the Thaw, Perestroika, and Collapse eras
- Big loyalty commitments (loyalty gain ≥ 8 in Stalin eras) create permanent "political baggage" records
- Visible in the status bar with color-coded meter (green → yellow → orange → red) and ⚠ warning icon during reform eras

### Survival Check Overhaul
- **Harsher Stalin-era loyalty requirements**: loyalty below 40 now incurs -25% survival (was -15% below 30); below 20 is -35%
- **Terror era bonus penalty**: Pre-Terror and Post-Terror eras demand loyalty above 60 or suffer an additional -10%
- **Orthodoxy-based era penalties**: each era applies a different orthodoxy modifier ranging from +0.3% per point (authoritarian) to -0.5% per point (Collapse)
- **Expanded faction track penalties**: too hawkish under authoritarian rule (-2%), too statist under reforms (-3%), too rightist under Brezhnev (-3%)
- **Doubled faction penalties in transition eras** (Thaw and Perestroika) — these are now genuine survival crises

### 15 New Cross-Scenario Continuity Triggers (30 total)
Choices you make in earlier Congresses now unlock bonus options in later ones. New triggers:
- **denounced_colleagues** — Your denunciations are remembered when the wind changes
- **protected_minorities** — Persecuted intellectuals remember your quiet protection
- **advocated_consumer_goods** — Your record of prioritizing living standards gives reformist credibility
- **built_regional_base** — Your provincial political machine provides independent support
- **documented_truth** — Truth-tellers earn lasting respect when new leaders need honest advisors
- **championed_science** — Defending real science over Lysenko earns trust from the technical intelligentsia
- **pursued_foreign_ties** — International contacts make you valuable in the détente era
- **supported_nationality_rights** — Respect for national identities resonates as the union fragments
- **hardline_enforcer** — Fear is its own protection, but enforcers are first against the wall
- **nuclear_program_supporter** — Association with Sputnik and the bomb is beyond political reproach
- **criticized_bureaucracy** — Anti-bureaucratic credentials appeal to every new reformist leader
- **cultural_hardliner** — Cultural conservatives rally behind you, but reformers mark you as an obstacle
- **military_hawk** — The defense establishment backs you as one of their own
- **supported_detente** — Your détente record makes you credible in the disarmament era
- **master_bureaucrat** — Institutional knowledge makes you impossible to replace

### Stats Tutorial Screen
- New "How to Survive the Politburo" tutorial between mode select and character select
- Visual 2×2 grid explaining Loyalty, Cunning, Reputation, and Orthodoxy with era-specific effects
- "The Core Dilemma" section explains the central tension: early loyalty builds orthodoxy that becomes deadly later
- Secondary info panels for Faction Tracks and Political Alliances

### CK2-Style Achievement Badges
- 45 unique achievement badge images generated in Crusader Kings 2 style
- Dark metallic frames with ornate borders and symbolic icons for each achievement
- Displayed alongside achievement text on the game over screen
- Graceful fallback to text icons if badge image is missing

### Bug Fixes
- Fixed `const L` duplicate variable declaration crash in `generateBiography()` that prevented the game over screen from rendering
- Faction track display now shows expanded penalty information for all era types
