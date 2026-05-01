import { SectionHeader } from './SectionHeader'

const ROWS = [
  {
    years: '2024 — PRESENT',
    role: 'Content Creator & AI Filmmaker',
    co: 'TECHKS — Dubai',
    impact:
      'Directing AI-native ads, cinematic shorts and generative brand systems end-to-end; owning creative strategy across film, social and identity.',
  },
  {
    years: '2023 — 2024',
    role: 'Videographer & Editor',
    co: 'Mano Marketing — Dubai',
    impact:
      'Shaped raw footage into cross-platform campaign cuts; color, sync and cinematic edit under tight multi-project deadlines.',
  },
  {
    years: '2020 — 2023',
    role: 'Graphic Designer',
    co: 'Hope Care Center — Khartoum',
    impact:
      'Led a full visual rebrand across digital and print; disciplined social system drove a measurable engagement lift quarter-over-quarter.',
  },
  {
    years: '2019 — 2020',
    role: 'Freelance Visual & Video Producer',
    co: 'Independent — Khartoum / Dubai',
    impact: 'Moved from print identity into motion; first cinematic briefs, first edit bays, first commercial directing credits.',
  },
  {
    years: '2018 — 2019',
    role: 'Designer & Content Creator',
    co: 'Independent',
    impact: 'Built a daily practice across identity, poster, and early social video — the craft foundation underneath everything since.',
  },
]

export function Timeline() {
  return (
    <section id="timeline">
      <div className="container">
        <SectionHeader
          num="§ 07 — TIMELINE"
          title={
            <>
              Seven years,
              <br />
              <span className="ital">one</span> arc.
            </>
          }
        />

        <div className="timeline" data-reveal>
          {ROWS.map((r) => (
            <div key={r.years + r.co} className="tl-row">
              <div className="tl-years">{r.years}</div>
              <div className="tl-role">
                {r.role}
                <span className="co">{r.co}</span>
              </div>
              <div className="tl-impact">{r.impact}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
