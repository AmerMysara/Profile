import { useEffect, useState } from 'react'
import type { Project } from '../data/projects'

type Props = {
  project: Project
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
  const [open, setOpen] = useState(false)
  const [closing, setClosing] = useState(false)

  // Fade in on mount
  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(true))
    return () => cancelAnimationFrame(id)
  }, [])

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  // Escape to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClose = () => {
    if (closing) return
    setClosing(true)
    setOpen(false)
    window.setTimeout(onClose, 300)
  }

  const stillLabel = `${project.plain.toUpperCase()} · FILM STILL · 2.39 : 1`

  return (
    <>
      <button
        type="button"
        className={`modal-backdrop${open ? ' open' : ''}`}
        aria-label="Close case study"
        onClick={handleClose}
      />
      <div className={`modal${open ? ' open' : ''}`} role="dialog" aria-modal="true">
        <div className="modal-header">
          <div className="m-num">
            CASE STUDY · N° {project.num} · {project.year}
          </div>
          <button type="button" className="modal-close" aria-label="Close" onClick={handleClose}>
            ✕
          </button>
        </div>

        <div className={`modal-still${project.youtubeId ? ' has-video' : ''}`} data-label={project.youtubeId ? undefined : stillLabel}>
          {project.youtubeId ? (
            <iframe
              src={`https://www.youtube.com/embed/${project.youtubeId}?autoplay=0&rel=0&modestbranding=1`}
              title={project.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              style={{ width: '100%', height: '100%', border: 'none' }}
            />
          ) : null}
        </div>

        <div className="modal-body">
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: project.title }} />
            <div className="m-sub">
              {project.client} — {project.role}
            </div>
            <p>{project.summary}</p>
          </div>

          <div>
            <div className="m-section">
              <div className="pha">
                <div className="pha-k">Problem</div>
                <div className="pha-v">{project.problem}</div>
              </div>
              <div className="pha">
                <div className="pha-k">Approach</div>
                <div className="pha-v">{project.approach}</div>
              </div>
              <div className="pha">
                <div className="pha-k">Outcome</div>
                <div className="pha-v">{project.outcome}</div>
              </div>
            </div>

            <div className="m-section">
              <div className="m-label">Tools</div>
              <div className="tools">
                {project.tools.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
