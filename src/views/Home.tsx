import { useEffect } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import CommitmentSection from '../components/CommitmentSection';
import EmpateaPromo from '../components/EmpateaPromo';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FreeMaterialsSection from '../components/FreeMaterialsSection';
import WhatsAppButton from '../components/WhatsAppButton';
import CartilhaPreview from '../components/CartilhaPreview';
import Navbar from '../components/Navbar';

function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <Hero />
            <About />
            <Services />
            <EmpateaPromo />
            <CartilhaPreview />
            <CommitmentSection />
            <FreeMaterialsSection />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default Home;
