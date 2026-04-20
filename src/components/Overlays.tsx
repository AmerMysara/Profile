import { useCursor } from '../hooks/useCursor'

export function Overlays() {
  const cursorRef = useCursor()
  return (
    <>
      <div className="grain" aria-hidden />
      <div className="vignette" aria-hidden />
      <div ref={cursorRef} className="custom-cursor" aria-hidden />
    </>
  )
}
