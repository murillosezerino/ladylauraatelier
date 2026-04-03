'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Vocês são pet friendly?',
    a: 'Somente na unidade de Jacareí possuímos espaço externo para receber os amiguinhos. Em caso de chuva, não conseguimos realocá-los.',
  },
  {
    q: 'Aceitam Vale / Ticket refeição?',
    a: 'Não aceitamos. Com exceção do Caju, que passa normalmente na modalidade crédito.',
  },
  {
    q: 'Quais as formas de pagamento aceitas?',
    a: 'Débito, crédito à vista, PIX e dinheiro.',
  },
  {
    q: 'Possuem delivery?',
    a: 'Sim! Nosso delivery é especializado em entregas de flores e presentes. O pedido mínimo em produtos é R$ 150,00 + frete.',
  },
  {
    q: 'Como é feito o atendimento online?',
    a: 'Nosso atendimento online é específico para pedidos de eventos, encomendas, flores e presentes — somente via WhatsApp, com retorno em até 24h úteis.',
  },
  {
    q: 'Posso tirar fotos de divulgação nas casas?',
    a: 'Ficamos felizes por fazer parte da sua história! No entanto, fotos e/ou vídeos com propósito de divulgação de marcas, produtos ou ensaios fotográficos são expressamente proibidos em qualquer área das casas.',
  },
  {
    q: 'Posso levar bolo ou balões para o parabéns?',
    a: 'Por sermos uma casa especializada em eventos, não é permitido trazer bolos, balões ou realizar comemorações no salão sem a contratação prévia de um dos nossos formatos de evento. Assim conseguimos cuidar de cada detalhe com carinho.',
  },
  {
    q: 'Qual o prazo para encomendar um bolo?',
    a: 'O prazo mínimo é de 4 dias de antecedência, dependendo do modelo escolhido e da data do evento. Consulte sempre a disponibilidade.',
  },
  {
    q: 'Como confirmo meu pedido de encomenda?',
    a: 'Após enviar o modelo, sabor, tamanho, data e horário de retirada via WhatsApp, enviamos o orçamento completo. O pedido é confirmado e elaborado mediante pagamento de 100% do valor via PIX.',
  },
  {
    q: 'Como devo transportar e armazenar o bolo?',
    a: 'Transporte no chão do carro, preferencialmente com ar-condicionado ligado. O bolo deve ir direto para a geladeira ao chegar. Sugerimos consumi-lo em temperatura ambiente.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-base relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[400px] h-[400px] bg-rose-pale/10 rounded-full blur-[120px] pointer-events-none blob-pulse" />

      <div className="max-w-3xl mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[0.65rem] tracking-[0.4em] uppercase text-rose-dark font-sans font-medium mb-4">
            Questions Fréquentes
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-primary mb-6">
            Dúvidas Frequentes
          </h2>
          <div className="ornament">
            <svg className="w-3 h-3 text-rose-dark/50" viewBox="0 0 12 12" fill="currentColor">
              <path d="M6 0L7.5 4.5L12 6L7.5 7.5L6 12L4.5 7.5L0 6L4.5 4.5Z" />
            </svg>
          </div>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 border ${
                open === i ? 'border-rose/30 shadow-md shadow-rose/5' : 'border-rose/10 hover:border-rose/20'
              }`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-7 py-5 text-left group"
              >
                <span className="text-primary font-sans font-medium pr-4 text-[0.95rem]">
                  {faq.q}
                </span>
                <span className="shrink-0 w-7 h-7 rounded-full border border-rose/30 flex items-center justify-center transition-all duration-300 group-hover:bg-rose-pale">
                  <svg
                    className={`w-3 h-3 text-rose-dark transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-400"
                style={{ maxHeight: open === i ? '300px' : '0px' }}
              >
                <p className="px-7 pb-6 text-ink-2 text-[0.9rem] leading-[1.85] border-t border-rose/10 pt-4 font-sans">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <p className="text-center text-ink-3 text-sm mt-12 font-sans">
          Não encontrou sua resposta?{' '}
          <a
            href="https://wa.me/5512982910000?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-dark hover:text-rose-deep underline underline-offset-4 decoration-rose/40 transition-colors"
          >
            Fale conosco no WhatsApp
          </a>
        </p>
      </div>
    </section>
  )
}
