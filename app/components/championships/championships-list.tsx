"use client";

import ChampionshipCard from "./championship-card";
import { userChampionships } from "@/app/hooks/use-championships";

export default function ChampionshipsList() {
    const { data, loading } = userChampionships();

    if (loading) {
        return <p className="text-white mt-6">Cargando campeonatos...</p>;
    }
    return (
        <div className="mt-6 overflow-x-auto custom-scroll">
            <div className="flex gap-6 w-max pb-2">

                {data.map((championship) => (
                    <div
                        key={championship.id}
                        className="min-w-[300px] max-w-[300px] flex-shrink-0:"
                    >
                        <ChampionshipCard championship={championship} />
                    </div>
                ))}

            </div>
        </div>
    );
}