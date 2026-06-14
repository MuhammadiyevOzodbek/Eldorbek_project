import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react"
import ThemeWave from "../components/shared/ThemeWave"
import {
  THEME_STORAGE_KEY,
  applyThemeToDocument,
  getButtonOrigin,
  getInitialTheme,
} from "./themeUtils"

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  const [wave, setWave] = useState(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const prefersReducedMotion = useMemo(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  )

  useEffect(() => {
    applyThemeToDocument(theme)
    localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const finishWave = useCallback((applyTheme) => {
    if (applyTheme) setTheme(applyTheme)
    setWave(null)
    setIsAnimating(false)
  }, [])

  const toggleTheme = useCallback(
    (event) => {
      if (isAnimating) return

      const nextTheme = theme === "dark" ? "light" : "dark"
      const origin = getButtonOrigin(event.currentTarget)

      if (prefersReducedMotion) {
        setTheme(nextTheme)
        return
      }

      setIsAnimating(true)

      if (nextTheme === "light") {
        // Opening — yorug'lik toggle'dan tashqariga kengayadi
        setWave({
          origin,
          mode: "opening",
          overlayTheme: "light",
          applyOnComplete: "light",
        })
      } else {
        // Closing — eski yorug' qatlam ichkariga qisqaradi
        setTheme("dark")
        setWave({
          origin,
          mode: "closing",
          overlayTheme: "light",
          applyOnComplete: null,
        })
      }
    },
    [theme, isAnimating, prefersReducedMotion],
  )

  const value = useMemo(
    () => ({
      theme,
      isDark: theme === "dark",
      isAnimating,
      toggleTheme,
    }),
    [theme, isAnimating, toggleTheme],
  )

  return (
    <ThemeContext.Provider value={value}>
      {children}
      {wave && (
        <ThemeWave
          key={`${wave.mode}-${wave.origin.x}-${wave.origin.y}`}
          origin={wave.origin}
          mode={wave.mode}
          overlayTheme={wave.overlayTheme}
          onComplete={() => finishWave(wave.applyOnComplete)}
        />
      )}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }
  return context
}
