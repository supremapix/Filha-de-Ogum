import React, { useEffect, useRef, useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export const OFFICIAL_VIDEO = {
  id: 'sDozptlEJBk',
  title: 'Vídeo de apresentação de Pai Laércio',
};
export const OfficialVideo: React.FC = () => {
  const [opened, setOpened] = useState(false);
  const frameRef = useRef<HTMLIFrameElement>(null);
  useEffect(() => { if (opened) frameRef.current?.focus(); }, [opened]);
  const { pathname } = useLocation();
  useEffect(() => setOpened(false), [pathname]);
  return <section className="official-video" aria-labelledby="official-video-title"><div className="official-video-inner">
    <div className="official-video-copy"><p className="hero-eyebrow">Canal oficial de Pai Laércio</p><h2 id="official-video-title">Conheça Pai Laércio em vídeo</h2><p>Uma apresentação do Centro Sagrado Coração de Jesus, publicada no site oficial de Pai Laércio.</p><p>O vídeo só é carregado quando você escolhe assistir. Ao abrir, use os controles do YouTube para iniciar ou pausar.</p><a href={`https://www.youtube.com/watch?v=${OFFICIAL_VIDEO.id}`}>Assistir diretamente no YouTube <ExternalLink aria-hidden="true" size={19} /></a></div>
    <div className="official-video-frame">{opened ? <iframe ref={frameRef} tabIndex={0} src={`https://www.youtube-nocookie.com/embed/${OFFICIAL_VIDEO.id}?rel=0`} title={OFFICIAL_VIDEO.title} loading="lazy" allow="encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" /> : <button type="button" onClick={() => setOpened(true)} aria-label={`Assistir: ${OFFICIAL_VIDEO.title}`}><img src={`https://i.ytimg.com/vi/${OFFICIAL_VIDEO.id}/hqdefault.jpg`} width="480" height="360" loading="lazy" alt="" /><span className="video-play-label"><Play aria-hidden="true" size={32} fill="currentColor" /> Assistir ao vídeo</span></button>}</div>
  </div></section>;
};
