import { useCallback, useEffect, useRef, useState } from 'react'
import { REEL, TOTAL_DUR } from '../data/reel'
import { SectionHeader } from './SectionHeader'

function fmt(s: number) {
  const sec = Math.floor(s)
  return `${String(Math.floor(sec / 60)).padStart(2, '0')}:${String(sec % 60).padStart(2, '0')}`
}

function chapterStart(i: number) {
  let s = 0
  for (let k = 0; k < i; k++) s += REEL[k]!.dur
  return s
}

function currentChapterIdx(t: number) {
  let s = 0
  for (let i = 0; i < REEL.length; i++) {
    s += REEL[i]!.dur
    if (t < s) return i
  }
  return REEL.length - 1
}

export function Reel() {
  const [playing, setPlaying] = useState(false)
  const [t, setT] = useState(0)
  const rafRef = useRef(0)
  const lastFrameRef = useRef(0)
  const scrubberRef = useRef<HTMLDivElement | null>(null)
  const tRef = useRef(0)
  tRef.current = t

  // Animation loop while playing
  useEffect(() => {
    if (!playing) {
      lastFrameRef.current = 0
      return
    }
    const loop = (ts: number) => {
      if (!lastFrameRef.current) lastFrameRef.current = ts
      const dt = (ts - lastFrameRef.current) / 1000
      lastFrameRef.current = ts
      let next = tRef.current + dt
      if (next >= TOTAL_DUR) next = 0
      setT(next)
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(rafRef.current)
  }, [playing])

  const seekTo = useCallback((sec: number) => {
    setT(Math.max(0, Math.min(TOTAL_DUR - 0.1, sec)))
  }, [])

  const onScrubberClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = scrubberRef.current?.getBoundingClientRect()
    if (!rect) return
    const pct = (e.clientX - rect.left) / rect.width
    seekTo(pct * TOTAL_DUR)
  }

  const ci = currentChapterIdx(t)
  const fillPct = (t / TOTAL_DUR) * 100

  return (
    <section id="reel">
      <div className="container">
        <SectionHeader
          num="§ 05 — FILM REEL"
          title={
            <>
              Reel <span className="ital">twenty</span>&thinsp;26.
            </>
          }
          right="A three-minute survey of recent AI-native direction — branded, personal, and in-between. Press play, pull the scrubber around, jump between cuts."
        />

        <p className="reel-intro" data-reveal>
          <span>Seven years of frame-making, compressed into three minutes.</span>{' '}
          <span className="dim">If a single still stops you — that's where I'd like to talk.</span>
        </p>

        <div className="reel-player" data-reveal>
          {REEL.map((r, i) => (
            <div key={i} className={`reel-frame${i === ci ? '' : ' inactive'}`}>
              <div
                className="rf-still"
                style={{
                  background: `${r.gradient}, repeating-linear-gradient(90deg, transparent 0, transparent 9px, rgba(255,255,255,0.02) 9px, rgba(255,255,255,0.02) 10px)`,
                }}
              />
              <div className="rf-badge">{r.badge}</div>
              <div className="rf-meta">{r.meta} · REEL 2026</div>
              <div className="rf-meta-r">
                {String(i + 1).padStart(2, '0')} / {String(REEL.length).padStart(2, '0')}
              </div>
              <div className="rf-title" dangerouslySetInnerHTML={{ __html: r.title }} />
            </div>
          ))}

          <div className="reel-controls">
            <button
              type="button"
              className="reel-play"
              aria-label={playing ? 'Pause reel' : 'Play reel'}
              onClick={() => setPlaying((p) => !p)}
            >
              {playing ? (
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <rect x="3" y="2" width="3" height="10" fill="currentColor" />
                  <rect x="8" y="2" width="3" height="10" fill="currentColor" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 14 14">
                  <polygon points="3,2 12,7 3,12" fill="currentColor" />
                </svg>
              )}
            </button>

            <div className="reel-time">
              {fmt(t)} / {fmt(TOTAL_DUR)}
            </div>

            <div
              ref={scrubberRef}
              className="reel-scrubber"
              role="slider"
              aria-label="Reel scrubber"
              aria-valuemin={0}
              aria-valuemax={TOTAL_DUR}
              aria-valuenow={Math.floor(t)}
              onClick={onScrubberClick}
            >
              <div className="reel-scrubber-fill" style={{ width: `${fillPct}%` }} />
              <div className="reel-scrubber-chapters">
                {REEL.map((r, i) => (
                  <div
                    key={i}
                    className="reel-scrubber-chapter"
                    style={{ width: `${(r.dur / TOTAL_DUR) * 100}%` }}
                  />
                ))}
              </div>
            </div>

            <div className="reel-chips">
              {REEL.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`reel-chip${i === ci ? ' active' : ''}`}
                  onClick={() => seekTo(chapterStart(i) + 0.1)}
                >
                  {String(i + 1).padStart(2, '0')}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
