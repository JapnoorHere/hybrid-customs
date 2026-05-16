"use client";
import Image from "next/image";
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

const products = [
  { id: 1, name: "Demon Eye Retrofit", src: "/images/h1.jpg" },
  { id: 2, name: "Signature Halo", src: "/images/h2.jpg" },
  { id: 3, name: "Audi Style DRL", src: "/images/h3.jpg" },
  { id: 4, name: "RGB Matrix", src: "/images/h4.jpg" },
  { id: 5, name: "Precision Projector", src: "/images/h5.jpg" },
  { id: 6, name: "Sequential DRL", src: "/images/h6.jpg" },
];

export default function LightingGallery() {
  const containerRef = useScrollReveal();
  return (
    <section ref={containerRef} className="py-24 bg-white text-black border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div data-reveal="fade-up" className="text-center mb-16">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-3 block">Portfolio</span>
          <h2 className="text-4xl font-black uppercase tracking-tight">RECENT <span className="text-primary">BUILDS</span></h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} data-reveal="fade-up" className="group relative aspect-square overflow-hidden bg-gray-100 border border-gray-100">
              <Image
                src={product.src}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-6 left-6 z-10 transition-all duration-500 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[10px] text-primary font-bold tracking-[0.3em] uppercase block mb-1">Retrofit</span>
                <h3 className="text-white font-black uppercase tracking-widest text-sm">{product.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}