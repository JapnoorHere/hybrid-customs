import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalNotice from "@/components/LegalNotice";
import LightingHero from "@/components/LightingHero";
import Image from "next/image";
import { 
  Award, ShieldCheck, Truck, Sparkles, Plug, Eye, Lightbulb, Droplets,
  Palette, Briefcase, Star, Settings, Headphones, RefreshCw, Zap 
} from "lucide-react";

export default function LightingPage() {
  const authorizedDealers = [
    { name: "FE Retrofit", logo: "/images/dealers/retrofit.webp" },
    { name: "OSRAM", logo: "/images/dealers/Osram.svg.png" },
    { name: "Philips", logo: "/images/dealers/phillips.jpg" },
    { name: "Aozoom", logo: "/images/dealers/aozoom.png" },
    { name: "Lightforce", logo: "/images/dealers/lightforce.png" },
    { name: "Stedi", logo: "/images/dealers/stedi.webp" },
    { name: "Lumax", logo: "/images/dealers/lumax.png" },
    { name: "Hella", logo: "/images/dealers/hella.png" },
    { name: "Koito", logo: "/images/dealers/koito.png" }
  ];


  const infoBlocks = [
    {
      icon: Palette,
      title: "Designs",
      text: "We are known for out of the box designing. Our designs reflects simplicity & uniqueness. We always tries to make something new everytime."
    },
    {
      icon: ShieldCheck,
      title: "Warranty",
      text: "We provide 1 year warranty on installation which included any sort of leakages, moisture and damage due to installation."
    },
    {
      icon: Briefcase,
      title: "Professionalism",
      text: "To provide best services we have skilled staff with fully equipped workshop. We keep special care of your vehicles during projects."
    },
    {
      icon: Star,
      title: "Quality",
      text: "We strictly use branded and premium retrofit kits to ensure reliabillity, safety and quality. We use products such as DENSO,PHILIPS,OSRAM,NHK,FOCUS,HELLA,MINDA,AES etc."
    },
    {
      icon: Settings,
      title: "On-Demand Customs",
      text: "We can customize Product According to your choice and need. You just have to show us your designes, we will execute it."
    },
    {
      icon: Truck,
      title: "Free and Fast Shipping",
      text: "Free and Fast Shipping all over India."
    },
    {
      icon: Headphones,
      title: "Live Support",
      text: "While installation we give live support via phone or internet to our distant customers."
    },
    {
      icon: RefreshCw,
      title: "Easy Returns & Replacement",
      text: "Our Return Policy is very simple and easy. You can easily return or replace our lights. Please check our Return policy for more info"
    }
  ];

  return (
    <main className="bg-black min-h-screen text-white">
      <Navbar />
      <LightingHero />

      {/* Lighting Description & Specializations - WHITE BG */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Safety & Style</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-8 text-black">
                Premium <span className="text-primary">Illumination.</span>
              </h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-xl">
                 Headlights are the most critical safety feature of your vehicle, especially during night drives. 
                 At Hybrid Customs, we specialize in high-performance lighting upgrades that combine safety with unmatched aesthetics. 
                 Our solutions ensure you see further and clearer, while giving your car a premium, signature presence on the road.
              </p>
              <div className="flex items-center gap-6 p-6 bg-gray-50 border-l-4 border-primary rounded-r-lg italic">
                <p className="text-gray-800 text-sm font-medium">
                  "Lighting is the jewelry of your car—it shouldn't just be bright, it should be brilliant."
                </p>
              </div>
            </div>            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {[
                { 
                  icon: Lightbulb, 
                  title: "BI LED PROJECTORS", 
                  desc: "LASSER PROJECTOR, DEDICATED SET UP" 
                },
                { 
                  icon: Zap, 
                  title: "FOG LAMPS", 
                  desc: "HIGH PERFORMANCE BI-LED FOG LAMP PROJECTOR" 
                },
                { 
                  icon: Eye, 
                  title: "QUARD SETUP", 
                  desc: "THIS SET UP IS ALSO AVAILABLE FOR NEW VEHICLES, FOUR PROJECTORS INSTALLED INSTEAD OF TWO. THIS SET UP FOR GOOD PERFORMANCE AND HIGH OUTPUT" 
                },
                { 
                  icon: Star, 
                  title: "AFTER MARKET LIGHTS", 
                  desc: "AFTER MARKET HEADLIGHTS AND TAIL LIGHTS, AUXILLARY (OFF ROAD), LED PODS, LED BARS, LED MARKERS ARE ALSO AVAILABLE" 
                },
                { 
                   icon: Sparkles, 
                   title: "Signature Styling", 
                   desc: "Bespoke DRLs and styling elements for a truly unique presence." 
                }
              ].map((item, index) => (
                <div key={index} className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 group rounded-xl">
                  <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <item.icon className="text-primary group-hover:text-black transition-colors" size={24} />
                  </div>
                  <h4 className="font-black uppercase tracking-widest text-[10px] mb-3 text-black leading-tight">{item.title}</h4>
                  <p className="text-gray-500 text-[10px] leading-relaxed opacity-80 group-hover:opacity-100 uppercase italic">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Comparison Section */}
      <section className="py-24 bg-[#050505] text-white overflow-hidden relative">
         {/* Background light glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
               <div>
                  <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Day & Night Visibility</span>
                  <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-none italic">
                     Master <br />The <span className="text-primary">Dark.</span>
                  </h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
                     Experience the difference between outdated factory systems and our premium LED installations. 
                     Our retrofits don't just look better—they ensure ultimate clarity during nighttime drives.
                  </p>
                  
               </div>
               <div className="h-[80vh] relative aspect-[4/6] rounded-sm shadow-2xl overflow-hidden group border border-white/10">
                  <Image 
                    src="/images/lighting-comparison-new.png" 
                    alt="Headlight Comparison" 
                    fill 
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0" />
               </div>
            </div>
         </div>
      </section>

      {/* Visual Card Section - 4 Categories - WHITE BG */}
      <section className="py-24 bg-white text-black border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Our Expertise</span>
               <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
                  Lighting <span className="text-primary">Categories.</span>
               </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { title: "Bi-LED & Laser Projectors", src: "/images/bi-led-lights.png" },
                  { title: "High-Performance Fog Lamps", src: "/images/fog-lamps.png" },
                  { title: "Custom Lights", src: "/images/custom-light.png" },
                  { title: "Aftermarket Headlights", src: "/images/aftermarket-lights.png" },
                  { title: "Aftermarket Tail Lights", src: "/images/aftermarket-tail.jpg" },
                  { title: "Interior Lighting", src: "/images/interior-car.jpeg" },
                  { title: "Underbody Lights", src: "/images/under-body-lights.jpeg" }
               ].map((item, index) => (
                  <div key={index} className="flex flex-col group">
                     <div className="relative aspect-video bg-gray-50 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700">
                        {/* The Image */}
                        <div className="absolute inset-0 z-0">
                           <Image 
                              src={item.src} 
                              alt={item.title} 
                              fill 
                              className="object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                           />
                        </div>
                        
                        {/* Subtle Glow Overlay on Hover */}
                        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                     </div>
                     
                     {/* Text below */}
                     <div className="mt-4 text-center">
                        <h4 className="text-black font-black uppercase tracking-[0.3em] text-[10px] leading-tight py-4 border-y border-gray-200 group-hover:border-primary/40 transition-colors duration-500">
                           {item.title}
                        </h4>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
      {/* Informational Grid Section - BLACK BG */}
      <section className="py-24 bg-black text-white border-t border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
               {infoBlocks.map((item, index) => (
                  <div key={index} className="flex flex-col sm:flex-row items-start gap-6 group">
                     <div className="flex-shrink-0 w-20 h-20 bg-white/5 rounded-sm flex items-center justify-center group-hover:bg-primary transition-all duration-500 border border-white/10 shadow-sm transform group-hover:-translate-y-1">
                        <item.icon className="text-primary group-hover:text-black transition-colors" size={32} />
                     </div>
                     <div className="flex-grow w-full">
                        <div className="bg-white py-2.5 px-6 mb-4 relative overflow-hidden group-hover:bg-primary transition-colors duration-500 rounded-r-full sm:rounded-r-none">
                           <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                           <h4 className="text-black group-hover:text-black font-black uppercase tracking-[0.3em] text-[11px] text-center sm:text-left relative z-10 transition-colors">
                              {item.title}
                           </h4>
                        </div>
                        <p className="text-gray-400 text-[10px] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity pl-2 border-l-2 border-transparent group-hover:border-primary/30 transition-all">
                           {item.text}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>


      {/* Authorized Dealers Section - WHITE BG */}
      <section className="py-24 bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Premium Partnerships</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-6">
              Authorized <span className="text-primary">Dealers.</span>
            </h2>
            <p className="text-gray-600 text-sm max-w-2xl mx-auto">
              We are proud authorized dealers for the world's leading lighting brands. This means genuine products, manufacturer warranties, and certified installation expertise.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {authorizedDealers.map((dealer, i) => (
              <div key={i} className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(20%-24px)] aspect-square bg-gray-50 border border-gray-200 hover:border-primary transition-all duration-300 p-4 md:p-6 flex flex-col items-center justify-center group flex-grow-0 flex-shrink-0">
                <div className="w-16 md:w-24 h-16 md:h-24 relative flex items-center justify-center">
                  <Image 
                    src={dealer.logo} 
                    alt={dealer.name} 
                    fill 
                    className="object-contain transition-all duration-300 group-hover:scale-110" 
                  />
                </div>
                <span className="text-[8px] md:text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-primary transition-colors duration-300 mt-2 md:mt-4 text-center">{dealer.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
