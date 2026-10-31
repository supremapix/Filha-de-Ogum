import React, { useEffect, useRef, useState } from 'react';
import { MessageCircle, Share2, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const ShareActions: React.FC = () => {
  const location = useLocation();
  const [feedback, setFeedback] = useState('');
  const [manualUrl, setManualUrl] = useState('');
  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => { setFeedback(''); setManualUrl(''); }, [location.pathname]);
  useEffect(() => { if (manualUrl) { inputRef.current?.focus(); inputRef.current?.select(); } }, [manualUrl]);
  const close = () => { setManualUrl(''); buttonRef.current?.focus(); };
  const share = async () => {
    setFeedback('');
    setManualUrl('');
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.href;
    const url = canonical?.startsWith('https://www.amarracaoamorosacuritiba.shop/') ? canonical : `https://www.amarracaoamorosacuritiba.shop${location.pathname}`;
    if (navigator.share) {
      try { await navigator.share({ title: document.title, text: 'Conheça os canais e o atendimento de Pai Laércio.', url }); return; }
      catch (error) { if (error instanceof Error && error.name === 'AbortError') return; }
    }
    try {
      if (!navigator.clipboard?.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(url);
      setFeedback('Link copiado. Cole na conversa em que deseja compartilhar.');
    } catch { setManualUrl(url); }
  };
  return (
    <div className="sharing-area">
      {feedback && <div className="share-feedback" role="status"><p>{feedback}</p><button type="button" aria-label="Dispensar aviso de link copiado" onClick={() => setFeedback('')}><X aria-hidden="true" size={20} /></button></div>}
      {manualUrl && <section className="share-manual" aria-label="Copiar link para compartilhar" onKeyDown={event => { if (event.key === 'Escape') close(); }}>
        <label htmlFor="share-url">Copie este link para compartilhar:</label>
        <input ref={inputRef} id="share-url" readOnly value={manualUrl} onFocus={event => event.currentTarget.select()} />
        <button type="button" onClick={close}><X aria-hidden="true" size={20} /> Fechar</button>
      </section>}
      <nav className="contact-dock" aria-label="Compartilhar e falar com Pai Laércio">
        <button type="button" ref={buttonRef} onClick={share}><Share2 aria-hidden="true" size={22} /> Compartilhar</button>
        <a href={`https://wa.me/5541984679910?text=${encodeURIComponent('Olá, Pai Laércio. Gostaria de informações sobre o atendimento e o agendamento.')}`}><MessageCircle aria-hidden="true" size={22} /> WhatsApp</a>
      </nav>
    </div>
  );
};
