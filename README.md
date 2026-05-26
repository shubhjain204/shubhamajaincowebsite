# CA Firm Website for GitHub Pages

Static website starter for a Chartered Accountant firm. It includes:

- Trust-led homepage
- Services section
- WhatsApp lead links using `wa.me`
- Starter SEO content articles
- GitHub Pages-compatible HTML, CSS and JavaScript

## Customize before publishing

1. Replace `Shubham A Jain & Co.` with your firm name.
2. Replace `919999999999` in `script.js` with your WhatsApp number including country code.
3. Update service descriptions, address, registration details and disclaimer.
4. Update the canonical URL in `index.html`.
5. Update `sitemap.xml` and `robots.txt` with your final GitHub Pages URL.
6. Add more posts under `posts/` for organic search traffic.

For detailed editing steps, read `EDITING_GUIDE.md`.

## Publish on GitHub Pages

1. Create a GitHub repository.
2. Upload these files to the repository root.
3. Go to repository `Settings > Pages`.
4. Choose `Deploy from a branch`.
5. Select the `main` branch and `/root`.
6. Save and wait for GitHub to publish the site.

## Local preview

Run:

```bash
node dev-server.js
```

Then open `http://localhost:8000`.
