import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className="bg-primary-500 shadow-md border-b-2 border-secondary-700/20 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-center py-4">
                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            to="/"
                            className={`font-medium transition-colors ${
                                isActive('/') 
                                    ? 'text-white font-semibold' 
                                    : 'text-gray-900 hover:text-black-900'
                            }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/empatea"
                            className={`font-medium transition-colors ${
                                isActive('/empatea') 
                                    ? 'text-white font-semibold' 
                                    : 'text-gray-900 hover:text-black-900'
                            }`}
                        >
                            EmpaTEA
                        </Link>
                        <Link
                            to="/cartilha"
                            className={`font-medium transition-colors ${
                                isActive('/cartilha') 
                                    ? 'text-white font-semibold' 
                                    : 'text-gray-900 hover:text-black-900'
                            }`}
                        >
                            Cartilha
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden text-gray-700"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-3">
                            <Link
                                to="/"
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-center py-2 transition-colors ${
                                    isActive('/') 
                                        ? 'text-white font-semibold' 
                                        : 'text-gray-700 hover:text-primary-700'
                                }`}
                            >
                                Home
                            </Link>
                            <Link
                                to="/empatea"
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-center py-2 transition-colors ${
                                    isActive('/empatea') 
                                        ? 'text-white font-semibold' 
                                        : 'text-gray-700 hover:text-primary-700'
                                }`}
                            >
                                EmpaTEA
                            </Link>
                            <Link
                                to="/cartilha"
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-center py-2 transition-colors ${
                                    isActive('/cartilha') 
                                        ? 'text-white font-semibold' 
                                        : 'text-gray-700 hover:text-primary-700'
                                }`}
                            >
                                Cartilha
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
