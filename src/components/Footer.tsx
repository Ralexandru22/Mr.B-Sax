import Social from './Social'
import { site } from '../data/content'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logo} alt="Mr B Sax" />
      <Social />
      <p>{site.name} — {site.tagline}</p>
      <p>© {new Date().getFullYear()} {site.name}</p>
    </footer>
  )
}
