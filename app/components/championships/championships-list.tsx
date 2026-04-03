"use client";

import ChampionshipCard from "./championship-card";

export default function ChampionshipsList() {
    return (
        <div className="mt-6 overflow-x-auto custom-scroll">

            <div className="flex gap-6 w-max pb-2">

                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="min-w-[300px] max-w-[300px] flex-shrink-0">
                        <ChampionshipCard />
                    </div>
                ))}

            </div>

        </div>
    );
}