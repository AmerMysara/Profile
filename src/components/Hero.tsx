export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-still" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-meta-row">
          <div>
            <span className="k">Shot 001 — Dubai, UAE</span>
            <span className="v">25° 12' N / 55° 16' E</span>
          </div>
          <div>
            <span className="k">Portfolio / MMXXVI</span>
            <span className="v">Vol. VII — seven-year arc</span>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span className="k">Running time</span>
            <span className="v">07:00:00 (years)</span>
          </div>
        </div>

        <h1 className="hero-title">
          AI&nbsp;FILMS
          <br />
          <span className="ital">that remember</span>
          <br />
          HOW&nbsp;TO&nbsp;FEEL<span className="accent">.</span>
        </h1>

        <p className="hero-caption">
          Creative & AI content creator and emerging filmmaker driven by a passion for transforming ideas into powerful visual stories. With over 6 years of experience in visual storytelling, graphic design, and video production, I blend creativity and technology to craft cinematic narratives that engage, move, and inspire. Skilled in Adobe Creative Suite, sound design, and social media content strategy, I create content that not only captures attention but leaves a lasting impression.
        </p>
      </div>
      <div className="hero-scroll">SCROLL ↓ REEL.01</div>
    </header>
  )
}
