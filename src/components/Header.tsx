import React from 'react';

const CRP = '08/33121';

function Header({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
    return (
        <header className="bg-secondary-500 text-white py-4 shadow-md">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-3xl font-bold text-font">
                        Lara Frasson
                        <div className="text-base font-normal text-font">Psicóloga CRP: {CRP}</div>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('inicio')} className="text-lg text-font transition-colors">Início</button>
                        <button onClick={() => scrollToSection('services')} className="text-lg text-font transition-colors">Serviços</button>
                        <button onClick={() => scrollToSection('sobre')} className="text-lg text-font transition-colors">Sobre</button>
                        <button onClick={() => scrollToSection('contato')} className="text-lg text-font transition-colors">Contato</button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
