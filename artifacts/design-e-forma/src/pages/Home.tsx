import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustStrip from '@/components/TrustStrip';
import Features from '@/components/Features';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import Organic from '@/components/Organic';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <Services />
        <Gallery />
        <Testimonials />
        <Team />
        <Organic />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingElements />
    </div>
  );
}
