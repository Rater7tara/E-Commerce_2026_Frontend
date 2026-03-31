import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowRight, ImageOff } from "lucide-react";
import "./Banner.css";
import banner1 from  "../../../assets/Birds/bird1.jpg";
import banner2 from  "../../../assets/Birds/bird2.jpg";
import banner3 from  "../../../assets/Foods/Food1.jpg";


// ─── Slide Data ───────────────────────────────────────────────────────────────
// Replace `bg` with real image URLs when available.
// Each slide has a gradient overlay so text always stays readable.

const SLIDES = [
  {
    id: 1,
    tag: "New Arrivals",
    headline: "Find Your Perfect\nFeathered Friend",
    sub: "Explore 50+ bird breeds from certified breeders — hand-raised & health-guaranteed.",
    cta: { label: "Shop Birds", href: "/shop/birds" },
    ctaSecondary: { label: "Learn More", href: "/about" },
    bg: banner2,
    accent: "#16a34a",
    accentLight: "#f0faf3",
    emoji: "🐦",
  },
  {
    id: 2,
    tag: "Popular",
    headline: "Cats That Steal\nEvery Heart",
    sub: "From playful kittens to calm adults — adopt or buy from trusted NestNook sellers.",
    cta: { label: "Meet the Cats", href: "/shop/cats" },
    ctaSecondary: { label: "Adopt Now", href: "/adopt" },
    bg: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=1400&q=80",
    accent: "#0d9488",
    accentLight: "#f0fdfa",
    emoji: "🐱",
  },
  {
    id: 3,
    tag: "Free Shipping",
    headline: "Premium Food &\nTreats Delivered",
    sub: "Vet-approved nutrition for birds and cats. Orders over ৳999 ship free, same day.",
    cta: { label: "Shop Food", href: "/food/birds" },
    ctaSecondary: { label: "See Offers", href: "/offers" },
    bg: banner3,
    accent: "#d97706",
    accentLight: "#fffbeb",
    emoji: "🍖",
  },
  {
    id: 4,
    tag: "New ✦",
    headline: "Accessories Your\nPet Will Love",
    sub: "Cages, perches, toys & grooming kits — everything under one roof, delivered fast.",
    cta: { label: "Browse Accessories", href: "/accessories/toys" },
    ctaSecondary: { label: "View All", href: "/shop/all" },
    bg: "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=1400&q=80",
    accent: "#7c3aed",
    accentLight: "#f5f3ff",
    emoji: "🧸",
  },
];

const AUTOPLAY_MS = 4500;

// ─── Component ────────────────────────────────────────────────────────────────

const Banner = () => {
  const [current,   setCurrent]   = useState(0);
  const [animating, setAnimating] = useState(false);
  const [paused,    setPaused]    = useState(false);

  const total = SLIDES.length;

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent((index + total) % total);
    setTimeout(() => setAnimating(false), 600);
  }, [animating, total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [next, paused]);

  const slide = SLIDES[current];

  return (
    <section
      className="bn-root"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Slide Track ── */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`bn-slide ${i === current ? "bn-slide--active" : "bn-slide--hidden"}`}
          style={{ "--bn-accent": s.accent }}
        >
          {/* Background image */}
          <img src={s.bg} alt="" className="bn-bg" />

          {/* Dark + colour gradient overlay */}
          <div
            className="bn-overlay"
            style={{
              background: `linear-gradient(
                105deg,
                rgba(0,0,0,0.72) 0%,
                rgba(0,0,0,0.45) 55%,
                rgba(0,0,0,0.10) 100%
              )`,
            }}
          />

          {/* Content */}
          <div className="bn-content max-w-7xl mx-auto px-6 sm:px-10">
            <div className={`bn-inner ${i === current ? "bn-inner--in" : ""}`}>

              {/* Tag pill */}
              <span
                className="bn-tag"
                style={{ background: s.accent, color: "white" }}
              >
                {s.emoji} &nbsp;{s.tag}
              </span>

              {/* Headline */}
              <h1 className="bn-headline">
                {s.headline.split("\n").map((line, li) => (
                  <span key={li} className="block">{line}</span>
                ))}
              </h1>

              {/* Sub */}
              <p className="bn-sub">{s.sub}</p>

              {/* CTAs */}
              <div className="bn-ctas">
                <Link
                  to={s.cta.href}
                  className="bn-btn-primary"
                  style={{ background: s.accent }}
                >
                  {s.cta.label}
                  <ArrowRight size={16} />
                </Link>
                <Link to={s.ctaSecondary.href} className="bn-btn-ghost">
                  {s.ctaSecondary.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* ── Prev / Next ── */}
      <button className="bn-arrow bn-arrow--left" onClick={prev} aria-label="Previous slide">
        <ChevronLeft size={22} />
      </button>
      <button className="bn-arrow bn-arrow--right" onClick={next} aria-label="Next slide">
        <ChevronRight size={22} />
      </button>

      {/* ── Dot Indicators ── */}
      <div className="bn-dots">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            className={`bn-dot ${i === current ? "bn-dot--active" : ""}`}
            style={{ "--bn-accent": s.accent }}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* ── Progress Bar ── */}
      {!paused && (
        <div className="bn-progress" style={{ "--bn-accent": slide.accent }}>
          <div
            key={current} // re-mount resets animation
            className="bn-progress-fill"
            style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
          />
        </div>
      )}
    </section>
  );
};

export default Banner;