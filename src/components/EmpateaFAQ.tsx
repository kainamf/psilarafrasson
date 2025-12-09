export default function EmpateaFAQ() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Perguntas Frequentes</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-3 mb-4"></div>
          <p className="text-gray-700 max-w-2xl mx-auto">Dúvidas rápidas sobre o EmpaTEA. Clique em cada pergunta para abrir a resposta.</p>
        </div>

        <div className="space-y-4">
          <details className="bg-gradient-to-r from-secondary-50 to-tertiary-50 border-2 border-secondary-300 rounded-xl p-5 hover:shadow-md transition-all group">
            <summary className="font-semibold cursor-pointer text-secondary-900 flex items-center justify-between">
              <span>Para quem o curso é indicado?</span>
              <span className="text-secondary-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed">
              Para psicólogos, terapeutas ocupacionais, fonoaudiólogos, pedagogos, fisioterapeutas e demais profissionais da saúde e educação interessados em compreender e aplicar a ABA de forma humana, ética e centrada na pessoa autista.
            </div>
          </details>

          <details className="bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-300 rounded-xl p-5 hover:shadow-md transition-all group">
            <summary className="font-semibold cursor-pointer text-primary-900 flex items-center justify-between">
              <span>O que é ensinado?</span>
              <span className="text-primary-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed">
              O EmpaTEA ensina uma prática baseada em ABA compassiva, ética e neuroafirmativa, que considera o assentimento, o respeito à neurodiversidade e o protagonismo da pessoa autista. A prática é guiada pela compaixão e pelo compromisso com a autonomia e a qualidade de vida, conforme discutido na literatura recente e na Nota Técnica da ABPMC e do CFP.
            </div>
          </details>

          <details className="bg-gradient-to-r from-tertiary-50 to-primary-50 border-2 border-tertiary-300 rounded-xl p-5 hover:shadow-md transition-all group">
            <summary className="font-semibold cursor-pointer text-tertiary-900 flex items-center justify-between">
              <span>O curso ensina técnicas para aplicar com crianças autistas?</span>
              <span className="text-tertiary-700 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed">
              Sim, mas vai além disso. O curso aborda princípios, ética, análise funcional e aplicações de práticas baseadas em ABA em contextos clínicos, escolares, sociais e culturais, formando profissionais capazes de pensar e não apenas aplicar técnicas.
            </div>
          </details>

          <details className="bg-gradient-to-r from-secondary-50 to-tertiary-50 border-2 border-secondary-300 rounded-xl p-5 hover:shadow-md transition-all group">
            <summary className="font-semibold cursor-pointer text-secondary-900 flex items-center justify-between">
              <span>Há conteúdo sobre famílias e cuidadores?</span>
              <span className="text-secondary-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed">
              Sim. Um dos módulos é dedicado à capacitação e acolhimento parental, abordando como ensinar sem pressão, validar tentativas e adaptar estratégias às realidades das famílias, conforme evidenciado em décadas de pesquisas sobre intervenção mediada por familiares.
            </div>
          </details>

          <details className="bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-300 rounded-xl p-5 hover:shadow-md transition-all group">
            <summary className="font-semibold cursor-pointer text-primary-900 flex items-center justify-between">
              <span>A abordagem do curso é neuroafirmativa?</span>
              <span className="text-primary-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed">
              Totalmente. O EmpaTEA nasceu do encontro entre ciência e vivência. Ele reconhece o autismo como uma forma legítima de ser e propõe uma prática que fortalece identidade, autonomia e pertencimento, alinhada ao movimento da neurodiversidade.
            </div>
          </details>

          <details className="bg-gradient-to-r from-tertiary-50 to-primary-50 border-2 border-tertiary-300 rounded-xl p-5 hover:shadow-md transition-all group">
            <summary className="font-semibold cursor-pointer text-tertiary-900 flex items-center justify-between">
              <span>O curso inclui supervisão ou prática supervisionada?</span>
              <span className="text-tertiary-700 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed">
              Alguns módulos incluem estudos de caso supervisionados, baseados nas boas práticas descritas pela ABPMC para desenvolvimento técnico e ético do analista do comportamento.
            </div>
          </details>

          <details className="bg-gradient-to-r from-secondary-50 to-tertiary-50 border-2 border-secondary-300 rounded-xl p-5 hover:shadow-md transition-all group">
            <summary className="font-semibold cursor-pointer text-secondary-900 flex items-center justify-between">
              <span>Como o EmpaTEA se diferencia de outras formações em ABA?</span>
              <span className="text-secondary-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed">
              <ul className="list-disc list-inside space-y-2">
                <li>É o primeiro curso criado por uma profissional autista e analista do comportamento, unindo vivência e ciência.</li>
                <li>Baseado nos valores da ABA compassiva e neuroafirmativa.</li>
                <li>Aborda temas pouco explorados, como ética aplicada, ACT, cultura e interseccionalidades.</li>
                <li>Forma profissionais preparados para atuar com responsabilidade, escuta e humanidade.</li>
              </ul>
            </div>
          </details>

          <details className="bg-gradient-to-r from-primary-50 to-secondary-50 border-2 border-primary-300 rounded-xl p-5 hover:shadow-md transition-all group">
            <summary className="font-semibold cursor-pointer text-primary-900 flex items-center justify-between">
              <span>O EmpaTEA substitui uma pós-graduação?</span>
              <span className="text-primary-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed">
              Não. O curso é uma formação complementar, com base científica sólida, mas não substitui cursos de especialização lato sensu. É, porém, uma excelente base para quem deseja seguir esse caminho com consciência e preparo ético.
            </div>
          </details>

          <details className="bg-gradient-to-r from-tertiary-50 to-primary-50 border-2 border-tertiary-300 rounded-xl p-5 hover:shadow-md transition-all group">
            <summary className="font-semibold cursor-pointer text-tertiary-900 flex items-center justify-between">
              <span>Quem avaliou o curso EmpaTEA: Transformando o Cuidado com Pessoas no Espectro Autista?</span>
              <span className="text-tertiary-700 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed">
              Todas as avaliações exibidas aqui são reais e foram feitas por pessoas que adquiriram o curso e compartilharam sua experiência de forma espontânea. Quando alguém realiza uma compra pela Hotmart, recebe um convite automático para avaliar o conteúdo. A nota exibida nesta página representa a média das avaliações feitas pelos alunos, variando de 1 a 5 estrelas, e reflete o compromisso do curso com qualidade, ética e relevância.
            </div>
          </details>

          <details className="bg-gradient-to-r from-secondary-50 to-tertiary-50 border-2 border-secondary-300 rounded-xl p-5 hover:shadow-md transition-all group">
            <summary className="font-semibold cursor-pointer text-secondary-900 flex items-center justify-between">
              <span>Como funciona o "Prazo de Garantia"?</span>
              <span className="text-secondary-500 group-open:rotate-180 transition-transform">▼</span>
            </summary>
            <div className="mt-4 text-gray-700 leading-relaxed">
              O Prazo de Garantia é o período em que você pode solicitar o reembolso integral do valor pago, caso o curso não atenda às suas expectativas. Assim que o pedido é feito, o reembolso é processado automaticamente pela Hotmart em até 5 dias úteis. Se o pagamento foi realizado por boleto bancário, basta preencher uma conta bancária para receber o valor. Em compras feitas no cartão, o estorno ocorre diretamente na fatura em até 7 dias úteis, conforme o processamento da operadora.
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
