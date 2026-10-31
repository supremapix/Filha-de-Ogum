import React from 'react';

export const AttendanceGuide: React.FC = () => (
  <section id="como-funciona" className="attendance-guide" aria-labelledby="guide-title">
    <div className="guide-inner">
      <p className="hero-eyebrow">Informação para decidir com calma</p>
      <h2 id="guide-title">Consulta espiritual: entenda antes de decidir</h2>
      <p>Antes de escolher um atendimento, pense na principal dúvida que deseja esclarecer. Pode ser uma questão sobre seu relacionamento, um momento de mudança ou o interesse em conhecer os serviços espirituais de Pai Laércio. No primeiro contato, diga qual assunto deseja conversar e se procura atendimento presencial em Curitiba ou online.</p>
      <p>Pergunte como a consulta acontece, qual é o valor e quais são as condições antes de contratar. Você não precisa conhecer os nomes dos trabalhos espirituais para fazer perguntas. Procure entender a proposta com calma e decida somente depois de receber as informações necessárias.</p>
      <div className="guide-topics">
        <details>
          <summary>Amarração amorosa: o que esclarecer</summary>
          <div><p>Amarração amorosa é o nome usado para determinadas práticas espirituais relacionadas à vida afetiva. Conhecer esse nome não basta para entender como um atendimento será conduzido. Antes de contratar, pergunte o que está incluído, quais são as etapas e se existe algum custo adicional. Solicite explicações em linguagem simples quando algo não estiver claro.</p><p>Práticas espirituais pertencem ao campo da fé. Elas não permitem garantir o retorno de alguém, controlar sentimentos ou determinar um prazo para reconciliação. A liberdade e as decisões de cada pessoa precisam ser respeitadas.</p></div>
        </details>
        <details>
          <summary>Reconciliação de casais: perguntas para refletir</summary>
          <div><p>O desejo de recomeçar pode vir acompanhado de saudade, dúvidas e receio de repetir dificuldades. Antes de decidir, vale refletir:</p><ul><li>As duas pessoas demonstram vontade de conversar?</li><li>O motivo do afastamento foi compreendido?</li><li>Existe respeito aos limites de cada um?</li><li>Que mudanças concretas seriam necessárias para um novo começo?</li></ul><p>A orientação espiritual pode fazer parte de uma busca pessoal de reflexão, conforme suas crenças. Ela não substitui a conversa entre o casal nem determina a decisão de outra pessoa. Não existe promessa de reconciliação.</p></div>
        </details>
        <details>
          <summary>Limpeza espiritual: conheça a proposta</summary>
          <div><p>Limpeza espiritual é uma expressão usada em diferentes tradições religiosas. As práticas e seus significados variam de uma casa para outra. Pergunte como esse serviço é apresentado, quais etapas estão previstas e quais condições se aplicam. Não suponha que seja igual ao atendimento descrito em outro site.</p><p>As práticas espirituais não substituem cuidados de saúde ou acompanhamento profissional. Não interrompa um tratamento por causa de uma orientação encontrada na internet.</p></div>
        </details>
        <details>
          <summary>Presencial ou online: o que confirmar</summary>
          <div><p>Para atendimento presencial em Curitiba, confirme o endereço e o horário antes de sair de casa. Se precisar de ajuda para chegar ou de alguma condição de acessibilidade, pergunte sobre isso antes da visita.</p><p>Para atendimento online, confirme o canal utilizado, o horário combinado e o que é necessário para participar. Escolha um lugar onde consiga conversar com tranquilidade. Em qualquer modalidade, esclareça previamente o valor, o que está incluído e as condições de agendamento. Se preferir falar em vez de escrever, utilize o telefone apresentado no site.</p></div>
        </details>
        <details>
          <summary>Leve suas perguntas para a primeira conversa</summary>
          <div><ul><li>Qual serviço está sendo apresentado?</li><li>Como o atendimento acontece?</li><li>Qual é o valor e o que ele inclui?</li><li>Existe alguma etapa com cobrança adicional?</li><li>Como funciona o agendamento e a remarcação?</li><li>Qual canal devo usar para esclarecer dúvidas depois?</li></ul><p>No contato inicial, apresente apenas as informações necessárias. Não envie documentos, senhas, dados bancários ou conversas privadas de outras pessoas sem necessidade. Use os canais publicados neste site e confirme quem está atendendo.</p></div>
        </details>
      </div>
      <div className="hero-actions"><a className="primary-action" href="https://wa.me/5541984679910">Tirar dúvidas no WhatsApp</a><a className="secondary-action" href="tel:+554132228276">Prefiro falar por telefone</a></div>
    </div>
  </section>
);
