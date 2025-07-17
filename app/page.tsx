"use client"

import React, { useEffect } from "react";
import Title from "@/app/ui/mainpage/title";
import Concept from "@/app/ui/mainpage/concept";

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

        <section id="concept">
          <Concept/>
        </section>

        <section id="valeurs">
          <div className="text-white relative container">
            <h2>
              Nos valeurs
            </h2>
          </div>
        </section>

        <section id="histoire">
          <div className="text-white relative container">
            <h2>
              Notre histoire
            </h2>
          </div>
        </section>

        <section id="musculation">
          <div className="text-white relative container">
            <h2>
              Musculation
            </h2>
          </div>
        </section>
      </main>
      <footer>
      </footer>
    </div>
  );
}
