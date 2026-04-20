export type ReelChapter = {
  title: string
  meta: string
  dur: number
  badge: string
  gradient: string
}

export const REEL: ReelChapter[] = [
  {
    title: 'GHOST / <span class="ital">aleph</span>',
    meta: 'Chapter 01',
    dur: 60,
    badge: 'AI · Short',
    gradient:
      'radial-gradient(ellipse at 30% 40%, rgba(0,102,255,0.28), transparent 70%), linear-gradient(160deg,#0b0d12,#020203)',
  },
  {
    title: 'HORIZON <span class="ital">one</span>',
    meta: 'Chapter 02',
    dur: 45,
    badge: 'Branded · TECHKS',
    gradient:
      'radial-gradient(ellipse at 70% 55%, rgba(255,180,120,0.22), transparent 70%), linear-gradient(160deg,#120b07,#040202)',
  },
  {
    title: 'MANO / <span class="ital">in motion</span>',
    meta: 'Chapter 03',
    dur: 35,
    badge: 'Campaign · Edit',
    gradient:
      'radial-gradient(ellipse at 50% 50%, rgba(155,138,251,0.22), transparent 70%), linear-gradient(160deg,#0b0912,#020203)',
  },
  {
    title: 'SIGNAL <span class="ital">daily</span>',
    meta: 'Chapter 04',
    dur: 25,
    badge: 'Vertical · Personal',
    gradient:
      'radial-gradient(ellipse at 20% 70%, rgba(232,197,71,0.18), transparent 70%), linear-gradient(160deg,#11100a,#030302)',
  },
  {
    title: 'HOPE / <span class="ital">rebrand</span>',
    meta: 'Chapter 05',
    dur: 15,
    badge: 'Design · Identity',
    gradient:
      'radial-gradient(ellipse at 50% 30%, rgba(242,239,233,0.14), transparent 70%), linear-gradient(160deg,#0d0d0f,#040405)',
  },
]

export const TOTAL_DUR = REEL.reduce((s, r) => s + r.dur, 0)
