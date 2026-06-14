import { Moon, Sun } from "lucide-react"
import { useTheme } from "../../context/ThemeContext"
import "./ThemeToggle.css"

function ThemeToggle({ variant = "desktop" }) {
  const { isDark, isAnimating, toggleTheme } = useTheme()

  const label = isDark ? "Yorug' rejim" : "Qorong'u rejim"

  if (variant === "mobile") {
    return (
      <button
        type="button"
        className="theme-toggle theme-toggle--mobile"
        onClick={toggleTheme}
        disabled={isAnimating}
        aria-label={label}
        aria-pressed={isDark}
      >
        <span className="theme-toggle__icon" aria-hidden="true">
          {isDark ? <Sun size={20} /> : <Moon size={20} />}
        </span>
        <span className="theme-toggle__label">{label}</span>
      </button>
    )
  }

  return (
    <button
      type="button"
      className="theme-toggle theme-toggle--desktop"
      onClick={toggleTheme}
      disabled={isAnimating}
      aria-label={label}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span
          className={[
            "theme-toggle__thumb",
            isDark ? "theme-toggle__thumb--dark" : "",
          ].join(" ")}
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
        </span>
      </span>
    </button>
  )
}

export default ThemeToggle
