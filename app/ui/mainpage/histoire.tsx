import Image from "next/image";

export default function Histoire() {
    return (
        <div className="pl-50 pr-10 h-auto w-full flex flex-row space-x-10">
            <div className="mt-5 flex items-center justify-center overflow-hidden h-[400px] w-[30%] rounded-lg">
                <Image
                    src="/histoire.jpg"
                    width={3024}
                    height={4032}
                    className="object-cover"
                    alt=""
                />
            </div>
            <div className="text-left flex flex-col gap-y-10 w-[65%]">
                <h2 className="text-4xl text-primary">
                    Notre<br/>Concept
                </h2>
                <p className="text-primary">
                    Fiers enfants de la <span className="text-accent">Vaunage</span>, nous voulions offrir à la région un espace sportif indépendant, chaleureux et exigeant.
                    Sous l'impulsion de <span className="text-accent">Bastien Boisseau</span>, coach passionné, nous avons transformé l'ancienne structure :
                    adieu les terrains de foot en salle, place à un vaste plateau entièrement rénové, pensé dans les moindres détails pour VOUS.
                    Ici, aucun badge anonyme : chaque adhérent est un projet, un visage, une ambition que nous prenons plaisir à accompagner.
                </p>
            </div>
        </div>
    );
}