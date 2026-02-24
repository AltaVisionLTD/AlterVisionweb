'use client';

import { motion } from 'framer-motion';
import Container from '../ui/Container';
import SectionTitle from '../ui/SectionTitle';

export default function WhoWeAreSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <Container>
        {/* Unique Value Proposition Callout */}
        <div className="max-w-3xl mx-auto mb-12 p-6 rounded-xl bg-gradient-to-br from-gold/20 via-neutral-grey/10 to-teal/10 border-2 border-gold shadow-lg text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gold mb-2">Our Unique Value</h2>
          <p className="text-lg md:text-xl text-neutral-dark/90 font-medium">
            We turn ambitious ideas into reliable, scalable digital products—combining deep technical expertise with strategic product thinking for real impact.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle>
              Who We Are
            </SectionTitle>
            <p className="text-lg text-neutral-dark/80 mb-6">
              Alta Vision builds production-ready systems with security, scalability, and long-term architecture in mind.
            </p>
            <p className="text-lg text-neutral-dark/80 mb-6">
              We are a product-led software studio that partners with ambitious teams to engineer reliable digital systems that stand the test of time.
            </p>
            <p className="text-lg text-neutral-dark/80">
              Our approach combines deep technical expertise with strategic product thinking, ensuring every line of code serves a clear business purpose.
            </p>
          </motion.div>

          <motion.div
            className="relative h-96 bg-gradient-to-br from-neutral-white to-neutral-grey/30 rounded-lg overflow-hidden border border-neutral-grey"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Custom Tech Icon Illustrations */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                
                {/* Smartphone - Top Left */}
                <motion.div
                  className="absolute top-8 left-8 flex flex-col items-center gap-2"
                  animate={{
                    rotate: [0, 10, 0],
                    y: [0, -15, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg width="90" height="140" viewBox="0 0 60 100" fill="none">
                    <rect x="5" y="5" width="50" height="90" rx="8" fill="#063A33" stroke="#D5962B" strokeWidth="2"/>
                    <rect x="12" y="15" width="36" height="60" rx="2" fill="#D5962B" opacity="0.3"/>
                    <circle cx="30" cy="85" r="5" fill="#D5962B"/>
                    <line x1="20" y1="10" x2="40" y2="10" stroke="#D5962B" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                  <span className="text-teal text-xs font-semibold whitespace-nowrap">Mobile Apps</span>
                </motion.div>

                {/* Server Rack - Bottom Right */}
                <motion.div
                  className="absolute bottom-8 right-8 flex flex-col items-center gap-2"
                  animate={{
                    rotate: [0, -8, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg width="110" height="120" viewBox="0 0 80 90" fill="none">
                    <rect x="10" y="5" width="60" height="20" rx="3" fill="#063A33" stroke="#D5962B" strokeWidth="2"/>
                    <rect x="10" y="30" width="60" height="20" rx="3" fill="#D5962B" stroke="#063A33" strokeWidth="2"/>
                    <rect x="10" y="55" width="60" height="20" rx="3" fill="#063A33" stroke="#D5962B" strokeWidth="2"/>
                    <circle cx="20" cy="15" r="3" fill="#D5962B"/>
                    <circle cx="30" cy="15" r="3" fill="#D5962B"/>
                    <circle cx="20" cy="40" r="3" fill="#063A33"/>
                    <circle cx="30" cy="40" r="3" fill="#063A33"/>
                    <circle cx="20" cy="65" r="3" fill="#D5962B"/>
                    <circle cx="30" cy="65" r="3" fill="#D5962B"/>
                  </svg>
                  <span className="text-gold text-xs font-semibold whitespace-nowrap">Server Infrastructure</span>
                </motion.div>

                {/* Credit Card - Center */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <svg width="140" height="90" viewBox="0 0 100 65" fill="none">
                    <rect x="5" y="5" width="90" height="55" rx="6" fill="#D5962B" stroke="#063A33" strokeWidth="2"/>
                    <rect x="5" y="15" width="90" height="12" fill="#063A33"/>
                    <rect x="15" y="38" width="30" height="8" rx="2" fill="#063A33" opacity="0.6"/>
                    <circle cx="75" cy="42" r="8" fill="#063A33" opacity="0.4"/>
                    <circle cx="85" cy="42" r="8" fill="#063A33" opacity="0.4"/>
                  </svg>
                  <span className="text-teal text-xs font-semibold whitespace-nowrap">Payment Systems</span>
                </motion.div>

                {/* Database - Bottom Left */}
                <motion.div
                  className="absolute bottom-12 left-12 flex flex-col-reverse items-center gap-3"
                  animate={{
                    rotateY: [0, 180, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <svg width="100" height="110" viewBox="0 0 70 80" fill="none">
                    <ellipse cx="35" cy="15" rx="25" ry="10" fill="#063A33" stroke="#D5962B" strokeWidth="2"/>
                    <rect x="10" y="15" width="50" height="50" fill="#063A33"/>
                    <ellipse cx="35" cy="65" rx="25" ry="10" fill="#063A33" stroke="#D5962B" strokeWidth="2"/>
                    <line x1="10" y1="15" x2="10" y2="65" stroke="#D5962B" strokeWidth="2"/>
                    <line x1="60" y1="15" x2="60" y2="65" stroke="#D5962B" strokeWidth="2"/>
                    <ellipse cx="35" cy="35" rx="25" ry="10" fill="none" stroke="#D5962B" strokeWidth="1.5" opacity="0.5"/>
                  </svg>
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-md border border-teal/30">
                    <span className="text-teal text-sm font-bold whitespace-nowrap">Data Management</span>
                  </div>
                </motion.div>

                {/* Cloud (Infrastructure) - Top Right */}
                <div className="absolute top-16 right-12 flex flex-col items-center gap-3">
                  <motion.div
                    animate={{
                      x: [0, 15, 0],
                      y: [0, -10, 0]
                    }}
                    transition={{
                      duration: 9,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <svg width="120" height="80" viewBox="0 0 90 60" fill="none">
                      <path d="M25 35C25 30 28 25 33 25C34 20 38 15 44 15C50 15 54 19 55 24C59 24 63 28 63 33C63 38 59 42 54 42H28C23 42 20 38 20 35C20 32 22 29 25 29" 
                            fill="#063A33" stroke="#D5962B" strokeWidth="2"/>
                      <circle cx="35" cy="30" r="3" fill="#D5962B"/>
                      <circle cx="45" cy="28" r="3" fill="#D5962B"/>
                      <circle cx="53" cy="32" r="3" fill="#D5962B"/>
                    </svg>
                  </motion.div>
                  <div className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md shadow-md border border-gold/30">
                    <span className="text-gold text-sm font-bold whitespace-nowrap">Cloud Infrastructure</span>
                  </div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
                  <motion.line
                    x1="25%" y1="25%" x2="50%" y2="50%"
                    stroke="#D5962B"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.line
                    x1="75%" y1="35%" x2="50%" y2="50%"
                    stroke="#063A33"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    animate={{ pathLength: [0, 1, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  />
                </svg>
              </div>
            </div>

            {/* Text Overlay */}
            <motion.div 
              className="absolute bottom-6 left-6 right-6 z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-teal/20">
                <p className="text-teal font-bold text-lg">End-to-End Solutions</p>
                <p className="text-neutral-dark/70 text-sm">From mobile apps to payment systems and cloud infrastructure</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
