export type ReelChapter = {
  title: string
  meta: string
  dur: number
  badge: string
  gradient: string
}

export const REEL: ReelChapter[] = [
  {
    title: 'Le "Sumbok"',
    meta: 'Chapter 01',
    dur: 60,
    badge: 'AI · Short',
    gradient:
      'radial-gradient(ellipse at 30% 40%, rgba(0,102,255,0.28), transparent 70%), linear-gradient(160deg,#0b0d12,#020203)',
  },
  {
    title: 'Light He Could Not Keep',
    meta: 'Chapter 02',
    dur: 45,
    badge: 'Documentary',
    gradient:
      'radial-gradient(ellipse at 70% 55%, rgba(255,180,120,0.22), transparent 70%), linear-gradient(160deg,#120b07,#040202)',
  },
  {
    title: 'The Silent Cells',
    meta: 'Chapter 03',
    dur: 35,
    badge: 'Campaign · Edit',
    gradient:
      'radial-gradient(ellipse at 50% 50%, rgba(155,138,251,0.22), transparent 70%), linear-gradient(160deg,#0b0912,#020203)',
  },

]

export const TOTAL_DUR = REEL.reduce((s, r) => s + r.dur, 0)
