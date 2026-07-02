'use client'

import { useEffect, useRef, useState } from 'react'

interface ProjectThumbProps {
  poster: string
  video?: string
  alt?: string
  className?: string
}

export default function ProjectThumb({ poster, video, alt = '', className }: ProjectThumbProps) {
  const [playVideo, setPlayVideo] = useState(false)
  const [inView, setInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (!video) return
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPlayVideo(!query.matches)
  }, [video])

  // Only mount the video once the thumbnail nears the viewport, so
  // below-the-fold rows don't eagerly download every mp4 on the page.
  useEffect(() => {
    if (!video || inView) return
    const el = imgRef.current
    if (!el) return
    if (!('IntersectionObserver' in window)) {
      setInView(true)
      return
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true)
          observer.disconnect()
        }
      },
      { rootMargin: '200px' },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [video, inView])

  if (playVideo && inView && video) {
    return (
      <video
        className={className}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
      >
        <source src={video} type="video/mp4" />
      </video>
    )
  }

  return <img ref={imgRef} src={poster} alt={alt} loading="lazy" className={className} />
}
