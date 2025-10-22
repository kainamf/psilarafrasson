import React from 'react';
import EmpateaCTA from './EmpateaCTA';

const benefits = [
    { title: '45 aulas práticas', desc: 'Aulas curtas, focadas em aplicação prática e reflexões clínicas.' },
    { title: 'Supervisão mensal', desc: 'Sessões ao vivo para orientação e estudo de caso.' },
    { title: 'Aulas bônus', desc: 'Conteúdos com especialistas convidados.' },
    { title: 'Materiais de apoio', desc: 'E-book, fichas e guias práticos para uso diário.' },
    { title: 'Certificado digital', desc: 'Com validade para comprovação de horas.' },
    { title: 'Comunidade ativa', desc: 'Grupo exclusivo para trocas e network.' },
    { title: 'Base científica', desc: 'Conteúdos alinhados à evidência e à vivência autista.' },
    { title: 'Acesso imediato', desc: 'Conta liberada logo após a confirmação do pagamento.' }
];

export default function EmpateaBenefits() {
    return (
        <section className="py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <header className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Benefícios do EmpaTEA</h2>
                    <p className="text-white/90 mt-2 max-w-2xl">Tudo que você precisa para transformar sua prática: técnica, escuta e comunidade.</p>
                </header>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((b, i) => (
                        <article
                            key={i}
                            className="relative bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow focus-within:shadow-lg"
                            tabIndex={0}
                            aria-label={b.title}
                        >
                            <div className="flex items-start gap-4">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#64A555' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17l-5-5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{b.title}</h3>
                                    <p className="text-sm text-gray-700 mt-1">{b.desc}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 md:mt-12 max-w-3xl mx-auto">
                    <div className="rounded-2xl overflow-hidden shadow-lg">
                        <div className="flex flex-col md:flex-row items-center justify-between bg-transparent p-6 border-t-4" style={{ borderTopColor: '#EEC666' }}>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-baseline gap-3 md:gap-6 flex-wrap">
                                    <div className="flex items-end min-w-0">
                                        <span className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight break-words">R$ 92,77</span>
                                        <span className="text-xs sm:text-sm md:text-base text-white/80 ml-3">/mês • 12x</span>
                                    </div>

                                    <div className="hidden md:block border-l h-8 ml-4" />

                                    <div className="ml-0 sm:ml-4 md:ml-6 mt-2 md:mt-0">
                                        <div className="text-sm text-white/90">ou</div>
                                        <div className="text-base md:text-lg font-semibold text-white/95">R$ 897,00 à vista</div>
                                    </div>
                                </div>

                                <div className="text-sm text-white/90 mt-3">Acesso imediato • Certificado digital • Comunidade exclusiva</div>
                            </div>

                            <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0">
                                <EmpateaCTA label="Garantir minha vaga" variant="primary" className="px-8 md:px-10 py-2 md:py-3 text-lg md:text-xl shadow-cta" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
