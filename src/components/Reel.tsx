import { SectionHeader } from './SectionHeader'
import posterImg from '../assets/Poster.jpg'

export function Reel() {
  return (
    <section id="reel">
      <div className="container">
        <SectionHeader
          num="§ 05"
          title={<>Limitless Creativity ..</>}
          right="A journey through boundless imagination — where creativity breaks free and storytelling knows no limits. Drift between moments and lose yourself in the flow."
        />

        <div className="reel-intro-row" data-reveal>
          <p className="reel-intro" style={{ textTransform: 'uppercase', margin: 0 }}>
            Imagine the life with a background music
          </p>
          <a 
            href="https://www.tiktok.com/@amer.mysara" 
            target="_blank" 
            rel="noopener noreferrer"
            className="tiktok-btn"
          >
            Check on Tiktok
          </a>
        </div>

        <div className="reel-poster-container" data-reveal>
          <img 
            src={posterImg} 
            alt="Film Reel Collage Poster" 
            style={{ 
              width: '100%', 
              height: 'auto', 
              display: 'block',
              boxShadow: '0 4px 24px rgba(0,0,0,0.4)' 
            }} 
          />
        </div>
      </div>
    </section>
  )
}
