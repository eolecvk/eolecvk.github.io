import Link from 'next/link'
import { getAllProjects } from '@/lib/mdx'
import { Project } from '@/types/project'
import ProjectThumb from '@/components/ProjectThumb'

export const metadata = {
  title: 'Projects - Eole Cervenka',
  description: 'AI/ML Engineering Projects',
}

function ProjectRow({ p }: { p: Project }) {
  return (
    <li className="group relative flex items-start gap-5 md:gap-8 -mx-3 px-3 py-5 md:py-7 rounded-lg transition-colors hover:bg-gray-50 dark:hover:bg-gray-900/60">
      <Link
        href={`/projects/${p.slug}`}
        aria-label={p.title}
        className="absolute inset-0"
      />
      <div className="w-24 sm:w-32 md:w-56 lg:w-64 aspect-[12/7] flex-shrink-0 rounded-md overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
        {(p.thumb || p.thumbnail) && (
          <ProjectThumb
            poster={p.thumb || p.thumbnail}
            video={p.thumbVideo}
            className="w-full h-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-3">
          <span className="font-medium text-gray-900 dark:text-gray-100 group-hover:underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 truncate">
            {p.title}
          </span>
          {p.liveUrl && (
            <a
              href={p.liveUrl}
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
          <div className="ml-auto flex items-baseline gap-2 flex-shrink-0">
            {p.metric && (
              <span className="hidden sm:inline font-mono text-xs italic text-gray-500 dark:text-gray-500 whitespace-nowrap">
                {p.metric}
              </span>
            )}
            {p.current && (
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-700 dark:text-gray-300 border border-gray-400 dark:border-gray-600 px-1.5 py-0.5 rounded-sm whitespace-nowrap">
                WIP
              </span>
            )}
          </div>
        </div>
        {p.tagline && (
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-2">
            {p.tagline}
          </p>
        )}
      </div>
    </li>
  )
}

export default function ProjectsPage() {
  const projects = getAllProjects()
  const sortFn = (a: Project, b: Project) => {
    if (a.current && !b.current) return -1
    if (!a.current && b.current) return 1
    const ad = a.date ? new Date(a.date as unknown as string).getTime() : 0
    const bd = b.date ? new Date(b.date as unknown as string).getTime() : 0
    return bd - ad
  }
  const isMedia = (p: Project) => p.category === 'Image/Video'
  const agentic = projects.filter((p) => !isMedia(p)).sort(sortFn)
  const media = projects.filter(isMedia).sort(sortFn)

  return (
    <div className="max-w-4xl mx-auto px-6 pt-6 md:pt-8 pb-12">
      <h1 className="sr-only">Projects</h1>

      <section>
        <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-500 dark:text-gray-500 mb-2">
          Agentic Applications
        </h2>
        <ul className="space-y-2">
          {agentic.map((p) => (
            <ProjectRow key={p.slug} p={p} />
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.12em] text-gray-500 dark:text-gray-500 mb-2">
          GenAI for Media
        </h2>
        <ul className="space-y-2">
          {media.map((p) => (
            <ProjectRow key={p.slug} p={p} />
          ))}
        </ul>
      </section>
    </div>
  )
}
