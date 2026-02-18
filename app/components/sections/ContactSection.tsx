'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Container>
        <SectionTitle centered subtitle="Let's build something remarkable together">
          Get In Touch
        </SectionTitle>

        <div className="max-w-4xl mx-auto">
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-teal mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-neutral-grey rounded-md focus:outline-none focus:border-teal"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-teal mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-neutral-grey rounded-md focus:outline-none focus:border-teal"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-teal mb-2">
                  Company
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 border border-neutral-grey rounded-md focus:outline-none focus:border-teal"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-teal mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-neutral-grey rounded-md focus:outline-none focus:border-teal"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>
              <Button variant="primary" className="w-full md:w-auto">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </Container>
    </section>
  );
}
