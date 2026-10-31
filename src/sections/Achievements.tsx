import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { profile } from '@/data/profile'
import { Flame, MapPin, Trophy } from 'lucide-react'

export function Achievements() {
  const events = profile.eventsAndChallenges

  const liveEvents = events.filter((e) => e.category === 'In-Person Event')
  const challenges = events.filter((e) => e.category !== 'In-Person Event')

  return (
    <section
      id="achievements"
      className="section-spacing section-dark border-t border-[var(--color-border)]"
      aria-labelledby="achievements-heading"
    >
      <div className="container-content">

        {/* Section Header */}
        <RevealOnScroll className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="section-label">Milestones · Events · Technical Challenges</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-end">
            <div>
              <h2
                id="achievements-heading"
                className="font-display italic text-[var(--color-text-1)] mb-4"
                style={{ fontSize: 'var(--text-4xl)', lineHeight: 1.1 }}
              >
                Track record &amp; experiences.
              </h2>
              <p className="text-[var(--color-text-2)] leading-relaxed" style={{ fontSize: 'var(--text-base)' }}>
                Demonstrating consistency through in-person developer conferences, competitive coding challenges, prompt engineering hackathons, and engineering rigor backed by real automated test suites.
              </p>
            </div>

            {/* Test Rigor Highlight Card */}
            <div className="p-5 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] flex items-center gap-4">
              <div className="w-12 h-12 rounded-xs border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)] flex items-center justify-center text-[var(--color-accent)] shrink-0">
                <Trophy size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="font-display italic text-2xl text-[var(--color-accent)] leading-none mb-1">
                  129 Documented Tests
                </p>
                <p className="text-xs text-[var(--color-text-3)] font-mono">
                  ClauseLens: 97 Vitest tests · CarbonTrack: 32 Pytest tests
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Left Column: In-Person Live Developer Events */}
          <div>
            <div className="flex items-center gap-2 mb-8 pb-3 border-b border-[var(--color-border)]">
              <MapPin size={18} className="text-[var(--color-accent)]" aria-hidden="true" />
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-[var(--color-text-1)]">
                In-Person &amp; Live Technical Events
              </h3>
            </div>

            <div className="space-y-0 relative">
              {liveEvents.map((event, idx) => (
                <RevealOnScroll key={event.name} delay={idx * 0.08}>
                  <div className="timeline-item pb-8">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <span className="font-mono text-xs text-[var(--color-accent)] font-semibold">
                        {event.date}
                      </span>
                      {event.tag && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-xs bg-[var(--color-surface-2)] text-[var(--color-text-2)] border border-[var(--color-border)] uppercase tracking-wider">
                          {event.tag}
                        </span>
                      )}
                    </div>

                    <h4 className="font-display italic text-xl text-[var(--color-text-1)] mb-2">
                      {event.name}
                    </h4>

                    <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                      {event.outcome}
                    </p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Note on In-Person Engagement */}
            <div className="p-4 rounded-xs border border-[var(--color-border)] bg-[var(--color-surface)] mt-2">
              <p className="font-mono text-xs text-[var(--color-text-3)] leading-relaxed">
                <strong className="text-[var(--color-text-1)]">Learning through immersion:</strong> Attending developer days and community gatherings builds real dialogue with senior architects and peer practitioners.
              </p>
            </div>
          </div>

          {/* Right Column: Technical Challenges, Hackathons & Sprints */}
          <div>
            <div className="flex items-center gap-2 mb-8 pb-3 border-b border-[var(--color-border)]">
              <Flame size={18} className="text-[var(--color-accent)]" aria-hidden="true" />
              <h3 className="font-mono text-sm font-semibold uppercase tracking-wider text-[var(--color-text-1)]">
                Challenges, Hackathons &amp; Sprints
              </h3>
            </div>

            <div className="space-y-4">
              {challenges.map((item, idx) => {
                const isHighlight = item.tag === 'Won AWS Jacket' || item.tag === 'Voice AI Experiment'
                return (
                  <RevealOnScroll key={item.name} delay={idx * 0.06}>
                    <div
                      className={`p-5 rounded-sm border transition-colors ${
                        isHighlight
                          ? 'border-[var(--color-accent-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)]'
                          : 'border-[var(--color-border)] bg-[var(--color-surface-2)] hover:border-[var(--color-border-strong)]'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-mono text-xs text-[var(--color-text-3)]">
                          {item.date}
                        </span>
                        {item.tag && (
                          <span
                            className={`font-mono text-[10px] px-2 py-0.5 rounded-xs border uppercase tracking-wider font-medium ${
                              isHighlight
                                ? 'bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border-[var(--color-accent-border)]'
                                : 'bg-[var(--color-bg)] text-[var(--color-text-2)] border-[var(--color-border)]'
                            }`}
                          >
                            {item.tag}
                          </span>
                        )}
                      </div>

                      <h4 className="font-semibold text-sm text-[var(--color-text-1)] mb-1">
                        {item.name}
                      </h4>

                      <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                        {item.outcome}
                      </p>
                    </div>
                  </RevealOnScroll>
                )
              })}
            </div>

            {/* MoneyBuddy Clarification Note */}
            <div className="p-4 rounded-xs border-l-2 border-[var(--color-accent)] bg-[var(--color-accent-subtle)] mt-6">
              <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                <strong className="text-[var(--color-text-1)]">Project Scope Note:</strong> MoneyBuddy was an experimental voice agent created within project branches during the Murf AI challenge. Consistent with challenge rules, it is chronicled as a hackathon experiment rather than an eleventh standalone portfolio project.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
