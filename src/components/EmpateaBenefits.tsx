import React from 'react';
import EmpateaCTA from './EmpateaCTA';

function EmpateaBenefits() {
    const benefits = [
        '45 aulas práticas e acessíveis',
        'Supervisão ao vivo mensal',
        'Aula bônus com profissionais parceiros',
        'E-book completo e materiais de apoio',
        'Certificado de conclusão',
        'Comunidade exclusiva no WhatsApp',
        'Conteúdos baseados em ciência e vivência autista',
        'Acesso imediato após confirmação de pagamento'
    ];

    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-bold">Benefícios do EmpaTEA</h2>
                    <p className="text-base md:text-lg mt-2">Tudo que você recebe ao adquirir o curso — conteúdo prático, suporte e comunidade.</p>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {benefits.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg border-l-4 border-empatea-green">
                            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-empatea-green text-white flex items-center justify-center font-semibold">✓</div>
                            <p className="text-gray-700 font-medium leading-tight">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="max-w-2xl mx-auto mt-6">
                    <div className="bg-empatea-yellow/10 border border-empatea-yellow rounded-lg p-4 text-center">
                        <p className="text-lg md:text-xl font-semibold text-gray-800 mt-1">12 x de R$ 92,77 • Ou R$ 897,00 à vista</p>
                        <p className="text-sm text-gray-600 mt-1">Invista no profissional que você deseja ser. Invista em dignidade, inclusão e transformação.</p>
                    </div>
                </div>

                <div className="text-center mt-6">
                    <EmpateaCTA label="Garantir minha vaga" variant="primary" />
                </div>
            </div>
        </section>
    );
}

export default EmpateaBenefits;
