import { Award } from 'lucide-react';
import InstagramEmbed from './InstagramEmbed';

function About() {
    return (
        <section id="sobre" className="py-20 bg-secondary-300 relative">

            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold text-accent mb-6">Quem sou eu?</h2>
                        <div className="space-y-4 text-accent leading-relaxed">
                            <p className="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl break-words whitespace-pre-line">
                                Olá, eu sou a Tia Lara! Sou autista, psicóloga especializada em crianças e adolescentes, educadora parental e apaixonada pela disciplina positiva. Tenho pós-graduação em clínica analítico-comportamental infantil, habilidades terapêuticas, e sou pós-graduanda em Neuropsicologia e ABA. Como Supervisora ABA QASP-S certificada e coordenadora ABA CABA-BR, estou aqui para apoiar você e sua família na jornada do desenvolvimento emocional e comportamental dos pequenos.
                            </p>
                        </div>
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 w-full mx-auto">
                            {/* Formação */}
                            <div className="bg-primary-100 p-4 rounded-lg shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="text-primary" size={20} />
                                    <span className="font-semibold text-accent">Certificações</span>
                                </div>
                                <p className="text-sm text-accent">Supervisora ABA certificada internacionalmente QASP-S</p>
                                <p className="text-sm text-accent">Coordenadora ABA certificada CABA-BR</p>
                            </div>
                            {/* Pós-graduação */}
                            <div className="bg-primary-100 p-4 rounded-lg shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="text-primary" size={20} />
                                    <span className="font-semibold text-accent">Pós-graduação</span>
                                </div>
                                <ul className="list-disc ml-5 text-sm text-accent">
                                    <li>Habilidades terapêuticas na clínica analítico comportamental</li>
                                    <li>Análise do comportamento aplicada</li>
                                    <li>Clínica analítico comportamental infantil</li>
                                    <li>Autismo</li>
                                    <li>Neuropsicologia</li>
                                </ul>
                            </div>
                            {/* Mestrado */}
                            <div className="bg-primary-100 p-4 rounded-lg shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="text-primary" size={20} />
                                    <span className="font-semibold text-accent">Mestrado</span>
                                </div>
                                <p className="text-sm text-accent">Mestranda em Ciências Sociais Aplicadas na UEPG</p>
                            </div>
                            {/* Posições importantes */}
                            <div className="bg-primary-100 p-4 rounded-lg shadow-md">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="text-primary" size={20} />
                                    <span className="font-semibold text-accent">Posições importantes</span>
                                </div>
                                <ul className="list-disc ml-5 text-sm text-accent">
                                    <li>Supervisora da comissão de desenvolvimento atípico da ABPMC</li>
                                    <li>Diretora de projetos, inovação e sustentabilidade do instituto TEAproxima</li>
                                </ul>
                            </div>
                            {/* Obras - ocupa toda a largura do grid */}
                            <div className="bg-primary-100 p-4 rounded-lg shadow-md col-span-1 sm:col-span-2 md:col-span-2 w-full">
                                <div className="flex items-center gap-3 mb-2">
                                    <Award className="text-primary" size={20} />
                                    <span className="font-semibold text-accent">Obras</span>
                                </div>
                                <ul className="list-disc ml-5 text-sm text-accent">
                                    <li>Autora do jogo Cabeça Dura pela Terapia Criativa</li>
                                    <li>Coautora do livro Rick: um livro sobre habilidades sociais da editora Lado A</li>
                                    <li>Coordenadora do livro Olivia: um livro sobre autismo e empatia (lançamento em novembro)</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center mt-8 md:mt-12 w-full">
                        <InstagramEmbed url="https://www.instagram.com/p/DIcmvfHM3-i/" maxWidth={420} className="rounded-2xl shadow-2xl bg-primary-100" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
