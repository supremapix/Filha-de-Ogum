import React from 'react';

const faqs = [
  {
    q: "A amarração amorosa realmente funciona?",
    a: "Práticas espirituais envolvem crenças pessoais. Não há garantia de reconciliação nem de mudança dos sentimentos ou das escolhas de outra pessoa."
  },
  {
    q: "Quanto tempo demora para ver os resultados?",
    a: "Não prometemos resultados nem prazos. Converse durante a consulta para esclarecer o que o atendimento envolve e quais são seus limites."
  },
  {
    q: "O trabalho é sigiloso?",
    a: "Entre em contato para esclarecer como suas informações serão tratadas. Compartilhe apenas os dados necessários ao atendimento."
  },
  {
    q: "Quais materiais são usados nos rituais?",
    a: "Utilizamos elementos da natureza como ervas sagradas, velas consagradas, mel, cristais e outros itens específicos que variam conforme a necessidade do seu caso."
  },
  {
    q: "Como posso agendar uma consulta?",
    a: "O agendamento é feito de forma simples e rápida através do nosso WhatsApp +55 (41) 98467-9910. Atendemos todos os dias das 10h00 às 23h30."
  },
  {
    q: "Existe algum perigo em fazer amarração?",
    a: "Peça explicações sobre qualquer prática antes de concordar. A orientação espiritual não substitui acompanhamento médico, psicológico ou jurídico, e deve respeitar a autonomia de todas as pessoas."
  }
];

export const FAQAccordion: React.FC = () => (
  <section id="perguntas" className="py-20 bg-stone-50">
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-stone-900">Perguntas frequentes</h2>
      <div className="space-y-4">
        {faqs.map(faq => (
          <details key={faq.q} className="faq-item bg-white rounded-xl border border-stone-300">
            <summary className="p-5 font-bold cursor-pointer">{faq.q}</summary>
            <p className="px-5 pb-5 text-stone-700">{faq.a}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);
