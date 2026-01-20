'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          ZENVY<span className="text-silver">MEDIA</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          {['Home', 'About', 'Services', 'Portfolio', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-silver transition-colors"
            >
              {item}
            </Link>
          ))}
          <button className="px-5 py-2 border border-silver text-silver text-sm font-medium hover:bg-silver hover:text-black transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
