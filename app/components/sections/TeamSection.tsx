'use client';

import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Image from 'next/image';

export default function TeamSection() {
  const team = [
    { 
      name: 'IHIRWE SHINGIRO Irene Arthur', 
      role: 'CEO & Founder',
      image: '/images/team/Arthur.jpeg'
    },
    { 
      name: 'IMANIRAHARI Didier', 
      role: 'CTO & Co-Founder',
      image: '/images/team/Didier.jpeg'
    },
  ];

  return (
    <section className="py-20 bg-neutral-grey/30">
      <Container>
        <SectionTitle centered subtitle="The people behind the code">
          Our Team
        </SectionTitle>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <Card key={index}>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-teal mb-1">
                  {member.name}
                </h4>
                <p className="text-neutral-dark/70 text-sm">
                  {member.role}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
