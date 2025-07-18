import Image from "next/image";

export default function Concept() {
    const im =
        <Image
            src="/concept.jpg"
            width={3024}
            height={4032}
            className="object-cover"
            alt=""
        />
    const title =
        <p>
            Notre<br/>Concept
        </p>
    const txt1 =
        <span>
            2400m2 d'infrastructure sportive flambant neuve.
            Nombreuses activités, musculation cours collectifs et smallgroups avec coach diplômé, squash, danse, Pôle Aqua et pôle santé avec notre ostéopathe.
        </span>
    const txt2 =
        <span>
            Cours collectifs, smallgroups, et cours aquatiques en illimité toute la semaine pour les formules associées.
            Nous tenons à ce que chaque adhérent qui visite la salle ne veuille plus en partir.
            Tout le monde doit se sentir considéré et accompagné. Matériel sélectionné sur le volet pour satisfaire tout type de pratiquant.
            Poids calibrés pour la compétition, plateau d'haltérophilie, sacs de frappe pour les boxeurs, machines de musculation qualité italienne signée panatta, cardio connecté par technogym.
        </span>
    return (
        <span>
            <div className="hidden lg:flex px-10 h-auto w-full flex-row space-x-10">
                <div className="text-right flex flex-col gap-y-5 w-[65%] mt-10">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl text-primary mb-5">
                        {title}
                    </h2>
                    <span className="text-xs md:text-sm xl:text-base text-primary leading-none ">
                        {txt1}
                    </span>
                    <span className="text-xs md:text-sm xl:text-base text-primary leading-none ">
                        {txt2}
                    </span>
                </div>
                <div className="flex items-center justify-center overflow-hidden h-[400px] w-[30%] rounded-lg">
                    {im}
                </div>
            </div>
            <div className="relative lg:hidden">
                {im}
                <div className="absolute inset-0 p-10 flex flex-col space-y-4">
                    <span className="text-primary text-5xl mb-4">
                        {title}
                    </span>
                    <p className="leading-none text-primary text-sm bg-primary/5 backdrop-blur-xs py-3 rounded-xs shadow-sm px-1">
                        {txt1}
                    </p>
                    <p className="leading-none text-primary text-sm bg-primary/5 backdrop-blur-xs py-3 rounded-xs shadow-sm px-1">
                        {txt1}
                    </p>
                </div>
            </div>
        </span>
    );
}