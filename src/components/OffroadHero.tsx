"use client";

import { useState, useEffect } from "react";

export default function OffroadHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-[105vh] flex items-center overflow-hidden bg-black">
      
      {/* ── Static Background ── */}
      <div
        className="absolute inset-0 z-0 transition-all duration-[2000ms] ease-in-out"
        style={{
          backgroundImage: `url('/images/thar-offroad-hero.jpg')`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Light overlays – image stays very visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent z-[1]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-[1]" />

      {/* ── Ambient glow ── */}
      <div className="absolute top-[20%] right-[15%] w-[350px] h-[350px] rounded-full bg-primary/10 blur-[100px] z-[2] pointer-events-none animate-pulse" />

      {/* ── Corner accent lines ── */}
      <div className="absolute top-8 right-8 z-20 opacity-25 pointer-events-none">
        <div className="w-20 h-[1px] bg-primary ml-auto" />
        <div className="w-[1px] h-20 bg-primary ml-auto" />
      </div>
      <div className="absolute bottom-28 left-8 z-20 opacity-25 pointer-events-none">
        <div className="w-[1px] h-20 bg-primary" />
        <div className="w-20 h-[1px] bg-primary" />
      </div>

      {/* ── Side vertical text ── */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-20 hidden lg:flex flex-col items-center gap-6 opacity-30">
        <div className="w-[1px] h-16 bg-white/30" />
        <span className="text-[9px] tracking-[0.35em] uppercase font-medium text-white/50 [writing-mode:vertical-lr] rotate-180">
          Off-Road Adventures
        </span>
        <div className="w-[1px] h-16 bg-white/30" />
      </div>

      {/* ── Hero Content ── */}
      <div
        className={`max-w-7xl mx-auto px-6 md:px-12 relative z-20 w-full transition-all duration-1000 ${
          mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        } flex flex-col items-center lg:items-start text-center lg:text-left`}
      >
        <div className="max-w-2xl flex flex-col items-center lg:items-start">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 transition-all duration-1000 delay-200 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70">
              Off-Road Specialists
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.95] tracking-[-0.03em] uppercase transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <span className="block text-white">Conquer</span>
            <span className="block text-white">
              Any <span className="text-gradient">Terrain.</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-sm md:text-base text-gray-300/80 mb-10 max-w-md font-light leading-relaxed transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            } mx-auto lg:mx-0`}
          >
            Premium off-road modifications, expedition-ready packages, and adventure customization — engineered for exploration.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <a
              href="#modifications"
              className="btn-lift group relative px-8 py-3.5 bg-primary text-black font-bold uppercase tracking-[0.12em] text-xs hover:bg-white transition-all duration-300 text-center overflow-hidden rounded-sm"
            >
              Explore Mods
            </a>
            <a
              href="https://wa.me/919988229191"
              className="px-8 py-3.5 border border-white/15 text-white font-bold uppercase tracking-[0.12em] text-xs hover:border-primary/60 hover:text-primary transition-all duration-300 backdrop-blur-sm bg-white/[0.03] text-center hover:translate-y-[-2px] hover:shadow-lg rounded-sm"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center opacity-40">
        <span className="text-[8px] uppercase tracking-[0.3em] mb-3 text-white/50 font-medium">
          Scroll
        </span>
        <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
          <div className="w-[2px] h-2 bg-primary rounded-full animate-bounce" />
        </div>
      </div>

      {/* ── Bottom accent line ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent z-20" />
    </section>
  );
}
