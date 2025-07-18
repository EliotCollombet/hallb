"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { useRef } from "react";

import Image from "next/image";
import clsx from "clsx";

function Cadre({ className, src }: { className: string; src: string }) {
    return (
        <div className={clsx("flex items-center justify-center rounded-xl h-[300px] w-[80%] overflow-hidden", className)}>
            <Image 
                src={src}
                width={3024}
                height={4032}
                className="object-cover"
                alt=""
            />
        </div>
    );
}

function SectionAnime() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progression, setProgression] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const containerHeight = container.offsetHeight;
        const windowHeight = window.innerHeight;

        const raw = -(rect.top / (containerHeight - windowHeight))
        const clamped = Math.min(1, Math.max(0, raw));

        setProgression(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <div
      ref={containerRef}
      className="h-[2hv] w-full"
    >
      <h2 className="uppercase text-primary text-4xl mb-2">Classic</h2>
      <p className="uppercase text-accent text-sm mb-10">
        Muscu & Cardio accès libre.
      </p>

      <div className="relative w-full h-[800px]">
        <Cadre className="z-10 left-2 top-0 absolute rotate-[-11deg]" src="/concept.jpg" />
        <Cadre className="z-20 left-7 top-1 absolute rotate-[2deg]" src="/histoire.jpg" />
        <Cadre className="z-30 left-14 top-3 absolute rotate-[9deg]" src="/valeurs.jpg" />
      </div>
    </div>
  );
}

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center w-full px-5 space-y-10 pt-20">
            <SectionAnime/>
            <div className="flex flex-col items-left w-full h-screen">
                <h2 className="uppercase text-primary text-4xl">
                    Boost
                </h2>
                <p className="uppercase text-accent text-sm">
                    Classic & Cours collectifs
                </p>
            </div>
        </div>
    );
}