"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalNotice from "@/components/LegalNotice";
import CarAudioHero from "@/components/CarAudioHero";
import Image from "next/image";
import { Volume2, Headphones, Speaker, Radio, Settings, Music, Tablet } from "lucide-react";

export default function CarAudioPage() {
  const authorizedDealers = [
    { name: "Alpine", logo: "/images/dealers/alpine-audio.png" },
    { name: "Morel", logo: "/images/dealers/morel-audio.png" },
    { name: "JL Audio", logo: "/images/dealers/jl-audio.png" },
    { name: "Vextron", logo: "/images/dealers/vextron.jpg" },
    { name: "JBL", logo: "/images/dealers/jbl.png" },
    { name: "Kicker", logo: "/images/dealers/kicker.jpg" },
    { name: "Blaupunkt", logo: "/images/dealers/Blaupunkt.jpg" },
    { name: "DD Audio", logo: "/images/dealers/dd-audio.png" },
    { name: "Rockford Fosgate", logo: "/images/dealers/rockford.jpg" }
  ];

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <CarAudioHero />

      {/* Why Choose Hybrid Audio - WHITE BG (Side by Side) */}
      <section className="py-24 bg-white text-black border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">Expertise & Quality</span>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic mb-8">
                Why Choose <span className="text-primary">Hybrid Audio.</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-sm leading-relaxed">
                <p>
                  At Hybrid Customs, we don't just install car audio systems—we craft listening experiences. Our team of certified audio technicians brings years of expertise in acoustic design, signal processing, and custom fabrication to every project.
                </p>
                <p>
                  We understand that every vehicle has unique acoustic challenges. That's why we begin every installation with a thorough analysis of your car's interior, identifying optimal speaker placement, damping requirements, and tuning parameters to achieve the best possible sound.
                </p>
                <p className="font-bold text-black border-l-4 border-primary pl-6 py-2 italic">
                  From daily commutes to weekend drives, your music deserves to be heard the way the artists intended—clear, dynamic, and immersive.
                </p>
              </div>
            </div>
            <div className="relative aspect-square lg:aspect-[4/3] rounded-sm overflow-hidden shadow-2xl group/img">
              <Image 
                src="/images/alpine-real.png" 
                alt="Car Audio Installation" 
                fill 
                className="object-cover transition-transform duration-[2s] group-hover/img:scale-110" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services - One Liners - Black BG */}
      <section className="py-24 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] mb-4 block">What We Offer</span>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter italic">
              Our <span className="text-primary">Services.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Settings, title: "Custom Audio Installation", desc: "Tailored audio solutions designed specifically for your vehicle, ensuring perfect fit and optimal sound performance." },
              { icon: Speaker, title: "Custom Enclosures", desc: "Precision-built speaker boxes and subwoofer enclosures engineered for maximum bass response and acoustic clarity." },
              { icon: Volume2, title: "Woofers & Components", desc: "Premium woofers, tweeters, and component systems that deliver crystal-clear highs and deep, powerful bass." },
              { icon: Music, title: "DSP Installation", desc: "Digital Signal Processing setup for time alignment, EQ tuning, and acoustic optimization tailored to your car." },
              { icon: Headphones, title: "Premium OEM Audio Upgrade", desc: "Factory audio system upgrades that integrate seamlessly with your vehicle's existing electronics and controls." },
              { icon: Tablet, title: "Android Player", desc: "Upgrade your ride with feature-rich Android head units—GPS navigation, smartphone connectivity, Apple CarPlay & Android Auto support, and more." }
            ].map((service, i) => (
              <div key={i} className="p-8 border border-white/10 hover:border-primary transition-all duration-300 bg-white/[0.02] group flex items-start gap-6">
                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <service.icon className="text-primary group-hover:text-black transition-colors duration-300" size={24} />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-xs mb-2 text-white">{service.title}</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">{service.desc}</p>
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
              We are proud authorized dealers for the world's leading car audio brands. This means genuine products, manufacturer warranties, and certified installation expertise.
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