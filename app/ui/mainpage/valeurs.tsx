import Image from "next/image";

export default function Valeurs() {
    return (
        <div className="px-10 h-auto w-full flex flex-row space-x-10 items-start">
            <div className="flex items-center justify-center overflow-hidden h-[400px] w-[30%] rounded-lg mt-7">
                <Image
                    src="/valeurs.jpg"
                    width={3024}
                    height={4032}
                    className="object-cover"
                    alt=""
                />
            </div>
            <div className="flex flex-col gap-y-10 pt-20">
                <h2 className="text-left text-4xl text-primary">
                    Nos<br/>Valeurs
                </h2>
                <p className="text-xl text-primary">
                    Convivialité, Entraide, Accompagnement.
                </p>
            </div>
        </div>
    );
}