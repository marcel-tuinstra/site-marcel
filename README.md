# 🌐 site-marcel

Personal portfolio site for Marcel Tuinstra, built with Nuxt 4 and Nuxt UI Pro.

Deployed at: https://marcel.tuinstra.dev

## 🚀 Stack

- Nuxt 4
- Nuxt UI Pro
- Nuxt Content (YAML/Markdown via `content/`)
- nuxt-og-image (available for dynamic OG images if needed)
- motion-v
- VueUse

## 📁 Content

- `content/index.yml` – homepage content
- `content/projects/*.yml` – project list entries
- `content/about.yml` – about page content
- `content/blog/*.md` – blog posts (if enabled)

## 🔎 SEO

- Canonical base URL: `runtimeConfig.public.siteUrl` in `nuxt.config.ts`
- Global meta defaults: `app/app.vue`
- Social preview image: `public/images/og-light.png` (replace with a fresh screenshot of the site)

## 📦 Setup

```bash
npm install
npm run dev
```

## 🔒 License

This project is not licensed for reuse.
Feel free to explore the code, but please do not copy or repurpose without permission.
