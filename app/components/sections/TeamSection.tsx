'use client';

import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';

export default function TeamSection() {
  const team = [
    { name: 'John Doe', role: 'CEO & Co-Founder' },
    { name: 'Jane Smith', role: 'CTO & Co-Founder' },
    { name: 'Mike Johnson', role: 'Lead Engineer' },
    { name: 'Sarah Williams', role: 'Product Designer' },
  ];

  return (
    <section className="py-20 bg-neutral-grey/30">
      <Container>
        <SectionTitle centered subtitle="The people behind the code">
          Our Team
        </SectionTitle>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card key={index}>
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-neutral-grey rounded-full flex items-center justify-center text-teal text-4xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
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
