import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    text: "Adorei o resultado! A equipa é fantástica e muito atenciosa.",
    author: "Maria S."
  },
  {
    text: "O melhor cabeleireiro de Lisboa. Recomendo vivamente a toda a gente.",
    author: "João F."
  },
  {
    text: "Excelente serviço, adorei o resultado. Voltarei com certeza!",
    author: "Ana P."
  },
  {
    text: "Profissionais de excelência, ambiente acolhedor e resultado impecável.",
    author: "Rita C."
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-background border border-border px-6 py-3 rounded-full mb-8 shadow-sm"
          >
            <span className="font-bold text-foreground">4,9/5</span>
            <div className="flex items-center text-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="currentColor" />
              ))}
            </div>
            <span className="text-sm font-medium text-muted-foreground ml-2">
              +170 avaliações Google
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
          >
            O Que Dizem os Nossos Clientes
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-background p-10 rounded-sm border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex text-primary mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-lg md:text-xl font-serif italic text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="font-bold text-sm tracking-wider uppercase text-muted-foreground">
                — {testimonial.author}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
