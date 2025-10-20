import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-colors">
                        <Home className="w-5 h-5" />
                        <span className="font-semibold">Voltar para o site</span>
                    </Link>
                    
                    <div className="flex items-center gap-2">
                        <img 
                            src="/assets/images/laraLogo.png" 
                            alt="Logo Lara Frasson" 
                            className="h-12"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
