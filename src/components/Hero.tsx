import React from 'react';
import { MessageCircle, Instagram, Heart } from 'lucide-react';

const WHATSAPP_LINK = 'https://wa.me/554174037997';
const INSTAGRAM_LINK = 'https://www.instagram.com/psicolarafrasson/';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/lara-frasson-0881b11b0/';
const FACEBOOK_LINK = 'https://www.facebook.com/psicolarafrasson/';
const CRP = '08/33121';
const ADDRESS = 'Rua Albino Silva, 455. Bom Retiro, Curitiba/PR';


function Hero() {
    return (
        <section id="inicio" className="pt-20 pb-16 bg-gradient-to-b from-primary-500 to-primary-300">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h1 className="text-4xl md:text-6xl font-bold text-primary-700 text-font mb-6 leading-tight">
                            Psicóloga Infanto Juvenil
                            <span className="text-primary-500 text-font block">Lara Frasson</span>
                        </h1>
                        <p className="text-xl text-primary-900 text-font mb-8 leading-relaxed">
                            Olá, eu sou a Tia Lara! Sou autista, psicóloga infanto juvenil, educadora parental pela disciplina positiva e atuo com a Análise do Comportamento. Pós graduada em clínica analítico comportamental infantil, habilidades terapêuticas, pós graduanda em Neuropsicologia e ABA. Supervisora ABA QASP-S certificada e coordenadora ABA CABA-BR.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                            className="bg-primary-500 hover:bg-primary-700 text-font px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
                            >
                                <MessageCircle size={20} />
                                Agendar Consulta
                            </a>
                            <a
                                href={INSTAGRAM_LINK}
                                target="_blank"
                            className="bg-gradient-to-r from-secondary-500 to-primary-500 hover:from-secondary-700 hover:to-primary-700 text-font px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg"
                            >
                                <Instagram size={20} />
                                Instagram
                            </a>
                        </div>
                    </div>
                    <div className="relative mt-8 md:mt-12">
                        <a
                            href="https://www.instagram.com/p/C6MxDq5vgY0/?utm_source=ig_web_copy_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-100 rounded-2xl shadow-2xl p-4 transform rotate-3 hover:rotate-0 transition-transform flex flex-col items-center hover:scale-105"
                            style={{ textDecoration: 'none', maxWidth: '100%' }}
                        >
                            <div className="rounded-xl overflow-hidden w-full" style={{ maxWidth: '350px' }}>
                                <img
                                    src="/assets/images/laraLogo.png"
                                    alt="Lara Frasson"
                                    className="w-full h-auto rounded-xl"
                                    style={{ display: 'block', maxHeight: '400px', objectFit: 'contain', margin: '0 auto' }}
                                />
                            </div>
                            <div className="mt-6 text-center w-full">
                                <h3 className="text-xl font-semibold text-primary-700 text-font">Lara Frasson</h3>
                                <p className="text-secondary-700 text-font">Psicóloga Infanto Juvenil</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
