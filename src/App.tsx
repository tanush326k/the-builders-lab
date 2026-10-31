import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Skills } from '@/sections/Skills'
import { Projects } from '@/sections/Projects'
import { Lab } from '@/sections/Lab'
import { Leadership } from '@/sections/Leadership'
import { Achievements } from '@/sections/Achievements'
import { Contact } from '@/sections/Contact'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text-1)]">
      <Nav />
      <main id="main-content" className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Lab />
        <Leadership />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
