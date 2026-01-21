'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Overlay/Video Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
        {/* In a real scenario, a video tag would go here */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-40" />
      </div>

      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-silver font-medium tracking-[0.3em] uppercase text-sm mb-4"
        >
          ZENVYMEDIA: Creative Video & Content Solutions
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-tight"
        >
          Elevate Your Brand with <br />
          <span className="text-silver">Cinematic Storytelling</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="px-8 py-4 bg-silver text-black font-bold rounded-none hover:bg-white transition-all duration-300 w-full sm:w-auto">
            VIEW PORTFOLIO
          </button>
          <button className="flex items-center gap-3 text-white font-medium hover:text-silver transition-colors group">
            <span className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:border-silver transition-colors">
              <Play size={18} fill="currentColor" />
            </span>
            WATCH SHOWREEL
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-silver to-transparent" />
      </motion.div>
    </section>
  );
}
