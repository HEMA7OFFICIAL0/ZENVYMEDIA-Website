'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "ZENVYMEDIA brought our brand to life with stunning videos. Their creativity and professionalism were outstanding.",
    author: "Sarah Jenkins",
    company: "Luxe Real Estate",
    rating: 5
  },
  {
    quote: "The team's attention to detail in our branding project was phenomenal. They truly understood our vision.",
    author: "Michael Chen",
    company: "TechFlow Systems",
    rating: 5
  },
  {
    quote: "Our social media engagement has tripled since we started working with ZENVYMEDIA. Highly recommended!",
    author: "Elena Rodriguez",
    company: "Vogue Boutique",
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-silver font-medium tracking-[0.2em] uppercase text-sm mb-4">Happy Clients</h2>
          <h3 className="text-4xl font-bold text-white">Testimonials</h3>
        </motion.div>

        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="text-center px-12"
            >
              <Quote className="text-silver/20 mx-auto mb-8" size={60} />
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-silver text-silver" />
                ))}
              </div>
              <p className="text-2xl md:text-3xl text-gray-300 italic leading-relaxed mb-8">
                "{testimonials[current].quote}"
              </p>
              <h4 className="text-white font-bold text-lg">{testimonials[current].author}</h4>
              <p className="text-silver text-sm uppercase tracking-widest">{testimonials[current].company}</p>
            </motion.div>
          </AnimatePresence>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-silver transition-colors"
          >
            <ChevronLeft size={32} />
          </button>
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-silver transition-colors"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      </div>
    </section>
  );
}
