# TechNova E-Commerce Demo (Frontend Prototype)

A modern, responsive e-commerce visual prototype for a premium computer store.

## Features

- React + Vite frontend
- Tailwind CSS styling with dark futuristic theme
- Smooth animations and page transitions with Framer Motion
- Lucide React icons
- Fully responsive layout (desktop/tablet/mobile)
- Pages:
  - Home
  - Products
  - Product Details
  - Cart (visual only)
- Reusable components and clean structure
- Demo-only catalog and cart interactions (no backend/payment/auth)

## Demo Product Catalog

Includes visual demo products such as:

- Ultra Gaming Laptop X15
- Titan Desktop Pro RTX
- Nova Mechanical Keyboard
- Quantum Wireless Mouse
- Vision 4K Monitor
- Phantom RTX Graphics Card
- SpeedCore Processor
- RGB Gaming Headset

## Project Structure

```text
src/
  components/
  context/
  data/
  layout/
  pages/
  App.jsx
  main.jsx
```

## Run Locally

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite.

## Production Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repository to GitHub.
2. Go to [Vercel](https://vercel.com/) and import the repository.
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Click **Deploy**.

## Deploy to Netlify

1. Push this repository to GitHub.
2. Go to [Netlify](https://www.netlify.com/) and add a new site from Git.
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Click **Deploy site**.

---

> This project is a **visual prototype only** for client presentation.
