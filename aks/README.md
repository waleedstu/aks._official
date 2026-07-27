# AKS Official — Storefront

Marketing homepage for **AKS Official**, a Pakistani custom DTF printing and
oversized apparel brand.

Static build: plain HTML, CSS and vanilla JS. No framework, no build step,
no dependencies beyond Google Fonts.

## Structure

```
index.html              markup
assets/css/style.css    all styles (design tokens at the top, under :root)
assets/js/app.js        product/review data + all interactions
assets/img/             product photography (currently empty — see below)
```

## Running locally

Open `index.html` directly, or serve it:

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Deploying

**GitHub Pages** — Settings → Pages → deploy from `main`, root folder.
Good for design review and client sign-off.

**cPanel** — upload the contents of this folder to `public_html/`.

Note that Pages is static-only. The cart, checkout, order storage and design
file uploads all need a backend; this repo is the front end only.

## What works

The DTF builder is functional, not a mockup:

- Drag-and-drop or click to upload, with a 20 MB size check
- Front/back toggle — the upload lands on whichever side is active
- Colour swatches repaint the tee preview live
- Size is validated before add-to-cart

Also wired: mobile drawer, cart counter, wishlist toggles, product rail with
arrow scrolling, review carousel with scroll-linked dots, newsletter
validation, and scroll reveals that respect `prefers-reduced-motion`.

## Editing content

Products, reviews and the Instagram grid render from arrays at the top of
`assets/js/app.js` — `PRODUCTS`, `REVIEWS`, `IG`. Edit those; the markup
follows.

Colours, fonts, radii and spacing are CSS custom properties under `:root`
in `assets/css/style.css`.

## Before launch

- [ ] **Replace placeholder art.** Every visual is generated SVG standing in
      for photography — hero garment, collection tiles, product shots, IG grid.
      Drop real images into `assets/img/`.
- [ ] **Set the WhatsApp number.** Links currently point at a bare `wa.me/`.
- [ ] **Confirm the Instagram handle.** Links use `aks._officiall`; the footer
      in the original design read `@aks_officiall` (one `l`). These differ.
- [ ] **Decide on the anime collection.** One product was renamed from
      "Demon Slayer Tee" to "Ronin Series 7" — Demon Slayer is licensed
      Aniplex/Ufotable IP, and selling it by name invites takedowns from
      Shopify, Meta and payment processors. The wider anime collection carries
      the same exposure. Worth a deliberate decision rather than a default.
- [ ] **Keep this repo private** while it holds unreleased brand work.

## Browser support

Modern evergreen browsers. Uses `IntersectionObserver`, CSS custom properties,
`aspect-ratio` and `backdrop-filter`.
