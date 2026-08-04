import Link from 'next/link'
import { getProjectBySlug } from '@/lib/mdx'
import ProjectThumb from '@/components/ProjectThumb'
import {
  NAME,
  ROLE,
  LINKS,
  CAL_URL,
  CAL_ENABLED,
  LINKEDIN_URL,
  PILLS,
} from '@/lib/profile'

export const metadata = {
  alternates: { canonical: '/' },
}

const SELECTED_SLUGS = [
  'strike-the-pose',
  'llm-pipeline',
  'stable-diffusion-benchmark',
] as const

export default function HomePage() {
  const selected = SELECTED_SLUGS.map((slug) => getProjectBySlug(slug)).filter(
    (p): p is NonNullable<typeof p> => p !== null,
  )

  return (
    <div className="max-w-4xl mx-auto px-6 pt-10 md:pt-14 pb-16">
      {/* Hero */}
      <section>
        <div className="flex items-start gap-5">
          <img
            src="/eole.webp"
            alt={`${NAME} portrait`}
            width={56}
            height={56}
            className="w-14 h-14 md:w-20 md:h-20 rounded-full object-cover flex-shrink-0 border border-gray-200 dark:border-gray-800"
          />
          <div className="min-w-0 flex-1">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              {NAME}
            </h1>
            <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-500 font-mono">
              {ROLE}
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500 dark:text-gray-400">
              {PILLS.slice(0, 2).join('  ·  ')}
            </p>
            <div className="mt-5 grid grid-cols-2 gap-3 max-w-md">
              <a
                href={CAL_ENABLED ? CAL_URL : LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-900 dark:border-gray-100 rounded text-sm font-medium bg-gray-900 text-white dark:bg-gray-100 dark:text-gray-900 hover:bg-accent hover:border-accent dark:hover:bg-accent-dark dark:hover:border-accent-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:focus-visible:outline-accent-dark"
                aria-label="Book a call on Cal.com"
              >
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>Book a call</span>
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-gray-300 dark:border-gray-700 rounded text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-900 hover:border-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:border-gray-100 dark:hover:text-gray-900 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:focus-visible:outline-accent-dark"
                aria-label="Message on LinkedIn"
              >
                <svg
                  aria-hidden
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zM4.943 12.248V6.169H2.542v6.079zm-1.2-6.911a1.252 1.252 0 1 0 0-2.501 1.252 1.252 0 0 0 0 2.501m4.908 6.911V8.91q0-.262.045-.453a1.94 1.94 0 0 1 .55-.794c.21-.149.38-.226.564-.226.501 0 .753.252.753.756v3.953h2.4V8.736c0-1.078-.32-1.928-.96-2.55-.638-.622-1.486-.933-2.543-.933-.654 0-1.198.143-1.633.43-.435.286-.74.66-.916 1.12V5.886H6.516a32 32 0 0 1 .025 1.41v4.952z"/>
                </svg>
                <span>Message</span>
              </a>
            </div>
          </div>
        </div>

      </section>

      {/* Selected work */}
      <section className="mt-16 md:mt-20">
        <ul className="space-y-2">
          {selected.map((p) => (
            <li
              key={p.slug}
              className="group relative flex items-start gap-5 md:gap-8 -mx-3 px-3 py-5 md:py-7 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-900/60"
            >
              <Link
                href={`/projects/${p.slug}`}
                aria-label={p.metadata.title}
                className="absolute inset-0 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent dark:focus-visible:outline-accent-dark"
              />
              <div className="w-24 sm:w-32 md:w-56 lg:w-64 aspect-[12/7] flex-shrink-0 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                {(p.metadata.thumb || p.metadata.thumbnail) && (
                  <ProjectThumb
                    poster={p.metadata.thumb || p.metadata.thumbnail}
                    video={p.metadata.thumbVideo}
                    className="w-full h-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3">
                  <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 truncate">
                    {p.metadata.title}
                  </span>
                  {p.metadata.liveUrl && (
                    <a
                      href={p.metadata.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Open live site in new tab"
                      className="relative z-10 flex-shrink-0 self-center text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-100 transition-colors"
                    >
                      <svg
                        aria-hidden
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24"
                      >
                        <path d="M7 17 17 7" />
                        <path d="M7 7h10v10" />
                      </svg>
                    </a>
                  )}
                  {p.metadata.metric && (
                    <span className="hidden sm:inline ml-auto font-mono text-xs italic text-gray-500 dark:text-gray-500 whitespace-nowrap">
                      {p.metadata.metric}
                    </span>
                  )}
                </div>
                {p.metadata.tagline && (
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
                    {p.metadata.tagline}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
