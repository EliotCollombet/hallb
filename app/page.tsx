"use client"

import React, { useEffect } from "react";
import Title from "@/app/ui/mainpage/title";
import Valeurs from "./ui/mainpage/valeurs";
import Concept from "./ui/mainpage/concept";
import Histoire from "./ui/mainpage/histoire";

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
      <main>
        <section id="home">
          <Title/>
        </section>

        <div className="flex flex-col lg:relative w-full h-fit lg:h-[1050px]">

          <div className="hidden lg:flex h-full w-full absolute inset-0 flex-col">
            <div className="w-full h-[500px] bg-secondary"/>
            <div className="w-full h-[600px] bg-secondary-light"/>
            <div className="w-full h-auto bg-secondary"/>
          </div>

          <section id="valeurs" className="lg:absolute inset-0 w-full h-auto">
            <Valeurs/>
          </section>

          <section id="concept" className="lg:absolute top-[281px] w-full h-auto">
            <Concept/>
          </section>

          <section id="histoire" className="lg:absolute top-[677px] w-full h-auto">
            <Histoire/>
          </section>

        </div>
      </main>
    </div>
  );
}