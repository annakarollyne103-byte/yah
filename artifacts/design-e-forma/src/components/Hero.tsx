import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Star } from 'lucide-react';
import salonBg from '@assets/WhatsApp_Image_2026-07-12_at_18.30.09_1783877652125.jpeg';

export default function Hero() {
  return (
    <section id="inicio" className="relative h-[100dvh] w-full bg-[#1C2A20] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={salonBg}
          alt="Interior do salão Design e Forma"
          className="w-full h-full object-cover object-center"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 z-10"></div>

      <div className="container relative z-20 mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-[1.1] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block">Beleza Natural.</span>
          <span className="block">Resultados Extraordinários.</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-white/90 max-w-2xl font-light mb-10 flex items-center justify-center flex-wrap gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          O salão de referência em Lisboa, com 4,9 <Star size={20} className="fill-primary text-primary inline" /> em mais de 170 avaliações.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <a 
            href="#contacto" 
            className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-sm font-medium text-lg hover:bg-primary/90 transition-all hover:scale-105"
          >
            Marcar Agora
          </a>
          <a 
            href="#servicos" 
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white rounded-sm font-medium text-lg hover:bg-white/10 transition-all"
          >
            Conhecer os Serviços
          </a>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <a href="#sobre" className="text-white/60 hover:text-white transition-colors flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
