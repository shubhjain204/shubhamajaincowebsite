# Editing Guide

This is a static GitHub Pages website. There is no admin panel yet, so updates are made by editing files and pushing them to GitHub.

## Firm name

Update these files:

- `index.html`
- `script.js`
- Article pages inside `posts/`

Search for:

```text
Shubham A Jain & Co.
```

## WhatsApp number

Update only this line in `script.js`:

```js
const WHATSAPP_NUMBER = "919999999999";
```

Use country code without `+`. For India, a number looks like:

```js
const WHATSAPP_NUMBER = "9198XXXXXXXX";
```

## Brand logo

The header logo image is saved at:

```text
assets/ca-logo-transparent.png
```

It was created from the CA logo linked from ICAI's official `Logo for CAs` page, with the white background removed for display in the header. Use it only in line with ICAI's current logo guidelines.

## Services

Services are listed in `index.html` inside:

```html
<section class="section" id="services">
```

Copy one `<article class="service-card">...</article>` block to add a new service.

## Educational articles

Articles live inside the `posts/` folder.

To add a new article:

1. Copy `post-template.html`.
2. Rename it, for example `gst-registration-guide.html`.
3. Edit the title, meta description, heading and article content.
4. Add a link to the new article in the Knowledge Hub section of `index.html`.
5. Add the new URL to `sitemap.xml`.

## SEO checklist

For every page, keep these updated:

- `<title>` around 50-60 characters
- `<meta name="description">` around 140-160 characters
- `<link rel="canonical">` with the final page URL after publishing
- One clear `<h1>` per page
- Internal links to related services or articles
- A WhatsApp CTA where the reader naturally needs help

## Future upgrade

If you want non-technical editing later, add a CMS such as Decap CMS, Sanity or WordPress. For now, direct file editing is the simplest path for GitHub Pages.
