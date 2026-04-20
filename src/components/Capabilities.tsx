import { SectionHeader } from './SectionHeader'

const CAPS = [
  {
    num: 'A /',
    title: 'Filmmaking',
    items: ['Direction', 'Cinematography', 'Storyboarding', 'Editing', 'Color grading', 'Sound design', 'Scriptwriting'],
  },
  {
    num: 'B /',
    title: 'AI & Generative',
    items: [
      'Generative video',
      'Image models',
      'Voice / audio',
      'AI storyboarding',
      'Prompt engineering',
      'Hybrid pipelines',
      'Model direction',
    ],
  },
  {
    num: 'C /',
    title: 'Design & Brand',
    items: [
      'Visual identity',
      'Motion graphics',
      'Typography',
      'Photoshop',
      'Illustrator',
      'After Effects',
      'Lightroom',
    ],
  },
  {
    num: 'D /',
    title: 'Strategy & Direction',
    items: [
      'Creative direction',
      'Brand strategy',
      'Digital marketing',
      'Visual storytelling',
      'Campaign planning',
      'Deadline delivery',
      'Team collaboration',
    ],
  },
]

export function Capabilities() {
  return (
    <section id="capabilities">
      <div className="container">
        <SectionHeader
          num="§ 06 — CAPABILITIES"
          title={
            <>
              The toolkit,
              <br />
              <span className="ital">by</span> cluster.
            </>
          }
          right="Grouped the way I actually work them — filmmaking instincts first, AI as medium, design as memory, strategy tying it together."
        />

        <div className="caps-grid" data-reveal>
          {CAPS.map((c) => (
            <div key={c.num} className="cap">
              <div className="cap-num">{c.num}</div>
              <div className="cap-title">{c.title}</div>
              <ul className="cap-list">
                {c.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
