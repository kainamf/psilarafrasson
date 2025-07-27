import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ProductsPage from './components/ProductsPage';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <div className="min-h-screen bg-white">
                        <Hero />
                        <Services />
                        <About />
                        <Contact />
                        <Footer />
                        <WhatsAppButton />
                    </div>
                }
            />
            <Route path="/products" element={<ProductsPage />} />
        </Routes>
    );
}

export default App;