export interface Project {
  slug: string
  title: string
  tagline?: string
  description: string
  intro: string
  thumbnail: string
  thumb?: string
  thumbVideo?: string
  date: string
  tags: string[]
  current?: boolean
  featured?: boolean
  category?: string
  metric?: string
  liveUrl?: string
}

export interface ProjectMetadata {
  title: string
  tagline?: string
  description: string
  intro: string
  thumbnail: string
  thumb?: string
  thumbVideo?: string
  date: string
  tags?: string[]
  current?: boolean
  featured?: boolean
  category?: string
  metric?: string
  liveUrl?: string
  stats?: { label: string; value: string }[]
  hideHero?: boolean
  hideMeta?: boolean
}
