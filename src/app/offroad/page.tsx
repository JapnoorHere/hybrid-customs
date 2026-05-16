"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalNotice from "@/components/LegalNotice";
import OffroadHero from "@/components/OffroadHero";
import Image from "next/image";
import { Zap, Shield, Wrench, Navigation, Gauge, Hammer, Check, Award, TrendingUp } from "lucide-react";

export default function OffroadPage() {

  const overlayFeatures = [
    "Heavy-Duty Chassis Reinforcement",
    "All-Terrain Tire Packages",
    "Electronic Locking Differentials",
    "Off-Road Lighting Systems",
    "Side Step Bars & Running Boards",
    "360° Camera Systems",
    "Underbody Skid Plates",
    "Performance Exhaust Systems"
  ];

  const modifications = [
    {
      title: "Suspension & Lifting",
      desc: "Custom lifted suspension systems with adjustable coilovers, air springs, and heavy-duty shock absorbers for maximum off-road performance.",
      img: "/images/suspension-lifting.png"
    },
  ];

  return (
    <main className="bg-white min-h-screen text-black overflow-x-hidden">
      <Navbar />
      <OffroadHero />

      {/* ──────── INTRO SECTION ──────── */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
                Adventure Awaits
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md">
                Transform your vehicle into an off-road beast. From humble trails to extreme expeditions, Hybrid Customs specializes in comprehensive off-road modifications that combine ruggedness with refined engineering.
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-12 max-w-md">
                With over 17+ years of expertise in off-road customization, we've engineered solutions for the most demanding adventurers. Whether you're tackling rocky mountain passes, river crossings, or desert dunes, our systems are designed to perform.
              </p>
              <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-black/60">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm">
                  <Award className="text-primary" size={20} />
                </div>
                <span>Factory-Grade Quality Standards</span>
              </div>
            </div>
            <div className="relative w-full h-96 lg:h-full min-h-[500px] rounded-sm overflow-hidden shadow-2xl group">
              <img 
                src="/images/offroad-1.png" 
                alt="Off-Road Vehicle Showcase" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ──────── IMAGE SHOWCASE GRID ──────── */}
      <section className="py-24 bg-[#0a0a0a] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Gallery</span>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-white">Off-Road Transformations</h3>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">Experience the evolution of adventure. See how we transform standard vehicles into expedition-ready machines.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg group border border-white/10 hover:border-primary transition-colors duration-300">
              <img 
                src="/images/offroad-2.png" 
                alt="Off-Road Gallery 1" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              </div>
            </div>
            
            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg group border border-white/10 hover:border-primary transition-colors duration-300">
              <img 
                src="/images/offroad-3.png" 
                alt="Off-Road Gallery 2" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative h-72 rounded-sm overflow-hidden shadow-lg group border border-white/10 hover:border-primary transition-colors duration-300">
              <img 
                src="/images/offroad-4.png" 
                alt="Off-Road Gallery 3" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              </div>
            </div>

            <div className="relative h-72 rounded-sm overflow-hidden shadow-lg group border border-white/10 hover:border-primary transition-colors duration-300">
              <img 
                src="/images/offroad-5.png" 
                alt="Off-Road Gallery 4" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              </div>
            </div>

            <div className="relative h-96 rounded-sm overflow-hidden shadow-lg group border border-white/10 hover:border-primary transition-colors duration-300">
              <img 
                src="/images/offroad-6.png" 
                alt="Off-Road Gallery 4" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ──────── DETAILED MODIFICATIONS SECTIONS ──────── */}
      {modifications.map((mod, idx) => (
        <section key={idx} className={`py-24 border-t ${idx % 2 === 0 ? 'bg-white' : 'bg-[#0a0a0a] text-white'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-20 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Modification {idx + 1}</span>
                <h3 className={`text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-none ${idx % 2 === 0 ? '' : 'text-white'}`}>
                  {mod.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-8 max-w-md ${idx % 2 === 0 ? 'text-gray-600' : 'text-gray-400'}`}>
                  {mod.desc}
                </p>
                <a href="https://wa.me/919988229191" className="text-primary font-bold uppercase tracking-[0.15em] text-xs hover:opacity-70 transition-opacity inline-block">
                  Customize This → 
                </a>
              </div>
              
              <div className={`relative w-full h-96 lg:h-full min-h-[450px] rounded-sm overflow-hidden shadow-2xl group ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img 
                  src={mod.img} 
                  alt={mod.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ──────── OVERLAY SECTION WITH FEATURES ──────── */}
      <section className="relative py-32 overflow-hidden bg-black group">
        <img 
          src="/images/offroad-overlayy-bg.jpg" 
          alt="Off-Road Adventure" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 text-white">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Complete Package</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter italic">
              The Hybrid <span className="text-primary">Off-Road Standard.</span>
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
              {overlayFeatures.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 group/item">
                  <div className="w-14 h-14 bg-black/60 backdrop-blur-md flex items-center justify-center border border-primary/40 group-hover/item:border-primary group-hover/item:scale-110 transition-all duration-300 rounded-sm flex-shrink-0">
                    <Check className="text-primary" size={24} />
                  </div>
                  <span className="text-white font-black text-xs md:text-sm tracking-[0.2em] uppercase transition-colors duration-300 group-hover/item:text-primary drop-shadow-lg">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ──────── VEHICLE COMPATIBILITY ──────── */}
      <section className="py-24 bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Expertise</span>
            <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6 text-black">Compatible Vehicles</h3>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">We specialize in customizing a wide range of off-road capable vehicles. Whether it's SUV, truck, crossover, or adventure vehicle, our team has the expertise.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "4x4 SUVs",
              "Off-Road Trucks",
              "Jeeps",
              "Adventure Vehicles",
              "Crossovers",
              "Pickup Trucks",
              "Travel Vehicles",
              "Custom Builds"
            ].map((vehicle, idx) => (
              <div key={idx} className="p-6 border border-gray-200 hover:border-primary bg-gray-50 transition-all duration-300 text-center rounded-sm group cursor-default">
                <h4 className="font-black uppercase tracking-widest text-sm text-black group-hover:text-primary transition-colors">{vehicle}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
