import React from 'react';
import { motion } from 'framer-motion';
import beforeImg from '@assets/WhatsApp_Image_2026-07-12_at_18.24.39_1783877234797.jpeg';
import afterImg from '@assets/WhatsApp_Image_2026-07-12_at_18.24.35_1783877234796.jpeg';

const galleries = [
  { before: beforeImg, after: afterImg, label: 'Tratamento Capilar' },
  { before: null, after: null, label: 'Coloração & Mechas' },
  { before: null, after: null, label: 'Corte & Styling' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            O Nosso Trabalho
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
          >
            Transformações
          </motion.h2>
        </div>

        <div className="flex flex-col gap-12">
          {galleries.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col gap-2"
            >
              <p className="text-center text-sm font-bold tracking-widest uppercase text-muted-foreground mb-2">
                {item.label}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-stretch">
                {/* Before */}
                <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-sm overflow-hidden group bg-muted flex items-center justify-center">
                  {item.before ? (
                    <img
                      src={item.before}
                      alt="Antes"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <span className="text-muted-foreground/30 font-serif text-3xl font-bold tracking-widest">
                      ANTES
                    </span>
                  )}
                  <div className="absolute top-4 left-4 bg-background/85 backdrop-blur text-foreground text-xs font-bold px-3 py-1 tracking-widest uppercase rounded-sm shadow">
                    Antes
                  </div>
                </div>

                {/* After */}
                <div className="relative aspect-[3/4] md:aspect-[4/5] rounded-sm overflow-hidden group bg-[#2A2A2A] flex items-center justify-center">
                  {item.after ? (
                    <img
                      src={item.after}
                      alt="Depois"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                  ) : (
                    <span className="text-white/20 font-serif text-3xl font-bold tracking-widest">
                      DEPOIS
                    </span>
                  )}
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 tracking-widest uppercase rounded-sm shadow">
                    Depois
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
