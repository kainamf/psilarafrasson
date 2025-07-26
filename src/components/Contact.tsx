import React from 'react';
import { MessageCircle, Instagram, Mail, MapPin } from 'lucide-react';

const PHONE = '(41)7403-7997';
const EMAIL = 'lara.frasson.psico@gmail.com';
const ADDRESS = 'Rua Albino Silva, 455. Bom Retiro, Curitiba/PR';
const WHATSAPP_LINK = 'https://wa.me/554174037997';
const INSTAGRAM_LINK = 'https://www.instagram.com/psicolarafrasson/';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/lara-frasson-0881b11b0/';
const FACEBOOK_LINK = 'https://www.facebook.com/psicolarafrasson/';

function Contact() {
    return (
        <section id="contato" className="py-20 bg-gradient-to-br from-background to-primary">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary-700 text-font mb-4">Entre em Contato</h2>
                    <p className="text-xl text-primary-900 text-font">Agende sua consulta e dê o primeiro passo</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    <div className="space-y-8 flex flex-col h-full">
                        <div className="bg-primary-100 p-6 rounded-2xl shadow-lg">
                            <h3 className="text-2xl font-semibold text-primary-700 text-font mb-6">Informações de Contato</h3>
                            <div className="space-y-4">
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                                >
                                    <div className="bg-primary p-3 rounded-full group-hover:bg-accent transition-colors">
                                        <MessageCircle className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-primary-700 text-font">WhatsApp</div>
                                        <div className="text-primary-900 text-font">{PHONE}</div>
                                    </div>
                                </a>
                                <a
                                    href={INSTAGRAM_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors group"
                                >
                                    <div className="bg-gradient-to-r from-secondary to-primary p-3 rounded-full">
                                        <Instagram className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-primary-700 text-font">Instagram</div>
                                        <div className="text-primary-900 text-font">@psicolarafrasson</div>
                                    </div>
                                </a>
                                <a
                                    href={LINKEDIN_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors group"
                                >
                                    <div className="bg-blue-700 p-3 rounded-full group-hover:bg-blue-800 transition-colors">
                                        {/* Ícone LinkedIn */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592zm-7.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75z"/></svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-primary-700 text-font">LinkedIn</div>
                                        <div className="text-primary-900 text-font">lara-frasson-0881b11b0</div>
                                    </div>
                                </a>
                                <a
                                    href={FACEBOOK_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors group"
                                >
                                    <div className="bg-blue-600 p-3 rounded-full group-hover:bg-blue-700 transition-colors">
                                        {/* Ícone Facebook */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.771c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z"/></svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-primary-700 text-font">Facebook</div>
                                        <div className="text-primary-900 text-font">psicolarafrasson</div>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                                    <div className="bg-primary p-3 rounded-full">
                                        <Mail className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent">E-mail</div>
                                        <div className="text-accent">{EMAIL}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                                    <div className="bg-accent p-3 rounded-full">
                                        <MapPin className="text-white" size={24} />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent">Endereço</div>
                                        <div className="text-accent">{ADDRESS}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-accent text-white p-8 rounded-2xl">
                            <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Segunda a Sexta:</span>
                                    <span>8h às 18h</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Sábado:</span>
                                    <span>8h às 12h</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Domingo:</span>
                                    <span>Fechado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-primary-100 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full min-h-full">
                        <div className="p-6 border-b">
                            <h3 className="text-xl font-semibold text-accent">Localização</h3>
                        </div>
                        <div className="flex-1">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.234073964837!2d-43.48085768446444!3d-23.02156398495309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdc2b7e7e7e7e7e%3A0x7e7e7e7e7e7e7e7e!2sAv.%20das%20Am%C3%A9ricas%2C%2019019%20-%20Recreio%20dos%20Bandeirantes%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2022790-701!5e0!3m2!1spt-BR!2sbr!4v1721568000000!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Localização da Clínica"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
