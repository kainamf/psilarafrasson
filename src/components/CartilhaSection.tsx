import { BookOpen, Download, CheckCircle, MapPin, Plane, Heart } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

function CartilhaSection() {
    return (
        <section id="cartilha" className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                {/* Hero da Cartilha */}
                <div className="text-center mb-16">
                    <div className="flex justify-center mb-6">
                        <div className="bg-blue-600 rounded-full p-4">
                            <Plane className="text-white" size={48} />
                        </div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Viagens Autistas: Seu Guia Completo
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-800 mb-6 max-w-3xl mx-auto">
                        Manual de sobrevivência para viagens com autistas. Dicas práticas, antecipações e estratégias para tornar suas viagens mais tranquilas e prazerosas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="https://pay.hotmart.com/K103062292U?bid=1763757304367"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold flex items-center gap-3 transition-all transform hover:scale-105 shadow-lg text-lg"
                        >
                            <Download size={24} />
                            Adquirir Cartilha
                        </a>
                        <a
                            href="#detalhes"
                            className="bg-white hover:bg-gray-50 text-gray-900 px-8 py-4 rounded-full font-semibold border-2 border-blue-600 transition-all"
                        >
                            Saiba Mais
                        </a>
                    </div>
                </div>

                {/* Por que nossa cartilha? */}
                <div id="detalhes" className="mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                        Por que nossa cartilha?
                    </h3>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Dicas Práticas */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                <MapPin className="text-blue-600" size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                Dicas Práticas
                            </h4>
                            <p className="text-gray-800 text-center">
                                Estratégias testadas e aprovadas para preparar e realizar viagens com pessoas autistas.
                            </p>
                        </div>

                        {/* Baseado em Ciência */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                <BookOpen className="text-blue-600" size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                Baseado em Ciência
                            </h4>
                            <p className="text-gray-800 text-center">
                                Desenvolvido por profissionais especializados em ABA, neuropsicologia e autismo.
                            </p>
                        </div>

                        {/* Fácil Acesso */}
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-200">
                            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto">
                                <Download className="text-blue-600" size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
                                Fácil Acesso
                            </h4>
                            <p className="text-gray-800 text-center">
                                Download imediato em PDF. Leve sua cartilha para onde for, online ou offline.
                            </p>
                        </div>
                    </div>
                </div>

                {/* O que você vai encontrar */}
                <div className="mb-16 bg-white p-8 md:p-12 rounded-3xl border-2 border-blue-600">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                        O que você vai encontrar
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
                            <div key={index} className="flex items-start gap-3">
                                <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={24} />
                                <span className="text-gray-900 text-lg">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Sobre a Autora */}
                <div className="mb-16 bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-200">
                    <div className="text-center mb-8">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Criado por especialista
                        </h3>
                        <p className="text-xl text-blue-600 font-semibold">
                            Lara Helena de Souza Frasson
                        </p>
                        <p className="text-lg text-gray-700">CRP 08/33121 - Autora</p>
                    </div>
                    <p className="text-gray-800 text-center max-w-3xl mx-auto leading-relaxed">
                        Psicóloga, autista, supervisora ABA QASP-S e coordenadora ABA CABA-BR. Especialista em autismo, 
                        neuropsicologia e ABA. Autora de livros e jogos terapêuticos, com vasta experiência em viagens 
                        e estratégias para pessoas autistas.
                    </p>
                </div>

                {/* Perguntas Frequentes */}
                <div className="mb-16">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
                        Perguntas frequentes
                    </h3>
                    <div className="max-w-3xl mx-auto space-y-6">
                        {/* FAQ Item 1 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Como recebo a cartilha?
                            </h4>
                            <p className="text-gray-800">
                                Após a confirmação do pagamento, o download estará disponível imediatamente na sua área de perfil.
                            </p>
                        </div>

                        {/* FAQ Item 2 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Qual formato do arquivo?
                            </h4>
                            <p className="text-gray-800">
                                A cartilha é fornecida em formato PDF, compatível com todos os dispositivos.
                            </p>
                        </div>

                        {/* FAQ Item 3 */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                            <h4 className="text-xl font-bold text-gray-900 mb-3">
                                Posso imprimir a cartilha?
                            </h4>
                            <p className="text-gray-800">
                                Sim! Você pode imprimir para uso pessoal. O conteúdo não pode ser redistribuído ou comercializado.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Final */}
                <div id="comprar" className="bg-blue-600 p-12 rounded-3xl shadow-2xl text-center">
                    <Heart className="text-white mx-auto mb-6" size={64} />
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Pronto para transformar suas viagens?
                    </h3>
                    <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                        Adquira agora o Manual de Sobrevivência Autista por apenas
                    </p>
                    <div className="mb-8">
                        <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                            R$ 24,90
                        </div>
                        <p className="text-2xl text-white">
                            ou <span className="font-semibold">3x de R$ 8,89</span>
                        </p>
                    </div>
                    <a
                        href="https://pay.hotmart.com/K103062292U?bid=1763757304367"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white text-blue-600 px-10 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
                    >
                        <Download size={28} />
                        Adquirir Agora
                    </a>
                    <p className="text-white mt-6 text-sm">
                        Pagamento seguro • Download imediato • Cartilha digital
                    </p>
                </div>
            </div>
        </section>
    );
}

export default CartilhaSection;
