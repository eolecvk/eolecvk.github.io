'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { DOMAIN } from '@/lib/profile'

const NAV = [
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
] as const

export default function Header() {
  const pathname = usePathname() ?? '/'

  return (
    <header className="max-w-4xl mx-auto px-6 pt-8 md:pt-10 pb-6 border-b border-gray-200 dark:border-gray-800">
      <nav className="flex items-baseline justify-between text-sm" aria-label="Primary">
        <Link
          href="/"
          className="font-mono font-medium text-gray-900 dark:text-gray-100 hover:text-accent dark:hover:text-accent-dark transition-colors"
        >
          {DOMAIN}
        </Link>
        <div className="flex items-baseline gap-8 md:gap-10">
          {NAV.map(({ href, label }) => {
            const active = pathname.startsWith(href)
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'text-gray-900 dark:text-gray-100 underline decoration-accent dark:decoration-accent-dark decoration-2 underline-offset-4'
                    : 'text-gray-500 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors'
                }
              >
                {label}
              </Link>
            )
          })}
        </div>
      </nav>
    </header>
  )
}
