'use client';

import Image from 'next/image';
import Container from './ui/Container';
import { FaLinkedin, FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
    { icon: <FaTwitter />, href: '#', label: 'Twitter' },
    { icon: <FaGithub />, href: '#', label: 'GitHub' },
  ];

  return (
    <footer className="bg-teal text-white py-12">
      <Container>
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="mb-4">
              <Image
                src="/images/logoo.jpeg"
                alt="Alta Vision"
                width={300}
                height={120}
                className="h-28 w-auto"
              />
            </div>
            <p className="text-white/80 mb-4">
              Engineering Your Vision into Reality
            </p>
            <p className="text-white/70 text-sm">
              Global reach • Africa-based
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex items-center space-x-4 mb-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-2xl hover:text-gold transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:info@altavision.com"
              className="flex items-center text-white/80 hover:text-gold transition-colors"
            >
              <FaEnvelope className="mr-2" />
              info@altavision.com
            </a>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Alta Vision. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}