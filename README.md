# Creator Tax Website

A React + TypeScript + Vite static landing page for Chartered Accountancy services for content creators.

## Content

Website copy draft: [`content.md`](content.md). Confirm placeholders and service claims before publishing.

## Stack

- React + TypeScript + Vite
- Responsive custom CSS
- Static deployment (provider to be selected)
- Direct WhatsApp and email contact links; no backend or lead form

## Run this project on another computer

1. Install Node.js 24 or a compatible current LTS release.
2. Copy this project folder to the other computer, excluding `node_modules`, `dist`, and `.vercel` if desired. Keep `package.json` and `package-lock.json`.
3. In a terminal, open the project folder and run:

```sh
npm ci
npm run dev
```

Vite prints a local URL to open in a browser.

## Deploy to Vercel

1. Install the Vercel CLI on the computer you’ll deploy from, or connect a Git repository to Vercel.
2. From the project folder, run `vercel` and complete the browser sign-in prompts.
3. Use `vercel --prod` when ready to publish.

Vite build output is `dist/`; the project build command is `npm run build`. Never copy account credentials or deployment tokens inside the project folder.

Build production files with `npm run build`; preview the output with `npm run preview`.
