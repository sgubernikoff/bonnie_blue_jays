import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const SLIDES = [
  { src: "/images/49F155F8-C42F-4FC0-A07C-C2CFA5354F93.jpeg", caption: "" },
  { src: "/images/0D826301-83D0-47CB-BA3A-F0216ACDD863.jpeg", caption: "" },
  { src: "/images/E279B31E-65D6-4716-B5A2-04BF5316A063.jpeg", caption: "" },
  { src: "/images/74160D17-65CB-4E8F-8344-9CE09AFEE86C.jpeg", caption: "" },
  { src: "/images/66833456-6206-4FE6-BC54-1536C6C88904.jpeg", caption: "" },
  { src: "/images/B022A86D-6F5A-4434-84D9-D3F49DF7642A.jpeg", caption: "" },
  { src: "/images/B5118E7C-B756-40F9-9624-A6B6D546740B.jpeg", caption: "" },
  { src: "/images/DB2D08EE-97FE-4BCE-969A-C58C6CE1E292.jpeg", caption: "" },
];

const PLACEHOLDER_COUNT = 3;

export default function Home() {
  const [current, setCurrent] = useState(0);
  const hasSlides = SLIDES.length > 0;
  const total = hasSlides ? SLIDES.length : PLACEHOLDER_COUNT;

  useEffect(() => {
    if (!hasSlides) return;
    const id = setInterval(() => setCurrent((i) => (i + 1) % total), 4500);
    return () => clearInterval(id);
  }, [hasSlides, total]);

  const prev = () => setCurrent((i) => (i - 1 + total) % total);
  const next = () => setCurrent((i) => (i + 1) % total);

  return (
    <main className="home">
      {/* ── Hero / Slideshow ── */}
      <section className="hero">
        <div className="slideshow">
          {hasSlides
            ? SLIDES.map((slide, i) => (
                <div
                  key={i}
                  className={`slide ${i === current ? "slide--active" : ""}`}
                >
                  <img src={slide.src} alt={slide.caption} />
                  {slide.caption && (
                    <p className="slide__caption">{slide.caption}</p>
                  )}
                </div>
              ))
            : Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
                <div
                  key={i}
                  className={`slide slide--placeholder ${i === current ? "slide--active" : ""}`}
                >
                  <div className="slide__placeholder-inner">
                    <span>📸 Add your photos to public/images/</span>
                  </div>
                </div>
              ))}

          <div className="slide-dots">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? "dot--active" : ""}`}
                onClick={() => setCurrent(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="hero__text">
          <h1 className="hero__title">
            <span className="hero__title-script">Bonnie</span>
            <br />
            <em>Blue Jays</em>
          </h1>
          <p className="hero__sub">Swing hard. Cum harder.</p>
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
  );
}
