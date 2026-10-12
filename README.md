# Alaa El Deen Bakery Website

A website project developed by **Mohammad Jawad Chahrour** under **TECHNOLOGIC**.

- **Developer:** [Mohammad Jawad Chahrour](https://github.com/mohamedjawadchahrour)
- **Company:** [TECHNOLOGIC](https://github.com/technologic-hub)
- **Live Website:** [View Website](https://mohamedjawadchahrour.github.io/alaa-el-deen-bakery/)

This project is part of TECHNOLOGIC's web development and technical solutions portfolio.

A static, Arabic-first (right-to-left) website for **Alaa El Deen Bakery**: hero with photo carousel, product photos, price list, about section with address, and contact section with call and WhatsApp links.

It is plain HTML, CSS and JavaScript. There is no backend, database, build step or package to install, so it works as-is on GitHub Pages.

## Project structure

```
alaa-el-deen-bakery/
├── index.html              Main page (entry point)
├── .nojekyll               Tells GitHub Pages to serve files as they are
├── README.md               This file
└── assets/
    ├── css/style.css       All styling (colors, typography, responsive layout)
    ├── js/main.js          Menu data, contact settings, carousel, lightbox, mobile menu
    └── images/             The bakery photos used by the page (11 JPEG files)
```

All paths in `index.html` are relative (for example `assets/css/style.css`), so the site works at a project URL such as `https://USERNAME.github.io/alaa-el-deen-bakery/`.

## Deploy with GitHub Pages

1. Create a new repository named `alaa-el-deen-bakery` (do not reuse your profile repository).
2. Upload **the contents of this folder** (including the `assets` folder and `.nojekyll`) so that `index.html` sits at the root of the repository.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select the `main` branch and the `/ (root)` folder, then save.
5. After a minute or two the site is live at `https://USERNAME.github.io/alaa-el-deen-bakery/`.

## Editing content later

Everything below is in `assets/js/main.js`:

- **`CONFIG`** (top of the contact settings): phone, WhatsApp number, address, map link, opening hours, Instagram and Facebook. An empty value is hidden on the page.
- **`PRODUCTS`**: the four menu sections (المناقيش، المعجنات، البيتزا، المشروبات). Each item has a name `n` and prices `p`. A number is shown as Lebanese pounds (`70000` becomes `70,000 ل.ل.`) and a text value is shown as written. An item with `hidden:true` is not shown to visitors.
- Items still waiting for name confirmation are kept in `PRODUCTS` with `hidden:true`. Anyone who opens the page source can still read them.

Photos live in `assets/images/`. To replace a photo, keep the file name or update the matching path in `index.html`.

## External dependency

- **Google Fonts** (`fonts.googleapis.com`, `fonts.gstatic.com`): the fonts *Reem Kufi* (headings) and *Tajawal* (text) are loaded from Google when the page opens. If a visitor's device cannot reach Google Fonts, that device shows its own system font instead. To avoid this, download the two font files, place them in `assets/fonts/` and declare them with `@font-face` in `style.css`.
- WhatsApp and telephone buttons open `wa.me` and `tel:` links. No data is sent anywhere by the site itself.

## Footer credit

Powered by Mohamed Jawad Chahrour
