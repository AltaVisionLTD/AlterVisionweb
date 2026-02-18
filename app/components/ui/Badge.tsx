import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gold' | 'teal';
  className?: string;
}

export default function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-neutral-grey text-neutral-dark',
    gold: 'bg-gold text-white',
    teal: 'bg-teal text-white'
  };

  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
