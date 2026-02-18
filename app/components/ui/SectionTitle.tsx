import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  children: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionTitle({ 
  children, 
  subtitle, 
  centered = false,
  className = '' 
}: SectionTitleProps) {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2 
        className="text-4xl md:text-5xl font-bold text-teal mb-4 cursor-default"
        whileHover={{ 
          scale: 1.02,
          color: '#D5962B',
          transition: { duration: 0.3 }
        }}
      >
        {children}
      </motion.h2>
      {subtitle && (
        <p className="text-lg text-neutral-dark/70 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
