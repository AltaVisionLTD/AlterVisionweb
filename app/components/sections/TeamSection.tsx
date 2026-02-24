'use client';

import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Image from 'next/image';
import { useState } from 'react';

export default function TeamSection() {
  const team = [
    { 
      name: 'IHIRWE SHINGIRO Irene Arthur', 
      role: 'CEO & Founder',
      image: '/images/team/Arthur.jpeg',
      bio: 'Arthur leads Alta Vision with a passion for scalable software and digital innovation. He specializes in product strategy and system architecture.'
    },
    { 
      name: 'IMANIRAHARI Didier', 
      role: 'CTO & Co-Founder',
      image: '/images/team/Didier.jpeg',
      bio: 'Didier drives technical excellence, focusing on secure, reliable solutions. He brings deep expertise in backend development and cloud infrastructure.'
    },
    {
      name: 'Ismael Murekezi',
      role: 'Co-Founder, UI/UX & Graphic Designer',
      image: '/images/team/Ismael.JPG',
      bio: 'Ismael crafts intuitive user experiences and impactful visuals, blending creativity with strategic design for digital products.'
    },
  ];

  const [openBio, setOpenBio] = useState<number | null>(null);

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
                    alt={`Profile image of ${member.name}, ${member.role}`}
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-teal mb-1">
                  {member.name}
                </h4>
                <p className="text-neutral-dark/70 text-sm mb-2">
                  {member.role}
                </p>
                <button
                  className="mt-2 px-4 py-1 bg-gold text-white rounded-full text-xs font-semibold hover:bg-teal transition-colors"
                  onClick={() => setOpenBio(openBio === index ? null : index)}
                  aria-label={openBio === index ? `Hide bio for ${member.name}` : `View bio for ${member.name}`}
                >
                  {openBio === index ? 'Hide Bio' : 'View More'}
                </button>
                {openBio === index && (
                  <div className="mt-3 p-3 bg-neutral-grey/10 rounded-lg text-neutral-dark/80 text-xs">
                    {member.bio}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
