"use client"

import VideoBackground from "@/app/ui/video-background";
import React, { useEffect } from "react";
import { LinkedButton } from "@/app/ui/linked-buttons";


export default function Home() {
  // useEffect(() => {
  //   // Scroll animation
  //   const observerOptions = {
  //     threshold: 0.1,
  //     rootMargin: "0px 0px -50px 0px",
  //   };

  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("animate-fade-in-up");
  //       }
  //     });
  //   }, observerOptions);

  //   // On observe les éléments avec animate-on-scroll
  //   const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
  //   elementsToAnimate.forEach((el) => observer.observe(el));

  //   return () => {
  //     // Nettoyage
  //     observer.disconnect();
  //   };
  // }, []);

  return (
    <div>
      <div className="relative bg-black">
        <div className="relative h-screen">
          <VideoBackground />
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
            <div className="container w-full max-w-4xl mx-auto text-center">
              <h1 className="uppercase text-primary lg:tracking-[1rem] mb-6 text-3xl font-medium md:text-5xl lg:text-6xl animate-fade-in-up">
                Bienvenue à Hall B
              </h1>
              <h2 className="mb-8 text-sm md:text-xl text-primary opacity-90 animate-fade-in-up animation-delay-300">
                Le plus grand complexe multisports en Vaunage.
              </h2>
              <p className="mb-8 uppercase text-xl md:text-4xl text-primary opacity-80 animate-fade-in-up animation-delay-600">
                Musculation - Fitness - Aqua - Squash
              </p>
              <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-center gap-4 items-center animate-fade-in-up animation-delay-900">
                <LinkedButton id="FreeTrial"/>
                <LinkedButton id="Subscribe" variant="accent"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main>
              <div className="text-primary pt-500">
                Du contenu
              </div>
      </main>

      

    </div>
  );
}
