'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaTimesCircle, FaInfoCircle, FaExclamationTriangle } from 'react-icons/fa';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info' | 'warning';
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({ 
  message, 
  type = 'info', 
  isVisible, 
  onClose, 
  duration = 5000 
}: ToastProps) {
  useEffect(() => {
    if (isVisible && duration > 0) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, onClose]);

  const icons = {
    success: <FaCheckCircle className="text-green-500" />,
    error: <FaTimesCircle className="text-red-500" />,
    info: <FaInfoCircle className="text-blue-500" />,
    warning: <FaExclamationTriangle className="text-yellow-500" />,
  };

  const bgColors = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    info: 'bg-blue-50 border-blue-200',
    warning: 'bg-yellow-50 border-yellow-200',
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          className="fixed top-4 right-4 z-[100] max-w-md"
        >
          <div className={`${bgColors[type]} border-2 rounded-lg shadow-lg p-4 flex items-start gap-3`}>
            <div className="text-2xl mt-0.5">{icons[type]}</div>
            <div className="flex-1">
              <p className="text-sm text-neutral-dark font-medium">{message}</p>
            </div>
            <button
              onClick={onClose}
              className="text-neutral-dark hover:text-teal transition-colors"
              aria-label="Close notification"
            >
              <FaTimesCircle className="text-xl" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
