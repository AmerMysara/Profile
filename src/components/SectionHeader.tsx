import type { ReactNode } from 'react'

type Props = {
  num: string
  title: ReactNode
  right: ReactNode
}

export function SectionHeader({ num, title, right }: Props) {
  return (
    <div className="section-header" data-reveal>
      <div className="sh-left">
        <div className="sh-num">{num}</div>
        <h2>{title}</h2>
      </div>
      <div className="sh-right">{right}</div>
    </div>
  )
}
