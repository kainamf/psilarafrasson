import { Award, Clock, Heart } from 'lucide-react';

function About() {
    return (
        <section id="sobre" className="py-20 bg-tertiary-500 relative">
            <div className="absolute left-0 right-0 -bottom-1" style={{height: '60px', zIndex: 2}}>
                <svg viewBox="0 0 1854 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="60">
                    <path d="M0 0L1854 0V60L0 30V0Z" fill="#49a9b2" />
                </svg>
            </div>
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-accent mb-6">Quem sou eu?</h2>
                        <div className="space-y-4 text-accent leading-relaxed">
                            <p>
                                Olá, eu sou a Tia Lara, sou autista, psicóloga infanto juvenil e educadora parental pela disciplina positiva, atuo com a Análise do Comportamento. Sou pós graduada em clínica analítico comportamental infantil e em habilidades terapêuticas na clínica analítico comportamental, pós graduanda em Neuropsicologia e ABA. Supervisora ABA QASP-S certificada e coordenadora ABA CABA-BR, estou aqui para te auxiliar na jornada do desenvolvimento comportamental e emocional do seu pequeno (a)!
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-primary-100 p-4 rounded-lg shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="text-primary" size={20} />
                                    <span className="font-semibold text-accent">Formação</span>
                                </div>
                                <p className="text-sm text-accent">Psicologia - UFRRJ</p>
                                <p className="text-sm text-accent">Especialização em Neuropsicologia</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-8 md:mt-12">
                        <div className="rounded-2xl shadow-2xl p-0 bg-primary-100" style={{ width: '350px', height: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <iframe
                                src="https://www.instagram.com/p/C75CChOPQh8/embed"
                                width="350"
                                height="480"
                                allowTransparency={true}
                                frameBorder="0"
                                scrolling="no"
                                allow="encrypted-media"
                                title="Instagram Post"
                                className="rounded-xl"
                                style={{ border: 'none' }}
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
