import React from 'react';
import { ALL_LOCATIONS } from '../data/locations';
import { Link } from 'react-router-dom';
import { MapPin, Star, ShieldCheck, Zap, Heart, Search, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FAQAccordion } from '../components/FAQAccordion';
import { ReviewsScroll } from '../components/ReviewsScroll';
import { EnhancedSEO } from '../components/EnhancedSEO';

import { VideoCTA } from '../components/VideoCTA';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredLocations = ALL_LOCATIONS.filter(loc => 
    loc.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const searchPhrases = [
    "Amarração amorosa confiável com Filha de Ogum",
    "Amarração amorosa verdadeira funciona Curitiba",
    "Amarração amorosa para casal separado Filha de Ogum",
    "Amarração amorosa com magia forte Paraná",
    "Amarração amorosa imediata Filha de Ogum",
    "Amarração amorosa para relacionamento difícil Curitiba",
    "Amarração amorosa especialista experiente Filha de Ogum",
    "Amarração amorosa poderosa e segura Paraná",
    "Amarração amorosa com garantia de resultado Filha de Ogum",
    "Amarração amorosa para salvar casamento Curitiba",
    "Amarração amorosa rápida e eficaz Filha de Ogum",
    "Amarração amorosa sem sofrimento Paraná",
    "Amarração amorosa para reconciliação Filha de Ogum",
    "Amarração amorosa profissional sério Curitiba"
  ];

  return (
    <div className="pb-20">
      <EnhancedSEO 
        title="Amarração Amorosa em Curitiba, PR, SC, RS, GO e DF - Filha de Ogum"
        description="Especialista em Amarração Amorosa, Reconciliação de Casais e Alta Magia no Paraná, Santa Catarina, Rio Grande do Sul, Goiás e DF. Resultados garantidos e sigilo total."
        canonical="https://www.amarracaoamorosacuritiba.shop"
        state="PR"
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://claudia.abril.com.br/wp-content/uploads/2024/12/amarracoes-amorosas-porque-nao-fazer.jpg?quality=70&strip=info&w=1280&h=720&crop=1" 
            alt="Amarração Amorosa Curitiba, Paraná e Santa Catarina" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-900/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1 bg-red-700 text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full mb-6">
              Especialista em Reconciliação em Todo o Brasil
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Recupere seu Amor com <span className="text-red-500">Filha de Ogum</span>
            </h1>
            <p className="text-xl text-stone-300 mb-8 leading-relaxed">
              Trabalho espiritual focado em fortalecer vínculos afetivos e aproximar duas pessoas com orientação especializada. 
              Atendimento discreto e personalizado em PR, SC, RS, GO e DF.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://wa.me/5541997317607" className="px-10 py-5 bg-red-700 text-white text-xl font-black rounded-full hover:bg-red-800 transition-all flex items-center gap-3 shadow-2xl shadow-red-900/40 border-2 border-red-500">
                <Heart size={24} />
                QUERO MEU AMOR DE VOLTA
              </a>
              <a href="#locais" className="px-10 py-5 bg-white text-stone-900 text-xl font-black rounded-full hover:bg-stone-100 transition-all border-2 border-stone-200">
                VER LOCAIS
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoCTA 
        highlighted={true}
        title="Veja como podemos te ajudar a ser feliz no amor"
        subtitle="Assista ao vídeo e entenda por que milhares de pessoas confiam no trabalho da Filha de Ogum para recuperar seus relacionamentos."
      />

      {/* Prominent SEO Title Section */}
      <section className="py-12 bg-stone-50 border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-stone-900 uppercase tracking-tighter"
          >
            Especialista em Amarração Amorosa e Reconciliação de Casais em <span className="text-red-600">Todo o Brasil</span>
          </motion.h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mt-4"></div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Star className="text-amber-500" />, title: "Experiência", desc: "Mais de 20 anos unindo casais e restaurando famílias no PR e SC." },
              { icon: <ShieldCheck className="text-blue-500" />, title: "Sigilo Total", desc: "Seu caso é tratado com absoluta discrição e respeito à sua privacidade." },
              { icon: <Zap className="text-red-500" />, title: "Rapidez", desc: "Métodos espirituais eficientes com resultados que você pode sentir." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-stone-50 border border-stone-100 hover:shadow-lg transition-all">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-stone-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Descriptions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-stone-900 text-white rounded-3xl border border-stone-800">
            <p className="text-lg leading-relaxed italic">
              "Trabalho espiritual focado em fortalecer vínculos afetivos e aproximar duas pessoas com orientação especializada. Atendimento discreto e personalizado para quem busca reconciliação amorosa com Filha de Ogum no Paraná e Santa Catarina."
            </p>
          </div>
          <div className="p-8 bg-red-900 text-white rounded-3xl border border-red-800">
            <p className="text-lg leading-relaxed italic">
              "Método espiritual voltado para harmonização de relacionamentos e restauração de laços sentimentais. Ideal para quem deseja recuperar o amor com acompanhamento profissional e sigilo com Filha de Ogum em todo o Sul."
            </p>
          </div>
        </div>
      </section>

      {/* Search Phrases Vertical Scroll */}
      <section className="py-20 bg-stone-900 overflow-hidden h-[400px] relative">
        <div className="max-w-7xl mx-auto px-4 h-full flex flex-col items-center">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">O que as pessoas buscam</h2>
          <div className="w-full max-w-2xl h-full overflow-hidden relative">
            <div className="animate-scroll-vertical flex flex-col gap-4">
              {[...searchPhrases, ...searchPhrases].map((phrase, i) => (
                <div key={i} className="p-6 bg-stone-800 rounded-2xl border border-stone-700 text-xl font-bold text-stone-200 text-center shadow-lg">
                  {phrase}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-stone-900 to-transparent z-10"></div>
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-stone-900 to-transparent z-10"></div>
      </section>

      {/* Locations Marquee */}
      <section id="locais" className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-12">
          <h2 className="text-4xl font-bold text-center">Locais de Atendimento</h2>
          <p className="text-stone-500 text-center mt-2">Atendimento especializado no Paraná e Santa Catarina.</p>
        </div>
        
        <div className="relative flex overflow-x-hidden border-y border-stone-100 py-10 bg-stone-50">
          <div className="animate-marquee flex gap-8">
            {[...ALL_LOCATIONS.slice(0, 100), ...ALL_LOCATIONS.slice(0, 100)].map((loc, i) => (
              <Link 
                key={i} 
                to={`/local/${loc.id}`}
                className="flex-shrink-0 px-8 py-4 bg-white border border-stone-200 rounded-2xl shadow-sm hover:border-red-500 hover:shadow-md transition-all flex items-center gap-3 group"
              >
                <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <MapPin size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-lg whitespace-nowrap">{loc.name}</span>
                  <span className="text-xs text-stone-400 uppercase font-bold">{loc.state}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Paraná State Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Cobertura Estadual</span>
            <h2 className="text-5xl font-black mt-2 mb-4">Paraná</h2>
            <p className="text-stone-600 text-xl max-w-3xl mx-auto">
              Atendimento especializado em todo o estado do Paraná. Unindo corações de Curitiba ao interior com a força da Alta Magia.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-stone-100">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-stone-100">
              <div className="w-16 h-16 bg-red-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-black">Cidades no Paraná</h3>
                <p className="text-stone-500">Encontre sua cidade e recupere seu amor agora.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              {ALL_LOCATIONS.filter(l => l.type === 'cidade' && l.state === 'PR').map((loc, i) => (
                <Link 
                  key={i} 
                  to={`/local/${loc.id}`}
                  className="p-3 text-sm font-bold text-stone-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Santa Catarina State Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Expansão Sul</span>
            <h2 className="text-5xl font-black mt-2 mb-4">Santa Catarina</h2>
            <p className="text-stone-600 text-xl max-w-3xl mx-auto">
              Agora atendendo todas as cidades de Santa Catarina. A força de Filha de Ogum unindo casais de Florianópolis a Joinville.
            </p>
          </div>

          <div className="bg-stone-50 p-10 rounded-[3rem] shadow-xl border border-stone-100">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-stone-100">
              <div className="w-16 h-16 bg-red-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-black">Cidades em Santa Catarina</h3>
                <p className="text-stone-500">Sua felicidade amorosa em SC começa aqui.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              {ALL_LOCATIONS.filter(l => l.type === 'cidade' && l.state === 'SC').map((loc, i) => (
                <Link 
                  key={i} 
                  to={`/local/${loc.id}`}
                  className="p-3 text-sm font-bold text-stone-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rio Grande do Sul State Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Cobertura Sul</span>
            <h2 className="text-5xl font-black mt-2 mb-4">Rio Grande do Sul</h2>
            <p className="text-stone-600 text-xl max-w-3xl mx-auto">
              Atendimento especializado em todo o Rio Grande do Sul. Unindo corações de Porto Alegre ao interior gaúcho.
            </p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-stone-100">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-stone-100">
              <div className="w-16 h-16 bg-red-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-black">Cidades no RS</h3>
                <p className="text-stone-500">Encontre sua cidade gaúcha e recupere seu amor.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              {ALL_LOCATIONS.filter(l => l.type === 'cidade' && l.state === 'RS').map((loc, i) => (
                <Link 
                  key={i} 
                  to={`/local/${loc.id}`}
                  className="p-3 text-sm font-bold text-stone-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
                >
                  {loc.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goiás & DF Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Centro-Oeste</span>
            <h2 className="text-5xl font-black mt-2 mb-4">Goiás e Distrito Federal</h2>
            <p className="text-stone-600 text-xl max-w-3xl mx-auto">
              Chegamos ao coração do Brasil. Atendimento especializado em Goiânia, Brasília e todo o estado de Goiás.
            </p>
          </div>

          <div className="bg-stone-50 p-10 rounded-[3rem] shadow-xl border border-stone-100">
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-stone-100">
              <div className="w-16 h-16 bg-red-700 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <MapPin size={32} />
              </div>
              <div>
                <h3 className="text-3xl font-black">Cidades em GO e DF</h3>
                <p className="text-stone-500">Sua união amorosa no Centro-Oeste começa aqui.</p>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              {ALL_LOCATIONS.filter(l => l.type === 'cidade' && (l.state === 'GO' || l.state === 'DF')).map((loc, i) => (
                <Link 
                  key={i} 
                  to={`/local/${loc.id}`}
                  className="p-3 text-sm font-bold text-stone-600 hover:text-red-700 hover:bg-red-50 rounded-xl transition-all border border-transparent hover:border-red-100"
                >
                  {loc.name} {loc.state === 'DF' ? '(DF)' : ''}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ReviewsScroll />
      <FAQAccordion />

      {/* WhatsApp Form Section */}
      <section id="contato" className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4">Fale com Filha de Ogum Agora</h2>
            <p className="text-stone-400 text-xl">Preencha os dados abaixo e receba uma orientação inicial via WhatsApp.</p>
            <div className="mt-8 p-6 bg-red-900/20 border-2 border-red-700 rounded-3xl inline-block">
              <span className="text-stone-400 block mb-2 font-bold uppercase tracking-widest">Telefone Direto</span>
              <a href="tel:+5541997317607" className="text-4xl md:text-5xl font-black text-white hover:text-red-500 transition-colors">
                +55 41 99731-7607
              </a>
            </div>
          </div>
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const message = formData.get('message');
              const text = `Olá Filha de Ogum, meu nome é ${name}. Gostaria de uma orientação: ${message}`;
              window.open(`https://wa.me/5541997317607?text=${encodeURIComponent(text)}`, '_blank');
            }}
            className="space-y-6 bg-stone-800 p-10 rounded-[2.5rem] border border-stone-700 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-lg font-bold text-stone-300">Seu Nome</label>
                <input 
                  name="name"
                  type="text" 
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-stone-900 border-2 border-stone-700 focus:outline-none focus:border-red-500 transition-all text-lg"
                  placeholder="Como podemos te chamar?"
                />
              </div>
              <div className="space-y-3">
                <label className="text-lg font-bold text-stone-300">Assunto</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-stone-900 border-2 border-stone-700 focus:outline-none focus:border-red-500 transition-all text-lg">
                  <option>Amarração Amorosa</option>
                  <option>Limpeza Espiritual</option>
                  <option>Consulta de Búzios</option>
                  <option>Outros Trabalhos</option>
                </select>
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-lg font-bold text-stone-300">Sua Mensagem</label>
              <textarea 
                name="message"
                required
                rows={4}
                className="w-full px-6 py-4 rounded-2xl bg-stone-900 border-2 border-stone-700 focus:outline-none focus:border-red-500 transition-all text-lg"
                placeholder="Conte-nos brevemente o seu caso..."
              ></textarea>
            </div>
            <button className="w-full py-6 bg-green-600 hover:bg-green-700 text-white font-black text-2xl rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-green-900/40 border-b-8 border-green-800 active:border-b-0 active:translate-y-2">
              <MessageCircle size={32} />
              ENVIAR NO WHATSAPP
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
