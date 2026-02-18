'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { FaRocket, FaShieldAlt, FaLightbulb, FaBullseye } from 'react-icons/fa';

export default function MissionVisionSection() {
  const principles = [
    {
      icon: <FaRocket className="text-4xl text-gold" />,
      title: 'Built to Scale',
      description: 'Architecture designed for growth from day one'
    },
    {
      icon: <FaShieldAlt className="text-4xl text-gold" />,
      title: 'Secure by Design',
      description: 'Security embedded in every layer of development'
    },
    {
      icon: <FaLightbulb className="text-4xl text-gold" />,
      title: 'Clarity Over Complexity',
      description: 'Simple, maintainable solutions that teams understand'
    },
    {
      icon: <FaBullseye className="text-4xl text-gold" />,
      title: 'Impact-Driven',
      description: 'Technology that delivers measurable business value'
    }
  ];

  return (
    <section className="py-20 bg-neutral-grey/30">
      <Container>
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-sm uppercase tracking-wider text-gold font-semibold mb-4">
              Our Foundation
            </h3>
            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h4 className="text-2xl font-bold text-teal mb-3">Mission</h4>
                <p className="text-lg text-neutral-dark/80">
                  To engineer scalable, high-performance software that simplifies complexity and enables meaningful digital growth.
                </p>
              </div>
              <div>
                <h4 className="text-2xl font-bold text-teal mb-3">Vision</h4>
                <p className="text-lg text-neutral-dark/80">
                  To bridge ambitious ideas and real-world impact.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <SectionTitle centered>
          Our Principles
        </SectionTitle>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <Card key={index}>
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  {principle.icon}
                </div>
                <h4 className="text-xl font-bold text-teal mb-2">
                  {principle.title}
                </h4>
                <p className="text-neutral-dark/70">
                  {principle.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
