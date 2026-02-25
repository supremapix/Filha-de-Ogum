import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

const names = ["Maria Silva", "João Pereira", "Ana Santos", "Carlos Oliveira", "Beatriz Costa", "Ricardo Souza", "Fernanda Lima", "Paulo Rocha", "Juliana Alves", "Gabriel Matos"];
const reviews = [
  "Excelente atendimento! Meu relacionamento mudou da água para o vinho.",
  "Filha de Ogum é maravilhosa. Recomendo a todos que buscam ajuda real.",
  "Resultados rápidos e muito profissionalismo. Gratidão eterna.",
  "O melhor lugar de Curitiba para quem busca amarração amorosa séria.",
  "Fui muito bem acolhida e meu problema foi resolvido em poucos dias.",
  "Sigilo total e muita sabedoria nos rituais. Nota 10.",
  "Recuperei meu casamento graças ao trabalho da Filha de Ogum.",
  "Atendimento humanizado e muito assertivo. Recomendo!",
  "Não acreditava mais, mas o trabalho realmente funcionou. Feliz demais.",
  "A melhor especialista que já consultei. Muita luz no seu caminho."
];

const generateReviews = () => {
  const allReviews = [];
  for (let i = 0; i < 50; i++) {
    allReviews.push({
      id: i,
      name: names[i % names.length] + " " + (i + 1),
      text: reviews[i % reviews.length],
      rating: 5,
      date: "Há " + (i % 12 + 1) + " meses"
    });
  }
  return allReviews;
};

export const ReviewsScroll: React.FC = () => {
  const allReviews = generateReviews();

  return (
    <section className="py-20 bg-stone-900 overflow-hidden relative h-[600px]">
      <div className="absolute inset-0 z-0 opacity-10">
        <img src="https://claudia.abril.com.br/wp-content/uploads/2024/12/amarracoes-amorosas-porque-nao-fazer.jpg?quality=70&strip=info&w=1280&h=720&crop=1" alt="" className="w-full h-full object-cover" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 h-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">Avaliações do Google Maps</h2>
        
        <div className="w-full max-w-2xl h-full overflow-hidden relative mask-gradient">
          <div className="animate-scroll-vertical flex flex-col gap-6">
            {[...allReviews, ...allReviews].map((review, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-xl border border-stone-200">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-stone-200 rounded-full flex items-center justify-center font-bold text-stone-600">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-stone-900">{review.name}</h4>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                      <span className="text-xs text-stone-400 ml-2">{review.date}</span>
                    </div>
                  </div>
                  <div className="ml-auto">
                    <img src="https://agenciapnz.com/wp-content/uploads/Logo-Google-G.png" alt="Google" className="w-6 h-6 object-contain" />
                  </div>
                </div>
                <p className="text-stone-700 italic">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style>{`
        .mask-gradient {
          mask-image: linear-gradient(to bottom, transparent, black 10%, black 90%, transparent);
        }
      `}</style>
    </section>
  );
};
