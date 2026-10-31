import { Github, Linkedin, Code2, FileCode2, Award } from 'lucide-react'
import { profile } from '@/data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-[var(--color-border)] py-12 bg-[var(--color-bg)]"
      role="contentinfo"
    >
      <div className="container-content">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-[var(--color-border)]">

          {/* Left — identity & philosophy */}
          <div className="max-w-md">
            <p className="font-mono font-semibold tracking-[0.14em] uppercase text-[var(--color-text-1)] mb-1" style={{ fontSize: 'var(--text-xs)' }}>
              THE BUILDER'S LAB
            </p>
            <p className="font-display italic text-sm text-[var(--color-text-2)] mb-2">
              &ldquo;{profile.philosophy}&rdquo;
            </p>
            <p className="font-mono text-[var(--color-text-3)] text-xs">
              {profile.name} · {profile.title} · {profile.education[0]?.institution}
            </p>
          </div>

          {/* Right — community profiles */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--color-text-3)]">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
              aria-label="GitHub profile of Tanush Kasetty"
            >
              <Github size={13} aria-hidden="true" />
              <span>GitHub</span>
            </a>

            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
              aria-label="LinkedIn profile of Tanush Kasetty"
            >
              <Linkedin size={13} aria-hidden="true" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profile.links.geeksforgeeks}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
              aria-label="GeeksforGeeks profile of Tanush Kasetty"
            >
              <Code2 size={13} aria-hidden="true" />
              <span>GeeksforGeeks</span>
            </a>

            <a
              href={profile.links.devCommunity}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
              aria-label="DEV Community profile of Tanush Kasetty"
            >
              <FileCode2 size={13} aria-hidden="true" />
              <span>DEV.to</span>
            </a>

            <a
              href={profile.links.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
              aria-label="Credly profile of Tanush Kasetty"
            >
              <Award size={13} aria-hidden="true" />
              <span>Credly</span>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-mono text-[var(--color-text-3)]">
          <p>
            © {year} {profile.name} · Built for the AWS Student Builder Challenge 2026.
          </p>
          <div className="flex items-center gap-4">
            <span>AWS Builder Center: <strong className="text-[var(--color-accent)]">{profile.links.awsBuilderCenterHandle}</strong></span>
            <span>·</span>
            <a
              href="https://main.d1g4d38wuwfnfb.amplifyapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Deployed on AWS Amplify ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
