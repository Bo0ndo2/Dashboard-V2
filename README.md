# Next.js High-Performance Admin Dashboard

A professional, high-performance Admin Dashboard migrated from Vite to **Next.js 14+ (App Router)**. This project demonstrates significant performance optimizations when handling large-scale datasets using Server-Side Rendering (SSR) and modern React patterns.

## 🚀 Overview

This dashboard was originally built with Vite (Client-Side Rendering) and subsequently migrated to Next.js to address performance bottlenecks when rendering large volumes of data. The project features a full suite of interactive charts, data grids, and management tools, all optimized for speed and responsiveness.

## ✨ Key Features

- **SSR Optimization**: Leverages Next.js App Router for faster First Contentful Paint (FCP).
- **Large Dataset Handling**: Stress-tested with **100x larger datasets** (1,000+ records per entity) compared to standard mock data.
- **Dynamic Theming**: Full support for Dark and Light modes using Material UI (MUI).
- **Interactive Data Visualization**: Comprehensive charts powered by **Nivo Charts** (Bar, Line, Pie, Geography).
- **Responsive Layout**: Seamless experience across desktop, tablet, and mobile devices.
- **Form Management**: Robust user creation forms with **Formik** and **Yup** validation.

## 📊 Performance Comparison (CSR vs SSR)

A core objective of this project was to compare the performance of Client-Side Rendering (Vite) against Server-Side Rendering (Next.js) when dealing with heavy data loads.

| Metric                             | Vite (CSR)                  | Next.js (SSR / App Router) |
| :--------------------------------- | :-------------------------- | :------------------------- |
| **First Contentful Paint (FCP)**   | 🔴 **30.1s** (Severe Delay) | 🟢 **2.9s** (10x Faster)   |
| **Largest Contentful Paint (LCP)** | 🔴 **58.0s**                | 🟢 **3.4s**                |
| **Total Blocking Time**            | 22,870ms                    | 5,880ms                    |
| **Speed Index**                    | 55.2s                       | 4.2s                       |

### Visual Proof

<div style={{ display: "flex", gap: "10px" }}>
  <img src="/assets/performance-vite.png" alt="Vite Performance" width="45%" />
  <img src="/assets/performance-nextjs.png" alt="Next.js Performance" width="45%" />
</div>

### Optimization Impact

By implementing **Emotion Cache Registry** and **Next.js App Router**, we resolved hydration mismatches and reduced the "perceived" load time, providing a smoother user experience even with 1,500+ contacts and 1,000+ transactions.

## 🛠 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **UI Library**: Material UI (MUI) @ MUI X Data Grid
- **Charts**: Nivo Charts (@nivo/core, @nivo/bar, etc.)
- **Styling**: Emotion (CSS-in-JS) with custom theme tokens
- **Forms**: Formik & Yup
- **Calendar**: FullCalendar

## ⚙️ Getting Started

### Installation

```bash
cd nextjs-dashboard
npm install
```

### Development Mode

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm start
```

