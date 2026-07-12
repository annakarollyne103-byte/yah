import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, UserCheck, Sparkles, Award } from 'lucide-react';

const features = [
  {
    icon: Leaf,
    title: 'Produtos Biológicos & Orgânicos',
    description: 'Tratamentos capilares formulados com ingredientes naturais que respeitam a saúde do seu cabelo e do ambiente.'
  },
  {
    icon: UserCheck,
    title: 'Atendimento Personalizado',
    description: 'Cada cliente é único. Realizamos um diagnóstico capilar detalhado antes de qualquer serviço.'
  },
  {
    icon: Sparkles,
    title: 'Ambiente Elegante',
    description: 'Um espaço desenhado para o seu conforto, proporcionando uma experiência relaxante e luxuosa.'
  },
  {
    icon: Award,
    title: 'Resultados Garantidos',
    description: 'Profissionais de excelência com formação contínua nas mais avançadas técnicas internacionais.'
  }
];

export default function Features() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            A Nossa Filosofia
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
          >
            Porquê Escolher-nos
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-card p-8 rounded-sm hover:shadow-xl transition-shadow border border-transparent hover:border-border"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-serif font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
