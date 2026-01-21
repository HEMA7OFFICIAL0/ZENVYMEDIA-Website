'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Instagram, Facebook, Youtube, Send } from 'lucide-react';

const list = [
  {
    title: 'Instagram',
    urllink: 'https://www.instagram.com/zenvymedia_official?igsh=MXc1eHB4Y2JoY3R1dA==',
    icon:Instagram

  },

  {
    title: 'Facebook',
    urllink: '',
    icon:Facebook
  },
  {
    title: 'Youtube',
    urllink: 'https://www.youtube.com/channel/UCUW2iCitDnRBPRVZt-AuJqQ',
    icon:Youtube
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-silver font-medium tracking-[0.2em] uppercase text-sm mb-4">Get In Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to start your project? Let's talk.</h3>
            <p className="text-gray-400 text-lg mb-12 max-w-md">
              Have a vision you want to bring to life? Reach out to us and let's create something extraordinary together.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-gray-300 hover:text-silver transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-silver transition-colors">
                  <Mail size={20} />
                </div>
                <span>zenvyofficial04@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 hover:text-silver transition-colors cursor-pointer group">
                <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-silver transition-colors">
                  <Phone size={20} />
                </div>
                <span>+91 7305662449</span>
              </div>
            </div>

            <div className="flex gap-4">
              {list.map(({ title, urllink, icon: Icon }) => (
                <a
                  key={title}
                  href={urllink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-black hover:bg-silver hover:border-silver transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0a0a0a] p-8 md:p-12 border border-white/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-silver outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Email</label>
                  <input 
                    type="email" 
                    className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-silver outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-gray-500 font-bold">Message</label>
                <textarea 
                  rows={5}
                  className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:border-silver outline-none transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <button className="w-full py-4 bg-silver text-black font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
