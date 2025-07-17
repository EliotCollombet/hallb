"use client"

import VideoBackground from "@/app/ui/video-background";
import React, { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    // Scroll animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
        }
      });
    }, observerOptions);

    // On observe les éléments avec animate-on-scroll
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");
    elementsToAnimate.forEach((el) => observer.observe(el));

    return () => {
      // Nettoyage
      observer.disconnect();
    };
  }, []);

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
              <h2 className="mb-8 text-xl text-primary opacity-90 animate-fade-in-up animation-delay-300">
                Le plus grand complexe multisports en Vaunage.
              </h2>
              <p className="uppercase text-2xl lg:text-4xl text-primary opacity-80 animate-fade-in-up animation-delay-600">
                Musculation - Fitness - Aqua - Squash
              </p>
              {/* <Button
                size="lg"
                className="px-8 py-6 text-lg bg-primary hover:bg-primary/90 animate-fade-in-up animation-delay-600"
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Discover More
              </Button> */}
            </div>
          </div>
        </div>
      </div>
      <main>
                
      </main>

      

    </div>
  );
}
