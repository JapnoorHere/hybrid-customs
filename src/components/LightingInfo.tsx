"use client";
import { 
  CheckCircle2, ShieldCheck, Wrench, Gem, 
  PenTool, Truck, Headset, RotateCcw 
} from "lucide-react";
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

export default function LightingInfo() {
  const containerRef = useScrollReveal();
  return (
    <section ref={containerRef} className="py-24 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
          <div data-reveal="slide-left">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Superior Engineering</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-8 leading-[1.1] tracking-tighter">
              Function Meets <br /><span className="text-primary">Distinctive Style</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Headlights are the identity of your vehicle. Whether your stock lights are broken, opaque, or just standard, customizing them is the simplest and most economical way to style up your ride while improving safety.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Premium Products", "NO Wire Cutting", "Free Shipping", "Unique Designs", "Plug & Play", "Better Visibility"].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-gray-50 border border-gray-100 p-4 rounded-sm">
                  <CheckCircle2 className="text-primary w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div data-reveal="slide-right" className="pt-8">
            <div className="relative aspect-video overflow-hidden border border-gray-100 rounded-sm shadow-2xl">
               <img src="/images/h1.jpg" alt="Detail" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>

        {/* 7 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            reveal="fade-up"
            icon={<ShieldCheck className="text-primary" />} 
            title="Warranty" 
            desc="We provide 1 year warranty on installation which included any sort of leakages, moisture and damage due to installation."
          />
          <FeatureCard 
            reveal="fade-up"
            icon={<Wrench className="text-primary" />} 
            title="Professionalism" 
            desc="To provide best services we have skilled staff with fully equipped workshop. We keep special care of your vehicles during projects."
          />
          <FeatureCard 
            reveal="fade-up"
            icon={<Gem className="text-primary" />} 
            title="Quality" 
            desc="We strictly use branded retrofit kits (DENSO, PHILIPS, OSRAM, NHK, FOCUS, AES etc.) to ensure reliability, safety and quality."
          />
          <FeatureCard 
            reveal="fade-up"
            icon={<PenTool className="text-primary" />} 
            title="On-Demand Customs" 
            desc="We can customize products according to your choice and need. You just have to show us your designs, we will execute it."
          />
          <FeatureCard 
            reveal="fade-up"
            icon={<Truck className="text-primary" />} 
            title="Free and Fast Shipping" 
            desc="Free and Fast Shipping all over India. We ensure your custom units reach you safely and on time."
          />
          <FeatureCard 
            reveal="fade-up"
            icon={<Headset className="text-primary" />} 
            title="Live Support" 
            desc="While installation we give live support via phone or internet to our distant customers to ensure a perfect setup."
          />
          <FeatureCard 
            reveal="fade-up"
            icon={<RotateCcw className="text-primary" />} 
            title="Easy Returns" 
            desc="Our Return Policy is very simple and easy. You can easily return or replace our custom headlights. Check policy for more info."
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, reveal }: { icon: any, title: string, desc: string, reveal?: string }) {
  return (
    <div data-reveal={reveal} className="bg-gray-50 p-8 border-b-2 border-transparent hover:border-primary hover:bg-white hover:shadow-xl transition-all duration-300">
      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mb-6 shadow-sm">{icon}</div>
      <h4 className="font-black uppercase tracking-widest text-sm mb-3 text-black">{title}</h4>
      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
    </div>
  );
}