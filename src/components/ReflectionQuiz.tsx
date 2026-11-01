import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight, RotateCcw, MessageCircle } from 'lucide-react';

export const QUIZ_QUESTIONS = [
  { title: 'O que você gostaria de organizar neste momento?', options: ['Uma dúvida que quero compreender', 'Minhas prioridades para decidir', 'Uma conversa que quero preparar'] },
  { title: 'Que maneira de refletir você prefere experimentar?', options: ['Escrever algumas ideias', 'Conversar e fazer perguntas', 'Reservar um tempo para pensar'] },
  { title: 'Qual próximo passo parece mais útil para você?', options: ['Entender as opções de atendimento', 'Preparar minhas perguntas', 'Confirmar valores e condições'] },
];
export function quizReflection(answers: number[]) {
  const focus = [
    { label: 'compreender uma dúvida', question: 'Qual informação ajudaria você a entender melhor essa dúvida, sem precisar decidir agora?' },
    { label: 'organizar prioridades', question: 'O que depende de você neste momento — e o que pode esperar um pouco?' },
    { label: 'preparar uma conversa', question: 'O que você gostaria de dizer de forma clara, respeitando seus limites e os da outra pessoa?' },
  ][answers[0]];
  const practice = [
    'Como você escolheu escrever, experimente anotar sua pergunta principal e separar o que sabe do que ainda precisa esclarecer.',
    'Como você escolheu conversar, experimente formular uma pergunta de cada vez e pedir exemplos quando uma explicação não estiver clara.',
    'Como você escolheu reservar um tempo, experimente retomar a pergunta com calma antes de assumir qualquer compromisso.',
  ][answers[1]];
  const next = [
    'Para conhecer as opções, você pode perguntar quais serviços são apresentados e como cada atendimento funciona.',
    'Para preparar suas perguntas, escolha a dúvida mais importante e pergunte o que precisa saber antes de decidir.',
    'Para conferir as condições, pergunte o valor total, o que está incluído e como funcionam agendamento e remarcação.',
  ][answers[2]];
  return { focus: focus.label, question: focus.question, practice, next };
}

export const ReflectionQuiz: React.FC = () => {
  const { pathname } = useLocation();
  const [mode, setMode] = useState<'intro' | 'questions' | 'result'>('intro');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [moving, setMoving] = useState(false);
  const locked = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const startButton = useRef<HTMLButtonElement>(null);
  const focusRequested = useRef(false);
  const reset = () => { focusRequested.current = false; setAnswers([]); setStep(0); setMode('intro'); setMoving(false); locked.current = false; if (timer.current) clearTimeout(timer.current); };
  useEffect(() => { reset(); return () => { if (timer.current) clearTimeout(timer.current); }; }, [pathname]);
  useEffect(() => {
    if (!focusRequested.current) return;
    focusRequested.current = false;
    if (mode === 'intro') startButton.current?.focus(); else heading.current?.focus();
  }, [mode, step]);
  const transition = (change: () => void) => {
    if (locked.current) return;
    locked.current = true; focusRequested.current = true; setMoving(true); change();
    timer.current = setTimeout(() => { locked.current = false; setMoving(false); }, 300);
  };
  const next = () => {
    if (answers[step] === undefined) return;
    transition(() => { if (step === QUIZ_QUESTIONS.length - 1) setMode('result'); else setStep(step + 1); });
  };
  const result = mode === 'result' ? quizReflection(answers) : null;
  return <section className="reflection-quiz" aria-labelledby="quiz-title"><div className="quiz-inner">
    <div className="quiz-intro"><p className="hero-eyebrow">Um momento para você</p><h2 id="quiz-title">Três perguntas para organizar suas ideias</h2><p>Um exercício de reflexão — não é avaliação psicológica nem previsão. Não há resposta certa, pontuação ou interpretação da sua vida.</p></div>
    {mode === 'intro' && <><p>Escolha o que faz sentido hoje e receba uma pergunta para continuar refletindo. O contato com Pai Laércio, ao final, é opcional.</p><button ref={startButton} type="button" className="quiz-primary" onClick={() => transition(() => setMode('questions'))}>Começar exercício <ArrowRight aria-hidden="true" size={20} /></button></>}
    {mode === 'questions' && <div className="quiz-panel">
      <p className="quiz-progress" aria-live="polite">Pergunta {step + 1} de {QUIZ_QUESTIONS.length}</p>
      <h3 ref={heading} tabIndex={-1} id="quiz-question">{QUIZ_QUESTIONS[step].title}</h3>
      <fieldset aria-labelledby="quiz-question" className="quiz-options">
        {QUIZ_QUESTIONS[step].options.map((option, index) => <label key={`${step}-${index}`}><input type="radio" name={`reflection-question-${step}`} value={index} checked={answers[step] === index} onChange={() => setAnswers(previous => { const copy = [...previous]; copy[step] = index; return copy; })} /><span>{option}</span></label>)}
      </fieldset>
      <div className="quiz-controls"><button type="button" className="quiz-secondary" disabled={moving} onClick={() => transition(() => { if (step === 0) setMode('intro'); else setStep(step - 1); })}>Voltar</button><button type="button" className="quiz-primary" disabled={moving || answers[step] === undefined} onClick={next}>{step === 2 ? 'Ver minha reflexão' : 'Continuar'} <ArrowRight aria-hidden="true" size={20} /></button></div>
    </div>}
    {result && <div className="quiz-result"><h3 ref={heading} tabIndex={-1}>Uma reflexão a partir das suas escolhas</h3><p>Você escolheu <strong>{result.focus}</strong>.</p><p className="quiz-result-question">{result.question}</p><p>{result.practice}</p><p>{result.next}</p><p>Se quiser conhecer o atendimento de Pai Laércio, você pode fazer perguntas pelo canal oficial, sem precisar compartilhar suas respostas deste exercício.</p><div className="quiz-controls"><a className="quiz-primary" href="https://wa.me/5541984679910?text=Ol%C3%A1%2C%20Pai%20La%C3%A9rcio.%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20atendimento."><MessageCircle aria-hidden="true" size={22} /> Perguntar sobre o atendimento</a><button type="button" className="quiz-secondary" onClick={() => transition(() => { setAnswers([]); setStep(0); setMode('questions'); })} disabled={moving}><RotateCcw aria-hidden="true" size={20} /> Fazer novamente</button></div></div>}
    <noscript><p>O exercício interativo requer JavaScript. Você pode continuar lendo as orientações desta página e usar os links de contato.</p></noscript>
    <p className="quiz-privacy">Suas respostas ficam somente na memória desta página durante o exercício. Não são salvas nem enviadas pelo botão de contato. Ao mudar de página ou recarregar, o exercício recomeça.</p>
  </div></section>;
};
