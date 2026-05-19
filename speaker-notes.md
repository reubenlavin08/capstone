# Speaker Notes — Capstone Presentation

For Tuesday May 19, 2026 · 8:30 AM · UCC · ~30 min

**How to use this Monday:** Paste each section into the speaker-notes panel below the matching slide in Google Slides (View → Show speaker notes). Or keep this file open on your phone propped beside your laptop.

**Delivery notes:**
- Don't read these verbatim — they're a safety net for when you blank. Internalize the through-line, glance for cues.
- DEMO cues are marked in **bold caps**. Practice the Alt-Tab transitions Monday.
- Have a screenshot or short video backup for each demo in case the live one fails.
- Total target talk time: ~25–27 min, leaving buffer for Q&A.

---

## Slide 1 — Title
*(no notes — just say your name + the EQ)*

## Slide 2 — Agenda
*(no notes — name the four sections: past, present, future, Q&A)*

## Slide 3 — The Past

> "I'll start with where I came from. In Grade 8, my report card said I needed to develop strategies for persevering through setbacks — basically, I gave up too easily. By Grade 10, I was at least self-aware enough to write that I needed to find strategies to focus and manage stress. By Grade 12 Physics, my teacher described what she called a 'mature ownership' of learning — I'd figured out how to actually push through. That arc — from giving up easily to taking ownership — is what made it possible for me to attempt the kind of self-directed project this capstone asked for. The gap I still have, named explicitly in my AP Calc feedback, is explanatory clarity. I can do the math; I struggle to communicate the why. This presentation is partly an exercise in closing that gap."

## Slide 4 — Where it started: EQ + Plan

> "Here's the question I started with: How do I transition from a consumer of AI to a developer through self-directed study? And here's the plan I wrote in March: four milestones — Knowledge Baseline, Technical Pivot, Integration, Final Synthesis — each with a date and an evidence requirement. The plan was real. What I'm going to show you next is what actually happened against it, and where I deviated. Spoiler: the deviation is where the learning is."

## Slide 5 — Phase 1: the formal path

> "Phase one took the EQ literally. To become a developer through self-directed study, I went and got the credential. Between February 28 and March 5 — seven days — I completed 11 Google Career Certificate courses and earned 8 Credly badges including the Google AI Professional Certificate."

**DEMO: pull up `credly.com/users/reuben-lavin` in the browser, show the badges live (~20 sec).**

> "These are verifiable. The Pro Cert covers AI fundamentals, brainstorming, research, writing, content creation, data analysis, app building, and agent fundamentals — the full Google curriculum for using AI tools effectively. After seven days I had the credential. What I didn't have was the answer to my question."

## Slide 6 — The realization

> "There wasn't one dramatic moment when I realized the credential wasn't enough. It crept in. Google's own description of the Pro Cert — the thing I'd just earned — says it certifies that the holder has built a portfolio of 20+ artifacts and vibe-coded a custom AI solution. So Google itself was telling me: the certificate isn't the proof; the artifacts are. And around that time I kept seeing engineering builds on YouTube — sensor projects, AI-augmented tools, weird hardware — and at some point I started wanting to make those things rather than watch them. The next two months were that."

## Slide 7 — Bullseye lineage

> "This is my favorite story from the project because it shows the rhythm. On April 29 I shipped version one — salvage-radar — a Craigslist scraper for free and cheap robotics-salvage parts with geo-fencing. Three days later I'd hit the limits of what scraping alone could do, so I rebuilt it as bullseye, adding a local AI agent and comparison data. Two days after that I rebuilt again as bullseye-app — a polished Windows desktop app scoring Facebook Marketplace listings against eBay sold-comp data, AGPL-3 open source, free-forever for three saved searches with a Pro tier. Picked up three GitHub stars in the first week."

**DEMO: open bullseye-app on the laptop, type a search like "drone", show it scoring listings live (~1 min).**

> "The lesson isn't the marketplace bot. It's that I shipped, used what I built, found what was broken, and rebuilt — three times in five days. Iteration only works if each version is actually usable, which means you have to release imperfect work."

## Slide 8 — The helmet

> "This is the project the capstone was nominally about — an assistive-vision helmet for blind users. The 'why' is personal: a friend of mine built a haptic and ultrasonic cane to help blind users navigate, and I helped him on the build. Hearing the feedback on that cane, a helmet felt like the natural next step — same problem, more coverage, more spatial information."

**DEMO: bring out the ESP32 + ToF sensor on the breadboard. Plug into laptop USB. Run the Python visualizer. Wave a hand in front of the sensor — show the live 64-zone depth grid updating (~1 min).**

> "What works: the ESP32-S3 streams a 64-zone depth grid at 15 Hz over serial; the Python visualizer renders animated time-of-flight rays in real time. What's stuck: the IMU was internally shorted from the factory, so pose fusion isn't running yet, and I haven't tuned the ToF settings to get clean output."

**Hand the assessor the dead IMU.**

> "The lesson is the one I most needed to learn — hardware quality is a variable you can't fix with skill. You can debug your code for hours and the answer is still that the chip is broken."

## Slide 9 — CV Robotics Course

> "Working on the helmet showed me how much I didn't know about sensor fusion. So I built a course. cv-robotics-course is a self-paced curriculum on computer vision, calibration, and multi-sensor fusion, designed around AI as a first-class learning collaborator. I designed it to be the course I wished existed when I started the helmet."

**DEMO (optional, ~30 sec): pull up the course site in the browser, scroll through the curriculum structure.**

> "Now here's the honest part — I built the curriculum but I haven't taken it yet. There hasn't been time. But the act of structuring the path — figuring out what to learn, in what order, with what tools — was itself the learning. When no course exists for what you want to learn, designing the course is half the work."

## Slide 10 — Compressed Prompt struggle

> "Compressed-prompt is the project I struggled with most. The idea is a shorthand input system — type a two-letter code, an LLM expands it into a full prompt. I built a terminal hook with beam search and LLM reranking to make the decoding more accurate. I got it working. And then I realized most of the optimization I'd just done was polish on the wrong layer. The terminal hook is a tiny piece of the eventual system. The real value lives at system-wide integration — where the shorthand works in any text field on the computer, not just the terminal. All my beam-search and reranking work was going to be obsolete the moment I moved to that layer. The lesson: choose your abstraction layer before you optimize it. Otherwise you're building beautifully on top of something you're about to replace."

## Slide 11 — The whole portfolio

> "Stepping back from the individual projects, this is what the body of work looks like. Sixteen repositories created during the capstone window — most of them in the last three weeks."

**DEMO: pull up `github.com/reubenlavin08` in the browser, let the assessor scan the repo list (~30 sec).**

> "The marketplace lineage I just showed you. The helmet. The CV course. Plus: Sentinel-AI-Occupancy-Monitor, which uses YOLOv8-Pose and OpenVINO with a Streamlit dashboard to count people entering and exiting a room over an IP camera. cc-discord-remote, a Discord bot I built two days ago that drives Claude Code on my laptop from my phone using Win32 console APIs through ctypes. claude-monitor, a Pi-screen dashboard that scrapes the Claude Code CLI's usage data over WebSocket with a CRT-terminal theme. Plus several private repos for a web-design side business, the shorthand keyboard, and memory backups. Each one was a probe into a different facet of self-directed AI development — embedded systems, computer vision, marketplace algorithms, Claude Code tooling, low-level automation. The breadth is the point."

## Slide 12 — Mentor + network

> "This is the part of the rubric where I have to be honest about where I fell short and where I made do. The capstone guideline is three mentor meetings and two expert consultations. I had one mentor meeting, in the first window. My mentor's read of me was that I was smart and didn't need their help, and they said as much. So I ran autonomously — which is what the rest of this deck shows. On the expert side, I didn't pre-arrange formal consultations. What I did have were two unstructured conversations with practicing experts that touched directly on the work. The first was with Dr. Yang, a Professor of Civil Engineering at UBC — we talked about civil engineering and automation, and my projects came up. The second was with Rhys Rustad-Elliott, a systems software engineer with a master's cum laude from VU Amsterdam in computer security, an undergrad with distinction from Toronto, and several years of industry experience at Google and Elastic working on low-level Linux systems and runtime security — we talked about his education path, his career trajectory, and how he approaches projects. Both were informal but both were genuine learning moments. In school, I also worked with Mr. Barnum on chemistry and Dr. Holowka on 3D modeling and spindle work. What I'd do differently if I started this again: pre-arrange the expert outreach in the Plan of Action, with a written question list before each conversation, rather than letting it happen incidentally."

## Slide 13 — What I actually learned

> "Coming back to the question: How do I transition from a consumer of AI to a developer through self-directed study? My answer, after three months: self-directed AI learning isn't really about credentials. It's about choosing problems that force you into territory the courses don't cover. The Pro Cert was a starting point. The portfolio — and the people I talked to about it — was the answer. And inside the portfolio, every project taught a different lesson. Iterate publicly — release imperfect work or you never find what's broken. Hardware quality is a variable you can't fix with skill. When no course exists, design the course. Choose your abstraction layer before you optimize it. Those four lessons together are what I actually got from this project. None of them are in the Google curriculum."

## Slide 14 — What's next

> "Looking forward: in September I'm starting UBC Science. I'll apply for Engineering transfer in January, decisions come back in May, and if it goes well I interview for Engineering Physics in March 2027. That's the academic track. The next project track is bringing the original EQ full circle. I want to train my own AI model on USGS seismic data and use it to test a niche trading algorithm — the kind of statistically-grounded, evidence-based AI work I originally imagined when I wrote my question in March. The original EQ wasn't wrong. It was just premature — I needed three months of messy applied work before I could even attempt it properly. The approach keeps probing."

## Slide 15 — Thank you / Q&A

*(no notes — just invite questions, thank them, mention the github + credly links visible on the slide)*

---

## Q&A — likely assessor prompts (pre-canned answers)

The assessor context guide gave assessors these example questions. Prepared answers:

**"What surprised you most about this project?"**
> "How much more I learned from the projects that failed than the ones that worked. The Google certs felt productive but were forgettable. The shorted IMU and the wrong-layer optimization on compressed-prompt are the two stories I'll remember from this year."

**"If you had another month, what would you do with it?"**
> "I'd pre-arrange three formal expert interviews — questions written out in advance — because the conversations I had informally were valuable enough that more of them, done deliberately, would have changed the direction of several projects. And I'd tune the ToF sensor on the helmet so I could actually demonstrate clean data, not just live streams."

**"Is there something you wanted to explore that you didn't get to?"**
> "Training my own model. Every project I shipped used existing AI tools — Claude Code, Google's curriculum, off-the-shelf YOLOv8. I never trained a model from scratch. That's why the USGS seismic idea is the next probe."

**"What's one thing you know now that you wish you'd known at the start?"**
> "That credentials and artifacts are different categories of evidence, and the rubric for becoming a developer is the second one. I would have started shipping in March instead of April."

---

## What about the Pro Cert "vibe-coded custom AI solution"?
If they ask:
> "The Pro Cert description references a vibe-coded custom AI solution. In my case I demonstrated that competency across the broader GitHub portfolio rather than a single dedicated project — most of the 16 repos I've shown you were built with Claude Code as a coding collaborator."

Honest, defensible, doesn't pretend you built something specific to earn the cert.
