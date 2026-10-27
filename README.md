# Harsh Chauhan — HogallalaOS Portfolio

React + Vite + TypeScript + Framer Motion + Lucide. Deploys to GitHub Pages automatically.

## Customize
Edit **`src/data.ts`**: profile, skills (status: `interest` / `learning` / `verified`), projects, timeline and achievements. Sample/placeholder items are labelled on the page.

## Run locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

## Deploy to GitHub Pages
1. Create an empty repo on GitHub (e.g. `portfolio`), no README.
2. In this folder:
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/harrshc/portfolio.git
git push -u origin main
```
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. The **Deploy to GitHub Pages** workflow runs on every push to `main`. Your site: `https://harrshc.github.io/portfolio/`.

(Vite uses a relative base `./`, so it works under any repo name or custom domain. `public/404.html` is the Linux-style 404.)

## Verify the live site
- [ ] Actions tab shows a green run
- [ ] Site loads with fonts and no console 404s
- [ ] Boot intro plays once and Esc skips it
- [ ] Nav links scroll; lab commands `help`, `skills` work
- [ ] GitHub, LinkedIn and email links open correctly
- [ ] `/<repo>/nonsense` shows the custom 404
- [ ] Mobile layout and FX toggle behave
