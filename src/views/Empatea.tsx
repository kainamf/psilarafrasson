import { Heart, BookOpen, Users, Award, Sparkles, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import EmpateaBenefits from '../components/EmpateaBenefits';
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
                        <div className="flex justify-center mb-6">
                            <div className="bg-white rounded-full p-6 shadow-xl">
                                <img 
                                    src="/assets/images/empaTeaLogo.png" 
                                    alt="EmpaTEA" 
                                    className="h-32 md:h-40 w-auto"
                                />
                            </div>
                        </div>
                        
                        <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light">
                            Uma jornada de capacitação profissional em ABA humanizada, ética e neuroafirmativa
                        </p>
                        
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
                            Pensada por uma mulher autista para formar profissionais com alma
                        </p>
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
                        </p>

                        <div className="bg-white/90 p-8 rounded-2xl my-12 shadow-lg border-l-4 border-empatea-green">
                            <p className="text-lg italic text-gray-800 font-medium">
                                "Se você quer ser o tipo de profissional que inspira confiança em famílias autistas,
                                é preciso mais do que técnica, é preciso ética, empatia e responsabilidade."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Para quem é - AZUL (shortened) */}
            <section className="py-16 px-4 bg-empatea-blue">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Para quem é?</h2>
                        <div className="h-1 w-24 bg-white/80 mx-auto rounded-full"></div>
                    </div>

                    <p className="text-lg text-white text-center max-w-3xl mx-auto leading-relaxed">
                        Psicólogos, terapeutas ocupacionais, fonoaudiólogos, pedagogos, estudantes e profissionais da saúde
                        e educação que buscam uma prática ética, empática e neuroafirmativa.
                    </p>
                </div>
            </section>

            {/* Benefícios do curso (centralizado) - agora contém o botão de inscrição */}
            <EmpateaBenefits />

            {/* Pequena seção final com mensagem curta */}
            <section className="py-12 px-4 bg-white">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-lg opacity-90 max-w-3xl mx-auto">
                        ✨ Transforme sua prática profissional e seja o terapeuta que você gostaria de ter conhecido.
                    </p>
                    <p className="text-sm opacity-75 mt-4">Acesso imediato após a confirmação da compra</p>
                </div>
            </section>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default Empatea;