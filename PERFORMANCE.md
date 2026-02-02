# Performance Comparison Guide: Vite vs Next.js

This document outlines how to run and compare the performance of your original Vite Dashboard against the new Next.js version, both using the expanded 100x datasets.

## 1. Setup

Both projects are located in `c:\Users\10\Downloads\Projects\Dashboard\`:

- **Vite Project**: `vite-project`
- **Next.js Project**: `vite-project/nextjs-dashboard`

## 2. Running the Comparsion

Open two terminal windows.

**Terminal 1 (Vite):**

```bash
cd c:\Users\10\Downloads\Projects\Dashboard\vite-project
npm run preview
```

> Runs on http://localhost:4173 (usually)

**Terminal 2 (Next.js):**

```bash
cd c:\Users\10\Downloads\Projects\Dashboard\vite-project\nextjs-dashboard
npm start
```

> Runs on http://localhost:3000

## 3. Metrics to Observe

With the expanded datasets (1000+ rows/items), observe the following areas:

### A. Initial Load Time (Lighthouse)

- **Vite**: Client-side rendering (CSR). You will likely see a blank white screen for a moment while the large JS bundle downloads and parses, then the App mounts and data is hydrated.
- **Next.js**: Server-side rendering (SSR). You should see the layout and initial HTML content almost immediately (First Contentful Paint), although interactivity might delay slightly until hydration completes.

### B. DataGrid Performance (Team, Contacts, Invoices)

Navigate to the **Contacts** page (1500+ rows).

- **Vite**: The entire data bundle is loaded upfront. Navigation might be instant, but the initial page load of the app was heavier.
- **Next.js**: The page code is split. Navigation fetches the chunk. With App Router, the data is currently bundled in the client component (since we imported mockData directly). Next.js might optimize the chunking better.

### C. Build Size

Compare the build outputs:

- **Vite**: Check `dist/assets`. Uses Rollup. Likely one large chunk or fewer chunks.
- **Next.js**: Check `.next/static`. Uses Webpack/Turbopack. Aggressive code splitting.

## 4. Expected Results with Large Data

| Metric                             | Vite (CSR)                    | Next.js (SSR/App Router)                  |
| ---------------------------------- | ----------------------------- | ----------------------------------------- |
| **FCP (First Contentful Paint)**   | Slower (Browser waits for JS) | **Faster** (HTML sent from server)        |
| **LCP (Largest Contentful Paint)** | Slower                        | **Faster**                                |
| **Bundle Size**                    | Larger initial download       | **Smaller initial download** (Code split) |
| **Navigation**                     | Fast (SPA)                    | Fast (Prefetching + SPA behavior)         |
| **SEO**                            | Poor (Empty HTML)             | **Excellent** (Full HTML)                 |

## 5. Testing Instructions

1. Open **Chrome DevTools** (F12) -> **Lighthouse** tab.
2. Run a "Navigation" report on both localhost URLs.
3. Compare the **Performance Score** and **First Contentful Paint** times.
