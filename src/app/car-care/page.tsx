"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalNotice from "@/components/LegalNotice";
import CarCareHero from "@/components/CarCareHero";
import Image from "next/image";
import { Sparkles, Shield, Droplets, SprayCan, CheckCircle2, Waves, Wind, Layers, ArrowUpRight } from "lucide-react";

export default function CarCarePage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselImages = [
    "/images/wrap-1.jpg",
    "/images/wrap-2.jpg",
    "/images/wrap-3.jpg",
    "/images/ceramic-coating.jpeg",
    "/images/ppf.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const steps = [
    { step: "Step-1", title: "Detailed Washing", desc: "We wash and clean your car in a very detailed way so that there are no contaminants and residues left on the surface." },
    { step: "Step-2", title: "Claying/Sanding", desc: "Remove pollutions, grease & contaminants." },
    { step: "Step-3", title: "Compounding", desc: "For paint refinement and scratch removal." },
    { step: "Step-4", title: "Glazing", desc: "Glazing removes all swirl marks & minor scratches from paint surface." },
    { step: "Step-5", title: "Waxpro42™/Cermaic Coating", desc: "Both are paint protection coatings protect paints from harmful UV rays, Contaminants and scratches." },
    { step: "Step-6", title: "Dressing", desc: "All plastic parts, rubber parts, vinyl, Upholstery, Engine, dashboard etc to be dressed with 3M dresser which recondition it and make it uv protected." },
  ];


  return (
    <main className="bg-white min-h-screen text-black">
      <Navbar />
      <CarCareHero />

      {/* The Art of Car Care - WHITE BG */}
      <section className="py-24 bg-white overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
           
           {/* Header */}
           <div className="mb-12">
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Transformation & Protection</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-tight italic">
                 The Art of <span className="text-primary">Wrap & PPF.</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed max-w-2xl">
                 Car wrapping is booming the world over as drivers realise that it's the best way to completely changing the look of your car, with materials like the popular matte back, matte blue, gloss white and black, carbon fibre and more, the personalisation prospects are infinite.
              </p>
           </div>

           {/* Carousel - Full Width */}
           <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl group mb-8">
              {carouselImages.map((img, idx) => (
                 <Image 
                   key={img}
                   src={img} 
                   alt={`Car Care Slide ${idx + 1}`} 
                   fill 
                   className={`object-cover transition-opacity duration-1000 ${currentSlide === idx ? 'opacity-100 z-10' : 'opacity-0 z-0'}`} 
                 />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-20" />
              
              {/* Progress Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                 {carouselImages.map((_, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`w-12 h-1 transition-all duration-300 ${currentSlide === idx ? 'bg-primary' : 'bg-white/30 hover:bg-white/50'}`}
                    />
                 ))}
              </div>
           </div>
              
           {/* Service Cards - Side by Side */}
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Wax Pro 42 */}
              <div className="p-6 bg-gray-50 border border-gray-100 hover:border-primary transition-all duration-300 group/card">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/card:bg-primary transition-colors">
                       <Sparkles className="text-primary group-hover/card:text-black transition-colors" size={24} />
                    </div>
                    <div className="flex-grow">
                       <div className="flex items-center gap-3 mb-2">
                          <span className="text-primary text-[9px] font-black uppercase tracking-[0.2em] bg-primary/10 px-2 py-1">Signature Series</span>
                       </div>
                       <h3 className="text-lg font-black uppercase tracking-tight text-black mb-2">Wax Pro 42™ Premium Treatment</h3>
                       <p className="text-gray-500 text-xs leading-relaxed mb-3">
                          A full-scale rejuvenation process that eliminates oxidation, light scratches, and stains through precision sanding, compounding, and glazing.
                       </p>
                       <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          <div className="flex items-center gap-2 text-[10px] font-medium text-gray-500"><CheckCircle2 className="text-primary" size={12} /> Full Body Decon</div>
                          <div className="flex items-center gap-2 text-[10px] font-medium text-gray-500"><CheckCircle2 className="text-primary" size={12} /> Scratch Removal</div>
                          <div className="flex items-center gap-2 text-[10px] font-medium text-gray-500"><CheckCircle2 className="text-primary" size={12} /> Engine Detailing</div>
                          <div className="flex items-center gap-2 text-[10px] font-medium text-gray-500"><CheckCircle2 className="text-primary" size={12} /> Mirror Finish</div>
                       </div>
                    </div>
                 </div>
              </div>
              
              {/* Ceramic Coating */}
              <div className="p-6 bg-gray-50 border border-gray-100 hover:border-primary transition-all duration-300 group/card">
                 <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover/card:bg-primary transition-colors">
                       <Shield className="text-primary group-hover/card:text-black transition-colors" size={24} />
                    </div>
                    <div className="flex-grow">
                       <div className="flex items-center gap-3 mb-2">
                          <span className="text-primary text-[9px] font-black uppercase tracking-[0.2em] bg-primary/10 px-2 py-1">Nano Technology</span>
                       </div>
                       <h3 className="text-lg font-black uppercase tracking-tight text-black mb-2">Ceramic & Graphine Coating</h3>
                       <p className="text-gray-500 text-xs leading-relaxed mb-3">
                          Semi-permanent hydrophobic shield that repels water, dust, and grime with superior scratch resistance and permanent gloss bond.
                       </p>
                       <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          <div className="flex items-center gap-2 text-[10px] font-medium text-gray-500"><CheckCircle2 className="text-primary" size={12} /> Nano-Glass Tech</div>
                          <div className="flex items-center gap-2 text-[10px] font-medium text-gray-500"><CheckCircle2 className="text-primary" size={12} /> Total Decon</div>
                          <div className="flex items-center gap-2 text-[10px] font-medium text-gray-500"><CheckCircle2 className="text-primary" size={12} /> Hydrophobic Shield</div>
                          <div className="flex items-center gap-2 text-[10px] font-medium text-gray-500"><CheckCircle2 className="text-primary" size={12} /> Interior Care</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* ── Section 2: Custom Interior & Seating (DARK BG) ── */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
         <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
         
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
                  Premium <span className="text-primary italic">Interior.</span>
               </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
               {[
                  { title: "Bucket Fitting", src: "/images/custom-seat.png" },
                  { title: "Luxury Detailing", src: "/images/luxury-seats.png" },
                  { title: "Custom Seat Covers", src: "/images/bucket-fitting.png" },
                  { title: "Ventilated Seats", src: "/images/ventilated-seats.png" },
                  { title: "Recliner Seats", src: "/images/recliner-seats.png" },
                  { title: "Full Interior", src: "/images/full-interior.png" },
               ].map((item, index) => (
                  <div key={index} className="group relative aspect-square overflow-hidden bg-white/5 border border-white/10 hover:border-primary transition-all duration-500">
                     <Image 
                        src={item.src} 
                        alt={item.title} 
                        fill 
                        className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000" 
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                     <div className="absolute bottom-6 left-6">
                        <h4 className="text-lg font-black uppercase tracking-tighter text-white group-hover:text-primary transition-colors">
                           {item.title}
                        </h4>
                        <div className="w-8 h-1 bg-primary mt-2 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>


      {/* ── Section 4: Modern Process List ── */}
      <section className="py-24 bg-gray-50 border-t border-gray-100">
         <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-24">
               <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Modern Methodology</span>
               <h3 className="text-5xl font-black uppercase tracking-tighter">The Restoration Cycle</h3>
            </div>
            
            <div className="relative">
               {/* Vertical line connector */}
               <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gray-200" />
               
               <div className="space-y-24">
                  {steps.map((s, i) => (
                    <div key={i} className={`relative flex flex-col md:flex-row items-center gap-12 group ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                       {/* Circle Indicator */}
                       <div className="absolute left-[39px] md:left-1/2 md:-translate-x-1/2 top-0 w-px h-full bg-gray-200" />
                       <div className="relative z-10 w-20 h-20 rounded-full bg-black border-4 border-white flex items-center justify-center text-primary font-black text-xl group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-xl">
                          {i+1}
                       </div>
                       
                       <div className={`flex-grow md:w-1/2 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                          <h5 className="text-2xl font-black uppercase tracking-tight text-black mb-4">{s.title}</h5>
                          <p className="text-gray-400 text-xs italic leading-relaxed max-w-sm ml-auto mr-auto md:ml-0 md:mr-0 inline-block">{s.desc}</p>
                       </div>
                       
                       <div className="hidden md:block md:w-1/2" />
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* Why Choose Car Care - BLACK BG */}
      <section className="py-24 bg-black text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
           <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter italic">
                 The Ultimate <span className="text-primary">Choice</span>
              </h2>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 max-w-6xl mx-auto">
              {[
                "GIVES YOUR VEHICLE A UNIQUE ONE-OF-A-KIND LOOK",
                "Does NOT devalue the resell value of your car like a paint job does.",
                "Car care services protect your OEM paint and maintain factory finish.",
                "You can restore the car to it's original condition with professional detailing.",
                "Regular maintenance preserves warranties and keeps your vehicle in top condition.",
                "Professional car care costs considerably less than major repairs or repaints.",
                "Advanced coatings and sealants provide finishes that last longer than standard paint.",
                "Car care products come in many finishes: ceramic, matte, gloss, and protective coatings.",
                "Expensive, color-matching paint fees are unnecessary for scratches or accident vehicles; just detailed the section that needs attention.",
                "It's difficult to tell it's not new. -You don't have to do your entire car; you can just focus on high-impact areas.",
                "Matte-finish protection can be brittle and chip easily while ceramic coatings are more durable and harder to scratch. In the event that repairs are needed, the damaged area can be easily re-treated, providing a perfect match.",
                "Hides dings or scratches and freshens the look of your vehicle."
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 border-b border-white/10 pb-6 h-full items-start">
                   <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                   <p className="text-xs md:text-sm text-gray-400 font-medium leading-relaxed">
                      {item}
                   </p>
                </div>
              ))}
           </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
