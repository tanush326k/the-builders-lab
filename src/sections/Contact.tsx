import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { profile } from '@/data/profile'
import {
  Github,
  Linkedin,
  Code2,
  FileCode2,
  Award,
  Cloud,
  ArrowUpRight,
  Check,
  Copy,
} from 'lucide-react'
import { useState } from 'react'

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyAwsHandle = () => {
    navigator.clipboard.writeText(profile.links.awsBuilderCenterHandle)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      handle: 'tanush701321',
      description: 'Professional networking, leadership milestones & student updates.',
      url: profile.links.linkedin,
      icon: Linkedin,
      tag: 'Professional',
    },
    {
      name: 'GitHub',
      handle: 'tanush326k',
      description: 'Open source repositories, 10 shipped lab projects & commit histories.',
      url: profile.links.github,
      icon: Github,
      tag: 'Code & Systems',
    },
    {
      name: 'GeeksforGeeks',
      handle: 'tanush326k',
      description: 'Campus Mantri profile, problem solving & technical write-ups.',
      url: profile.links.geeksforgeeks,
      icon: Code2,
      tag: 'DSA & Campus',
    },
    {
      name: 'DEV Community',
      handle: 'tanush_326k',
      description: 'Technical articles, voice agent learnings & hackathon post-mortems.',
      url: profile.links.devCommunity,
      icon: FileCode2,
      tag: 'Technical Writing',
    },
    {
      name: 'Credly',
      handle: 'tanush-kasetty',
      description: 'Verified digital credentials, course completions & skill badges.',
      url: profile.links.credly,
      icon: Award,
      tag: 'Verified Badges',
    },
  ]

  return (
    <section
      id="contact"
      className="section-spacing section-light border-t border-[var(--color-border)]"
      aria-labelledby="digital-presence-heading"
    >
      <div className="container-content">

        {/* Section Header */}
        <RevealOnScroll className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="section-label">Digital Presence · Open Verification</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 items-end">
            <div>
              <h2
                id="digital-presence-heading"
                className="font-display italic text-[var(--color-text-1)] mb-4"
                style={{ fontSize: 'var(--text-4xl)', lineHeight: 1.1 }}
              >
                Find Me Across the Tech Community.
              </h2>
              <p className="text-[var(--color-text-2)] leading-relaxed" style={{ fontSize: 'var(--text-base)' }}>
                Every project, credential, article, and commit is openly verifiable across authentic developer networks. Connect, review code, or collaborate on future cloud and AI initiatives.
              </p>
            </div>

            <div className="p-4 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)]">
              <p className="font-mono text-xs text-[var(--color-text-3)] uppercase tracking-wider mb-1">
                Developer Identity
              </p>
              <p className="font-display italic text-lg text-[var(--color-text-1)]">
                {profile.name} · {profile.title}
              </p>
              <p className="font-mono text-xs text-[var(--color-accent)] mt-1">
                {profile.education[0]?.institution}
              </p>
            </div>
          </div>
        </RevealOnScroll>

        {/* Verified Social Profile Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((item, idx) => {
            const Icon = item.icon
            return (
              <RevealOnScroll key={item.name} delay={idx * 0.06}>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-full p-6 rounded-sm border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-2)] transition-all flex flex-col justify-between group cursor-pointer block"
                  aria-label={`Visit Tanush Kasetty's ${item.name} profile (${item.handle}) - opens in new tab`}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="w-10 h-10 rounded-xs border border-[var(--color-border)] bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-text-1)] group-hover:text-[var(--color-accent)] group-hover:border-[var(--color-accent-border)] transition-colors">
                        <Icon size={18} aria-hidden="true" />
                      </div>
                      <span className="font-mono text-[10px] px-2 py-0.5 rounded-xs bg-[var(--color-bg)] text-[var(--color-text-3)] border border-[var(--color-border)] uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="font-display italic text-xl text-[var(--color-text-1)] mb-1 flex items-center gap-1.5">
                      <span>{item.name}</span>
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 text-[var(--color-accent)] transition-opacity" aria-hidden="true" />
                    </h3>

                    <p className="font-mono text-xs text-[var(--color-accent)] mb-3">
                      @{item.handle}
                    </p>

                    <p className="text-xs text-[var(--color-text-2)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[var(--color-border)] flex items-center justify-between text-xs font-mono text-[var(--color-text-3)] group-hover:text-[var(--color-text-1)] transition-colors">
                    <span>Visit Verified Profile</span>
                    <span>↗</span>
                  </div>
                </a>
              </RevealOnScroll>
            )
          })}

          {/* AWS Builder Center Card — Handle Only, No Fabricated URL */}
          <RevealOnScroll delay={socialLinks.length * 0.06}>
            <div className="h-full p-6 rounded-sm border-2 border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="w-10 h-10 rounded-xs border border-[var(--color-accent-border)] bg-[var(--color-bg)] flex items-center justify-center text-[var(--color-accent)]">
                    <Cloud size={20} aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-xs bg-[var(--color-bg)] text-[var(--color-accent)] border border-[var(--color-accent-border)] uppercase tracking-wider font-semibold">
                    AWS Community
                  </span>
                </div>

                <h3 className="font-display italic text-xl text-[var(--color-text-1)] mb-1">
                  AWS Builder Center
                </h3>

                <p className="font-mono text-xs text-[var(--color-accent)] mb-3 font-semibold">
                  Handle: {profile.links.awsBuilderCenterHandle}
                </p>

                <p className="text-xs text-[var(--color-text-2)] leading-relaxed mb-4">
                  Official community username on AWS Builder Center. Student builder leader participating in cloud education, builder showcases, and community days.
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--color-accent-border)] flex items-center justify-between">
                <button
                  type="button"
                  onClick={copyAwsHandle}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-accent)] hover:text-[var(--color-text-1)] transition-colors cursor-pointer"
                  aria-label="Copy AWS Builder Center handle to clipboard"
                >
                  {copied ? (
                    <>
                      <Check size={12} aria-hidden="true" />
                      <span>Copied @tanush326</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} aria-hidden="true" />
                      <span>Copy Handle</span>
                    </>
                  )}
                </button>
                <span className="font-mono text-[10px] text-[var(--color-text-3)] uppercase tracking-wider">
                  No public URL
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* AWS Challenge Architecture Callout */}
        <RevealOnScroll delay={0.2}>
          <div className="p-7 rounded-sm border border-[var(--color-border-strong)] bg-[var(--color-surface)]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[var(--color-border)]">
              <div>
                <div className="flex items-center gap-2 mb-2 text-[var(--color-accent)]">
                  <Cloud size={18} aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                    AWS Student Builder Challenge 2026 — Architecture Specification
                  </span>
                </div>
                <h4 className="font-display italic text-2xl text-[var(--color-text-1)] mb-1">
                  Engineered for AWS Amplify Hosting
                </h4>
                <p className="text-xs text-[var(--color-text-2)] max-w-2xl leading-relaxed">
                  This portfolio was designed and built to contest for top honors in the AWS Student Builder Challenge 2026. It features continuous integration and automated builds directly through AWS Amplify Hosting from GitHub.
                </p>
              </div>

              <div className="shrink-0">
                <a
                  href={profile.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xs font-mono text-xs font-semibold bg-[var(--color-text-1)] text-[var(--color-bg)] hover:bg-[var(--color-accent)] transition-colors"
                >
                  <Github size={14} aria-hidden="true" />
                  <span>View Repository on GitHub</span>
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 font-mono text-xs">
              <div>
                <span className="text-[var(--color-text-3)] block uppercase tracking-wider text-[10px] mb-1">
                  Hosting Platform
                </span>
                <span className="text-[var(--color-accent)] font-semibold">
                  AWS Amplify Hosting
                </span>
              </div>
              <div>
                <span className="text-[var(--color-text-3)] block uppercase tracking-wider text-[10px] mb-1">
                  Build System
                </span>
                <span className="text-[var(--color-text-1)] font-semibold">
                  Vite 6 · React 19 · TS 5.7
                </span>
              </div>
              <div>
                <span className="text-[var(--color-text-3)] block uppercase tracking-wider text-[10px] mb-1">
                  Architecture
                </span>
                <span className="text-[var(--color-text-1)] font-semibold">
                  Static SPA · Zero SSR
                </span>
              </div>
              <div>
                <span className="text-[var(--color-text-3)] block uppercase tracking-wider text-[10px] mb-1">
                  Interactive Instrument
                </span>
                <span className="text-[var(--color-accent)] font-semibold">
                  Builder's Quest
                </span>
              </div>
            </div>
          </div>
        </RevealOnScroll>

      </div>
    </section>
  )
}
