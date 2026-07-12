import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, User, ChevronRight, CheckCircle2, Scissors, Sparkles, Hand, Leaf } from 'lucide-react';

const categories = [
  {
    id: 'cabelo',
    label: 'Cabeleireiro',
    icon: Scissors,
    services: [
      'Corte de Cabelo',
      'Coloração & Mechas',
      'Brushing & Styling',
      'Alisamento & Permanente',
      'Tratamento de Hidratação',
      'Tratamento de Nutrição',
      'Penteado para Evento Especial',
    ],
  },
  {
    id: 'estetica',
    label: 'Manicure & Pedicure',
    icon: Hand,
    services: [
      'Manicure Clássica',
      'Pedicure Clássica',
      'Manicure com Verniz Gel',
      'Pedicure com Verniz Gel',
      'Nail Art',
      'Remoção de Gel',
    ],
  },
  {
    id: 'tratamentos',
    label: 'Tratamentos',
    icon: Leaf,
    services: [
      'Tratamento Capilar Orgânico',
      'Máscara de Nutrição Profunda',
      'Tratamento Anti-Queda',
      'Cuidados de Pele',
      'Consulta de Diagnóstico Capilar',
    ],
  },
  {
    id: 'outros',
    label: 'Outros Serviços',
    icon: Sparkles,
    services: [
      'Consulta e Aconselhamento',
      'Serviço Personalizado',
    ],
  },
];

const professionals = [
  { id: 'rosa', name: 'Rosa Santos', roles: ['cabelo', 'tratamentos', 'outros'] },
  { id: 'mirtes', name: 'Mirtes', roles: ['estetica', 'tratamentos', 'outros'] },
  { id: 'qualquer', name: 'Sem preferência', roles: ['cabelo', 'estetica', 'tratamentos', 'outros'] },
];

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
];

type Step = 'service' | 'datetime' | 'info' | 'confirm';

interface BookingData {
  categoryId: string;
  service: string;
  professional: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  notes: string;
}

const STEPS: Step[] = ['service', 'datetime', 'info', 'confirm'];
const STEP_LABELS = ['Serviço', 'Data & Hora', 'Os seus dados', 'Confirmação'];

function StepIndicator({ current }: { current: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-10">
      {STEP_LABELS.map((label, i) => (
        <React.Fragment key={i}>
          <div className="flex flex-col items-center gap-1.5">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-500 ${
                i < current
                  ? 'bg-primary text-primary-foreground'
                  : i === current
                  ? 'bg-primary text-primary-foreground ring-4 ring-primary/20'
                  : 'bg-muted text-muted-foreground'
              }`}
            >
              {i < current ? <CheckCircle2 size={16} /> : i + 1}
            </div>
            <span className={`text-[10px] font-bold uppercase tracking-widest hidden sm:block transition-colors ${i === current ? 'text-primary' : 'text-muted-foreground'}`}>
              {label}
            </span>
          </div>
          {i < STEP_LABELS.length - 1 && (
            <div className={`h-px w-8 sm:w-16 mx-1 transition-all duration-500 ${i < current ? 'bg-primary' : 'bg-border'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default function Booking() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [data, setData] = useState<BookingData>({
    categoryId: '',
    service: '',
    professional: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Partial<BookingData>>({});

  const selectedCategory = categories.find(c => c.id === data.categoryId);
  const availableProfessionals = professionals.filter(p => p.roles.includes(data.categoryId));

  const validateStep = () => {
    const newErrors: Partial<BookingData> = {};
    if (step === 0) {
      if (!data.categoryId) newErrors.categoryId = 'Escolha uma categoria';
      if (!data.service) newErrors.service = 'Escolha um serviço';
    }
    if (step === 1) {
      if (!data.date) newErrors.date = 'Escolha uma data';
      if (!data.time) newErrors.time = 'Escolha um horário';
    }
    if (step === 2) {
      if (!data.name.trim()) newErrors.name = 'Introduza o seu nome';
      if (!data.phone.trim()) newErrors.phone = 'Introduza o seu telefone';
      if (!data.email.trim()) newErrors.email = 'Introduza o seu email';
      else if (!/\S+@\S+\.\S+/.test(data.email)) newErrors.email = 'Email inválido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const next = () => {
    if (validateStep()) setStep(s => Math.min(s + 1, 3));
  };
  const back = () => setStep(s => Math.max(s - 1, 0));

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const today = new Date().toISOString().split('T')[0];

  const fieldClass = (err?: string) =>
    `w-full bg-background border ${err ? 'border-red-400' : 'border-border'} rounded-sm px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm`;

  return (
    <section id="marcacao" className="py-24 bg-[#0D0D0D]">
      <div className="container mx-auto px-6 md:px-12 max-w-3xl">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Reserva Online
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold text-white"
          >
            Marcar Agora
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 mt-4 text-sm"
          >
            Reserve o seu momento em menos de 2 minutos.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-card border border-border rounded-sm p-8 md:p-12 shadow-2xl"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="text-primary" size={40} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">Marcação Solicitada!</h3>
              <p className="text-muted-foreground mb-2">
                Obrigado, <span className="text-foreground font-semibold">{data.name}</span>!
              </p>
              <p className="text-muted-foreground text-sm mb-6">
                A sua marcação para <span className="text-primary font-medium">{data.service}</span> no dia{' '}
                <span className="text-primary font-medium">{new Date(data.date + 'T00:00:00').toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long' })}</span> às{' '}
                <span className="text-primary font-medium">{data.time}</span> foi recebida.
              </p>
              <p className="text-muted-foreground text-xs mb-8 bg-muted/50 rounded-sm p-4">
                Em breve entraremos em contacto pelo telefone <span className="font-medium">{data.phone}</span> ou pelo email{' '}
                <span className="font-medium">{data.email}</span> para confirmar a sua reserva.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/351214048349?text=Olá! Acabei de fazer uma marcação online para ${encodeURIComponent(data.service)} no dia ${data.date} às ${data.time}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-[#25D366] text-white font-bold rounded-sm text-sm hover:bg-[#25D366]/90 transition-all hover:scale-105"
                >
                  Confirmar via WhatsApp
                </a>
                <button
                  onClick={() => { setSubmitted(false); setStep(0); setData({ categoryId: '', service: '', professional: '', date: '', time: '', name: '', phone: '', email: '', notes: '' }); }}
                  className="px-6 py-3 border border-border text-foreground font-bold rounded-sm text-sm hover:border-primary hover:text-primary transition-all"
                >
                  Nova Marcação
                </button>
              </div>
            </motion.div>
          ) : (
            <>
              <StepIndicator current={step} />

              <AnimatePresence mode="wait">
                {/* STEP 0 — Service */}
                {step === 0 && (
                  <motion.div key="step0" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-6">Que serviço procura?</h3>

                    {/* Category */}
                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {categories.map(cat => {
                        const Icon = cat.icon;
                        const selected = data.categoryId === cat.id;
                        return (
                          <button
                            key={cat.id}
                            onClick={() => setData(d => ({ ...d, categoryId: cat.id, service: '', professional: '' }))}
                            className={`flex items-center gap-3 p-4 rounded-sm border text-left transition-all duration-200 ${
                              selected ? 'border-primary bg-primary/5 text-foreground' : 'border-border hover:border-primary/40 text-muted-foreground hover:text-foreground'
                            }`}
                          >
                            <Icon size={18} className={selected ? 'text-primary' : ''} />
                            <span className="font-medium text-sm">{cat.label}</span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.categoryId && <p className="text-red-400 text-xs mb-4">{errors.categoryId}</p>}

                    {/* Service */}
                    {selectedCategory && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <label className="block text-sm font-bold text-foreground mb-3">Serviço específico</label>
                        <div className="grid grid-cols-1 gap-2">
                          {selectedCategory.services.map(svc => (
                            <button
                              key={svc}
                              onClick={() => setData(d => ({ ...d, service: svc }))}
                              className={`flex items-center justify-between px-4 py-3 rounded-sm border text-sm text-left transition-all duration-200 ${
                                data.service === svc
                                  ? 'border-primary bg-primary/5 text-foreground font-semibold'
                                  : 'border-border hover:border-primary/40 text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              {svc}
                              {data.service === svc && <CheckCircle2 size={16} className="text-primary shrink-0" />}
                            </button>
                          ))}
                        </div>
                        {errors.service && <p className="text-red-400 text-xs mt-2">{errors.service}</p>}
                      </motion.div>
                    )}

                    {/* Professional */}
                    {data.service && availableProfessionals.length > 0 && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
                        <label className="block text-sm font-bold text-foreground mb-3">
                          <User size={14} className="inline mr-2 text-primary" />
                          Profissional (opcional)
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {availableProfessionals.map(p => (
                            <button
                              key={p.id}
                              onClick={() => setData(d => ({ ...d, professional: p.id }))}
                              className={`px-4 py-2 rounded-sm border text-sm transition-all duration-200 ${
                                data.professional === p.id
                                  ? 'border-primary bg-primary/5 text-foreground font-semibold'
                                  : 'border-border hover:border-primary/40 text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              {p.name}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* STEP 1 — Date & Time */}
                {step === 1 && (
                  <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-6">Quando prefere vir?</h3>

                    <div className="mb-6">
                      <label className="block text-sm font-bold text-foreground mb-2">
                        <Calendar size={14} className="inline mr-2 text-primary" />
                        Data
                      </label>
                      <input
                        type="date"
                        min={today}
                        value={data.date}
                        onChange={e => setData(d => ({ ...d, date: e.target.value, time: '' }))}
                        className={fieldClass(errors.date)}
                      />
                      {errors.date && <p className="text-red-400 text-xs mt-1">{errors.date}</p>}
                    </div>

                    {data.date && (
                      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                        <label className="block text-sm font-bold text-foreground mb-3">
                          <Clock size={14} className="inline mr-2 text-primary" />
                          Horário disponível
                        </label>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                          {timeSlots.map(t => (
                            <button
                              key={t}
                              onClick={() => setData(d => ({ ...d, time: t }))}
                              className={`py-2.5 rounded-sm border text-sm font-medium transition-all duration-200 ${
                                data.time === t
                                  ? 'border-primary bg-primary text-primary-foreground'
                                  : 'border-border hover:border-primary/60 text-muted-foreground hover:text-foreground'
                              }`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                        {errors.time && <p className="text-red-400 text-xs mt-2">{errors.time}</p>}
                      </motion.div>
                    )}

                    {data.date && data.time && (
                      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-sm">
                        <p className="text-sm text-foreground">
                          <span className="font-semibold text-primary">{data.service}</span> —{' '}
                          {new Date(data.date + 'T00:00:00').toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })} às{' '}
                          <span className="font-semibold">{data.time}</span>
                        </p>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* STEP 2 — Personal Info */}
                {step === 2 && (
                  <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-6">Os seus dados</h3>
                    <div className="space-y-5">
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">Nome Completo *</label>
                        <input type="text" value={data.name} onChange={e => setData(d => ({ ...d, name: e.target.value }))} className={fieldClass(errors.name)} placeholder="O seu nome completo" />
                        {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-bold text-foreground mb-2">Telemóvel *</label>
                          <input type="tel" value={data.phone} onChange={e => setData(d => ({ ...d, phone: e.target.value }))} className={fieldClass(errors.phone)} placeholder="+351 900 000 000" />
                          {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-foreground mb-2">Email *</label>
                          <input type="email" value={data.email} onChange={e => setData(d => ({ ...d, email: e.target.value }))} className={fieldClass(errors.email)} placeholder="seu@email.com" />
                          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-foreground mb-2">Observações ou pedidos especiais</label>
                        <textarea rows={4} value={data.notes} onChange={e => setData(d => ({ ...d, notes: e.target.value }))} className={`${fieldClass()} resize-none`} placeholder="Alguma preferência, alergia ou pedido especial que devamos saber?" />
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3 — Review */}
                {step === 3 && (
                  <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
                    <h3 className="text-lg font-serif font-bold text-foreground mb-6">Confirmar a sua marcação</h3>
                    <div className="space-y-4 mb-8">
                      {[
                        { label: 'Serviço', value: data.service },
                        { label: 'Categoria', value: selectedCategory?.label ?? '' },
                        { label: 'Profissional', value: professionals.find(p => p.id === data.professional)?.name || 'Sem preferência' },
                        { label: 'Data', value: new Date(data.date + 'T00:00:00').toLocaleDateString('pt-PT', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) },
                        { label: 'Hora', value: data.time },
                        { label: 'Nome', value: data.name },
                        { label: 'Telefone', value: data.phone },
                        { label: 'Email', value: data.email },
                        ...(data.notes ? [{ label: 'Observações', value: data.notes }] : []),
                      ].map(row => (
                        <div key={row.label} className="flex items-start justify-between gap-4 py-3 border-b border-border/60 last:border-0">
                          <span className="text-sm text-muted-foreground font-medium shrink-0">{row.label}</span>
                          <span className="text-sm text-foreground text-right font-semibold">{row.value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground mb-6 text-center">
                      Após confirmar, a nossa equipa entrará em contacto para validar a disponibilidade e confirmar a sua marcação.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Navigation */}
              <div className={`flex mt-8 gap-3 ${step > 0 ? 'justify-between' : 'justify-end'}`}>
                {step > 0 && (
                  <button
                    onClick={back}
                    className="px-6 py-3 border border-border text-foreground font-bold rounded-sm text-sm hover:border-primary hover:text-primary transition-all"
                  >
                    Voltar
                  </button>
                )}
                {step < 3 ? (
                  <button
                    onClick={next}
                    className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-sm text-sm hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                  >
                    Continuar <ChevronRight size={16} />
                  </button>
                ) : (
                  <button
                    onClick={handleSubmit}
                    className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-sm text-sm hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2"
                  >
                    Confirmar Marcação <CheckCircle2 size={16} />
                  </button>
                )}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
