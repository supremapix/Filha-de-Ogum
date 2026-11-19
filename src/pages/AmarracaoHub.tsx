import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { EnhancedSEO } from '../components/EnhancedSEO';

const url = 'https://www.amarracaoamorosacuritiba.shop/amarracao-amorosa';
const title = 'Amarração amorosa em Curitiba: o que saber e como decidir';
const description = 'Entenda o significado de amarração amorosa, esclareça dúvidas sobre término e reconciliação e saiba como conversar com Pai Laércio em Curitiba.';
const questions = [
  ['O que é amarração amorosa?', 'É uma expressão usada em contextos espirituais para práticas simbólicas ligadas à vida afetiva. As práticas variam entre tradições. Nenhuma delas garante que alguém volte, mude de ideia ou passe a sentir algo.'],
  ['Posso procurar orientação mesmo sem querer voltar?', 'Sim. Você pode procurar uma conversa espiritual para refletir sobre saudade, insegurança ou o fim da relação, sem decidir de imediato se quer retomar o vínculo.'],
  ['Quanto tempo demora para o ex voltar?', 'Não há prazo que se possa prometer. Reaproximação depende de escolhas, mudanças e vontade das duas pessoas. Uma orientação não permite prever nem controlar a decisão de outra pessoa.'],
  ['E se a pessoa me bloqueou ou pediu distância?', 'Respeite o limite. Não use outros perfis, números ou amigos para contornar o pedido. Se houver uma pendência prática, use apenas um canal apropriado, sem insistência.'],
  ['Como é o contato com Pai Laércio em Curitiba?', 'Os atendimentos são com hora marcada. Pelo canal oficial, confirme local, modalidade disponível, valores e condições antes de decidir ou se deslocar.']
] as const;
const topics = [
  { id:'termino', title:'Quando o término ainda dói', text:'É comum que a saudade faça parecer que a única saída é voltar. Antes de tomar uma decisão, escreva o que você sente falta e o que não quer reviver. Não é preciso decidir tudo hoje. Conte a alguém de confiança como você está e, se fizer sentido para você, leve suas dúvidas à conversa espiritual.' },
  { id:'reconciliacao', title:'Quando você pensa em reconciliação', text:'Observe se existe disposição dos dois lados, se os motivos da separação podem ser conversados e se houve mudanças concretas. Se houver abertura, proponha uma conversa tranquila e aceite que a resposta pode ser não. Quando houve violência, ameaças ou medo, a prioridade é sua segurança, não reatar.' },
  { id:'inseguranca', title:'Quando não sabe se deve insistir ou seguir', text:'Separe sinais concretos de interpretações. Uma visualização ou curtida não é um convite para recomeçar. A reciprocidade aparece em atitudes consistentes. Se a outra pessoa pediu distância, respeite o limite e volte sua atenção ao que está sob seu controle: sua rotina, seu apoio e seus próximos passos.' }
] as const;

export default function AmarracaoHub() {
  const pageData = {'@context':'https://schema.org','@type':'WebPage','@id':url+'#webpage',url,name:title,description,inLanguage:'pt-BR',about:{'@id':'https://www.amarracaoamorosacuritiba.shop/#organization'}};
  return <div className="links-page">
    <EnhancedSEO title={title} description={description} canonical={url} />
    <Helmet><script type="application/ld+json">{JSON.stringify(pageData)}</script></Helmet>
    <section className="links-intro" aria-labelledby="amarracao-title">
      <p className="text-sm font-bold tracking-wide text-red-800">GUIA DE ORIENTAÇÃO ESPIRITUAL • CURITIBA, PR</p>
      <h1 id="amarracao-title">Amarração amorosa em Curitiba: o que saber antes de decidir</h1>
      <p><strong>Resposta breve:</strong> amarração amorosa é um termo usado em práticas espirituais ligadas ao afeto. Buscar orientação pode ser uma forma de refletir sobre o que você está vivendo. Não há promessa de reconciliação, prazo ou controle sobre sentimentos de outra pessoa.</p>
      <div className="hero-actions"><a className="primary-action" href="https://wa.me/5541984679910">Tirar dúvidas no WhatsApp</a><Link className="secondary-action" to="/links">Conferir canais oficiais</Link></div>
    </section>
    <nav aria-label="Neste guia" className="mx-auto mb-8 max-w-[950px] rounded-2xl border border-stone-200 bg-white p-4 sm:p-6">
      <h2 className="text-xl font-bold mb-2">Encontre a resposta que procura</h2>
      <ul className="flex flex-wrap gap-2">{topics.map(topic => <li key={topic.id}><a className="inline-flex min-h-11 items-center rounded-lg px-3 py-2 text-red-800 underline" href={'#'+topic.id}>{topic.title}</a></li>)}<li><a className="inline-flex min-h-11 items-center px-3 py-2 text-red-800 underline" href="#perguntas-guia">Perguntas frequentes</a></li></ul>
    </nav>
    <div className="mx-auto grid max-w-[950px] gap-4 md:grid-cols-3">{topics.map(topic => <section key={topic.id} id={topic.id} className="scroll-mt-28 rounded-2xl border border-stone-200 bg-white p-5 sm:p-6"><h2 className="text-xl font-bold mb-3">{topic.title}</h2><p className="leading-relaxed">{topic.text}</p></section>)}</div>
    <section className="links-intro my-8" aria-labelledby="consulta-laercio">
      <h2 id="consulta-laercio">O que perguntar antes de uma consulta em Curitiba</h2>
      <p>Você pode explicar a situação sem enviar documentos, fotos íntimas ou informações de outra pessoa. Use somente os canais oficiais do Espaço Pai Laércio. Confirme a disponibilidade, o local e o que fica combinado antes de agendar.</p>
      <ul className="my-4 list-disc space-y-2 pl-5"><li>O que acontece na primeira conversa?</li><li>Como funcionam o atendimento e seus valores?</li><li>Quais são os limites da orientação e o que ela não pode prometer?</li></ul>
      <p>Moradores de Curitiba e da região metropolitana podem usar os mesmos canais para confirmar as opções disponíveis. A orientação espiritual não substitui ajuda psicológica, médica ou especializada quando necessária.</p>
      <p><Link className="inline-flex min-h-11 items-center text-red-800 underline" to="/local/curitiba">Ver informações do atendimento em Curitiba</Link></p>
    </section>
    <section id="perguntas-guia" className="mx-auto mb-8 max-w-[950px] scroll-mt-28" aria-labelledby="faq-amarracao">
      <h2 id="faq-amarracao" className="text-2xl font-bold mb-4">Perguntas frequentes</h2>
      <div className="grid gap-3">{questions.map(([question, answer]) => <details key={question} className="rounded-xl border border-stone-200 bg-white px-4"><summary className="min-h-11 py-3 font-bold cursor-pointer">{question}</summary><p className="pb-4 leading-relaxed">{answer}</p></details>)}</div>
    </section>
  </div>;
}
