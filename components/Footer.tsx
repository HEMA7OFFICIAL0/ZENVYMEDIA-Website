'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
          ZENVY<span className="text-silver">MEDIA</span>
        </Link>
        
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} ZENVYMEDIA. All rights reserved.
        </p>

        <div className="flex gap-8">
          <Link href="#" className="text-xs uppercase tracking-widest text-gray-500 hover:text-silver transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-xs uppercase tracking-widest text-gray-500 hover:text-silver transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
