import { Award, Book, BadgeCheck, HeartHandshake, Target, Lightbulb, Gem } from 'lucide-react';
import InstagramEmbed from './InstagramEmbed';

function About() {
    return (
        <section id="sobre" className="py-20 bg-secondary-300 relative">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="grid md:grid-cols-[35%_65%] gap-12 items-start mb-12 h-full">
                    {/* Lado esquerdo */}
                    <div className="space-y-2 flex flex-col gap-0 h-full">
                        <div>
                            <h2 className="text-4xl font-bold text-accent mb-4">Quem é a psicóloga Lara Frasson?</h2>
                            <div className="space-y-2 text-accent leading-relaxed text-base md:text-lg mb-2">
                                <p>
                                    Sou psicóloga, autista, especialista em neurodesenvolvimento e apaixonada por escutar o que muitas vezes o mundo insiste em silenciar.
                                </p>
                                <p>
                                    Atendo crianças, adolescentes e mulheres autistas com base na Análise do Comportamento Aplicada (ABA) com um olhar ético, empático e centrado na vivência de quem está do outro lado. Busco proporcionar uma escuta verdadeira e planejamento individualizado, o objetivo não é corrigir ninguém, e sim construir caminhos de autonomia, segurança e pertencimento.
                                </p>
                                <p>
                                    Além do atendimento clínico, desenvolvo projetos, supervisões e formações que unem ciência, sensibilidade e compromisso com a inclusão de verdade.
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center items-start w-full overflow-x-hidden">
                            <div className="w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px]">
                                <InstagramEmbed
                                    url="https://www.instagram.com/p/DIcmvfHM3-i/"
                                    className="rounded-2xl shadow-2xl bg-primary-100"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Lado direito: grid 3x3 de cards */}
                    <div className="h-full flex flex-col">
                        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-4">
                            {/* Card Formação e Especializações ocupando linha inteira */}
                            <div className="bg-primary-100 p-6 rounded-2xl shadow-md w-full">
                                <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2">
                                    <span className="flex-shrink-0 flex items-center"><Award className="text-primary" size={24} /></span>
                                    <span>Formação e Especializações</span>
                                </h3>
                                <ul className="list-disc ml-5 text-accent text-sm">
                                    <li>Psicóloga formada pela Universidade Positivo</li>
                                    <li>Pós-graduada em:
                                        <ul className="list-disc ml-5 text-sm">
                                            <li>Análise do Comportamento Aplicada (ABA)</li>
                                            <li>Clínica analítico-comportamental infantil</li>
                                            <li>Neuropsicologia</li>
                                            <li>Autismo</li>
                                            <li>Habilidades terapêuticas na clínica ABA</li>
                                        </ul>
                                    </li>
                                    <li>Mestranda em Ciências Sociais Aplicadas (UEPG)</li>
                                    <li>Pesquisa sobre ensino de habilidades sociais a meninas autistas por meio de realidade virtual, com foco na prevenção de relacionamentos abusivos.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Demais cards distribuídos em 2 por linha, 4 linhas */}
                            <div className="bg-primary-100 p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2"><Award className="text-primary" size={20} /> Posições e Projetos</h3>
                                <ul className="list-disc ml-5 text-accent text-sm">
                                    <li>Supervisora da Comissão de Desenvolvimento Atípico da ABPMC</li>
                                    <li>Diretora de projetos, inovação e sustentabilidade do Instituto TEAproxima, iniciativa que promove inclusão real para pessoas autistas na sociedade</li>
                                    <li>Criadora do curso EmpaTEA – a primeira formação do Brasil em ABA com olhar autista, ética compassiva e foco no atendimento empático</li>
                                </ul>
                            </div>
                            <div className="bg-primary-100 p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2"><Award className="text-primary" size={20} /> Atuação Clínica</h3>
                                <ul className="list-disc ml-5 text-accent text-sm">
                                    <li>Atendimento clínico de crianças, adolescentes e mulheres autistas</li>
                                    <li>Orientação parental baseada em Disciplina Positiva</li>
                                    <li>Grupos terapêuticos de habilidades sociais para crianças, adolescentes, adultos e apoio a mães</li>
                                    <li>Estimulação precoce do neurodesenvolvimento</li>
                                    <li>Supervisão clínica para psicólogas(os) e instituições</li>
                                    <li>Palestras, formações e consultorias para escolas e clínicas</li>
                                </ul>
                            </div>
                            <div className="bg-primary-100 p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2"><BadgeCheck className="text-primary" size={20} /> Certificações</h3>
                                <ul className="list-disc ml-5 text-accent text-sm">
                                    <li>Supervisora ABA certificada QASP-S (internacional)</li>
                                    <li>Coordenadora ABA certificada CABA-BR</li>
                                    <li>Educadora parental pela Positive Discipline Association</li>
                                </ul>
                            </div>
                            <div className="bg-primary-100 p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2"><Book className="text-primary" size={20} /> Obras Publicadas</h3>
                                <ul className="list-disc ml-5 text-accent text-sm">
                                    <li>Criadora do jogo terapêutico Cabeça Dura (Terapia Criativa)</li>
                                    <li>Coautora do livro Rick (Editora Lado A) – sobre habilidades sociais para crianças</li>
                                    <li>Coordenadora do livro Olívia – um livro infantil sobre autismo e empatia, protagonizado por uma coruja autista (lançamento em novembro)</li>
                                </ul>
                            </div>
                            <div className="bg-primary-100 p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2"><HeartHandshake className="text-primary" size={20} /> Meu Compromisso</h3>
                                <p className="text-accent text-sm">
                                    Meu compromisso é escutar com empatia, respeitar a singularidade de cada pessoa e promover uma psicologia ética, humana e inclusiva. Acredito que cada história merece atenção verdadeira e que o cuidado só faz sentido quando é construído junto, com sensibilidade e responsabilidade.
                                </p>
                            </div>
                            <div className="bg-primary-100 p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2"><Target className="text-primary" size={20} /> Missão</h3>
                                <p className="text-accent text-sm">
                                    Promover o desenvolvimento, o bem-estar e o protagonismo de pessoas autistas, oferecendo intervenções éticas, sensíveis e baseadas em evidências. Quero construir caminhos de autonomia e pertencimento, para que cada pessoa possa ser quem é, com segurança e respeito.
                                </p>
                            </div>
                            <div className="bg-primary-100 p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2"><Lightbulb className="text-primary" size={20} /> Propósito</h3>
                                <p className="text-accent text-sm">
                                    Oferecer um espaço seguro, onde ciência e acolhimento caminham juntos, para transformar o olhar sobre o desenvolvimento infantil e a neurodiversidade. A cada atendimento, supervisão ou projeto, busco plantar uma semente de mudança e inclusão.
                                </p>
                            </div>
                            <div className="bg-primary-100 p-6 rounded-2xl shadow-md">
                                <h3 className="text-xl font-semibold text-accent mb-2 flex items-center gap-2"><Gem className="text-primary" size={20} /> Valores</h3>
                                <ul className="list-disc ml-5 text-accent text-sm">
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
                </div>
            </div>
        </section>
    );
}

export default About;
