import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { profile } from '@/data/profile'
import { GraduationCap, Compass, Sparkles, Terminal, Flame, Target } from 'lucide-react'

export function About() {
  return (
    <section
      id="about"
      className="section-spacing section-light border-t border-[var(--color-border)]"
      aria-labelledby="about-heading"
    >
      <div className="container-content">

        {/* Section Header */}
        <RevealOnScroll className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="section-label">About Me · Personal Journey</span>
          </div>
          <h2
            id="about-heading"
            className="font-display italic text-[var(--color-text-1)]"
            style={{ fontSize: 'var(--text-4xl)', lineHeight: 1.1 }}
          >
            Curiosity turned into craft.
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-start">

          {/* Left Column — First-Person Narrative Story */}
          <div className="space-y-6">

            <RevealOnScroll delay={0.05}>
              <div className="p-6 rounded-sm border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)] relative overflow-hidden">
                <div className="flex items-start gap-3">
                  <Sparkles size={20} className="text-[var(--color-accent)] shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <p className="font-mono text-[var(--color-accent)] uppercase tracking-wider text-xs font-semibold mb-2">
                      Personal Philosophy
                    </p>
                    <blockquote className="font-display italic text-[var(--color-text-1)] text-xl sm:text-2xl leading-snug">
                      &ldquo;{profile.philosophy}&rdquo;
                    </blockquote>
                    <p className="font-mono text-[var(--color-text-3)] text-xs mt-3">
                      — Personal philosophy of Tanush Kasetty
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <div className="space-y-4 text-[var(--color-text-2)] leading-relaxed" style={{ fontSize: 'var(--text-base)' }}>
                <p>
                  I have always been deeply fascinated by technology. Growing up watching simple ideas evolve into useful software and daily solutions sparked my hunger to understand what happens beneath the surface — and how code can genuinely simplify everyday human lives.
                </p>
                <p>
                  My primary focus is <strong className="text-[var(--color-text-1)]">cloud computing</strong>, pursued alongside software engineering, AI agents, and emerging web technologies. I love examining new developer tools and architectural paradigms to build applications that solve practical dilemmas.
                </p>
                <p>
                  I enjoy spending long hours prototyping projects, designing software structures, and testing hypotheses. When unexpected errors occur and stubborn bugs challenge my patience, I treat that troubleshooting as the most rigorous and authentic part of my learning journey.
                </p>
                <p>
                  I continuously expand my technical toolkit through hands-on experimentation and <strong className="text-[var(--color-text-1)]">AI-assisted development workflows</strong>. Rather than creating reliance, I use AI as an intellectual sparring partner to accelerate research and code iteration — ensuring technical comprehension and quality remain strictly human-driven.
                </p>
                <p>
                  My long-term ambition is to grow into a skilled software development and cloud engineering professional. I am eager to participate in hackathons, engage with global developer communities, and build meaningful systems with fellow builders.
                </p>
              </div>
            </RevealOnScroll>

            {/* Quick badges of learning approach */}
            <RevealOnScroll delay={0.15}>
              <div className="pt-4 border-t border-[var(--color-border)] grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <div className="flex items-center gap-2 mb-1.5 text-[var(--color-accent)]">
                    <Terminal size={15} aria-hidden="true" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider">Hands-On</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                    Learning by shipping complete, running systems instead of passive tutorials.
                  </p>
                </div>

                <div className="p-4 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <div className="flex items-center gap-2 mb-1.5 text-[var(--color-accent)]">
                    <Flame size={15} aria-hidden="true" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider">Cloud First</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                    Deploying on AWS Amplify, Google Cloud Run, and containerized architectures.
                  </p>
                </div>

                <div className="p-4 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <div className="flex items-center gap-2 mb-1.5 text-[var(--color-accent)]">
                    <Target size={15} aria-hidden="true" />
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider">AI Amplified</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                    Augmenting human problem solving with modern LLM &amp; agentic engineering tools.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

          </div>

          {/* Right Column — Education & Foundations */}
          <div className="space-y-6">

            <RevealOnScroll delay={0.12}>
              <div className="p-6 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)]">
                <div className="flex items-center gap-2.5 mb-4 text-[var(--color-accent)]">
                  <GraduationCap size={20} aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                    Formal Education
                  </span>
                </div>

                {/* B.Tech */}
                <div className="accent-bar mb-6">
                  <span className="font-mono text-xs text-[var(--color-accent)] font-semibold uppercase tracking-wider block mb-1">
                    Undergraduate Degree (2025–2029)
                  </span>
                  <h3 className="font-semibold text-[var(--color-text-1)] text-base mb-1">
                    B.Tech in Computer Science and Engineering
                  </h3>
                  <p className="text-sm text-[var(--color-text-2)] mb-1">
                    CSI Wesley Institute of Technology and Science
                  </p>
                  <p className="font-mono text-xs text-[var(--color-text-3)] mb-2">
                    Hyderabad, India
                  </p>
                  <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                    Focusing on algorithms, data structures, cloud architectures, and full-stack development while actively leading on-campus student tech initiatives.
                  </p>
                </div>

                {/* DCAP */}
                <div className="border-l-2 border-[var(--color-border-strong)] pl-4">
                  <span className="font-mono text-xs text-[var(--color-amber)] font-semibold uppercase tracking-wider block mb-1">
                    Technical Foundation
                  </span>
                  <h4 className="font-semibold text-[var(--color-text-1)] text-sm mb-1">
                    DCAP — Diploma in Computer Applications
                  </h4>
                  <p className="font-mono text-xs text-[var(--color-text-3)] mb-2">
                    MS Office · Microsoft Word · C · C++
                  </p>
                  <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                    Provided early exposure to procedural logic and computer literacy. While not making me an advanced programmer on its own, it served as the foundational springboard that inspired ongoing practical experimentation and independent coding.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Career Goals & Ambition */}
            <RevealOnScroll delay={0.18}>
              <div className="p-6 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface-2)]">
                <div className="flex items-center gap-2.5 mb-3 text-[var(--color-accent)]">
                  <Compass size={18} aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                    Long-Term Ambition
                  </span>
                </div>
                <h4 className="font-semibold text-[var(--color-text-1)] text-sm mb-2">
                  Cloud Engineering &amp; Software Development
                </h4>
                <p className="text-xs text-[var(--color-text-2)] leading-relaxed mb-3">
                  To grow into an accomplished cloud architect and software development professional who creates resilient, scalable, human-centered systems.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--color-border)]">
                  {['Cloud Computing', 'AI Agents', 'System Reliability', 'Open Collaboration'].map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[11px] px-2.5 py-0.5 rounded-xs bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-2)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>

          </div>

        </div>

      </div>
    </section>
  )
}
