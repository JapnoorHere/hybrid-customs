"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LegalNotice from "@/components/LegalNotice";
import PerformanceHero from "@/components/PerformanceHero";
import Image from "next/image";
import { Cpu, Mountain, Settings, Layout, Layers, History, Check } from "lucide-react";

interface PerformanceSection {
  id: string;
  icon: any;
  title: string;
  text: string;
  img: string;
  bg: string;
  textColor: string;
  features?: string[];
}

export default function PerformancePage() {
  const sections: PerformanceSection[] = [
    {
      id: "tuning",
      icon: Cpu,
      title: "Performance Tuning",
      text: "A vehicle remap replaces default software on the ECU, overwriting it with new software which can be programmed to optimize the cars overall performance. This is known as vehicle remapping because the ECU is essentially a program that controls how the engine works. When your car is remapped, the tuned software is plugged into your cars serial port (or OBD port) which then overwrites the engine map with the new version to enhance engine performance. The ability to flash directly through the OBD has brought the tuning industry on leaps and bounds, with constant development on the engine now being much quicker via the flash process, it has enabled Celtic Tuning to develop some of the best software in the world.",
      img: "/images/performance-tuning.jpg",
      bg: "bg-white",
      textColor: "text-black",
      features: ["ECU REMAPPING", "RACING CHIPS", "TUNING BOX"]
    },
    {
      id: "offroad",
      icon: Mountain,
      title: "Offroad Makeover",
      text: "With the introduction of many new 4×4 vehicles in the market today and with the endless space of off-roading country within India, it was apparent that a new trend of holidaymaking and adventure would become very popular. Along with this popularity, various kinds of equipment would be needed. Hybrid Customs has become synonymous with the highest levels of technical expertise, experience and straight forward, friendly advice with all aspects of the 4×4 world. Offering a diverse range of products including removable hardtops, soft tops, heavy-duty bumpers, winches, spotlights, roof racks, suspension, rock sliders, snorkels, single wheel carriers, and more. Our company has evolved into a one-stop center where every need of the 4×4 owner is catered for. Over the years a wealth of experience has been gathered on every aspect of the 4×4 industry and product range.",
      img: "/images/offroad-mods.jpg",
      bg: "bg-[#0a0a0a]",
      textColor: "text-white",
      features: ["INTERIORS", "OFFROAD PARTS", "HARD TOPS", "BODY WORKS"]
    },
    {
      id: "kits",
      icon: Settings,
      title: "Performance Kits & Parts",
      text: "There are many various tools used to improve the Performance of your car at Hybrid Customs. Some of the tools we used are Exhaust Systems, Air Intake Systems, Transmissions, Ignition Systems, Racing Gears, Brakes and Rotors, Performance Chips, Fuel Systems, Steering, Starting and Charging, Suspension Systems, Engine Components etc.",
      img: "/images/performance-kits.jpg",
      bg: "bg-white",
      textColor: "text-black"
    },
    {
      id: "bodykits",
      icon: Layers,
      title: "Bodykits",
      text: "At Hybrid Customs, we have a huge variety of body kits so the options you want for your ride are limitless. We carry body kits for more than 100 different vehicles. Whether you want to add a set of Lambo doors, side skirts, hood scoop, spoilers, or an Extreme Dimensions body kits with Duraflex, we have what you need to make your ride the best around! No matter if you are looking for a top-of-the-line body kit, an economical body kit, or anything in between, we’ve got an extensive selection for you to choose from. Hybrid Customs is the ultimate shop for any and all of your body kit needs!",
      img: "/images/bodykits-performance.jpg",
      bg: "bg-black",
      textColor: "text-white"
    },
    {
      id: "restoration",
      icon: History,
      title: "Restoration",
      text: "We are the custom shop for all your custom builds and we’ll work with you to capture your vision, creating a hand-built street rod or performance restorations from the ground up. Our skilled custom specialists will select quality parts from respected manufacturers that best fit your custom car build’s needs and budget. The possibilities are endless – if you can dream it, we can build it! \n\nA blend of artistry and automotive expertise, our award-winning auto restorations are performed by trained technicians using state-of-the-art equipment. For auto restoration projects large and small, we provide a thorough proposal detailing steps and costs and even a photographic timeline of our progress. With Hybrid Customs, you can be assured of an exceptional car restoration of your special car at a competitive price. We are the custom shop for all your custom car builds. \n\nLet us help you restore your car today!",
      img: "/images/restoration.jpg",
      bg: "bg-white",
      textColor: "text-black"
    }
  ];

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <PerformanceHero />

      {sections.map((section, index) => (
        <section key={section.id} className={`py-24 ${section.bg} ${section.textColor}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center`}>
              <div className={`${index % 2 !== 0 ? 'lg:order-last' : ''}`}>
                 <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-sm">
                       <section.icon className="text-primary" size={24} />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-tight italic">
                       {section.title}<span className="text-primary">.</span>
                    </h2>
                 </div>
                 <div className="space-y-6">
                    {section.text.split('\n\n').map((para, i) => (
                      <p key={i} className={`text-sm leading-relaxed opacity-80 ${section.textColor === 'text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
                        {para}
                      </p>
                    ))}
                 </div>
                 
                 {/* Feature Ticks replacing Consult Button */}
                 <div className={`mt-12 flex flex-wrap gap-y-5 ${section.id === 'offroad' ? 'gap-x-10' : 'flex-col gap-y-5'}`}>
                    {section.features?.map((feat: string, i: number) => (
                       <div key={i} className="flex items-center gap-4 group/item cursor-default">
                          <div className={`w-9 h-9 ${section.textColor === 'text-white' ? 'bg-white/5' : 'bg-black'} flex items-center justify-center border border-primary/40 group-hover/item:border-primary transition-all duration-300 rounded-sm`}>
                             <Check className="text-primary" size={18} />
                          </div>
                          <span className={`font-black text-[11px] tracking-[0.25em] uppercase transition-colors duration-300 ${section.textColor === 'text-white' ? 'text-white/90 group-hover/item:text-primary' : 'text-black/80 group-hover/item:text-black'}`}>
                             {feat}
                          </span>
                       </div>
                    ))}
                 </div>
              </div>
              <div className="relative aspect-[4/3] group rounded-sm overflow-hidden shadow-2xl border border-black/5">
                 <Image 
                    src={section.img} 
                    alt={section.title} 
                    fill 
                    className="object-cover transition-transform duration-[2s] group-hover:scale-110" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </main>
  );
}