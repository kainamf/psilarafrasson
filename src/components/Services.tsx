import React from 'react';
import { Users, Award, Heart, Star } from 'lucide-react';

const CRP = '08/33121';
const WHATSAPP_LINK = 'https://wa.me/554174037997';
const INSTAGRAM_LINK = 'https://www.instagram.com/psicolarafrasson/';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/lara-frasson-0881b11b0/';
const FACEBOOK_LINK = 'https://www.facebook.com/psicolarafrasson/';
const ADDRESS = 'Rua Albino Silva, 455. Bom Retiro, Curitiba/PR';


function Services() {
    return (
        <section id="services" className="py-20 bg-primary-300 relative">
            <div className="absolute left-0 right-0 -bottom-1" style={{height: '60px', zIndex: 2}}>
                <svg viewBox="0 0 1854 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="60">
                    <path d="M0 0L1854 0V60L0 30V0Z" fill="#f2d462" />
                </svg>
            </div>
            <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-accent mb-4">Serviços</h2>
                    <p className="text-xl text-accent max-w-3xl mx-auto">
                        Conheça os serviços oferecidos para o desenvolvimento comportamental e emocional de crianças, adolescentes e famílias.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gradient-to-br from-background to-primary p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                        <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <Users className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-4">Atendimento Infanto Juvenil</h3>
                        <p className="text-accent leading-relaxed">
                            Atendimento clínico de crianças e adolescentes com desenvolvimento atípico e/ou demandas emocionais sob a perspectiva da análise do comportamento.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-secondary to-background p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                        <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <Award className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-4">Estimulação de Bebês</h3>
                        <p className="text-accent leading-relaxed">
                            Estimulação precoce de bebês com desenvolvimento típico e/ou com sinal de alerta para o desenvolvimento.
                        </p>
                    </div>
                    <div className="bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl hover:shadow-xl transition-all transform hover:-translate-y-2">
                        <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-6">
                            <Heart className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-4">Orientação Parental</h3>
                        <p className="text-accent leading-relaxed">
                            Orientação parental com o objetivo de auxiliar as famílias a manejarem o comportamento disruptivo das crianças, bem como a desenvolver práticas parentais positivas.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;
