import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#0f172a] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Loved by Job Seekers</h2>
          <p className="text-slate-400">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700/50 relative"
            >
              <Quote className="absolute top-8 right-8 text-slate-700 w-10 h-10 opacity-50" />
              <p className="text-slate-300 mb-6 relative z-10 italic">"{t.content}"</p>
              
              <div className="flex items-center">
                <img 
                  src={t.avatar} 
                  alt={t.name} 
                  className="w-12 h-12 rounded-full border-2 border-slate-600 mr-4" 
                />
                <div>
                  <h4 className="text-white font-semibold">{t.name}</h4>
                  <p className="text-slate-500 text-sm">{t.role} at {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;