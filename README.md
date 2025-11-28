# Socrepho Web

Professional website for Socrepho - Mobile App Development Company.

---

## 🚀 Quick Start

### View the Website
Simply open `index.html` in your browser:
- Double-click `index.html`, or
- Right-click → Open with → Your Browser

### Local Development (Optional)
For a better development experience with live reload:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if installed)
npx serve
```
Then open `http://localhost:8000` in your browser.

---

## 📁 File Structure

```
socrpeho_web/
│
├── index.html              ← Main webpage (edit content here)
│
├── css/
│   └── styles.css          ← All styling (colors, animations, layout)
│
├── js/
│   └── main.js             ← JavaScript (scroll effects, interactions)
│
├── assets/
│   └── images/             ← Add your images here
│
├── .cursorrules            ← Coding standards and rules
│
└── README.md               ← This file
```

---

## 🎨 Customization Guide

### Change Colors
Edit `css/styles.css` → Look for `:root` section at top:
```css
:root {
    --color-accent-primary: #6366f1;    /* Main brand color */
    --color-accent-secondary: #8b5cf6;  /* Secondary color */
    --color-bg-primary: #0a0a0f;        /* Background */
}
```

### Change Fonts
Fonts are loaded from Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Sora..." rel="stylesheet">
```

### Edit Content
Open `index.html` and find these sections:
- **Navigation**: `<nav class="navbar">`
- **Hero (Top)**: `<section class="hero">`
- **Services**: `<section id="services">`
- **Portfolio**: `<section id="work">`
- **About**: `<section id="about">`
- **Contact**: `<section id="contact">`
- **Footer**: `<footer class="footer">`

### Add Project Images
1. Add images to `assets/images/`
2. In `index.html`, replace the gradient backgrounds in work cards:
```html
<!-- Before -->
<div class="work-image" style="background: linear-gradient(...)">

<!-- After -->
<div class="work-image">
    <img src="assets/images/project1.jpg" alt="Project Name">
</div>
```

---

## 📱 Responsive Design

The website is designed to work on:
- 🖥️ Desktop (1200px+)
- 💻 Tablet (768px - 1200px)
- 📱 Mobile (< 768px)

Responsive styles are at the bottom of `css/styles.css`.

---

## ⚡ Performance Tips

1. **Images**: Compress images before adding (use [TinyPNG](https://tinypng.com))
2. **Keep it simple**: Avoid adding unnecessary JavaScript libraries
3. **Test locally**: Always preview changes in browser before deploying

---

## 🛠️ Technology

| Component | Technology |
|-----------|------------|
| Structure | HTML5 |
| Styling | CSS3 (Vanilla) |
| Interactivity | JavaScript (Vanilla) |
| Fonts | Google Fonts (Sora, Space Mono) |
| Animations | CSS Animations + Intersection Observer |

**No build tools required!** Just edit and refresh.

---

## 📝 Notes

- Main language: **English**
- Design style: **Dark theme with gradient accents**
- Animation style: **Subtle, professional**

---

## 🤝 Contact

For questions about this website template, edit the contact section in `index.html`.

# socrepho

