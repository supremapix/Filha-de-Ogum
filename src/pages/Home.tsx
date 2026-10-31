import React from 'react';
import { ALL_LOCATIONS } from '../data/locations';
import { Link } from 'react-router-dom';
import { MapPin, Star, ShieldCheck, Zap, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FAQAccordion } from '../components/FAQAccordion';
import { EnhancedSEO } from '../components/EnhancedSEO';

import { VideoCTA } from '../components/VideoCTA';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const normalizeSearch = (text: string) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim().toLowerCase();
  const filteredLocations = ALL_LOCATIONS.filter(loc =>
    normalizeSearch(loc.name).includes(normalizeSearch(searchTerm))
  );

  return (
    <div className="pb-20">
      <EnhancedSEO 
        title="Amarração Amorosa em Curitiba, PR, SC, RS, GO e DF - Espaço Pai Laercio"
        description="Especialista em Amarração Amorosa, Reconciliação de Casais e Alta Magia no Paraná, Santa Catarina, Rio Grande do Sul, Goiás e DF. Atendimento online e presencial em Curitiba."
        canonical="https://www.amarracaoamorosacuritiba.shop"
        state="PR"
      />
      
      <section className="home-hero" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">Espaço Pai Laercio · Curitiba</p>
            <h1 id="hero-title">Orientação espiritual com <span>atenção ao seu momento.</span></h1>
            <p className="hero-description">Conheça nossos serviços de amarração amorosa, união de casais e limpeza espiritual. Atendimento presencial em Curitiba e online para todo o Brasil.</p>
            <div className="hero-actions">
              <a href="https://wa.me/5541984679910" className="primary-action"><MessageCircle aria-hidden="true" /> Conversar no WhatsApp</a>
              <a href="#servicos" className="secondary-action">Conhecer os serviços <ArrowRight aria-hidden="true" size={20} /></a>
            </div>
          </div>
          <aside className="hero-help" aria-label="Como entrar em contato">
            <h2>Vamos conversar com calma?</h2>
            <ol><li>Escolha ligar ou enviar uma mensagem.</li><li>Conte o que você deseja saber.</li><li>Tire suas dúvidas sobre o atendimento.</li></ol>
            <a href="tel:+554132228276">Ligar: (41) 3222-8276</a>
            <p>Segunda a domingo, das 10h às 23h30.</p>
          </aside>
        </div>
      </section>

      <VideoCTA 
        highlighted={true}
        title="Conheça o atendimento espiritual"
        subtitle="Assista ao vídeo do Espaço Pai Laercio e tire suas dúvidas sobre os serviços."
      />

      {/* Prominent SEO Title Section */}
      <section id="servicos" className="py-12 bg-stone-50 border-b border-stone-200">
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
              { icon: <Star className="text-amber-500" />, title: "Experiência", desc: "Orientação espiritual e atendimento personalizado." },
              { icon: <ShieldCheck className="text-blue-500" />, title: "Acolhimento", desc: "Converse sobre suas dúvidas e conheça o atendimento." },
              { icon: <Zap className="text-red-500" />, title: "Informação", desc: "Entenda os serviços antes de decidir. Não há promessa de resultados." }
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
              "Trabalho espiritual focado em fortalecer vínculos afetivos e aproximar duas pessoas com orientação especializada. Atendimento discreto e personalizado para quem busca reconciliação amorosa com Pai Laercio no Paraná e em todo o Brasil."
            </p>
          </div>
          <div className="p-8 bg-red-900 text-white rounded-3xl border border-red-800">
            <p className="text-lg leading-relaxed italic">
              "Método espiritual voltado para harmonização de relacionamentos e restauração de laços sentimentais. Ideal para quem deseja recuperar o amor com orientação espiritual no Espaço Pai Laercio."
            </p>
          </div>
        </div>
      </section>

      <section id="locais" className="py-12 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Encontre seu local de atendimento</h2>
          <label htmlFor="location-search" className="block font-bold mb-2">Digite sua cidade ou bairro</label>
          <input id="location-search" type="search" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} className="w-full max-w-2xl bg-white border-2 border-stone-500 rounded-xl p-4" placeholder="Exemplo: Curitiba" />
          {searchTerm.trim() && <><p role="status" className="my-4">{filteredLocations.length} locais encontrados.</p><ul className="grid gap-2 md:grid-cols-3">{filteredLocations.map(loc => <li key={loc.id}><Link className="block p-3 bg-white border border-stone-300 rounded-lg underline" to={`/local/${loc.id}`}>{loc.name} — {loc.state}</Link></li>)}</ul></>}
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
                <p className="text-stone-500">Encontre sua cidade para saber mais sobre o atendimento online.</p>
              </div>
            </div>

            <details className="location-group">
              <summary>Ver cidades atendidas</summary>
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
            </details>
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
                <p className="text-stone-500">Veja as cidades atendidas online em Santa Catarina.</p>
              </div>
            </div>

            <details className="location-group">
              <summary>Ver cidades atendidas</summary>
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
            </details>
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
                <p className="text-stone-500">Veja as cidades atendidas online no Rio Grande do Sul.</p>
              </div>
            </div>

            <details className="location-group">
              <summary>Ver cidades atendidas</summary>
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
            </details>
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
                <p className="text-stone-500">Veja as cidades atendidas online no Centro-Oeste.</p>
              </div>
            </div>

            <details className="location-group">
              <summary>Ver cidades atendidas</summary>
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
            </details>
          </div>
        </div>
      </section>


      <FAQAccordion />

      {/* WhatsApp Form Section */}
      <section id="contato" className="py-20 bg-stone-900 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4">Fale com Pai Laercio Agora</h2>
            <p className="text-stone-400 text-xl">Atendimento de Segunda a Domingo, das 10h00 às 23h30.</p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-red-900/20 border-2 border-red-700 rounded-3xl">
                <span className="text-stone-400 block mb-2 font-bold uppercase tracking-widest">Telefone Fixo</span>
                <a href="tel:+554132228276" className="text-3xl font-black text-white hover:text-red-500 transition-colors">
                  +55 (41) 3222-8276
                </a>
              </div>
              <div className="p-6 bg-green-900/20 border-2 border-green-700 rounded-3xl">
                <span className="text-stone-400 block mb-2 font-bold uppercase tracking-widest">WhatsApp Principal</span>
                <a href="https://wa.me/5541984679910" className="text-3xl font-black text-white hover:text-green-500 transition-colors">
                  +55 (41) 98467-9910
                </a>
              </div>
            </div>
            <div className="mt-8 p-6 bg-stone-800 border-2 border-stone-700 rounded-3xl">
              <span className="text-stone-400 block mb-2 font-bold uppercase tracking-widest">Endereço Presencial</span>
              <p className="text-xl font-bold text-white">
                Rua Frei Orlando, 437 - Jardim Social, Curitiba - PR
              </p>
            </div>
          </div>
          
          <p className="mb-6">Ao continuar, você abrirá o WhatsApp para conferir e enviar sua mensagem.</p>
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const message = formData.get('message');
              const subject = formData.get('subject');
              const text = `Olá Pai Laercio, meu nome é ${name}. Gostaria de uma orientação sobre ${subject}: ${message}`;
              window.location.assign(`https://wa.me/5541984679910?text=${encodeURIComponent(text)}`);
            }}
            className="space-y-6 bg-stone-800 p-10 rounded-[2.5rem] border border-stone-700 shadow-2xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label htmlFor="contact-name" className="text-lg font-bold text-stone-300">Seu nome</label>
                <input 
                  id="contact-name" autoComplete="name" name="name"
                  type="text" 
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-stone-900 border-2 border-stone-700 focus:outline-none focus:border-red-500 transition-all text-lg"
                  placeholder="Como podemos te chamar?"
                />
              </div>
              <div className="space-y-3">
                <label htmlFor="contact-subject" className="text-lg font-bold text-stone-300">Assunto</label>
                <select id="contact-subject" name="subject" className="w-full px-6 py-4 rounded-2xl bg-stone-900 border-2 border-stone-700 focus:outline-none focus:border-red-500 transition-all text-lg">
                  <option>Amarração Amorosa</option>
                  <option>Limpeza Espiritual</option>
                  <option>Consulta Espiritual</option>
                  <option>Outros Trabalhos</option>
                </select>
              </div>
            </div>
            <div className="space-y-3">
              <label htmlFor="contact-message" className="text-lg font-bold text-stone-300">Sua mensagem</label>
              <textarea 
                id="contact-message" name="message"
                required
                rows={4}
                className="w-full px-6 py-4 rounded-2xl bg-stone-900 border-2 border-stone-700 focus:outline-none focus:border-red-500 transition-all text-lg"
                placeholder="Conte-nos brevemente o seu caso..."
              ></textarea>
            </div>
            <button className="w-full py-6 bg-green-600 hover:bg-green-700 text-white font-black text-2xl rounded-2xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-green-900/40 border-b-8 border-green-800 active:border-b-0 active:translate-y-2">
              <MessageCircle size={32} />
              Continuar no WhatsApp
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
