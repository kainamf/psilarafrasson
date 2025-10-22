import React from 'react';

export default function EmpateaHero() {
  return (
    <div className="max-w-6xl mx-auto text-center space-y-6">
      <div className="flex justify-center mb-6">
        <div className="bg-white rounded-full p-6 shadow-xl">
          <img src="/assets/images/empaTeaLogo.png" alt="EmpaTEA" className="h-32 md:h-40 w-auto" />
        </div>
      </div>

      <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
        Uma jornada de capacitação profissional em ABA humanizada, ética e neuroafirmativa
      </p>

      <p className="text-lg md:text-xl max-w-2xl mx-auto">
        Pensada por uma mulher autista para formar profissionais com alma
      </p>
    </div>
  );
}
