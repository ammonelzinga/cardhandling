# Quotes Organizer

A React + Vite app to organize and display quotes by categories and subcategories with unique layouts per subcategory.

## Scripts

- `npm run dev` – start dev server
- `npm run build` – build for production
- `npm run preview` – preview production build

## Structure

- `src/App.tsx` – app shell and tabs
- `src/pages/Category.tsx` – subcategory chooser page
- `src/pages/Subcategory.tsx` – subcategory quotes page (will render different layouts per subcategory)
- `src/shared/QuoteCard.tsx` – base quote card component
- `src/layouts/*` – nine distinct layouts, one per subcategory
	- Christianity → Masonry columns
	- Islam → Vertical timeline
	- Judaism → Striped grid
	- Books → Staggered rotated cards
	- Movies → Split two columns with varying sizes
	- Songs/Poetry → Flip cards (front/back)
	- Philosophy & Ethics → Grouped by first tag
	- Science & Discovery → Sorted by year with badges
	- Society & Leadership → Numbered leaderboard

## Data sources and notes

- Scripture excerpts: KJV (public domain) and JPS 1917 (public domain). Quran excerpts are generic short translations.
- Literature and poetry: public-domain authors or very short, widely cited lines. Some modern lines are brief and cited for educational/demo use.
- Film quotes are short, attributed, and under ~90 characters.

If you need to swap or expand quotes, edit the files in `src/data/`.
