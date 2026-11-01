import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { ALL_LOCATIONS } from '../data/locations';

export const ContactCard: React.FC = () => {
  const { pathname } = useLocation();
  const place = pathname.startsWith('/local/') ? ALL_LOCATIONS.find(item => item.id === pathname.split('/')[2]) : undefined;
  return (
    <section className="contact-card-section" aria-labelledby="contact-card-title">
      <div className="contact-card">
        <img src="/images/pai-laercio-contato-250x250.png" width="250" height="250" loading="lazy" alt="Pai Laércio — Centro Sagrado Coração de Jesus. WhatsApp (41) 98467-9910." />
        <div>
          <p className="hero-eyebrow">Centro Sagrado Coração de Jesus</p>
          <h2 id="contact-card-title">Fale com Pai Laércio{place ? ` sobre atendimento para ${place.name}` : ''}</h2>
          <p>Converse sobre consultas espirituais, jogo de búzios, cartas e limpeza espiritual. O atendimento presencial acontece no Jardim Social, em Curitiba, com hora marcada. Há também atendimento online.</p>
          <p><strong>Entenda antes de decidir.</strong> Pergunte como funciona o atendimento, quais são os valores e o que está incluído. Escolha o próximo passo somente depois de esclarecer suas dúvidas.</p>
          <p>Use os canais oficiais abaixo. Se preferir conversar em vez de escrever, toque em “Ligar”.</p>
          <div className="hero-actions">
            <a className="primary-action" href="https://wa.me/5541984679910"><MessageCircle aria-hidden="true" /> WhatsApp: (41) 98467-9910</a>
            <a className="secondary-action" href="tel:+554132228276"><Phone aria-hidden="true" /> Ligar: (41) 3222-8276</a>
          </div>
        </div>
      </div>
    </section>
  );
};
