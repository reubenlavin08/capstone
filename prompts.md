# Capstone — what to say on each slide

May 19, 2026 · 8:30 AM · UCC. Phone-readable. Each slide has bullets = the things to actually say, in order. Paraphrase, don't memorize.

Target: 24 min speaking + 6 min Q&A.

---

## 1 — Cover

- A few weeks ago I spent seven hours debugging a sensor before realizing the chip was shorted from the factory.
- The week before that, I'd finished the Google AI Professional Certificate.
- The gap between those two experiences is what I want to talk about.
- I'm Reuben Lavin, WPGA Class of 2026.
- My essential question: how do I transition from a consumer of AI to a developer through self-directed study?

[PAUSE 2s — look at the assessor before advancing]

---

## 2 — Agenda

- Past, present, future, then questions.

---

## 3 — Past (report cards)

- Four real lines from my report cards across high school.
- Grade 8: I'd quit when things got hard.
- Grade 10: I'd put work off and panic at the end.
- Grade 12 Physics: I'm running my own projects and meeting my own deadlines.
- AP Calc, this year: I can do the math, but I struggle to communicate the why. That's the gap I'm working on right now — including up here.
- That arc is what made a self-directed capstone possible at all.

---

## 4 — EQ + POA

- The question: how do I transition from a consumer of AI to a developer through self-directed study?
- The plan, four milestones:
  - 01 knowledge baseline — the Google AI Pro Cert
  - 02 pivot — Sentinel
  - 03 integration — bullseye
  - 04 synthesis — the lidar helmet
- What I'm about to show you is what actually happened against that plan. The deviation is where the learning is.

---

## 5 — Phase 1 (Google AI Pro Cert)

- Phase one took the EQ literally. To become a developer through self-directed study, I went and got the credential.
- Feb 28 to Mar 5 — seven days.
- 11 Google Career Certificate courses, 8 Credly badges, including the Google AI Professional Certificate.
- (Optional: open credly.com/users/reuben-lavin in the browser, show the badges, ~20s.)
- After seven days I had the credential. What I didn't have was the answer to my question.

---

## 6 — "theory only gets you so far."

- Seven days of clicking through course modules taught me something, but it was passive.
- I was curious about the real thing.
- I wanted to be hands-on — to actually make something instead of watching videos about other people making things.
- The next two months were that.

[PAUSE 2s before advancing]

---

## 7 — Hardware lineage (text)

- Before any of the AI work, I had a hardware lineage.
- Fixed my old RC car.
- Built an autonomous LEGO car with ultrasonic obstacle avoidance.
- Built an RC airplane.
- Tore down and rebuilt an electric scooter.
- Hardware and software are basically one thing to me. The capstone work leans on this lineage.

---

## 8 — Hardware gallery

- Top-left is the autonomous car — LEGO chassis, Arduino, ultrasonic.
- The looping clip is one of my plane test flights.
- The green PCB is the scooter.

[Advance after ~25s]

---

## 9 — Sentinel (text)

- Sentinel was my first project that shipped a working AI integration end-to-end.
- Built during spring break in Mexico City.
- A camera feeds a program that runs a person-detection AI, accelerated by an Intel chip.
- A live dashboard shows who's in the room and where they are.
- Sentinel was the project that told me I could actually do this.
- Bullseye and the helmet came from the confidence Sentinel gave me.

---

## 10 — Sentinel gallery

- That's the live AI output — boxes around the people the system has found, dots tracing how they're standing.

[Advance after ~15s]

---

## 11 — Bullseye (text)

- My favorite story from the project because it shows the rhythm.
- April 29 — version one, salvage-radar — a tool that scraped Craigslist for free and cheap robotics parts near me.
- Three days later I'd hit its limits, so I rebuilt as bullseye — added an AI agent and price-comparison data.
- Two days after that, bullseye-app — a Windows desktop app that scores Facebook Marketplace listings against the actual selling prices of similar items on eBay.
- Open-source. Three GitHub stars in the first week.
- The lesson isn't the marketplace bot. It's that I shipped, used it, found what was broken, and rebuilt — three times in five days.

---

## 12 — Bullseye gallery

- Landing page, home dashboard with savings and streak, and a featured find — an iPhone scored 75 out of 100 against eBay sold comps.
- Live at getbullseye.app — anyone in the room can visit it after this.

(Optional demo: open bullseye-app, type "drone", show real scoring, ~45s.)

---

## 13 — Helmet (text)

- This is the project the capstone was nominally about — an assistive-vision helmet for blind users.
- The "why": a friend of mine built a vibrating cane for blind users. I helped him wire it.
- After watching him test it, I started thinking about what a helmet could pick up that a cane couldn't — same problem, but with more information about what's around you.
- What works: a small chip in the helmet streams a depth map of the surrounding area about fifteen times a second to a laptop. The laptop draws what the sensor is seeing in 3D, live.
- What's stuck: the motion sensor was broken from the factory. I returned it. So the part that tells the helmet which way you're facing isn't running yet.
- You can debug your code for hours and the answer is still that the chip is broken.
- Lesson: hardware quality is a variable you can't fix with skill.

(Optional demo: sensor on breadboard, wave hand, show live depth map on laptop, ~60s.)

---

## 14 — Helmet gallery

- Top-left is the full setup running.
- The other shots are close-ups of the sensor, the second sensor under test, and a multimeter session debugging the dead motion-sensor chip.

---

## 15 — Shorthand

- This is the project I struggled with most.
- The idea: type a two-letter code, an AI expands it into a full prompt for you.
- I built the version that runs inside a terminal program — including the logic that picks the best expansion to suggest. Got it working.
- Then I realized I'd been polishing the wrong piece. The terminal version is one tiny corner. The real value is the version where the shorthand works in any text field, anywhere on your computer.
- Once I move to that version, the polish I just did is gone.
- Lesson: figure out where the real value lives before you start polishing.

[PAUSE 2s]

---

## 16 — cc-discord-remote

- Two days ago I built cc-discord-remote.
- The official remote-control for my AI assistant didn't work for me because my phone account and my laptop account are different.
- So I built my own. It's a Discord bot. I send a message from anywhere; it types the message into the AI on my laptop; the response comes back to me in Discord.
- Two-day build.
- Lesson: when a tool doesn't fit your setup, build the bridge yourself.

---

## 17 — Web design (and this deck)

- In parallel with the embedded work, I've been writing my own web design course — Designing with Claude Code.
- The method is a loop: write the course, take the course on a real project, find what's wrong, rewrite the course.
- v1 and v2 are archived in place so anyone can watch the method develop. v3 is live.
- The deck you're looking at uses the v3 method.

---

## 18 — Portfolio (16 repos · 3 weeks)

- This is the body of work — sixteen repositories created during the capstone window, most after April 24.
- Embedded systems, computer vision, marketplace algorithms, AI-assistant tooling, low-level automation.
- The breadth is the point.

(Optional demo: github.com/reubenlavin08, scroll, ~30s.)

---

## 19 — Network

- Two informal conversations with practicing experts.
- Dr. Yang — Civil Engineering professor at UBC. He looked at my projects and talked about how they connected to his lab's work:
  - automation in construction
  - building affordability
  - drones with stereo vision and computer vision to autonomously inspect the safety of buildings and bridges
- That kind of real-world handle on this work is something I couldn't have gotten from coursework.
- Rhys Rustad-Elliott — systems software engineer with industry experience at Google and Elastic. We talked about:
  - his work ethic and curiosity
  - the wide range of computer science projects he's done
  - how he picks what to work on next
- What I'd do differently: pre-arrange these in the Plan of Action with a written question list before each conversation.

[If asked about mentor meetings: I had one early on. My mentor read me as someone who didn't need much help and said so, so I ran autonomously. What I'd change is pre-arranging the meetings with written questions.]

---

## 20 — "build what isn't in the syllabus."

- Coming back to the question.
- Self-directed AI learning isn't about credentials. It's about choosing problems that force you into territory the courses don't cover.
- The Pro Cert was a starting point. The portfolio was the answer.

[PAUSE 3s — stand still, look at the assessor]

---

## 21 — What's next

- Biggest first.
- Train my own AI model on USGS seismic data — the original EQ, full-circle.
- Continue the lidar helmet — new motion sensor, then full sensor fusion.
- Structured courses on the side: AWS Cloud Practitioner, Anthropic's AI courses, Coursera SQL.
- Launch bullseye properly — not three GitHub stars, actual users.
- Red-teaming work on openclaw.

---

## 22 — "still building."

- The original EQ wasn't wrong. It was premature. I needed three months of messy applied work before I could even attempt it properly.
- The questions keep coming.

[PAUSE 4s — hold the silence. Then advance.]

---

## 23 — Outtakes / build

- On the left, the timelapse of me building the RC plane.
- On the right, a second flight test of that same plane.

[~10s, then advance]

---

## 24 — Outtakes / AI tooling

- Two views of claude-monitor — a project I built to track my own AI usage on a small screen on my desk.
- On the left, the live dashboard.
- On the right, the "touch grass" nudge — it yells at me when I cross a usage budget.

[~10s, then advance]

---

## 25 — Thank you

- "Thank you. Questions?"
- Links shown on slide: github.com/reubenlavin08, credly.com/users/reuben-lavin.

---

## Q&A — likely questions

- **What was hardest?** → Shorthand. I built the wrong layer before testing what users actually wanted.
- **What surprised you most?** → How much of self-directed AI work is choosing the right problem, not the right technique.
- **Would you do anything differently?** → Pre-arrange expert outreach. Two informal conversations should have been four or five structured ones with written questions.
- **Helmet roadmap?** → Replace the motion sensor → get pose tracking working → multi-sensor calibration → audio feedback for the user through bone-conduction headphones.
- **Why open-source bullseye?** → AGPL keeps it user-aligned, not enterprise-aligned. Anyone can fork it; commercial use requires the same license.
- **How did you decide what to build?** → Driven by my own friction. Bullseye started because I was hunting for free salvage parts. Helmet started because a friend built a cane.
- **What about the mentor meetings?** → I had one early on. My mentor read me as someone who didn't need much help and said so, so I ran autonomously.

---

## Backup phrases if you blank

- "Let me come back to that."
- "I'll show you in a second."
- "The short version is..."
- "I don't have a clean answer to that — what I can say is..."
