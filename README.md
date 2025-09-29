## Munchies (Next.js app)

### Overview

This project is a single-page application (SPA) built with Next.js 13 (App Router).
It displays a list of restaurants fetched from a backend API.

Filter restaurants by:
* Category
* Delivery time
* Price range

Features include:
* Responsive UI with sidebar, navbar (with category cards) and restaurants list section.
* Custom reusable components (RestaurantCard, CategoryCard, StatusBadge) etc.
* Fetch restaurants list and available filters (categories, price, delivery) from API.
* Apply multiple filters at once locally (category + price + open + delivery).
* Optimistic rendering (restaurants appear "open" until real status is fetched).

### Tech Stack

* Framework: Next.js 13+ (App Router)
* Language: TypeScript
* Styling: Tailwind CSS + custom utilities
* Data fetching: React Server Components + Client Components with useEffect
* State management: React Context (FiltersContext)
* Deployment ready for Vercel

### Future improvements

* Add skeleton loaders.
* Extend error handling with visual UI messages.
* Accessibility improvements.
* Run tests.
* Sync filters with URL (use Next.js useSearchParams)

### Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
...

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
