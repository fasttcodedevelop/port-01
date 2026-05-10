# Portfolio Template — Setup Guide

A clean, modern portfolio template for fresh graduates and students.
Built with HTML, CSS, and JavaScript — no frameworks required.

---

## 📁 File Structure

```
portfolio-template/
├── index.html          ← Main page (edit content here)
├── css/
│   ├── theme.css       ← ⭐ EDIT THIS for colors & fonts
│   └── style.css       ← DO NOT EDIT (layout & components)
├── js/
│   └── main.js         ← DO NOT EDIT (animations & interactions)
├── img/
│   ├── photo.jpg       ← Replace with your photo
│   ├── project-1.jpg   ← Replace with project screenshots
│   ├── project-2.jpg
│   └── project-3.jpg
├── resume.pdf          ← Replace with your CV
└── README.md           ← This guide
```

---

## ✏️ Step-by-Step Customization

Open `index.html` in a text editor (VS Code recommended).
Each section has a comment like `<!-- STEP 1 -->` to guide you.

### Step 1 — Change Page Title
```html
<title>Your Name — Your Role</title>
```

### Step 2 — Change Your Name in Navbar
```html
<div class="nav-logo">Your Name.</div>
```

### Step 3 — Change Hero Content
```html
<h1 class="hero-name">Your Name</h1>
<p class="hero-role">Fresh Graduate — <span>Your Major</span></p>
<p class="hero-desc">Write a short 1-2 sentence bio about yourself.</p>
```

### Step 4 — Replace Profile Photo
- Prepare a square photo (recommended: 500×500px or larger)
- Rename it to `photo.jpg`
- Place it in the `img/` folder, replacing the existing file

### Step 5 — Edit About Section
Fill in your personal information:
```html
<span class="info-value">Your Full Name</span>
<span class="info-value">B.Sc. Computer Science</span>
<span class="info-value">City, Country</span>
```

### Step 6 — Edit Skills
For each skill, change the name and percentage:
```html
<div class="skills-card" data-persen="85">
  ...
  <div class="skills-name">Your Skill Name</div>
  ...
  <span class="angka" data-target="85">0</span>%
```
> `data-persen` and `data-target` must be the same number.

### Step 7 — Edit Projects
For each project card:
1. Replace `img/project-1.jpg` with a screenshot of your project
2. Set `href` in Live Demo and GitHub to your actual links
3. Change the project name and description

### Step 8 — Edit Contact Info
```html
<a href="mailto:your@email.com">your@email.com</a>
<a href="https://wa.me/62XXXXXXXXXX">  ← your phone number
<a href="https://linkedin.com/in/username">  ← your LinkedIn
<a href="https://github.com/username">  ← your GitHub
```

### Step 9 — Replace Resume
- Rename your CV file to `resume.pdf`
- Place it in the root folder, replacing the existing file

---

## 🎨 How to Change Colors

Open `css/theme.css` and edit the color values:

```css
:root {
  --accent:  #00583c;   /* main color — buttons, highlights */
  --accent2: #a3c4b9;   /* secondary color */
  --bg:      #ffffff;   /* page background */
  --dark:    #111111;   /* text color */
}
```

**Ready-to-use color themes inside theme.css** — just copy & paste!

---

## 🔤 How to Change Font

1. Go to [fonts.google.com](https://fonts.google.com)
2. Pick a font → click **Get font** → **Get embed code**
3. Replace the `<link>` tag in `<head>` of `index.html`
4. In `css/theme.css`, change:
```css
body {
  font-family: 'Your New Font', sans-serif;
}
```

---

## 🚀 How to Put It Online (Free)

### Option 1 — Netlify Drop (Easiest, no account needed)
1. Go to [netlify.com/drop](https://netlify.com/drop)
2. Drag and drop your entire project folder
3. Get a free link like `yourname.netlify.app` instantly

### Option 2 — GitHub Pages (Free, professional)
1. Create a GitHub account at [github.com](https://github.com)
2. Create a new repository
3. Upload all files
4. Go to Settings → Pages → Deploy from branch
5. Your site will be live at `username.github.io/repo-name`

---

## ❓ Need Help?

Contact the developer:
- WhatsApp:   +6285169462354
- Email:      fasttcodedev@gmail.com

---

*Template created by FastCodeDev*
