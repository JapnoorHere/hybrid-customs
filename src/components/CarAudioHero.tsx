"use client";
import { useEffect, useState } from "react";

export default function CarAudioHero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative h-[70vh] flex items-center overflow-hidden bg-black">
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-60 transition-transform duration-[20s] scale-110"
        style={{ backgroundImage: "url('/images/audio-hero.jpg')" }} 
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent z-[1]" />
      
      <div className={`max-w-7xl mx-auto px-6 relative z-10 w-full transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-gray-500 text-[10px] font-bold uppercase tracking-widest">Home</span>
          <span className="text-gray-700">/</span>
          <span className="text-primary text-[10px] font-bold uppercase tracking-widest">Car Audio</span>
        </div>
        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white">
          CAR AUDIO<span className="text-primary">.</span>
        </h1>
        <div className="w-24 h-1 bg-primary mt-6" />
      </div>
    </section>
  );
}