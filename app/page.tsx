import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Products from '@/components/Products'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import RevealInit from '@/components/RevealInit'

export default function Home() {
  return (
    <>
      <RevealInit />
      <Nav />
      <main>
        <Hero />
        <Products />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
