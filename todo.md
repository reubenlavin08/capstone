# Capstone deck — request audit (2026-05-19, pre-delivery)

Pulled from chat history. Each request marked:
- ✅ DONE — fulfilled and verified
- ⚠️ PARTIAL — addressed but not fully right or not verified
- ❌ OPEN — not done or blocked

Order: roughly chronological.

---

## Earliest session (project setup + visual direction)

1. ✅ Familiarize with capstone via Google Docs / Drive
2. ✅ Pull CLC class info from WPGA MyschoolApp via chrome-devtools
3. ✅ Maintain a todo.md and info doc with surfaced context
4. ✅ Clarify gaps (1 mentor mtg, 2 informal expert convos: Dr Yang + Rhys Rustad-Elliott)
5. ✅ Draft slides in Google Slides via MCP
6. ✅ Add speaker notes (Google Slides backup deck kept)
7. ✅ Auto-approve permission for Google Slides MCP writes (Slides-only exception)
8. ✅ Pivot from Google Slides to custom site → Slidev
9. ✅ Mention Pro Cert pursuit honestly + acknowledge "I was just doing the EQ literally"
10. ✅ Heavy on imagery / visual focus
11. ✅ PCB-style background for cover (greyscale, traces as accents)
12. ✅ Greyscale color scheme
13. ✅ Black background, no terminal theme
14. ✅ Use Slidev for the deck
15. ✅ Title: "AI, Robotics and Learning"

---

## Tone + content

16. ✅ Removed corny / overdramatic language (FP-maximalist green panel killed; aphoristic lines slimmed)
17. ✅ Replaced "probing" everywhere with experiment/questions/building
18. ✅ Title font: Archivo for h2 headings
19. ✅ Body in IBM Plex Mono, weight 400
20. ✅ Intentional layouts with negative space
21. ✅ POA as descending staircase 01→04 diagonal
22. ✅ EQ + POA combined onto one slide (EQ caption top-right, staircase below)

---

## Photos / Drive

23. ✅ Pulled photos from Drive `project photos` folder
24. ✅ Replaced wrong `credly.png` with Google AI Pro Cert badge
25. ✅ Wired ESP32 + ToF photo into helmet slide (`helmet.jpg` from IMG_6983)
26. ✅ Bullseye gallery: 3 screenshots (landing, dashboard, featured find)
27. ✅ Helmet gallery: 6 photos (mosaic-6)
28. ✅ Hardware gallery: 4 photos (mosaic-4)
29. ✅ Bass + Volador placeholders REMOVED per user (Option 1)
30. ❌ **Videos NOT embedded** — user flagged this turn; need MOV→MP4 conversion + placement
31. ⚠️ "Way more photos" in galleries — bullseye capped at 3 (no more in Drive); helmet has 6; hardware has 4

---

## Layout / mosaic

32. ✅ Per-project text → gallery slide pattern (Bullseye, Helmet, Hardware, Sentinel paired)
33. ✅ Mosaic asymmetric Shutter-style layouts
34. ⚠️ **Image overflow** — converted vh→px row heights this turn; awaiting visual confirm
35. ⚠️ **Some images cropped when they shouldn't be** — user just flagged; needs case-by-case fix
36. ❌ "Should be obvious not a Google slide" — deck IS distinctive (black bg, IBM Plex Mono, `> .tag` prefixes, asymmetric mosaics, PCB cover) but user wants MORE. Not yet added (custom slide number footer? More PCB accents? Persistent edge element?)

---

## Project content + chronology

37. ✅ Slimmed project lesson statements (deleted aphoristic `.lesson` lines)
38. ✅ Deleted cv-robotics-course standalone slide
39. ✅ "Theory only gets you so far." moment replaces earlier "certs weren't the answer"
40. ✅ Removed school timeline from Next slide
41. ✅ Hardware lineage slides added
42. ✅ Sentinel slide added (mid-March, Mexico City)
43. ✅ Web design slide added (stripped to title + version chips + URL)
44. ✅ Hardware moved AFTER EQ+POA (was before)
45. ❌ **Compressed-prompt rename** — user wants better name. Awaiting pick: prompt-expander / shorthand / stenoprompt / other
46. ✅ Bullseye gallery URL caption `getbullseye.app` top-right
47. ✅ Compressed-prompt slide: removed redundant sentence, added carbon-terminal icon

---

## Animations / transitions

48. ✅ Page transition `slide-left` (replaced `fade-out`)
49. ⚠️ **Timed animations** — converted v-click to auto-stagger via `:nth-child` on every slide. Needs visual verification.
50. ⚠️ **Animations consistent** — stripped per-element reveals + added auto-stagger. Needs visual confirm.

---

## Sentence + line edits

51. ✅ "Optimized the wrong layer." → "I optimized before I tested if it worked."
52. ✅ "Studying isn't building." → "Theory only gets you so far."
53. ✅ "This slideshow is the test." REMOVED (corny per user)
54. ✅ Bullseye text slide: `bullseye` h2 title added

---

## Hosting + delivery

55. ✅ Private GitHub repo `reubenlavin08/capstone` created
56. ✅ Repo flipped to PUBLIC per user
57. ✅ All content pushed to main
58. ✅ PDF export built (`slidev/capstone.pdf`)
59. ✅ Deployed to GitHub Pages: https://reubenlavin08.github.io/capstone/
60. ✅ LAN dev server: http://192.168.1.242:3030/ (--remote, 0.0.0.0)

---

## Visual / typography

61. ✅ Heading text size consistent (project h2 = text-3xl mono)
62. ✅ EQ caption uses Archivo + h2 sizing
63. ✅ Triangle cascade for Next slide (4 lines descending, single lines, left-aligned)

---

## Speaker notes / accompanying docs

64. ❌ **`prompts.md` and `speaker-notes.md` STALE** — haven't reflected: deleted CV slide, removed school timeline, new gallery slide, theory line wording, new Sentinel/Hardware/Web design slides, cascade Next slide

---

## Pending user-input decisions

65. ❌ Compressed-prompt rename pick
66. ❌ Compressed-prompt + Web design order (currently: rename-project → web design)
67. ❌ Video selection + conversion + placement
68. ⚠️ Specific images that are still cropped wrong — need user to point out which

---

## New request batch (2026-05-19 ~04:00, must address before delivery)

R1. ❌ **PCB traces gone from cover** — verify + restore. Cover should have the 3 traces with vias on dot pattern bg.
R2. ❌ **Credly badge wrong / needs Drive insert** — re-fetch the actual Google Credly badge from Drive folder (user has uploaded the right one). Current `public/credly.png` may not be right.
R3. ❌ **Hardware position** — move hardware to AFTER the "theory only gets you so far" moment (currently: hardware between EQ+POA and Phase 1; user wants hardware after the theory moment, so order becomes: EQ+POA → Phase 1 → theory moment → Hardware text → Hardware gallery → Sentinel → ...).
R4. ❌ **Remove Sentinel filler line** — "first time I shipped a working AI pipeline end-to-end." — kill from Sentinel slide. Speaker delivers in voice.
R5. ❌ **Sentinel gallery image out of frame** — image position/sizing breaking the canvas. Fix.
R6. ❌ **Bullseye B&W logo on bullseye text slide** — get the logo, add monochrome version next to/replacing the `bullseye` h2.
R7. ❌ **Helmet gallery images weirdly resized** — the mosaic-6 cells aren't matching their image aspect ratios. Fix cropping/sizing.
R8. ❌ **Bullseye gallery images weirdly resized + cropped** — same issue, screenshots being cropped poorly.
R9. ❌ **Remove "each one was a different experiment." line** — kill from portfolio chip wall slide.
R10. ❌ **Remove "mentor — 1 meeting" line** — don't surface mentor count unless asked in Q&A; just drop that row from network slide.
R11. ❌ **Add final "outtakes" gallery slide** — user will gather unused images/videos and place as a closing collage slide.
R12. ✅ Rule confirmed: log every user request to todo.md BEFORE acting.
R13. ❌ Use new transparent-bg Credly badge from `C:\Users\User\Downloads\certificate-card.webp...` — replaces current credly.png
R14. ⚠️ Claude-monitor TOUCH GRASS: two perspective videos side-by-side. **Blocker**: 8 MOV files in Drive; user needs to ID which 2 specifically. **Also**: MOV→MP4 conversion required (ffmpeg not installed in dev env). Animation.gif likely covers one perspective already.
R15. ⚠️ RC plane build timelapse video — same blocker (MOV→MP4 + user ID).
R16. ❌ Add to .next cascade (smallest text, append at bottom): "openclaw red-teaming + prompt-injection research"
R17. ❌ Two VL53CX software GIFs added to Drive — embed on helmet text or helmet gallery slide
R18. ❌ Add cc-discord-remote project slide — "control Claude Code from anywhere, anytime" (built May 15-16, fits with the recent projects cluster)

---

## Verification queue (screenshot + check)

- [ ] Hardware text slide (post-position-swap)
- [ ] Hardware gallery (mosaic-4 px heights)
- [ ] Bullseye gallery (mosaic-3 landscape)
- [ ] Helmet gallery (mosaic-6 px heights)
- [ ] EQ + POA staircase animation
- [ ] Phase 1 (credly.png)
- [ ] Sentinel text + gallery
- [ ] Moment slides (theory / build / still building)
- [ ] Web design slide
- [ ] Next cascade
- [ ] Portfolio compact chip wall
- [ ] Cover (PCB-bg)
- [ ] Auto-stagger animation rendering correctly across all slides
