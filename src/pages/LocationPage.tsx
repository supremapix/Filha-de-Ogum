import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ALL_LOCATIONS } from '../data/locations';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { Heart, Star, Shield, MessageCircle, Phone } from 'lucide-react';
import { motion } from 'motion/react';
import { FAQAccordion } from '../components/FAQAccordion';


const LocationPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const location = ALL_LOCATIONS.find(loc => loc.id === id);

  if (!location) {
    return <Navigate to="/" />;
  }

  const seoTexts = [
    { title: `Orientação espiritual para quem está em ${location.name}`, content: `O Espaço Pai Laércio oferece atendimento online para pessoas em ${location.name}. O atendimento presencial é realizado em Curitiba, na Rua Frei Orlando, 437, Jardim Social. Entre em contato para saber como funciona a consulta e esclarecer suas dúvidas.` },
    { title: 'Quanto custa e o que está incluído?', content: 'Antes de agendar, peça o valor da consulta, a duração e as condições de remarcação. Pergunte se um trabalho espiritual é opcional, se tem cobrança separada e se há retorno incluído. Solicite essas condições por escrito e escolha sem comprometer despesas essenciais.' },
    { title: 'Quero reconciliação, mas recebi uma recusa', content: 'Uma possível reaproximação depende da vontade de ambas as pessoas. Se houve recusa ou bloqueio, não insista usando outros números, perfis ou terceiros. Na consulta, você pode conversar sobre suas próprias escolhas e crenças, sem tentar controlar sentimentos alheios.' },
    { title: 'Como organizar uma consulta online?', content: 'Confirme o canal oficial, o horário combinado e como será feita a conversa. Escolha um ambiente onde tenha privacidade e verifique sua conexão. Pergunte o que acontece se houver queda de internet e como funciona o reagendamento antes de efetuar qualquer pagamento.' },
    { title: 'O que compartilhar no primeiro contato?', content: 'Comece pelas dúvidas sobre o serviço e a modalidade de atendimento. Não envie fotos íntimas, senhas, documentos ou conversas de outras pessoas. Pergunte por que uma informação é necessária, quem terá acesso a ela e como solicitar que deixe de ser utilizada.' },
    { title: 'Preciso ir até Curitiba?', content: `Esta página orienta pessoas de ${location.name}; ela não anuncia uma filial nessa localidade. O endereço presencial informado é Rua Frei Orlando, 437, Jardim Social, Curitiba. Confirme disponibilidade, horário e acessibilidade antes de planejar o deslocamento. Para evitar uma viagem desnecessária, pergunte se sua dúvida pode ser tratada online.` },
    { title: 'Sem promessa de resultados', content: 'Práticas espirituais envolvem crenças pessoais. Não há garantia de reconciliação, de mudança de comportamento de outra pessoa ou de prazo para resultados. As escolhas e a autonomia de todas as pessoas devem ser respeitadas.' }
  ];

  return (
    <div className="pb-20">
      <EnhancedSEO 
        title={`Amarração Amorosa em ${location.name} - Espaço Pai Laércio`}
        description={`Orientação espiritual para pessoas em ${location.name}: consulta online, custos, privacidade e dúvidas sobre reconciliação. Sede presencial em Curitiba, sem filial local anunciada.`}
        canonical={`https://www.amarracaoamorosacuritiba.shop/local/${location.id}`}
        locationName={location.name}
        state={location.state}
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
            ← Voltar para Início
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Amarração Amorosa em <span className="text-red-500">{location.name}</span></h1>
          <p className="text-xl text-stone-400 max-w-3xl leading-relaxed">
            Informações para quem está em {location.name} e procura orientação espiritual sobre a vida afetiva.
            Conheça as condições da consulta online ou presencial em Curitiba, os cuidados com a privacidade e os limites de qualquer promessa de reconciliação.
          </p>
        </div>
      </section>



      {/* Quick Actions */}
      <section className="py-16 bg-white border-b border-stone-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8">
          <a href="https://wa.me/5541984679910" className="max-w-full text-center justify-center flex items-center gap-4 px-10 py-5 bg-green-600 text-white rounded-full font-black text-2xl hover:bg-green-700 transition-all shadow-2xl shadow-green-200 border-b-8 border-green-800 active:border-b-0 active:translate-y-2">
            <MessageCircle size={32} />
            CONSULTAR ATENDIMENTO
          </a>
          <a href="tel:+554132228276" className="max-w-full text-center justify-center flex items-center gap-4 px-10 py-5 bg-stone-900 text-white rounded-full font-black text-2xl hover:bg-stone-800 transition-all shadow-2xl border-b-8 border-stone-950 active:border-b-0 active:translate-y-2">
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
                initial={false}
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
                <p className="text-stone-600 leading-relaxed text-left">
                  {text.content}
                </p>
                <div className="mt-6 pt-6 border-t border-stone-50 flex items-center justify-between">
                  <span className="text-xs font-bold text-stone-600 uppercase tracking-widest">Informação para decidir</span>
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
          <h2 className="text-4xl font-black mb-6">Tire suas dúvidas sobre o atendimento</h2>
          <Link className="inline-block underline text-red-800 p-3 mb-4" to="/#como-funciona">Leia o guia: como funciona a consulta espiritual</Link>
          <p className="text-stone-600 mb-10 text-xl font-bold">
            Entre em contato com Pai Laércio para conhecer o atendimento e agendar sua consulta.
          </p>
          <div className="flex flex-col items-center gap-6">
            <a href="https://wa.me/5541984679910" className="max-w-full text-center justify-center inline-flex items-center gap-4 px-12 py-6 bg-red-700 text-white rounded-full font-black text-3xl hover:bg-red-800 transition-all shadow-2xl shadow-red-900/40 border-b-8 border-red-900 active:border-b-0 active:translate-y-2">
              <MessageCircle size={36} />
              FALAR COM PAI LAERCIO
            </a>
            <a href="tel:+554132228276" className="text-3xl font-black text-stone-900 hover:text-red-700 transition-colors">
              +55 (41) 3222-8276
            </a>
          </div>
        </div>
      </section>


      <FAQAccordion />
    </div>
  );
};

export default LocationPage;

