import Link from "next/link"
import Image from "next/image"
import { siteConfig } from "@/lib/data"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import RevealInit from "@/components/RevealInit"

const wppBase = `https://wa.me/${siteConfig.whatsapp}?text=`

export default function BuquesNoivaPage() {
  return (
    <>
      <RevealInit />
      <Nav />
      <main className="min-h-screen bg-base text-primary">

        {/* ── Hero ── */}
        <section data-nav-dark className="relative pt-44 pb-32 px-6 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="bg-drift absolute inset-0">
              <Image
                src="/images/flores/rosas-pink.jpg"
                alt="Buquês de noiva Lady Laura Atelier"
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-deep/20 via-transparent to-rose-deep/15" />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.4) 100%)' }}
          />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-[0.65rem] tracking-[0.5em] uppercase text-white/50 font-sans mb-5 opacity-0 animate-[fadeUp_1s_0.2s_ease_forwards]">
              Collection Spéciale
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-white mb-7 opacity-0 animate-[fadeUp_1s_0.4s_ease_forwards]">
              Buquês de Noiva
            </h1>

            <div className="flex items-center justify-center gap-5 mb-8 opacity-0 animate-[fadeUp_0.8s_0.6s_ease_forwards]">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-white/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-rose-dark/60" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-white/30" />
            </div>

            <p className="text-white/75 font-sans font-light text-base sm:text-lg max-w-xl mx-auto leading-relaxed opacity-0 animate-[fadeUp_0.8s_0.8s_ease_forwards]">
              Buquês exclusivos e personalizados para traduzir a delicadeza e a personalidade da noiva em cada detalhe.
            </p>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="relative max-w-4xl mx-auto px-6 py-24 text-center">
          <div className="absolute -top-32 -left-40 w-[400px] h-[400px] bg-rose-pale/40 rounded-full blur-[120px] pointer-events-none blob-pulse" />
          <div className="absolute -bottom-32 -right-40 w-[400px] h-[400px] bg-rose/15 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <div className="reveal relative">
            <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Notre savoir-faire</p>
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">Cada flor escolhida a dedo</h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
              <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
              </svg>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
            </div>
            <p className="text-ink-2 font-sans leading-[1.9] text-[0.95rem] max-w-2xl mx-auto">
              Os buquês de noiva Lady Laura são criados sob medida, alinhando a estética do vestido, o estilo do casamento e a personalidade de cada noiva. Trabalhamos com flores nobres, selecionadas a cada estação, sempre com o cuidado e a delicadeza que o seu dia merece.
            </p>
          </div>
        </section>

        {/* ── Galeria (placeholder para fotos futuras) ── */}
        <section className="relative bg-white py-24 overflow-hidden">
          <div className="absolute -top-32 right-0 w-[400px] h-[400px] bg-rose-pale/40 rounded-full blur-[120px] pointer-events-none blob-pulse" />

          <div className="max-w-7xl mx-auto px-6 relative">
            <div className="reveal text-center mb-14">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Nos Créations</p>
              <h2 className="font-serif text-3xl md:text-5xl text-primary mb-5">Galeria de Buquês</h2>
              <div className="flex items-center justify-center gap-4 mb-5">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-dark/40" />
                <svg className="w-2.5 h-2.5 text-rose-dark/40" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
                </svg>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-dark/40" />
              </div>
              <p className="text-ink-2 font-sans leading-relaxed max-w-xl mx-auto">Em breve nossa galeria completa com buquês reais assinados Lady Laura.</p>
            </div>

            <div className="reveal grid grid-cols-2 md:grid-cols-3 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="relative aspect-[3/4] rounded-[1.5rem] overflow-hidden bg-gradient-to-br from-rose-pale via-rose-bg to-cream-light flex items-center justify-center border border-rose/10"
                >
                  <svg className="w-14 h-14 text-rose/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Como encomendar ── */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute -bottom-20 -left-32 w-[500px] h-[500px] bg-rose-pale/40 rounded-full blur-[150px] pointer-events-none blob-pulse" />

          <div className="max-w-4xl mx-auto px-6 relative text-center">
            <div className="reveal">
              <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-3">Sur mesure</p>
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-6">Solicite o seu buquê exclusivo</h2>
              <p className="text-ink-2 font-sans leading-[1.9] text-[0.95rem] max-w-2xl mx-auto mb-10">
                Cada buquê é único e pensado para traduzir o seu dia. Fale com nossa equipe pelo WhatsApp e vamos criar juntas o buquê perfeito para a sua celebração.
              </p>
              <a
                href={`${wppBase}${encodeURIComponent('Olá! Gostaria de solicitar um orçamento para buquê de noiva.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shine inline-flex items-center gap-3 bg-rose-dark text-white font-sans font-medium text-[0.7rem] tracking-[0.15em] uppercase px-10 py-4 rounded-full hover:bg-rose-deep hover:scale-[1.03] transition-all duration-300 shadow-lg shadow-rose-dark/20"
              >
                Solicitar orçamento
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── Back link ── */}
        <div className="reveal text-center py-20">
          <Link
            href="/"
            className="btn-shine inline-flex items-center gap-3 px-10 py-4 rounded-full border border-rose-dark/30 text-rose-dark text-[0.7rem] font-semibold tracking-[0.18em] uppercase hover:bg-rose-dark hover:text-white hover:border-rose-dark transition-all duration-400 font-sans shadow-sm hover:shadow-lg hover:shadow-rose/15"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Voltar ao Início
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
