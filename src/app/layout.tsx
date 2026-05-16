import type { Metadata, Viewport } from "next";
import "./globals.css";

import FloatingActions from "@/components/FloatingActions";

export const metadata: Metadata = {
  title: "Hybrid Customs | Premium Auto Styling",
  description: "Chandigarh's Pioneer Car Custom Studio. Precision Wrapping, Performance Body Mods, Custom Paint Jobs, and Hydro Dipping.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-black text-white min-h-screen flex flex-col">
        {children}
        <FloatingActions />
      </body>
    </html>
  );
}
