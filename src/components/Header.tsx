import React from 'react';

const CRP = '08/33121';

function Header({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
    return (
        <header className="bg-gradient-to-b from-primary-700 to-primary-500 text-white py-4 shadow-md">
            <div className="container mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-primary-700 text-font">
                        Lara Frasson
                        <div className="text-sm font-normal text-primary-900 text-font">Psicóloga Infanto Juvenil CRP {CRP}</div>
                    </div>
                    <nav className="hidden md:flex space-x-8">
                        <button onClick={() => scrollToSection('inicio')} className="text-primary-700 hover:text-primary-900 text-font transition-colors">Início</button>
                        <button onClick={() => scrollToSection('servicos')} className="text-primary-700 hover:text-primary-900 text-font transition-colors">Serviços</button>
                        <button onClick={() => scrollToSection('sobre')} className="text-primary-700 hover:text-primary-900 text-font transition-colors">Sobre</button>
                        <button onClick={() => scrollToSection('contato')} className="text-primary-700 hover:text-primary-900 text-font transition-colors">Contato</button>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;
