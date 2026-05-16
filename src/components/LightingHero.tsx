"use client";
import { useEffect, useState } from "react";

export default function LightingHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden bg-black">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-80 transition-transform duration-[20s] hover:scale-110"
        style={{ backgroundImage: "url('/images/hero-lighting.gif')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-[1]" />
      
      <div className={`max-w-7xl mx-auto px-6 relative z-10 w-full transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Precision Engineering</span>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">
          HEADLIGHTS<span className="text-primary">.</span>
        </h1>
        <div className="w-24 h-1 bg-primary mt-6" />
      </div>
    </section>
  );
}