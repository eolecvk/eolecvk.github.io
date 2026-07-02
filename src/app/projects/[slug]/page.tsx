import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getAllProjectSlugs, getProjectBySlug, getAdjacentProjects } from '@/lib/mdx'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from 'rehype-highlight'

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs()
  return slugs
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: `${project.metadata.title} - Eole Cervenka`,
    description: project.metadata.description,
    openGraph: {
      title: project.metadata.title,
      description: project.metadata.description,
      type: 'article',
      images: [{ url: `/og/${params.slug}.png`, width: 1200, height: 630, alt: project.metadata.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.metadata.title,
      description: project.metadata.description,
      images: [`/og/${params.slug}.png`],
    },
  }
}

function formatDate(dateString: string) {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', timeZone: 'UTC' })
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
  }

  const { prev, next } = getAdjacentProjects(params.slug)
  const tags = project.metadata.tags || []

  // Schema.org CreativeWork — explicit metadata for AI agents and search engines
  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.metadata.title,
    description: project.metadata.description,
    datePublished: project.metadata.date,
    keywords: tags.join(', '),
    author: {
      '@type': 'Person',
      name: 'Eole Cervenka',
      url: 'https://eolecvk.com',
    },
    image: project.metadata.thumbnail
      ? `https://eolecvk.com${project.metadata.thumbnail}`
      : undefined,
  }

  return (
    <div className="max-w-2xl mx-auto px-6 pt-6 md:pt-8 pb-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />

      <article>
        {/* Header — title + meta strip + intro */}
        <header className="mb-10">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            {project.metadata.title}
          </h1>

          {!project.metadata.hideMeta && (
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-3 font-mono text-xs text-gray-500 dark:text-gray-500">
              {project.metadata.date && (
                <span>{formatDate(project.metadata.date)}</span>
              )}
              {project.metadata.current && (
                <>
                  <span className="text-gray-300 dark:text-gray-700">·</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span
                      aria-hidden
                      className="inline-block w-[6px] h-[6px] rounded-full bg-gray-900 dark:bg-gray-100"
                    />
                    Active
                  </span>
                </>
              )}
              <span className="text-gray-300 dark:text-gray-700">·</span>
              <span>{project.readingMinutes} min read</span>
            </div>
          )}

          {project.metadata.intro && (
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mt-5 max-w-[60ch]">
              {project.metadata.intro}
            </p>
          )}

          {project.metadata.stats && project.metadata.stats.length > 0 && (
            <p className="mt-4 font-mono text-xs text-gray-500 dark:text-gray-500 leading-relaxed">
              {project.metadata.stats.map((s, i) => (
                <span key={s.label}>
                  {i > 0 && <span className="text-gray-300 dark:text-gray-700"> · </span>}
                  <span className="text-gray-400 dark:text-gray-600 uppercase tracking-[0.12em]">{s.label}</span>{' '}
                  <span className="text-gray-700 dark:text-gray-300">{s.value}</span>
                </span>
              ))}
            </p>
          )}
        </header>

        {/* Hero image — minimal frame */}
        {project.metadata.thumbnail && !project.metadata.hideHero && (
          <img
            src={project.metadata.thumbnail}
            alt={project.metadata.title}
            className="w-full h-auto rounded mb-10"
          />
        )}

        {/* Body prose */}
        <div className="prose dark:prose-invert prose-headings:first:mt-0 max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
            components={{
              a: ({ node, ...props }) => (
                <a target="_blank" rel="noopener noreferrer" {...props} />
              ),
              img: ({ node, ...props }) => (
                <img className="max-w-full h-auto" loading="lazy" {...props} />
              ),
            }}
          >
            {project.content}
          </ReactMarkdown>
        </div>

        {/* Tags — moved out of meta strip to article foot */}
        {tags.length > 0 && (
          <p className="mt-14 font-mono text-[11px] uppercase tracking-[0.08em] text-gray-500 dark:text-gray-400">
            {tags.join('  ·  ')}
          </p>
        )}
      </article>

      {/* Prev / Next navigation — quiet inline foot */}
      {(prev || next) && (
        <nav className="mt-14 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2 text-sm">
          <div className="flex-1 min-w-0">
            {prev && (
              <Link
                href={`/projects/${prev.slug}`}
                className="group inline-flex items-baseline gap-2"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-gray-400 dark:text-gray-600">
                  ← Previous
                </span>
                <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 truncate">
                  {prev.title}
                </span>
              </Link>
            )}
          </div>
          <div className="flex-1 min-w-0 sm:text-right">
            {next && (
              <Link
                href={`/projects/${next.slug}`}
                className="group inline-flex items-baseline gap-2"
              >
                <span className="font-medium text-gray-700 dark:text-gray-300 group-hover:underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 truncate">
                  {next.title}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-gray-400 dark:text-gray-600">
                  Next →
                </span>
              </Link>
            )}
          </div>
        </nav>
      )}
    </div>
  )
}
