import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';

const services = [
  { title: 'Búzios e cartas', text: 'Conheça as consultas espirituais e esclareça como o atendimento é conduzido.', path: 'M25 24h26v40H25z M51 30l15 5-10 35-5-2 M33 35h10 M33 43h10 M33 51h6' },
  { title: 'Limpeza espiritual', text: 'Pergunte sobre a proposta, as etapas e as condições antes de escolher um serviço.', path: 'M25 65c-6-25 3-40 38-44 2 29-12 46-34 39 M25 68l30-38 M35 54l-2-13 M43 45l12 1' },
  { title: 'Trabalhos de amor', text: 'Converse sobre suas dúvidas, respeitando a liberdade e as escolhas de cada pessoa.', path: 'M44 68L22 46C6 28 28 12 44 31 60 12 82 28 66 46Z' },
];
export const ServiceIllustrations: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const animate = reduceMotion === false && typeof IntersectionObserver !== 'undefined';
  const sectionRef = useRef<HTMLElement>(null);
  const [entered, setEntered] = useState(false);
  useEffect(() => {
    if (!animate || !sectionRef.current || entered) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) { setEntered(true); observer.disconnect(); }
    }, { threshold: .15 });
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animate, entered]);
  return <section ref={sectionRef} className="service-illustrations" aria-labelledby="illustrated-services-title">
    <div className="service-illustrations-inner"><p className="hero-eyebrow">Conheça os atendimentos</p><h2 id="illustrated-services-title">Informação simples para escolher com consciência</h2>
      <div className="illustrated-services-grid">{services.map(service => <article key={service.title}>
        <svg width="88" height="88" viewBox="0 0 88 88" aria-hidden="true" focusable="false">
          <circle cx="44" cy="44" r="41" fill="#fff4df" />
          {animate ? <motion.path d={service.path} fill="none" stroke="#7f1d1d" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" initial={false} animate={{ pathLength: entered ? 1 : 0 }} transition={{ duration: .85, ease: 'easeOut' }} /> : <path d={service.path} fill="none" stroke="#7f1d1d" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />}
        </svg><h3>{service.title}</h3><p>{service.text}</p><a href="/#como-funciona">Entender como funciona <span aria-hidden="true">→</span></a>
      </article>)}</div>
    </div>
  </section>;
};
