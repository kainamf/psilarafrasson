import { useEffect } from 'react';
import CartilhaSection from '../components/CartilhaSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

function Cartilha() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            {/* Logo Header */}
            <header className="bg-white shadow-sm border-b-2 border-blue-600/20 py-6">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-center">
                        <img 
                            src="/assets/images/laraLogo.png" 
                            alt="Logo Lara Frasson" 
                            className="h-24"
                        />
                    </div>
                </div>
            </header>

            <CartilhaSection />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default Cartilha;
