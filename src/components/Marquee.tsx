const ITEMS = [
  { text: 'AI FILMMAKING' },
  { pre: 'cinematic', text: 'DIRECTION' },
  { text: 'GENERATIVE VIDEO' },
  { text: 'BRANDED SHORTS' },
  { pre: 'hybrid', text: 'WORKFLOWS' },
  { text: 'SOUND DESIGN' },
  { text: 'COLOR & EDIT' },
  { pre: 'story', text: 'FIRST' },
] as const

export function Marquee() {
  // Double the list so the CSS translate(-50%) loop is seamless
  const loop = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((it, i) => (
          <span key={i}>
            {'pre' in it && it.pre ? <span className="ital">{it.pre}&nbsp;</span> : null}
            {it.text}
            <span className="dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
