export type SkillStage = 'Foundations' | 'Hands-on exploration' | 'Currently learning' | 'Development workflow'

export interface SkillItem {
  name: string
  stage: SkillStage
  note?: string
}

export interface SkillGroup {
  category: string
  subtitle: string
  skills: SkillItem[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Programming Foundations',
    subtitle: 'Core computer science principles and programming languages explored through coursework and rigorous project building.',
    skills: [
      { name: 'C', stage: 'Foundations', note: 'Early DCAP exposure & procedural basics' },
      { name: 'C++', stage: 'Foundations', note: 'OOP concepts & foundational problem-solving' },
      { name: 'Python', stage: 'Hands-on exploration', note: 'FastAPI, scripts & AI agent backends' },
      { name: 'TypeScript', stage: 'Hands-on exploration', note: 'Type-safe React & Next.js architectures' },
      { name: 'JavaScript (ES6+)', stage: 'Hands-on exploration', note: 'Modern asynchronous web applications' },
      { name: 'HTML5 & CSS3', stage: 'Foundations', note: 'Semantic markup & modern responsive layouts' },
    ],
  },
  {
    category: 'Cloud Platforms Explored',
    subtitle: 'Practical exposure to leading cloud platforms for hosting, containerization, and AI model invocation.',
    skills: [
      { name: 'Amazon Web Services (AWS)', stage: 'Hands-on exploration', note: 'Amplify Hosting, Bedrock APIs, IAM & S3' },
      { name: 'Google Cloud Platform (GCP)', stage: 'Hands-on exploration', note: 'Cloud Run, Arcade labs & Gemini APIs' },
      { name: 'Microsoft Cloud Technologies', stage: 'Currently learning', note: 'Azure fundamentals & MLSA learning paths' },
    ],
  },
  {
    category: 'Tools & Development Workflow',
    subtitle: 'The modern developer toolkit powering rapid prototyping, AI-assisted workflows, and version control.',
    skills: [
      { name: 'Google Antigravity', stage: 'Development workflow', note: 'Agentic coding & multi-file architectures' },
      { name: 'Cursor', stage: 'Development workflow', note: 'AI-assisted code generation & refactoring' },
      { name: 'Git & GitHub', stage: 'Development workflow', note: 'Branching, PRs & CI/CD automation' },
      { name: 'Visual Studio Code', stage: 'Development workflow', note: 'Primary IDE for full-stack builds' },
      { name: 'ChatGPT', stage: 'Development workflow', note: 'Research, technical design & problem framing' },
      { name: 'MySQL & SQLite', stage: 'Hands-on exploration', note: 'Relational data modeling & local persistence' },
    ],
  },
  {
    category: 'Frameworks, Libraries & Testing',
    subtitle: 'Production frameworks and test runners verified across shipped projects.',
    skills: [
      { name: 'React 19 & Next.js', stage: 'Hands-on exploration', note: 'Server/client components & routing' },
      { name: 'FastAPI', stage: 'Hands-on exploration', note: 'High-performance Python microservices' },
      { name: 'Tailwind CSS v4', stage: 'Hands-on exploration', note: 'Design systems & OKLCH color palettes' },
      { name: 'Vitest & Pytest', stage: 'Hands-on exploration', note: '129 documented tests (97 ClauseLens + 32 CarbonTrack)' },
      { name: 'Docker', stage: 'Hands-on exploration', note: 'Reproducible containerized environments' },
      { name: 'Zod & Pydantic v2', stage: 'Hands-on exploration', note: 'Strict runtime schema validation' },
    ],
  },
]
