import { useEffect, useRef, useState } from "react"
import "./StatCounter.css"

function StatCounter({ value, suffix = "", label, duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const startTime = performance.now()

          const animate = (now) => {
            const progress = Math.min((now - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * value))

            if (progress < 1) requestAnimationFrame(animate)
            else setCount(value)
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value, duration])

  return (
    <div className="stat-counter glass-card" ref={ref}>
      <div className="stat-counter__value">
        {count}
        {suffix}
      </div>
      <div className="stat-counter__label">{label}</div>
    </div>
  )
}

export default StatCounter
