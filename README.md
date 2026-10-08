# Muzammil Hussain | Portfolio Website

A modern, clean and fully responsive personal portfolio built with plain **HTML5, CSS3 and JavaScript**. No frameworks or build tools needed, just open `index.html`.

🌐 **Live Demo:** _add your GitHub Pages link here_

## ✨ Features

- Fully responsive layout for mobile, tablet and desktop
- Light and dark mode toggle (remembers your choice)
- Typing text animation in the hero section
- Auto-sliding **Projects slider** with arrows, dots and pause on hover
- Sticky navbar with active section highlight and scroll progress bar
- Smooth scroll, scroll-reveal animations and back-to-top button
- Contact section with Gmail compose link and one-click **Copy Email**

## 🛠️ Built With

- HTML5
- CSS3 (Flexbox, Grid, CSS variables)
- JavaScript (vanilla)

## 📁 Project Structure

```
├── index.html    # Page structure and sections
├── style.css     # Styling, dark mode, responsive rules
├── script.js     # Animations, slider, theme toggle, PROJECTS list
├── photo.jpg     # Profile photo
└── README.md
```

## 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/hussainusmani258-spec/portfolio-website.git

# 2. Open the folder
cd portfolio-website

# 3. Open index.html in your browser
```

## 🔄 Updating Pinned Projects

Open `script.js`. At the top there is a `PROJECTS` list. Each project looks like this:

```js
{icon:"food", lang:"HTML", name:"food-website",
 desc:"A clean, responsive food website...",
 tags:["HTML5","CSS3","Forms"]},
```

- **Edit:** change `name` (exact GitHub repo name), `desc` and `tags`.
- **Add:** copy one full `{ ... },` block and paste it in the list.
- **Remove:** delete the full `{ ... },` block.
- **Icons available:** `youtube`, `building`, `facebook`, `login`, `food`, `factory`, `code`.

The slider and the "View on GitHub" links update automatically.

## 🌍 Deploy on GitHub Pages

1. Go to **Settings → Pages**
2. Under **Branch**, select `main` and `/ (root)`, then **Save**
3. Your site will be live at `https://hussainusmani258-spec.github.io/portfolio-website/`

## 📬 Contact

- **GitHub:** [hussainusmani258-spec](https://github.com/hussainusmani258-spec)
- **Email:** mmunirhussainusmani@gmail.com

---

⭐ If you like this project, give it a star!
