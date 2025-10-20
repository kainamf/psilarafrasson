import { Heart, BookOpen, Users, Award, Sparkles, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import { EMPATEA_HOTMART_LINK } from '../constants';

function Empatea() {
    const handleCTA = () => {
        // Redireciona para a página de venda do Hotmart
        window.open(EMPATEA_HOTMART_LINK, '_blank');
    };

    return (
        <div className="min-h-screen bg-white">
            <Header />
            {/* Hero Section - VERDE */}
            <section className="relative bg-empatea-green py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center space-y-6">
                        <div className="inline-block">
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                                EmpaTEA
                            </h1>
                            <div className="h-1 bg-white/80 rounded-full"></div>
                        </div>
                        
                        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light">
                            Uma jornada de capacitação profissional em ABA humanizada, ética e neuroafirmativa
                        </p>
                        
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                            Pensada por uma mulher autista para formar profissionais com alma
                        </p>

                        <button
                            onClick={handleCTA}
                            className="mt-8 bg-white text-empatea-green px-8 py-4 rounded-full text-lg font-bold hover:bg-empatea-yellow hover:text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto"
                        >
                            Inscreva-se agora com desconto especial
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </section>

            {/* O que é o EmpaTEA - AMARELO */}
            <section className="py-20 px-4 bg-empatea-yellow">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            O que é o EmpaTEA?
                        </h2>
                        <div className="h-1 w-24 bg-gray-800 mx-auto rounded-full"></div>
                    </div>

                    <div className="prose prose-lg max-w-4xl mx-auto space-y-6">
                        <p className="text-xl leading-relaxed text-gray-800">
                            Aqui, você não aprende só o que é reforço, extinção ou função do comportamento. 
                            <span className="font-bold text-empatea-green"> Você aprende a escutar de verdade.</span> 
                            {' '}A cuidar sem corrigir. A ensinar respeitando a singularidade de quem está diante de você.
                        </p>

                        <div className="bg-white/90 p-8 rounded-2xl my-12 shadow-lg border-l-4 border-empatea-green">
                            <p className="text-lg italic text-gray-800 font-medium">
                                "Se você quer ser o tipo de profissional que inspira confiança em famílias autistas, 
                                é preciso mais do que técnica — é preciso ética, empatia e responsabilidade."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Para quem é - AZUL */}
            <section className="py-20 px-4 bg-empatea-blue">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            🌈 Para quem é?
                        </h2>
                        <div className="h-1 w-24 bg-white/80 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        <p className="text-xl text-white text-center mb-8 leading-relaxed">
                            Psicólogos, terapeutas ocupacionais, fonoaudiólogos, pedagogos, estudantes e todos os 
                            profissionais da saúde e educação que desejam atuar com ética, empatia e respeito às diferenças.
                        </p>
                        
                        <div className="text-center mt-8">
                            <button
                                onClick={handleCTA}
                                className="bg-white text-empatea-blue px-8 py-4 rounded-full text-lg font-bold hover:bg-empatea-yellow hover:text-white hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                            >
                                Quero me capacitar agora
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* O que o EmpaTEA entrega - BRANCO */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                            💡 O que o EmpaTEA entrega?
                        </h2>
                        <div className="h-1 w-24 bg-empatea-green mx-auto rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {[
                            'Capacitação prática em ABA com foco em escuta, vínculo e respeito',
                            'Abordagem baseada em ciência, vivência autista e práticas afirmativas',
                            'Supervisão ao vivo mensal para dúvidas e trocas',
                            'Certificado de conclusão',
                            'Aula bônus com profissionais parceiros',
                            'E-book completo e materiais de apoio',
                            'Aulas curtas, profundas e acessíveis'
                        ].map((item, index) => (
                            <div 
                                key={index}
                                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-shadow border-l-4 border-empatea-green hover:border-empatea-blue"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-6 h-6 bg-empatea-green rounded-full flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">✓</span>
                                    </div>
                                </div>
                                <p className="text-gray-700 text-lg">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metodologia A.L.M.A. - VERMELHO */}
            <section className="py-20 px-4 bg-empatea-red">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            🌱 Metodologia A.L.M.A.
                        </h2>
                        <p className="text-2xl text-white/95 font-light">
                            Autenticidade • Linguagem • Mudança • Acolhimento
                        </p>
                        <div className="h-1 w-24 bg-white/80 mx-auto rounded-full mt-6"></div>
                    </div>

                    <p className="text-xl text-center text-white/95 max-w-3xl mx-auto mb-12">
                        A metodologia exclusiva do EmpaTEA forma profissionais com alma:
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-empatea-green">
                            <div className="w-12 h-12 bg-empatea-green rounded-full flex items-center justify-center mb-4">
                                <Heart className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Autenticidade</h3>
                            <p className="text-gray-700 text-lg">
                                Respeita a identidade, não ensina a mascarar
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-empatea-yellow">
                            <div className="w-12 h-12 bg-empatea-yellow rounded-full flex items-center justify-center mb-4">
                                <BookOpen className="w-6 h-6 text-gray-800" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Linguagem</h3>
                            <p className="text-gray-700 text-lg">
                                Comunicação que conecta, não que impõe
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-empatea-blue">
                            <div className="w-12 h-12 bg-empatea-blue rounded-full flex items-center justify-center mb-4">
                                <Sparkles className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Mudança</h3>
                            <p className="text-gray-700 text-lg">
                                Transformação real, começando pelo terapeuta
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border-l-4 border-empatea-red">
                            <div className="w-12 h-12 bg-empatea-red rounded-full flex items-center justify-center mb-4">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-3">Acolhimento</h3>
                            <p className="text-gray-700 text-lg">
                                Presença, segurança e vínculo como base
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-xl text-white/95 max-w-3xl mx-auto">
                            Uma abordagem que une ciência e sensibilidade para formar terapeutas éticos, humanos e neuroafirmativos.
                        </p>
                    </div>
                </div>
            </section>

            {/* Um curso que nasceu do incômodo - VERDE */}
            <section className="py-20 px-4 bg-empatea-green">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            ✨ Um curso que nasceu do incômodo...
                        </h2>
                        <div className="h-1 w-24 bg-white/80 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-6">
                        <p className="text-xl text-white leading-relaxed">
                            Do incômodo de ver a ciência que eu amo sendo usada sem ética.
                        </p>
                        <p className="text-xl text-white leading-relaxed">
                            Da frustração de ver crianças autistas tratadas como números.
                        </p>
                        <p className="text-xl text-white leading-relaxed">
                            E da esperança de que é possível reescrever a prática clínica com empatia.
                        </p>

                        <div className="bg-white/95 p-8 rounded-2xl my-12 shadow-lg border-l-4 border-empatea-yellow">
                            <p className="text-2xl text-gray-800 italic text-center leading-relaxed font-medium">
                                "O EmpaTEA é o que eu gostaria que tivessem ensinado quando me formei. 
                                E é o que eu acredito que pode mudar o futuro da nossa atuação profissional."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Depoimento / Reflexão - AMARELO */}
            <section className="py-20 px-4 bg-empatea-yellow">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border-l-4 border-empatea-red">
                        <div className="text-center mb-8">
                            <Award className="w-16 h-16 text-empatea-red mx-auto mb-4" />
                            <h3 className="text-3xl font-bold text-gray-800">
                                Profissionais rudes deixam marcas. 
                                <br />
                                Profissionais empáticos deixam caminhos.
                            </h3>
                        </div>
                        
                        <div className="space-y-6 text-lg text-gray-700">
                            <p>
                                Sempre acreditei que o que diferencia um bom terapeuta não é só o domínio técnico — 
                                é a forma de ver o outro.
                            </p>
                            <p>
                                É conseguir enxergar para além do diagnóstico, reconhecer a história por trás dos comportamentos 
                                e entender que cada protocolo precisa caber em uma vida real.
                            </p>
                            <p className="font-bold text-empatea-green text-xl">
                                O EmpaTEA nasceu desse lugar: o encontro entre ciência e humanidade.
                            </p>
                            <p>
                                Um curso para quem quer unir método e sensibilidade, precisão e escuta, técnica e empatia.
                            </p>
                            <p>
                                Porque ser terapeuta não é apenas aplicar intervenções — é ser ponte. 
                                E se você não quer ser "mais um", mas alguém que realmente transforma percursos, 
                                esse curso é para você.
                            </p>
                        </div>
                        
                        <div className="text-center mt-8">
                            <button
                                onClick={handleCTA}
                                className="bg-empatea-green text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-empatea-blue hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center gap-2"
                            >
                                Começar minha transformação
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final - AZUL */}
            <section className="py-20 px-4 bg-empatea-blue text-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <h2 className="text-4xl md:text-5xl font-bold">
                        📜 Capacitação 100% online
                    </h2>
                    <div className="flex flex-wrap justify-center gap-8 text-xl">
                        <div className="flex items-center gap-2">
                            <Award className="w-6 h-6" />
                            <span>Certificado incluído</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Sparkles className="w-6 h-6" />
                            <span>Início imediato</span>
                        </div>
                    </div>
                    
                    <p className="text-2xl font-light max-w-2xl mx-auto">
                        🎯 Vagas limitadas com valor promocional
                    </p>

                    <button
                        onClick={handleCTA}
                        className="mt-8 bg-white text-empatea-blue px-10 py-5 rounded-full text-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto hover:bg-empatea-yellow hover:text-white"
                    >
                        Garantir minha vaga agora
                        <ArrowRight className="w-6 h-6" />
                    </button>

                    <div className="pt-8">
                        <p className="text-lg opacity-90 max-w-3xl mx-auto">
                            ✨ Transforme sua prática profissional e seja o terapeuta que você gostaria de ter conhecido.
                        </p>
                        <p className="text-sm opacity-75 mt-4">
                            Acesso imediato após a confirmação da compra
                        </p>
                    </div>
                </div>
            </section>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default Empatea;