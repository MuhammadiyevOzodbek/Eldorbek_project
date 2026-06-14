import { useCallback, useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { ArrowLeft, Home, Mail } from "lucide-react"
import usePageMeta from "../../hooks/usePageMeta"
import { useTheme } from "../../context/ThemeContext"
import "./NotStyle.css"

const PARTICLE_COUNT = 48
const PARTICLE_COUNT_MOBILE = 18

function Particles({ reduced }) {
  const [count, setCount] = useState(PARTICLE_COUNT)

  useEffect(() => {
    const update = () =>
      setCount(window.innerWidth < 768 ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  const particles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        duration: 12 + Math.random() * 18,
        delay: Math.random() * 6,
        opacity: 0.15 + Math.random() * 0.45,
      })),
    [count],
  )

  if (reduced) return null

  return (
    <div className="notfound__particles" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="notfound__particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

function NotPage() {
  const { isDark } = useTheme()
  const [reducedMotion, setReducedMotion] = useState(false)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  const parallaxX = useTransform(springX, [-0.5, 0.5], [-18, 18])
  const parallaxY = useTransform(springY, [-0.5, 0.5], [-12, 12])
  const parallaxRotate = useTransform(springX, [-0.5, 0.5], [-3, 3])
  const bgShiftX = useTransform(springX, [-0.5, 0.5], [-20, 20])
  const bgShiftY = useTransform(springY, [-0.5, 0.5], [-15, 15])

  usePageMeta({
    title: "404 — Sahifa topilmadi | Eldorbek Yulchiyev",
    description: "Sahifa topilmadi. Bosh sahifaga qayting yoki bog'laning.",
    ogTitle: "404 Page Not Found",
    ogDescription: "This page does not exist or has been moved.",
  })

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    )
  }, [])

  const handleMouseMove = useCallback(
    (e) => {
      if (reducedMotion) return
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      mouseX.set(x)
      mouseY.set(y)
    },
    [mouseX, mouseY, reducedMotion],
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.12 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.65, 0, 0.35, 1] },
    },
  }

  const numberVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: [0.65, 0, 0.35, 1] },
    },
  }

  return (
    <div
      className={["notfound", isDark ? "notfound--dark" : "notfound--light"].join(" ")}
      onMouseMove={handleMouseMove}
      role="main"
      aria-labelledby="notfound-title"
    >
      <motion.div
        className="notfound__bg-shift"
        style={{ x: reducedMotion ? 0 : bgShiftX, y: reducedMotion ? 0 : bgShiftY }}
        aria-hidden="true"
      >
        <div className="notfound__gradient" />
        <div className="notfound__grid" />
        <div className="notfound__noise" />
        <div className="notfound__orb notfound__orb--1" />
        <div className="notfound__orb notfound__orb--2" />
        <div className="notfound__orb notfound__orb--3" />
      </motion.div>

      <Particles reduced={reducedMotion} />

      <motion.div
        className="notfound__content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="notfound__badge" variants={itemVariants}>
          ERROR 404
        </motion.span>

        <motion.h1
          id="notfound-title"
          className={[
            "notfound__number",
            reducedMotion ? "" : "notfound__number--glitch",
          ].join(" ")}
          variants={numberVariants}
          style={
            reducedMotion
              ? undefined
              : { x: parallaxX, y: parallaxY, rotateZ: parallaxRotate }
          }
          aria-label="404"
        >
          <span className="notfound__digit" aria-hidden="true">
            4
          </span>
          <span className="notfound__digit notfound__digit--outline" aria-hidden="true">
            0
          </span>
          <span className="notfound__digit" aria-hidden="true">
            4
          </span>
          {!reducedMotion && (
            <span className="notfound__glitch-layer" aria-hidden="true">
              404
            </span>
          )}
        </motion.h1>

        <motion.div className="notfound__text" variants={itemVariants}>
          <h2 className="notfound__title-uz">Sahifa topilmadi</h2>
          <p className="notfound__title-en">Page Not Found</p>
          <p className="notfound__desc">
            This page does not exist or has been moved
          </p>
        </motion.div>

        <motion.div className="notfound__actions" variants={itemVariants}>
          <Link to="/" className="notfound__btn notfound__btn--primary" aria-label="Bosh sahifaga qaytish">
            <Home size={18} aria-hidden="true" />
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="notfound__btn notfound__btn--secondary"
            aria-label="Bog'lanish sahifasiga o'tish"
          >
            <Mail size={18} aria-hidden="true" />
            Contact Me
          </Link>
        </motion.div>

        <motion.p className="notfound__hint" variants={itemVariants}>
          <ArrowLeft size={14} aria-hidden="true" />
          Yo&apos;qolgan bo&apos;lsangiz, xavotir olmang — uyga qaytamiz
        </motion.p>
      </motion.div>
    </div>
  )
}

export default NotPage
