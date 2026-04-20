import { useTheme } from '../hooks/useTheme'

const LABEL: Record<string, string> = {
  dark: 'Dark',
  light: 'Light',
  ivory: 'Ivory',
}

export function ThemeToggle() {
  const { theme, cycle } = useTheme()
  return (
    <button className="theme-toggle" onClick={cycle} aria-label="Toggle theme">
      <span className="dot" />
      <span>{LABEL[theme]}</span>
    </button>
  )
}
