import { useState } from 'react'
import { ExternalLink, Github, Terminal, Cloud } from 'lucide-react'
import { RevealOnScroll } from '@/components/ui/RevealOnScroll'
import { projects, type Project } from '@/data/projects'

type Filter = 'all' | 'live' | 'local'

function LiveBadge() {
  return (
    <span className="badge-live">
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-live)] animate-pulse" aria-hidden="true" />
      Live Demo
    </span>
  )
}

function SetupBadge() {
  return (
    <span className="badge-setup">
      <Terminal size={10} aria-hidden="true" />
      Local Setup
    </span>
  )
}

function CliBadge() {
  return (
    <span className="badge-setup">
      <Terminal size={10} aria-hidden="true" />
      Local CLI Project
    </span>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isFeatured = project.featured && index < 2

  return (
    <RevealOnScroll delay={index * 0.04}>
      <article
        className={`project-card h-full flex flex-col ${project.featured ? 'featured' : ''}`}
        aria-label={`Project: ${project.name}`}
      >
        {/* Top bar */}
        <div
          className="px-5 py-3 border-b border-[var(--color-border)] flex items-center justify-between"
          style={{ background: project.featured ? 'var(--color-accent-subtle)' : 'var(--color-surface-2)' }}
        >
          <div className="flex items-center gap-2">
            {project.status === 'live' ? (
              <LiveBadge />
            ) : project.status === 'cli' ? (
              <CliBadge />
            ) : (
              <SetupBadge />
            )}
            {project.deployPlatform && (
              <span
                className="font-mono text-[var(--color-text-3)] hidden sm:inline"
                style={{ fontSize: 'var(--text-xs)' }}
              >
                {project.deployPlatform}
              </span>
            )}
          </div>
          {project.awsNote && (
            <div className="flex items-center gap-1 text-[var(--color-accent)]">
              <Cloud size={12} aria-hidden="true" />
              <span className="font-mono" style={{ fontSize: '0.6rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>AWS</span>
            </div>
          )}
        </div>

        {/* Body */}
        <div className="p-5 sm:p-6 flex flex-col flex-1">
          {/* Name + subtitle */}
          <div className="mb-4">
            <h3
              className="font-display italic text-[var(--color-text-1)] mb-1 leading-tight"
              style={{ fontSize: isFeatured ? 'var(--text-2xl)' : 'var(--text-xl)' }}
            >
              {project.name}
            </h3>
            {project.subtitle && (
              <p className="font-mono text-[var(--color-accent)] uppercase tracking-wider" style={{ fontSize: 'var(--text-xs)' }}>
                {project.subtitle}
              </p>
            )}
          </div>

          {/* Description */}
          <p className="text-[var(--color-text-2)] leading-relaxed flex-1 mb-5" style={{ fontSize: 'var(--text-sm)' }}>
            {project.description}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-1.5 mb-5">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="font-mono border border-[var(--color-border)] text-[var(--color-text-3)] bg-[var(--color-bg)] px-2 py-0.5 rounded-sm"
                style={{ fontSize: 'var(--text-xs)' }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Setup note */}
          {project.setupNote && (
            <div className="mb-4 p-3 rounded-sm border border-[var(--color-amber-border)] bg-[var(--color-amber-subtle)]">
              <p className="text-[var(--color-amber)]" style={{ fontSize: 'var(--text-xs)' }}>
                <span className="font-semibold">Local Run / Setup:</span>{' '}
                {project.setupNote}
              </p>
            </div>
          )}

          {/* AWS note */}
          {project.awsNote && (
            <div className="mb-4 p-3 rounded-sm border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)]">
              <p className="text-[var(--color-accent)]" style={{ fontSize: 'var(--text-xs)' }}>
                <span className="font-semibold">AWS:</span>{' '}
                {project.awsNote}
              </p>
            </div>
          )}

          {/* Actions */}
          <div className="flex items-center gap-3 mt-auto pt-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[var(--color-text-3)] hover:text-[var(--color-text-1)] transition-colors duration-150"
              style={{ fontSize: 'var(--text-xs)' }}
              aria-label={`View ${project.name} source code on GitHub`}
            >
              <Github size={14} aria-hidden="true" />
              <span className="font-mono">Source Code</span>
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors duration-150 font-semibold"
                style={{ fontSize: 'var(--text-xs)' }}
                aria-label={`Open ${project.name} live demo`}
              >
                <ExternalLink size={14} aria-hidden="true" />
                <span className="font-mono">Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </RevealOnScroll>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')

  const liveProjects = projects.filter((p) => p.status === 'live')
  const localProjects = projects.filter((p) => p.status === 'setup' || p.status === 'cli')

  const filtered = projects.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'live') return p.status === 'live'
    if (filter === 'local') return p.status === 'setup' || p.status === 'cli'
    return true
  })

  const featured = filtered.filter((p) => p.featured)
  const rest = filtered.filter((p) => !p.featured)

  return (
    <section
      id="projects"
      className="section-spacing section-light border-t border-[var(--color-border)]"
      aria-labelledby="projects-heading"
    >
      <div className="container-content">
        <RevealOnScroll className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-[var(--color-accent)]" aria-hidden="true" />
            <span className="section-label">Projects Catalogue · Ten Shipped Systems</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8 items-end mb-8">
            <h2
              id="projects-heading"
              style={{ fontSize: 'var(--text-4xl)', lineHeight: 1.1 }}
            >
              The lab catalogue.
            </h2>
            <p className="text-[var(--color-text-2)] max-w-xl" style={{ fontSize: 'var(--text-base)' }}>
              A collection of verified, production-grade applications, developer tools, and systems architectures. Every project represents an end-to-end engineered solution with verified repository links and clear deployment status.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 flex-wrap" role="group" aria-label="Filter projects by deployment status">
            {([
              { value: 'all', label: `All Systems (${projects.length})` },
              { value: 'live', label: `Live Demos (${liveProjects.length})` },
              { value: 'local', label: `Local Setup & CLI (${localProjects.length})` },
            ] as { value: Filter; label: string }[]).map(({ value, label }) => (
              <button
                key={value}
                onClick={() => setFilter(value)}
                className={`font-mono px-4 py-1.5 border transition-colors duration-150 cursor-pointer ${
                  filter === value
                    ? 'border-[var(--color-accent)] bg-[var(--color-accent-subtle)] text-[var(--color-accent)]'
                    : 'border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-3)] hover:text-[var(--color-text-1)]'
                }`}
                style={{ fontSize: 'var(--text-xs)' }}
                aria-pressed={filter === value}
              >
                {label}
              </button>
            ))}
          </div>
        </RevealOnScroll>

        {/* Featured 2-col grid */}
        {featured.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {featured.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        )}

        {/* Rest — 3-col grid */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i + featured.length} />
            ))}
          </div>
        )}

        {/* AWS note */}
        <RevealOnScroll className="mt-10">
          <p className="font-mono text-[var(--color-text-3)] border-l-2 border-[var(--color-border)] pl-4 italic" style={{ fontSize: 'var(--text-xs)' }}>
            Note: ProductivityOS AI is deployed on AWS Amplify with automated CI/CD. PulseOps features an optional Amazon Bedrock integration via the AWS SDK for Python (boto3). All other systems are clearly attributed to their respective verified platforms.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  )
}
