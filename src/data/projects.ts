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
    title: 'Le "Sumbok"',
    plain: 'Le "Sumbok"',
    client: 'Personal — AI short film',
    year: '2026',
    role: 'Writer · Director · Editor · Sound',
    summary:
      `An AI short film exploring the experience of illegal migration through the eyes of a young man standing at the edge of the sea, at the moment between setting sail or staying behind. He confronts intense psychological struggles, a battle between life and death, and the fear of the unknown.\n\nThe Crossing reflects the profound symbolism of illegal migration, its driving forces, and the deadly risks faced by those chasing distant dreams, highlighting the weight of choices, loss, and fragile hope.`,
    problem: 'Prove that generative video can carry real dramatic weight — not a look, a feeling.',
    approach:
      'Storyboarded like a live shoot. Fully AI-driven with selectively integrated real audio elements for texture and realism. Edited to music, not clip duration.',
    outcome:
      'Selected for regional awards recognition and shortlisted in local AI film competitions; reached 10K views within the first week on social media platforms.',
    tools: ['Runway Gen-3', 'Sora', 'Kling', 'Super-16 plates', 'DaVinci Resolve', 'Suno', 'After Effects'],
  },
  {
    num: '002',
    title: 'Light He Could Not Keep',
    plain: 'Light He Could Not Keep',
    client: 'A documentary film',
    year: '2025',
    role: 'Director · Creative Lead · Finisher',
    summary:
      `A short documentary set in Sudan during the war, following photographer Maazen Alrashid, who made an extraordinary sacrifice: he sold his own photographs to fund a community kitchen in his neighborhood. What once were captured moments and personal work became a means of survival for others. In a time of collapse and uncertainty, his images were no longer kept as art—they were exchanged for food, dignity, and collective care.\n\nThe film explores this fragile line between creation and survival, and how in the harshest conditions, a camera can shift from a tool of memory into an act of resistance and humanity.`,
    problem: 'A human story captured in documentary form—carried through a timeline beyond the limits of any traditional production budget.',
    approach:
      'Filmed under harsh and challenging conditions during wartime, capturing real moments as they unfolded. The story was then shaped through editing in Adobe Premiere to craft an emotional and inspiring human narrative.',
    outcome:
      'Edited in an uninterrupted 24-hour session and completed under intense time pressure, the film went on to be screened at the Sudan Frame Festival.',
    tools: ['Adobe Premiere', 'Envato', 'Adobe Photoshop'],
  },
  {
    num: '003',
    title: 'The Silent Cells',
    plain: 'The Silent Cells',
    client: 'Short Audiovisual Work',
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

]
