import React from 'react';
import { ArrowRight } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/554174037997';

function Hero() {
    return (
        // Seção principal com cor de fundo suave
        <section id="inicio" className="py-20 md:py-24 bg-[#FBF6F3]">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    
                    {/* Coluna da Esquerda: Texto e CTA */}
                    <div>
                        <img 
                            src="/assets/images/laraLogo.png" 
                            alt="Logo Lara Frasson" 
                            className="w-56 mb-8" // Logo no topo
                        />

                        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 leading-tight">
                            Psicóloga Infanto Juvenil
                            <span className="text-stone-600 block">Lara Frasson</span>
                        </h1>

                        <p className="text-lg text-stone-700 mb-8 leading-relaxed">
                            Olá, eu sou a Tia Lara! Sou autista, psicóloga infanto juvenil, educadora parental pela disciplina positiva e atuo com a Análise do Comportamento. Pós graduada em clínica analítico comportamental infantil, habilidades terapêuticas, pós graduanda em Neuropsicologia e ABA. Supervisora ABA QASP-S certificada e coordenadora ABA CABA-BR.
                        </p>
                        
                        <div className="mt-10">
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#8B6B61] hover:bg-[#79574a] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
                            >
                                Agendar Consulta
                                <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Coluna da Direita: Imagem de Perfil */}
                    <div className="flex justify-center items-center">
                        <div className="max-w-md w-full">
                           <img
                                src="/assets/images/laraProfile.jpeg"
                                alt="Foto de Lara Frasson"
                                className="w-full h-auto object-cover rounded-t-[200px] shadow-2xl" // Borda superior arredondada para criar o arco
                           />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;