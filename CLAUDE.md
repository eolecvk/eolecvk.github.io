# CLAUDE.md


Personal site of Eole Cervenka (eolecvk.com). Next.js 14 App Router + Tailwind,
MDX project content, deployed as static output (`images: { unoptimized: true }`).


## Conventions


- **No `next/image`.** Image optimization is disabled (static export). Use plain
  `<img>` with pre-sized assets instead.
- **Thumbnails vs heroes.** Project frontmatter has two image fields:
  `thumbnail` (full-size; serves the project-page hero and OG image) and
  `thumb` (576x336 webp in `public/images/projects/thumbs/`; used by list views
  on `/` and `/projects`, falling back to `thumbnail`). When adding a project,
  generate both. Never point `thumbnail` at a small file.
- **Dark mode is media-query based** (`darkMode: 'media'`) and non-negotiable:
  every color utility needs a `dark:` counterpart. The owner browses in dark
  mode - review changes in dark mode first.
- **Accent color discipline.** One accent: `accent` (#2743E3) / `accent-dark`
  (#8B9BFF), defined in `tailwind.config.js`. Used only for active nav
  underline, the hero company link, primary CTA hover, and focus rings.
  Everything else stays grayscale. Do not introduce new colors.
- **Layout rail.** All page containers align to `max-w-3xl` (matching
  header/footer). Keep the single-column, minimal identity - no card grids,
  no sidebars.
- **Profile data is centralized** in `src/lib/profile.ts` (name, role,
  positioning, links, pills, domain). Never hardcode these in components.
- **Motion respects `prefers-reduced-motion`** - any new animation needs a
  reduced-motion guard.


## Commands


- `npm run build` - production build (must pass before any PR)
- `npm run export` - static export (`STATIC_EXPORT=true`)

