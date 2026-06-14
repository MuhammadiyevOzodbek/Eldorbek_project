import { useCallback, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import {
  THEME_COLORS,
  WAVE_DURATION,
  WAVE_EASE,
  getWaveRadius,
} from "../../context/themeUtils"
import "./ThemeWave.css"

export default function ThemeWave({ origin, mode, overlayTheme, onComplete }) {
  const finishedRef = useRef(false)
  const isOpening = mode === "opening"

  const radius = getWaveRadius(origin.x, origin.y)
  const colors = THEME_COLORS[overlayTheme]
  const clipFull = `circle(${radius}px at ${origin.x}px ${origin.y}px)`
  const clipZero = `circle(0px at ${origin.x}px ${origin.y}px)`

  const finish = useCallback(() => {
    if (finishedRef.current) return
    finishedRef.current = true
    onComplete()
  }, [onComplete])

  useEffect(() => {
    const timer = setTimeout(finish, WAVE_DURATION * 1000 + 200)
    return () => clearTimeout(timer)
  }, [finish])

  return (
    <div
      className={[
        "theme-wave",
        isOpening ? "theme-wave--opening" : "theme-wave--closing",
      ].join(" ")}
      aria-hidden="true"
    >
      <motion.div
        className="theme-wave__fill"
        style={{ backgroundColor: colors.surface }}
        initial={{ clipPath: isOpening ? clipZero : clipFull }}
        animate={{ clipPath: isOpening ? clipFull : clipZero }}
        transition={{ duration: WAVE_DURATION, ease: WAVE_EASE }}
        onAnimationComplete={finish}
      />

      <motion.div
        className="theme-wave__glow"
        style={{
          left: origin.x,
          top: origin.y,
          boxShadow: `0 0 40px 14px ${colors.glow}, 0 0 80px 28px ${colors.glow}`,
          borderColor: colors.ring,
        }}
        initial={
          isOpening
            ? { width: 0, height: 0, opacity: 0.9 }
            : { width: radius * 2, height: radius * 2, opacity: 0.85 }
        }
        animate={
          isOpening
            ? { width: radius * 2, height: radius * 2, opacity: 0 }
            : { width: 0, height: 0, opacity: 0 }
        }
        transition={{ duration: WAVE_DURATION, ease: WAVE_EASE }}
      />
    </div>
  )
}
