import { Heart, BookOpen, Users, Award, Sparkles, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EmpateaBenefits from '../components/EmpateaBenefits';
import EmpateaHero from '../components/EmpateaHero';
import EmpateaWhatIs from '../components/EmpateaWhatIs';
import EmpateaWho from '../components/EmpateaWho';
import EmpateaFAQ from '../components/EmpateaFAQ';
import EmpateaFooter from '../components/EmpateaFooter';
import { EMPATEA_HOTMART_LINK } from '../constants';
import { Helmet } from 'react-helmet-async';

function Empatea() {
    const handleCTA = () => {
        // Redireciona para a página de venda do Hotmart
        window.open(EMPATEA_HOTMART_LINK, '_blank');
    };

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>EmpaTEA — Curso para atendimento com perspectiva autista</title>
                <meta name="description" content="EmpaTEA — Curso online com aulas práticas, supervisão e comunidade exclusiva. Acesso imediato e certificado digital." />
                <link rel="canonical" href="https://yourdomain.com/empatea" />

                {/* Open Graph */}
                <meta property="og:title" content="EmpaTEA — Curso para atendimento com perspectiva autista" />
                <meta property="og:description" content="Aprenda práticas clínicas com foco na vivência autista. Aulas práticas, supervisão e comunidade." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://yourdomain.com/empatea" />
                <meta property="og:image" content="/assets/images/empaTeaLogo.png" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="EmpaTEA — Curso para atendimento com perspectiva autista" />
                <meta name="twitter:description" content="Aulas práticas, supervisão e comunidade exclusiva. Acesso imediato e certificado digital." />
                <meta name="twitter:image" content="/assets/images/empaTeaLogo.png" />
            </Helmet>
            <Header />
            {/* Hero - AZUL */}
            <section className="relative bg-empatea-blue py-20 px-4">
                <EmpateaHero />
            </section>

            {/* WhatIs - VERDE */}
            <section className="py-20 px-4 bg-empatea-green">
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