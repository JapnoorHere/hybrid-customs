"use client";
import { useEffect, useRef } from "react";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function LightingComparison() {
  const containerRef = useScrollReveal();
  return (
    <section ref={containerRef} className="py-24 bg-[#0a0a0a] text-white border-y border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div data-reveal="fade-up" className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Performance</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none text-white">
              TECHNICAL <span className="text-primary">SUPERIORITY.</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
            Calibration is key. Our headlight systems are engineered to provide maximum visibility without blinding oncoming traffic.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
              <div className="relative group overflow-hidden rounded-sm border border-white/10 bg-black">
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-widest border border-white/10 text-gray-400">Ordinary Halogen</span>
                </div>
                <img data-reveal="slide-left" src="/images/stock-halogen.jpg" className="w-full h-full object-cover opacity-40 grayscale" alt="Stock" />
              </div>
              <div className="relative group overflow-hidden rounded-sm border-2 border-primary bg-black">
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-primary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black shadow-lg">Hybrid Precision LED</span>
                </div>
                <img data-reveal="slide-left" src="/images/custom-led.jpg" className="w-full h-full object-cover opacity-80" alt="Hybrid" />
              </div>
            </div>
          </div>
          <div data-reveal="slide-right" className="lg:col-span-4 bg-white/[0.02] border border-white/5 p-10 rounded-sm">
            <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] mb-4 block">Architecture</span>
            <h3 className="text-xl font-black uppercase tracking-widest text-white mb-6">Wiring Blueprint</h3>
            <p className="text-gray-400 text-xs leading-relaxed mb-10">Our custom relay harness features ceramic sockets for safety and consistent voltage.</p>
            <div className="bg-white/5 p-4 rounded-sm border border-white/5">
              <img src="/images/clean-wiring-diagram.jpg" alt="Wiring" className="w-full opacity-90 invert brightness-200" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}