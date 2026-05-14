import newImg from '../assets/New.png'

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-content">
        <div className="hero-grid">
          <div className="hero-left">
            <h1 className="hero-title">
              Amer Mysara is an <span className="text-orange">AI<br />
              Filmmaker & Content Creator.</span>
            </h1>
            <div className="hero-socials">
              <a href="https://www.tiktok.com/@amer.mysara" target="_blank" rel="noopener noreferrer">TikTok</a> — <a href="https://www.linkedin.com/in/amer-mysara/" target="_blank" rel="noopener noreferrer">LinkedIn</a> — <a href="https://www.instagram.com/amer_mysara" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-profile-frame">
              <img src={newImg} alt="Amer Mysara" />
            </div>
          </div>
        </div>

        <div className="hero-meta-row-clean">
          <div>
            <span className="k">Shot 001</span>
            <span className="v">Dubai, UAE</span>
          </div>
          <div>
            <span className="k">Coordinates</span>
            <span className="v">25° 12' N / 55° 16' E</span>
          </div>
          <div>
            <span className="k">Portfolio</span>
            <span className="v">Vol. VII — MMXXVI</span>
          </div>
          <div className="desktop-only">
            <span className="k">Runtime</span>
            <span className="v">07:00:00 (years)</span>
          </div>
        </div>
      </div>
    </header>
  )
}
