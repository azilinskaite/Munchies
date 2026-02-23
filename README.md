# Munchies (Next.js app)

## Overview

This project is a single-page application built with Next.js 13 (App Router).
It displays a list of restaurants fetched from a backend API.

Features include:
* Responsive UI.
* Navbar with category cards behaving as tabs.
* Restaurants list section.
* Reusable components (RestaurantCard, CategoryCard, StatusBadge) etc.
* Fetch restaurants list and available filters (categories, price, delivery) from API.
* Apply multiple filters at once locally (category + price + open + delivery).
* Optimistic rendering (restaurants appear "open" until real status is fetched).

## Tech Stack

* Framework: Next.js 13+ (App Router).
* Language: TypeScript.
* Styling: Tailwind CSS + custom utilities.
* Data fetching: React Server Components + Client Components with useEffect.
* State management across components using custom React context hook (FiltersContext).

## Getting Started

First, install dependencies:
`npm install`

Then, run the development server:
`npm run dev`

Open http://localhost:3000 in your browser to see the result.

## Improvements 

### Done after first feedback round (Oct 2026):

* Fixed components naming to be PascalCase, to follow conventional React patterns.
* Changed `rem` values to existing Tailwind values where possible for clean styling.
* Added skeleton loaders for `RestaurantCard` and `FilterButton` components that gives user visual feedback.
* Improved responsiveness by fixing flexible layout and font sizing.
* Added error message when no restaurants match the selected filters.
* Moved base url into `.env` file to practice good habits.
* Typed API responses for added safety. Works as documentation of the API and also informs if data changes shape (changed names, format, etc.) which removes runtime surprises.
* Added `gatewayFetcher` helper that wraps fetch in a generic, reusable, type-safe way.
* Moved types interface into dedidated `types.ts` file. Centralized types for single source of truth.

### (Feb 2026):

* Extract data fetching to custom hooks (useRestaurants). To eliminate duplicate requests, consistent state, cleaner components.
* Fix `Promise.all()` to `Promise.allSettled()` in `RestaurantsList`. One restaurant status failure shouldn't kill the entire list.
* Remove fake setTimeout() from skeleton loading.

### Ideas for the future:

* Remove `"use client"` where possible, implement SSR.
* Improve error handling: `gatewayFetcher` (network), custom hooks (business logic), components (UI layer).
* Test a different approach for filtering: `useSearchParams` for native Next.js filtering instead of current context approach.
* Extend error handling with visual UI messages.
* Improve skeleton loaders UI (perhaps show 1 instead of 3?).
* Add dark mode toggle.
* a11y audit.