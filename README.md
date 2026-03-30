# NZ Public Holidays — Astro + StarWind UI

Your complete guide to public holidays in Aotearoa New Zealand. Blazing fast informational site updated for 2026–2027.

🌐 **Live site:** [https://juancruzlunatech.github.io/Public_Holidays_NZ/](https://juancruzlunatech.github.io/Public_Holidays_NZ/)

---

## ✨ Features
- **Modern UI**: Built with [Astro](https://astro.build/) and [StarWind UI](https://starwind.dev/).
- **Dynamic Routing**: Automatic pages for 2026 and 2027 holidays.
- **Countdown**: Real-time ticker for the next national holiday.
- **Dark Mode**: Integrated sleek dark mode toggle.
- **Mobile Responsive**: Perfect performance on all devices.
- **SEO Optimized**: Meta tags, structured data, and clean architecture.

---

## 🚀 Project Structure

```text
/
├── src/
│   ├── components/    # StarWind UI components (buttons, cards, etc.)
│   ├── layouts/       # Main layout wrapper
│   ├── lib/           # Holiday data & helper functions
│   ├── pages/         # Site pages (Home, Holidays, Guide)
│   └── styles/        # Global CSS + Tailwind config
├── public/            # Static assets (favicons)
└── package.json
```

---

## 🧞 Commands

All commands are run from the root:

| Command | Action |
| :--- | :--- |
| `npm install` | Installs dependencies |
| `npm run dev` | Starts local dev server |
| `npm run build` | Builds for production to `./dist/` |
| `npm run preview` | Previews the build before deploy |

---

## 🛠️ Deployment

This project uses **GitHub Actions** to automatically deploy to GitHub Pages.
1. All changes pushed to `main` trigger the build.
2. The site is hosted under the `base` path: `/Public_Holidays_NZ/`.

**Note:** Ensure your GitHub Pages settings are set to "GitHub Actions" as the source.

---

## ⚖️ Data Sources
- [Employment New Zealand — Public Holidays](https://www.employment.govt.nz/leave-and-holidays/public-holidays/)
- [NZ Government — Public holidays and work](https://www.govt.nz/browse/work/public-holidays-and-work/)
