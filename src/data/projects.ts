export type ProjectStatus = 'live' | 'setup' | 'cli'

export interface Project {
  id: string
  name: string
  subtitle?: string
  description: string
  longDescription?: string
  stack: string[]
  status: ProjectStatus
  githubUrl: string
  liveUrl?: string
  setupNote?: string
  awsNote?: string
  deployPlatform?: string
  featured?: boolean
}

export const projects: Project[] = [
  // ── Featured: Projects with AWS connections ─────────────────────────
  {
    id: 'productivityos',
    name: 'ProductivityOS AI',
    subtitle: 'All-in-One GenAI Workspace',
    description:
      'A comprehensive productivity operating system featuring an AI Autopilot Kanban board, calendar planner, meeting notes generator, and an intelligent chat companion.',
    longDescription:
      'Engineered as an all-in-one productivity hub combining task scheduling, Kanban workflows with AI autopilot task generation, document summarization, and an intelligent chat companion. Powered by Groq and Google Gemini. Deployed to AWS Amplify with automated continuous deployment.',
    stack: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'Framer Motion', 'Groq SDK', 'Google Gemini'],
    status: 'live',
    githubUrl: 'https://github.com/tanush326k/ProductivityOS-AI',
    liveUrl: 'https://main.d1fa52fy3h96m8.amplifyapp.com/',
    deployPlatform: 'AWS Amplify',
    awsNote:
      'Deployed on AWS Amplify Hosting with automated GitHub-triggered builds and global CDN distribution.',
    featured: true,
  },
  {
    id: 'pulseops',
    name: 'PulseOps',
    subtitle: 'AI Incident Commander',
    description:
      'An automated incident triage system powered by Strands Decider 2B with diagnostic tool routing and optional Amazon Bedrock evaluation.',
    longDescription:
      'Built for rapid production incident management. A calibrated decision engine (Strands Decider 2B) evaluates anomalies and dispatches automated diagnostic commands. Connects optionally to Amazon Bedrock via boto3 for generative incident post-mortems.',
    stack: ['Python', 'FastAPI', 'Strands Agents SDK', 'boto3', 'Amazon Bedrock'],
    status: 'setup',
    githubUrl: 'https://github.com/tanush326k/PulseOps',
    setupNote:
      'Requires local cloning, Python virtual environment, and Strands Decider 2B running locally. Amazon Bedrock integration is optional via boto3.',
    awsNote:
      'Optional Amazon Bedrock integration via the AWS SDK for Python (boto3) for generative incident analysis and post-mortem synthesis.',
    featured: true,
  },

  // ── Verified live standalone projects ─────────────────────────────────────────
  {
    id: 'clauselens',
    name: 'ClauseLens',
    subtitle: 'Legal Contract Intelligence',
    description:
      'An AI-powered legal comprehension platform that converts dense contract language into structured, plain-English memorandums with verbatim evidence verification. Verified with 97 passing automated tests.',
    stack: ['Next.js 15', 'React 19', 'Tailwind CSS v4', 'Gemini Flash', 'Zod', 'Vitest'],
    status: 'live',
    githubUrl: 'https://github.com/tanush326k/ClauseLens',
    liveUrl: 'https://clauselens-bh5n.onrender.com/',
    deployPlatform: 'Render',
  },
  {
    id: 'planora',
    name: 'Planora AI',
    subtitle: 'Intelligent Event Planning Assistant',
    description:
      'A production-ready GenAI event planning assistant with deterministic budget mathematics, date-aware countdown timelines, vendor contract vetting, and personalized creative concepts.',
    stack: ['Next.js 16', 'React 19', 'Tailwind CSS v4', 'Gemini 2.5 Flash', 'Zod', 'TypeScript'],
    status: 'live',
    githubUrl: 'https://github.com/tanush326k/Planora-AI',
    liveUrl: 'https://planora-ai-beige.vercel.app',
    deployPlatform: 'Vercel',
  },
  {
    id: 'matchops',
    name: 'MatchOps AI',
    subtitle: 'Smart Stadium Mission Control',
    description:
      'An AI-powered smart stadium operations platform for managing live sporting events with real-time crowd telemetry simulation and multi-stage AI reasoning.',
    stack: ['React 19', 'Vite', 'FastAPI', 'Python', 'Google Gemini', 'Docker', 'Recharts'],
    status: 'live',
    githubUrl: 'https://github.com/tanush326k/matchops-ai',
    liveUrl: 'https://matchops-ai.onrender.com',
    deployPlatform: 'Render',
  },
  {
    id: 'carbontrack',
    name: 'CarbonTrack',
    subtitle: 'Carbon Footprint Analytics',
    description:
      'An intelligent carbon emissions tracking platform with real-time analytics, sustainability recommendations, and gamified habit-building. Verified with 32 passing automated tests.',
    stack: ['FastAPI', 'Python', 'JavaScript', 'SQLite', 'Docker'],
    status: 'live',
    githubUrl: 'https://github.com/tanush326k/carbontrack',
    liveUrl: 'https://eco-trace-218086876811.us-central1.run.app',
    deployPlatform: 'Google Cloud Run',
  },
  {
    id: 'smartnotes',
    name: 'Smart Notes',
    subtitle: 'AI-Powered Notebook',
    description:
      'A fast, responsive note-taking application with AI summarization, semantic tagging, and clean full-text organization.',
    stack: ['Vite', 'React 19', 'Tailwind CSS v4', 'Framer Motion', 'TypeScript', 'Google Gemini', 'Node.js'],
    status: 'live',
    githubUrl: 'https://github.com/tanush326k/Smart-Notes',
    liveUrl: 'https://smartnotes-esch1suwk-titan90.vercel.app/',
    deployPlatform: 'Vercel',
  },

  // ── Local Web / CLI / Setup standalone projects ──────────────────────────────
  {
    id: 'electionguide',
    name: 'Election Guide',
    subtitle: 'Interactive Civic Education App',
    description:
      'An educational web application that simplifies and visualizes the Indian election process through interactive timelines, flashcards, quizzes, and a guided chat assistant.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Docker'],
    status: 'setup',
    githubUrl: 'https://github.com/tanush326k/Election-Guide',
    setupNote:
      'Client-side educational web application with Docker container configuration. Run locally via browser or Docker container.',
  },
  {
    id: 'dailyroutine',
    name: 'Daily Routine Analyser',
    subtitle: 'Productivity Pattern Analyzer',
    description:
      'A C command-line productivity application developed to parse, analyze, and optimize daily task routines and time distribution directly in the terminal.',
    stack: ['C', 'CLI', 'Terminal'],
    status: 'cli',
    githubUrl: 'https://github.com/tanush326k/daily-routine-analyser',
    setupNote:
      'C command-line project. Compile locally with GCC/Clang (e.g. gcc main.c -o routine_analyser) and execute in the terminal.',
  },
  {
    id: 'hermes',
    name: 'Hermes Agent Assistant',
    subtitle: 'Autonomous Workflow Agent',
    description:
      'A modular developer assistant engine with multi-step task planning, specialized tool execution, and persistent memory.',
    stack: ['Python', 'FastAPI', 'Uvicorn', 'Pydantic v2'],
    status: 'setup',
    githubUrl: 'https://github.com/tanush326k/hermes-agent-assistant',
    setupNote:
      'Requires local cloning and Python 3.10+ virtual environment setup. Designed for local execution and experimentation.',
  },
]
