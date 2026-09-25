# Build What People Want. Learn Faster with AI.

A founder talk (Track D, about 10 minutes + Q&A) by Muhammad Luthfi Arifin, Product Engineer and Founder of Abadikan.

> WIGO taught me how to build. Abadikan taught me what to build. AI helps me learn faster.

(The repo keeps its original slug, `the-hardest-bug-is-the-market`, so the live URL and QR keep working.)

**Live:** https://luthfiarifin.github.io/slide-the-hardest-bug-is-the-market/

Part of [luthfiarifin/research](https://github.com/luthfiarifin/research) (linked as a submodule under `99-talks/`) and deployed to GitHub Pages by CI.

## Story

- **Act I · WIGO:** we knew how to build, but our network wasn't the market.
- **Act II · Abadikan:** the market joined the R&D, then started pulling the product.
- **Act III · AI:** building is fast, learning is slow. AI makes the loop faster; judgment stays human.

## Slides

| # | Slide | Layout |
|---|---|---|
| 01 | Build what people want. Learn faster with AI. | Cover with portrait |
| 02 | It worked. So why wouldn't it sell? (+ zero-downloads meme) | S03 split statement |
| 03 | Act I · How to build. | S09 act divider |
| 04 | We knew how to build (WIGO) | S22 image hero |
| 05 | Our network wasn't the market. (+ skeleton meme) | S08 duo compare |
| 06 | Act II · What to build. | S09 act divider |
| 07 | This time, the market joined the R&D (V1 → V3) | S05 three layers |
| 08 | We stopped pushing. The market started pulling. (B2C + B2B) | S16 image cards |
| 09 | Can we build it? → Should we build it? Think · Analyze · Build | S13 three forces |
| 10 | Act III · Learn faster. | S09 act divider |
| 11 | Building is fast. Learning is slow. | S03 split statement |
| 12 | AI doesn't replace the loop. It makes the loop faster. | S14 loop |
| 13 | AI where the business is slow (Metabase + Mindi screenshots) | S16 image cards |
| 14 | AI finds signals. You provide judgment. | S10 split statement |
| 15 | Don't build faster. Learn faster. (closing) | Split closing |
| 16 | What are you building? + QR to laam.my.id/talks/the-hardest-bug-is-the-market (+ Morpheus meme) | S12 manifesto + banner |

## Presenting

Open `index.html` in a browser (no server needed).

| Key | Action |
|---|---|
| `←` `→` / wheel / swipe | Previous / next slide |
| `Esc` | Slide overview |
| `P` | Presenter view: notes, timer, next slide, audience window sync |
| `B` | Static (low-power) mode, no animations |

The on-screen shortcut hint is hidden for a clean stage; the keys above still work.

Speaker notes live in the `SPEAKER_NOTES` array near the end of `index.html`, keyed by each slide's `data-slide-id`. Planned timing is 11.1 minutes (the outline’s own per-slide times).

Icons (Lucide, pinned), fonts (Google Fonts) and a Motion fallback load from CDNs; `assets/motion.min.js` is bundled, so the deck still works offline with system fonts.

## Development

```bash
npm ci
npx playwright install chromium   # enables rendered layout checks
npm test
```

`npm test` runs:

- `scripts/check-assets.mjs`: every local `src`/`href` resolves to a file
- `scripts/validate-swiss-deck.mjs`: registered Swiss layouts, image slots, and rendered overflow / nav-safe / title-gap measurements
- `scripts/validate-presenter-mode.mjs`: slide IDs, speaker notes and the 90% timing budget

## CI/CD

`.github/workflows/ci.yml`:

- **Pull requests:** run `npm test` in headless Chromium.
- **Push to `main`:** run the same checks, then publish only the site files (`index.html`, `cover.jpg`, `assets/`, `images/`) to GitHub Pages.

Dependabot keeps the Actions and npm dependencies up to date.

## Credits and license

Built on the Swiss Style template from [guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) (Safety Orange theme), with the presenter UI translated to English. The template and the vendored validator scripts are AGPL-3.0, so this repository is licensed under [AGPL-3.0](LICENSE).

Slide copy, speaker notes, the portrait and the WIGO, Abadikan, interactive-catalog, analytics and support screenshots are © Muhammad Luthfi Arifin. The memes belong to their respective owners.
