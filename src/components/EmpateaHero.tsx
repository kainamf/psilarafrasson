import React from 'react';

export default function EmpateaHero() {
  return (
    <div className="max-w-6xl mx-auto text-center space-y-6">
      <div className="flex justify-center mb-6">
        <div className="rounded-full overflow-hidden shadow-xl">
          <img src="/assets/images/laraProfile.jpeg" alt="EmpaTEA" className="h-40 md:h-56 w-40 md:w-56 object-cover" />
        </div>
      </div>

      <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light text-white">
        Uma jornada de capacitação profissional em ABA humanizada, ética e neuroafirmativa
      </p>

      <p className="text-lg md:text-xl max-w-2xl mx-auto text-white">
        Pensada por uma mulher autista para formar profissionais com alma
      </p>
    </div>
  );
}
