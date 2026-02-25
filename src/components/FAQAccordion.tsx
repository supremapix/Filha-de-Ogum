import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    q: "A amarração amorosa realmente funciona?",
    a: "Sim, quando realizada por uma especialista como a Filha de Ogum, que utiliza rituais ancestrais e materiais consagrados. Os resultados dependem da fé e do seguimento das orientações espirituais."
  },
  {
    q: "Quanto tempo demora para ver os resultados?",
    a: "Cada caso é único, mas muitos consulentes relatam mudanças significativas em até 24 horas ou poucos dias após o ritual ser concluído."
  },
  {
    q: "O trabalho é sigiloso?",
    a: "Absolutamente. O sigilo é um dos nossos pilares. Sua identidade e seu caso são mantidos em total discrição, sem qualquer exposição."
  },
  {
    q: "Quais materiais são usados nos rituais?",
    a: "Utilizamos elementos da natureza como ervas sagradas, velas consagradas, mel, cristais e outros itens específicos que variam conforme a necessidade do seu caso."
  },
  {
    q: "Como posso agendar uma consulta?",
    a: "O agendamento é feito de forma simples e rápida através do nosso WhatsApp +55 41 99731-7607. Atendemos 24 horas por dia."
  },
  {
    q: "Existe algum perigo em fazer amarração?",
    a: "Trabalhamos apenas com a alta magia para o bem e união. Nossos rituais são seguros e visam a felicidade e harmonia do casal, sem causar danos a ninguém."
  }
];

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-stone-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-stone-900">Perguntas Frequentes (FAQ)</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
              >
                <span className="text-lg font-bold text-stone-800">{faq.q}</span>
                {openIndex === index ? <ChevronUp className="text-red-700" /> : <ChevronDown className="text-stone-400" />}
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-stone-600 leading-relaxed"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
