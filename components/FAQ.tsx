"use client";
// components/FAQ.tsx
import { useState } from "react";

const faqs = [
  {
    q: "Vocês são pet friendly?",
    a: "Somente na unidade de Jacareí possuímos espaço externo para receber os amiguinhos. Em caso de chuva, não conseguimos realocá-los.",
  },
  {
    q: "Aceitam Vale / Ticket refeição?",
    a: "Não aceitamos. Com exceção do Caju, que passa normalmente na modalidade 'crédito'.",
  },
  {
    q: "Quais as formas de pagamento aceitas?",
    a: "Débito, crédito à vista, PIX e dinheiro.",
  },
  {
    q: "Possuem delivery?",
    a: "Sim! Nosso delivery é especializado em entregas de flores e presentes. O pedido mínimo em produtos é R$ 150,00 + frete.",
  },
  {
    q: "Como é feito o atendimento online?",
    a: "Nosso atendimento online é específico para pedidos de eventos, encomendas, flores e presentes — somente via WhatsApp, com retorno em até 24h úteis.",
  },
  {
    q: "Posso tirar fotos de divulgação nas casas?",
    a: "Ficamos felizes por fazer parte da sua história! No entanto, fotos e/ou vídeos com propósito de divulgação de marcas, produtos ou ensaios fotográficos são expressamente proibidos em qualquer área das casas.",
  },
  {
    q: "Posso levar bolo ou balões para o parabéns?",
    a: "Por sermos uma casa especializada em eventos, não é permitido trazer bolos, balões ou realizar comemorações no salão sem a contratação prévia de um dos nossos formatos de evento. Assim conseguimos cuidar de cada detalhe com carinho.",
  },
  {
    q: "Posso entrar com alimentos de outros estabelecimentos?",
    a: "O consumo de alimentos adquiridos em outros estabelecimentos não é permitido em nossas dependências, incluindo produtos que comercializamos (flores, bolos, tortas, chocolates, sorvetes).",
  },
  {
    q: "Qual o prazo para encomendar um bolo?",
    a: "O prazo mínimo é de 4 dias de antecedência, dependendo do modelo escolhido e da data do evento. Consulte sempre a disponibilidade — as opções são flexíveis de acordo com a demanda.",
  },
  {
    q: "Como confirmo meu pedido de encomenda?",
    a: "Após enviar o modelo, sabor, tamanho, data e horário de retirada via WhatsApp, enviamos o orçamento completo. O pedido é confirmado e elaborado mediante pagamento de 100% do valor via PIX.",
  },
  {
    q: "Como devo transportar e armazenar o bolo?",
    a: "Transporte no chão do carro, preferencialmente com ar-condicionado ligado. O bolo deve ir direto para a geladeira ao chegar. Caso haja segundo transporte, é imprescindível que esteja gelado. Sugerimos consumi-lo em temperatura ambiente.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-[#fdfaf7]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="label-caps text-rose-400 mb-3"
            style={{ fontFamily: "var(--font-josefin)", letterSpacing: "0.15em", fontSize: "0.75rem" }}
          >
            Perguntas mais frequentes
          </p>
          <h2
            className="text-stone-800 font-light mb-4"
            style={{ fontFamily: "var(--font-cinzel)", fontSize: "clamp(1.6rem, 3vw, 2.25rem)" }}
          >
            Dúvidas Frequentes
          </h2>
          <div className="w-12 h-px bg-rose-300 mx-auto" />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white border border-rose-100 rounded-2xl overflow-hidden transition-shadow hover:shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span
                  className="text-stone-700 font-medium pr-4"
                  style={{ fontFamily: "var(--font-josefin)", fontSize: "0.95rem" }}
                >
                  {faq.q}
                </span>
                <span
                  className="text-rose-400 text-xl shrink-0 transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  +
                </span>
              </button>

              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "300px" : "0px" }}
              >
                <p className="px-6 pb-5 text-stone-500 text-sm leading-relaxed border-t border-rose-50 pt-4">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <p className="text-center text-stone-400 text-sm mt-10">
          Não encontrou sua resposta?{" "}
          <a
            href="https://wa.me/5512982910000?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-rose-500 hover:underline"
          >
            Fale conosco no WhatsApp
          </a>
        </p>
      </div>
    </section>
  );
}
