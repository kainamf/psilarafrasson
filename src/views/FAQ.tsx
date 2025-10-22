import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const faqs = [
  {
    q: 'O que é o EmpaTEA? ',
    a: 'O EmpaTEA é uma formação que une ciência, sensibilidade e vivência autista para transformar a atuação de profissionais no atendimento a pessoas neurodivergentes. Desenvolvido por uma psicóloga autista, o curso foca em ABA humanizada, escuta e vínculo.'
  },
  {
    q: 'Como é a metodologia?',
    a: 'A metodologia A.L.M.A. — Autenticidade, Linguagem, Mudança e Acolhimento — forma profissionais com foco em ética, presença e empatia.'
  },
  {
    q: 'Quais são os conteúdos do curso?',
    a: 'São 45 aulas práticas, supervisões ao vivo mensais, aulas bônus, e-book, materiais de apoio e certificado de conclusão. O curso aborda desde princípios da ABA até estratégias práticas, comunicação e inclusão.'
  },
  {
    q: 'Como recebo o acesso ao curso?',
    a: 'Você recebe um e-mail com instruções de acesso após a confirmação do pagamento. Também pode acessar via área do aluno na Hotmart.'
  },
  {
    q: 'Qual a garantia?',
    a: 'A garantia padrão é de 7 dias, oferecendo reembolso integral caso o produto não seja satisfatório.'
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
