"use client";
import Image from "next/image";

export default function CarCareHero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/polishing-detail.png" 
          alt="Premium Car Detailing" 
          fill 
          className="object-cover opacity-60 scale-105 animate-slow-zoom" 
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <div className="inline-block px-4 py-1.5 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full mb-8 animate-fade-in-down">
          <span className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">One-Stop Detailing Hub</span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8 animate-reveal-text">
          Car <br /> <span className="text-primary italic">Care.</span>
        </h1>
        
        <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-12 animate-fade-in delay-500">
          From basic waxing to specialized ceramic coatings and full restorations. We provide factory-level protection for the ultimate automotive pride.
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 animate-fade-in delay-700">
           <a href="#packages" className="px-10 py-4 bg-primary text-black font-black uppercase tracking-widest text-xs hover:bg-white transition-all duration-300 transform hover:scale-105">
              Explore Packages
           </a>
           <a href="https://wa.me/919988229191" className="px-10 py-4 border border-white/20 text-white font-black uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300">
              Order Online
           </a>
        </div>
      </div>
    </section>
  );
}
