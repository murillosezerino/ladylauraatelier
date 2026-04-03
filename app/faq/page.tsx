import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import FAQ from '@/components/FAQ'
import RevealInit from '@/components/RevealInit'
import SmoothScroll from '@/components/SmoothScroll'

export default function FAQPage() {
  return (
    <>
      <RevealInit />
      <SmoothScroll />
      <Nav />
      <main className="min-h-screen bg-base text-primary pt-20">
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
