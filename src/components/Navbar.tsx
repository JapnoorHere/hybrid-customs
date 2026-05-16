"use client";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const mainLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#", isDropdown: true },
    { name: "Off-Road", href: "/offroad" },
    { name: "Contact", href: "/#contact" },
  ];

  const serviceLinks = [
    { name: "Custom Lights", href: "/lighting" },
    { name: "Car Care", href: "/car-care" },
    { name: "Mods & Performance", href: "/performance" },
    { name: "Car Audio", href: "/car-audio" },
    { name: "Hydro Dipping", href: "/hydro-dipping" },
  ];

  const allLinks = [
    { name: "Home", href: "/" },
    ...serviceLinks,
    { name: "Off-Road", href: "/offroad" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[120] transition-all duration-500 ease-in-out ${
        scrolled || isOpen
          ? "bg-black/75 backdrop-blur-2xl shadow-[0_1px_0_rgba(253,186,18,0.25),0_8px_32px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      }`}>
        <div className="w-full flex items-center justify-between py-4 px-6 lg:px-12">
          
          {/* ── Logo ── */}
          <a href="/" className="flex items-center gap-2 group relative z-[110] transition-all duration-500 hover:scale-105">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_20px_rgba(253,186,18,0.4)] transition-all">
              HYBRID<span className="text-primary font-outline-2">CUSTOMS</span>
            </span>
          </a>
          
          {/* ── Navigation Links (Desktop) ── */}
          <div className="hidden lg:flex items-center gap-10">
            {mainLinks.map((link) => {
              const isActive = pathname === link.href;
              
              if (link.isDropdown) {
                return (
                  <div key={link.name} className="relative group/dropdown py-4">
                    <button className="flex items-center gap-1 px-3 py-2 text-[11px] font-black uppercase tracking-[0.12em] text-white/60 hover:text-white transition-all">
                      {link.name}
                      <svg className="w-3 h-3 group-hover/dropdown:rotate-180 transition-transform duration-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-[100%] left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover/dropdown:opacity-100 group-hover/dropdown:visible transition-all duration-500 scale-95 group-hover/dropdown:scale-100">
                      <div className="bg-black/95 backdrop-blur-xl border border-white/10 p-2 rounded-2xl shadow-2xl min-w-[220px]">
                        {serviceLinks.map((service) => (
                          <a 
                            key={service.name}
                            href={service.href}
                            className="block px-5 py-3 text-[10px] font-black uppercase tracking-widest text-white/50 hover:text-primary hover:bg-white/5 rounded-xl transition-all"
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <a 
                  key={link.name}
                  href={link.href} 
                  className={`px-4 py-2 transition-all duration-500 text-[11px] font-black uppercase tracking-[0.12em] relative group/link rounded-full ${
                    isActive ? "text-primary bg-white/5" : "text-white/60 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && <span className="absolute inset-0 bg-primary/5 rounded-full blur-md opacity-50" />}
                </a>
              );
            })}
          </div>
 
          {/* ── Social Links + Phone + Timings ── */}
          <div className="hidden lg:flex items-center gap-4 border-l border-white/10 pl-6">
            {/* WhatsApp */}
            <a
              href="https://wa.me/919988229191"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-white/70 hover:text-[#25D366] transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.415-8.414" />
              </svg>
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/hybridcustoms_carmods?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white/70 hover:text-[#E1306C] transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/hybridcustom/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-white/70 hover:text-[#1877F2] transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            {/* Phone */}
            <a
              href="tel:+919988229191"
              aria-label="Call us"
              className="text-white/70 hover:text-primary transition-colors duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-[16px] h-[16px] fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
            </a>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex flex-col text-right">
              <span className="text-[9px] text-white/50 font-black tracking-[0.2em] leading-none mb-1">TUE - SUN</span>
              <span className="text-[11px] text-primary font-black tracking-[0.05em] leading-none drop-shadow-[0_0_10px_rgba(253,186,18,0.3)]">10 AM - 7 PM</span>
            </div>
          </div>
 
          {/* ── Mobile Menu Icon ── */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden relative z-[110] p-2 rounded-full transition-all duration-500 ${isOpen ? 'bg-primary text-black' : 'text-white hover:text-primary'}`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
 
        </div>
      </nav>
 
      {/* ── Mobile Menu Overlay ── */}
      <div className={`fixed inset-0 z-[110] lg:hidden transition-all duration-700 bg-[#0a0a0a] backdrop-blur-3xl overflow-hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}>
        <div className="flex flex-col h-full pt-32 px-10 pb-10 overflow-y-auto">
          <div className="flex flex-col gap-5">
            {allLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group flex items-center justify-between transition-all duration-700 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
                    }`}
                  style={{ transitionDelay: `${i * 70}ms` }}
                >
                  <span className={`text-2xl font-black uppercase tracking-tighter transition-all duration-500 ${
                    isActive ? "text-primary scale-105 origin-left" : "text-white/40 group-hover:text-white"
                  }`}>
                    {link.name}
                  </span>
                  <ArrowRight className={`${isActive ? "text-primary opacity-100" : "text-primary/10 opacity-0 group-hover:opacity-100"} transition-all duration-500`} size={24} />
                </a>
              );
            })}
          </div>
 
          <div className={`mt-auto pt-10 transition-all duration-700 delay-[500ms] ${isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}>
            <div className="h-px w-full bg-white/10 mb-8" />
            <div className="mb-6 flex flex-col gap-2">
              <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.4em]">Business Hours</p>
              <div className="flex items-center justify-between text-white font-black text-lg">
                <span className="tracking-widest">TUE - SUN</span>
                <span className="text-primary tracking-widest">10 AM - 7 PM</span>
              </div>
            </div>
            <a href="tel:+919988229191" className="mb-8 flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-black uppercase tracking-[0.3em] leading-none mb-1">Call Us</p>
                <p className="text-white font-black text-base tracking-wide group-hover:text-primary transition-colors">+91 99882 29191</p>
              </div>
            </a>
            <div className="flex items-center gap-5">
              <a
                href="https://wa.me/919988229191"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="text-white/40 hover:text-[#25D366] transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.415-8.414" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/hybridcustoms_carmods?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white/40 hover:text-[#E1306C] transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/hybridcustom/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white/40 hover:text-[#1877F2] transition-colors duration-300"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
