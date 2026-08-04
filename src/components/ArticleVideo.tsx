'use client'

import { useEffect, useRef } from 'react'
import type { ComponentPropsWithoutRef } from 'react'

// Autoplaying <video> for article bodies that respects prefers-reduced-motion:
// the static HTML ships with autoplay, and we stop playback on hydration for
// users who asked for reduced motion (same client-side pattern as ProjectThumb).
export default function ArticleVideo(props: ComponentPropsWithoutRef<'video'>) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el || !el.autoplay) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.autoplay = false
      el.removeAttribute('autoplay')
      el.pause()
      el.controls = true
    }
  }, [])

  return <video ref={ref} {...props} />
}
