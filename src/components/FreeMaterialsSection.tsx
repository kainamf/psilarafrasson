
function FreeMaterialsSection() {
    return (
        <section id="materiais-gratuitos" className="py-16 bg-secondary-300">
            <div className="container mx-auto px-4 flex flex-col items-center text-center gap-6">
                <h2 className="text-4xl font-bold text-neutral-700 mb-4">Materiais Gratuitos</h2>
                <p className="text-lg text-accent max-w-2xl mb-4">
                    Baixe gratuitamente materiais de apoio, guias e recursos para famílias, profissionais e interessados em neurodesenvolvimento e inclusão.
                </p>
                <a
                    href="https://drive.google.com/drive/folders/1skFGEx_Q51wM-ZKoo-0GUzCCMRgPpU9e?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 bg-accent text-neutral-700 font-bold rounded-full shadow-lg hover:bg-accent-700 transition-all text-lg animate-bounce-slow"
                >
                    Acessar Materiais
                </a>
            </div>
            <style>{`
                @keyframes bounce-slow {
                  0%, 100% { transform: translateY(0); }
                  50% { transform: translateY(-10px); }
                }
                .animate-bounce-slow {
                  animation: bounce-slow 2.5s infinite;
                }
            `}</style>
        </section>
    );
}

export default FreeMaterialsSection;
