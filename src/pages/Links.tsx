import React from 'react';
import { ExternalLink, MessageCircle, Phone } from 'lucide-react';
import { EnhancedSEO } from '../components/EnhancedSEO';
import { motion, useReducedMotion } from 'motion/react';
import { OFFICIAL_CHANNELS } from '../data/channels';

const Links: React.FC = () => {
  const reduceMotion = useReducedMotion();
  return (
  <div className="links-page">
    <EnhancedSEO title="Links e canais oficiais de Pai Laércio" description="Encontre os canais oficiais de Pai Laércio e do Centro Sagrado Coração de Jesus: contato, vídeos, redes sociais e site oficial em um só lugar." canonical="https://www.amarracaoamorosacuritiba.shop/links" />
    <section className="links-intro">
      <p className="hero-eyebrow">Centro Sagrado Coração de Jesus</p>
      <h1>Links e contatos de Pai Laércio</h1>
      <p>Escolha o que você precisa: conversar sobre um atendimento, conhecer o site oficial ou acompanhar os conteúdos publicados por Pai Laércio.</p>
      <p>Para agendar, confirmar valores e tirar dúvidas sobre serviços, prefira os canais de contato. As redes sociais reúnem publicações e vídeos e não substituem uma conversa sobre seu atendimento.</p>
      <div className="hero-actions"><a className="primary-action" href="https://wa.me/5541984679910"><MessageCircle aria-hidden="true" /> Conversar no WhatsApp</a><a className="secondary-action" href="tel:+554132228276"><Phone aria-hidden="true" /> Ligar: (41) 3222-8276</a></div>
    </section>
    <section className="links-directory" aria-labelledby="channels-title">
      <h2 id="channels-title">Encontre o canal certo</h2>
      <p>Os links abaixo levam a páginas externas. Você pode usar o botão Voltar do navegador para retornar.</p>
      {['Contato e agendamento', 'Redes sociais e vídeos', 'Localização e site oficial'].map(category => <section key={category} className="channel-group"><h2>{category}</h2><ul>{OFFICIAL_CHANNELS.filter(channel => channel.category === category).map(channel => <motion.li key={channel.url} whileHover={reduceMotion === false ? { y: -2 } : undefined} transition={{ duration: .15 }}><h3>{channel.name}</h3><p>{channel.description}</p><a href={channel.url}>{channel.action}<ExternalLink aria-hidden="true" size={20} /></a></motion.li>)}</ul></section>)}
    </section>
    <aside className="links-intro"><h2>Use os canais com atenção</h2><p>Confira o nome do perfil e o endereço antes de enviar informações. Não compartilhe senhas ou dados bancários por mensagens. Se precisar de ajuda para usar o celular, uma pessoa de sua confiança pode auxiliar você a abrir os links, preservando sua privacidade.</p></aside>
  </div>
);
};
export default Links;
