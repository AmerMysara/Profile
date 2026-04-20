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
          Amer Mysara Yousif — AI filmmaker, visual storyteller, senior content creator. Directing
          cinematic shorts and branded films at the seam of generative imagery and live-action craft.
          Based in Dubai, shooting everywhere.
        </p>
      </div>
      <div className="hero-scroll">SCROLL ↓ REEL.01</div>
    </header>
  )
}
