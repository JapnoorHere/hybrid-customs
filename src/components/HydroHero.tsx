"use client";
import { useEffect, useState } from "react";

export default function HydroHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden bg-black">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60 transition-transform duration-[20s] scale-110"
        style={{ backgroundImage: "url('/images/hydro-hero-v2.png')" }} 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-[1]" />
      
      <div className={`max-w-7xl mx-auto px-6 relative z-10 w-full transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} flex flex-col items-center md:items-start text-center md:text-left`}>
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Water Transfer Technlogy</span>
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-white">
          HYDRO<span className="text-primary">&</span>DIP<span className="text-primary">.</span>
        </h1>
        <div className="w-24 h-1 bg-primary mt-6 mx-auto md:mx-0" />
      </div>
    </section>
  );
}
