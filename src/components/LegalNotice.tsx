"use client";
import { ShieldCheck, FileText, Scale } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import TermsModal from "./TermsModal";

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

export default function LegalNotice() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Trust & Compliance</span>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-black mb-8 leading-none">
              Committed to <br /><span className="text-primary">Transparency.</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              At Hybrid Customs, we value the trust you place in us for your automotive transformations. Our legal frameworks are designed to protect both your data and your investment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
             <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm hover:-translate-y-2 transition-transform duration-500">
                <ShieldCheck className="text-primary w-8 h-8 mb-6" />
                <h4 className="font-bold text-black uppercase tracking-widest text-sm mb-3">Privacy First</h4>
                <p className="text-gray-500 text-xs leading-relaxed">We never share your personal information with third-party sources.</p>
             </div>
             <div className="p-8 bg-gray-50 border border-gray-100 rounded-sm hover:-translate-y-2 transition-transform duration-500">
                <Scale className="text-primary w-8 h-8 mb-6" />
                <h4 className="font-bold text-black uppercase tracking-widest text-sm mb-3">Fair Pricing</h4>
                <p className="text-gray-500 text-xs leading-relaxed">Transparent market-driven pricing with no hidden surcharges.</p>
             </div>
          </div>
        </div>
      </div>
      
      <TermsModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </section>
  );
}
