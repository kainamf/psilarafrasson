import { ArrowRight } from 'lucide-react';
import { WHATSAPP_LINK } from '../constants';

function Hero() {
    return (
        // Seção principal com cor de fundo suave
        <section id="inicio" className="py-8 md:py-8 bg-stone-100">
            <div className="container mx-auto px-4 overflow-x-hidden">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    
                    {/* Coluna da Esquerda: Logo centralizada acima do texto */}
                    <div className="flex flex-col items-center text-center">
                        <img 
                            src="/assets/images/laraLogo.png" 
                            alt="Logo Lara Frasson" 
                            className="w-72 mx-auto" // Logo maior e centralizada
                        />

                        <h1 className="text-4xl md:text-5xl font-bold text-stone-800 mb-2 leading-tight">
                            Psicóloga Infanto Juvenil
                            <span className="text-stone-600 block">Lara Frasson</span>
                        </h1>
                        <div className="mt-10">
                            <a
                                href={WHATSAPP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-secondary-500 hover:bg-secondary-700 text-background px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-lg w-full sm:w-auto"
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