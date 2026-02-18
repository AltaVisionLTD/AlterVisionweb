'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

export default function WhoWeAreSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>
              Who We Are
            </SectionTitle>
            <p className="text-lg text-neutral-dark/80 mb-6">
              Alta Vision builds production-ready systems with security, scalability, and long-term architecture in mind.
            </p>
            <p className="text-lg text-neutral-dark/80 mb-6">
              We are a product-led software studio that partners with ambitious teams to engineer reliable digital systems that stand the test of time.
            </p>
            <p className="text-lg text-neutral-dark/80">
              Our approach combines deep technical expertise with strategic product thinking, ensuring every line of code serves a clear business purpose.
            </p>
          </motion.div>

          <motion.div
            className="relative h-96 bg-neutral-grey rounded-lg overflow-hidden"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute inset-0 flex items-center justify-center text-teal/20 text-6xl font-bold">
              Engineering Excellence
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
