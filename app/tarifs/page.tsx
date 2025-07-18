"use client";
import { motion, AnimatePresence  } from "framer-motion";
import { useState, useEffect } from "react";
import { useRef } from "react";

import Image from "next/image";
import clsx from "clsx";

function Cadre({ className, src, trigger }: { className: string; src: string, trigger: boolean }) {
    return (
        <AnimatePresence>
            {trigger && (
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -200,
                        y: -100,
                        rotate: -30,
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        y: 0,
                        rotate: 0,
                        scale: 1,
                    }}
                    transition={{
                        duration: 0.8,
                        ease: [0.25, 0.8, 0.25, 1],
                    }}
                    exit={{
                        opacity: 0,
                        x: -200,
                        y: -100,
                        rotate: -30,
                        scale: 0.8,
                    }}
                    className={clsx("flex items-center justify-center rounded-xl h-[300px] w-[80%] overflow-hidden", className)}
                    >
                    <Image 
                        src={src}
                        width={3024}
                        height={4032}
                        className="object-cover"
                        alt=""
                    />
                </motion.div>
            )}
        </AnimatePresence>
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
      className="h-[200vh] w-full"
    >
        <div className="sticky top-20 flex flex-col">
            <h2 className="uppercase text-primary text-4xl mb-2">Classic</h2>
            <p className="uppercase text-accent text-sm mb-10">
                Muscu & Cardio accès libre.
            </p>

            <div className="relative w-full h-[400px]">
                <Cadre
                    trigger={progression>0.1}
                    src="/concept.jpg"
                    className="z-10 left-2 top-0 absolute rotate-[-11deg]"
                />
                <Cadre
                    trigger={progression>0.5}
                    src="/histoire.jpg"
                    className="z-20 left-7 top-1 absolute rotate-[2deg]"
                />
                <Cadre
                    trigger={progression>0.8}
                    src="/valeurs.jpg"
                    className="z-30 left-14 top-3 absolute rotate-[9deg]"
                />
            </div>

            <div className="text-primary">
                Exemple
            </div>
        </div>
    </div>
  );
}

export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center w-full px-5 pt-20">
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