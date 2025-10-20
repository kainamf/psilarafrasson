import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import CommitmentSection from '../components/CommitmentSection';
import EmpateaPromo from '../components/EmpateaPromo';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import FreeMaterialsSection from '../components/FreeMaterialsSection';
import WhatsAppButton from '../components/WhatsAppButton';

function Home() {
    return (
        <div className="min-h-screen bg-white">
            <Hero />
            <About />
            <Services />
            <EmpateaPromo />
            <CommitmentSection />
            <FreeMaterialsSection />
            <Contact />
            <Footer />
            <WhatsAppButton />
        </div>
    );
}

export default Home;
