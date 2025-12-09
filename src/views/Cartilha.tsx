import { useEffect } from 'react';
import CartilhaSection from '../components/CartilhaSection';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Navbar from '../components/Navbar';

function Cartilha() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <CartilhaSection />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default Cartilha;
