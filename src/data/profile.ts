export interface Education {
  degree: string
  institution: string
  location: string
  years: string
  note?: string
}

export interface LeadershipRole {
  role: string
  organization: string
  period: string
  badge: string
  description: string
  pathwayInfo?: string
  futureGoal?: string
}

export interface EventHighlight {
  name: string
  category: 'In-Person Event' | 'Challenge' | 'Hackathon' | 'Community'
  date: string
  outcome: string
  tag?: string
}

export const profile = {
  name: 'Tanush Kasetty',
  labName: "THE BUILDER'S LAB",
  tagline: 'Where Curiosity Becomes Capability.',
  title: 'Student Developer',
  philosophy: 'Technology should amplify human potential, not replace human thinking.',
  education: [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'CSI Wesley Institute of Technology and Science',
      location: 'Hyderabad, India',
      years: '2025–2029',
      note: 'Undergraduate student building cloud architectures, full-stack systems, and AI agent workflows.',
    },
    {
      degree: 'DCAP (Diploma in Computer Applications)',
      institution: 'State Technical Board & Foundation Center',
      location: 'Hyderabad, India',
      years: 'Foundational Studies',
      note: 'Early technical training covering computing fundamentals, MS Office, Microsoft Word, C, and C++ — providing the foundational spark for independent software exploration.',
    },
  ],
  story: {
    origin:
      "I have always been deeply fascinated by technology. Watching simple ideas evolve into useful products and transformative solutions motivated me to explore how technology operates under the hood and how software can simplify everyday human effort.",
    focus:
      "My primary passion is cloud technology, built alongside modern software engineering, AI agents, and emerging web platforms. I love investigating new developer tools and services to streamline complex workflows.",
    craft:
      "I genuinely enjoy spending long hours prototyping projects, designing architectures, and experimenting with ideas. While tracking down unexpected bugs and debugging tricky edge cases can test my patience, solving them is one of the most rewarding parts of my learning journey.",
    methodology:
      "I continuously explore programming languages and systems through hands-on experimentation and modern AI-assisted development workflows. I use AI as an intellectual amplifier to accelerate learning, test hypotheses, and build robust software faster — while keeping engineering rigor firmly in human hands.",
    ambition:
      "My professional ambition is to grow into a skilled software development and cloud engineering professional. I am committed to expanding my technical depth, attending developer conferences and hackathons, contributing to student developer communities, and collaborating with fellow builders.",
  },
  links: {
    github: 'https://github.com/tanush326k',
    linkedin: 'https://www.linkedin.com/in/tanush701321/',
    geeksforgeeks: 'https://www.geeksforgeeks.org/profile/tanush326k',
    devCommunity: 'https://dev.to/tanush_326k',
    credly: 'https://www.credly.com/users/tanush-kasetty',
    awsBuilderCenterHandle: '@tanush326',
  },
  leadership: [
    {
      role: 'Microsoft Learn Student Ambassador',
      organization: 'Microsoft',
      period: 'October 2026 Cohort',
      badge: 'Associate',
      description:
        'Selected as an Associate-tier Ambassador in the October 2026 cohort. Actively fostering student technical literacy and facilitating peer learning across Microsoft Cloud & developer tooling.',
      pathwayInfo:
        'The Microsoft Learn Student Ambassador program outlines milestone and eligibility pathways for student leaders, including the Community Skiller path requirement (1,000 net-new completed learning modules) and the Influencer path requirement (250 preferred visitors). These figures represent official program pathway criteria rather than personal completion claims, illustrating the structured dedication to peer technical education fostered within the ambassador network.',
    },
    {
      role: 'AWS Student Builder Group Leader',
      organization: 'Amazon Web Services',
      period: 'September 2026 – September 2027',
      badge: 'Community Leader',
      description:
        'Serving as a student leader in the AWS Student Builder community, driving cloud education, demystifying AWS architectures, and helping fellow students build hands-on prototypes on AWS.',
    },
    {
      role: 'Google Product Expert',
      organization: 'Google',
      period: 'Active Contributor',
      badge: 'Bronze Tier',
      description:
        'Contributing user support and troubleshooting across Google product ecosystems in the Google Product Experts program, currently holding Bronze status.',
      futureGoal: 'Consistently deepening community contributions with the long-term goal of advancing to higher tiers.',
    },
    {
      role: 'GFG Campus Mantri',
      organization: 'GeeksforGeeks',
      period: 'June – December 2026',
      badge: 'Campus Ambassador',
      description:
        'Represented GeeksforGeeks at CSI Wesley Institute of Technology and Science, fostering campus coding culture, organizing data structure challenges, and supporting peers in technical preparation.',
    },
    {
      role: 'Comet Student Affiliate Program',
      organization: 'Comet',
      period: 'October 19, 2025',
      badge: 'Affiliate Milestone',
      description:
        'Participated in the Comet Student Affiliate Program promoting developer tools and machine learning collaboration platforms, earning a first USD 13 affiliate milestone.',
    },
  ] as LeadershipRole[],
  eventsAndChallenges: [
    {
      name: 'AWS Builder Showcase Weekend Challenge',
      category: 'Challenge',
      date: '2026',
      outcome: 'Showcased verified project architecture; awarded an official AWS Builder jacket.',
      tag: 'Won AWS Jacket',
    },
    {
      name: 'Google DevFest 2026',
      category: 'In-Person Event',
      date: 'October 24, 2026',
      outcome: 'Attended the premier regional Google developer festival exploring AI, web performance, and cloud-native patterns.',
      tag: 'Live Event',
    },
    {
      name: 'AWS Student Community Day at MECS',
      category: 'In-Person Event',
      date: 'October 9, 2026',
      outcome: 'Participated in full-day AWS sessions covering serverless architectures, containerization, and cloud security.',
      tag: 'Live Event',
    },
    {
      name: 'AWS Future Builder Connect',
      category: 'In-Person Event',
      date: 'September 17, 2026',
      outcome: 'Engaged with AWS cloud architects and student builders, exploring scalable deployment patterns.',
      tag: 'Live Event',
    },
    {
      name: 'Murf AI — 10 Days of Voice Agents Challenge',
      category: 'Hackathon',
      date: 'August 2026',
      outcome: 'Engineered MoneyBuddy, an AI voice-agent experiment built within project branches using LiveKit and Murf Falcon.',
      tag: 'Voice AI Experiment',
    },
    {
      name: 'Google Build with AI / Hack2Skill',
      category: 'In-Person Event',
      date: 'July 17, 2026',
      outcome: 'Hands-on hackathon workshop building GenAI agent prototypes using Google Gemini models.',
      tag: 'Live Hackathon',
    },
    {
      name: 'Unstop 30 Days POTD',
      category: 'Challenge',
      date: 'May 2026',
      outcome: 'Completed a 30-day Problem of the Day sprint, sharpening data structures, algorithmic logic, and consistency.',
      tag: '30-Day Streak',
    },
    {
      name: 'GeeksforGeeks Technical Scripter',
      category: 'Challenge',
      date: 'April 2026',
      outcome: 'Completed a 15-day technical writing challenge breaking down core CS concepts and developer tutorials.',
      tag: '15-Day Challenge',
    },
    {
      name: 'Google PromptWars / Hack2Skill',
      category: 'Challenge',
      date: '2026',
      outcome: 'Participated in structured prompt engineering competitions and AI application development sprints.',
      tag: 'Prompt Engineering',
    },
    {
      name: 'Google Cloud Arcade',
      category: 'Challenge',
      date: '2025',
      outcome: 'Completed hands-on Google Cloud infrastructure labs, earning the Novice tier recognition.',
      tag: 'Novice Tier',
    },
    {
      name: 'MLH Hacktoberfest',
      category: 'Challenge',
      date: 'October 2025',
      outcome: 'Participated in open-source celebrations, creating pull requests and collaborating on community repositories.',
      tag: 'Open Source',
    },
  ] as EventHighlight[],
} as const
