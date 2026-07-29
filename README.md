# FAA Part 107 Study App

Two static pages, plain HTML/CSS/JS, no build step:

- `index.html` — Flashcards (107 questions, flip cards, mastery tracking)
- `Part107_Exam_Simulator.html` — Timed 60-question practice exam

They link to each other by relative filename, so keep them in the same folder.
Progress is stored in each visitor's browser (`localStorage`) — there is no
shared database, so progress does not sync across devices.

## Run it on your Node server

A minimal Express static server (`server.js`) is included so this drops
straight onto an existing Node deployment.

```bash
npm install
npm start
```

Serves on `http://localhost:3001` by default (override with `PORT=xxxx npm start`).
Point your reverse proxy (nginx, Caddy, PM2, whatever you already run in front
of your other Node services) at that port like any other app on the box.

No database, no env vars beyond `PORT` — it's just `express.static` serving
the two HTML files.

## Other ways to deploy (if you ever want to skip Node entirely)

**Netlify (easiest, no server needed)**
1. Go to https://app.netlify.com/drop
2. Drag this whole folder onto the page.
3. You get a live URL immediately (e.g. `random-name.netlify.app`).

**GitHub Pages**
1. Create a new GitHub repo and push these files to it.
2. Repo Settings → Pages → Deploy from branch → `main` / root.
3. Your site is live at `https://<username>.github.io/<repo>/`.

**Any regular web host (cPanel, FTP, etc.)**
1. Upload `index.html` and `Part107_Exam_Simulator.html` to your `public_html`
   (or equivalent web root) via FTP/SFTP or your host's file manager.
2. Visit your domain — `index.html` loads automatically at the root.

## Custom domain / subfolder

If you upload into a subfolder (e.g. `yoursite.com/part107/`), no changes are
needed — all links are relative.

## Editing questions later

Both files are self-contained; open `index.html` in a text editor and look for
the `QUESTION_BANK` array near the top of the `<script>` block to add, edit,
or remove questions.
