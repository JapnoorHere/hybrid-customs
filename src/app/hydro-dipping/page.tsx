"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalNotice from "@/components/LegalNotice";
import HydroHero from "@/components/HydroHero";
import PaintHero from "@/components/PaintHero";
import Image from "next/image";
import { Droplets, CheckCircle, Wind, Layers, Award, Clock, ShieldCheck } from "lucide-react";

export default function HydroDippingPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const patternImages = [
    { src: "/images/hydro-3.png", label: "Carbon Fiber" },
    { src: "/images/hydro-2.png", label: "Matte Blackout" },
    { src: "/images/hydro-4.png", label: "Custom Design" },
    { src: "/images/hydro-dip-steering.png", label: "Custom Design" },
    { src: "/images/hyrdo-1.png", label: "Signature Interior" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % patternImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const processes = [
    { title: "Prep", desc: "Surface sanding and base coating for ultimate adhesion." },
    { title: "Activation", desc: "Dissolving the hydrographic film in our dip tank." },
    { title: "Hydro Dipping", desc: "Submerging the part with surgical precision." },
    { title: "Finish", desc: "High-gloss automotive clear coat for durability." },
  ];

  const guarantees = [
    { title: "Lifetime Gloss Warranty", icon: <Award size={20} className="text-primary" /> },
    { title: "Express Service", icon: <Clock size={20} className="text-primary" /> },
  ];

  return (
    <main className="bg-white min-h-screen text-black">
      <Navbar />
      <HydroHero />

      {/* Modern Split Process - WHITE BG */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
           <div className="relative aspect-square rounded-full overflow-hidden border-[15px] border-white shadow-2xl group">
              <Image 
                src="/images/hydro-dip-steering.png" 
                alt="Process Illustration" 
                fill 
                className="object-cover group-hover:scale-110 transition-transform duration-[10s]" 
              />
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
           </div>
           <div>
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">The Water-Transfer Process</span>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">
                 Liquid <br /><span className="text-primary italic">Transformation.</span>
              </h2>
              <div className="space-y-6">
                {processes.map((p, i) => (
                  <div key={i} className="flex gap-6 items-start group">
                    <span className="text-4xl font-black text-gray-100 group-hover:text-primary transition-colors duration-500">0{i+1}</span>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-sm mb-1 text-black">{p.title}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed max-w-sm">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Pattern Wall with Carousel - BLACK BG */}
      <section className="py-24 bg-[#0a0a0a] text-white border-t border-white/5 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
           <div className="lg:col-span-1 py-12 flex flex-col justify-center">
              {/* Decorative Line */}
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-px bg-primary" />
                 <span className="text-primary text-xs font-black tracking-[0.4em] uppercase">Gallery</span>
              </div>
              
              <h3 className="text-5xl md:text-6xl font-black uppercase mb-6 text-white leading-[0.9]">
                 <span className="text-primary italic">Patterns</span>
              </h3>
              
               <p className="text-gray-400 text-base leading-relaxed mb-8">
                  From premium <span className="text-white font-bold">carbon fiber</span> to classic <span className="text-white font-bold">wood grain</span> — our library is endless. Find your perfect finish.
               </p>
              
               {/* Animated Pattern Tags */}
               <div className="space-y-3">
                  {[
                    { title: "CARBON FIBER", subtitle: "Automotive Series", num: "01", color: "border-gray-700" },
                    { title: "WOOD GRAIN", subtitle: "Interior Series", num: "02", color: "border-amber-700" },
                    { title: "MARBLE & STONE", subtitle: "Architectural", num: "03", color: "border-gray-400" },
                    { title: "SKULLS & FLAMES", subtitle: "Graphic Series", num: "04", color: "border-red-700" },
                    { title: "CAMOUFLAGE", subtitle: "Tactical Series", num: "05", color: "border-green-700" },
                  ].map((pattern, i) => (
                    <div 
                      key={i}
                      className={`p-4 bg-black/50 border-l-4 ${pattern.color} rounded-r-lg hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 cursor-pointer group flex items-center gap-4`}
                    >
                       <span className="text-primary text-xs font-black opacity-60">{pattern.num}</span>
                       <div className="flex flex-col">
                          <span className="text-white text-xs font-black uppercase tracking-wider group-hover:text-primary transition-colors">{pattern.title}</span>
                          <span className="text-gray-500 text-[10px] uppercase tracking-widest">{pattern.subtitle}</span>
                        </div>
                    </div>
                 ))}
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 mt-10 pt-8 border-t border-white/10">
                 <div>
                    <span className="text-3xl font-black text-white">HD</span>
                    <p className="text-gray-500 text-[10px] uppercase tracking-wider mt-1">Resolution</p>
                 </div>
              </div>
           </div>
           <div className="lg:col-span-2">
             <div className="relative h-[400px] lg:h-[800px] w-full bg-black group overflow-hidden shadow-2xl">
                {patternImages.map((img, idx) => (
                  <Image 
                    key={img.src}
                    src={img.src} 
                    alt={img.label} 
                    fill
                    className={`object-cover w-full transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-20" />
                
                {/* Progress Indicators */}
                <div className="absolute bottom-6 right-6 flex gap-3 z-30">
                   {patternImages.map((_, idx) => (
                      <button 
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-12 h-1 transition-all duration-300 ${currentSlide === idx ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'}`}
                      />
                   ))}
                </div>
             </div>
           </div>
        </div>
      </section>

      {/* Paint & Dent Section - Hero */}
      <PaintHero />

      {/* Modern Restoration Focus */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center overflow-hidden">
         <div className="relative group overflow-hidden shadow-2xl rounded-sm">
            <Image 
              src="/images/paint-repair.png" 
              alt="Paint Shop" 
              width={800} 
              height={600} 
              className="object-cover group-hover:scale-105 transition-transform duration-1000" 
            />
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent text-white">
            </div>
         </div>
         <div>
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Precision Restoration</span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none">
               Restore <br /><span className="text-primary italic">Perfection.</span>
            </h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md">
               Unfortunately, accidents happen that can cause damage to the vehicle in terms of paint damage and dent. Paint scratches and dents detract from the appearance of your car.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md">
               Hybrid customs specializes in car dent repair and car painting services for all makes and models. Whether you need to fix a small scratch or a huge dent on your car, our expert mechanics can help you with all car body repair services.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-md">
               Our end to end denting and painting solutions include car scratch repair, car paint repair, car bumper repair and more. We have trained technicians and equipment technology to restore your paint jobs original look and feel with high quality and cost effective. Also we have tie ups with various insurance companies to give complete denting and painting services to the customer in terms of cashless facility.
            </p>
         </div>
      </section>

      {/* Dent PDR Feature */}
      <section id="dent-repair" className="py-24 bg-[#0a0a0a] text-white overflow-hidden relative">
         <div className="absolute top-0 right-0 w-[50%] h-full opacity-20 hidden lg:block">
            <Image src="/images/dent-repair-precision.png" alt="Dent Detail" fill className="object-cover" />
         </div>
         <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2">
            <div>
               <h3 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-10 leading-none">
                  Paintless <br />Dent Repair<span className="text-primary">.</span>
               </h3>
               <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xl">
                  Body repair helps to improve the appearance and resale value of the car. If you wish to get rid of those scratches and dents on your car, call us today or get an estimate online on our dent estimator tool.
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mb-8">
                  {guarantees.map((g, i) => (
                     <div key={i} className="flex items-center gap-4 p-5 bg-white/5 border border-white/10 group hover:border-primary transition-all duration-300 rounded-sm">
                        <div className="group-hover:scale-110 transition-transform">{g.icon}</div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-white/70">{g.title}</span>
                     </div>
                  ))}
               </div>
               <div className="flex items-center gap-8 py-6 border-y border-white/5 uppercase font-bold tracking-[0.2em] text-[10px]">
                  <div className="flex flex-col gap-1">
                     <span className="text-white text-2xl font-black">100%</span>
                     <span className="text-primary">Finish Originality</span>
                  </div>
               </div>

               <div className="mt-12 block lg:hidden">
                  <Image src="/images/dent-repair-precision.png" alt="Mobile Detail" width={600} height={400} className="object-cover shadow-2xl" />
               </div>
            </div>
         </div>
      </section>

      {/* Hydro Dipping CTA - WHITE BG */}
      <section className="py-32 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Instant Texture</span>
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-8 tracking-tighter text-black">Dip Into Style</h2>
          <p className="text-gray-500 mb-10 max-w-xl mx-auto leading-relaxed text-sm">
            Tired of boring gray plastic? Turn any component into a carbon fiber or woodgrain masterpiece today.
          </p>
          <a
            href="https://wa.me/919988229191"
            className="btn-lift inline-block px-12 py-4 bg-black text-white font-black uppercase tracking-widest text-sm hover:scale-105 transition-all duration-300"
          >
            Start Your Hydro Dip
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
