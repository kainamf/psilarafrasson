import React from 'react';
import { ArrowRight } from 'lucide-react';
import { EMPATEA_HOTMART_LINK } from '../constants';

type Props = {
  label?: string;
  variant?: 'primary' | 'white';
  className?: string;
};

function EmpateaCTA({ label = 'Garantir minha vaga', variant = 'primary', className = '' }: Props) {
  const handleClick = () => {
    window.open(EMPATEA_HOTMART_LINK, '_blank');
  };

  if (variant === 'white') {
    return (
      <button
        onClick={handleClick}
        className={`mt-4 bg-white text-empatea-green px-8 py-3 rounded-full text-lg font-bold hover:bg-empatea-green-dark hover:text-white transition-all duration-200 inline-flex items-center gap-2 ${className}`}
      >
        {label}
        <ArrowRight className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`mt-4 bg-empatea-green text-white px-8 py-3 rounded-full text-lg font-bold hover:bg-empatea-green-dark transition-all duration-200 inline-flex items-center gap-2 ${className}`}
    >
      {label}
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}

export default EmpateaCTA;
