# Mr B Sax: site de prezentare

React + TypeScript + Vite, fără backend.

    npm install
    npm run dev      # dezvoltare
    npm run build    # produce dist/ (urci pe orice hosting static)

## Ce editezi
- `src/data/content.ts`: toate textele (slide-uri hero, despre, studii, servicii, Live Sax Show), telefon, email, linkuri sociale, textul butonului (`cta`), videoclipuri YouTube.
- `src/assets/hero/slide-1..4.jpg`: pozele din carusel. Înlocuiește-le cu variante mari (min. ~2400 px lățime); textul e scris în HTML, nu în poză.
- `src/assets/gallery/`: pune pozele aici, apar automat în galerie.
- `src/assets/logo.png` / `logo.svg`: logo. Fonturile se schimbă în `src/styles.css` (variabilele `--script`, `--serif`, `--body`) și în linkul din `index.html`.
- Logo universitate: pune fișierul în `public/logos/` și adaugă `logo: '/logos/...'` la studiul respectiv în `content.ts`.
