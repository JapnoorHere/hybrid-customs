"use client";

import { Phone } from "lucide-react";

export default function FloatingActions() {
  const phoneNumber = "919988229191";

  return (
    <div className="fixed bottom-8 right-8 z-[90] group">
      {/* ── Outer Capsule Dock ── */}
      <div className="relative flex items-center bg-black/80 backdrop-blur-2xl rounded-full p-1.5 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(253,186,18,0.2)]">
        
        {/* ── Order Online Text Section (Left) - Hidden on Mobile ── */}
        <a
          href={`https://wa.me/${phoneNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:block pl-5 pr-3 py-2 group/online transition-all duration-500"
        >
          <span className="text-[10px] uppercase font-black tracking-[0.2em] text-primary group-hover/online:text-white transition-colors duration-500">
            Order Online
          </span>
        </a>

        {/* ── Vertical Divider - Hidden on Mobile ── */}
        <div className="hidden sm:block h-4 w-[1px] bg-white/20 mx-1" />

        {/* ── Icons Section (Right) ── */}
        <div className="flex items-center gap-1">
          {/* WhatsApp Icon */}
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-[#25D366] transition-all duration-500 group/wa"
            aria-label="Contact on WhatsApp"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white group-hover/wa:fill-white transition-colors duration-500" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.432 5.631 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.415-8.414" />
            </svg>
          </a>

          {/* Instagram Icon */}
          <a
            href="https://www.instagram.com/hybridcustoms_carmods?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-[#E1306C] transition-all duration-500 group/ig"
            aria-label="Follow on Instagram"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white group-hover/ig:fill-white transition-colors duration-500" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>

          {/* Facebook Icon */}
          <a
            href="https://www.facebook.com/hybridcustom/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-[#1877F2] transition-all duration-500 group/fb"
            aria-label="Follow on Facebook"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white group-hover/fb:fill-white transition-colors duration-500" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>

          {/* Call Icon */}
          <a
            href={`tel:+${phoneNumber}`}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 hover:bg-white transition-all duration-500 group/call"
            aria-label="Call Us"
          >
            <Phone className="w-4 h-4 text-white group-hover/call:text-black transition-colors duration-500" />
          </a>
        </div>

        {/* ── Unique Glowing Badge ── */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-ping opacity-75" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full shadow-[0_0_10px_#fdba12]" />
      </div>
    </div>
  );
}