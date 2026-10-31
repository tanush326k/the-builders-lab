import { motion, useInView } from 'framer-motion'
import { useRef, type ReactNode } from 'react'
import { useReducedMotion } from '@/lib/useReducedMotion'

interface RevealOnScrollProps {
  children: ReactNode
  delay?: number
  className?: string
  once?: boolean
}

export function RevealOnScroll({
  children,
  delay = 0,
  className = '',
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once, margin: '-80px' })
  const reduced = useReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? undefined : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={
        reduced
          ? { duration: 0 }
          : {
              duration: 0.5,
              delay,
              ease: [0.25, 1, 0.5, 1],
            }
      }
    >
      {children}
    </motion.div>
  )
}

