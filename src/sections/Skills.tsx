import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { skillGroups, type SkillStage } from '@/data/skills'
import { CheckCircle2 } from 'lucide-react'

function getStageBadge(stage: SkillStage) {
  switch (stage) {
    case 'Foundations':
      return {
        label: 'Foundations',
        className: 'border-[var(--color-border-strong)] text-[var(--color-text-2)] bg-[var(--color-surface-2)]',
      }
    case 'Hands-on exploration':
      return {
        label: 'Hands-on',
        className: 'border-[var(--color-accent-border)] text-[var(--color-accent)] bg-[var(--color-accent-subtle)]',
      }
    case 'Currently learning':
      return {
        label: 'Learning',
        className: 'border-[var(--color-amber-border)] text-[var(--color-amber)] bg-[var(--color-amber-subtle)]',
      }
    case 'Development workflow':
      return {
        label: 'Workflow',
        className: 'border-[var(--color-border)] text-[var(--color-text-1)] bg-[var(--color-bg)]',
      }
  }
}

export function Skills() {
  return (
    <section
      id="skills"
      className="section-spacing section-dark border-t border-[var(--color-border)]"
      aria-labelledby="skills-heading"
    >
      <div className="container-content">

        {/* Section Header */}
        <RevealOnScroll className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="section-label">Technical Competencies · Honest Capability</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 items-end">
            <div>
              <h2
                id="skills-heading"
                className="font-display italic text-[var(--color-text-1)] mb-4"
                style={{ fontSize: 'var(--text-4xl)', lineHeight: 1.1 }}
              >
                Technologies &amp; exploration.
              </h2>
              <p className="text-[var(--color-text-2)] leading-relaxed" style={{ fontSize: 'var(--text-base)' }}>
                Organized honestly by current stage of mastery — from core academic foundations and daily developer workflow tooling to cloud platforms and hands-on system builds. No fabricated skill bars or inflated percentages.
              </p>
            </div>

            {/* Legend */}
            <div className="p-4 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-wrap gap-3 items-center">
              <span className="font-mono text-xs uppercase tracking-wider text-[var(--color-text-3)] mr-1">
                Learning Stages:
              </span>
              {(['Foundations', 'Hands-on exploration', 'Currently learning', 'Development workflow'] as SkillStage[]).map((stage) => {
                const badge = getStageBadge(stage)
                return (
                  <span
                    key={stage}
                    className={`font-mono text-[11px] px-2 py-0.5 rounded-xs border font-medium ${badge.className}`}
                  >
                    {badge.label}
                  </span>
                )
              })}
            </div>
          </div>
        </RevealOnScroll>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillGroups.map((group, groupIdx) => (
            <RevealOnScroll key={group.category} delay={groupIdx * 0.08}>
              <div className="h-full p-6 sm:p-7 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col justify-between hover:border-[var(--color-border-strong)] transition-colors">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <h3 className="font-display italic text-xl sm:text-2xl text-[var(--color-text-1)]">
                      {group.category}
                    </h3>
                  </div>
                  <p className="text-xs text-[var(--color-text-3)] mb-6 leading-relaxed">
                    {group.subtitle}
                  </p>

                  {/* Skills List */}
                  <div className="space-y-3">
                    {group.skills.map((skill) => {
                      const badge = getStageBadge(skill.stage)
                      return (
                        <div
                          key={skill.name}
                          className="p-3 rounded-xs border border-[var(--color-border)] bg-[var(--color-bg)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:border-[var(--color-accent-border)] transition-colors"
                        >
                          <div className="flex items-center gap-2.5">
                            <CheckCircle2 size={14} className="text-[var(--color-accent)] shrink-0" aria-hidden="true" />
                            <span className="font-semibold text-sm text-[var(--color-text-1)]">
                              {skill.name}
                            </span>
                          </div>

                          <div className="flex items-center gap-2 pl-6 sm:pl-0">
                            {skill.note && (
                              <span className="text-[11px] text-[var(--color-text-3)] hidden md:inline">
                                {skill.note}
                              </span>
                            )}
                            <span
                              className={`font-mono text-[10px] px-2 py-0.5 rounded-xs border shrink-0 uppercase tracking-wider ${badge.className}`}
                            >
                              {badge.label}
                            </span>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="pt-4 mt-6 border-t border-[var(--color-border)] flex items-center justify-between text-xs text-[var(--color-text-3)] font-mono">
                  <span>Verified in codebase &amp; labs</span>
                  <span className="text-[var(--color-accent)] font-semibold">Active Practice</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        {/* Commitment Callout */}
        <RevealOnScroll className="mt-10">
          <div className="p-5 rounded-sm border-l-2 border-[var(--color-accent)] bg-[var(--color-accent-subtle)] text-xs text-[var(--color-text-2)] leading-relaxed">
            <span className="font-semibold text-[var(--color-text-1)]">Commitment to Transparent Engineering:</span> As an aspiring cloud-focused software developer, I represent all technologies honestly. Skills labeled as <em className="text-[var(--color-text-1)]">Foundations</em> reflect core principles and early exposure; <em className="text-[var(--color-text-1)]">Hands-on</em> reflects verified implementations across my 10 shipped systems; <em className="text-[var(--color-text-1)]">Currently learning</em> denotes ongoing active study paths.
          </div>
        </RevealOnScroll>

      </div>
    </section>
  )
}
