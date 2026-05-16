"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const els = ref.current.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("revealed");
            observer.unobserve(entry.target);
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

export default function Services() {
  const containerRef = useScrollReveal();

  const services = [
    {
      num: "01",
      title: "CUSTOM LIGHTS",
      subtitle: "Precision Engineering",
      description: "We provide custom headlight solutions. Customize your stock lights with our wide range of projectors, halos, and DRLs, or choose from our huge range of readymade aftermarket units.",
      link: "/lighting",
      linkText: "Explore Custom Lights",
      image: "/images/custom-light.png",
      reverse: false
    },
    {
      num: "02",
      title: "CAR CARE",
      subtitle: "Premium Detailing",
      description: "Hybrid Customs is the preferred choice for car care. From basic waxing to specialized ceramic coatings and full restorations, all services are available in our one-stop facility.",
      link: "/car-care",
      linkText: "Explore Car Care",
      image: "/images/polishing-detail.png",
      reverse: true
    },
    {
      num: "03",
      title: "MODS & PERFORMANCE",
      subtitle: "High Modification Division",
      description: "Enhance aerodynamics and aesthetics with custom body kits. We install splitters, diffusers, and widebody kits with factory-level precision. From mild to wild, we do it all.",
      link: "/performance",
      linkText: "Explore MODS & PERFORMANCE",
      image: "/images/mods-performance.avif",
      reverse: false
    },
    {
      num: "04",
      title: "CAR AUDIO",
      subtitle: "Sound Engineering",
      description: "Experience crystal-clear highs and powerful bass with our premium audio installations. From custom speaker setups to full system builds, we craft listening experiences.",
      link: "/car-audio",
      linkText: "Explore Car Audio",
      image: "/images/audio-hero.jpg",
      reverse: true
    },
    {
      num: "05",
      title: "HYDRO DIPPING",
      subtitle: "Water Transfer Technology",
      description: "Apply intricate patterns like carbon fiber or marble to wheels, engine covers, and interior trim with our high-durability hydro dipping process.",
      link: "/hydro-dipping",
      linkText: "Explore Hydro Dipping",
      image: "/images/hydro-hero-v2.png",
      reverse: false
    },
    {
      num: "06",
      title: "OFF-ROAD",
      subtitle: "Adventure Ready",
      description: "Transform your vehicle into an off-road beast. From suspension lifts to expedition-ready packages, we engineer solutions for the most demanding adventures.",
      link: "/offroad",
      linkText: "Explore Off-Road",
      image: "/images/thar-offroad-hero.jpg",
      reverse: true
    }
  ];

  return (
    <div ref={containerRef} className="bg-white text-black">
      {/* ───────── HEADER ───────── */}
      <section id="services" className="pt-24 pb-10">
        <div className="max-w-[1320px] mx-auto px-6 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div data-reveal="fade-up">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
              OUR <span className="text-primary">EXPERTISE</span>
            </h2>
            <p className="text-gray-500 mt-3 text-base max-w-xl leading-relaxed">
              Precision engineering for the automotive enthusiast. We don&apos;t just modify cars; we elevate them.
            </p>
          </div>
        </div>
      </section>

      {/* ───────── SERVICES LIST ───────── */}
      {services.map((service, index) => (
        <div key={index} className="max-w-[1320px] mx-auto px-6 py-16">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 items-stretch min-h-[650px] ${service.reverse ? 'lg:flex-row-reverse' : ''}`}>
            {/* Image */}
            <div data-reveal={service.reverse ? "slide-left" : "slide-right"} className={`img-hover-zoom relative w-full min-h-[550px] lg:min-h-0 overflow-hidden ${service.reverse ? 'order-1 lg:order-2' : ''}`}>
              <Image src={service.image} alt={service.title} fill className="object-cover" />
            </div>
            
            {/* Content */}
            <div data-reveal={service.reverse ? "slide-right" : "slide-left"} className={`flex flex-col justify-center items-center lg:items-start text-center lg:text-left py-10 ${service.reverse ? 'order-2 lg:order-1 pr-0 lg:pr-16' : 'pl-0 lg:pl-16'}`}>
              <span className="text-primary text-2xl mb-4">✦</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-2 block">Service {service.num}</span>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] mb-4">{service.title}</h3>
              <span className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">{service.subtitle}</span>
              <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
                {service.description}
              </p>
              <a href={service.link} className="link-arrow text-xs font-extrabold uppercase tracking-[0.15em] hover:text-primary">
                {service.linkText} <span className="arrow text-base">→</span>
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* ───────── ABOUT US (DARK SECTION START) ───────── */}
      <section id="about" className="bg-[#0a0a0a] text-white border-t border-white/5">
        <div className="max-w-[1320px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div data-reveal="slide-left" className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mb-4 block">About Us</span>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-[1.1] mb-6">
                Chandigarh&apos;s Pioneer<br />Car Custom Studio
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
                Since 2009, Hybrid Customs has been redefining automotive aesthetics. We blend engineering precision with artistic vision to deliver world-class transformations.
              </p>
              <div className="flex justify-center lg:justify-start gap-16 mb-10">
                <div className="stat-item cursor-default">
                  <div className="text-4xl md:text-5xl font-black text-white">{new Date().getFullYear() - 2009}+</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-1">Years Experience</div>
                </div>
              </div>
              <a href="#" className="link-arrow text-xs font-extrabold uppercase tracking-[0.15em] text-primary hover:text-white">
                Read Our Story <span className="arrow text-base">→</span>
              </a>
            </div>
            <div data-reveal="slide-right" className="img-hover-zoom relative w-full min-h-[480px] overflow-hidden">
              <Image src="/images/about-studio-car.png" alt="Studio" fill className="object-cover rounded-sm" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
