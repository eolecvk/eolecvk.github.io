import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mt-8 mb-4 first:mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mt-8 mb-4 first:mt-0">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-semibold mt-6 mb-3">{children}</h3>
    ),
    p: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
    ul: ({ children }) => <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>,
    li: ({ children }) => <li>{children}</li>,
    a: ({ href, children }) => (
      <a href={href} className="text-gray-900 dark:text-gray-100 underline decoration-gray-300 dark:decoration-gray-700 underline-offset-4 hover:decoration-gray-900 dark:hover:decoration-gray-100" target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded overflow-x-auto mb-4">
        {children}
      </pre>
    ),
    img: ({ src, alt }) => (
      <div className="my-8">
        <img src={src} alt={alt || ''} className="w-full rounded" />
      </div>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    ...components,
  }
}
