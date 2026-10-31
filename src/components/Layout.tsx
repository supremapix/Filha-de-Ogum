import React, { useEffect, useRef, useState } from 'react';
import { Phone, MessageCircle, Mail, ArrowUp, Heart, Menu, X, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { ReflectionCard } from './ReflectionCard';
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
            <Heart aria-hidden="true" className="brand-heart" size={34} />
            <span><strong>Espaço Pai Laércio</strong><small>Orientação espiritual</small></span>
          </Link>
          <button ref={menuButton} type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="principal" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />} {menuOpen ? 'Fechar' : 'Menu'}
          </button>
          <nav id="principal" aria-label="Navegação principal" className={`main-nav ${menuOpen ? 'is-open' : ''}`}>
            {navigation.map(([to, label]) => <Link key={to} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>)}
          </nav>
        </div>
      </header>
      <ReflectionCard />
      <main id="conteudo" tabIndex={-1}>{children}<ContactCard /></main>
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
        <div className="footer-bottom"><p>© 2026 Amarração Amorosa Curitiba.</p><p>Desenvolvido por <a href="https://supremasite.com.br">Suprema Sites Express</a></p></div>
      </footer>
      <nav className="contact-dock" aria-label="Atendimento rápido">
        <a href="tel:+554132228276"><Phone aria-hidden="true" size={22} /> Ligar</a>
        <a href="https://wa.me/5541984679910"><MessageCircle aria-hidden="true" size={22} /> WhatsApp</a>
      </nav>
    </div>
  );
};
