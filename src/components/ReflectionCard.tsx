import React from 'react';
import { useLocation } from 'react-router-dom';
import { ALL_LOCATIONS } from '../data/locations';

const pages: Record<string, { title: string; text: string }> = {
  '/': { title: 'Uma pausa antes de decidir', text: 'Nem sempre é preciso ter todas as respostas para iniciar uma conversa. Se algo pede sua atenção, qual dúvida você gostaria de organizar primeiro?' },
  '/sobre': { title: 'Conhecer também faz parte da escolha', text: 'Entender quem vai atender você pode trazer mais clareza à sua decisão. O que você considera importante conhecer antes de conversar?' },
  '/servicos': { title: 'Sua dúvida não precisa caber em um nome', text: 'Se os nomes dos serviços parecem difíceis, comece pelo que deseja entender. Que explicação ajudaria você a fazer uma escolha consciente?' },
  '/amarracao-amorosa': { title: 'Sentimentos merecem espaço e respeito', text: 'Desejar proximidade e respeitar a liberdade de outra pessoa podem fazer parte da mesma reflexão. O que depende de uma conversa entre vocês — e o que é uma escolha de cada um?' },
  '/contato': { title: 'Você pode começar com uma pergunta simples', text: 'Às vezes, escrever uma frase já ajuda a organizar a conversa. O que gostaria de perguntar sobre o atendimento, sem precisar contar tudo de uma vez?' },
  '/depoimentos': { title: 'Cada história tem seu próprio contexto', text: 'A experiência de outra pessoa não determina a sua. Ao conhecer um relato, quais informações você ainda precisaria esclarecer para decidir por conta própria?' },
  '/agendar': { title: 'Reserve tempo para entender a proposta', text: 'Antes de marcar um atendimento, vale conferir horário, valor e condições. O que precisa estar claro para você decidir com tranquilidade?' },
  '/sitemap': { title: 'Um caminho de cada vez', text: 'Quando há muitas opções, escolher um assunto pode facilitar a leitura. Você procura informações sobre serviços, atendimento online ou canais de contato?' },
  '/links': { title: 'Encontrar o canal certo simplifica a conversa', text: 'Você prefere falar, escrever ou primeiro conhecer as publicações? Escolha o canal que seja mais confortável e confira o endereço antes de compartilhar informações.' },
};
const openings = ['Uma pergunta de cada vez pode tornar a conversa mais clara.', 'Você pode pedir uma explicação mais simples quando precisar.', 'Decidir com calma também é uma escolha.', 'Anotar suas dúvidas pode ajudar a lembrar do que importa.', 'Nem toda pergunta precisa de uma resposta imediata.', 'Conhecer as condições faz parte de uma escolha consciente.'];
const questions = ['O que você gostaria de compreender melhor antes de decidir?', 'Qual informação está faltando para você organizar a próxima conversa?', 'Que pergunta merece sua atenção neste momento?', 'O que ajudaria você a conversar com mais clareza?', 'Qual dúvida você gostaria de colocar em palavras primeiro?', 'Que limite pessoal você considera importante respeitar?'];
export function reflectionForPath(pathname: string) {
  if (pages[pathname]) return pages[pathname];
  const place = pathname.startsWith('/local/') ? ALL_LOCATIONS.find(item => item.id === pathname.split('/')[2]) : undefined;
  if (place) {
    const hash = [...place.id].reduce((total, char) => (total * 31 + char.charCodeAt(0)) >>> 0, 0);
    return { title: `Uma reflexão para quem busca orientação em ${place.name}`, text: `${openings[hash % openings.length]} Se você procura atendimento para ${place.name}, pode começar explicando o que deseja saber. ${questions[Math.floor(hash / openings.length) % questions.length]}` };
  }
  return { title: 'Um novo caminho para encontrar a informação', text: 'Se este endereço não trouxe o que você procurava, volte ao início ou escolha um canal oficial. Qual assunto gostaria de localizar?' };
}
export const ReflectionCard: React.FC = () => {
  const { pathname } = useLocation();
  const reflection = reflectionForPath(pathname);
  return <aside className="reflection-card" aria-labelledby="reflection-title"><div><p className="reflection-eyebrow">Para refletir, sem pressa</p><h2 id="reflection-title">{reflection.title}</h2><p>{reflection.text}</p></div></aside>;
};
