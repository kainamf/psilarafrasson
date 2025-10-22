import React from 'react';

export default function EmpateaFAQ() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Perguntas Frequentes</h2>
      <p className="text-white mb-6">Dúvidas rápidas sobre o EmpaTEA. Clique em cada pergunta para abrir a resposta.</p>

      <div className="space-y-3 max-w-4xl mx-auto">
        <details className="bg-white border rounded-lg p-4">
          <summary className="font-semibold cursor-pointer text-empatea-green">Quem avaliou EmpaTEA: Transformando o Cuidado com Pessoas no Espectro Autista?</summary>
          <div className="mt-3 text-gray-700">
            Todas as avaliações mostradas aqui foram feitas por pessoas reais que compraram e deram sua opinião sobre o curso. Quando alguém compra um curso através da Hotmart, a pessoa recebe um convite para avaliar o conteúdo dele. A nota nesta página é o resultado da média das avaliações feitas por estes compradores, que vai de 1 a 5 estrelas.
          </div>
        </details>

        <details className="bg-white border rounded-lg p-4">
          <summary className="font-semibold cursor-pointer text-empatea-green">Como funciona o “Prazo de Garantia”?</summary>
          <div className="mt-3 text-gray-700">
            O Prazo de Garantia é o período que você tem para pedir o reembolso integral do valor pago pela sua compra, caso o produto não seja satisfatório.

            Assim que solicitado, seu reembolso é processado automaticamente pela Hotmart em até 5 dias. Para pagamentos com boleto bancário, você precisa preencher uma conta bancária para receber o dinheiro. Passados os 5 dias, o valor poderá ser identificado em sua conta em até 7 dias úteis. Já o estorno da fatura do cartão de crédito varia de acordo com o meio de pagamento e pode ocorrer na fatura atual ou na seguinte.
          </div>
        </details>

        <details className="bg-white border rounded-lg p-4">
          <summary className="font-semibold cursor-pointer text-empatea-green">O que é e como funciona o Certificado de Conclusão digital?</summary>
          <div className="mt-3 text-gray-700">
            Alguns cursos online oferecem um certificado digital de conclusão. Alunos podem emitir esse certificado ao final do curso ou entrando em contato com o Autor ou Autora. Esses certificados podem ser compartilhados em redes sociais como o LinkedIn e inseridos em informações curriculares.
          </div>
        </details>

        <details className="bg-white border rounded-lg p-4">
          <summary className="font-semibold cursor-pointer text-empatea-green">Quais diferenciais os produtos podem ter?</summary>
          <div className="mt-3 text-gray-700">
            Os produtos na Hotmart têm diferenciais que mudam de acordo com o tipo de produto e a disponibilidade.

            Por exemplo, produtos do tipo "Cursos online" podem ou não oferecer certificado digital de conclusão. Caso o certificado esteja disponível, alunos podem emiti-lo dentro do curso ou entrando em contato com o(a) Autor(a). Os certificados podem ser compartilhados em redes sociais como o LinkedIn e inseridos em informações curriculares.

            A garantia também é um diferencial dos nossos produtos e pode variar de 7, 15 ou 30 dias, de acordo com o oferecido pelo Autor(a).

            Para ver os diferenciais disponíveis neste produto, basta checar a seção Diferenciais.
          </div>
        </details>

        <details className="bg-white border rounded-lg p-4">
          <summary className="font-semibold cursor-pointer text-empatea-green">Como acesso meu produto?</summary>
          <div className="mt-3 text-gray-700">
            Você receberá o acesso a EmpaTEA: Transformando o Cuidado com Pessoas no Espectro Autista por email. Pode ser um curso online, um ebook, uma série de videoaulas, um serviço, evento, etc. O conteúdo será acessado ou baixado através de um computador, celular, tablet ou outro dispositivo digital.

            Você também pode acessar o produto comprado nesta página:
            <ol className="list-decimal list-inside mt-2">
              <li>Faça login clicando em <strong>Entrar</strong></li>
              <li>Acesse o menu lateral e clique em <strong>Minha conta</strong></li>
              <li>Clique em <strong>Minhas compras</strong></li>
            </ol>

            Em "Minhas compras" estarão todos os produtos que você já comprou!
          </div>
        </details>

        <details className="bg-white border rounded-lg p-4">
          <summary className="font-semibold cursor-pointer text-empatea-green">Tenho interesse neste curso, como posso comprar?</summary>
          <div className="mt-3 text-gray-700">
            Para comprar este curso, clique no botão “Comprar”. Lembre-se de que nem todos os cursos estarão sempre disponíveis para compra. É possível que o Autor ou Autora esteja preparando uma nova turma ainda sem inscrições abertas.
          </div>
        </details>
      </div>
    </div>
  );
}
