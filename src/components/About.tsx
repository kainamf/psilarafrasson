import { Award, Clock, Heart } from 'lucide-react';

function About() {
    return (
        <section id="sobre" className="py-20 bg-secondary-300 relative">

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-accent mb-6">Quem sou eu?</h2>
                        <div className="space-y-4 text-accent leading-relaxed">
                            <p>
                                Olá, eu sou a Tia Lara! Sou autista, psicóloga especializada em crianças e adolescentes, educadora parental e apaixonada pela disciplina positiva. Tenho pós-graduação em clínica analítico-comportamental infantil, habilidades terapêuticas, e sou pós-graduanda em Neuropsicologia e ABA. Como Supervisora ABA QASP-S certificada e coordenadora ABA CABA-BR, estou aqui para apoiar você e sua família na jornada do desenvolvimento emocional e comportamental dos pequenos.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <div className="bg-primary-100 p-4 rounded-lg shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="text-primary" size={20} />
                                    <span className="font-semibold text-accent">Formação</span>
                                </div>
                                <p className="text-sm text-accent">Psicologia - Positivo</p>
                                <p className="text-sm text-accent">Especialização em Clínica Analítico Comportamental</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-8 md:mt-12">
                        <div className="rounded-2xl shadow-2xl p-0 bg-primary-100">
                            <iframe
                                src="https://www.instagram.com/p/DIcmvfHM3-i/embed"
                                width="450"
                                height="700"
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
