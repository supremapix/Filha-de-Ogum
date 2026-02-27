import React from 'react';
import { motion } from 'motion/react';
import { Play, MessageCircle, Heart } from 'lucide-react';

interface VideoCTAProps {
  title?: string;
  subtitle?: string;
  highlighted?: boolean;
}

export const VideoCTA: React.FC<VideoCTAProps> = ({ 
  title = "Recupere o seu Amor Hoje Mesmo", 
  subtitle = "Trabalhos espirituais poderosos com resultados garantidos e sigilo absoluto.",
  highlighted = false
}) => {
  const whatsappNumber = "5541997317607";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de uma consulta sobre amarração amorosa.`;

  return (
    <section className={`py-16 px-4 ${highlighted ? 'bg-zinc-950 text-white' : 'bg-white text-zinc-900'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              {title}
            </h2>
            <p className="text-xl opacity-80 leading-relaxed">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-emerald-900/20 transition-all group"
              >
                <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
                Agendar Consulta Grátis
              </motion.a>
              
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-sm font-medium opacity-70 italic"
              >
                <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                Mais de 15.000 casais unidos
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[9/16] max-w-[350px] mx-auto lg:ml-auto rounded-3xl overflow-hidden shadow-2xl shadow-black/50 border-4 border-zinc-800"
          >
            <iframe
              src="https://www.youtube.com/embed/qz_ZBHSg8d0?autoplay=1&mute=1&loop=1&playlist=qz_ZBHSg8d0"
              title="Filha de Ogum - Amarração Amorosa"
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            <div className="absolute inset-0 pointer-events-none border-[12px] border-black/10 rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
