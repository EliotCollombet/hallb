'use client'

import { futureTense } from "@/app/ui/fonts/fonts";
import "./globals.css";
import NavigationBar from "@/app/ui/navigation-bar";
import TrialPopup from "@/app/ui/trial-popup";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Pop up après 0.5 secondes
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 500);
    return () => {
      // Nettoyage
      clearTimeout(timer);
    };
  }, []);

  return (
    <html lang="en">
      <body className={`${futureTense.className} antialiased leading-none`}>
          <div className="sticky top-0 z-50">
            <NavigationBar />
          </div>
          <div className="pt-20 bg-secondary">
            {showPopup && <TrialPopup onClose={() => setShowPopup(false)} />}
            {children}
          </div>
      </body>
    </html>
  );
}