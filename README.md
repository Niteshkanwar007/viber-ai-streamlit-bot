# Military Hiring Marketplace Discovery Blueprint

A premium, print-ready consulting document built as a React / Next.js application for a Military Hiring Marketplace SaaS Platform discovery engagement.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Lucide Icons
- Mermaid diagrams

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` to view the A4 document. Use the browser print dialog to export to PDF.

## Production Checks

```bash
npm run typecheck
npm run build
```

## Preview and Download

The application includes a sticky document toolbar:

- **Preview** scrolls to the top and fades the toolbar so the A4 document can be reviewed cleanly.
- **Download PDF** opens the browser print dialog; choose **Save as PDF** for a print-ready A4 export.
- **Download HTML** saves the current document page as an HTML file for quick sharing/review.

## Agency Logo

The Shine Dezign agency logo is included at `public/shine-dezign-logo.svg` and is rendered on the cover and closing page. Replace this SVG with the final agency logo asset if required while keeping the same filename.
