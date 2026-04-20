export type Project = {
  num: string
  title: string
  plain: string
  client: string
  year: string
  role: string
  summary: string
  problem: string
  approach: string
  outcome: string
  tools: string[]
}

export const PROJECTS: Project[] = [
  {
    num: '001',
    title: 'GHOST / <span class="ital">aleph</span>',
    plain: 'Ghost / Aleph',
    client: 'Personal — AI short film',
    year: '2025',
    role: 'Writer · Director · Editor · Sound',
    summary:
      'A six-minute AI-native short about a photograph that refuses to stay still. Generative plates stitched into hand-held super-16; an original score from Suno and sound design in Resolve Fairlight.',
    problem: 'Prove that generative video can carry real dramatic weight — not a look, a feeling.',
    approach:
      'Storyboarded like a live shoot. 80% AI, 20% on a real GF1 for grain and hands. Edited to music, not to clip length.',
    outcome:
      'Selected for two regional AI-film showcases; picked up by a curated Letterboxd list with 12K views in week one.',
    tools: ['Runway Gen-3', 'Sora', 'Kling', 'Super-16 plates', 'DaVinci Resolve', 'Suno', 'After Effects'],
  },
  {
    num: '002',
    title: 'HORIZON <span class="ital">one</span>',
    plain: 'Horizon One',
    client: 'TECHKS — Branded cinematic film',
    year: '2025',
    role: 'Director · Creative Lead · Finisher',
    summary:
      'A 90-second cinematic brand film launched across LinkedIn, Instagram and YouTube — an AI-generated world tour anchored with one real actor and a single real location.',
    problem: "Launch a category story on a timeline that didn't fit a traditional shoot budget.",
    approach:
      'Hybrid pipeline — prompt-boarded the world in Midjourney, animated in Luma and Kling, tied it together with live plate and original voiceover.',
    outcome:
      'Delivered in 11 days end-to-end. 3.2× higher completion rate vs previous TECHKS launch film on LinkedIn.',
    tools: ['Luma Dream Machine', 'Kling', 'Midjourney', 'ElevenLabs', 'Premiere Pro', 'DaVinci Resolve'],
  },
  {
    num: '003',
    title: 'MANO / <span class="ital">in motion</span>',
    plain: 'Mano / In Motion',
    client: 'Mano Marketing — Campaign edit suite',
    year: '2024',
    role: 'Videographer · Editor · Colorist',
    summary:
      'Eight cross-platform campaign cuts in a single quarter — cinematic edits, color, audio sync and delivery for retail, hospitality and property clients.',
    problem: 'Turn raw mixed-format footage into platform-ready cuts without losing a cinematic signature.',
    approach:
      'Built a reusable color pipeline in DaVinci and a master edit template per client, pushing platform-specific versions downstream.',
    outcome: 'Delivery time per cut dropped ~40%; client satisfaction lift across eight back-to-back briefs.',
    tools: ['Premiere Pro', 'DaVinci Resolve', 'After Effects', 'Lightroom', 'Audition'],
  },
  {
    num: '004',
    title: 'SIGNAL / <span class="ital">daily</span>',
    plain: 'Signal / Daily',
    client: 'Personal — TikTok / short-form reel',
    year: '2024 — PRESENT',
    role: 'Creator · Director · Editor · Sound',
    summary:
      'An ongoing personal channel of vertical cinematic reels — concept to mix, all solo — that grew to 20,000+ followers and seeded inbound film work.',
    problem: 'Build a living case study for cinematic AI storytelling on a vertical, sound-on platform.',
    approach: 'One format, one voice: first-frame hook, single emotional beat, last-frame button. Rinse weekly.',
    outcome:
      '20K+ followers on @amer.mysara; several cuts above 500K views; direct pipeline for freelance and agency work.',
    tools: ['CapCut', 'Premiere Pro', 'Runway', 'Suno', 'Lightroom Mobile'],
  },
  {
    num: '005',
    title: 'HOPE / <span class="ital">rebrand</span>',
    plain: 'Hope / Rebrand',
    client: 'Hope Care Center, Khartoum — Identity & social system',
    year: '2021 — 2023',
    role: 'Lead Designer · Art Director',
    summary:
      'A full visual rebrand — logo system, print collateral, social templates, campaign art — designed to travel across Arabic and English audiences.',
    problem: 'A community-facing brand with inconsistent visuals across teams and channels.',
    approach:
      'Rebuilt the identity around a clean Arabic/Latin pairing and a disciplined social system any team member could extend.',
    outcome: 'Noticeable engagement lift across social channels; the brand still runs on the system three years later.',
    tools: ['Illustrator', 'Photoshop', 'InDesign', 'Lightroom'],
  },
]
