import { Users, User } from 'lucide-react';

function Services() {
    return (
        <section id="services" className="py-20 bg-primary-300 relative">
            <div className="container mx-auto px-4 overflow-x-hidden">
                    <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-accent mb-4">Serviços</h2>
                    <p className="text-xl text-accent max-w-3xl mx-auto">
                        Conheça os serviços oferecidos para o desenvolvimento comportamental e emocional de crianças, adolescentes e famílias.
                    </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <User className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2">Atuação Clínica</h3>
                        <p className="text-accent leading-relaxed text-base text-left">
                            Atendimento clínico de crianças, adolescentes e mulheres autistas, com desenvolvimento atípico e/ou demandas emocionais, sob a perspectiva da análise do comportamento.
                        </p>
                    </div>
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-secondary w-16 h-16 rounded-full flex items-center justify-center mb-2 overflow-hidden">
                            <img src="/assets/icons/baby.webp" alt="Ícone bebê" className="w-10 h-10 object-cover" style={{ filter: 'brightness(0) invert(1)' }} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2">Estimula Baby</h3>
                        <p className="text-accent leading-relaxed text-base text-left">
                            Estimulação precoce de bebês com desenvolvimento típico e/ou com sinal de alerta para o desenvolvimento.
                        </p>
                    </div>
                    <div className="bg-primary-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 flex flex-col items-center text-center">
                        <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mb-2">
                            <Users className="text-white" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-accent mb-2">Orientação Parental</h3>
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
