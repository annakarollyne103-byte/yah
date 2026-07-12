import React from 'react';

const trustItems = [
  "4,9 ★ 170+ avaliações Google",
  "Produtos Biológicos",
  "Atendimento Personalizado",
  "Lisboa, desde 2010"
];

export default function TrustStrip() {
  return (
    <div className="w-full bg-[#0D0D0D] py-4 border-b border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          {trustItems.map((item, index) => (
            <React.Fragment key={index}>
              <div className="flex items-center text-primary/90 text-sm font-medium tracking-wide uppercase">
                {item}
              </div>
              {index < trustItems.length - 1 && (
                <div className="hidden md:block w-1 h-1 rounded-full bg-primary/40 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
