import { useCallback, useEffect, useState } from 'react'

export type Theme = 'dark' | 'light' | 'ivory'
const ORDER: Theme[] = ['dark', 'light', 'ivory']
const STORAGE_KEY = 'amer.theme'

function readStored(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const v = window.localStorage.getItem(STORAGE_KEY)
  return (v === 'light' || v === 'ivory' || v === 'dark') ? v : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => readStored())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      window.localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      // storage may be unavailable; ignore
    }
  }, [theme])

  const cycle = useCallback(() => {
    setTheme((cur) => ORDER[(ORDER.indexOf(cur) + 1) % ORDER.length]!)
  }, [])

  return { theme, cycle }
}
