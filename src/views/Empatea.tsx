import { Heart, BookOpen, Users, Award, Sparkles, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import EmpateaBenefits from '../components/EmpateaBenefits';
import EmpateaHero from '../components/EmpateaHero';
import EmpateaWhatIs from '../components/EmpateaWhatIs';
import EmpateaWho from '../components/EmpateaWho';
import EmpateaFAQ from '../components/EmpateaFAQ';
import EmpateaFooter from '../components/EmpateaFooter';
import Navbar from '../components/Navbar';

function Empatea() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            {/* Hero - WHITE */}
            <section className="relative bg-empatea-white py-8 px-4">
                <EmpateaHero />
            </section>

            {/* WhatIs - AZUL */}
            <section className="py-20 px-4 bg-empatea-blue">
                <EmpateaWhatIs />
            </section>

            {/* Who - AMARELO */}
            <section className="py-16 px-4 bg-empatea-yellow">
                <EmpateaWho />
            </section>

            {/* Benefits - VERMELHO */}
            <section className="py-12 px-4 bg-empatea-red">
                <EmpateaBenefits />
            </section>

            {/* FAQ - AZUL (continuação da ordem) */}
            <section className="py-12 px-4 bg-empatea-blue">
                <EmpateaFAQ />
            </section>

            {/* Footer wrapper */}
            <EmpateaFooter />
        </div>
    );
}

export default Empatea;