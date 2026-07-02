/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/content/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'dark': '#171219',
        'accent': '#2743E3',
        'accent-dark': '#8B9BFF',
      },
      fontFamily: {
        'sans': ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        'mono': ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      spacing: {
        'xs': '0.5rem',    // 8px
        'sm': '1rem',      // 16px
        'md': '1.5rem',    // 24px
        'lg': '2rem',      // 32px
        'xl': '3rem',      // 48px
        '2xl': '4rem',     // 64px
        '3xl': '6rem',     // 96px
        '4xl': '8rem',     // 128px
        'section-mobile': '3rem',    // 48px
        'section-desktop': '5rem',   // 80px
      },
      maxWidth: {
        'content-narrow': '56rem',   // 896px - for hero content
        'content-default': '64rem',  // 1024px - for portfolio grid
        'content-wide': '72rem',     // 1152px - for sections
      },
      lineHeight: {
        'tight': '1.2',
        'snug': '1.35',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.gray[700]'),
            '--tw-prose-headings': theme('colors.gray[900]'),
            '--tw-prose-links': theme('colors.gray[900]'),
            '--tw-prose-bold': theme('colors.gray[900]'),
            '--tw-prose-code': theme('colors.gray[900]'),
            '--tw-prose-pre-bg': theme('colors.gray[50]'),
            '--tw-prose-pre-code': theme('colors.gray[900]'),
            '--tw-prose-quote-borders': theme('colors.gray[300]'),
            '--tw-prose-invert-body': theme('colors.gray[300]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-links': theme('colors.gray[100]'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-bg': theme('colors.gray[900]'),
            '--tw-prose-invert-pre-code': theme('colors.gray[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.gray[700]'),
            maxWidth: '70ch', // Optimal reading width
            fontSize: '1.0625rem', // 17px base
            lineHeight: '1.75',
            p: {
              marginTop: '1.5em',
              marginBottom: '1.5em',
            },
            a: {
              fontWeight: '500',
              textDecoration: 'underline',
              textDecorationColor: theme('colors.gray[300]'),
              '&:hover': {
                textDecorationColor: theme('colors.gray[900]'),
              },
            },
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: '700',
              letterSpacing: '-0.025em',
            },
            h1: {
              fontSize: '2.25rem', // 36px
              lineHeight: '1.2',
              marginTop: '0',
              marginBottom: '1rem',
            },
            h2: {
              fontSize: '1.875rem', // 30px
              lineHeight: '1.3',
              marginTop: '2rem',
              marginBottom: '1rem',
            },
            h3: {
              fontSize: '1.5rem', // 24px
              lineHeight: '1.4',
              marginTop: '2rem',
              marginBottom: '0.75rem',
            },
            h4: {
              fontSize: '1.25rem', // 20px
              lineHeight: '1.5',
              marginTop: '2rem',
              marginBottom: '0.5rem',
            },
            code: {
              backgroundColor: theme('colors.gray[100]'),
              color: theme('colors.gray[900]'),
              borderRadius: '0.25rem',
              padding: '0.125rem 0.375rem',
              fontWeight: '500',
              fontSize: '0.875em',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              backgroundColor: theme('colors.gray[100]'),
              borderRadius: '0.25rem',
              padding: '1.25rem 1.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
              overflowX: 'auto',
              border: `1px solid ${theme('colors.gray[200]')}`,
            },
            'pre code': {
              backgroundColor: 'transparent',
              color: 'inherit',
              padding: '0',
              fontWeight: '400',
              fontSize: '0.875rem',
            },
            blockquote: {
              fontWeight: '400',
              fontStyle: 'normal',
              borderLeftWidth: '0.25rem',
              borderLeftColor: theme('colors.gray[300]'),
              backgroundColor: theme('colors.gray[50]'),
              padding: '1.5rem',
              marginTop: '2rem',
              marginBottom: '2rem',
              borderRadius: '0.25rem',
            },
            'ul, ol': {
              paddingLeft: '1.5rem',
              marginTop: '1.5rem',
              marginBottom: '1.5rem',
            },
            li: {
              marginTop: '0.75rem',
              marginBottom: '0.75rem',
            },
            'ul > li': {
              paddingLeft: '0.5rem',
            },
            'ol > li': {
              paddingLeft: '0.5rem',
            },
            img: {
              marginTop: '3rem',
              marginBottom: '3rem',
              borderRadius: '0.25rem',
            },
            table: {
              fontSize: '0.9375rem',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            thead: {
              borderBottomWidth: '2px',
              borderBottomColor: theme('colors.gray[300]'),
            },
            'thead th': {
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
              fontWeight: '600',
            },
            'tbody td': {
              paddingTop: '0.75rem',
              paddingBottom: '0.75rem',
              paddingLeft: '1rem',
              paddingRight: '1rem',
            },
            'tbody tr': {
              borderBottomWidth: '1px',
              borderBottomColor: theme('colors.gray[200]'),
            },
            hr: {
              borderColor: theme('colors.gray[200]'),
              marginTop: '3rem',
              marginBottom: '3rem',
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
