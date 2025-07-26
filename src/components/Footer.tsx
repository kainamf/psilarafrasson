import React from 'react';

const CRP = '08/33121';
const PHONE = '(41)7403-7997';
const EMAIL = 'psicoinfantil@larafrassonpsicologainfantil.com';
const ADDRESS = 'Rua Albino Silva, 455. Bom Retiro, Curitiba/PR';
const INSTAGRAM_LINK = 'https://www.instagram.com/psicolarafrasson/';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/lara-frasson-0881b11b0/';
const FACEBOOK_LINK = 'https://www.facebook.com/psicolarafrasson/';

function Footer() {
    return (
        <footer className="bg-primary-900 py-8">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="col-span-2">
                        <h3 className="text-3xl font-bold text-secondary-700 text-font mb-6">Lara Frasson</h3>
                        <p className="text-xl text-secondary-900 text-font mb-6 leading-relaxed">
                            Psicóloga infanto juvenil, educadora parental pela disciplina positiva, especialista em Análise do Comportamento, pós graduada em clínica analítico comportamental infantil, habilidades terapêuticas, pós graduanda em Neuropsicologia e ABA. Supervisora ABA QASP-S certificada e coordenadora ABA CABA-BR.
                        </p>
                        <p className="text-lg text-secondary-900 text-font">Rua Albino Silva, 455 - Bom Retiro, Curitiba/PR</p>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold text-secondary-700 text-font mb-4">Serviços</h4>
                        <ul className="space-y-2 text-lg text-secondary-900 text-font">
                            <li>Avaliação Neuropsicológica</li>
                            <li>Diagnóstico Diferencial</li>
                            <li>Orientação Familiar</li>
                            <li>Relatórios Especializados</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold text-secondary-700 text-font mb-4">Contato</h4>
                        <div className="space-y-2 text-lg text-secondary-900 text-font">
                            <p>{PHONE}</p>
                            <p>{EMAIL}</p>
                            <p>{ADDRESS}</p>
                            <a href={INSTAGRAM_LINK} target="_blank" rel="noopener noreferrer" className="block text-secondary-700 hover:underline">Instagram</a>
                            <a href={LINKEDIN_LINK} target="_blank" rel="noopener noreferrer" className="block text-secondary-700 hover:underline">LinkedIn</a>
                            <a href={FACEBOOK_LINK} target="_blank" rel="noopener noreferrer" className="block text-secondary-700 hover:underline">Facebook</a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-secondary-700 mt-8 pt-8 text-center text-secondary-700 text-font">
                    <p className="text-lg text-secondary-900">&copy; 2025 Lara Frasson - Todos os direitos reservados</p>
                    <p className="text-base mt-2 text-secondary-900">Desenvolvido por <a href="https://github.com/kainamf" target="_blank" rel="noopener noreferrer" className="underline hover:text-secondary-700">Kainã Freitas</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
