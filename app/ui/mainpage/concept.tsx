import Image from "next/image";

export default function Concept() {
    return (
        <div className="px-10 h-auto w-full flex flex-row space-x-10">
            <div className="text-right flex flex-col gap-y-5 w-[65%] mt-10">
                <h2 className="text-2xl lg:text-3xl xl:text-4xl text-primary mb-5">
                    Notre<br/>Concept
                </h2>
                <p className="text-xs md:text-sm xl:text-base text-primary leading-none ">
                    2400m2 d'infrastructure sportive flambant neuve.
                    Nombreuses activités, musculation cours collectifs et smallgroups avec coach diplômé, squash, danse, Pôle Aqua et pôle santé avec notre ostéopathe.
                </p>
                <p className="text-xs md:text-sm xl:text-base text-primary leading-none ">
                    Cours collectifs, smallgroups, et cours aquatiques en illimité toute la semaine pour les formules associées.
                    Nous tenons à ce que chaque adhérent qui visite la salle ne veuille plus en partir.
                    Tout le monde doit se sentir considéré et accompagné. Matériel sélectionné sur le volet pour satisfaire tout type de pratiquant.
                    Poids calibrés pour la compétition, plateau d'haltérophilie, sacs de frappe pour les boxeurs, machines de musculation qualité italienne signée panatta, cardio connecté par technogym.
                </p>
            </div>
            <div className="flex items-center justify-center overflow-hidden h-[400px] w-[30%] rounded-lg">
                <Image
                    src="/concept.jpg"
                    width={3024}
                    height={4032}
                    className="object-cover"
                    alt=""
                />
            </div>
        </div>
    );
}