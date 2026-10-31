// Builder's Quest data — 4-stage interactive archetype discovery
// Stage 1: Pick your challenge domain
// Stage 2: Scenario decision
// Stage 3: Computed archetype reveal
// Stage 4: Builder card

export interface QuestChallenge {
  id: string
  label: string
  emoji: string
  description: string
}

export interface QuestScenario {
  question: string
  options: {
    id: string
    label: string
    description: string
    // which archetype traits this choice leans toward
    tags: string[]
  }[]
}

export interface BuilderArchetype {
  id: string
  name: string
  emoji: string
  tagline: string
  descriptor: string
  strengths: string[]
  mission: string
  workingStyle: string
  relatedProject: string  // id from projects.ts
  relatedProjectName: string
  // which challenge + scenario tags score toward this archetype
  challengeTags: string[]
  scenarioTags: string[]
}

export const questChallenges: QuestChallenge[] = [
  {
    id: 'ai',
    label: 'AI & Agents',
    emoji: '🤖',
    description: 'Building intelligent systems that reason, act, and assist.',
  },
  {
    id: 'cloud',
    label: 'Cloud & Infrastructure',
    emoji: '☁️',
    description: 'Designing the backbone that makes everything else possible.',
  },
  {
    id: 'product',
    label: 'Product & Interfaces',
    emoji: '🎨',
    description: 'Crafting experiences that feel effortless to use.',
  },
  {
    id: 'devtools',
    label: 'Developer Tools',
    emoji: '🔧',
    description: 'Building the tools that other builders depend on.',
  },
  {
    id: 'data',
    label: 'Data & Analytics',
    emoji: '📊',
    description: 'Turning raw signals into clear, actionable insight.',
  },
  {
    id: 'systems',
    label: 'Systems & Reliability',
    emoji: '⚙️',
    description: 'Making complex systems robust, observable, and predictable.',
  },
]

export const questScenarios: QuestScenario[] = [
  // Scenario A — shown when primary challenge is ai or data
  {
    question: "You're building an AI feature. A teammate asks: should we fine-tune our own model or use an existing API? Your instinct is:",
    options: [
      {
        id: 'A1',
        label: 'Ship with the API now.',
        description: 'Get something working fast. Optimize when you have real usage data.',
        tags: ['pragmatic', 'product', 'velocity'],
      },
      {
        id: 'A2',
        label: 'Understand the tradeoffs first.',
        description: 'Cost, latency, control — these decisions matter more later than they seem now.',
        tags: ['systems', 'depth', 'architecture'],
      },
      {
        id: 'A3',
        label: 'Prototype both paths.',
        description: 'The only way to know is to run the experiment yourself.',
        tags: ['research', 'curiosity', 'fullstack'],
      },
    ],
  },
  // Scenario B — shown when primary is cloud or systems
  {
    question: "Production just went down. Monitoring shows a spike. Your first move is:",
    options: [
      {
        id: 'B1',
        label: 'Rollback immediately.',
        description: 'Restore service now. Debug in staging. Protect users first.',
        tags: ['reliability', 'pragmatic', 'systems'],
      },
      {
        id: 'B2',
        label: 'Read the logs before touching anything.',
        description: 'A rollback without understanding the root cause creates more fires.',
        tags: ['depth', 'architecture', 'systems'],
      },
      {
        id: 'B3',
        label: 'Write a quick status update while investigating.',
        description: 'People need to know what is happening. Communication is also engineering.',
        tags: ['product', 'leadership', 'pragmatic'],
      },
    ],
  },
  // Scenario C — shown when primary is product or devtools
  {
    question: "You're starting a new project. Your approach to design is:",
    options: [
      {
        id: 'C1',
        label: 'Sketch the user journey first.',
        description: 'Before a single line of code, know exactly what someone will do and feel.',
        tags: ['product', 'design', 'empathy'],
      },
      {
        id: 'C2',
        label: 'Build the data model first.',
        description: 'Good interfaces flow naturally from a clean underlying structure.',
        tags: ['architecture', 'depth', 'systems'],
      },
      {
        id: 'C3',
        label: 'Find a similar project and learn from it.',
        description: 'Why reinvent? Study what works, then make it better.',
        tags: ['curiosity', 'research', 'pragmatic'],
      },
    ],
  },
]

export const builderArchetypes: BuilderArchetype[] = [
  {
    id: 'intelligence-builder',
    name: 'The Intelligence Builder',
    emoji: '🤖',
    tagline: 'You teach machines to think.',
    descriptor: 'You see every problem as a dataset and every dataset as an opportunity. You build systems that do not just compute — they reason.',
    strengths: ['LLM integration', 'Agent architecture', 'Prompt engineering', 'Rapid prototyping'],
    mission: 'Build AI that is actually useful. Not impressive demos — tools that solve real problems for real people.',
    workingStyle: 'Ship fast, measure, iterate. You prototype with confidence because you know how to debug what you build.',
    relatedProject: 'hermes',
    relatedProjectName: 'Hermes Agent Assistant',
    challengeTags: ['ai', 'data'],
    scenarioTags: ['curiosity', 'research', 'velocity'],
  },
  {
    id: 'cloud-architect',
    name: 'The Cloud Architect',
    emoji: '☁️',
    tagline: 'You build the sky it runs on.',
    descriptor: 'Infrastructure is not an afterthought for you — it is the design. You think in services, availability zones, and deployment pipelines.',
    strengths: ['Cloud deployment', 'System design', 'DevOps thinking', 'Reliability engineering'],
    mission: 'Design systems that never sleep and never fail. Build the invisible backbone that makes everything else possible.',
    workingStyle: 'You think before you act. Every architecture decision is a commitment, and you treat it that way.',
    relatedProject: 'pulseops',
    relatedProjectName: 'PulseOps',
    challengeTags: ['cloud', 'systems'],
    scenarioTags: ['reliability', 'depth', 'architecture'],
  },
  {
    id: 'experience-engineer',
    name: 'The Experience Engineer',
    emoji: '🎨',
    tagline: 'You close the gap between what software does and how it feels.',
    descriptor: 'Good code is invisible. Great design is unforgettable. You hold both truths at once and refuse to sacrifice either.',
    strengths: ['Interface design', 'React & TypeScript', 'Accessibility', 'User empathy'],
    mission: 'Build interfaces that people actually love using. Every interaction is a choice — make it intentional.',
    workingStyle: 'You sketch before you code. You care about the thing someone does not notice because you got it right.',
    relatedProject: 'productivityos',
    relatedProjectName: 'ProductivityOS AI',
    challengeTags: ['product'],
    scenarioTags: ['product', 'design', 'empathy'],
  },
  {
    id: 'tool-forger',
    name: 'The Tool Forger',
    emoji: '🔧',
    tagline: 'You build the tools that builders use.',
    descriptor: 'The most satisfying feeling you know: someone uses something you built to build something else. You multiply other people\'s capabilities.',
    strengths: ['API design', 'DX thinking', 'Documentation instinct', 'Composable architecture'],
    mission: 'Write code that outlives the project. Build tools that get forked, extended, and quietly relied upon.',
    workingStyle: 'You think about the consumer of your API before you design it. Contracts matter more than implementation.',
    relatedProject: 'hermes',
    relatedProjectName: 'Hermes Agent Assistant',
    challengeTags: ['devtools'],
    scenarioTags: ['architecture', 'depth', 'systems'],
  },
  {
    id: 'data-cartographer',
    name: 'The Data Cartographer',
    emoji: '📊',
    tagline: 'You map the unmapped.',
    descriptor: 'You find structure in chaos and insight in noise. Where others see data, you see questions waiting to be answered.',
    strengths: ['Data pipelines', 'Analytics thinking', 'Visualization', 'Pattern recognition'],
    mission: 'Turn raw signals into clear decisions. Build systems that make the invisible visible.',
    workingStyle: 'You explore before you conclude. The question is always: what does this data actually mean?',
    relatedProject: 'carbontrack',
    relatedProjectName: 'CarbonTrack',
    challengeTags: ['data'],
    scenarioTags: ['research', 'depth', 'curiosity'],
  },
  {
    id: 'full-spectrum-builder',
    name: 'The Full-Spectrum Builder',
    emoji: '⚡',
    tagline: 'You cannot choose a lane — because you refuse to.',
    descriptor: 'You move across the entire stack with comfort. Frontend, backend, cloud, AI — the most interesting problems are always at the intersections.',
    strengths: ['Breadth of vision', 'Adaptive learning', 'End-to-end thinking', 'Integration instinct'],
    mission: 'Build across every boundary. The future belongs to people who can hold the whole system in their head.',
    workingStyle: 'Pragmatic over perfect. You know when to go deep and when to stay broad — and that judgement is the skill.',
    relatedProject: 'matchops',
    relatedProjectName: 'MatchOps AI',
    challengeTags: ['ai', 'cloud', 'product', 'devtools', 'data', 'systems'],
    scenarioTags: ['pragmatic', 'fullstack', 'leadership'],
  },
]

/**
 * Compute the best archetype from challenge + scenario choices.
 * Returns the archetype and a match score expressed as a percentage.
 */
export function computeQuestResult(
  challengeId: string,
  scenarioOptionId: string,
): { archetype: BuilderArchetype; matchPercent: number } {
  // Find the scenario option chosen
  let scenarioTags: string[] = []
  for (const scenario of questScenarios) {
    const opt = scenario.options.find((o) => o.id === scenarioOptionId)
    if (opt) {
      scenarioTags = opt.tags
      break
    }
  }

  let bestArchetype = builderArchetypes[builderArchetypes.length - 1]!
  let bestScore = 0

  for (const archetype of builderArchetypes) {
    if (archetype.id === 'full-spectrum-builder') continue

    let score = 0

    // Challenge alignment — strong signal
    if (archetype.challengeTags.includes(challengeId)) score += 3

    // Scenario tag overlap
    for (const tag of scenarioTags) {
      if (archetype.scenarioTags.includes(tag)) score += 2
    }

    if (score > bestScore) {
      bestScore = score
      bestArchetype = archetype
    }
  }

  // If very low score, fall back to full-spectrum
  if (bestScore < 2) {
    bestArchetype = builderArchetypes[builderArchetypes.length - 1]!
    bestScore = 2
  }

  const maxPossibleScore = 3 + 3 * 2  // 1 challenge match + up to 3 scenario tag matches
  const matchPercent = Math.min(98, Math.round(60 + (bestScore / maxPossibleScore) * 38))

  return { archetype: bestArchetype, matchPercent }
}
