import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const organicPoints = [
  "Ingredientes 100% naturais e certificados.",
  "Fórmulas vegan e não testadas em animais.",
  "Embalagens recicláveis e compromisso zero desperdício."
];

export default function Organic() {
  return (
    <section className="py-24 bg-background border-y border-border overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="aspect-[4/5] bg-card flex items-center justify-center rounded-sm relative overflow-hidden group">
               <span className="text-muted-foreground/20 font-serif text-3xl font-bold tracking-widest text-center px-4 group-hover:scale-105 transition-transform duration-700">
                  PRODUTOS<br/>BIOLÓGICOS
               </span>
               <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Beleza Sustentável
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 leading-[1.1]">
              Beleza que respeita a natureza e o seu cabelo.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed font-light">
              Acreditamos que o luxo verdadeiro não precisa de comprometer o meio ambiente. 
              No nosso salão, trabalhamos exclusivamente com as marcas orgânicas mais prestigiadas do mundo.
            </p>

            <ul className="space-y-6">
              {organicPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary shrink-0">
                    <Leaf size={18} />
                  </div>
                  <span className="text-foreground text-lg font-medium">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12">
              <a href="#contacto" className="inline-block border-b-2 border-primary text-foreground font-bold tracking-widest uppercase text-sm pb-1 hover:text-primary transition-colors">
                Descubra os nossos tratamentos
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
