import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { EnhancedSEO } from '../components/EnhancedSEO';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-stone-50">
      <EnhancedSEO 
        title="Página Não Encontrada - 404"
        description="Desculpe, a página que você está procurando não existe. Volte para a página inicial da Filha de Ogum."
        canonical="https://www.amarracaoamorosacuritiba.shop/404"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full text-center"
      >
        <div className="mb-8">
          <h1 className="text-9xl font-black text-red-600/20">404</h1>
          <div className="relative -mt-16">
            <h2 className="text-3xl font-bold text-stone-900 mb-4">Página não encontrada</h2>
            <p className="text-stone-600 mb-8">
              O caminho que você tentou acessar não existe ou foi movido. 
              Que tal voltar para o início e encontrar o que precisa?
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20"
          >
            <Home size={20} />
            Página Inicial
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="flex items-center justify-center gap-2 bg-white text-stone-900 border border-stone-200 px-6 py-3 rounded-full font-bold hover:bg-stone-50 transition-colors"
          >
            <ArrowLeft size={20} />
            Voltar
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
