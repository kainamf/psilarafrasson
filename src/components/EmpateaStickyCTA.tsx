import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { EMPATEA_HOTMART_LINK } from '../constants';

function EmpateaStickyCTA() {
  const handleClick = () => {
    window.open(EMPATEA_HOTMART_LINK, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-2">
        <div className="bg-empatea-red text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">Oferta especial</div>
        <button
          onClick={handleClick}
          aria-label="Inscreva-se no EmpaTEA"
          className="flex items-center gap-3 bg-empatea-green text-white px-5 py-3 rounded-full shadow-2xl hover:bg-empatea-green-dark focus:outline-none focus:ring-4 focus:ring-empatea-green/30 transition-all"
        >
          <ShoppingCart className="w-5 h-5" />
          <div className="text-left">
            <div className="text-sm font-semibold">Inscreva-se agora</div>
            <div className="text-xs opacity-80">12x de R$ 92,77 ou R$ 897 à vista</div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default EmpateaStickyCTA;
