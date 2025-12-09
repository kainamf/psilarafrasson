import React from 'react';

export default function EmpateaWhatIs() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">O que é o EmpaTEA?</h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto"></div>
      </div>

      <div className="prose prose-lg max-w-4xl mx-auto space-y-6 text-white">
        <p className="text-xl leading-relaxed">
          Aqui, você não aprende só o que é reforço, extinção ou função do comportamento.
          <span className="font-bold"> Você aprende a escutar de verdade.</span>
        </p>

        <div className="bg-white/95 p-8 rounded-2xl my-12 shadow-lg border-l-4 border-empatea-green">
          <p className="text-lg italic text-gray-800 font-medium">
            "Se você quer ser o tipo de profissional que inspira confiança em famílias autistas,
            é preciso mais do que técnica, é preciso ética, empatia e responsabilidade."
          </p>
        </div>
      </div>
    </div>
  );
}
