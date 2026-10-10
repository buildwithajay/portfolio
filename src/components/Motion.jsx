import { useRef } from "react"
import { motion as Motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion"

export function PageTransition({ children }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={reduceMotion ? { opacity: 1 } : { opacity: 0, y: -8 }}
      transition={{ duration: reduceMotion ? 0 : 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  )
}

export function Reveal({ children, className = "", delay = 0 }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.65, delay: reduceMotion ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  )
}

export function Pressable({ children, className = "" }) {
  const reduceMotion = useReducedMotion()

  return (
    <Motion.span
      className={className}
      whileHover={reduceMotion ? undefined : { y: -2 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ duration: 0.18 }}
    >
      {children}
    </Motion.span>
  )
}

export function StaggeredWords({ children, className = "" }) {
  const reduceMotion = useReducedMotion()
  const words = children.split(" ")

  return (
    <Motion.span
      className={className}
      aria-label={children}
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.055 } } }}
    >
      {words.map((word, index) => (
        <span className="word-mask" aria-hidden="true" key={`${word}-${index}`}>
          <Motion.span
            variants={{ hidden: reduceMotion ? { opacity: 1 } : { y: "110%", rotate: 2 }, visible: { y: 0, rotate: 0, opacity: 1 } }}
            transition={{ duration: reduceMotion ? 0 : 0.72, ease: [0.22, 1, 0.36, 1] }}
          >
            {word}
          </Motion.span>
        </span>
      ))}
    </Motion.span>
  )
}

export function Magnetic({ children, className = "" }) {
  const ref = useRef(null)
  const reduceMotion = useReducedMotion()
  const x = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 })
  const y = useSpring(useMotionValue(0), { stiffness: 250, damping: 18 })

  function move(event) {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <Motion.span ref={ref} className={className} style={{ x, y }} onPointerMove={move} onPointerLeave={reset}>
      {children}
    </Motion.span>
  )
}
