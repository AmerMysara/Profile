import { useEffect, useRef } from 'react'

const HOVER_SELECTOR =
  'a, button, .work-row, .pillar, .testi, .reel-chip, .reel-scrubber, .reel-play'

export function useCursor() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const cursor = ref.current
    if (!cursor) return

    // Skip entirely on touch/coarse pointers
    if (window.matchMedia('(pointer: coarse)').matches) return

    let mx = 0
    let my = 0
    let cx = 0
    let cy = 0
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
    }
    const tick = () => {
      cx += (mx - cx) * 0.22
      cy += (my - cy) * 0.22
      cursor.style.transform = `translate(${cx - cursor.offsetWidth / 2}px, ${cy - cursor.offsetHeight / 2}px)`
      raf = requestAnimationFrame(tick)
    }

    const onOver = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) cursor.classList.add('big')
    }
    const onOut = (e: MouseEvent) => {
      if ((e.target as Element)?.closest?.(HOVER_SELECTOR)) cursor.classList.remove('big')
    }

    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseover', onOver)
    document.addEventListener('mouseout', onOut)
    raf = requestAnimationFrame(tick)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      document.removeEventListener('mouseout', onOut)
    }
  }, [])

  return ref
}
