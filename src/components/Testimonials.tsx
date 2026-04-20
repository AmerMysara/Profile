import { SectionHeader } from './SectionHeader'

const QUOTES = [
  {
    quote:
      'Amer treats a prompt the way a DP treats a lens. You can feel the restraint in every shot — nothing is there by accident.',
    name: '[ Creative Director ]',
    who: 'Agency — Dubai',
  },
  {
    quote: "He delivered a cinematic film, a full brand system and a social campaign from one brief — and the seams don't show.",
    name: '[ Head of Brand ]',
    who: 'TECHKS client',
  },
  {
    quote: 'The rare filmmaker who is as comfortable in a timeline as in a diffusion model. Story first — every single time.',
    name: '[ Producer ]',
    who: 'Regional network',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <SectionHeader
          num="§ 08 — WORDS"
          title={
            <>
              On the <span className="ital">record</span>.
            </>
          }
          right="Placeholder quotes — to be replaced with real ones from collaborators."
        />

        <div className="testimonials" data-reveal>
          {QUOTES.map((q) => (
            <div key={q.name} className="testi">
              <div className="testi-mark">"</div>
              <p className="testi-quote">{q.quote}</p>
              <div className="testi-attr">
                <span className="name">{q.name}</span>
                {q.who}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
