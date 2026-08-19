# DECISIONS

## 1. Why this ingestion strategy over the obvious alternative I rejected?

I selected **Part 2 — The Premium Home Page**, not the scraper/ingestion track. Therefore, there is no ingestion strategy in this submission, and I did not pretend to build a scraping pipeline. The assessment explicitly allows choosing one track rather than doing both. I used the available time to focus on the responsive VLC redesign, interaction quality, motion, and a working product demonstration.

If I had selected Part 1, I would have documented source fallback, pacing, session management, rate-limit handling, and resilience to markup changes separately. Those concerns are outside the scope of this implementation.

## 2. One trade-off I made under the time limit, and what I’d do with a real week.

The main trade-off was spending more time on **visual polish and interaction design** instead of building a larger set of production-level features. The page includes the 3D VLC cone, ambient/hover interactions, GSAP motion, smooth scrolling, a functional video player, responsive layouts, platform links, and a small Easter egg.

With a full week, I would spend additional time on performance and accessibility: optimize the 3D scene and video loading further, test more browsers and devices, add reduced-motion handling, improve keyboard/focus states across all interactive elements, and perform a more extensive 390px/desktop regression pass. I would also replace remaining approximations with official VLC assets where appropriate.

## 3. Where did you use AI tools, and what did you personally verify or change afterward?

I used AI tools primarily as a development assistant for generating and refining React/Next.js components, SCSS/Tailwind styling, GSAP/Three.js interactions, responsive fixes, debugging TypeScript issues, and thinking through the page structure.

I did not treat generated code as automatically correct. I personally integrated the code into the project, ran the application and production build, checked the page at mobile and desktop widths, verified navigation anchors and external links, tested the video player, checked for horizontal overflow, and iterated on the spacing, navbar, footer, cone animation, hover/parallax behavior, and responsive player UI. I also changed suggestions that did not fit the actual design or implementation.

The final implementation reflects those manual checks and changes rather than being a direct copy of AI-generated output.
