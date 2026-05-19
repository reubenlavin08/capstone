# Capstone delivery script — May 19, 2026 · 8:30 AM · UCC

Phone-readable. One section per slide. Topics = the points to hit. Script = what to actually say (paraphrase, don't memorize).

Target: 24 min speaking + 6 min Q&A.

Deck order matches slides.md.

---

## 1 — Cover (AI, Robotics and Learning)

**Topics**
- Hook: 7-hour IMU debug → chip was shorted from factory
- Week before that: finished Google AI Pro Cert
- Name + class + EQ in one breath

**Script**
"A few weeks ago I spent seven hours debugging an IMU before realizing the chip was shorted from the factory. The week before that, I'd finished the Google AI Professional Certificate. The gap between those two experiences is what I want to talk about.

I'm Reuben Lavin, WPGA Class of 2026. My essential question: how do I transition from a consumer of AI to a developer through self-directed study?"

**Cue:** [PAUSE 2s — look at the assessor before advancing]

---

## 2 — Agenda

**Topics**
- past → present → future → q&a

**Script**
"Past, present, future, then questions."

---

## 3 — Past (report cards)

**Topics**
- gr 8 quote = I'd quit when things got hard
- gr 10 quote = I'd procrastinate and panic
- gr 12 quote = I'm running my own projects and meeting my own deadlines
- ap calc quote = I can do the math but struggle to communicate the why — that's the gap I'm working on right now

**Script**
"Four real lines from my report cards across high school.

Grade 8: I'd quit when things got hard.

Grade 10: I'd put work off and panic at the end.

Grade 12 Physics: I'm running my own projects and meeting my own deadlines.

AP Calc, this year: I can do the math, but I struggle to communicate the why. That's the gap I'm working on right now — including up here.

That arc is what made a self-directed capstone possible at all."

---

## 4 — EQ + POA

**Topics**
- EQ: consumer of AI → developer through self-directed study
- 01 knowledge baseline = Google AI Pro Cert
- 02 pivot = Sentinel, first end-to-end AI integration
- 03 integration = bullseye lineage
- 04 synthesis = lidar helmet
- The deviation from the plan is where the learning happened

**Script**
"The question: how do I transition from a consumer of AI to a developer through self-directed study?

The plan, four milestones: knowledge baseline — the Google AI Pro Cert. Pivot — Sentinel. Integration — bullseye. Synthesis — the lidar helmet.

What I'm going to show you is what actually happened against that plan. The deviation is where the learning is."

---

## 5 — Phase 1 (Google AI Pro Cert)

**Topics**
- Feb 28 – Mar 5 (seven days)
- 11 courses, 8 Credly badges, the Google AI Professional Certificate
- I took the EQ literally — to become a developer, I went and got the credential
- Optional demo: credly.com/users/reuben-lavin

**Script**
"Phase one took the EQ literally. To become a developer through self-directed study, I went and got the credential.

Between February 28 and March 5 — seven days — I completed 11 Google Career Certificate courses and earned 8 Credly badges, including the Google AI Professional Certificate."

**Cue:** [Optional DEMO: open credly.com/users/reuben-lavin, ~20s]

"After seven days I had the credential. What I didn't have was the answer to my question."

---

## 6 — Moment: "theory only gets you so far."

**Topics**
- The Pro Cert's own description says the holder built 20+ artifacts
- Google itself told me the certificate isn't the proof — the artifacts are
- This is where the pivot started

**Script**
"Google's own description of the Pro Cert says the holder built a portfolio of 20+ artifacts. So Google itself was telling me the certificate isn't the proof. The artifacts are.

The next two months were the artifacts."

**Cue:** [PAUSE 2s before advancing]

---

## 7 — Hardware lineage (text)

**Topics**
- Pre-capstone hands-on lineage the AI work leans on
- 01 fixed my old RC car
- 02 built an autonomous car (LEGO + Arduino + ultrasonic)
- 03 built an RC airplane
- 04 tore down + rebuilt an electric scooter

**Script**
"Before any of the AI work, I had a hardware lineage. Fixed my old RC car. Built an autonomous LEGO car with ultrasonic obstacle avoidance. Built an RC airplane. Tore down and rebuilt an electric scooter.

Hardware and software are basically one thing to me. The capstone work leans on this lineage."

---

## 8 — Hardware gallery

**Topics**
- Top-left: autonomous LEGO car (ultrasonic)
- Top-right: RC car parts
- Middle: RC plane build timelapse
- Bottom: scooter motherboard

**Script**
"Top-left is the autonomous car — LEGO chassis, Arduino, ultrasonic. The motor is the airplane. The green PCB is the scooter."

**Cue:** [Advance after ~25s]

---

## 9 — Sentinel (text · first AI integration · March · Mexico City)

**Topics**
- First project that shipped a working AI integration end-to-end
- Stack: YOLOv8-Pose + OpenVINO + Streamlit
- IP camera → pose detection → live dashboard
- Built during spring break in CDMX

**Script**
"Sentinel was my first project that shipped a working AI integration end-to-end. Built during spring break in Mexico City.

IP camera streams to a Python service, YOLOv8-Pose runs detection accelerated by Intel OpenVINO, and a Streamlit dashboard shows live occupancy.

Sentinel told me I could actually do this. Bullseye and the helmet came after."

---

## 10 — Sentinel gallery

**Topics**
- Live model output: bounding box + pose keypoints

**Script**
"That's the live detection output — bounding box and pose keypoints on a person walking through the camera frame."

**Cue:** [Advance after ~15s]

---

## 11 — Bullseye (text · v1 → v3 in 5 days)

**Topics**
- Apr 29: salvage-radar — Craigslist scraper, free/cheap robotics-salvage, geo-fencing
- May 2: bullseye — added local AI agent + comparison data
- May 4: bullseye-app — Windows desktop app scoring Marketplace vs eBay sold-comps, AGPL-3, 3 stars first week
- The lesson is the rhythm: ship, use it, find what's broken, rebuild — three times in five days

**Script**
"This is my favorite story from the project because it shows the rhythm.

April 29 — version one, salvage-radar — a Craigslist scraper for free and cheap robotics parts with geo-fencing.

Three days later I'd hit its limits, so I rebuilt as bullseye — added a local AI agent and comparison data.

Two days after that, bullseye-app — a Windows desktop app scoring Facebook Marketplace listings against eBay sold-comp data. AGPL-3, three GitHub stars in the first week.

The lesson isn't the marketplace bot. It's that I shipped, used it, found what was broken, and rebuilt — three times in five days."

---

## 12 — Bullseye gallery

**Topics**
- Landing page · dashboard · featured find
- Live at getbullseye.app — anyone in the room can visit it after this
- Optional demo: open bullseye-app, type a search, show real scoring

**Script**
"Landing page, the home dashboard with savings and streak, and a featured find — an iPhone listing scored 75 out of 100 against eBay sold comps.

Live at getbullseye.app."

**Cue:** [Optional DEMO: bullseye-app, type "drone", ~45s]

---

## 13 — Helmet (text · vl53l8cx-pointcloud-esp32)

**Topics**
- The capstone-named project — assistive-vision helmet for blind users
- Why: friend built a haptic cane; I helped wire it; wanted to see what a helmet could pick up that a cane couldn't
- 64-zone ToF, 15 Hz, ESP32-S3 streaming over serial
- What works: live depth-grid streaming + Python visualizer
- What's stuck: IMU shorted from factory; pose fusion not running yet
- Big lesson: hardware quality is a variable you can't fix with skill

**Script**
"This is the project the capstone was nominally about — an assistive-vision helmet for blind users.

A friend built a haptic and ultrasonic cane for blind users. I helped him wire it. After watching him test it, I started thinking about what a helmet could pick up that a cane couldn't.

What works: the ESP32-S3 streams a 64-zone depth grid at 15 Hz over serial. The Python visualizer renders the time-of-flight rays in real time.

What's stuck: the IMU was shorted from the factory. I returned it. Pose fusion isn't running yet. You can debug your code for hours and the answer is still that the chip is broken."

**Cue:** [Optional DEMO: ESP32 + ToF on breadboard, wave hand, show live grid, ~60s]

---

## 14 — Helmet gallery

**Topics**
- Top-left: live setup — sensor on breadboard + laptop running visualizer
- Other cells: SATEL-VL53L8CX close-ups, second sensor under test, multimeter session

**Script**
"Top-left is the full setup. The other shots are close-ups of the SATEL-VL53L8CX, the second sensor under test, and a multimeter session debugging the dead IMU."

---

## 15 — Shorthand

**Topics**
- The project I struggled with most
- Idea: two-letter code → LLM expands it into a full prompt
- Built a terminal hook with beam search + LLM reranking
- Realized I'd optimized the wrong abstraction layer — the terminal hook is one tiny piece; real value is system-wide integration
- Lesson: choose your abstraction layer before you optimize it

**Script**
"This is the project I struggled with most. Idea: type a two-letter code, an LLM expands it into a full prompt. I built a terminal hook with beam search and LLM reranking. Got it working.

Then I realized most of the optimization I'd just done was on the wrong abstraction layer. The terminal hook is a tiny piece. The real value lives at system-wide integration, where the shorthand works in any text field.

All my beam-search work was going to be obsolete the moment I moved to that layer.

Choose your abstraction layer before you optimize it."

---

## 16 — cc-discord-remote

**Topics**
- Built May 15-16, in 2 days
- Discord bot that pipes commands into Claude Code on my laptop via Win32 ctypes
- Lets me keep work moving when I'm not at the laptop
- Born from the constraint that the official /remote-control didn't fit my account split

**Script**
"Two days ago I built cc-discord-remote. It's a Discord bot that pipes commands into Claude Code running on my laptop, via Win32 ctypes. I send a message from anywhere; it runs on the laptop; the output comes back to me in Discord.

It means I can keep work moving when I'm not physically at the laptop. Built in two days."

---

## 17 — Web design (and this deck)

**Topics**
- Side project from the last 2 weeks
- Writing my own web design course — "Designing with Claude Code"
- v1 and v2 archived in place at /v1/ and /v2/; v3 is live
- Hand-rolled portfolio site also uses the method
- This deck is the v3 method's first real test

**Script**
"In parallel with the embedded work, I've been writing my own web design course — Designing with Claude Code. The method is a loop: write the course, take the course on a real project, find what's wrong, rewrite the course.

v1 and v2 are archived in place so anyone can watch the method develop. v3 is live.

The deck you're looking at uses v3."

---

## 18 — Portfolio (16 repos · 3 weeks)

**Topics**
- 16 repos in 3 weeks, nights/weekends
- Embedded · computer vision · marketplace · Claude Code tooling · low-level automation
- Optional demo: github.com/reubenlavin08

**Script**
"This is the body of work — sixteen repositories created during the capstone window, most after April 24.

Embedded, computer vision, marketplace algorithms, Claude Code tooling, low-level automation. The breadth is the point."

**Cue:** [Optional DEMO: github.com/reubenlavin08, scroll, ~30s]

---

## 19 — Network

**Topics**
- Rubric: 3 mentor meetings + 2 expert consultations
- I had 1 mentor meeting; mentor's read was that I didn't need their help
- 2 informal expert conversations: Dr. Yang (UBC civil engineering); Rhys Rustad-Elliott (systems software engineer, Google/Elastic)
- What I'd do differently: pre-arrange expert outreach in the POA with written question lists

**Script**
"Where I fell short and where I made do.

I had one mentor meeting. My mentor's read of me was that I was smart and didn't need their help, and they said as much. So I ran autonomously.

On the expert side, I didn't pre-arrange formal consultations. I had two informal conversations: Dr. Yang, a UBC Civil Engineering professor; and Rhys Rustad-Elliott, a systems software engineer with a master's from VU Amsterdam in computer security and several years at Google and Elastic.

Both were informal but genuine. What I'd do differently: pre-arrange the expert outreach in the Plan of Action, with written questions before each conversation."

---

## 20 — EQ answer: "build what isn't in the syllabus."

**Topics**
- The answer to the EQ, after three months
- Self-directed AI learning isn't about credentials — it's about choosing problems the courses don't cover

**Script**
"Coming back to the question.

Self-directed AI learning isn't about credentials. It's about choosing problems that force you into territory the courses don't cover.

The Pro Cert was a starting point. The portfolio was the answer."

**Cue:** [PAUSE 3s — stand still, look at the assessor]

---

## 21 — What's next

**Topics**
- Train my own AI model on USGS seismic data (EQ → full circle)
- Continue the lidar helmet — new IMU → pose fusion → phase 3
- AWS Cloud Practitioner · Anthropic AI courses · Coursera SQL
- Launch + market bullseye properly
- openclaw red-teaming + prompt-injection research

**Script**
"Biggest first.

Train my own AI model on USGS seismic data. The original EQ, full-circle.

Continue the lidar helmet — new IMU, pose fusion, then phase 3.

Structured courses on the side: AWS Cloud Practitioner, Anthropic's AI courses, Coursera SQL.

Launch bullseye properly — not three GitHub stars, actual users.

And red-teaming work on openclaw."

---

## 22 — Close: "still building."

**Topics**
- The original EQ wasn't wrong — just premature
- Three months of messy applied work before I could attempt it properly
- The questions keep coming

**Script**
"The original EQ wasn't wrong. It was premature. I needed three months of messy applied work before I could even attempt it properly.

The questions keep coming."

**Cue:** [PAUSE 4s — hold the silence. Then advance.]

---

## 23 — Outtakes

**Topics**
- Stuff that didn't make a slide of its own
- claude-monitor live dashboard footage
- early ToF point cloud (before rewrite)
- touch-grass nudge from claude-monitor
- bench scenes from the project window

**Script**
"Outtakes — claude-monitor running live on the Pi dashboard, the original ToF point cloud before I rewrote the visualizer, the touch-grass nudge that yells at me when I cross a usage budget, and the project bench."

**Cue:** [~10s, then advance]

---

## 24 — Thank you

**Topics**
- Thanks · github.com/reubenlavin08 · credly.com/users/reuben-lavin · open it up

**Script**
"Thank you. Questions?"

---

## Q&A prep

- **"What was hardest?"** → shorthand — I built the wrong layer before testing what users actually wanted
- **"What surprised you most?"** → How much of self-directed AI work is choosing the right problem, not the right technique
- **"Would you do anything differently?"** → Pre-arrange expert outreach. 2 informal → should have been 4-5 structured with written questions
- **"Helmet roadmap?"** → New IMU → pose fusion → multi-sensor calibration → bone-conduction audio
- **"Why open-source bullseye?"** → AGPL-3 keeps it user-aligned, not enterprise-aligned
- **"How did you decide what to build?"** → Driven by my own friction — bullseye started hunting salvage parts; helmet started watching a friend test his cane

---

## Backup phrases if you blank

- "Let me come back to that."
- "I'll show you in a second."
- "The short version is..."
- "I don't have a clean answer to that — what I can say is..."
