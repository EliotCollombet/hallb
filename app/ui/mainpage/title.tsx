import Link from "next/link";
import { LinkedButton } from "@/app/ui/linked-buttons";
import VideoBackground from "@/app/ui/video-background";
import { montserrat } from "../fonts/fonts";
import clsx from "clsx";

export default function Title() {
    return (
    <div className="relative h-screen">
        <VideoBackground />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 pt-20">
            <div className="container w-full max-w-4xl mx-auto text-center">
                <h1 className="uppercase text-primary mb-2 md:mb-6 text-6xl font-medium md:text-5xl lg:text-7xl animate-fade-in-up">
                    Hall B
                </h1>
                <p className={clsx("mb-12 md:mb-16 text-sm md:text-lg text-primary opacity-90 animate-fade-in-up animation-delay-300", montserrat.className)}>
                    Le plus grand complexe multisports en Vaunage.
                </p>
                <div className="mb-8 uppercase text-xl md:text-4xl text-primary opacity-80 animate-fade-in-up animation-delay-600 flex flex-wrap justify-center gap-4">
                <Link
                    href="#musculation"
                    className="highlight-1 transition-transform duration-200 hover:scale-105"
                    scroll={true}
                >
                    Musculation
                </Link>
                
                <Link
                    href="#fitness"
                    className="highlight-2 transition-transform duration-200 hover:scale-105"
                    scroll={true}
                >
                    Fitness
                </Link>
               
                <Link
                    href="#aqua"
                    className="highlight-3 transition-transform duration-200 hover:scale-105"
                    scroll={true}
                >
                    Aqua
                </Link>
               
                <Link
                    href="#Squash"
                    className="highlight-4 transition-transform duration-200 hover:scale-105"
                    scroll={true}
                >
                    Squash
                </Link>
                </div>
                <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-center gap-4 items-center animate-fade-in-up animation-delay-900">
                <LinkedButton id="FreeTrial" size="big"/>
                <LinkedButton id="Subscribe" variant="accent" size="big"/>
                </div>
            </div>
        </div>
      </div>
    );
}