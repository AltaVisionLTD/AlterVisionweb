'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function HeroSection() {
  return (
    <section id="home" className="min-h-[90vh] flex items-center pt-20 bg-neutral-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-teal mb-6 leading-tight">
              Engineering Scalable Products That Create Real Impact.
            </h1>
            <p className="text-xl text-neutral-dark/80 mb-8 max-w-xl">
              Alta Vision is a product-led software studio designing, building, and scaling reliable digital systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="primary" href="#services">
                Explore Our Services
              </Button>
              <Button variant="ghost" href="#products">
                View Our Products
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="relative h-96 md:h-[500px]"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <motion.div
                  className="absolute top-0 right-0 w-64 h-64 bg-teal rounded-lg"
                  animate={{
                    rotate: [0, 5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-10 left-10 w-48 h-48 bg-gold rounded-lg"
                  animate={{
                    rotate: [0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-4 border-teal rounded-full"
                  animate={{
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
