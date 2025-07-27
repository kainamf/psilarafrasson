import React from 'react';
import { MessageCircle, Instagram, Mail, MapPin } from 'lucide-react';

const PHONE = '(41)7403-7997';
const EMAIL = 'psicoinfantil@larafrassonpsicologainfantil.com';
const ADDRESS = 'Rua Albino Silva, 455. Bom Retiro, Curitiba/PR';
const WHATSAPP_LINK = 'https://wa.me/554174037997';
const INSTAGRAM_LINK = 'https://www.instagram.com/psicolarafrasson/';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/lara-frasson-0881b11b0/';
const FACEBOOK_LINK = 'https://www.facebook.com/psicolarafrasson/';

function Contact() {
    return (
        <section id="contato" className="py-20 bg-tertiary-300 relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-accent-700 text-font mb-4">Entre em Contato</h2>
                    <p className="text-xl text-accent-900 text-font">Agende sua consulta e dê o primeiro passo</p>
                </div>
                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    <div className="space-y-4 flex flex-col h-full">
                        <div className="bg-tertiary-100 p-6 rounded-2xl shadow-lg" style={{ maxHeight: '700px', overflowY: 'auto' }}>
                            <h3 className="text-2xl font-semibold text-accent-700 text-font mb-6">Informações de Contato</h3>
                            <div className="flex flex-col gap-y-1">
                                <a
                                    href={WHATSAPP_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                                >
                                    <div className="bg-tertiary-900 p-3 rounded-full transition-colors">
                                        {/* Ícone WhatsApp SVG */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.967-.271-.099-.468-.149-.666.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.666-1.611-.912-2.206-.242-.579-.487-.5-.666-.51-.173-.008-.373-.01-.572-.01-.198 0-.52.075-.792.373-.271.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.205 5.077 4.377.711.306 1.263.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.271-.198-.568-.347z"/></svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent-700 text-font">WhatsApp</div>
                                        <div className="text-accent-900 text-font">{PHONE}</div>
                                    </div>
                                </a>
                                <a
                                    href={INSTAGRAM_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-secondary/20 transition-colors group"
                                >
                                    <div className="bg-tertiary-900 p-3 rounded-full transition-colors">
                                        {/* Ícone Instagram SVG atualizado, traço branco */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent-700 text-font">Instagram</div>
                                        <div className="text-accent-900 text-font">@psicolarafrasson</div>
                                    </div>
                                </a>
                                <a
                                    href={LINKEDIN_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                                >
                                    <div className="bg-tertiary-900 p-3 rounded-full transition-colors">
                                        {/* Ícone LinkedIn */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.601 2.002 3.601 4.604v5.592zm-7.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75z"/></svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent-700 text-font">LinkedIn</div>
                                        <div className="text-accent-900 text-font">lara-frasson-0881b11b0</div>
                                    </div>
                                </a>
                                <a
                                    href={FACEBOOK_LINK}
                                    target="_blank"
                                    className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
                                >
                                    <div className="bg-tertiary-900 p-3 rounded-full transition-colors">
                                        {/* Ícone Facebook */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.771c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.312h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.734-.592-1.326-1.325-1.326z"/></svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent-700 text-font">Facebook</div>
                                        <div className="text-accent text-font">Lara Frasson</div>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                                    <div className="bg-tertiary-900 p-3 rounded-full transition-colors">
                                        {/* Ícone E-mail SVG */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z"/></svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent-700">E-mail</div>
                                        <div className="text-accent-900">{EMAIL}</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-accent/10 rounded-lg">
                                    <div className="bg-tertiary-900 p-3 rounded-full transition-colors">
                                        {/* Ícone Endereço SVG */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="white" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                                    </div>
                                    <div>
                                        <div className="font-semibold text-accent-700">Endereço</div>
                                        <div className="text-accent-900">{ADDRESS}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-tertiary-100 p-6 rounded-2xl shadow-lg" style={{ maxHeight: '700px', overflowY: 'auto' }}>
                            <h3 className="text-2xl font-semibold text-accent-700 text-font mb-6">Horário de Atendimento</h3>
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
                    <div className="bg-tertiary-100 rounded-2xl shadow-lg overflow-hidden flex flex-col h-full min-h-full">
                        <div className="p-6 border-b">
                            <h3 className="text-xl font-semibold text-accent">Localização</h3>
                        </div>
                        <div className="flex-1">
                            <iframe
                                src="https://www.google.com/maps?q=Rua+Albino+Silva,+455,+Bom+Retiro,+Curitiba,+PR&output=embed"
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
