import { useCallback, useEffect, useState } from 'react'

// Pune pozele în src/assets/gallery (jpg, jpeg, png, webp). Apar automat, în ordine alfabetică.
const modules = import.meta.glob('../assets/gallery/*.{jpg,jpeg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const photos = Object.keys(modules).sort().map((k) => modules[k])

export default function Gallery() {
  const [current, setCurrent] = useState<number | null>(null)

  const close = useCallback(() => setCurrent(null), [])
  const step = useCallback(
    (d: number) => setCurrent((c) => (c === null ? c : (c + d + photos.length) % photos.length)),
    [],
  )

  useEffect(() => {
    if (current === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [current, close, step])

  if (photos.length === 0) return null

  return (
    <section id="galerie" className="section">
      <h2>Din culise și de pe scenă</h2>
      <ul className="gallery">
        {photos.map((src, i) => (
          <li key={src}>
            <button onClick={() => setCurrent(i)} aria-label={`Deschide fotografia ${i + 1}`}>
              <img src={src} alt="" loading="lazy" />
            </button>
          </li>
        ))}
      </ul>

      {current !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galerie foto" onClick={close}>
          <img src={photos[current]} alt="" onClick={(e) => e.stopPropagation()} />
          <button className="lightbox__close" onClick={close}>Închide</button>
          {photos.length > 1 && (
            <>
              <button className="lightbox__nav lightbox__nav--prev" onClick={(e) => { e.stopPropagation(); step(-1) }}>Înapoi</button>
              <button className="lightbox__nav lightbox__nav--next" onClick={(e) => { e.stopPropagation(); step(1) }}>Înainte</button>
            </>
          )}
        </div>
      )}
    </section>
  )
}
