import { HeartHandshake, Target, Lightbulb, Gem } from 'lucide-react';

function CommitmentSection() {
    return (
        <section id="compromisso" className="py-16 bg-primary-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch justify-center">
                    {/* Meu Compromisso */}
                    <div className="order-1 flex flex-col items-center bg-primary-300 p-6 rounded-2xl shadow-md min-w-[220px]">
                        <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2 text-center justify-center">
                            <HeartHandshake className="text-primary" size={24} /> Meu Compromisso
                        </h3>
                        <p className="text-accent text-base text-justify">
                            Meu compromisso é escutar com empatia, respeitar a singularidade de cada pessoa e promover uma psicologia ética, humana e inclusiva. Acredito que cada história merece atenção verdadeira e que o cuidado só faz sentido quando é construído junto, com sensibilidade e responsabilidade.
                        </p>
                    </div>
                    {/* Propósito */}
                    <div className="order-2 flex flex-col items-center bg-primary-300 p-6 rounded-2xl shadow-md min-w-[220px]">
                        <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2 text-center justify-center">
                            <Lightbulb className="text-primary" size={24} /> Propósito
                        </h3>
                        <p className="text-accent text-base text-justify">
                            Oferecer um espaço seguro, onde ciência e acolhimento caminham juntos, para transformar o olhar sobre o desenvolvimento infantil e a neurodiversidade. A cada atendimento, supervisão ou projeto, busco plantar uma semente de mudança e inclusão.
                        </p>
                    </div>
                    {/* Foto */}
                    <div className="order-3 flex justify-center items-center">
                        <div className="relative">
                            <img
                                src="/assets/images/laraFunny.jpeg"
                                alt="Lara Frasson sorrindo"
                                className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover rounded-full border-8 border-primary-300 shadow-2xl transition-transform duration-500 hover:scale-105 hover:rotate-2 bg-primary-50 mx-auto"
                                style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
                            />
                        </div>
                    </div>
                    {/* Missão */}
                    <div className="order-4 flex flex-col items-center bg-primary-300 p-6 rounded-2xl shadow-md min-w-[220px]">
                        <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2 text-center justify-center">
                            <Target className="text-primary" size={24} /> Missão
                        </h3>
                        <p className="text-accent text-base text-justify">
                            Promover o desenvolvimento, o bem-estar e o protagonismo de pessoas autistas, oferecendo intervenções éticas, sensíveis e baseadas em evidências. Quero construir caminhos de autonomia e pertencimento, para que cada pessoa possa ser quem é, com segurança e respeito.
                        </p>
                    </div>
                    {/* Valores */}
                    <div className="order-5 flex flex-col items-center bg-primary-300 p-6 rounded-2xl shadow-md min-w-[220px]">
                        <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2 text-center justify-center">
                            <Gem className="text-primary" size={24} /> Valores
                        </h3>
                        <ul className="list-disc ml-5 text-accent text-base text-justify">
                            <li>Escuta autêntica</li>
                            <li>Neurodiversidade como potência</li>
                            <li>Ética e evidência</li>
                            <li>Empatia e conexão</li>
                            <li>Autonomia e respeito</li>
                            <li>Transformação social</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CommitmentSection;
