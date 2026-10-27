# Laura Lynch — personal website

Four editable, responsive pages based on Laura's approved editorial designs:

- `index.html`: ivory homepage with blush destinations.
- `about.html`: aubergine personal page, candid biography, and approved fuller photo.
- `work.html`: oxblood portfolio with factual proof points.
- `lkco.html`: separate Belize Luxe teal palette and one consulting CTA.
- `contact.html`: utility contact page with an email-draft form.

## Preview

No build step, package installation, or framework is required. Open `index.html` in a browser, or run `python3 -m http.server 8000` from this directory and visit `http://localhost:8000`.

## Edit

Shared styles are in `assets/styles.css`; mobile navigation and email-draft behavior are in `assets/site.js`. Page text is directly in each HTML file. All wordmarks link home. Portfolio categories are informational, without misleading case-study arrows.

Typography uses locally hosted Bodoni Moda (regular 400, bold 800, italic 700) and DM Sans (400), with system fallbacks. Headline and italic weights are specified separately to follow the approved editorial mockups. Font files are included in assets/fonts, so the design does not depend on Google Fonts responding at runtime. See assets/fonts/*-OFL.txt for font licensing.

The approved retouched portrait is displayed by CSS cropping its existing source mockup (`assets/about-photo-source.jpg`). This preserves the approved photo, including both hands, without another generated reconstruction. The percentage offsets live in `.portrait img`.

## Contact

The form validates locally and opens an email draft to `lauralynchcx@gmail.com`. It does **not** send, store, or claim to submit messages. Visitors can also use the direct email link. Replace this with the user's Jotform URL or embed once that URL is available. LK&Co preselects its inquiry category.

## Hosting

This commit saves the project to GitHub only. It does not enable GitHub Pages or publish the website. The relative links support a repository-based Pages URL when hosting is later enabled.

## Before publishing

- Confirm the public contact email.
- Review the included résumé PDF at `assets/laura-lynch-resume.pdf` before publishing. It is based on the saved full-experience résumé, with the confirmed 13.5-year total. Its contact details are preserved from that source. Rebuild it with `python3 scripts/generate_resume.py` (requires ReportLab).
- Supply the Jotform URL if direct form delivery is preferred.
- Review on desktop and mobile, including portrait framing and final wording.

Website copy, portrait, and design assets belong to Laura Lynch. No third-party source images from Pinterest are included.

## Publish with Netlify

Import this GitHub repository as an existing project. Use branch `main`, leave the build command empty, and set the publish directory to `.`. No framework or dependencies are required. Netlify supplies a public HTTPS URL; connect a custom domain afterward if desired.
