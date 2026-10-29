import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Services from './components/Services'
import LiveShow from './components/LiveShow'
import Gallery from './components/Gallery'
import Videos from './components/Videos'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Social from './components/Social'

export default function App() {
  return (
    <>
      <a className="skip" href="#continut">Sari la conținut</a>
      <Header />
      <Social className="social--rail" />
      <main id="continut">
        <Hero />
        <About />
        <Stats />
        <Services />
        <LiveShow />
        <Gallery />
        <Videos />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
