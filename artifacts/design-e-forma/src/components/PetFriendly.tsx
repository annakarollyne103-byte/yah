import React from 'react';
import { motion } from 'framer-motion';

export default function PetFriendly() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-background border-t border-border/40"
    >
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="w-16 h-16 shrink-0 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-2xl">
            🐾
          </div>
          <div>
            <p className="text-primary font-bold tracking-widest uppercase text-xs mb-1">Pet Friendly</p>
            <h3 className="text-foreground font-serif text-lg font-bold mb-1">Adoramos receber toda a família.</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              O nosso espaço é pet friendly, por isso o seu animal de estimação é muito bem-vindo durante a sua visita.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
