import {
  POSITIONING,
  POSITIONING_COMPANY,
  POSITIONING_COMPANY_URL,
} from '@/lib/profile'

/**
 * Single-source rendering of the "Currently building … @ Company" sentence.
 * Used on `/` (hero) and `/about` (Now block) so any tweak propagates.
 */
export default function NowLine() {
  return (
    <>
      {POSITIONING}{' '}
      <span className="text-gray-400 dark:text-gray-600">@</span>{' '}
      <a
        href={POSITIONING_COMPANY_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-900 dark:text-gray-100 underline decoration-accent/40 dark:decoration-accent-dark/40 underline-offset-2 hover:text-accent dark:hover:text-accent-dark hover:decoration-accent dark:hover:decoration-accent-dark transition-colors"
      >
        {POSITIONING_COMPANY}
      </a>
      .
    </>
  )
}
