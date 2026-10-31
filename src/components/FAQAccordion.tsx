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
    q: "Como saber o valor do atendimento?",
    a: "Pergunte diretamente pelo canal oficial. Confirme o valor total, o que está incluído e qualquer cobrança adicional antes da contratação."
  },
  {
    q: "Como posso agendar uma consulta?",
    a: "O agendamento é feito de forma simples e rápida através do nosso WhatsApp +55 (41) 98467-9910. Confirme a disponibilidade antes de ir. O atendimento é com hora marcada."
  },
  {
    q: "Existe algum perigo em fazer amarração?",
    a: "Peça explicações sobre qualquer prática antes de concordar. A orientação espiritual não substitui acompanhamento médico, psicológico ou jurídico, e deve respeitar a autonomia de todas as pessoas."
  },
  { q: "Preciso saber qual trabalho espiritual escolher?", a: "Não é necessário chegar com um nome escolhido. Apresente sua dúvida e peça explicações sobre os serviços antes de decidir." },
  { q: "Há uma unidade em cada cidade citada?", a: "As páginas de cidades informam a cobertura do atendimento online. Para atendimento presencial, confirme o endereço de Curitiba pelos canais oficiais." },
  { q: "Posso pedir ajuda para usar o celular?", a: "Se desejar, uma pessoa de sua confiança pode ajudar você a abrir o telefone ou o WhatsApp. Preserve sua privacidade ao compartilhar informações pessoais." }

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
