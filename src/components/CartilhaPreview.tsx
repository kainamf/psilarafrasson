import { Plane, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function CartilhaPreview() {
    return (
        <section id="cartilha-preview" className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    {/* Hero compacto */}
                    <div className="text-center mb-12">
                        <div className="flex justify-center mb-6">
                            <div className="bg-blue-600 rounded-full p-4">
                                <Plane className="text-white" size={48} />
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Viagens Autistas: Seu Guia Completo
                        </h2>
                        <p className="text-lg md:text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
                            Manual de sobrevivência para viagens com autistas. Dicas práticas, antecipações e 
                            estratégias para tornar suas viagens mais tranquilas e prazerosas.
                        </p>
                        
                        {/* Destaques rápidos */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                <p className="text-gray-900 font-semibold">📍 Dicas Práticas</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                <p className="text-gray-900 font-semibold">📚 Baseado em Ciência</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
                                <p className="text-gray-900 font-semibold">⬇️ Download Imediato</p>
                            </div>
                        </div>

                        {/* Preço e CTA */}
                        <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-600">
                            <div className="mb-4">
                                <div className="text-4xl font-bold text-blue-600 mb-2">
                                    R$ 24,90
                                </div>
                                <p className="text-lg text-gray-700">
                                    ou <span className="font-semibold">3x de R$ 8,89</span>
                                </p>
                            </div>
                            <p className="text-gray-800 mb-6">
                                Desenvolvido por Lara Frasson - Psicóloga especialista em autismo e ABA
                            </p>
                            <Link
                                to="/cartilha"
                                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg text-lg"
                            >
                                Saiba Mais
                                <ArrowRight size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartilhaPreview;
