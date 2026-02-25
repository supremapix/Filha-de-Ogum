import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ALL_LOCATIONS } from '../data/locations';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { MapPin, Heart, Star, Shield, Zap, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { FAQAccordion } from '../components/FAQAccordion';
import { ReviewsScroll } from '../components/ReviewsScroll';

const LocationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = ALL_LOCATIONS.find(loc => loc.id === id);

  if (!location) {
    return <Navigate to="/" />;
  }

  const searchPhrases = [
    "Amarração amorosa confiável",
    "Amarração amorosa verdadeira funciona",
    "Amarração amorosa para casal separado",
    "Amarração amorosa com magia forte",
    "Amarração amorosa imediata",
    "Amarração amorosa para relacionamento difícil",
    "Amarração amorosa especialista experiente",
    "Amarração amorosa poderosa e segura",
    "Amarração amorosa com garantia de resultado",
    "Amarração amorosa para salvar casamento",
    "Amarração amorosa rápida e eficaz",
    "Amarração amorosa sem sofrimento",
    "Amarração amorosa para reconciliação",
    "Amarração amorosa profissional sério"
  ];

  // Generate 22 text blocks for SEO
  const generateSEOTexts = () => {
    const texts = [];
    for (let i = 1; i <= 22; i++) {
      const phrase = searchPhrases[i % searchPhrases.length];
      texts.push({
        title: `${phrase} em ${location.name}`,
        content: `Se você está em busca de ${phrase.toLowerCase()} na região de ${location.name}, a Filha de Ogum oferece o suporte espiritual necessário para transformar sua vida afetiva de forma definitiva e segura. Atendemos em ${location.type === 'bairro' ? 'todo o bairro' : 'toda a cidade'} de ${location.name} com rituais poderosos e personalizados, focados em trazer resultados reais para quem sofre por amor. A amarração amorosa em ${location.name} é realizada com total sigilo e discrição absoluta, utilizando elementos da alta magia e sabedoria ancestral para garantir que os caminhos do seu coração sejam abertos e as energias negativas sejam afastadas. Muitas pessoas em ${location.name} sofrem diariamente com relacionamentos difíceis, crises no casamento ou separações dolorosas que parecem não ter fim, mas com a orientação correta de uma especialista experiente como a Filha de Ogum, é perfeitamente possível reconquistar a felicidade e a paz interior. Nosso método espiritual em ${location.name} é voltado para a harmonização profunda de relacionamentos e a restauração de laços sentimentais que foram rompidos por inveja, brigas ou falta de comunicação. Este trabalho é ideal para quem deseja recuperar o amor da sua vida com acompanhamento profissional e sigilo garantido em todas as etapas do processo. Não deixe que o tempo e a distância afastem quem você ama; os serviços mais solicitados em ${location.name} incluem a união de casais, limpeza espiritual de ambientes, afastamento de rivais e abertura de caminhos financeiros e amorosos. Cada ritual realizado para moradores de ${location.name} é único e exclusivo, respeitando as vibrações energéticas locais e as necessidades específicas de cada consulente que nos procura. Confie na tradição e no poder de quem realmente entende de espiritualidade em Curitiba e em toda a região metropolitana do Paraná. Através de consultas precisas, conseguimos identificar a raiz do problema em ${location.name} e aplicar a solução espiritual mais adequada para o seu caso, seja ele simples ou complexo. A Filha de Ogum é reconhecida pela sua seriedade e pelos inúmeros depoimentos de sucesso de pessoas que voltaram a sorrir ao lado de quem amam em ${location.name}. Entre em contato agora mesmo e descubra como podemos te ajudar a trilhar um novo caminho de luz e amor.`
      });
    }
    return texts;
  };

  const seoTexts = generateSEOTexts();

  return (
    <div className="pb-20">
      <EnhancedSEO 
        title={`Amarração Amorosa em ${location.name} - Filha de Ogum`}
        description={`Precisa de Amarração Amorosa em ${location.name}? Filha de Ogum é especialista em união de casais e alta magia em ${location.name} e todo o Paraná. Sigilo absoluto e resultados.`}
        canonical={`https://www.amarracaoamorosacuritiba.shop/local/${location.id}`}
        locationName={location.name}
      />

      {/* Hero */}
      <section className="bg-stone-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img 
            src="https://claudia.abril.com.br/wp-content/uploads/2024/12/amarracoes-amorosas-porque-nao-fazer.jpg?quality=70&strip=info&w=1280&h=720&crop=1" 
            alt="" 
            className="w-full h-full object-cover" 
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link to="/" className="text-red-500 text-sm font-bold uppercase tracking-widest mb-4 inline-block hover:text-red-400 transition-colors">
            ← Voltar para Curitiba
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Amarração Amorosa em <span className="text-red-500">{location.name}</span></h1>
          <p className="text-xl text-stone-400 max-w-3xl leading-relaxed">
            Trabalho espiritual focado em fortalecer vínculos afetivos e aproximar duas pessoas com orientação especializada em {location.name}. 
            Atendimento discreto e personalizado para quem busca reconciliação amorosa com Filha de Ogum.
          </p>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8">
          <a href="https://wa.me/5541997317607" className="flex items-center gap-4 px-10 py-5 bg-green-600 text-white rounded-full font-black text-2xl hover:bg-green-700 transition-all shadow-2xl shadow-green-200 border-b-8 border-green-800 active:border-b-0 active:translate-y-2">
            <MessageCircle size={32} />
            WHATSAPP {location.name.toUpperCase()}
          </a>
          <a href="tel:+5541997317607" className="flex items-center gap-4 px-10 py-5 bg-stone-900 text-white rounded-full font-black text-2xl hover:bg-stone-800 transition-all shadow-2xl border-b-8 border-stone-950 active:border-b-0 active:translate-y-2">
            <Phone size={32} />
            LIGAR AGORA
          </a>
        </div>
      </section>

      {/* SEO Content Blocks */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {seoTexts.map((text, index) => (
              <motion.article 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-50 rounded-full flex items-center justify-center text-red-600">
                    {index % 3 === 0 ? <Heart size={20} /> : index % 3 === 1 ? <Star size={20} /> : <Shield size={20} />}
                  </div>
                  <h2 className="text-xl font-bold text-stone-800">{text.title}</h2>
                </div>
                <p className="text-stone-600 leading-relaxed text-justify">
                  {text.content}
                </p>
                <div className="mt-6 pt-6 border-t border-stone-50 flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Serviço Especializado</span>
                  <Link to="/" className="text-red-700 text-xs font-bold hover:underline">Saiba Mais</Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black mb-6">Não sofra mais em {location.name}</h2>
          <p className="text-stone-600 mb-10 text-xl font-bold">
            A felicidade amorosa está ao seu alcance. Entre em contato agora e agende sua consulta espiritual com Filha de Ogum.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a href="https://wa.me/5541997317607" className="inline-flex items-center gap-4 px-12 py-6 bg-red-700 text-white rounded-full font-black text-3xl hover:bg-red-800 transition-all shadow-2xl shadow-red-900/40 border-b-8 border-red-900 active:border-b-0 active:translate-y-2">
              <MessageCircle size={36} />
              FALAR COM FILHA DE OGUM
            </a>
            <a href="tel:+5541997317607" className="text-3xl font-black text-stone-900 hover:text-red-700 transition-colors">
              +55 41 99731-7607
            </a>
          </div>
        </div>
      </section>

      <ReviewsScroll />
      <FAQAccordion />
    </div>
  );
};

export default LocationPage;
