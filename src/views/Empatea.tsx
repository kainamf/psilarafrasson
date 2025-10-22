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

            {/* FAQ - seção embutida com detalhes/summary */}
            <section className="py-12 px-4 bg-gray-50">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
                    <p className="text-gray-700 mb-6">Dúvidas rápidas sobre o EmpaTEA. Clique em cada pergunta para abrir a resposta.</p>

                    <div className="space-y-3 max-w-4xl mx-auto">
                        <details className="bg-white border rounded-lg p-4">
                            <summary className="font-semibold cursor-pointer">Quem avaliou EmpaTEA: Transformando o Cuidado com Pessoas no Espectro Autista?</summary>
                            <div className="mt-3 text-gray-700">
                                Todas as avaliações mostradas aqui foram feitas por pessoas reais que compraram e deram sua opinião sobre o curso. Quando alguém compra um curso através da Hotmart, a pessoa recebe um convite para avaliar o conteúdo dele. A nota nesta página é o resultado da média das avaliações feitas por estes compradores, que vai de 1 a 5 estrelas.
                            </div>
                        </details>

                        <details className="bg-white border rounded-lg p-4">
                            <summary className="font-semibold cursor-pointer">Como funciona o “Prazo de Garantia”?</summary>
                            <div className="mt-3 text-gray-700">
                                O Prazo de Garantia é o período que você tem para pedir o reembolso integral do valor pago pela sua compra, caso o produto não seja satisfatório.

                                Assim que solicitado, seu reembolso é processado automaticamente pela Hotmart em até 5 dias. Para pagamentos com boleto bancário, você precisa preencher uma conta bancária para receber o dinheiro. Passados os 5 dias, o valor poderá ser identificado em sua conta em até 7 dias úteis. Já o estorno da fatura do cartão de crédito varia de acordo com o meio de pagamento e pode ocorrer na fatura atual ou na seguinte.
                            </div>
                        </details>

                        <details className="bg-white border rounded-lg p-4">
                            <summary className="font-semibold cursor-pointer">O que é e como funciona o Certificado de Conclusão digital?</summary>
                            <div className="mt-3 text-gray-700">
                                Alguns cursos online oferecem um certificado digital de conclusão. Alunos podem emitir esse certificado ao final do curso ou entrando em contato com o Autor ou Autora. Esses certificados podem ser compartilhados em redes sociais como o LinkedIn e inseridos em informações curriculares.
                            </div>
                        </details>

                        <details className="bg-white border rounded-lg p-4">
                            <summary className="font-semibold cursor-pointer">Quais diferenciais os produtos podem ter?</summary>
                            <div className="mt-3 text-gray-700">
                                Os produtos na Hotmart têm diferenciais que mudam de acordo com o tipo de produto e a disponibilidade.

                                Por exemplo, produtos do tipo "Cursos online" podem ou não oferecer certificado digital de conclusão. Caso o certificado esteja disponível, alunos podem emiti-lo dentro do curso ou entrando em contato com o(a) Autor(a). Os certificados podem ser compartilhados em redes sociais como o LinkedIn e inseridos em informações curriculares.

                                A garantia também é um diferencial dos nossos produtos e pode variar de 7, 15 ou 30 dias, de acordo com o oferecido pelo Autor(a).

                                Para ver os diferenciais disponíveis neste produto, basta checar a seção Diferenciais.
                            </div>
                        </details>

                        <details className="bg-white border rounded-lg p-4">
                            <summary className="font-semibold cursor-pointer">Como acesso meu produto?</summary>
                            <div className="mt-3 text-gray-700">
                                Você receberá o acesso a EmpaTEA: Transformando o Cuidado com Pessoas no Espectro Autista por email. Pode ser um curso online, um ebook, uma série de videoaulas, um serviço, evento, etc. O conteúdo será acessado ou baixado através de um computador, celular, tablet ou outro dispositivo digital.

                                Você também pode acessar o produto comprado nesta página:
                                <ol className="list-decimal list-inside mt-2">
                                    <li>Faça login clicando em <strong>Entrar</strong></li>
                                    <li>Acesse o menu lateral e clique em <strong>Minha conta</strong></li>
                                    <li>Clique em <strong>Minhas compras</strong></li>
                                </ol>

                                Em "Minhas compras" estarão todos os produtos que você já comprou!
                            </div>
                        </details>

                        <details className="bg-white border rounded-lg p-4">
                            <summary className="font-semibold cursor-pointer">Tenho interesse neste curso, como posso comprar?</summary>
                            <div className="mt-3 text-gray-700">
                                Para comprar este curso, clique no botão “Comprar”. Lembre-se de que nem todos os cursos estarão sempre disponíveis para compra. É possível que o Autor ou Autora esteja preparando uma nova turma ainda sem inscrições abertas.
                            </div>
                        </details>
                    </div>
                </div>
            </section>
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default Empatea;