import Image from "next/image";

export default function Valeurs() {
    const im = 
        <Image
            src="/valeurs.jpg"
            width={3024}
            height={4032}
            className="object-cover"
            alt=""
        />
    const title = 
        <p>
            Nos<br/>Valeurs
        </p>
    return (
        <>
            <div className="hidden lg:flex px-10 h-auto w-full flex-row space-x-10 items-start">
                <div className="flex items-center justify-center overflow-hidden h-[400px] w-[30%] rounded-lg mt-7">
                    {im}
                </div>
                <div className="flex flex-col gap-y-10 pt-20">
                    <h2 className="animate-on-scroll text-left text-4xl text-primary">
                        {title}
                    </h2>
                    <p className="animate-on-scroll text-xl text-primary">
                        Convivialité, Entraide, Accompagnement.
                    </p>
                </div>
            </div>
            <div className="relative lg:hidden">
                {im}
                <div className="absolute inset-0 p-10 flex flex-col">
                    <span className="animate-on-scroll text-primary text-5xl mb-15">
                        {title}
                    </span>
                    <div className="flex flex-col text-primary text-2xl space-y-5">
                        <p className="animate-on-scroll flex justify-center bg-primary/5 backdrop-blur-xs py-3 rounded-xs shadow-sm">Convivialité.</p>
                        <p className="animate-on-scroll flex justify-center bg-primary/5 backdrop-blur-xs py-3 rounded-xs shadow-sm">Entraide.</p>
                        <p className="animate-on-scroll flex justify-center bg-primary/5 backdrop-blur-xs py-3 rounded-xs shadow-sm">Accompagnement.</p>
                    </div>
                </div>
            </div>
        </>
    );
}