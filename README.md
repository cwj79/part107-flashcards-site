# FAA Part 107 Study App (static-html-css branch)

Pure static site — no Node, no build step, no server code. Each page is
split into markup / styles / behavior:

- `index.html` + `styles.css` + `script.js` — Flashcards (107 questions, flip cards, mastery tracking)
- `Part107_Exam_Simulator.html` + `exam-styles.css` + `exam-script.js` — Timed 60-question practice exam

The two pages link to each other by relative filename, so keep all six files
in the same folder. Progress is stored in each visitor's browser
(`localStorage`) — there is no shared database, so progress does not sync
across devices.

This branch is deliberately Node-free (see the `main` branch for the Express
version). Open `index.html` directly in a browser, or serve the folder with
any static file server.

## Deploy it (pick one)

**Just open it**
Double-click `index.html`. Everything runs client-side.

**Netlify (easiest hosted option)**
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. You get a live URL immediately (e.g. `random-name.netlify.app`).

**GitHub Pages**
1. Push this branch, then Repo Settings → Pages → Deploy from branch → `static-html-css` / root.
2. Your site is live at `https://<username>.github.io/<repo>/`.

**Any regular web host (cPanel, FTP, Apache, nginx, etc.)**
1. Upload all six files to your `public_html` (or equivalent web root) via
   FTP/SFTP or your host's file manager.
2. Visit your domain — `index.html` loads automatically at the root.

## Custom domain / subfolder

If you upload into a subfolder (e.g. `yoursite.com/part107/`), no changes are
needed — all links are relative.

## Editing questions later

- Flashcard question bank: `QUESTION_BANK` array near the top of `script.js`.
- Exam question bank: `QUESTION_BANK` array near the top of `exam-script.js`.
- Styling: `styles.css` (flashcards) and `exam-styles.css` (exam simulator).
