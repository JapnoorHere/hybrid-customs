"use client";

import { useEffect, useRef } from "react";

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

export default function Location() {
  const containerRef = useScrollReveal();

  return (
    <section id="location" className="bg-white text-black relative overflow-hidden border-t border-gray-100">
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gray-100" />

      <div ref={containerRef} className="max-w-[1320px] mx-auto px-6 py-16 md:py-24">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left – Info */}
          <div data-reveal="slide-left" className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 mb-4 block">
              Find Us
            </span>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.05] mb-6">
              Visit Our <br className="hidden md:block" /> Studio
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
              Come experience the art of automotive customization first-hand.
              Walk through our state-of-the-art facility, meet our team, and
              discuss your vision for your ride.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 mb-10">
              {/* Address */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="icon-box w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0 cursor-default">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">Address</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    Hybrid Customs<br />
                    SCF 461, Motor Market, Sector 13,<br />
                    Chandigarh, 160101
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">Phone</div>
                  <a href="tel:+919988229191" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    +91 99882 29191
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.15em] text-gray-400 mb-1">Working Hours</div>
                  <div className="text-sm text-gray-600 leading-relaxed">
                    Tue – Sun: 10:00 AM – 7:00 PM<br />
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://www.google.com/maps?q=30.7141733,76.8470717&z=1"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lift inline-flex items-center gap-2 px-8 py-3.5 bg-black text-white font-bold uppercase tracking-[0.12em] text-xs hover:bg-primary hover:text-black transition-all duration-300 w-fit"
            >
              Get Directions
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Right – Map */}
          <div data-reveal="slide-right" className="relative">
            {/* Map container with styled border */}
            <div className="map-hover relative rounded-sm overflow-hidden border border-gray-100 shadow-xl">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary z-10 pointer-events-none" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary z-10 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary z-10 pointer-events-none" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary z-10 pointer-events-none" />

              <iframe
                src="https://maps.google.com/maps?q=30.7141733,76.8470717&z=18&output=embed"
                style={{
                  border: 0,
                  filter: "brightness(1) contrast(1) saturate(1)",
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hybrid Customs Location"
                className="w-full h-[350px] md:h-[520px]"
              />
            </div>

            {/* Location badge overlaying the map */}
          </div>
        </div>
      </div>
    </section>
  );
}
