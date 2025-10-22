import React from 'react';
import EmpateaCTA from './EmpateaCTA';

function EmpateaBenefits() {
    return (
        <section className="py-16 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Benefícios do EmpaTEA</h2>
                    <p className="text-lg text-gray-700 mt-2">Tudo que você recebe ao adquirir o curso</p>
                </div>


                <div className="text-center mt-6">
                    <EmpateaCTA label="Garantir minha vaga" variant="primary" />
                </div>
                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {[
                        '45 aulas práticas e acessíveis',
                        'Supervisão ao vivo mensal',
                        'Aula bônus com profissionais parceiros',
                        'E-book completo e materiais de apoio',
                        'Certificado de conclusão',
                        'Comunidade exclusiva no WhatsApp',
                        'Conteúdos baseados em ciência e vivência autista',
                        'Acesso imediato após confirmação de pagamento'
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl border-l-4 border-empatea-green">
                            <div className="w-8 h-8 bg-empatea-green rounded-full flex items-center justify-center text-white font-bold">✓</div>
                            <p className="text-gray-700 font-medium">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-8">
                    <p className="text-sm text-gray-600">EmpaTEA: Transformando o Cuidado com Pessoas no Espectro Autista — Autor: Lara Helena de Souza Frasson</p>
                    <p className="text-xl font-semibold text-gray-800 mt-2">12 x de R$ 92,77 * Ou R$ 897,00 à vista</p>
                    <p className="text-gray-600 text-sm mt-1">Invista no profissional que você deseja ser. Invista em dignidade, inclusão e transformação.</p>
                </div>
            </div>
        </section>
    );
}

export default EmpateaBenefits;
