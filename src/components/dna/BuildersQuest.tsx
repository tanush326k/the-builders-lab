import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  questChallenges,
  questScenarios,
  computeQuestResult,
  type BuilderArchetype,
} from '@/data/dna-archetypes'
import { useReducedMotion } from '@/lib/useReducedMotion'
import { RefreshCw, ArrowRight, Zap, Github, ChevronRight } from 'lucide-react'

type Stage = 'challenge' | 'scenario' | 'processing' | 'result'

const EASE = [0.16, 1, 0.3, 1] as const

const PROCESSING_LINES = [
  'ANALYZING CHALLENGE DOMAIN...',
  'MAPPING DECISION VECTORS...',
  'COMPUTING ARCHETYPE ALIGNMENT...',
  'BUILDER DNA IDENTIFIED.',
]

interface QuestState {
  challenge: string
  scenarioOption: string
  result: { archetype: BuilderArchetype; matchPercent: number } | null
}

function ProgressBar({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100)
  return (
    <div className="quest-progress-bar" role="progressbar" aria-valuenow={step} aria-valuemin={0} aria-valuemax={total} aria-label={`Step ${step} of ${total}`}>
      <div className="quest-progress-fill" style={{ width: `${pct}%` }} />
    </div>
  )
}

export function BuildersQuest() {
  const [stage, setStage] = useState<Stage>('challenge')
  const [questState, setQuestState] = useState<QuestState>({
    challenge: '',
    scenarioOption: '',
    result: null,
  })
  const [processLine, setProcessLine] = useState(0)
  const reduced = useReducedMotion()
  const resultRef = useRef<HTMLDivElement>(null)
  const timerRef = useRef<number | null>(null)

  // Pick the right scenario based on challenge
  const getScenario = (challengeId: string) => {
    if (challengeId === 'ai' || challengeId === 'data') return questScenarios[0]!
    if (challengeId === 'cloud' || challengeId === 'systems') return questScenarios[1]!
    return questScenarios[2]!
  }

  const handleChallengeSelect = (challengeId: string) => {
    setQuestState((prev) => ({ ...prev, challenge: challengeId }))
    setStage('scenario')
  }

  const handleScenarioSelect = (optionId: string) => {
    const res = computeQuestResult(questState.challenge, optionId)
    setQuestState((prev) => ({ ...prev, scenarioOption: optionId, result: res }))

    if (reduced) {
      setStage('result')
      return
    }

    setStage('processing')
    setProcessLine(0)

    let line = 0
    const advance = () => {
      line++
      if (line < PROCESSING_LINES.length) {
        setProcessLine(line)
        timerRef.current = window.setTimeout(advance, 420)
      } else {
        timerRef.current = window.setTimeout(() => setStage('result'), 300)
      }
    }
    timerRef.current = window.setTimeout(advance, 380)
  }

  const skipProcessing = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setStage('result')
  }

  const reset = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    setStage('challenge')
    setQuestState({ challenge: '', scenarioOption: '', result: null })
    setProcessLine(0)
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  useEffect(() => {
    if (stage === 'result' && resultRef.current) {
      resultRef.current.focus()
    }
  }, [stage])

  const stepNum = stage === 'challenge' ? 1 : stage === 'scenario' ? 2 : stage === 'processing' ? 3 : 4
  const totalSteps = 4

  const slide = {
    initial: reduced ? undefined : { opacity: 0, x: 16 },
    animate: { opacity: 1, x: 0 },
    exit: reduced ? undefined : { opacity: 0, x: -16 },
    transition: { duration: 0.28, ease: EASE },
  }

  const scenario = questState.challenge ? getScenario(questState.challenge) : null

  return (
    <div className="quest-container w-full max-w-3xl mx-auto" role="region" aria-label="Builder's Quest — interactive archetype discovery">

      {/* Header bar */}
      <div className="quest-header">
        <div className="flex items-center gap-2.5">
          <Zap size={16} className="text-[var(--color-accent)]" aria-hidden="true" />
          <span
            className="font-mono text-[var(--color-text-1)] font-semibold uppercase tracking-wider"
            style={{ fontSize: 'var(--text-xs)' }}
          >
            BUILDER'S QUEST
          </span>
          <span className="font-mono text-[var(--color-text-3)]" style={{ fontSize: 'var(--text-xs)' }}>
            — Discover Your Builder DNA
          </span>
        </div>
        <div className="flex items-center gap-3">
          {stage !== 'challenge' && stage !== 'processing' && (
            <button
              onClick={reset}
              className="inline-flex items-center gap-1.5 font-mono text-[var(--color-text-3)] hover:text-[var(--color-text-2)] transition-colors cursor-pointer"
              style={{ fontSize: 'var(--text-xs)' }}
              aria-label="Restart the quest"
            >
              <RefreshCw size={12} aria-hidden="true" />
              Restart
            </button>
          )}
          <span
            className="font-mono text-[var(--color-text-3)] cursor-blink"
            style={{ fontSize: 'var(--text-xs)' }}
            aria-hidden="true"
          >
            {stage === 'result' ? '■ COMPLETE' : '▌ACTIVE'}
          </span>
        </div>
      </div>

      {/* Progress */}
      <ProgressBar step={stepNum} total={totalSteps} />

      {/* Step label */}
      <div className="px-6 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        <p className="font-mono text-[var(--color-text-3)] uppercase tracking-wider" style={{ fontSize: 'var(--text-xs)' }}>
          {stage === 'challenge' && 'Step 1 of 3 — Choose Your Challenge'}
          {stage === 'scenario' && 'Step 2 of 3 — Make Your Move'}
          {stage === 'processing' && 'Computing…'}
          {stage === 'result' && 'Your Builder DNA'}
        </p>
      </div>

      {/* Main content */}
      <div className="p-6 sm:p-8">
        <AnimatePresence mode="wait">

          {/* ── STAGE 1: CHALLENGE SELECTION ── */}
          {stage === 'challenge' && (
            <motion.div key="challenge" {...slide}>
              <h3
                className="font-display italic text-[var(--color-text-1)] mb-2"
                style={{ fontSize: 'var(--text-2xl)' }}
              >
                What kind of challenge calls to you?
              </h3>
              <p className="text-[var(--color-text-2)] mb-8" style={{ fontSize: 'var(--text-sm)' }}>
                Pick the domain that excites you most. There's no wrong answer — this shapes your quest.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" role="group" aria-label="Select your challenge domain">
                {questChallenges.map((challenge) => (
                  <button
                    key={challenge.id}
                    onClick={() => handleChallengeSelect(challenge.id)}
                    className="quest-choice"
                    aria-label={`Choose ${challenge.label}: ${challenge.description}`}
                  >
                    <span className="text-lg mr-2" aria-hidden="true">{challenge.emoji}</span>
                    <span className="font-semibold text-[var(--color-text-1)]">{challenge.label}</span>
                    <br />
                    <span className="text-[var(--color-text-3)]" style={{ fontSize: '0.8rem' }}>{challenge.description}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── STAGE 2: SCENARIO DECISION ── */}
          {stage === 'scenario' && scenario && (
            <motion.div key="scenario" {...slide}>
              {/* Selected challenge reminder */}
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-[var(--color-accent-border)] bg-[var(--color-accent-subtle)] rounded-sm">
                <span className="font-mono text-[var(--color-accent)] uppercase tracking-wider" style={{ fontSize: 'var(--text-xs)' }}>
                  Challenge: {questChallenges.find(c => c.id === questState.challenge)?.label}
                </span>
              </div>

              <h3
                className="font-display italic text-[var(--color-text-1)] mb-2"
                style={{ fontSize: 'var(--text-2xl)' }}
              >
                A scenario for you.
              </h3>
              <p className="text-[var(--color-text-2)] mb-8 leading-relaxed" style={{ fontSize: 'var(--text-base)' }}>
                {scenario.question}
              </p>

              <div className="space-y-3" role="group" aria-label="Choose your approach">
                {scenario.options.map((option, idx) => (
                  <button
                    key={option.id}
                    onClick={() => handleScenarioSelect(option.id)}
                    className="quest-choice"
                    aria-label={`Option ${idx + 1}: ${option.label}`}
                  >
                    <div className="flex items-start gap-3">
                      <span
                        className="font-mono text-[var(--color-accent)] shrink-0 mt-0.5"
                        style={{ fontSize: 'var(--text-xs)' }}
                        aria-hidden="true"
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <div>
                        <p className="font-semibold text-[var(--color-text-1)] mb-0.5">{option.label}</p>
                        <p className="text-[var(--color-text-3)]" style={{ fontSize: 'var(--text-xs)' }}>
                          {option.description}
                        </p>
                      </div>
                      <ChevronRight size={14} className="text-[var(--color-text-3)] shrink-0 mt-0.5 ml-auto" aria-hidden="true" />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* ── STAGE 3: PROCESSING ── */}
          {stage === 'processing' && (
            <motion.div
              key="processing"
              initial={reduced ? undefined : { opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-8"
            >
              <div className="relative overflow-hidden border border-[var(--color-border)] bg-[var(--color-bg)] rounded-sm p-6 mb-6" aria-live="polite" aria-atomic="true">
                {!reduced && <div className="scan-line" aria-hidden="true" />}
                <div className="space-y-2">
                  {PROCESSING_LINES.map((line, i) => (
                    <p
                      key={line}
                      className={`font-mono transition-colors duration-300 ${
                        i <= processLine
                          ? i === processLine
                            ? 'text-[var(--color-accent)]'
                            : 'text-[var(--color-text-3)]'
                          : 'text-[var(--color-border)]'
                      }`}
                      style={{ fontSize: 'var(--text-xs)' }}
                      aria-hidden={i > processLine}
                    >
                      {i < processLine ? '✓ ' : i === processLine ? '▌ ' : '  '}
                      {line}
                    </p>
                  ))}
                </div>
              </div>
              <button
                onClick={skipProcessing}
                className="font-mono text-[var(--color-text-3)] hover:text-[var(--color-text-2)] transition-colors cursor-pointer"
                style={{ fontSize: 'var(--text-xs)' }}
                aria-label="Skip the processing animation"
              >
                Skip → view results
              </button>
            </motion.div>
          )}

          {/* ── STAGE 4: RESULT CARD ── */}
          {stage === 'result' && questState.result && (
            <motion.div
              key="result"
              ref={resultRef}
              tabIndex={-1}
              initial={reduced ? undefined : { opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="outline-none"
              role="region"
              aria-live="polite"
              aria-label={`Your Builder DNA result: ${questState.result.archetype.name}`}
            >
              {/* Result header */}
              <div className="dna-result-card mb-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="font-mono text-[var(--color-accent)] uppercase tracking-wider mb-2" style={{ fontSize: 'var(--text-xs)' }}>
                      Your Builder Archetype — {questState.result.matchPercent}% alignment
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-4xl" aria-hidden="true">{questState.result.archetype.emoji}</span>
                      <h3
                        className="font-display italic text-[var(--color-text-1)]"
                        style={{ fontSize: 'var(--text-3xl)', lineHeight: 1.1 }}
                      >
                        {questState.result.archetype.name}
                      </h3>
                    </div>
                    <p className="text-[var(--color-accent)] mt-2 font-semibold" style={{ fontSize: 'var(--text-base)' }}>
                      {questState.result.archetype.tagline}
                    </p>
                  </div>

                  <button
                    onClick={reset}
                    className="inline-flex items-center gap-1.5 font-mono text-[var(--color-text-3)] hover:text-[var(--color-text-1)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] px-3 py-2 transition-colors cursor-pointer"
                    style={{ fontSize: 'var(--text-xs)', borderRadius: '2px' }}
                    aria-label="Try the quest again with different choices"
                  >
                    <RefreshCw size={12} aria-hidden="true" />
                    Try again
                  </button>
                </div>

                <p className="text-[var(--color-text-2)] leading-relaxed mb-6 italic" style={{ fontSize: 'var(--text-base)' }}>
                  "{questState.result.archetype.descriptor}"
                </p>

                {/* Strengths */}
                <div className="mb-6">
                  <p className="font-mono text-[var(--color-text-3)] uppercase tracking-wider mb-3" style={{ fontSize: 'var(--text-xs)' }}>
                    Core strengths
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {questState.result.archetype.strengths.map((s) => (
                      <span
                        key={s}
                        className="font-mono px-3 py-1 border border-[var(--color-accent-border)] bg-[var(--color-bg)] text-[var(--color-accent)] rounded-sm"
                        style={{ fontSize: 'var(--text-xs)' }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Working style */}
                <div className="mb-6 p-4 border-l-2 border-[var(--color-accent)] bg-[var(--color-bg)] rounded-sm">
                  <p className="font-mono text-[var(--color-accent)] uppercase tracking-wider mb-1" style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>
                    Working style
                  </p>
                  <p className="text-[var(--color-text-2)]" style={{ fontSize: 'var(--text-sm)' }}>
                    {questState.result.archetype.workingStyle}
                  </p>
                </div>

                {/* Mission */}
                <div className="p-4 bg-[var(--color-surface-2)] rounded-sm">
                  <p className="font-mono text-[var(--color-amber)] uppercase tracking-wider mb-1" style={{ fontSize: '0.6rem', letterSpacing: '0.1em' }}>
                    Builder mission
                  </p>
                  <p className="text-[var(--color-text-1)] font-semibold leading-relaxed" style={{ fontSize: 'var(--text-sm)' }}>
                    {questState.result.archetype.mission}
                  </p>
                </div>
              </div>

              {/* Footer — related project link */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[var(--color-text-3)] mb-1" style={{ fontSize: 'var(--text-xs)' }}>
                    Related project from the lab
                  </p>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-1.5 text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] font-semibold transition-colors"
                    style={{ fontSize: 'var(--text-sm)' }}
                    aria-label={`View ${questState.result.archetype.relatedProjectName} in the projects section`}
                  >
                    {questState.result.archetype.relatedProjectName}
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                </div>

                <a
                  href="https://github.com/tanush326k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-[var(--color-text-3)] hover:text-[var(--color-text-1)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] px-3 py-2 transition-colors"
                  style={{ fontSize: 'var(--text-xs)', borderRadius: '2px' }}
                  aria-label="Browse all lab projects on GitHub"
                >
                  <Github size={12} aria-hidden="true" />
                  Browse the lab on GitHub
                </a>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>
    </div>
  )
}

