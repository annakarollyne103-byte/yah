import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Como posso marcar uma consulta?",
    a: "Pode ligar para +351 214 048 349 ou usar o formulário de contacto no nosso site."
  },
  {
    q: "Utilizam produtos biológicos?",
    a: "Sim, trabalhamos exclusivamente com produtos biológicos e orgânicos de alta qualidade."
  },
  {
    q: "Qual é o horário de funcionamento?",
    a: "Segunda a Sexta, 9h–19h; Sábado, 9h–17h."
  },
  {
    q: "Têm estacionamento?",
    a: "Existe estacionamento disponível nas imediações do salão."
  },
  {
    q: "Fazem penteados para eventos especiais?",
    a: "Sim, oferecemos serviço de penteados para casamentos, batizados e outros eventos especiais."
  },
  {
    q: "Aceitam cartão de crédito?",
    a: "Sim, aceitamos todas as formas de pagamento."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-foreground"
          >
            Perguntas Frequentes
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-background border border-border rounded-sm overflow-hidden"
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  onClick={() => toggleOpen(index)}
                >
                  <span className="font-serif font-bold text-lg md:text-xl text-foreground pr-8">
                    {faq.q}
                  </span>
                  <div className={`text-primary transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={20} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-muted-foreground font-light leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
