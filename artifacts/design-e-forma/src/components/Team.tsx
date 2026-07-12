import React from 'react';
import { motion } from 'framer-motion';
import rosaImg from '@assets/WhatsApp_Image_2026-07-12_at_18.30.10_1783877652128.jpeg';
import mirtesImg from '@assets/WhatsApp_Image_2026-07-12_at_18.30.11_1783877652129.jpeg';

const team = [
  {
    photo: rosaImg,
    name: 'Rosa Santos',
    role: 'Cabeleireira Especialista'
  },
  {
    photo: mirtesImg,
    name: 'Mirtes',
    role: 'Estética Especialista'
  }
];

export default function Team() {
  return (
    <section id="equipa" className="py-24 bg-secondary">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Especialistas
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-secondary-foreground"
          >
            A Nossa Equipa
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-3xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full mb-8 border-2 border-primary/30 group-hover:border-primary transition-colors duration-500 overflow-hidden relative shadow-xl">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">{member.name}</h3>
              <p className="text-primary font-medium tracking-wide uppercase text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
