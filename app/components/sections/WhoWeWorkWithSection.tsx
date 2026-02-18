'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { FaUsers, FaChartLine, FaBuilding } from 'react-icons/fa';

export default function WhoWeWorkWithSection() {
  const audiences = [
    {
      icon: <FaUsers className="text-5xl text-gold mb-4" />,
      title: 'Startups',
      description: 'Early-stage companies building MVPs that need to move fast without compromising on architecture.',
      points: ['Rapid prototyping', 'Scalable foundations', 'Technical co-founding']
    },
    {
      icon: <FaChartLine className="text-5xl text-gold mb-4" />,
      title: 'Growing Businesses',
      description: 'Companies scaling their digital products and need engineering teams that understand growth.',
      points: ['System optimization', 'Team augmentation', 'Technical leadership']
    },
    {
      icon: <FaBuilding className="text-5xl text-gold mb-4" />,
      title: 'Organizations',
      description: 'Established organizations modernizing legacy systems and embracing digital transformation.',
      points: ['Legacy migration', 'System modernization', 'Digital strategy']
    }
  ];

  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionTitle centered subtitle="We partner with serious builders at every stage">
          Built for Builders
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <Card key={index}>
              <div className="flex flex-col items-center text-center">
                {audience.icon}
                <h3 className="text-2xl font-bold text-teal mb-3">
                  {audience.title}
                </h3>
                <p className="text-neutral-dark/70 mb-4">
                  {audience.description}
                </p>
                <ul className="space-y-2 text-sm text-neutral-dark/60">
                  {audience.points.map((point, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mr-2"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
