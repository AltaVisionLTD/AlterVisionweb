import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick,
  className = '' 
}: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-md font-medium transition-all duration-300 inline-block text-center";
  
  const variants = {
    primary: "bg-gold text-white hover:bg-gold-light",
    secondary: "bg-teal text-white hover:bg-teal-dark",
    ghost: "border-2 border-teal text-teal hover:bg-teal hover:text-white"
  };

  const Component = href ? motion.a : motion.button;
  const props = href ? { href } : { onClick };

  return (
    <Component
      {...props}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
