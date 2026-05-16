"use client";
import { useState } from "react";
import TermsModal from "./TermsModal";

export default function Footer() {
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  return (
    <footer id="contact" className="bg-black py-20 border-t border-white/5 relative overflow-hidden text-white">
      {/* Footer subtle glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <a href="#" className="group inline-block">
            <span className="text-3xl font-black tracking-tighter mb-4 inline-block transition-transform duration-300 group-hover:scale-105 text-white">
              HYBRID<span className="text-primary">CUSTOMS</span>
            </span>
          </a>
          <p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
            Chandigarh&apos;s pioneer studio dedicated to transforming rides into masterpieces. Performance mods, car care, and pure artistry.
          </p>
          <a href="tel:+919988229191" className="flex items-center gap-3 mb-6 group w-fit">
            <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-primary" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92z" />
              </svg>
            </div>
            <div>
              <p className="text-[10px] text-white/30 font-bold uppercase tracking-[0.3em] leading-none mb-1">Call Us</p>
              <p className="text-white font-bold text-sm tracking-wide group-hover:text-primary transition-colors">+91 99882 29191</p>
            </div>
          </a>
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://wa.me/919988229191"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#25D366] text-white/50 hover:text-white transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.415-8.414" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/hybridcustoms_carmods?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#E1306C] text-white/50 hover:text-white transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/hybridcustom/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex items-center justify-center w-9 h-9 rounded-full bg-white/5 hover:bg-[#1877F2] text-white/50 hover:text-white transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
          <div className="text-white/30 text-xs text-center md:text-left transition-all duration-300">
            © {new Date().getFullYear()} Hybrid Customs. All rights reserved.
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-white uppercase tracking-widest mb-6">Sitemap</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li><a href="#" className="footer-link">Home</a></li>
            <li><a href="#services" className="footer-link">Services</a></li>
            <li><a href="#location" className="footer-link">Visit Studio</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-white uppercase tracking-widest mb-6 border-b border-primary/20 pb-2">Legal</h4>
          <ul className="space-y-3 text-gray-500 text-sm">
            <li><button onClick={() => setIsTermsOpen(true)} className="footer-link text-left hover:text-primary transition-colors">Terms & Conditions</button></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Shipping Policy</a></li>
          </ul>
        </div>
      </div>

      <TermsModal isOpen={isTermsOpen} onClose={() => setIsTermsOpen(false)} />
    </footer>
  );
}
