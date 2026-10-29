import type { ReactNode } from 'react'

// Iconițe linie, aurii (stroke = currentColor). Desenate pentru acest site.
const paths: Record<string, ReactNode> = {
  wedding: (
    <>
      <circle cx="23" cy="42" r="13" />
      <circle cx="41" cy="42" r="13" />
      <path d="M32 6.5c-1.6-3-6.5-3-8 .3-1.6 3.6 3 7 8 11.2 5-4.2 9.600-7.600 8-11.200-1.500-3.300-6.400-3.300-8-.3z" />
    </>
  ),
  party: (
    <>
      <path d="M32 3v13" />
      <circle cx="32" cy="38" r="21" />
      <ellipse cx="32" cy="38" rx="21" ry="8" />
      <ellipse cx="32" cy="38" rx="8" ry="21" />
      <path d="M11 38h42M32 17v42" />
    </>
  ),
  corporate: (
    <>
      <path d="M6 21l22 11L6 43z" />
      <path d="M58 21L36 32l22 11z" />
      <rect x="27" y="26" width="10" height="12" rx="2" />
    </>
  ),
  ceremony: (
    <>
      <path d="M10 58V28a22 22 0 0 1 44 0v30" />
      <path d="M19 58V29a13 13 0 0 1 26 0v29" />
      <path d="M32 31c-1.200-2.300-4.800-2.300-5.800.2-1.200 2.700 2.200 5.200 5.800 8.400 3.600-3.200 7-5.700 5.800-8.400-1-2.500-4.600-2.500-5.800-.2z" />
      <path d="M6 58h52" />
    </>
  ),
  dance: (
    <>
      <circle cx="17" cy="47" r="6.500" />
      <circle cx="43" cy="41" r="6.500" />
      <path d="M23.500 47V15l26-6v32" />
      <path d="M23.500 25l26-6" />
      <path d="M55 8l1.500 3.500L60 13l-3.500 1.500L55 18l-1.500-3.500L50 13l3.500-1.500z" />
    </>
  ),
  show: (
    <>
      <path d="M32.0,11.0 L37.3,24.7 L52.0,25.5 L40.6,34.8 L44.3,49.0 L32.0,41.0 L19.7,49.0 L23.4,34.8 L12.0,25.5 L26.7,24.7Z" />
      <path d="M32 2v5M32 57v5M2 32h5M57 32h5M10.500 10.500l3.500 3.500M50 50l3.500 3.500M53.500 10.500L50 14M14 50l-3.500 3.500" />
    </>
  ),
  dj: (
    <>
      <path d="M11 40V32a21 21 0 0 1 42 0v8" />
      <rect x="6" y="36" width="10" height="18" rx="4" />
      <rect x="48" y="36" width="10" height="18" rx="4" />
      <path d="M53 54c0 5-6 7-14 7" />
      <circle cx="35" cy="61" r="2.500" />
    </>
  ),
}

export default function Icon({ name, className = '' }: { name: string; className?: string }) {
  return (
    <svg className={`icon ${className}`} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  )
}
