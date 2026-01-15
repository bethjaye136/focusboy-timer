<div align="center">

# 🎮 FocusBoy

**Your Retro Productivity Pal**

  <p>
    <a href="INSERT_GITHUB_PAGES_LINK_HERE">
      <img src="https://img.shields.io/badge/PLAY_NOW-73c700?style=for-the-badge&logo=game-and-watch&logoColor=black" alt="Play Now" />
    </a>
  </p>

  <p>
    <a href="#-features">Features</a> •
    <a href="#-under-the-hood">How it Works</a> •
    <a href="#-embed-in-notion">Notion Setup</a>
  </p>

  </div>

---

## 👾 About The Project

**FocusBoy** is a nostalgic take on the Pomodoro technique, blending the "Y2K Handheld" aesthetic with professional-grade timekeeping logic.

I built this because most web timers are either boring or inaccurate. FocusBoy is designed to be **embedded**, **customizable**, and **drift-free**. It's not just a timer; it's a desk companion.

## ✨ Features

- **⏱️ Drift-Free Precision:** Unlike standard JS timers that lose sync, FocusBoy uses `Date.now()` delta-checks to ensure 100% accuracy, even if the tab is inactive.
- **🎨 Dynamic Theming:** 4 switchable "Skins" (Atomic Purple, Teal, classic Grey, Yellow) powered by CSS Variables.
- **💾 Smart State:** Handles browser interruptions gracefully without losing your progress.
- **📱 Widget Ready:** Floating, responsive layout designed perfectly for Notion dashboards or OBS overlays.

## 🧠 Under the Hood

This wasn't just about CSS; the logic needed to be solid.

### The "Drift" Fix

Standard `setInterval` loops often drift by a few milliseconds when the browser main thread is busy. To fix this, I implemented a **Delta-Time** approach:

1.  Calculates the exact `Target Time` (Timestamp) immediately upon start.
2.  The loop constantly checks the difference between `Now` and `Target`.
3.  This ensures the timer is accurate to the millisecond, regardless of CPU load.

### CSS Architecture

Instead of loading multiple stylesheets, I used **CSS Custom Properties (Variables)** scoped to the `<body>`.

    /* Example of the Skin System */
    body.skin-1 { --screen-color: #73c700; }
    body.skin-2 { --screen-color: #007198; }

This allows the entire color scheme (borders, text, SVGs) to update instantly with a single class change in JavaScript.

## 🚀 Embed in Notion

FocusBoy is built to live in your workspace.

1.  Copy the live link: `[INSERT YOUR LINK HERE]`
2.  Go to your Notion page.
3.  Type `/embed` and paste the link.
4.  Resize the block until the Gameboy fits perfectly!

## 🛠️ Tech Stack

- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white) **Semantic Structure**
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white) **Flexbox & Variables**
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E) **ES6+ Logic**

---

<div align="center">
  <sub>Built with 💚 by [Your Name]</sub>
</div>
