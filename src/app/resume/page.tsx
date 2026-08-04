import type { Metadata } from 'next'
import RedirectToAbout from '@/components/RedirectToAbout'

// Legacy URL — the resume now lives on /about. Keep the page as a redirect
// stub, but out of search indexes and pointing crawlers at the real page.
export const metadata: Metadata = {
  robots: { index: false },
  alternates: { canonical: '/about/' },
}

export default function ResumeRedirect() {
  return <RedirectToAbout />
}
