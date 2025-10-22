import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  {
    q: 'Quem avaliou EmpaTEA: Transformando o Cuidado com Pessoas no Espectro Autista?',
    a: `Todas as avaliações mostradas aqui foram feitas por pessoas reais que compraram e deram sua opinião sobre o curso. Quando alguém compra um curso através da Hotmart, a pessoa recebe um convite para avaliar o conteúdo dele. A nota nesta página é o resultado da média das avaliações feitas por estes compradores, que vai de 1 a 5 estrelas.`
  },
  {
    q: 'Como funciona o “Prazo de Garantia”?',
    a: `O Prazo de Garantia é o período que você tem para pedir o reembolso integral do valor pago pela sua compra, caso o produto não seja satisfatório.

Assim que solicitado, seu reembolso é processado automaticamente pela Hotmart em até 5 dias. Para pagamentos com boleto bancário, você precisa preencher uma conta bancária para receber o dinheiro. Passados os 5 dias, o valor poderá ser identificado em sua conta em até 7 dias úteis. Já o estorno da fatura do cartão de crédito varia de acordo com o meio de pagamento e pode ocorrer na fatura atual ou na seguinte.`
  },
  {
    q: 'O que é e como funciona o Certificado de Conclusão digital?',
    a: `Alguns cursos online oferecem um certificado digital de conclusão. Alunos podem emitir esse certificado ao final do curso ou entrando em contato com o Autor ou Autora. Esses certificados podem ser compartilhados em redes sociais como o LinkedIn e inseridos em informações curriculares.`
  },
  {
    q: 'Quais diferenciais os produtos podem ter?',
    a: `Os produtos na Hotmart têm diferenciais que mudam de acordo com o tipo de produto e a disponibilidade.

Por exemplo, produtos do tipo "Cursos online" podem ou não oferecer certificado digital de conclusão. Caso o certificado esteja disponível, alunos podem emiti-lo dentro do curso ou entrando em contato com o(a) Autor(a). Os certificados podem ser compartilhados em redes sociais como o LinkedIn e inseridos em informações curriculares.

A garantia também é um diferencial dos nossos produtos e pode variar de 7, 15 ou 30 dias, de acordo com o oferecido pelo Autor(a).

Para ver os diferenciais disponíveis neste produto, basta checar a seção Diferenciais.`
  },
  {
    q: 'Como acesso meu produto?',
    a: `Você receberá o acesso a EmpaTEA: Transformando o Cuidado com Pessoas no Espectro Autista por email. Pode ser um curso online, um ebook, uma série de videoaulas, um serviço, evento, etc. O conteúdo será acessado ou baixado através de um computador, celular, tablet ou outro dispositivo digital.

Você também pode acessar o produto comprado nesta página:
01 - Faça login clicando em\n Entrar \n02 - Acesse o menu lateral, clique em\n Minha conta \n03 - Clique em\n Minhas compras \n\nEm "Minhas compras" estarão todos os produtos que você já comprou!`
  },
  {
    q: 'Tenho interesse neste curso, como posso comprar?',
    a: `Para comprar este curso, clique no botão “Comprar”. Lembre-se de que nem todos os cursos estarão sempre disponíveis para compra. É possível que o Autor ou Autora esteja preparando uma nova turma ainda sem inscrições abertas.`
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-4">Perguntas Frequentes</h1>
          <p className="mb-8 text-gray-700">Dúvidas rápidas sobre o EmpaTEA. Se não encontrar sua resposta, entre em contato conosco.</p>

          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="border rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full text-left px-4 py-3 bg-gray-50 flex justify-between items-center"
                >
                  <span className="font-semibold">{f.q}</span>
                  <span>{openIndex === i ? '-' : '+'}</span>
                </button>
                {openIndex === i && (
                  <div className="p-4 bg-white text-gray-700">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
