import { useEffect, useRef, useState } from 'react'
import { stats, statsCaption } from '../data/content'

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Counter({ value, suffix, start, delay }: { value: number; suffix: string; start: boolean; delay: number }) {
  const [n, setN] = useState(() => (reduced() ? value : 0))

  useEffect(() => {
    if (!start || reduced()) return
    let raf = 0
    const t0 = performance.now() + delay
    const tick = (t: number) => {
      const p = Math.min(Math.max((t - t0) / 1900, 0), 1)
      setN(Math.round(value * (1 - Math.pow(1 - p, 3)))) // încetinește spre final
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, value, delay])

  return (
    <>
      <span aria-hidden="true">{n}{suffix}</span>
      <span className="sr-only">{value}{suffix}</span>
    </>
  )
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect() } },
      { threshold: 0.4 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section ref={ref} className={`stats ${seen ? 'is-in' : ''}`} aria-label="Experiența în cifre">
      <ul className="stats__grid">
        {stats.map((s, i) => (
          <li key={s.label} style={{ transitionDelay: `${i * 120}ms` }}>
            <p className="stats__num"><Counter value={s.value} suffix={s.suffix} start={seen} delay={i * 120} /></p>
            <p className="stats__label">{s.label}</p>
          </li>
        ))}
      </ul>
      <p className="stats__caption">{statsCaption}</p>
    </section>
  )
}
