import React from 'react';
import { renderToString } from 'react-dom/server';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { MotionConfig } from 'motion/react';
import { Layout } from '../src/components/Layout';
import Home from '../src/pages/Home';
import Links from '../src/pages/Links';
import Sitemap from '../src/pages/Sitemap';

export function renderPage(path: string) {
  const context: any = {};
  const body = renderToString(<HelmetProvider context={context}><MotionConfig reducedMotion="user"><MemoryRouter initialEntries={[path]}><Layout><Routes><Route path="/" element={<Home />} /><Route path="/links" element={<Links />} /><Route path="/sitemap" element={<Sitemap />} /></Routes></Layout></MemoryRouter></MotionConfig></HelmetProvider>);
  const helmet = context.helmet;
  return { body, head: [helmet.title, helmet.meta, helmet.link, helmet.script, helmet.style].map(part => part.toString()).join('\n') };
}
