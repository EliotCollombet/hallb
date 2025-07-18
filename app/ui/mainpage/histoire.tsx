import Image from "next/image";

export default function Histoire() {
    const im = 
        <Image
            src="/histoire.jpg"
            width={3024}
            height={4032}
            className="object-cover"
            alt=""
        />
    const title = <p>Notre<br/>Histoire</p>
    const txt =
        <span>
            Fiers enfants de la <span className="text-accent">Vaunage</span>, nous voulions offrir à la région un espace sportif indépendant, chaleureux et exigeant.
            Sous l'impulsion de <span className="text-accent">Bastien Boisseau</span>, coach passionné, nous avons transformé l'ancienne structure :
            adieu les terrains de foot en salle, place à un vaste plateau entièrement rénové, pensé dans les moindres détails pour VOUS.
            Ici, aucun badge anonyme : chaque adhérent est un projet, un visage, une ambition que nous prenons plaisir à accompagner.
        </span>
    return (
        <div>
            <div className="hidden lg:flex pl-50 pr-10 h-auto w-full flex-row space-x-10">
                <div className="mt-5 flex items-center justify-center overflow-hidden h-[400px] w-[30%] rounded-lg">
                    {im}
                </div>
                <div className="text-left flex flex-col gap-y-10 w-[65%]">
                    <h2 className="text-4xl text-primary">
                        {title}
                    </h2>
                    <p className="text-primary">
                        {txt}
                    </p>
                </div>
            </div>
            <div className="relative lg:hidden">
                {im}
                <div className="absolute inset-0 p-10 flex flex-col">
                    <span className="text-primary text-5xl mb-8">
                        {title}
                    </span>
                    <p className="leading-none text-primary text-sm bg-primary/5 backdrop-blur-xs py-3 rounded-xs shadow-sm px-1">
                        {txt}
                    </p>
                </div>
            </div>
        </div>
    );
}