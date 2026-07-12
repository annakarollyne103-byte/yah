import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Início', href: '#inicio' },
  { name: 'Serviços', href: '#servicos' },
  { name: 'Sobre Nós', href: '#sobre' },
  { name: 'Equipa', href: '#equipa' },
  { name: 'Galeria', href: '#galeria' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#inicio" className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-tight">
          Design e Forma
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    scrolled ? 'text-white/90' : 'text-white'
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contacto"
            className="bg-primary text-primary-foreground px-6 py-2.5 rounded-sm font-medium hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
          >
            Marcar Agora
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute top-full left-0 right-0 bg-[#0D0D0D] border-b border-white/10 shadow-lg md:hidden"
        >
          <ul className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block py-3 text-white/90 hover:text-primary text-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-primary text-primary-foreground px-6 py-3 rounded-sm font-medium w-full"
              >
                Marcar Agora
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
