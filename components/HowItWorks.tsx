import React from 'react';
import { motion } from 'framer-motion';
import { STEPS } from '../constants';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-[#0B1120] relative overflow-hidden">
      {/* Background Gradient Line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-slate-400">Three simple steps to your dream job.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative text-center"
            >
              <div className="relative inline-flex items-center justify-center w-20 h-20 mb-8 rounded-full bg-slate-800 border-4 border-[#0B1120] z-10 shadow-xl">
                <step.icon className="w-8 h-8 text-cyan-400" />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-2 border-[#0B1120]">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed px-4">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;