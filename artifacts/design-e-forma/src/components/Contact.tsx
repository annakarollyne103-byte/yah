import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <section id="contacto" className="py-24 bg-background">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Contact Info & Map */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
              Visite-nos
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
              O Seu Momento
            </h2>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Morada</h4>
                  <p className="text-muted-foreground">R. Manuel Ferreira de Andrade nº18-B<br/>1500-417 Lisboa, Portugal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Telefone</h4>
                  <p className="text-muted-foreground">+351 214 048 349</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-primary mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Email</h4>
                  <p className="text-muted-foreground">contato@designeforma.pt</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="text-primary mt-1 shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-foreground mb-1">Horário</h4>
                  <p className="text-muted-foreground">Segunda a Sexta, 9h–19h<br/>Sábado, 9h–17h</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder/Iframe */}
            <div className="w-full h-64 bg-card rounded-sm overflow-hidden border border-border">
              <iframe 
                title="Localização Design e Forma"
                src="https://maps.google.com/maps?q=R.+Manuel+Ferreira+de+Andrade+18-B,+1500-417+Lisboa&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-card p-8 md:p-12 rounded-sm border border-border shadow-sm">
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">Marcar Consulta</h3>
              
              {formStatus === 'success' ? (
                <div className="bg-primary/10 border border-primary/20 text-foreground p-6 rounded-sm text-center">
                  <p className="font-medium text-lg text-primary mb-2">Mensagem Enviada!</p>
                  <p className="text-muted-foreground">Obrigado pelo seu contacto. Entraremos em contacto brevemente para confirmar a sua marcação.</p>
                  <button 
                    onClick={() => setFormStatus('idle')}
                    className="mt-6 text-sm font-bold tracking-widest uppercase text-primary hover:text-foreground transition-colors"
                  >
                    Nova Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      id="name" 
                      required
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="O seu nome"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        required
                        className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-foreground mb-2">Telefone</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        required
                        className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="+351 900 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-bold text-foreground mb-2">Serviço Pretendido</label>
                    <select 
                      id="service" 
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="corte">Corte de Cabelo</option>
                      <option value="coloracao">Coloração e Mechas</option>
                      <option value="tratamento">Tratamentos Capilares</option>
                      <option value="styling">Brushing e Styling</option>
                      <option value="outro">Outro / Consulta</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">Mensagem (Opcional)</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full bg-background border border-border rounded-sm px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-primary text-primary-foreground font-bold text-lg py-4 rounded-sm hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex justify-center items-center"
                  >
                    {formStatus === 'submitting' ? (
                      <div className="w-6 h-6 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      "Enviar Mensagem"
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
