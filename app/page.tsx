import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Categories from '@/components/Categories'
import Editorial from '@/components/Editorial'
import FeaturedProducts from '@/components/FeaturedProducts'
import Marquee from '@/components/Marquee'
import About from '@/components/About'
import Testimonials from '@/components/Testimonials'
import InstagramFeed from '@/components/InstagramFeed'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import RevealInit from '@/components/RevealInit'
import SmoothScroll from '@/components/SmoothScroll'

export default function Home() {
  return (
    <>
      <RevealInit />
      <SmoothScroll />
      <Nav />
      <main className="bg-base text-primary">
        <Hero />
        <Categories />
        <Marquee />
        <Editorial />
        <FeaturedProducts />
        <CTASection />
        <About />
        <Testimonials />
        <InstagramFeed />
      </main>
      <Footer />
    </>
  )
}
