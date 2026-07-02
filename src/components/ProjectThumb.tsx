'use client'

import { useEffect, useState } from 'react'

interface ProjectThumbProps {
  poster: string
  video?: string
  alt?: string
  className?: string
}

export default function ProjectThumb({ poster, video, alt = '', className }: ProjectThumbProps) {
  const [playVideo, setPlayVideo] = useState(false)

  useEffect(() => {
    if (!video) return
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPlayVideo(!query.matches)
  }, [video])

  if (playVideo && video) {
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

  return <img src={poster} alt={alt} loading="lazy" className={className} />
}
