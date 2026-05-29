# Bonnie Blue Jays 🦋

Rec league softball team site. Black, white, electric blue. Built with React + Vite. Deploys to Vercel in one click.

## Setup

```bash
npm install
npm run dev
```

## Adding Your Content

### 🖼️ Slideshow photos (Home page)
1. Drop images into `src/assets/images/`
2. Open `src/pages/Home.jsx` and edit the `SLIDES` array:
```js
const SLIDES = [
  { src: '/src/assets/images/game1.jpg', caption: 'Opening Night — May 4' },
  { src: '/src/assets/images/team.jpg',  caption: 'The Squad' },
]
```

### 📅 Schedule
Open `src/pages/Schedule.jsx` and edit `GAMES`:
```js
const GAMES = [
  { date: 'May 4',  day: 'Mon', time: '6:30 PM', opponent: 'The Rascals', field: 'Field 2', home: true,  result: null },
  { date: 'May 11', day: 'Mon', time: '7:00 PM', opponent: 'Pitch Please', field: 'Field 1', home: false, result: { w: true, score: '8–5' } },
]
```
- `result: null` → shows "Upcoming"
- `result: { w: true, score: '8–5' }` → shows "W 8–5"
- `result: { w: false, score: '3–6' }` → shows "L 3–6"

### 🏏 Roster & Stats
Open `src/pages/Stats.jsx` and edit `ROSTER`:
```js
const ROSTER = [
  { number: 7, name: 'Jane Doe', position: 'SS', ab: 24, hits: 9, rbi: 5, runs: 6, hr: 1, avg: null },
]
```
Batting average (`.AVG`) is computed automatically.

### 📷 Gallery
Open `src/pages/Gallery.jsx` and edit `PHOTOS`:
```js
const PHOTOS = [
  { src: '/src/assets/images/photo1.jpg', caption: 'Opening night', category: 'Games' },
]
```
Categories: `'Games'` | `'Team'` | `'Celebrations'` (or add your own to `FILTERS`)

## Deploy to Vercel

Push to GitHub, import the repo at vercel.com — zero config needed.
