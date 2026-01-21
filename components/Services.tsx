'use client';

import { motion } from 'framer-motion';
import { Video, PenTool, Share2, Palette } from 'lucide-react';

const services = [
  {
    title: 'Video Editing',
    tagline: 'Cinematic edits & color-grading',
    description: 'Professional editing, motion graphics, color grading. We craft cinematic videos from raw footage.',
    icon: Video,
  },

  {
    title: 'Content Creation',
    tagline: 'Full content packages',
    description: 'Script writing, storyboarding, voice-over, photography – we handle the entire creative process.',
    icon: PenTool,
  },
  {
    title: 'Social Media',
    tagline: 'Strategy & Management',
    description: 'Strategy, scheduling, analytics, and community engagement to grow your digital presence.',
    icon: Share2,
  },
  {
    title: 'Logo & Branding',
    tagline: 'Custom identity design',
    description: 'Custom logo design, brand guidelines, and identity systems that make your brand stand out.',
    icon: Palette,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-silver font-medium tracking-[0.2em] uppercase text-sm mb-4">What We Do</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 border border-white/5 bg-black hover:border-silver/30 transition-all duration-500 group"
            >
              <service.icon className="text-silver mb-6 group-hover:scale-110 transition-transform duration-500" size={40} strokeWidth={1.5} />
              <h4 className="text-2xl font-bold text-white mb-2">{service.title}</h4>
              <p className="text-silver/80 text-sm font-medium mb-4 uppercase tracking-widest">{service.tagline}</p>
              <p className="text-gray-500 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
