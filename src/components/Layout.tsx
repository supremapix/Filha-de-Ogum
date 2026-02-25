import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle, Mail, ArrowUp, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="relative z-50 bg-white/90 backdrop-blur-md border-b border-stone-200 overflow-hidden">
        {/* Header Background Image */}
        <div className="absolute inset-0 z-[-1] opacity-10">
          <img 
            src="https://claudia.abril.com.br/wp-content/uploads/2024/12/amarracoes-amorosas-porque-nao-fazer.jpg?quality=70&strip=info&w=1280&h=720&crop=1" 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 h-24 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-6 group">
            <div className="relative flex items-center justify-center w-16 h-16">
              <motion.div 
                className="premium-heart animate-heartbeat scale-75"
                whileHover={{ scale: 0.9 }}
              >
                <div className="premium-shine"></div>
              </motion.div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-2xl leading-tight text-stone-900 group-hover:text-red-700 transition-colors">Filha de Ogum</span>
              <span className="text-[10px] text-stone-500 uppercase tracking-[0.4em] font-bold">Alta Magia Amorosa</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-sm font-medium hover:text-red-700 transition-colors">Início</Link>
            <a href="#servicos" className="text-sm font-medium hover:text-red-700 transition-colors">Serviços</a>
            <a href="#contato" className="text-sm font-medium hover:text-red-700 transition-colors">Contato</a>
          </nav>

          <div className="flex items-center gap-4">
            <a href="tel:+5541997317607" className="hidden lg:flex flex-col items-end group">
              <span className="text-[10px] text-stone-500 uppercase font-bold tracking-widest">Ligue Agora (24h)</span>
              <span className="text-xl font-black text-stone-900 group-hover:text-red-700 transition-colors">+55 41 99731-7607</span>
            </a>
            <a href="tel:+5541997317607" className="p-3 bg-red-700 text-white rounded-full hover:bg-red-800 transition-all shadow-lg lg:hidden">
              <Phone size={24} />
            </a>
            <a href="https://wa.me/5541997317607" className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center gap-2 hover:bg-green-700 transition-all shadow-xl shadow-green-200 border-2 border-green-400 animate-pulse">
              <MessageCircle size={24} />
              <span className="text-lg font-black hidden sm:inline">WHATSAPP</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-8">
                <div className="relative flex items-center justify-center w-16 h-16">
                  <motion.div className="premium-heart animate-heartbeat scale-75">
                    <div className="premium-shine"></div>
                  </motion.div>
                </div>
                <h3 className="text-white font-bold text-3xl">Filha de Ogum</h3>
              </div>
              <p className="text-sm leading-relaxed text-stone-400">
                Especialista em rituais de amarração amorosa, união de casais e limpeza espiritual. 
                Atendimento discreto e personalizado com mais de 20 anos de experiência.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Contato Rápido</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <Phone size={20} className="text-red-500" />
                  <span className="text-lg font-bold text-white">+55 41 99731-7607</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-red-500" />
                  <span>contato@amarracaoamorosacuritiba.shop</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-sm">
                <li><Link to="/sitemap" className="hover:text-white transition-colors">Mapa do Site</Link></li>
                <li><Link to="/" className="hover:text-white transition-colors">Política de Privacidade</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p>© 2026 Amarração Amorosa Curitiba. Todos os direitos reservados.</p>
            <div className="flex items-center gap-2">
              <span>Desenvolvido</span>
              <Heart size={16} className="text-red-600 fill-red-600 animate-heartbeat" />
              <span>por</span>
              <a href="https://supremasite.com.br" target="_blank" rel="noopener noreferrer" className="text-white hover:underline font-bold">
                Suprema Sites Express
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        <a href="mailto:contato@amarracaoamorosacuritiba.shop" className="w-12 h-12 bg-stone-800 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <Mail size={20} />
        </a>
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-24 right-6 z-40 w-12 h-12 bg-white text-stone-900 rounded-full flex items-center justify-center shadow-xl border border-stone-200 hover:scale-110 transition-transform"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <a 
        href="https://wa.me/5541997317607" 
        className="fixed bottom-6 right-6 z-40 w-20 h-20 bg-green-500 text-white rounded-full flex flex-col items-center justify-center shadow-2xl hover:scale-110 transition-transform animate-bounce border-4 border-white"
      >
        <MessageCircle size={32} />
        <span className="text-[10px] font-black">WHATSAPP</span>
      </a>
    </div>
  );
};
