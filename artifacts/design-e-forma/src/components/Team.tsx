import React from 'react';
import { motion } from 'framer-motion';

const team = [
  {
    initials: 'RS',
    name: 'Rosa Santos',
    role: 'Cabeleireira Especialista',
    bio: 'Sou apaixonada por cabelos e por lhes devolver a vitalidade e beleza naturais. Trabalho todos os dias de forma dedicada para aconselhar os melhores produtos e tratamentos a cada cliente. Cada pessoa que visita o nosso salão é única, com necessidades únicas e nada me dá mais gosto do que poder contribuir para que alguém se sinta melhor consigo mesma e aumentar a autoestima de quem confia no meu trabalho através do cuidado capilar.',
  },
  {
    initials: 'M',
    name: 'Mirtes',
    role: 'Estética Especialista',
    bio: 'O poder da estética é algo que me fascina pela forma como pode mudar o dia e a vida de alguém. Adoro cuidar das unhas e da pele de cada uma das nossas clientes e ver o impacto que estes pormenores tão importantes têm no aumento da autoestima e confiança de cada pessoa. Dedico-me diariamente ao cuidado das nossas clientes para que se sintam sempre lindas, poderosas, capazes de conquistar o mundo!',
  },
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-56 h-56 md:w-64 md:h-64 rounded-full mb-8 border-2 border-primary/30 group-hover:border-primary transition-colors duration-500 overflow-hidden relative shadow-xl bg-primary/10 flex items-center justify-center">
                <span className="text-5xl font-serif font-bold text-primary select-none">{member.initials}</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-1">{member.name}</h3>
              <p className="text-primary font-medium tracking-wide uppercase text-sm mb-6">{member.role}</p>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
