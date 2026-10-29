import { useEffect, useState } from 'react'
import logo from '../assets/logo.png'

const links = [
  { href: '#despre', label: 'Despre' },
  { href: '#servicii', label: 'Servicii' },
  { href: '#live', label: 'Live Sax Show' },
  { href: '#galerie', label: 'Galerie' },
  { href: '#video', label: 'Video' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'is-scrolled' : ''}`}>
      <a href="#top" className="header__logo" aria-label="Mr B Sax, început pagină">
        <img src={logo} alt="Mr B Sax" />
      </a>
      <button
        className="header__toggle"
        aria-expanded={open}
        aria-controls="meniu"
        onClick={() => setOpen((o) => !o)}
      >
        {open ? 'Închide' : 'Meniu'}
      </button>
      <nav id="meniu" className={`nav ${open ? 'is-open' : ''}`} aria-label="Principal">
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
        ))}
      </nav>
    </header>
  )
}
