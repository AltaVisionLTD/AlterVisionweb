'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { FaCode, FaCogs, FaMobile, FaExchangeAlt } from 'react-icons/fa';

export default function ServicesSection() {
  const services = [
    {
      icon: <FaCogs className="text-4xl text-gold mb-4" />,
      title: 'Product Strategy & Architecture',
      description: 'Strategic planning and technical architecture that aligns your product vision with engineering reality.'
    },
    {
      icon: <FaCode className="text-4xl text-gold mb-4" />,
      title: 'Custom Software Development',
      description: 'End-to-end development of bespoke software solutions built to your exact specifications.'
    },
    {
      icon: <FaMobile className="text-4xl text-gold mb-4" />,
      title: 'Web & Mobile Applications',
      description: 'Modern, responsive applications that deliver exceptional user experiences across all devices.'
    },
    {
      icon: <FaExchangeAlt className="text-4xl text-gold mb-4" />,
      title: 'Digital Transformation',
      description: 'Modernizing legacy systems and processes to enable digital-first operations.'
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-grey/30">
      <Container>
        <SectionTitle centered subtitle="Comprehensive engineering services for modern digital challenges">
          What We Offer
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index}>
              <div>
                {service.icon}
                <h3 className="text-2xl font-bold text-teal mb-3">
                  {service.title}
                </h3>
                <p className="text-neutral-dark/70">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
