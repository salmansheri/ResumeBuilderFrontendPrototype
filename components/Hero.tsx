import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import Particles from './Particles';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#0f172a]">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0f172a] to-black z-0" />
      <Particles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700 text-cyan-400 text-xs font-semibold tracking-wide uppercase mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
            AI-Powered V2.0 Live
          </motion.div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            Build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">Job-Winning</span> Resume with AI
          </h1>
          
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            Stop struggling with Word documents. Our advanced AI writes, formats, and optimizes your resume to help you land more interviews in record time.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-10">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg shadow-lg shadow-cyan-500/25 flex items-center justify-center group"
            >
              Create My Resume
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800 text-white font-semibold text-lg hover:bg-slate-700 transition-colors border border-slate-700"
            >
              View Templates
            </motion.button>
          </div>

          <div className="flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-500">
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span>ATS-Friendly</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span>Free Download</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="w-4 h-4 text-green-500 mr-2" />
              <span>No Credit Card</span>
            </div>
          </div>
        </motion.div>

        {/* Visual Content - Animated Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotateY: 15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative perspective-1000 hidden lg:block"
        >
          {/* Glass Card Container */}
          <div className="relative w-full max-w-md mx-auto aspect-[3/4] bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200/10 transform rotate-y-12 hover:rotate-y-0 transition-all duration-700 ease-out p-1">
             <div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 z-0"></div>
             
             {/* Resume Content Placeholder */}
             <div className="relative z-10 bg-white h-full w-full rounded-xl p-8 shadow-inner overflow-hidden flex flex-col space-y-4">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-slate-200 animate-pulse"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-6 bg-slate-800 rounded w-3/4"></div>
                    <div className="h-4 bg-blue-500 rounded w-1/2"></div>
                  </div>
                </div>
                {/* Body Lines */}
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-2">
                     <div className="h-3 bg-slate-200 rounded w-full"></div>
                     <div className="h-3 bg-slate-200 rounded w-5/6"></div>
                     <div className="h-3 bg-slate-200 rounded w-4/6"></div>
                  </div>
                ))}
                
                {/* Floating AI Badge */}
                <motion.div 
                  className="absolute bottom-8 right-8 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 z-20"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-bold">Score: 98/100</span>
                </motion.div>
             </div>
          </div>
          
          {/* Decorative Elements behind card */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-2xl -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/30 rounded-full blur-2xl -z-10"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;