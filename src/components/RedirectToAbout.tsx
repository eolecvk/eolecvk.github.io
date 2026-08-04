'use client'

import { useEffect } from 'react'

export default function RedirectToAbout() {
  useEffect(() => {
    window.location.replace('/about')
  }, [])

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 text-center text-sm text-gray-500 dark:text-gray-500">
      <p>
        Redirecting to{' '}
        <a
          href="/about"
          className="underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 hover:text-gray-900 dark:hover:text-gray-100"
        >
          /about
        </a>
        …
      </p>
    </div>
  )
}
