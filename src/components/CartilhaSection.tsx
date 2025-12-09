import { BookOpen, Download, CheckCircle, MapPin, Plane, Heart } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

function CartilhaSection() {
    return (
        <section id="cartilha" className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Hero da Cartilha */}
                <div className="text-center mb-16 max-w-4xl mx-auto">
                    <div className="flex justify-center mb-6">
                        <img 
                            src="/assets/images/manualLogo.webp" 
                            alt="Capa da Cartilha - Viagens Autistas" 
                            className="rounded-2xl shadow-2xl max-w-xs w-64"
                        />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Viagens Autistas: Seu Guia Completo
                    </h2>
                    <p className="text-lg md:text-xl text-gray-800 mb-6 max-w-2xl mx-auto">
                        Manual de sobrevivência para autistas viajarem. Dicas práticas, antecipações e estratégias para tornar suas viagens mais tranquilas e prazerosas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://pay.hotmart.com/K103062292U?bid=1763757304367"
                            className="bg-primary-500 hover:bg-primary-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 transition-all transform hover:scale-105 shadow-lg text-base"
                        >
                            <Download size={20} />
                            Adquirir Cartilha
                        </a>
                        <a
                            href="#detalhes"
                            className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-full font-semibold border-2 border-primary-500 transition-all text-base"
                        >
                            Saiba Mais
                        </a>
                    </div>
                </div>

                {/* Por que nossa cartilha? */}
                <div id="detalhes" className="mb-12 max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Por que nossa cartilha?
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Dicas Práticas */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="bg-primary-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                                <MapPin className="text-primary-700" size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">
                                Dicas Práticas
                            </h4>
                            <p className="text-gray-800 text-center">
                                Estratégias práticas para incentivar autonomia e independência.
                            </p>
                        </div>

                        {/* Baseado em Ciência */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="bg-secondary-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                                <BookOpen className="text-secondary-700" size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">
                                Baseado em Ciência
                            </h4>
                            <p className="text-gray-800 text-center">
                                Desenvolvido com base nos princípios da Análise do Comportamento e da neuropsicologia.
                            </p>
                        </div>

                        {/* Fácil Acesso */}
                        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="bg-tertiary-100 rounded-full w-12 h-12 flex items-center justify-center mb-4 mx-auto">
                                <Download className="text-tertiary-700" size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-gray-900 mb-3 text-center">
                                Fácil Acesso
                            </h4>
                            <p className="text-gray-800 text-center">
                                Download imediato em PDF. Leve sua cartilha para onde for, online ou offline.
                            </p>
                        </div>
                    </div>
                </div>

                {/* O que você vai encontrar */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <div className="bg-white p-6 md:p-8 rounded-2xl border-2 border-primary-500">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">
                            O que você vai encontrar
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                        {[
                            'Dicas práticas para planejar viagens',
                            'Estratégias de antecipação',
                            'Gestão de crises durante viagens',
                            'Lista de verificação pré-viagem',
                            'Comunicação em ambientes novos',
                            'Adaptações e acomodações',
                            'Exemplos práticos e casos reais',
                            'Recursos visuais e templates'
                        ].map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <CheckCircle className="text-primary-500 flex-shrink-0 mt-1" size={20} />
                                <span className="text-gray-900 text-base">{item}</span>
                            </div>
                        ))}
                    </div>
                    </div>
                </div>

                {/* Sobre a Autora */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-200">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Criado por especialista
                        </h3>
                        <div className="flex justify-center mb-4">
                            <img 
                                src="/assets/images/laraProfissional.jpeg" 
                                alt="Lara Helena de Souza Frasson" 
                                className="rounded-full w-40 h-40 object-cover object-top shadow-lg border-4 border-secondary-500"
                            />
                        </div>
                        <p className="text-lg text-secondary-700 font-semibold">
                            Lara Helena de Souza Frasson
                        </p>
                        <p className="text-base text-gray-700">CRP 08/33121 - Autora</p>
                    </div>
                    <p className="text-gray-800 text-center max-w-2xl mx-auto leading-relaxed text-base">
                        Psicóloga, autista, supervisora ABA QASP-S e coordenadora ABA CABA-BR. Especialista em autismo, 
                        neuropsicologia e ABA. Autora de livros e jogos terapêuticos, com vasta experiência em viagens 
                        e estratégias para pessoas autistas.
                    </p>
                    </div>
                </div>

                {/* Perguntas Frequentes */}
                <div className="mb-12 max-w-4xl mx-auto">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                        Perguntas frequentes
                    </h3>
                    <div className="space-y-4">
                        {/* FAQ Item 1 */}
                        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                Como recebo a cartilha?
                            </h4>
                            <p className="text-gray-800 text-sm">
                                Após a confirmação do pagamento, o download estará disponível imediatamente na sua área de perfil.
                            </p>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                Qual formato do arquivo?
                            </h4>
                            <p className="text-gray-800 text-sm">
                                A cartilha é fornecida em formato PDF, compatível com todos os dispositivos.
                            </p>
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="bg-white p-5 rounded-lg shadow-md border border-gray-200">
                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                                Posso imprimir a cartilha?
                            </h4>
                            <p className="text-gray-800 text-sm">
                                Sim! Você pode imprimir para uso pessoal. O conteúdo não pode ser redistribuído ou comercializado.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Final */}
                <div className="max-w-4xl mx-auto">
                    <div id="comprar" className="bg-primary-500 p-8 rounded-2xl shadow-2xl text-center">
                    <Heart className="text-white mx-auto mb-4" size={48} />
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                        Pronto para transformar suas viagens?
                    </h3>
                    <p className="text-lg text-white mb-6 max-w-xl mx-auto">
                        Adquira agora o Manual de Sobrevivência Autista por apenas
                    </p>
                    <div className="mb-6">
                        <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                            R$ 24,90
                        </div>
                        <p className="text-xl text-white">
                            ou <span className="font-semibold">3x de R$ 8,89</span>
                        </p>
                    </div>
                    <a
                        href="https://pay.hotmart.com/K103062292U?bid=1763757304367"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                    >
                        <Download size={24} />
                        Adquirir Agora
                    </a>
                    <p className="text-white mt-6 text-sm">
                        Pagamento seguro • Download imediato • Cartilha digital
                    </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartilhaSection;
