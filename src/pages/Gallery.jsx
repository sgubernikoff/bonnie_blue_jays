import { useState } from 'react'
import './Gallery.css'

// ─── Add your photos here ─────────────────────────────────────────
// Drop images into src/assets/images/ and list them below.
// Each entry: { src, caption, category }
// Categories must match the FILTERS list below.

const FILTERS = ['All', 'Games', 'Team', 'Celebrations']

const PHOTOS = [
  // { src: '/src/assets/images/photo1.jpg', caption: 'Opening night',   category: 'Games' },
  // { src: '/src/assets/images/photo2.jpg', caption: 'Post-game beers', category: 'Celebrations' },
  // { src: '/src/assets/images/photo3.jpg', caption: 'Team shot',       category: 'Team' },
]

const PLACEHOLDER_COUNT = 9

export default function Gallery() {
  const [filter, setFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null) // index into displayed photos

  const hasPhotos = PHOTOS.length > 0
  const displayed = hasPhotos
    ? (filter === 'All' ? PHOTOS : PHOTOS.filter(p => p.category === filter))
    : []

  return (
    <main className="page-wrapper">
      <div className="container">

        <header className="gallery-header">
          <p className="tag">Photo Gallery</p>
          <h1 className="section-heading">
            The <em>Highlights</em>
          </h1>
        </header>

        <div className="divider" />

        {/* Filter bar */}
        {hasPhotos && (
          <div className="filter-bar">
            {FILTERS.map(f => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? 'filter-btn--active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        {hasPhotos ? (
          <div className="photo-grid">
            {displayed.map((photo, i) => (
              <button
                key={i}
                className="photo-item"
                onClick={() => setLightbox(i)}
                aria-label={`View ${photo.caption}`}
              >
                <img src={photo.src} alt={photo.caption} loading="lazy" />
                <div className="photo-item__overlay">
                  <span>{photo.caption}</span>
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="photo-grid photo-grid--placeholder">
            {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <div key={i} className="photo-placeholder">
                <span>📷</span>
              </div>
            ))}
            <p className="placeholder-hint">Add your photos in Gallery.jsx → PHOTOS array</p>
          </div>
        )}

        {/* Lightbox */}
        {lightbox !== null && (
          <div
            className="lightbox"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
          >
            <div className="lightbox__inner" onClick={e => e.stopPropagation()}>
              <img
                src={displayed[lightbox].src}
                alt={displayed[lightbox].caption}
              />
              <p className="lightbox__caption">{displayed[lightbox].caption}</p>
              <button className="lightbox__close" onClick={() => setLightbox(null)}>✕</button>
              {lightbox > 0 && (
                <button className="lightbox__nav lightbox__nav--prev" onClick={() => setLightbox(l => l - 1)}>‹</button>
              )}
              {lightbox < displayed.length - 1 && (
                <button className="lightbox__nav lightbox__nav--next" onClick={() => setLightbox(l => l + 1)}>›</button>
              )}
            </div>
          </div>
        )}

      </div>
    </main>
  )
}
