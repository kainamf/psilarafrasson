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
                <header className="mb-8 text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Benefícios do EmpaTEA</h2>
                    <p className="text-white/90 mt-2 max-w-2xl mx-auto md:mx-0">Tudo que você precisa para transformar sua prática: técnica, escuta e comunidade.</p>
                </header>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {benefits.map((b, i) => (
                        <article
                            key={i}
                            className="relative bg-white rounded-2xl p-6 sm:p-5 shadow-sm hover:shadow-lg transition-shadow focus-within:shadow-lg flex h-full"
                            tabIndex={0}
                            aria-label={b.title}
                        >
                            <div className="flex items-start gap-4 w-full">
                                <div className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center" style={{ backgroundColor: '#64A555' }}>
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 6L9 17l-5-5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-lg font-semibold text-gray-900 truncate">{b.title}</h3>
                                    <p className="text-sm text-gray-700 mt-1">{b.desc}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-8 md:mt-12 max-w-3xl mx-auto">
                    {/* CARD PRINCIPAL
      - Adicionado 'bg-red-700' (para combinar com a imagem, já que o código original não tinha cor)
      - Adicionado 'transition-all' e 'hover:shadow-2xl hover:-translate-y-1' para o efeito dinâmico
    */}
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-red-700 
                 transition-all duration-300 ease-in-out hover:shadow-2xl hover:-translate-y-1">

                        {/* A cor da borda foi mantida via 'style' */}
                        <div className="p-6 border-t-4" style={{ borderTopColor: '#EEC666' }}>
                            <div className="max-w-3xl mx-auto">
                                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6">

                                    {/* SEÇÃO DE PREÇOS */}
                                    <div className="min-w-0">
                                        <div className="flex flex-col items-center md:items-start">

                                            {/* Preço Parcelado */}
                                            <div className="flex items-baseline">
                                                <p className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                                                    R$ 92,77
                                                </p>
                                                <span className="text-xs sm:text-sm md:text-base text-white/80 ml-2">/mês • 12x</span>
                                            </div>

                                            {/* Preço à Vista */}
                                            <div className="mt-1">
                                                <span className="text-sm text-white/90">ou </span>
                                                <span className="text-base md:text-lg font-semibold text-white/95">
                                                    R$ 897,00 à vista
                                                </span>
                                            </div>
                                        </div>

                                        <ul className="flex flex-wrap justify-center md:justify-start items-center text-sm text-white/90 mt-4 gap-x-2 gap-y-1">
                                            <li>Acesso imediato</li>
                                            <li aria-hidden="true" className="text-xs select-none">&bull;</li>
                                            <li>Certificado digital</li>
                                            <li aria-hidden="true" className="text-xs select-none">&bull;</li>
                                            <li>Comunidade exclusiva</li>
                                        </ul>
                                    </div>

                                    {/* SEÇÃO DO BOTÃO (CTA) */}
                                    <div className="flex justify-center md:justify-end">
                                        {/* - Adicionado 'transition-transform' e 'hover:scale-105' para dinamismo
                        */}
                                        <EmpateaCTA
                                            label="Garantir minha vaga"
                                            variant="primary"
                                            className="w-full md:w-auto min-w-[200px] px-6 md:px-10 py-2 md:py-3 text-lg md:text-xl shadow-cta
                                       transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
