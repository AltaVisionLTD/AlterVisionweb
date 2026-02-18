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
                  <Badge variant="gold">In Development</Badge>
                </div>
                <p className="text-xl text-neutral-dark/80 mb-4">
                  Construction Technology Platform
                </p>
                <p className="text-neutral-dark/70 mb-6">
                  A comprehensive digital platform streamlining construction project management, from planning to execution. Built to bring clarity and efficiency to complex construction workflows.
                </p>
                <div className="space-y-2 text-sm text-neutral-dark/60 mb-6">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                    Project Planning & Scheduling
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                    Resource Management
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-gold rounded-full mr-2"></span>
                    Real-time Collaboration
                  </div>
                </div>
                <Button variant="ghost" href="#contact">
                  Learn More
                </Button>
              </div>
              
              <div className="relative h-64 md:h-auto bg-neutral-grey rounded-lg overflow-hidden flex items-center justify-center">
                <div className="text-teal/20 text-4xl font-bold text-center px-4">
                  INKINGI Platform Preview
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
