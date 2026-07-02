import NowLine from '@/components/NowLine'
import {
  NAME,
  ROLE,
  POSITIONING,
  LINKS,
} from '@/lib/profile'

export const metadata = {
  title: 'About - Eole Cervenka',
  description: 'Machine Learning Engineer — bio, experience, and contact.',
}

const PERSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: NAME,
  jobTitle: ROLE,
  url: 'https://eolecvk.com',
  description: POSITIONING,
  sameAs: [LINKS.github, LINKS.linkedin],
  knowsAbout: [
    'Machine Learning',
    'Large Language Models',
    'Multi-agent systems',
    'Production AI',
    'Model Context Protocol',
    'Stable Diffusion',
    'LLM observability',
  ],
  worksFor: { '@type': 'Organization', name: 'Constellation Finance' },
  alumniOf: [
    { '@type': 'EducationalOrganization', name: 'Université Paris Dauphine - PSL' },
    { '@type': 'EducationalOrganization', name: 'Bentley University' },
    { '@type': 'EducationalOrganization', name: 'NEOMA Business School' },
  ],
  award: 'Cited by Google Research (Muse paper, 2023)',
}

type Role = {
  title: string
  company: string
  dates: string
  stage?: string
  bullets?: string[]
  blurb?: string
  nested?: boolean
  current?: boolean
  interstitial?: boolean
  highlights?: string[]
}

const EXPERIENCE: Role[] = [
  {
    title: 'AI/ML Engineer',
    company: 'Constellation Finance',
    dates: 'Mar 2026 – Present',
    stage: 'Seed: $3.5M',
    current: true,
    highlights: ['Multi-agent LLM systems'],
    bullets: [
      'Lead developer on the MCP (Model Context Protocol) product — AI agent access to financial data',
      'Multi-agent extraction pipeline for 200–400 page legal contracts, with Logfire-instrumented research loop',
    ],
  },
  {
    title: 'AI/ML Engineer',
    company: 'Entrepreneurial experiments',
    dates: 'Oct 2024 – Dec 2025',
    bullets: ['CreativeRush Media Lab — AI for filmmakers'],
    interstitial: true,
  },
  {
    title: 'Machine Learning Engineer',
    company: 'lambda.ai',
    dates: 'Jun 2022 – Oct 2024',
    stage: 'Series B → C',
    highlights: ['Cited by Google Research'],
    bullets: [
      'Stable Diffusion inference benchmark cited by Google Research (Muse paper, 2023)',
      'Built and optimized the LLM pipeline for news.lambda.ai (AI-generated ML news site)',
      'Published Stable Diffusion finetuning demos on Hugging Face',
    ],
  },
  {
    title: 'Machine Learning Engineer',
    company: 'Deep Voodoo · via lambda.ai',
    dates: 'Jun 2022 – Dec 2023',
    highlights: ['Hollywood VFX in production'],
    bullets: [
      'Transitioned a deepfake research pipeline to production',
      'Built reproducible GPU training environments for VFX delivery cycles',
      'R&D in image restoration and controllable image generation',
    ],
  },
  {
    title: 'AI Software Engineer',
    company: 'Boston Consulting Group',
    dates: 'Jun 2019 – Jul 2021',
    highlights: ['Big 3 consulting'],
    bullets: [
      'Production data pipelines (PySpark / Pandas) across the major clouds',
      'Built a JFrog-based CI/CD frontend so consultants could self-deploy cloud coding environments',
    ],
  },
]

const EDU_MAIN: { degree: string; school: string; dates: string }[] = [
  { degree: 'M.S. Machine Learning', school: 'Université Paris Dauphine - PSL', dates: '2017 – 2018' },
  { degree: 'MBA', school: 'Bentley University', dates: '2015 – 2016' },
  { degree: 'M.Sc. Management', school: 'NEOMA Business School', dates: '2011 – 2014' },
]

const EARLIER: { company: string; brief: string; dates: string }[] = [
  { company: 'Pre-seed startup', brief: 'Recommender system POC for e-commerce', dates: '2018 – 2019' },
  { company: 'Orange Telecom', brief: 'time-series classification research', dates: '2018' },
  { company: 'Pre-seed startup', brief: 'NLP analytics, graph community detection', dates: '2016 – 2017' },
]

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-500 dark:text-gray-500 mb-6">
      {children}
    </h2>
  )
}

function RoleCard({ role }: { role: Role }) {
  if (role.interstitial) return null
  const nested = role.nested
  return (
    <article
      className={
        nested
          ? 'mb-5 ml-5 pl-4 border-l-2 border-gray-200 dark:border-gray-700'
          : 'mb-7'
      }
    >
      <div className="flex items-baseline gap-3 mb-2">
        <h3
          className={
            nested
              ? 'flex-1 min-w-0 text-base font-medium text-gray-600 dark:text-gray-400'
              : 'flex-1 min-w-0 text-lg font-semibold text-gray-900 dark:text-gray-100'
          }
        >
          {role.title}
          <span className="font-normal text-gray-500 dark:text-gray-500">
            {' '}— {role.company}
          </span>
          {role.stage && (
            <span className="ml-2 font-mono text-[11px] font-normal text-gray-400 dark:text-gray-600 whitespace-nowrap align-middle">
              · {role.stage}
            </span>
          )}
        </h3>
        <span className="flex-shrink-0 font-mono text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">
          {role.dates}
        </span>
      </div>
      {role.highlights && role.highlights.length > 0 && (
        <div className="flex flex-wrap items-center gap-1.5 mb-2">
          {role.highlights.map((h) => (
            <span
              key={h}
              className="text-[11px] font-medium px-2 py-0.5 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-700 rounded-full whitespace-nowrap"
            >
              {h}
            </span>
          ))}
        </div>
      )}
      {role.bullets && (
        <ul className="list-disc list-outside ml-5 mt-2 space-y-1.5 marker:text-gray-400 dark:marker:text-gray-600">
          {role.bullets.map((b, i) => (
            <li
              key={i}
              className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 pl-1"
            >
              {b}
            </li>
          ))}
        </ul>
      )}
      {role.blurb && (
        <p className="text-[15px] leading-relaxed text-gray-700 dark:text-gray-300 mt-1">
          {role.blurb}
        </p>
      )}
    </article>
  )
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-6 md:pt-8 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_LD) }}
      />

      {/* Achievements — present, then past */}
      <section className="mb-12">
        <h1 className="sr-only">About</h1>
        <SectionHeading>Achievements</SectionHeading>
        <ul className="list-disc list-outside ml-5 space-y-2 marker:text-gray-400 dark:marker:text-gray-600 max-w-[60ch]">
          <li className="text-base leading-relaxed text-gray-700 dark:text-gray-300 pl-1">
            <NowLine />
          </li>
          <li className="text-base leading-relaxed text-gray-700 dark:text-gray-300 pl-1">
            Built a Stable Diffusion inference benchmark cited by Google Research.
          </li>
          <li className="text-base leading-relaxed text-gray-700 dark:text-gray-300 pl-1">
            Shipped a deepfake pipeline at Deep Voodoo (Hollywood VFX).
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section className="mb-12">
        <SectionHeading>Experience</SectionHeading>
        {EXPERIENCE.map((role, i) => (
          <RoleCard key={i} role={role} />
        ))}
      </section>

      {/* Earlier */}
      <section className="mb-12">
        <SectionHeading>Earlier</SectionHeading>
        <ul className="space-y-1.5">
          {EARLIER.map((e, i) => (
            <li
              key={i}
              className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 text-[15px] leading-relaxed"
            >
              <span className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-gray-900 dark:text-gray-100">{e.company}</span>
                <span className="text-gray-500 dark:text-gray-500"> — {e.brief}</span>
              </span>
              <span className="font-mono text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">
                {e.dates}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="mb-12">
        <SectionHeading>Education</SectionHeading>
        <div className="space-y-3">
          {EDU_MAIN.map((e) => (
            <div key={e.school}>
              <div className="flex flex-wrap justify-between items-baseline gap-3">
                <p className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  {e.degree}
                </p>
                <span className="font-mono text-xs text-gray-500 dark:text-gray-500 whitespace-nowrap">
                  {e.dates}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">{e.school}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PDF download */}
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-center gap-3 text-[11px] font-mono">
        <a
          href="/resume-ats.pdf"
          download
          aria-label="Download resume as PDF"
          className="text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors uppercase tracking-[0.12em]"
        >
          ↓ Download PDF
        </a>
      </div>
    </div>
  )
}
