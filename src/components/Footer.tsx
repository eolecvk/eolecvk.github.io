import { LINKS, CAL_URL, CAL_ENABLED, LINKEDIN_URL } from '@/lib/profile'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-10">
        <nav
          className="flex flex-wrap items-baseline justify-center gap-12 md:gap-20 text-sm text-gray-500 dark:text-gray-500"
          aria-label="Contact"
        >
          <a
            href={LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={CAL_ENABLED ? CAL_URL : LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          >
            Book a call
          </a>
        </nav>
      </div>
    </footer>
  )
}
