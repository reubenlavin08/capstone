# Capstone delivery script — May 19, 2026 · 8:30 AM · UCC

Phone-readable. One section per slide. Bullets = topics to hit. Script = what to actually say (paraphrase, don't memorize).

Total: ~22 slides, target 24 min speaking + 6 min Q&A.

---

## 1 — Cover (AI, Robotics and Learning)

**Topics**
- Pre-introduce hook (a recent moment of failure or discovery)
- Name + class
- Essential question (briefly, you'll show it on slide 4)

**Script**
"Before I introduce myself — a few weeks ago I spent seven hours debugging an IMU sensor before realizing the chip was shorted from the factory. The week before that, I'd finished the Google AI Professional Certificate. The gap between those two experiences is what I want to talk about.

My name is Reuben Lavin, WPGA Class of 2026. My essential question: how do I transition from a consumer of AI to a developer through self-directed study?"

**Cue:** [PAUSE 2s — look at the assessor before advancing]

---

## 2 — Agenda

**Topics**
- Past → present → future → Q&A

**Script**
"I'll go past, present, future, and then questions. One breath. Let me move on."

---

## 3 — Past (report cards)

**Topics**
- Grade 8: "needs strategies to persevere" — used to give up easily
- Grade 10: focus + stress
- Grade 12: "mature ownership of learning"
- AP Calc: "needs explanatory clarity" — gap that this presentation is partly closing

**Script**
"In Grade 8 my report card said I needed strategies to persevere. Basically: I gave up easily.

By Grade 10 I was at least self-aware enough to know I needed to find focus and stress strategies.

By Grade 12 Physics, the teacher described what she called 'mature ownership' of my learning. That arc — from giving up to taking ownership — is what made it possible to attempt the kind of self-directed project this capstone asked for.

The gap I still have, named explicitly in my AP Calc feedback, is explanatory clarity. I can do the math; I struggle to communicate the why. This presentation is partly an exercise in closing that gap."

---

## 4 — EQ + POA staircase

**Topics**
- Read the EQ out loud
- Name the 4 milestones (knowledge baseline → pivot → integration → synthesis)
- Set up that the deviation from the plan is where the learning happened

**Script**
"Here's the question I started with: how do I transition from a consumer of AI to a developer through self-directed study?

And here's the plan I wrote in March — four milestones: knowledge baseline, pivot, integration, synthesis.

The plan was real. What I'm going to show you is what actually happened against it. The deviation is where the learning is."

---

## 5 — Hardware lineage (text)

**Topics**
- 4-item chronology: fixed RC car → autonomous w/ ultrasonic → RC airplane → electric scooter teardown
- "To me hardware and software are basically one" — sets up that the capstone built on this foundation

**Script**
"Before any of the AI work, I had a hardware lineage. I fixed my old RC car. Built an autonomous car with ultrasonic obstacle avoidance. Built an RC airplane. Then tore down and rebuilt an electric scooter.

To me hardware and software are basically one. The capstone work I'm about to show you leans on the same hands-on lineage."

---

## 6 — Hardware gallery

**Topics**
- Let the photos do most of the work
- Point at the autonomous LEGO car (top-left) — that's the ultrasonic one
- The motor in the middle row is the RC airplane

**Script**
"Top-left is the autonomous car — LEGO chassis, Arduino, ultrasonic. The motor I'm holding is the airplane. The green PCB is the scooter."

**Cue:** [Don't linger more than ~25 seconds; advance]

---

## 7 — Phase 1 (Google AI Pro Cert)

**Topics**
- 11 courses, 7 days, 8 badges
- Plus the Pro Cert itself
- Optional live demo: Credly profile
- The setup for the next slide — what you DIDN'T have after the credential

**Script**
"Phase one took the EQ literally. To become a developer through self-directed study, I went and got the credential.

Between February 28 and March 5 — seven days — I completed 11 Google Career Certificate courses and earned 8 Credly badges, including the Google AI Professional Certificate."

**Cue:** [Optional DEMO: pull up credly.com/users/reuben-lavin, ~20 sec]

"After seven days I had the credential. What I didn't have was the answer to my question."

---

## 8 — Moment: "theory only gets you so far."

**Topics**
- The realization wasn't dramatic — it crept in
- Google's own description of the Pro Cert says the holder built 20+ artifacts; certificate isn't the proof, artifacts are
- This is where the pivot started

**Script**
"After seven days of clicking through course modules, I'd reached the limits of what passive study could teach me.

And Google's own description of the Pro Cert — the thing I just earned — says it certifies that the holder has built a portfolio of 20+ artifacts. So Google itself was telling me: the certificate isn't the proof. The artifacts are.

The next two months were the artifacts."

**Cue:** [PAUSE 2s before advancing]

---

## 9 — Sentinel text (first AI integration · March · Mexico City)

**Topics**
- First AI/software integration project end-to-end
- Tech stack: YOLOv8-Pose, OpenVINO, Streamlit
- IP camera → pose detection → live dashboard
- Built during spring break in CDMX

**Script**
"Sentinel-AI-Occupancy-Monitor was my first project that shipped a working AI integration end-to-end. I built it during spring break in Mexico City.

An IP camera streams to a Python service, YOLOv8-Pose runs detection accelerated by Intel OpenVINO, and a Streamlit dashboard shows live occupancy.

Sentinel is the project that told me I could actually do this. Bullseye, the helmet, everything else — they came after."

---

## 10 — Sentinel gallery

**Topics**
- That's the actual model output
- Bounding box + pose keypoints on a person walking through frame

**Script**
"That's the live detection output — bounding box and pose keypoints on a person walking through the camera frame."

**Cue:** [Advance after ~15 seconds]

---

## 11 — Bullseye text (chip chain + dates)

**Topics**
- The rhythm: 3 versions in 5 days
- April 29: salvage-radar — Craigslist scraper for free/cheap robotics-salvage parts with geo-fencing
- May 2: bullseye — added local AI agent + comparison data
- May 4: bullseye-app — polished Windows desktop app scoring Marketplace vs eBay sold-comps, AGPL-3, 3 GitHub stars in first week

**Script**
"This is my favorite story from the project because it shows the rhythm.

April 29 I shipped version one — salvage-radar — a Craigslist scraper for free and cheap robotics parts with geo-fencing.

Three days later I'd hit the limits, so I rebuilt as bullseye — added a local AI agent and comparison data.

Two days after that, bullseye-app — a polished Windows desktop app scoring Facebook Marketplace listings against eBay sold-comp data. AGPL-3, three GitHub stars in the first week.

The lesson isn't the marketplace bot. It's that I shipped, used what I built, found what was broken, and rebuilt — three times in five days."

---

## 12 — Bullseye gallery

**Topics**
- Landing page, dashboard, featured find
- Live and free at getbullseye.app
- Optional demo: open bullseye-app on the laptop, type a search, show it scoring real listings

**Script**
"Landing page, the home dashboard with savings and streak, and a featured find — that's an iPhone listing scored 75 out of 100 against eBay sold comps.

Live at getbullseye.app — anyone in the room can visit it after this."

**Cue:** [Optional DEMO: type "drone" in bullseye-app, ~45 sec]

---

## 13 — Helmet text (vl53l8cx-pointcloud-esp32)

**Topics**
- Capstone-named project — the assistive-vision helmet for blind users
- 64-zone ToF, 15 Hz, dead IMU
- What works: depth grid streaming
- What's stuck: pose fusion (waiting on replacement IMU)
- The "why": friend built a haptic cane; I wanted to see what a helmet could pick up that a cane couldn't

**Script**
"This is the project the capstone was nominally about — an assistive-vision helmet for blind users.

A friend of mine built a haptic and ultrasonic cane for blind users. I helped him with the wiring. After watching him test it, I started thinking about what a helmet could pick up that a cane couldn't.

What works: the ESP32-S3 streams a 64-zone depth grid at 15 Hz over serial. The Python visualizer renders the time-of-flight rays in real time.

What's stuck: the IMU was internally shorted from the factory. I returned it. Pose fusion isn't running yet. You can debug your code for hours and the answer is still that the chip is broken."

---

## 14 — Helmet gallery

**Topics**
- The hero shot (top-left) is the live setup — sensor, breadboard, laptop with the point cloud visualization
- Other shots: ToF sensor close-up, second sensor under test, multimeter debugging

**Script**
"Top-left is the full setup running — the sensor on the breadboard, the visualizer on the laptop. The other shots are close-ups of the SATEL-VL53L8CX, the second sensor under test, and a multimeter session debugging the dead IMU."

**Cue:** [Optional DEMO: bring out ESP32 + ToF, plug in, wave hand, show live grid, ~60 sec]

---

## 15 — Shorthand (terminal icon)

**Topics**
- The project I struggled with most
- Idea: type a two-letter code → LLM expands it into a full prompt
- Built it with beam search and LLM reranking
- Realized I'd optimized the wrong abstraction layer — the terminal hook is one tiny piece, the real value lives at system-wide integration
- Lesson: choose your abstraction layer before you optimize it

**Script**
"This is the project I struggled with most. The idea is a shorthand input system — type a two-letter code, an LLM expands it into a full prompt. I built a terminal hook with beam search and LLM reranking. I got it working.

And then I realized most of the optimization I'd just done was on the wrong abstraction layer. The terminal hook is a tiny piece of the eventual system. The real value lives at system-wide integration where the shorthand works in any text field — not just the terminal.

All my beam-search and reranking work was going to be obsolete the moment I moved to that layer.

I optimized before I tested if it worked."

---

## 16 — Web design (Designing with Claude Code)

**Topics**
- Side project from the last 2 weeks
- Writing my own web design course
- v1, v2 archived in place; v3 is live
- "Designing with Claude Code" — practical guide to building distinctive sites without the generic AI aesthetic
- This slideshow itself uses the v3 method

**Script**
"In parallel with the embedded work, I've been writing my own web design course — Designing with Claude Code. It's a method for building distinctive websites without the generic AI aesthetic.

I'm on version three. Versions one and two are archived in place so anyone can watch the method develop.

The deck you're looking at uses the v3 method."

---

## 17 — Portfolio (16 repos · 3 weeks)

**Topics**
- 16 repos in 3 weeks, mostly nights/weekends
- Embedded, computer vision, marketplace algorithms, Claude Code tooling, low-level automation
- "Each one was a different experiment"
- Optional live demo: pull up github.com/reubenlavin08

**Script**
"Stepping back. This is the body of work — sixteen repositories created during the capstone window, most of them after April 24.

The bullseye lineage and the helmet I just showed you. Plus Sentinel. Plus cc-discord-remote, a Discord bot driving Claude Code via Win32 ctypes — built two days ago. Plus claude-monitor — a Pi-screen dashboard. Plus a multi-platform Claude skill. Plus the web design guide.

Each one was a different experiment in self-directed AI development. The breadth is the point."

**Cue:** [Optional DEMO: github.com/reubenlavin08, scroll repo list, ~30 sec]

---

## 18 — Network

**Topics**
- Be honest about the gap: capstone guideline = 3 mentor meetings + 2 expert consultations
- I had 1 mentor meeting (mentor's read: I was smart and didn't need their help)
- 2 informal expert conversations: Dr. Yang (UBC civil engineering) and Rhys Rustad-Elliott (systems software engineer, Google/Elastic)
- What I'd do differently: pre-arrange the expert outreach in the POA with written question lists

**Script**
"This is the part of the rubric where I have to be honest about where I fell short.

The capstone guideline is three mentor meetings and two expert consultations. I had one mentor meeting in the first window — my mentor's read of me was that I was smart and didn't need their help, and they said as much. So I ran autonomously, which is what the rest of this deck shows.

On the expert side, I didn't pre-arrange formal consultations. What I did have were two unstructured conversations. One was with Dr. Yang, a professor of Civil Engineering at UBC. The other was with Rhys Rustad-Elliott, a systems software engineer with a master's from VU Amsterdam in computer security, and several years of industry experience at Google and Elastic.

Both were informal but both were genuine learning moments.

What I'd do differently: pre-arrange the expert outreach in the Plan of Action, with a written question list before each conversation."

---

## 19 — Moment: "build what isn't in the syllabus."

**Topics**
- The answer to the EQ
- Self-directed AI learning isn't about credentials — it's about choosing problems the courses don't cover

**Script**
"Coming back to the question: how do I transition from a consumer of AI to a developer through self-directed study?

My answer, after three months: self-directed AI learning isn't about credentials. It's about choosing problems that force you into territory the courses don't cover.

The Pro Cert was a starting point. The portfolio — and the people I talked to about it — was the answer."

**Cue:** [PAUSE 3s — stand still, look at the assessor]

---

## 20 — Next (cascade)

**Topics**
- Train my own AI model on USGS seismic data — brings the original EQ full circle (statistically-grounded AI)
- Continue work on the lidar helmet (replace dead IMU → pose fusion → phase 3)
- AWS Cloud Practitioner + Anthropic AI courses + Coursera SQL
- Launch + market bullseye

**Script**
"What's next, biggest first.

Train my own AI model on USGS seismic data. The original EQ, full-circle.

Continue the lidar helmet — new IMU, pose fusion, then phase 3 sensor fusion.

Structured courses on the side: AWS Cloud Practitioner, Anthropic's AI courses, a Coursera SQL course.

And launching bullseye properly — not three GitHub stars, actual users."

---

## 21 — Moment: "still building."

**Topics**
- The original EQ wasn't wrong. It was just premature.
- Three months of messy applied work before I could even attempt it properly.
- The questions keep coming.

**Script**
"The original EQ wasn't wrong. It was just premature. I needed three months of messy applied work before I could even attempt it properly.

The questions keep coming."

**Cue:** [PAUSE 4s — hold the silence. Last real line. Then advance.]

---

## 22 — Thank you

**Topics**
- Brief thanks
- Show the links: github.com/reubenlavin08 + credly.com/users/reuben-lavin
- Open it up

**Script**
"Thank you. Questions?"

---

## Q&A prep

Likely questions + 1-sentence answers:

- **"What was hardest?"** → shorthand — I built the wrong layer before testing what users actually wanted from it
- **"What surprised you most?"** → How much of self-directed AI work is about choosing the right problem, not the right technique
- **"Would you do anything differently?"** → Pre-arrange the expert outreach. I had 2 informal conversations; I should have had 4-5 structured ones with written questions
- **"What's the helmet roadmap?"** → New IMU → pose fusion → multi-sensor calibration → bone-conduction audio feedback for the user
- **"Why open-source bullseye?"** → AGPL-3 means anyone can fork it but commercial use requires the same license. Keeps it user-aligned, not enterprise-aligned.
- **"How did you decide what to build?"** → Almost all driven by my own friction. Bullseye started because I was hunting for free salvage parts. Helmet started because a friend built a cane.

---

## Backup phrases if you blank

- "Let me come back to that." (then move on)
- "I'll show you in a second." (transition)
- "The short version is..." (compression escape)
- "I don't have a clean answer to that — what I can say is..." (honest gap fill)
