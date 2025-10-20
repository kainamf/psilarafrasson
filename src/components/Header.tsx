import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className="bg-white shadow-sm sticky top-0 z-50 border-b-2 border-empatea-green/20">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-center">
                    <Link to="/" className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
                        <img 
                            src="/assets/images/laraLogo.png" 
                            alt="Logo Lara Frasson" 
                            className="h-16"
                        />
                        <span className="text-gray-800 font-semibold text-lg">Psico Lara Frasson</span>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
