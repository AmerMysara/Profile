import { SectionHeader } from './SectionHeader'

const PILLARS = [
  {
    num: '/01',
    title: 'AI Filmmaking',
    sub: '& cinematic storytelling',
    desc: 'Directing short-form cinematic work with generative video models, composited against real footage when the scene demands it. Emotional pacing, sound design and color live at the center — the AI is a camera, not a crutch.',
    tags: ['Runway', 'Sora', 'Kling', 'Luma', 'DaVinci'],
  },
  {
    num: '/02',
    title: 'AI-Driven',
    sub: 'content creation',
    desc: 'AI-assisted ads, cinematic stingers, LinkedIn carousels and generative brand assets shipped at campaign pace. A hybrid of traditional craft and prompt engineering, tuned for platforms that reward movement.',
    tags: ['Premiere', 'After Effects', 'Firefly', 'Photoshop', 'Suno'],
  },
  {
    num: '/03',
    title: 'Brand Identity',
    sub: '& visual design',
    desc: 'Logos, wordmarks, motion identities and the visual grammar that sits underneath them. Design systems built so the film, the social post and the deck all feel cut from the same reel.',
    tags: ['Illustrator', 'Photoshop', 'Figma', 'Lightroom'],
  },
  {
    num: '/04',
    title: 'Social-First',
    sub: 'content strategy',
    desc: "Vertical narrative, reels and TikTok-native storytelling with a full-stack creator's instinct — concept, shoot, edit, sound, direction. Built for hooks in seconds and memory in minutes.",
    tags: ['TikTok', 'Reels', 'CapCut', 'Premiere'],
  },
]

export function Services() {
  return (
    <section id="services">
      <div className="container">
        <SectionHeader
          num="§ 03 — WHAT I DO"
          title={
            <>
              Four practices,
              <br />
              <span className="ital">one</span> pipeline.
            </>
          }
          right="End-to-end and solo when it has to be: concept, script, storyboard, AI generation, live capture, edit, color, sound. One pair of hands through the whole cut."
        />

        <div className="pillars" data-reveal>
          {PILLARS.map((p) => (
            <div key={p.num} className="pillar">
              <div className="p-num">{p.num}</div>
              <div className="p-title">
                {p.title}
                <span className="sub">{p.sub}</span>
              </div>
              <div className="p-desc">{p.desc}</div>
              <div className="p-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
