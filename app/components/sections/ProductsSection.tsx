'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';

export default function ProductsSection() {
  return (
    <section id="products" className="py-20 bg-white">
      <Container>
        <SectionTitle centered subtitle="Innovation from within our studio">
          Built In-House
        </SectionTitle>

        <div className="max-w-4xl mx-auto">
          <Card hover={false} className="border-2 border-teal">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-3xl font-bold text-teal">
                    INKINGI
                  </h3>
                  <Badge variant="gold">Under NDA</Badge>
                </div>
                <p className="text-xl text-neutral-dark/80 mb-4">
                  Construction Technology Platform
                </p>
                <p className="text-neutral-dark/70 mb-6">
                  A comprehensive digital solution currently in development for the construction industry. This project involves sensitive proprietary technology and is protected under non-disclosure agreements.
                </p>
                <div className="bg-teal/5 border border-teal/20 rounded-lg p-4 mb-6">
                  <p className="text-sm text-neutral-dark/70">
                    <strong className="text-teal">Confidential Project:</strong> Full project details, technical specifications, and client information are protected under NDA. For inquiries about similar solutions or partnership opportunities, please get in touch.
                  </p>
                </div>
                <Button variant="primary" href="/#contact">
                  Contact for More Info
                </Button>
              </div>
              
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-teal/10 to-gold/10 rounded-lg overflow-hidden flex items-center justify-center border-2 border-dashed border-teal/30">
                <div className="text-center px-6">
                  <div className="text-6xl mb-3">🔒</div>
                  <p className="text-teal font-bold text-lg mb-2">Confidential Project</p>
                  <p className="text-neutral-dark/60 text-sm">Protected under NDA</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <motion.p
          className="text-center text-neutral-dark/60 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          More products in development. We build for the long term.
        </motion.p>
      </Container>
    </section>
  );
}
