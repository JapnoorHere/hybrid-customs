"use client";
import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

export default function PerformanceSection({ title, image, children, checklist, reverse, id }: any) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("revealed");
      });
    }, { threshold: 0.1 });
    ref.current?.querySelectorAll("[data-reveal]").forEach(el => observer.observe(el));
  }, []);

  return (
    <section id={id} ref={ref} className="py-24 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          <div className={`${reverse ? "lg:order-2" : "lg:order-1"} flex flex-col items-center lg:items-start text-center lg:text-left`} data-reveal={reverse ? "slide-right" : "slide-left"}>
            {/* Modernized Hazard Stripe Header */}
            <div className="relative mb-8 inline-block">
              <div className="flex items-center">
                 <div className="h-10 w-4 bg-primary -skew-x-[25deg] mr-2" />
                 <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">{title}</h3>
              </div>
              <div className="mt-2 h-[2px] w-full bg-gradient-to-r from-primary via-black to-transparent" />
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-sm md:text-base max-w-xl mx-auto lg:mx-0">
              {children}
            </p>

            {checklist && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {checklist.map((item: string) => (
                  <div key={item} className="flex items-center justify-center lg:justify-start gap-3 bg-gray-50 p-3 rounded-sm border border-gray-100">
                    <CheckCircle2 className="text-primary w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black">{item}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className={`relative aspect-video lg:aspect-square overflow-hidden rounded-sm shadow-2xl ${reverse ? "lg:order-1" : "lg:order-2"}`} data-reveal={reverse ? "slide-left" : "slide-right"}>
            <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-[10s] hover:scale-110" />
            <div className="absolute inset-0 border-[12px] border-white/10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}