import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = '',
  disabled = false
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-md font-medium transition-all duration-300 inline-block text-center";
  
  const variants = {
    primary: "bg-gold text-white hover:bg-gold-light",
    secondary: "bg-teal text-white hover:bg-teal-dark",
    ghost: "border-2 border-teal text-teal hover:bg-teal hover:text-white"
  };

  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick, disabled };

  return (
    <Component
      {...props}
      className={`${baseStyles} ${variants[variant]} ${disabledStyles} ${className}`}
      whileHover={disabled ? {} : { scale: 1.02 }}
      whileTap={disabled ? {} : { scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
