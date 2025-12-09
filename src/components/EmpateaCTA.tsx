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
        className={`mt-4 bg-white text-primary-700 px-8 py-3 rounded-full text-lg font-bold hover:bg-primary-500 hover:text-white transition-all duration-200 inline-flex items-center gap-2 ${className}`}
        aria-label={label}
        type="button"
      >
        {label}
        <ArrowRight className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={handleClick}
      className={`mt-4 bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-3 rounded-full text-lg font-bold hover:opacity-95 transition-all duration-200 inline-flex items-center gap-2 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-500/40 ${className}`}
      aria-label={label}
      type="button"
    >
      {label}
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}

export default EmpateaCTA;
