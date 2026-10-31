import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { profile } from '@/data/profile'
import { Users, Cloud, BookOpen } from 'lucide-react'

export function Leadership() {
  const roles = profile.leadership

  const mlsa = roles.find((r) => r.role.includes('Microsoft'))
  const aws = roles.find((r) => r.role.includes('AWS'))
  const otherRoles = roles.filter((r) => !r.role.includes('Microsoft') && !r.role.includes('AWS'))

  return (
    <section
      id="leadership"
      className="section-spacing section-light border-t border-[var(--color-border)]"
      aria-labelledby="leadership-heading"
    >
      <div className="container-content">

        {/* Section Header */}
        <RevealOnScroll className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="section-label">Community Leadership · Student Ambassadorship</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-end">
            <div>
              <h2
                id="leadership-heading"
                className="font-display italic text-[var(--color-text-1)] mb-4"
                style={{ fontSize: 'var(--text-4xl)', lineHeight: 1.1 }}
              >
                Leadership &amp; community.
              </h2>
              <p className="text-[var(--color-text-2)] leading-relaxed" style={{ fontSize: 'var(--text-base)' }}>
                Engineering is fundamentally collaborative. Rather than isolated coding, I actively invest in leading student tech initiatives, sharing knowledge, demystifying cloud technologies, and fostering community learning.
              </p>
            </div>
            <div className="p-4 rounded-sm border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)]">
              <p className="font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider mb-1">
                Active Student Leadership
              </p>
              <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                Empowering peers through structured learning pathways, university study circles, and cloud workshops across AWS and Microsoft ecosystems.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Top Featured Leadership Cards (MLSA & AWS Leader) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">

          {/* Microsoft Learn Student Ambassador — Associate */}
          {mlsa && (
            <RevealOnScroll delay={0.06}>
              <div className="h-full p-7 rounded-sm border-2 border-[var(--color-border-strong)] bg-[var(--color-surface)] flex flex-col justify-between hover:border-[var(--color-accent)] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,oklch(78%_0.19_140/0.08),transparent_70%)] pointer-events-none" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-xs bg-[var(--color-surface-2)] text-[var(--color-accent)] border border-[var(--color-accent-border)] font-semibold uppercase tracking-wider">
                      Microsoft Ecosystem
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-xs bg-[var(--color-amber-subtle)] text-[var(--color-amber)] border border-[var(--color-amber-border)] font-semibold uppercase tracking-wider">
                      {mlsa.badge} Tier
                    </span>
                  </div>

                  <h3 className="font-display italic text-2xl sm:text-3xl text-[var(--color-text-1)] mb-1">
                    {mlsa.role}
                  </h3>
                  <p className="font-mono text-xs text-[var(--color-accent)] mb-4 font-medium">
                    {mlsa.organization} · {mlsa.period}
                  </p>

                  <p className="text-sm text-[var(--color-text-2)] leading-relaxed mb-6">
                    {mlsa.description}
                  </p>

                  {/* Program Pathway Context Box */}
                  <div className="p-4 rounded-xs border border-[var(--color-border)] bg-[var(--color-bg)] mb-4">
                    <div className="flex items-center gap-2 mb-2 text-[var(--color-text-1)] font-mono text-xs font-semibold uppercase tracking-wider">
                      <BookOpen size={14} className="text-[var(--color-accent)]" aria-hidden="true" />
                      <span>Program Eligibility &amp; Pathway Criteria</span>
                    </div>
                    <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                      {mlsa.pathwayInfo}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between font-mono text-xs text-[var(--color-text-3)]">
                  <span>Current Tier: Associate</span>
                  <span className="text-[var(--color-text-2)]">Global Student Network</span>
                </div>
              </div>
            </RevealOnScroll>
          )}

          {/* AWS Student Builder Group Leader */}
          {aws && (
            <RevealOnScroll delay={0.1}>
              <div className="h-full p-7 rounded-sm border-2 border-[var(--color-border-strong)] bg-[var(--color-surface)] flex flex-col justify-between hover:border-[var(--color-accent)] transition-colors relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(ellipse_at_top_right,oklch(78%_0.19_140/0.08),transparent_70%)] pointer-events-none" />

                <div>
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                    <span className="font-mono text-xs px-2.5 py-1 rounded-xs bg-[var(--color-surface-2)] text-[var(--color-accent)] border border-[var(--color-accent-border)] font-semibold uppercase tracking-wider">
                      Amazon Web Services
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded-xs bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent-border)] font-semibold uppercase tracking-wider">
                      {aws.badge}
                    </span>
                  </div>

                  <h3 className="font-display italic text-2xl sm:text-3xl text-[var(--color-text-1)] mb-1">
                    {aws.role}
                  </h3>
                  <p className="font-mono text-xs text-[var(--color-accent)] mb-4 font-medium">
                    {aws.organization} · {aws.period}
                  </p>

                  <p className="text-sm text-[var(--color-text-2)] leading-relaxed mb-6">
                    {aws.description}
                  </p>

                  {/* Highlights of Role */}
                  <div className="space-y-2.5 mb-4">
                    <div className="p-3 rounded-xs border border-[var(--color-border)] bg-[var(--color-bg)] flex items-start gap-2.5">
                      <Cloud size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                        <strong className="text-[var(--color-text-1)]">Cloud Literacy &amp; Architecture:</strong> Guiding student cohorts in deploying scalable frontends on AWS Amplify and integrating Amazon Bedrock AI models.
                      </p>
                    </div>

                    <div className="p-3 rounded-xs border border-[var(--color-border)] bg-[var(--color-bg)] flex items-start gap-2.5">
                      <Users size={16} className="text-[var(--color-accent)] shrink-0 mt-0.5" aria-hidden="true" />
                      <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                        <strong className="text-[var(--color-text-1)]">Community Building:</strong> Organizing campus study circles, preparing participants for AWS challenges, and celebrating student cloud builders.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between font-mono text-xs text-[var(--color-text-3)]">
                  <span>Tenure: 2026 – 2027</span>
                  <span className="text-[var(--color-accent)] font-semibold">Active Leadership</span>
                </div>
              </div>
            </RevealOnScroll>
          )}

        </div>

        {/* Secondary Leadership Roles (Google Product Expert, GFG Campus Mantri, Comet Affiliate) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherRoles.map((item, idx) => (
            <RevealOnScroll key={item.role} delay={0.14 + idx * 0.06}>
              <div className="h-full p-6 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] flex flex-col justify-between hover:border-[var(--color-border-strong)] transition-colors">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded-xs bg-[var(--color-surface-2)] text-[var(--color-text-2)] border border-[var(--color-border)]">
                      {item.organization}
                    </span>
                    <span className="font-mono text-[11px] px-2 py-0.5 rounded-xs bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border border-[var(--color-accent-border)] font-medium">
                      {item.badge}
                    </span>
                  </div>

                  <h4 className="font-display italic text-xl text-[var(--color-text-1)] mb-1">
                    {item.role}
                  </h4>
                  <p className="font-mono text-xs text-[var(--color-accent)] mb-3">
                    {item.period}
                  </p>

                  <p className="text-xs text-[var(--color-text-2)] leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.futureGoal && (
                    <div className="p-3 rounded-xs border border-[var(--color-amber-border)] bg-[var(--color-amber-subtle)] mb-3">
                      <p className="font-mono text-[11px] text-[var(--color-amber)] leading-relaxed">
                        <strong className="text-[var(--color-text-1)]">Note:</strong> {item.futureGoal}
                      </p>
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[var(--color-border)] flex items-center justify-between text-[11px] font-mono text-[var(--color-text-3)]">
                  <span>Verified Engagement</span>
                  <span className="text-[var(--color-text-2)]">Community Contributor</span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  )
}
