# The Hardest Bug Is the Market

A founder talk (Track D, about 8 minutes + Q&A) by Muhammad Luthfi Arifin, Founder of Abadikan.

> How I learned to build products people actually want.

**Live:** https://luthfiarifin.github.io/slide-the-hardest-bug-is-the-market/

Part of [luthfiarifin/research](https://github.com/luthfiarifin/research) (linked as a submodule under `99-talks/`) and deployed to GitHub Pages by CI.

## Story

- **Act I · WIGO:** we knew how to build, but struggled to sell. We tested the product, not the market.
- **Act II · Abadikan:** we sold early, listened, and changed the product until the market started pulling us.
- **Act III · AI:** AI didn't find product–market fit. It made the learning loop faster.

## Slides

| # | Slide | Layout |
|---|---|---|
| 01 | The hardest bug is the market | Cover with portrait |
| 02 | It works. 0 customers. So why won't anyone buy it? | S03 split statement |
| 03 | WIGO: we built everything | S22 image hero |
| 04 | We tested the product. Not the market. | S11 horizontal timeline |
| 05 | This time, the market was part of R&D (V1 → V3) | S05 three layers |
| 06 | The market started pulling us (B2C + B2B) | S16 image cards |
| 07 | Changing the question: sell early, listen hard, build less | S13 three forces |
| 08 | AI didn't find PMF. It made the loop faster. | S14 loop |
| 09 | AI where the business is slow | S19 four cards |
| 10 | Build what the market keeps asking for (closing) | Split closing |
| 11 | Questions? + QR to laam.my.id/talks/the-hardest-bug-is-the-market | S12 manifesto + banner |

## Presenting

Open `index.html` in a browser (no server needed).

| Key | Action |
|---|---|
| `←` `→` / wheel / swipe | Previous / next slide |
| `Esc` | Slide overview |
| `P` | Presenter view: notes, timer, next slide, audience window sync |
| `B` | Static (low-power) mode, no animations |

The on-screen shortcut hint is hidden for a clean stage; the keys above still work.

Speaker notes live in the `SPEAKER_NOTES` array near the end of `index.html`, keyed by each slide's `data-slide-id`. Planned timing is 8.2 minutes.

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

Slide copy, speaker notes, the portrait and the WIGO, Abadikan and interactive-catalog product images are © Muhammad Luthfi Arifin.
