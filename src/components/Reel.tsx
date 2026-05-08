import { SectionHeader } from './SectionHeader'
import posterImg from '../assets/Poster.jpg'

export function Reel() {
  return (
    <section id="reel">
      <div className="container">
        <SectionHeader
          num="§ 05 — FILM REEL"
          title={
            <>
              Reel <span className="ital">twenty</span>&thinsp;26.
            </>
          }
          right="A three-minute survey of recent AI-native direction — branded, personal, and in-between. Press play, pull the scrubber around, jump between cuts."
        />

        <p className="reel-intro" data-reveal style={{ textTransform: 'uppercase' }}>
          Imagine the life with a background music
        </p>

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
