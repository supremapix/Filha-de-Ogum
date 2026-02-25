import React from 'react';
import { ALL_LOCATIONS } from '../data/locations';
import { Link } from 'react-router-dom';
import { MapPin } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';

const Sitemap: React.FC = () => {
  const neighborhoods = ALL_LOCATIONS.filter(l => l.type === 'bairro');
  const citiesPR = ALL_LOCATIONS.filter(l => l.type === 'cidade' && l.state === 'PR');
  const citiesSC = ALL_LOCATIONS.filter(l => l.type === 'cidade' && l.state === 'SC');

  return (
    <div className="py-20 bg-white">
      <EnhancedSEO 
        title="Mapa do Site - Filha de Ogum"
        description="Confira todas as localidades atendidas pela Filha de Ogum no Paraná e Santa Catarina. Especialista em Amarração Amorosa."
        canonical="https://www.amarracaoamorosacuritiba.shop/sitemap"
      />
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 border-b pb-6">Mapa do Site</h1>
        
        <div className="space-y-20">
          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-red-700">
              <MapPin /> Bairros de Curitiba
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {neighborhoods.map(loc => (
                <Link 
                  key={loc.id} 
                  to={`/local/${loc.id}`}
                  className="text-stone-600 hover:text-red-700 text-sm py-1 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                  Amarração Amorosa em {loc.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-red-700">
              <MapPin /> Cidades do Paraná
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {citiesPR.map(loc => (
                <Link 
                  key={loc.id} 
                  to={`/local/${loc.id}`}
                  className="text-stone-600 hover:text-red-700 text-sm py-1 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                  Amarração Amorosa em {loc.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-2 text-red-700">
              <MapPin /> Cidades de Santa Catarina
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
              {citiesSC.map(loc => (
                <Link 
                  key={loc.id} 
                  to={`/local/${loc.id}`}
                  className="text-stone-600 hover:text-red-700 text-sm py-1 transition-colors flex items-center gap-2"
                >
                  <span className="w-1 h-1 bg-stone-300 rounded-full"></span>
                  Amarração Amorosa em {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-12 border-t border-stone-100">
          <h2 className="text-2xl font-bold mb-6">Páginas Principais</h2>
          <ul className="space-y-4">
            <li><Link to="/" className="text-red-700 font-bold hover:underline">Página Inicial</Link></li>
            <li><a href="https://wa.me/5541997317607" className="text-stone-600 hover:text-red-700 transition-colors">Atendimento WhatsApp: +55 41 99731-7607</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
