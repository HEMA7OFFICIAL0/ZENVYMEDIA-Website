'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Gopinath',
    role: 'Lead Video Editor',
    bio: 'Our film-graduate editor who turns raw footage into compelling stories.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Adhwaith',
    role: 'Content & Strategy',
    bio: 'Expert in crafting narratives that resonate and drive brand growth.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop',
  },
  {
    name: 'Hemachandran',
    role: 'Social Media Specialist',
    bio: 'Master of engagement and digital trends across all platforms.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop',
  },
  {
    name: 'Sathya Sai',
    role: 'Brand Designer',
    bio: 'Visual architect creating unique identities for modern brands.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-silver font-medium tracking-[0.2em] uppercase text-sm mb-4">Who We Are</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Meet the Team</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            ZENVYMEDIA is a boutique creative studio driven by passion. Our team of four brings decades of combined experience in video, design, and social media. We collaborate closely with clients to elevate brands through visual storytelling.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] mb-6 overflow-hidden bg-muted">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <h4 className="text-xl font-bold text-white mb-1">{member.name}</h4>
              <p className="text-silver text-sm font-medium mb-3 uppercase tracking-wider">{member.role}</p>
              <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
