import React from 'react';

const CRP = '08/33121';

function Header({ scrollToSection }: { scrollToSection: (sectionId: string) => void }) {
    return (
        <header className="bg-primary-100/90 backdrop-blur-sm fixed w-full top-0 z-50 shadow-sm">
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
