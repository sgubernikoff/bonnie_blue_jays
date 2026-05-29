import { useState } from "react";
import "./Gallery.css";

const base = import.meta.env.BASE_URL;
const img = (f) => `${base}images/${f}`;

const FILTERS = ["All", "Games", "Team", "Celebrations"];

const PHOTOS = [
  {
    src: img("0D826301-83D0-47CB-BA3A-F0216ACDD863.jpeg"),
    caption: "",
    category: "Team",
  },
  {
    src: img("49F155F8-C42F-4FC0-A07C-C2CFA5354F93.jpeg"),
    caption: "",
    category: "Team",
  },
  {
    src: img("2883C4B5-B941-4E2E-97FE-B83A5537100E_1_201_a.jpeg"),
    caption: "",
    category: "Team",
  },
  {
    src: img("74160D17-65CB-4E8F-8344-9CE09AFEE86C.jpeg"),
    caption: "",
    category: "Team",
  },
  {
    src: img("66833456-6206-4FE6-BC54-1536C6C88904.jpeg"),
    caption: "",
    category: "Team",
  },
  {
    src: img("B022A86D-6F5A-4434-84D9-D3F49DF7642A.jpeg"),
    caption: "",
    category: "Team",
  },
  {
    src: img("B5118E7C-B756-40F9-9624-A6B6D546740B.jpeg"),
    caption: "",
    category: "Team",
  },
  {
    src: img("DB2D08EE-97FE-4BCE-969A-C58C6CE1E292.jpeg"),
    caption: "",
    category: "Team",
  },
  {
    src: img("E279B31E-65D6-4716-B5A2-04BF5316A063.jpeg"),
    caption: "",
    category: "Team",
  },
];

const PLACEHOLDER_COUNT = 9;

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const hasPhotos = PHOTOS.length > 0;
  const displayed = hasPhotos
    ? filter === "All"
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === filter)
    : [];

  return (
    <main className="page-wrapper">
      <div className="container">
        <header className="gallery-header">
          <h1 className="section-heading">
            The <em>Highlights</em>
          </h1>
        </header>

        <div className="divider" />

        {hasPhotos && (
          <div className="filter-bar">
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`filter-btn ${filter === f ? "filter-btn--active" : ""}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
        )}

        {hasPhotos ? (
          <div className="photo-grid">
            {displayed.map((photo, i) => (
              <button
                key={i}
                className="photo-item"
                onClick={() => setLightbox(i)}
                aria-label={`View photo ${i + 1}`}
              >
                <img src={photo.src} alt={photo.caption} loading="lazy" />
                {photo.caption && (
                  <div className="photo-item__overlay">
                    <span>{photo.caption}</span>
                  </div>
                )}
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
            <p className="placeholder-hint">
              Add your photos in Gallery.jsx → PHOTOS array
            </p>
          </div>
        )}

        {lightbox !== null && (
          <div
            className="lightbox"
            onClick={() => setLightbox(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="lightbox__inner"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={displayed[lightbox].src}
                alt={displayed[lightbox].caption}
              />
              {displayed[lightbox].caption && (
                <p className="lightbox__caption">
                  {displayed[lightbox].caption}
                </p>
              )}
              <button
                className="lightbox__close"
                onClick={() => setLightbox(null)}
              >
                ✕
              </button>
              {lightbox > 0 && (
                <button
                  className="lightbox__nav lightbox__nav--prev"
                  onClick={() => setLightbox((l) => l - 1)}
                >
                  ‹
                </button>
              )}
              {lightbox < displayed.length - 1 && (
                <button
                  className="lightbox__nav lightbox__nav--next"
                  onClick={() => setLightbox((l) => l + 1)}
                >
                  ›
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
