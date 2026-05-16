"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Location from "@/components/Location";
import LegalNotice from "@/components/LegalNotice";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white text-base">
      <Navbar />
      <Hero />
      <Services />
      <Location />
      <Footer />
    </main>
  );
}
