export type ReelChapter = {
  title: string
  meta: string
  dur: number
  badge: string
  gradient: string
  videoId?: string
}

export const REEL: ReelChapter[] = [
  {
    title: 'Mostafa Seed-Ahmed',
    meta: 'Chapter 01',
    dur: 45,
    badge: 'Documentary',
    gradient:
      'radial-gradient(ellipse at 30% 40%, rgba(0,102,255,0.28), transparent 70%), linear-gradient(160deg,#0b0d12,#020203)',
    videoId: '0G16Pq4Q588',
  },
  {
    title: 'Where is the light',
    meta: 'Chapter 02',
    dur: 60,
    badge: 'Experimental',
    gradient:
      'radial-gradient(ellipse at 70% 55%, rgba(255,180,120,0.22), transparent 70%), linear-gradient(160deg,#120b07,#040202)',
    videoId: 'q8ATEsJqyPk',
  },
  {
    title: 'السودان واشياء اخرى',
    meta: 'Chapter 03',
    dur: 35,
    badge: 'Short',
    gradient:
      'radial-gradient(ellipse at 50% 50%, rgba(155,138,251,0.22), transparent 70%), linear-gradient(160deg,#0b0912,#020203)',
    videoId: 'HcEAfXA44SY',
  },
]

export const TOTAL_DUR = REEL.reduce((s, r) => s + r.dur, 0)
