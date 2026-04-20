import { useReveal } from './hooks/useReveal'
import { About } from './components/About'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Nav } from './components/Nav'
import { Overlays } from './components/Overlays'
import { Reel } from './components/Reel'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { ThemeToggle } from './components/ThemeToggle'
import { Timeline } from './components/Timeline'
import { Work } from './components/Work'

export default function App() {
  useReveal()
  return (
    <>
      <Overlays />
      <Nav />
      <ThemeToggle />

      <Hero />
      <Marquee />
      <About />
      <Services />
      <Work />
      <Reel />
      <Capabilities />
      <Timeline />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
