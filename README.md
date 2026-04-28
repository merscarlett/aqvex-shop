# AQVEX Shop

AQVEX Shop is a responsive product catalog built with React, TypeScript, and Vite. The project focuses on a clean shopping experience with product search, sorting, pagination, adaptive product cards, and a polished mobile layout.

## Features

- Responsive product catalog with 4-column desktop layout
- Product search across names, categories, prices, currency, and volume labels
- Sorting by price and popularity with direction switching
- Pagination for large product lists
- Product cards with prices, discounts, ratings, availability, categories, volume selection, and cart actions
- Sticky footer behavior for short pages
- Mobile-friendly header, controls, product cards, and footer
- Loading, error, and empty-result states

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS Grid and Flexbox
- ESLint

## Getting Started

### Installation

```bash
git clone https://github.com/merscarlett/aqvex-shop.git
cd aqvex-shop
npm install
```

### Run Locally

```bash
npm run dev
```

## File Structure

```text
aqvex-shop/
├── public/
│   ├── fonts/
│   │   ├── Klein-Bold.woff
│   │   ├── Klein-Bold.woff2
│   │   ├── Klein-Medium.woff
│   │   ├── Klein-Medium.woff2
│   │   ├── Klein-Regular.woff
│   │   └── Klein-Regular.woff2
│   ├── icons/
│   │   ├── arrow.svg
│   │   ├── arrow-pagination-left.svg
│   │   ├── arrow-pagination-right.svg
│   │   ├── cart.svg
│   │   ├── checkMark.svg
│   │   ├── drop.svg
│   │   ├── mini-logo-2.svg
│   │   ├── search.svg
│   │   ├── sorting-arrows.svg
│   │   ├── star.svg
│   │   └── triangle.svg
│   └── images/
│       ├── logo.png
│       ├── mini-logo-1.png
│       ├── mini-logo-2-background.png
│       ├── mini-logo-3.png
│       ├── mini-logo-4.png
│       ├── mini-logo-5.png
│       ├── mini-logo-6.png
│       ├── product-1.png
│       ├── product-2.png
│       ├── product-3.png
│       ├── product-4.png
│       ├── product-5.png
│       ├── product-6.png
│       ├── product-7.png
│       └── product-8.png
├── src/
│   ├── api/
│   │   └── productsApi.ts
│   ├── components/
│   │   ├── Footer/
│   │   │   ├── Footer.css
│   │   │   └── Footer.tsx
│   │   ├── Header/
│   │   │   ├── Header.css
│   │   │   └── Header.tsx
│   │   ├── Pagination/
│   │   │   ├── Pagination.css
│   │   │   └── Pagination.tsx
│   │   └── ProductCard/
│   │       ├── ProductCard.css
│   │       └── ProductCard.tsx
│   ├── pages/
│   │   └── ProductsPage/
│   │       ├── ProductsPage.css
│   │       └── ProductsPage.tsx
│   ├── types/
│   │   └── product.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.ts
```

