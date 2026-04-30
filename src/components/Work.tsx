import { useEffect, useRef, useState } from 'react'
import { PROJECTS, type Project } from '../data/projects'
import { SectionHeader } from './SectionHeader'
import { ProjectModal } from './ProjectModal'

export function Work() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)
  const [previewIdx, setPreviewIdx] = useState<number | null>(null)
  const previewRef = useRef<HTMLDivElement | null>(null)

  // Track the cursor so the floating work preview can follow it
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = previewRef.current
      if (!el) return
      el.style.top = `${e.clientY}px`
      el.style.left = `${e.clientX + 220}px`
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const previewProject: Project | null = previewIdx != null ? PROJECTS[previewIdx]! : null
  const activeProject: Project | null = activeIdx != null ? PROJECTS[activeIdx]! : null

  return (
    <>
      <section id="work">
        <div className="container">
          <SectionHeader
            num="§ 04 — SELECTED WORK"
            title="Some of creative work"
            right="A cross-section of branded film, personal experiments and social-native storytelling. Click any title to open the case study."
          />

          <div className="work-index" data-reveal>
            {PROJECTS.map((p, i) => (
              <button
                key={p.num}
                type="button"
                className="work-row"
                onClick={() => setActiveIdx(i)}
                onMouseEnter={() => setPreviewIdx(i)}
                onMouseLeave={() => setPreviewIdx((cur) => (cur === i ? null : cur))}
              >
                <div className="wr-num">N° {p.num}</div>
                <div className="wr-title" dangerouslySetInnerHTML={{ __html: p.title }} />
                <div className="wr-client">{p.client}</div>
                <div className="wr-year">{p.year}</div>
                <div className="wr-plus">+</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div
        ref={previewRef}
        className={`work-preview${previewProject ? ' visible' : ''}`}
        data-label={previewProject ? `${previewProject.plain.toUpperCase()} · ${previewProject.year}` : ''}
      >
        <div className="ws-inner" />
      </div>

      {activeProject ? (
        <ProjectModal project={activeProject} onClose={() => setActiveIdx(null)} />
      ) : null}
    </>
  )
}
