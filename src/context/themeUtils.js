export const THEME_STORAGE_KEY = "theme"

export function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function getInitialTheme() {
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  if (stored === "dark" || stored === "light") return stored
  return getSystemTheme()
}

export function applyThemeToDocument(theme) {
  document.documentElement.setAttribute("data-theme", theme)
  document.documentElement.style.colorScheme = theme
}

export function getWaveRadius(x, y) {
  return (
    Math.ceil(
      Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y),
      ),
    ) + 64
  )
}

export function getButtonOrigin(element) {
  const rect = element.getBoundingClientRect()
  return {
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
  }
}

export const THEME_COLORS = {
  light: {
    surface: "#F8FAFC",
    glow: "rgba(79, 70, 229, 0.45)",
    ring: "rgba(99, 102, 241, 0.65)",
  },
  dark: {
    surface: "#0B1120",
    glow: "rgba(99, 102, 241, 0.55)",
    ring: "rgba(129, 140, 248, 0.75)",
  },
}

export const WAVE_DURATION = 0.75
export const WAVE_EASE = [0.65, 0, 0.35, 1]
