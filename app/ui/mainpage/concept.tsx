import Image from "next/image";

export default function Concept() {
    return (
        <div className="h-screen w-full overflow-hidden">
            <div className ="h-1/2 relative overflow-hidden ml-100 mt-8 rounded-sm">
                <img
                    src="/concept.jpg"
                    alt="Image floue"
                    className="w-full h-full object-cover scale-150 blur-sm"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-20 px-20">
                    <img
                        src="/concept.jpg"
                        alt="Image nette"
                        className="w-full max-w-sm shadow-lg"
                    />

                    {/* Texte */}
                    <div className="text-white space-y-4">
                        <h2 className="text-right uppercase text-7xl font-bold">
                            Notre concept
                        </h2>
                        <p className="text-lg text-right">
                            Une approche multisport moderne avec des espaces dédiés à la musculation, au fitness et au bien-être.
                        </p>
                </div>
            </div>
            </div>
        </div>


    );
}