import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Corte de Cabelo',
    description: 'Cortes precisos e personalizados para feminino, masculino e criança.',
  },
  {
    title: 'Coloração e Mechas',
    description: 'Técnicas avançadas de cor, balayage e iluminação com produtos que preservam a integridade do fio.',
  },
  {
    title: 'Tratamentos Capilares',
    description: 'Rituais profundos de hidratação, nutrição e reconstrução com linhas premium.',
  },
  {
    title: 'Brushing e Styling',
    description: 'Finalizações impecáveis que duram, desde o liso perfeito às ondas mais naturais.',
  },
  {
    title: 'Alisamento e Permanente',
    description: 'Transformação de textura segura, adaptada à estrutura do seu cabelo.',
  },
  {
    title: 'Penteados para Eventos',
    description: 'Produções elegantes para casamentos, batizados e ocasiões especiais.',
  }
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Excelência
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif font-bold text-white"
            >
              Os Nossos Serviços
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <a href="#contacto" className="text-primary hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest text-sm font-semibold">
              Agendar Consulta <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative bg-[#141414] p-10 rounded-sm overflow-hidden"
            >
              <div className="absolute inset-0 border border-white/5 group-hover:border-primary/50 transition-colors duration-500 rounded-sm" />
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-white/60 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
