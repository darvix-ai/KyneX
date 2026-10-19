# KyneX Scalper / ProfitSplash Autotrades

A two-page static site for GitHub Pages. No package installation or build step.

## Deploy
1. Create a GitHub repository and upload the CONTENTS of this folder (index.html must be at the repository root, not nested inside another folder).
2. In Settings → Pages, select Deploy from a branch, choose main and /(root), and save.
3. Open the URL GitHub provides after deployment finishes.
4. Test both pages, Telegram links, screenshots, and embeds at mobile and desktop widths.

All local asset and navigation paths are relative so repository-subdirectory deployment works.

## Before publishing
- Confirm assets/config.js → telegramHandle. The provisional value is theegreatdavid, taken from the old page.
- Add approved testimonial screenshots and official widget code.
- Review report names: some external reports may retain older names.
- Confirm trial timing, expiry closure procedures, and private pre-trial authorization.
- Get appropriate legal/compliance review for your audience and jurisdiction. The provided risk text is a draft, not legal approval.
- Do not collect or commit trading credentials, investor passwords, or any secret.

## Add testimonials
1. Upload approved, privacy-redacted images to assets/testimonials/.
2. Edit the testimonials array in assets/config.js:

    testimonials: [
      { src: "assets/testimonials/01.webp", alt: "Client feedback about account setup assistance" },
      { src: "assets/testimonials/02.webp", alt: "Client feedback about account manager support" }
    ],

Use honest descriptive alt text. Do not invent quotes or claim typical results. Obtain publication permissions. Optimize image size but keep text readable.

The home carousel uses the first 20 entries. The results page shows all entries in batches of 12. Eight-second autoplay, swipe, previous/next, pause/play, reduced-motion support, and click-to-enlarge are included. Rotation stops at the final home slide. A more-experiences link is always available. No fabricated testimonials ship with this project; empty states appear until images are added.

## Add ShowMyTrades widgets
No embed integration has been invented. Paste official provider embed code directly inside:
- index.html: div#home-account-widget
- results.html: div#report-widget-1 through div#report-widget-4

Search the HTML for SHOWMYTRADES comments. Keep full-report links outside the widget intact. If official code includes a shared loader script, follow provider instructions and avoid loading it repeatedly. Review any supplied scripts before inserting. Test cross-origin iframe width/height and mobile behaviour. This project does not use an iframe URL guessed from the report URL.

The empty widget containers show a clean report-link fallback. No performance numbers are hardcoded.

To add another results account, duplicate an article.widget-frame.report in results.html, give its widget a unique id, and add another report in config.js. data-report-name and data-report-link use zero-based report indices.

## Application messages
Telegram links are generated in assets/main.js, using the handle in config.js. Trial, partnership, and purchase have different prefilled messages. No server, form, analytics, or credential collection is included. Telegram client handling of prefilled text should be tested on your target devices.

## Commercial terms
The public page deliberately introduces the two continuation paths without publishing the entire commercial agreement. Full terms are private after qualification. A private trial authorization is still needed before any live trading access or trial activation. Do not infer that later private terms cure an inaccurate public claim.

Known operational details: three trading days, automatic expiry, closure of positions opened by KyneX, no automatic charge, client-selected compatible broker, FX Blue connection or hosted setup.

Still to resolve outside the code: trial timezone and exact expiry; inability-to-close procedure; whether trial days count toward partnership pricing; connection terms after year one; accounting formula; purchase-connection loss recovery; secure credential handling; authenticated payment instructions.

## Files
- index.html: landing page
- results.html: reports and gallery
- assets/styles.css: all styling
- assets/config.js: editable reports, contact, screenshots, timing
- assets/main.js: links, carousel, gallery, accessible dialog
- .nojekyll: static GitHub Pages deployment

## Browser support and testing
Designed for current desktop/mobile browsers supporting HTML dialog and modern JavaScript. No dependency downloads or external fonts. Check keyboard focus, Escape-to-close, pause controls, mobile swiping, reduced-motion preference, slow-network widget fallback, and real screenshot readability. Third-party widgets can have their own accessibility limitations.
