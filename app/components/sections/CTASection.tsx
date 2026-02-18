'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function CTASection() {
  return (
    <section className="py-20 bg-teal text-white">
      <Container>
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have an idea worth building?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Let's engineer something remarkable together.
          </p>
          <Button variant="primary" href="#contact">
            Let's Talk
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
