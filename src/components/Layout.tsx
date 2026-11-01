import React, { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle, Mail, ArrowUp, Heart, Menu, X, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ReflectionCard } from './ReflectionCard';
import { ClaritySupport } from './ClaritySupport';
import { ReflectionQuiz } from './ReflectionQuiz';
import { OfficialVideo } from './OfficialVideo';
import { ShareActions } from './ShareActions';
import { ContactCard } from './ContactCard';

const navigation = [ ['/', 'Início'], ['/#servicos', 'Serviços'], ['/#locais', 'Onde atendemos'], ['/#perguntas', 'Dúvidas'], ['/#contato', 'Contato'], ['/links', 'Canais oficiais'] ];
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  useEffect(() => {
    setMenuOpen(false);
    if (location.hash) {
      requestAnimationFrame(() => {
        const target = document.getElementById(location.hash.slice(1));
        if (target) { target.tabIndex = -1; target.focus({ preventScroll: true }); target.scrollIntoView(); }
      });
    } else window.scrollTo(0, 0);
  }, [location.pathname, location.hash, location.key]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) { setMenuOpen(false); menuButton.current?.focus(); }
    };
    document.addEventListener('keydown', close);
    return () => document.removeEventListener('keydown', close);
  }, [menuOpen]);
  return (
    <div className="site-shell">
      <a className="skip-link" href="#conteudo">Ir para o conteúdo</a>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="site-brand" aria-label="Espaço Pai Laércio — início">
            <img src="/images/centro-sagrado-logo.png" width="1400" height="684" alt="Centro Sagrado Coração de Jesus" />
            <span className="brand-caption">Pai Laércio · Curitiba</span>
          </Link>
          <button ref={menuButton} type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="principal" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />} {menuOpen ? 'Fechar' : 'Menu'}
          </button>
          <a className="header-phone" href="tel:+554132228276"><Phone aria-hidden="true" size={21} /><span>Prefere ligar?<strong>(41) 3222-8276</strong></span></a>
          <nav id="principal" aria-label="Navegação principal" className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            {navigation.map(([to, label]) => <Link key={to} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>)}
          </nav>
        </div>
      </header>
      {location.pathname !== '/' && <ReflectionCard />}
      <main id="conteudo" tabIndex={-1}>{children}<ClaritySupport /><ReflectionQuiz /><OfficialVideo /><ContactCard /></main>
      <footer className="site-footer" id="rodape">
        <div className="footer-grid">
          <section>
            <h2>Espaço Pai Laércio</h2>
            <p>Centro Sagrado Coração de Jesus — Pai Laércio.</p>
            <p>Orientação espiritual, amarração amorosa, união de casais e limpeza espiritual.</p>
            <p>Atendimento presencial em Curitiba e online.</p>
            <a className="footer-contact" href="https://www.espacopailaercio.com.br/">Site oficial do Espaço Pai Laércio <span aria-hidden="true">↗</span></a>
          </section>
          <section>
            <h2>Fale conosco</h2>
            <a className="footer-contact" href="tel:+554132228276"><Phone aria-hidden="true" /> Ligar: (41) 3222-8276</a>
            <h3>WhatsApp</h3>
            {['98467-9910'].map(number => <a className="footer-contact" key={number} href={`https://wa.me/5541${number.replace('-', '')}`}><MessageCircle aria-hidden="true" /> (41) {number}</a>)}
            <a className="footer-contact email-link" href="mailto:laercioadriano@yahoo.com.br"><Mail aria-hidden="true" /><span>laercioadriano@yahoo.com.br</span></a>
          </section>
          <section>
            <h2>Endereço e horário</h2>
            <p><MapPin aria-hidden="true" size={22} /> Rua Frei Orlando, 437<br />Jardim Social, Curitiba — PR</p>
            <p>Atendimento com hora marcada.<br />Confirme a disponibilidade pelo WhatsApp.</p>
            <nav aria-label="Navegação do rodapé">
              <Link to="/#servicos">Ver serviços</Link>
              <Link to="/#perguntas">Perguntas frequentes</Link>
              <Link to="/links">Links e canais oficiais</Link>
              <Link to="/sitemap">Mapa do site</Link>
              <a href="#conteudo"><ArrowUp aria-hidden="true" size={20} /> Voltar ao início da página</a>
            </nav>
          </section>
        </div>
        <div className="footer-bottom"><p>© 2026 Centro Sagrado Coração de Jesus · Pai Laércio.</p></div>
        <div className="suprema-credit"><div className="suprema-credit-pill"><span>Desenvolvido com <Heart aria-hidden="true" size={18} /> por</span><a href="https://supremasite.com.br" aria-label="Suprema Sites Express — desenvolvimento de sites"><strong>Suprema Sites Express</strong><img src="/images/suprema-midia-logo.png" width="649" height="185" alt="Suprema Mídia" loading="lazy" /></a></div></div>
      </footer>
      <ShareActions />
    </div>
  );
};
