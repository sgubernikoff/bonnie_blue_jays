import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

// ─── Drop your team photos in src/assets/images/ and list them here ───
const SLIDES = [
  // { src: '/src/assets/images/team1.jpg', caption: 'Game 1 — April 6' },
  // { src: '/src/assets/images/team2.jpg', caption: 'Championship Night' },
]

const PLACEHOLDER_COUNT = 3 // shown when SLIDES is empty

export default function Home() {
  const [current, setCurrent] = useState(0)
  const hasSlides = SLIDES.length > 0
  const total = hasSlides ? SLIDES.length : PLACEHOLDER_COUNT

  // Auto-advance
  useEffect(() => {
    if (!hasSlides) return
    const id = setInterval(() => setCurrent(i => (i + 1) % total), 4500)
    return () => clearInterval(id)
  }, [hasSlides, total])

  const prev = () => setCurrent(i => (i - 1 + total) % total)
  const next = () => setCurrent(i => (i + 1) % total)

  return (
    <main className="home">

      {/* ── Hero / Slideshow ── */}
      <section className="hero">
        <div className="slideshow">

          {hasSlides ? (
            SLIDES.map((slide, i) => (
              <div
                key={i}
                className={`slide ${i === current ? 'slide--active' : ''}`}
              >
                <img src={slide.src} alt={slide.caption} />
                {slide.caption && (
                  <p className="slide__caption">{slide.caption}</p>
                )}
              </div>
            ))
          ) : (
            // Placeholder slides until you add images
            Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
              <div
                key={i}
                className={`slide slide--placeholder ${i === current ? 'slide--active' : ''}`}
              >
                <div className="slide__placeholder-inner">
                  <span>📸 Add your photos to src/assets/images/</span>
                </div>
              </div>
            ))
          )}

          {/* Controls */}
          <button className="slide-btn slide-btn--prev" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className="slide-btn slide-btn--next" onClick={next} aria-label="Next">
            ›
          </button>

          {/* Dots */}
          <div className="slide-dots">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'dot--active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Hero text overlay */}
        <div className="hero__text">
          <p className="tag">Rec League Softball</p>
          <h1 className="hero__title">
            Bonnie<br />
            <em>Blue Jays</em>
          </h1>
          <p className="hero__sub">Fly high. Hit harder.</p>
        </div>
      </section>

      {/* ── Quick Links ── */}
      <section className="quicklinks container">
        <Link to="/schedule" className="qlink">
          <span className="qlink__label">Schedule</span>
          <span className="qlink__arrow">→</span>
        </Link>
        <Link to="/stats" className="qlink">
          <span className="qlink__label">Roster & Stats</span>
          <span className="qlink__arrow">→</span>
        </Link>
        <Link to="/gallery" className="qlink">
          <span className="qlink__label">Gallery</span>
          <span className="qlink__arrow">→</span>
        </Link>
      </section>

    </main>
  )
}
