# Capstone — Slidev version

Markdown-driven slide deck. Pure black, no decoration. Content + layout focus.

## Run

```bash
cd "C:\Users\User\Desktop\Claude Projects\capstone\slidev"
npm install     # first time only (~30 sec)
npm run dev     # opens http://localhost:3030
```

## Presenter View

Once running, hit `/presenter` (e.g. `http://localhost:3030/presenter`) — shows slide on left, speaker notes + timer on right. This is what you'll use Tuesday.

## Keyboard

- `→` / `space` — next
- `←` — previous
- `o` — overview (slide grid)
- `g` then number — go to slide N
- `d` — dark mode toggle
- `f` — fullscreen

## Files

- `slides.md` — content + layout + speaker notes (all in markdown)
- `style.css` — pure black + minimal type styling
- `package.json` — Slidev dependency

## Image placeholders

Search `img-placeholder` in `slides.md` to find the four spots where photos go (slides 3, 5, 8, 11). Replace each `<div class="img-placeholder">` with `<img src="/your-image.png" />` once you drop images into a `public/` folder.

## Export to PDF (optional, for printed backup)

```bash
npm run export
```
