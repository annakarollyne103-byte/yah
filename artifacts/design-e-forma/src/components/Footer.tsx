import React from 'react';
import { Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-serif font-bold text-primary tracking-tight mb-4">
              Design e Forma
            </h3>
            <p className="text-white/60 max-w-sm mb-6 leading-relaxed">
              O salão de referência em Lisboa para quem procura excelência, 
              atendimento personalizado e produtos biológicos de alta qualidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold tracking-widest uppercase text-sm mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-white/60 hover:text-primary transition-colors">Início</a></li>
              <li><a href="#servicos" className="text-white/60 hover:text-primary transition-colors">Serviços</a></li>
              <li><a href="#sobre" className="text-white/60 hover:text-primary transition-colors">A Nossa Filosofia</a></li>
              <li><a href="#galeria" className="text-white/60 hover:text-primary transition-colors">Galeria</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold tracking-widest uppercase text-sm mb-6">Contacto</h4>
            <ul className="space-y-3 text-white/60">
              <li>R. Manuel Ferreira de Andrade nº18-B</li>
              <li>1500-417 Lisboa, Portugal</li>
              <li className="pt-2">
                <a href="tel:+351214048349" className="text-white hover:text-primary transition-colors font-medium">
                  +351 214 048 349
                </a>
              </li>
              <li>contato@designeforma.pt</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
          <p>© 2025 Design e Forma Cabeleireiro. Todos os direitos reservados.</p>
          <p>Desenvolvido com ❤️ em Lisboa</p>
        </div>
      </div>
    </footer>
  );
}
