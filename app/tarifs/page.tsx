export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center w-full px-5 space-y-10 pt-20">
            <div className="flex flex-col items-left w-full h-screen">
                <h2 className="uppercase text-primary text-4xl mb-2">
                    Classic
                </h2>
                <p className="uppercase text-accent text-sm">
                    Muscu & Cardio accès libre.
                </p>
            </div>
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