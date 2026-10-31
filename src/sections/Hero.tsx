import { motion } from 'framer-motion'
import { ArrowDown, Zap, Terminal } from 'lucide-react'
import { useReducedMotion } from '@/lib/useReducedMotion'
import { profile } from '@/data/profile'

const EASE_EXPO = [0.16, 1, 0.3, 1] as const

export function Hero() {
  const reduced = useReducedMotion()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const fade = (delay = 0) => ({
    initial: reduced ? undefined : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: reduced ? { duration: 0 } : { duration: 0.7, delay, ease: EASE_EXPO },
  })

  return (
    <section
      id="hero"
      className="hero-section relative min-h-screen flex flex-col justify-center pt-28 pb-16"
      aria-label="Introduction"
    >
      {/* Subtle radial dot grid overlay */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Laboratory decorative geometric overlay */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[480px] h-[480px] pointer-events-none overflow-hidden opacity-25"
      >
        <svg width="480" height="480" viewBox="0 0 480 480" fill="none">
          <circle cx="480" cy="0" r="320" stroke="currentColor" strokeWidth="0.5" className="text-[var(--color-accent)]" />
          <circle cx="480" cy="0" r="220" stroke="currentColor" strokeWidth="0.5" className="text-[var(--color-accent)]" strokeDasharray="4 4" />
          <circle cx="480" cy="0" r="120" stroke="currentColor" strokeWidth="0.5" className="text-[var(--color-accent)]" />
          <line x1="0" y1="0" x2="480" y2="480" stroke="currentColor" strokeWidth="0.5" className="text-[var(--color-accent)]" strokeDasharray="2 6" />
        </svg>
      </div>

      <div className="container-content relative">
        <div className="max-w-4xl">

          {/* Eyebrow badge */}
          <motion.div {...fade(0)} className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)]">
              <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] cursor-blink" aria-hidden="true" />
              <span className="font-mono text-[var(--color-accent)] uppercase tracking-wider font-semibold" style={{ fontSize: 'var(--text-xs)' }}>
                {profile.name} · {profile.title}
              </span>
              <span className="text-[var(--color-border-strong)]" aria-hidden="true">|</span>
              <span className="font-mono text-[var(--color-text-2)] hidden sm:inline" style={{ fontSize: 'var(--text-xs)' }}>
                B.Tech CSE @ CSI Wesley (2025–2029)
              </span>
            </div>
          </motion.div>

          {/* Main headline — editorial laboratory design */}
          <motion.h1
            {...fade(0.08)}
            className="font-display italic text-[var(--color-text-1)] mb-6 leading-[1.02]"
            style={{ fontSize: 'var(--text-6xl)' }}
          >
            THE{' '}
            <span className="text-[var(--color-accent)]">BUILDER'S</span>
            <br />
            LAB.
          </motion.h1>

          {/* Tagline */}
          <motion.p
            {...fade(0.15)}
            className="text-[var(--color-text-1)] max-w-xl font-medium mb-3 leading-relaxed"
            style={{ fontSize: 'var(--text-xl)' }}
          >
            {profile.tagline}
          </motion.p>

          {/* Narrative Descriptor */}
          <motion.p
            {...fade(0.2)}
            className="text-[var(--color-text-2)] max-w-2xl mb-10 leading-relaxed"
            style={{ fontSize: 'var(--text-base)' }}
          >
            {profile.story.origin} Driven by a primary passion for cloud architecture, AI-assisted development workflows, and shipping real software that amplifies human capability.
          </motion.p>

          {/* Prominent CTAs */}
          <motion.div
            {...fade(0.26)}
            className="flex flex-col sm:flex-row gap-4 items-start mb-14"
          >
            {/* Primary Action — Explore Projects */}
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold bg-[var(--color-text-1)] text-[var(--color-bg)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-colors duration-200 active:scale-[0.98] cursor-pointer"
              style={{ borderRadius: '2px', letterSpacing: '0.02em' }}
            >
              <Terminal size={16} strokeWidth={2} aria-hidden="true" />
              <span>Explore My Work (10 Projects)</span>
            </button>

            {/* Signature Feature CTA — Discover Your Builder DNA */}
            <button
              onClick={() => scrollTo('lab')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold border-2 border-[var(--color-accent)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-[var(--color-bg)] transition-colors duration-200 active:scale-[0.98] cursor-pointer"
              style={{ borderRadius: '2px', letterSpacing: '0.02em' }}
              aria-label="Discover your Builder DNA through the Builder's Quest instrument"
            >
              <Zap size={16} strokeWidth={2} aria-hidden="true" />
              <span>Discover Your Builder DNA ⚡</span>
            </button>
          </motion.div>

          {/* Quick Verified Rigor Stats */}
          <motion.div
            {...fade(0.32)}
            className="pt-8 border-t border-[var(--color-border)] grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl"
            aria-label="Portfolio highlights"
          >
            <div>
              <p className="font-display italic text-[var(--color-accent)]" style={{ fontSize: 'var(--text-3xl)', lineHeight: 1 }}>
                10
              </p>
              <p className="font-mono text-[var(--color-text-3)] mt-1.5 uppercase tracking-wider" style={{ fontSize: 'var(--text-xs)' }}>
                Shipped Systems
              </p>
            </div>
            <div>
              <p className="font-display italic text-[var(--color-text-1)]" style={{ fontSize: 'var(--text-3xl)', lineHeight: 1 }}>
                129
              </p>
              <p className="font-mono text-[var(--color-text-3)] mt-1.5 uppercase tracking-wider" style={{ fontSize: 'var(--text-xs)' }}>
                Documented Tests
              </p>
            </div>
            <div>
              <p className="font-display italic text-[var(--color-accent)]" style={{ fontSize: 'var(--text-3xl)', lineHeight: 1 }}>
                AWS
              </p>
              <p className="font-mono text-[var(--color-text-3)] mt-1.5 uppercase tracking-wider" style={{ fontSize: 'var(--text-xs)' }}>
                Student Leader
              </p>
            </div>
            <div>
              <p className="font-display italic text-[var(--color-text-1)]" style={{ fontSize: 'var(--text-3xl)', lineHeight: 1 }}>
                MLSA
              </p>
              <p className="font-mono text-[var(--color-text-3)] mt-1.5 uppercase tracking-wider" style={{ fontSize: 'var(--text-xs)' }}>
                Associate Tier
              </p>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Floating scroll prompt */}
      <motion.div
        aria-hidden="true"
        className="absolute bottom-8 right-8 hidden md:block"
        initial={reduced ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <button
          onClick={() => scrollTo('about')}
          className="flex flex-col items-center gap-2 text-[var(--color-text-3)] hover:text-[var(--color-accent)] transition-colors duration-150 cursor-pointer"
          aria-label="Scroll to About section"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
          <ArrowDown size={14} strokeWidth={1.5} />
        </button>
      </motion.div>
    </section>
  )
}
