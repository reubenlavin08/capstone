---
theme: default
title: AI, Robotics and Learning — Reuben Lavin
info: |
  AI, Robotics and Learning
  Capstone · WPGA Class of 2026 · May 19, 2026
colorSchema: dark
mdc: true
transition: slide-left
class: text-center
layout: center
---

<img src="/pcb-bg.svg" alt="" class="cover-bg" />

<h1 class="cover-title">AI, Robotics and Learning</h1>

<div class="cover-meta">
  Reuben Lavin <span class="dim mx-2">·</span> WPGA Class of 2026 <span class="dim mx-2">·</span> May 19, 2026
</div>

<!--
Opener — in medias res hook:

"Before I introduce myself: a few weeks ago I spent seven hours debugging an IMU sensor before realizing the chip was shorted from the factory. The week before that, I'd finished the Google AI Professional Certificate. The gap between those two experiences is what I want to talk about."

[PAUSE 2s — look at the assessor]

"My name's Reuben Lavin, WPGA Class of 2026. My essential question: how do I transition from a consumer of AI to a developer through self-directed study?"

Conversational volume. Don't perform — recall.
-->

---
layout: default
class: text-left
title: Agenda
---

<div class="tag mb-16">.agenda</div>

<div class="grid grid-cols-[80px_1fr] gap-y-6 text-3xl">
  <div class="amber">01</div><div>past</div>
  <div class="amber">02</div><div>present</div>
  <div class="amber">03</div><div>future</div>
  <div class="amber">04</div><div>q &amp; a</div>
</div>

<!--
Past → present → future → Q&A. One breath. Move on.
-->

---
layout: default
class: text-left
title: The Past
---

<div class="tag mb-12">.past</div>

<div class="grid grid-cols-[140px_1fr] gap-y-5 text-2xl">
  <div class="amber">gr 8</div><div class="">"needs strategies to persevere"</div>
  <div class="amber">gr 10</div><div class="">"need strategies to focus, manage stress"</div>
  <div class="amber">gr 12</div><div class="">"mature ownership of learning"</div>
  <div class="amber">ap calc</div><div class="">"needs explanatory clarity"</div>
</div>

<!--
I'll start with where I came from. In Grade 8, my report card said I needed to develop strategies for persevering through setbacks — basically, I gave up too easily.

By Grade 10, I was at least self-aware enough to write that I needed to find strategies to focus and manage stress.

By Grade 12 Physics, my teacher described what she called a "mature ownership" of learning — I'd figured out how to actually push through.

That arc — from giving up easily to taking ownership — is what made it possible for me to attempt the kind of self-directed project this capstone asked for.

The gap I still have, named explicitly in my AP Calc feedback, is explanatory clarity. I can do the math; I struggle to communicate the why. This presentation is partly an exercise in closing that gap.

[Mention bass + Volador if photos are visible — improvising under pressure as a personal theme]
-->

---
layout: default
class: text-left
title: Essential question + plan
---

<div class="flex justify-between items-start mb-20">
  <div class="tag">.eq → .poa</div>
  <div class="max-w-xl text-right">
    <h2 class="text-2xl leading-snug" style="font-weight: 500;">
      how do I transition from a consumer of AI to a developer through self-directed study?
    </h2>
  </div>
</div>

<div class="grid grid-cols-8 grid-rows-4 gap-y-4 text-xl max-w-5xl">
  <div class="col-start-1 row-start-1 flex items-center gap-4">
    <span class="dim font-mono text-base">01</span>
    <span>knowledge baseline</span>
  </div>
  <div class="col-start-3 row-start-2 flex items-center gap-4">
    <span class="dim font-mono text-base">02</span>
    <span>pivot</span>
  </div>
  <div class="col-start-5 row-start-3 flex items-center gap-4">
    <span class="dim font-mono text-base">03</span>
    <span>integration</span>
  </div>
  <div class="col-start-7 row-start-4 flex items-center gap-4">
    <span class="dim font-mono text-base">04</span>
    <span>synthesis</span>
  </div>
</div>

<!--
Here's the question I started with: how do I transition from a consumer of AI to a developer through self-directed study?

And the plan I wrote in March: four milestones — Knowledge Baseline, Technical Pivot, Integration, Final Synthesis.

The plan was real. What I'm going to show you next is what actually happened against it, and where I deviated.

Spoiler: the deviation is where the learning is.
-->

---
layout: default
class: text-left
title: Phase 1 — formal path
---

<div class="tag mb-4">.phase_1</div>
<div class="muted text-sm tracking-wide mb-12 font-mono">feb 28 — mar 5</div>

<div class="two-panel">

<div>

<div class="text-3xl leading-loose">
  <div class="">11 courses</div>
  <div class="">7 days</div>
  <div class="">8 badges</div>
</div>

<div class="mt-8 text-lg muted">
  + Google AI Professional Certificate
</div>

<div class="dim text-xs mt-6 tracking-wide font-mono">
  credly.com/users/reuben-lavin
</div>

</div>

<div class="flex items-center justify-center">
  <img src="/credly.webp" alt="Google AI Professional Certificate badge" class="max-h-72 object-contain" />
</div>

</div>

<!--
Phase one took the EQ literally. To become a developer through self-directed study, I went and got the credential.

Between February 28 and March 5 — seven days — I completed 11 Google Career Certificate courses and earned 8 Credly badges including the Google AI Professional Certificate.

[DEMO: pull up credly.com/users/reuben-lavin in the browser, show the badges live (~20 sec)]

After seven days I had the credential. What I didn't have was the answer to my question.
-->

---
layout: center
class: text-center
title: The realization
---

<div class="moment-text text-5xl max-w-3xl mx-auto">
  theory only gets you so far.
</div>

<!--
After seven days of sitting at a desk clicking through course modules, I'd reached the limits of what passive study could teach me.

Google's own description of the Pro Cert — the thing I'd just earned — says it certifies that the holder has built a portfolio of 20+ artifacts and vibe-coded a custom AI solution. So Google itself was telling me: the certificate isn't the proof; the artifacts are.

Around that same time I kept seeing engineering builds on YouTube — sensor projects, AI-augmented tools, weird hardware — and at some point I started wanting to make those things rather than watch them. The next two months were that.

Theory only gets you so far. The rest is hands-on.
-->

---
layout: default
class: text-left
title: Hardware lineage
---

<div class="tag mb-4">.hardware</div>
<div class="muted text-sm tracking-wide mb-20">hands-on lineage · the foundation phase 2 leans on</div>

<div class="grid grid-cols-[200px_1fr] gap-y-6 text-2xl max-w-4xl">
  <div class="amber">01</div><div>fixed my old RC car</div>
  <div class="amber">02</div><div>built an autonomous car with ultrasonic obstacle avoidance</div>
  <div class="amber">03</div><div>built an RC airplane</div>
  <div class="amber">04</div><div>tore down + rebuilt an electric scooter</div>
</div>

<!--
Before any of the AI work, I had a hardware lineage. The capstone work that follows leans on the same lineage.

To me hardware and software are basically one.
-->

---
layout: default
class: text-left
title: Hardware gallery
---

<div class="tag mb-12">.hardware</div>

<div class="gallery mosaic-4 max-w-5xl">
  <div class="cell"><img src="/hardware/02-autonomous.jpg" alt="autonomous car" /></div>
  <div class="cell"><img src="/hardware/01-rc.jpg" alt="rc car" /></div>
  <div class="cell"><img src="/hardware/03-airplane.jpg" alt="rc airplane motor" /></div>
  <div class="cell"><img src="/hardware/04-scooter.jpg" alt="scooter controller" /></div>
</div>

<!--
The artifacts: LEGO + Arduino autonomous car (top-left, big), RC car parts, brushless motor for the airplane, electric scooter motherboard.
-->

---
layout: default
class: text-left
title: Sentinel — first AI integration
---

<div class="tag mb-4">.phase_2</div>
<div class="muted text-sm tracking-wide mb-20">first AI/software integration · march · mexico city</div>

<h2 class="text-3xl font-mono mb-10">Sentinel-AI-Occupancy-Monitor</h2>

<div class="chip-row mb-12">
  <span class="chip">YOLOv8-Pose</span>
  <span class="chip">OpenVINO</span>
  <span class="chip">Streamlit</span>
</div>

<div class="text-xl max-w-2xl leading-relaxed">
  IP-camera feed &rarr; real-time pose detection &rarr; live occupancy dashboard.
</div>

---
layout: default
class: text-left
title: Sentinel gallery
---

<div class="tag mb-8">.sentinel</div>

<div class="flex justify-center items-center">
  <img src="/gallery/05.png" alt="sentinel-ai person detection" style="max-height: 380px; max-width: 100%; object-fit: contain;" />
</div>

<!--
Sentinel-AI-Occupancy-Monitor was my first project where I actually shipped a working AI/software integration end-to-end.

The pipeline: IP camera streams to a Python service, YOLOv8-Pose runs detection accelerated by Intel OpenVINO, and a Streamlit dashboard shows live occupancy.

That photo on the right is the actual model output — bounding box + pose keypoints on a person walking through frame.

Sentinel is what told me I could actually do this. Bullseye, the helmet, all of it came after.

[PAUSE 2s]
-->

---
layout: default
class: text-left
title: Bullseye lineage
---

<div class="tag mb-4">.phase_2</div>
<div class="muted text-sm tracking-wide mb-12">marketplace deal-scoring · v1 → v3 in 5 days</div>

<div class="flex items-center gap-4 mb-10">
  <img src="/bullseye-logo.svg" alt="" class="w-12 h-12" />
  <h2 class="text-3xl font-mono">bullseye</h2>
</div>

<div class="flex items-center gap-3 flex-wrap mb-8 text-3xl">
  <span class="chip">salvage-radar</span>
  <span class="dim">→</span>
  <span class="chip">bullseye</span>
  <span class="dim">→</span>
  <span class="chip">bullseye-app</span>
  <span class="text-xl ml-2">★ 3</span>
</div>
<div class="muted text-base font-mono tracking-wide">
  apr 29 &nbsp;·&nbsp; may 2 &nbsp;·&nbsp; may 4
</div>

<!--
This is my favorite story from the project because it shows the rhythm.

On April 29 I shipped version one — salvage-radar — a Craigslist scraper for free and cheap robotics-salvage parts with geo-fencing.

Three days later I'd hit the limits, so I rebuilt it as bullseye — added a local AI agent and comparison data.

Two days after that I rebuilt again as bullseye-app — a polished Windows desktop app scoring Facebook Marketplace listings against eBay sold-comp data, AGPL-3, picked up three GitHub stars in the first week.

[DEMO: open bullseye-app on the laptop, type a search like "drone", show it scoring listings against eBay sold-comps in real time (~1 min)]

The lesson isn't the marketplace bot. It's that I shipped, used what I built, found what was broken, and rebuilt — three times in five days. Iteration only works if each version is actually usable, which means you have to release imperfect work.

Iterate publicly. Ship each version before you start the next.

[PAUSE 2s]
-->

---
layout: default
class: text-left
title: Bullseye gallery
---

<div class="flex justify-between items-center mb-10">
  <div class="tag">.bullseye</div>
  <div class="muted text-sm font-mono tracking-wide">getbullseye.app</div>
</div>

<div class="gallery mosaic-3 max-w-5xl">
  <div class="cell"><img src="/gallery/01.png" alt="bullseye landing" /></div>
  <div class="cell"><img src="/gallery/02.png" alt="bullseye dashboard" /></div>
  <div class="cell"><img src="/gallery/03.png" alt="bullseye featured find" /></div>
</div>

<!--
Three views: the landing page (the big one), the home dashboard with savings + streak, and a featured find — iPhone 16 Pro listing scored 75/100 against eBay sold-comps.

Real product, real users — me as the first user. AGPL-3, three GitHub stars in the first week.

Live at getbullseye.app — anyone in the room can visit it after the talk.
-->

---
layout: default
class: text-left
title: Helmet
---

<div class="tag mb-4">.phase_2</div>
<div class="muted text-sm tracking-wide mb-12 font-mono">helmet · capstone-named project</div>

<div class="two-panel text-heavy">

<div>

<h2 class="text-3xl font-mono mb-10">vl53l8cx-pointcloud-esp32</h2>

<div class="chip-row mb-8">
  <span class="chip">64 zones</span>
  <span class="chip">15 Hz</span>
  <span class="chip dim">1 dead IMU</span>
</div>

<div class="muted text-base max-w-md leading-relaxed">
  live 3D point cloud over serial — sensor data rendered in real time.
</div>

</div>

<div class="flex items-center justify-center">
  <img src="/helmet/pointcloud-v6.gif" alt="live VL53L8CX point cloud" style="max-height: 380px; max-width: 100%; object-fit: contain;" />
</div>

</div>

<!--
This is the project the capstone was nominally about — an assistive-vision helmet for blind users.

The "why": a friend of mine built a haptic and ultrasonic cane for blind users. I helped him with the wiring. After watching him test it, I started thinking about what a helmet could pick up that a cane couldn't — same problem, more spatial information.

[DEMO: bring out ESP32 + ToF sensor on breadboard, plug into laptop USB, run the Python visualizer. wave a hand in front of the sensor and show the live 64-zone depth grid updating (~1 min)]

What works: the ESP32-S3 streams a 64-zone depth grid at 15 Hz over serial; the Python visualizer renders animated time-of-flight rays in real time.

What's stuck: the IMU was internally shorted from the factory (returned), so pose fusion isn't running yet, and I haven't tuned the ToF settings to get clean output.

You can debug your code for hours and the answer is still that the chip is broken.

Hardware quality is a variable you can't fix with skill.

[PAUSE 2s]
-->

---
layout: default
class: text-left
title: Helmet gallery
---

<div class="tag mb-10">.helmet</div>

<div class="gallery mosaic-6 max-w-5xl">
  <div class="cell"><img src="/helmet/02.jpg" alt="full setup with live point cloud" /></div>
  <div class="cell"><img src="/helmet/01.jpg" alt="esp32 + tof breadboard" /></div>
  <div class="cell"><img src="/helmet/03.jpg" alt="tof sensor breakout close-up" /></div>
  <div class="cell"><img src="/helmet/04.jpg" alt="second sensor wired to esp32" /></div>
  <div class="cell"><img src="/helmet/05.jpg" alt="tof breakout other side" /></div>
  <div class="cell"><img src="/helmet/06.jpg" alt="multimeter debug" /></div>
</div>

<!--
The full setup: ESP32-S3 streaming 64-zone depth grid over serial to the Python visualizer on the laptop. The colored point cloud on the screen is the live ToF output.

Close-ups show the SATEL-VL53L8CX sensor breakout being held, the breadboard wiring, and a second sensor under test.
-->

---
layout: default
class: text-left
title: Shorthand
---

<div class="tag mb-4">.phase_2</div>
<div class="muted text-sm tracking-wide mb-12">struggle · wrong abstraction layer</div>

<h2 class="text-3xl font-mono mb-20">shorthand</h2>

<div class="flex justify-start mt-12">
  <carbon-terminal class="text-[10rem]" style="color:#5a5a5a;" />
</div>

<!--
shorthand is the project I struggled with most.

The idea is a shorthand input system — type a two-letter code, an LLM expands it into a full prompt. I built a terminal hook with beam search and LLM reranking. I got it working.

And then I realized most of the optimization I'd just done was polish on the wrong layer. The terminal hook is a tiny piece of the eventual system. The real value lives at system-wide integration — where the shorthand works in any text field, not just the terminal.

All my beam-search and reranking work was going to be obsolete the moment I moved to that layer.

Choose your abstraction layer before you optimize it. Otherwise you're polishing something you're about to replace.

[PAUSE 2s]
-->

---
layout: default
class: text-left
title: cc-discord-remote
---

<div class="tag mb-4">.phase_2</div>
<div class="muted text-sm tracking-wide mb-20">recent · built may 15-16 in 2 days</div>

<div class="two-panel text-heavy">

<div>

<h2 class="text-3xl font-mono mb-10">cc-discord-remote</h2>

<div class="chip-row mb-12">
  <span class="chip">Discord bot</span>
  <span class="chip">Win32 ctypes</span>
  <span class="chip">terminal piping</span>
</div>

<div class="text-xl max-w-2xl leading-relaxed">
  control Claude Code from anywhere, anytime.
</div>

</div>

<div class="flex items-center justify-center">
  <img src="/gallery/06.png" alt="cc-discord-remote on phone" style="max-height: 380px; object-fit: contain;" />
</div>

</div>

<!--
Two weekends ago I realized I couldn't use the official /remote-control feature because my iPhone Claude account is different from the laptop one — Terry's signup. So I built my own.

cc-discord-remote is a Discord bot that pipes commands into Claude Code running in the terminal on my laptop via Win32 ctypes. I can send a Discord message from anywhere and it runs in Claude Code on the laptop, then the response comes back to me in Discord.

It means I can keep work moving when I'm not physically at the laptop. Built in 2 days.
-->

---
layout: default
class: text-left
title: Web design (and this deck)
---

<div class="tag mb-4">.phase_2</div>
<div class="muted text-sm tracking-wide mb-20">writing my own web design course</div>

<h2 class="text-3xl font-mono mb-12">Designing with Claude Code</h2>

<div class="flex items-center gap-3">
  <span class="chip dim">v1</span>
  <span class="chip dim">v2</span>
  <span class="chip">v3 live</span>
</div>

<div class="dim text-sm mt-20 font-mono">
  reubenlavin08.github.io/claude-web-design-guide
</div>

<!--
Alongside the embedded/CV work, I've been writing my own web design course — claude-web-design-guide.

The method is a loop: write the course, take the course on a real project, find what's wrong, rewrite the course. Versions v1 and v2 are archived in place at /v1/ and /v2/ so anyone can watch the method develop.

This slideshow is the test for v3. Every layout, type pair, mosaic grid, and color decision in front of you came out of running the guide on a real artifact — itself.

The deck IS the proof the method works.
-->


---
layout: default
class: text-left
title: Portfolio — 16 repos
---

<div class="tag mb-4">.portfolio</div>
<div class="muted text-sm tracking-wide mb-12 font-mono">16 repos · 3 weeks</div>

<div class="chip-row compact max-w-5xl">
  <span class="chip">bullseye-app</span>
  <span class="chip">vl53l8cx-pointcloud-esp32</span>
  <span class="chip">bullseye</span>
  <span class="chip">cv-robotics-course</span>
  <span class="chip">salvage-radar</span>
  <span class="chip">Sentinel-AI-Occupancy-Monitor</span>
  <span class="chip">cc-discord-remote</span>
  <span class="chip">claude-monitor</span>
  <span class="chip">Sorta</span>
  <span class="chip">email-audit-claude-cowork-skill</span>
  <span class="chip">portfolio</span>
  <span class="chip dim">claude-web-design-guide</span>
  <span class="chip dim">web-design-business</span>
  <span class="chip dim">shorthand</span>
  <span class="chip dim">claude-memory</span>
  <span class="chip dim">openclaw-secure-setup</span>
</div>

<!--
Stepping back from the individual projects, this is what the body of work looks like. Sixteen repositories created during the capstone window — most of them after April 24. A lot of them were nights and weekends.

[Then advance to the gallery slide — let the photos speak for the hands-on work]

[DEMO: pull up github.com/reubenlavin08 in the browser, let the assessor scan the repo list (~30 sec)]

The marketplace lineage I just showed you. The helmet. The CV course. Plus:
- Sentinel-AI-Occupancy-Monitor — YOLOv8-Pose + OpenVINO + Streamlit, real-time occupancy via IP camera
- cc-discord-remote — Discord bot driving Claude Code via Win32 ctypes, built two days ago
- claude-monitor — Pi-screen dashboard scraping CLI usage over WebSocket
- Sorta — AI file organization
- email-audit-claude-cowork-skill — multi-platform Claude skill
- claude-web-design-guide (private) — checklist site for distinctive AI-built sites
- web-design-business (private), shorthand (private), claude-memory (private)

Each one was a different experiment in self-directed AI development — embedded systems, computer vision, marketplace algorithms, Claude Code tooling, low-level automation.

The breadth is the point.
-->

---
layout: default
class: text-left
title: Network
---

<div class="tag mb-16">.network</div>

<div class="grid grid-cols-[140px_1fr] gap-y-8 text-xl">
  <div class="amber">experts</div>
  <div>
    <div>Dr. Yang <span class="muted text-base">— UBC civil engineering</span></div>
    <div class="mt-2">Rhys Rustad-Elliott <span class="muted text-base">— systems software engineer</span></div>
  </div>
</div>

<!--
This is the part of the rubric where I have to be honest about where I fell short and where I made do. The capstone guideline is three mentor meetings and two expert consultations.

I had one mentor meeting, in the first window. My mentor's read of me was that I was smart and didn't need their help, and they said as much. So I ran autonomously — which is what the rest of this deck shows.

On the expert side, I didn't pre-arrange formal consultations. What I did have were two unstructured conversations with practicing experts.

The first was with Dr. Yang, a Professor of Civil Engineering at UBC — we talked about civil engineering and automation, and my projects came up.

The second was with Rhys Rustad-Elliott, a systems software engineer with a master's cum laude from VU Amsterdam in computer security, an undergrad with distinction from Toronto, and several years of industry experience at Google and Elastic working on low-level Linux systems and runtime security — we talked about his education path, his career trajectory, and how he approaches projects.

Both were informal but both were genuine learning moments. In school, I also worked with Mr. Barnum on chemistry and Dr. Holowka on 3D modeling and spindle work.

What I'd do differently: pre-arrange the expert outreach in the Plan of Action, with a written question list before each conversation.
-->

---
layout: center
class: text-center
title: EQ answer
---

<div class="moment-text text-7xl max-w-4xl mx-auto">
  build what isn't in the syllabus.
</div>

<!--
Coming back to the question: How do I transition from a consumer of AI to a developer through self-directed study?

My answer, after three months:

Self-directed AI learning isn't about credentials. It's about choosing problems that force you into territory the courses don't cover.

[PAUSE 3s — stand still, look at the assessor]

The Pro Cert was a starting point. The portfolio — and the people I talked to about it — was the answer.

And inside the portfolio, every project taught a different lesson:
- iterate publicly (Bullseye)
- hardware quality is a variable (helmet)
- when no course exists, design the course (CV course)
- choose your abstraction layer (shorthand)

Those four lessons together are what I actually got from this project. None of them are in the Google curriculum.
-->

---
layout: default
class: text-left
title: What's next
---

<div class="tag mb-12">.next</div>

<div class="space-y-6">
  <div class="text-4xl font-normal whitespace-nowrap" style="letter-spacing:-0.01em; line-height:1.1;">
    train my own AI model on USGS seismic data
  </div>
  <div class="text-3xl font-normal whitespace-nowrap" style="line-height:1.15;">
    continue work on the lidar helmet
  </div>
  <div class="text-xl muted whitespace-nowrap">
    AWS &nbsp;·&nbsp; Anthropic &nbsp;·&nbsp; Coursera SQL
  </div>
  <div class="text-base dim">
    launch + market bullseye
  </div>
  <div class="text-sm dim">
    openclaw red-teaming + prompt-injection research
  </div>
</div>

<!--
What's next, biggest first:

Training my own AI model on USGS seismic data — the original EQ brought full-circle. Statistically-grounded, evidence-based AI work.

Continuing the lidar helmet — replacing the dead IMU, getting pose fusion online, then onto Phase 3 sensor fusion.

Picking up structured courses on the side: AWS Cloud Practitioner, Anthropic's AI courses, a Coursera SQL course — filling in formal credentials alongside the project work.

And launching + marketing bullseye properly so it's not just three GitHub stars but actual users.
-->


---
layout: center
class: text-center
title: The close
---

<div class="moment-text text-7xl max-w-4xl mx-auto">
  still building.
</div>

<!--
The original EQ wasn't wrong. It was just premature — I needed three months of messy applied work before I could even attempt it properly.

The questions keep coming.

[PAUSE 4s — hold the silence. This is your last real line. Then advance.]
-->

---
layout: center
class: text-center
title: Thank you
---

# thank you<span class="amber">.</span>

<div class="muted text-xl mt-16">questions?</div>

<div class="muted text-sm mt-20 tracking-wide font-mono leading-loose">
  github.com/reubenlavin08<br>
  credly.com/users/reuben-lavin
</div>

<!--
"Thank you."  [pause 1s]  "Questions?"

No new content. The thesis landed on slide 13. The close landed on slide 15. This slide just opens the conversation.

Q&A — likely prompts:

Q: "What surprised you most about this project?"
→ How much more I learned from the projects that failed than the ones that worked. The Google certs felt productive but were forgettable. The shorted IMU and the wrong-layer shorthand stories are the two I'll remember.

Q: "If you had another month, what would you do with it?"
→ Pre-arrange three formal expert interviews — questions written out in advance — because the conversations I had informally were valuable enough that more of them, done deliberately, would have changed the direction of several projects. And I'd tune the ToF sensor on the helmet so I could demonstrate clean data.

Q: "Is there something you wanted to explore that you didn't get to?"
→ Training my own model. Every project I shipped used existing AI tools — Claude Code, Google's curriculum, off-the-shelf YOLOv8. I never trained a model from scratch. That's why the USGS seismic idea is the next experiment.

Q: "What's one thing you know now that you wish you'd known at the start?"
→ That credentials and artifacts are different categories of evidence, and the rubric for becoming a developer is the second one. I would have started shipping in March instead of April.

Q: "Vibe-coded custom AI solution?"
→ The Pro Cert description references a vibe-coded custom AI solution. In my case I demonstrated that competency across the broader GitHub portfolio rather than a single dedicated project — most of the 16 repos were built with Claude Code as a coding collaborator.
-->
