import React from 'react';

export default function EmpateaHero() {
  return (
    <div className="max-w-6xl mx-auto text-center space-y-6">
      <div className="flex justify-center mb-6">
        <img 
          src="/assets/images/empaTeaLogo.png" 
          alt="Logo EmpaTEA" 
          className="h-32 md:h-40"
        />
      </div>
      
      <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-gray-900">
        Uma jornada de capacitação profissional em ABA humanizada, ética e neuroafirmativa
      </p>

      <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-900">
        Pensada por uma mulher autista para formar profissionais com alma
      </p>
    </div>
  );
}
