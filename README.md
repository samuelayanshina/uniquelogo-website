# Uniquelogo Engineering Limited — Company Profile Website

A single-page digital company profile for **Uniquelogo Engineering Limited** (RC 1784404).
Built with plain HTML, CSS and JavaScript — no build step, no dependencies. Open it, host it, done.

## Run it locally

Just open `index.html` in a browser.

For a proper local server (recommended, so fonts/paths behave exactly like production):

```bash
# Python 3
python3 -m http.server 5500
# then visit http://localhost:5500
```

Or in VS Code: install the **Live Server** extension, right-click `index.html` → *Open with Live Server*.

## Project structure

```
uniquelogo-website/
├── index.html          # all page content
├── css/
│   └── style.css       # all styling
├── js/
│   └── main.js         # nav toggle, FAQ accordion, copy button
├── assets/             # real assets (logo, director photos, certificates)
└── images/             # PHOTO PLACEHOLDERS to replace — see below
```

## Replace the placeholder photos

Every file in `images/` is a labelled placeholder. Drop a real photo in with the **same filename**
(keep the `.svg` name OR update the `src` in `index.html` to your new extension) and it appears instantly.

| File                    | Where it shows          | Ideal photo                                   | Size (min)   |
|-------------------------|-------------------------|-----------------------------------------------|--------------|
| `images/about-1.svg`    | About — tall left       | Completed build / team on site (portrait)     | 720 × 1040   |
| `images/about-2.svg`    | About — top right       | Office interior / finished space (landscape)  | 760 × 460    |
| `images/about-3.svg`    | About — bottom right    | Construction / timber work (landscape)        | 760 × 560    |
| `images/services-1.svg` | Services — tall left    | Someone working on plans / fitting (portrait) | 600 × 1040   |
| `images/cta-bg.svg`     | CTA band background     | Team / clients, wide (will be darkened)       | 2000 × 640   |
| `images/footer-bg.svg`  | Footer background       | Building / cityscape, dark, wide              | 2000 × 760   |
| Hero image              | Top of page             | Wide shot of a completed building/interior    | 1920 × 1080  |

**Tip:** if you save real photos as `.jpg`, update the matching `src="images/about-1.svg"` to
`src="images/about-1.jpg"` in `index.html`. Same for the hero — see the "Add a hero project photo"
block in `index.html` and replace that placeholder `<div>` with an `<img>`.

## Still to fill in

- **Bank details** — in `index.html`, search for `[ Bank name ]` and `[ 0000000000 ]`.
- **Testimonials** — sample quotes are marked; replace names, titles and text (search `Sample Client`).
- **Social links** — footer icons currently point to `#`; replace with real profile URLs.
- **Service action links** — buttons like "Discuss a design ↗" point to `#contact`; repoint when
  dedicated pages exist.

## Deploy (free)

- **Netlify:** drag the whole `uniquelogo-website` folder onto https://app.netlify.com/drop
- **GitHub Pages:** push to GitHub → repo Settings → Pages → deploy from `main` branch, root.
- **Custom domain:** point `uniquelogo.org.ng` at the host per their DNS instructions.

---
© Uniquelogo Engineering Limited · RC 1784404 · TIN 23886857-0001
