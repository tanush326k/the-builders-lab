import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { BuildersQuest } from '@/components/dna/BuildersQuest'
import { Zap } from 'lucide-react'

export function Lab() {
  return (
    <section
      id="lab"
      className="section-spacing section-dark border-t border-[var(--color-border)]"
      aria-labelledby="lab-heading"
    >
      <div className="container-content">

        {/* Section header */}
        <RevealOnScroll className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="section-label">Interactive Feature</span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)] rounded-sm">
              <Zap size={10} className="text-[var(--color-accent)]" aria-hidden="true" />
              <span className="font-mono text-[var(--color-accent)] uppercase tracking-wider" style={{ fontSize: '0.6rem' }}>Signature Experience</span>
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 items-end">
            <h2
              id="lab-heading"
              className="font-display italic text-[var(--color-text-1)]"
              style={{ fontSize: 'var(--text-4xl)', lineHeight: 1.1 }}
            >
              Builder's<br />Quest.
            </h2>
            <div>
              <p className="text-[var(--color-text-2)] leading-relaxed mb-3" style={{ fontSize: 'var(--text-base)' }}>
                Software creation is an expression of instinct and craft. This short interactive journey
                maps your problem-solving approach to a genuine builder archetype.
              </p>
              <p className="font-mono text-[var(--color-text-3)]" style={{ fontSize: 'var(--text-xs)' }}>
                Takes about 60 seconds · No login · No data collected
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* The quest itself */}
        <RevealOnScroll delay={0.1}>
          <BuildersQuest />
        </RevealOnScroll>

      </div>
    </section>
  )
}
