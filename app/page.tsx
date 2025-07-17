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
            <div className="container max-w-4xl mx-auto text-center">
              <h1 className="uppercase text-white lg:tracking-[1rem] mb-6 text-3xl font-medium md:text-5xl lg:text-6xl animate-fade-in-up">
                Bienvenue à HALL B
              </h1>
              <p className="mb-8 text-xl text-white opacity-90 animate-fade-in-up animation-delay-300">
                Votre salle de sport haut de gamme en Vaunage
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
