"use client";

import { ArrowRight, Users } from "lucide-react";
import { useRouter } from "next/navigation";

type StatusFront = "activo" | "proceso" | "finalizado";
type Championship = {
    id: string;
    name: string;
    state: "ACTIVE" | "IN_PROGRESS" | "FINISHED";
    gestion?: string;
};

export default function ChampionshipCard({ championship }: { championship: Championship }) {
    const router = useRouter();

    const reverseStateMap: Record<Championship["state"], StatusFront> = {
        ACTIVE: "activo",
        IN_PROGRESS: "proceso",
        FINISHED: "finalizado",
    };

    const statusFront = reverseStateMap[championship.state];

    const getStatusStyles = (state: StatusFront) => {
        switch(state) {
            case "activo":
                return "absolute top-2 right-2 bg-green-500 text-white text-xs px-3 py-1 rounded-full shadow-md";
            case "proceso":
                return "absolute top-2 right-2 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full shadow-md";
            case "finalizado":
                return "absolute top-2 right-2 bg-(--btn-activo-sidebar) text-white text-xs px-3 py-1 rounded-full shadow-md"
        }
    }

    const statusLabel: Record<StatusFront, string> = {
        activo: "Activo",
        proceso: "En proceso",
        finalizado: "Finalizado",
    };
    
    return (
        <div className="bg-(--bg-sidebar) border border-(--border-dark) rounded-2xl p-4 flex flex-col gap-4 hover:border-(--btn-activo-sidebar) transition">

            <div className="relative">

                <img
                    src="/championship_example.webp"
                    className="rounded-xl w-full h-40 object-cover"
                />

                <div className={getStatusStyles(statusFront)}>
                    {statusLabel[statusFront]}
                </div>

                <div className="absolute -bottom-3 left-1/5 -translate-x-1/2 bg-(--bg-main) px-4 py-1 text-xs rounded-full border border-(--border-dark) shadow-md text-(--text-sidebar)">
                    {championship.gestion}
                </div>

            </div>

            <h3 className="text-lg font-semibold text-(--text-sidebar)">
                {championship.name}
            </h3>

            <div className="text-sm text-(--text-btn-sidebar)">
                <p className="font-medium text-(--text-sidebar)">Categorías</p>
                <p>Primera De Honor</p>
                <p>Segunda De Ascenso</p>
                <p>Tercera De Ascenso</p>
                <p>... Ver más</p>
            </div>

            <div className="border-t border-(--border-dark)"></div>

            <div className="flex items-center justify-between">

                <div className="text-sm">
                    <p className="text-(--text-btn-sidebar)">Categorías</p>
                    <p className="font-semibold text-(--text-sidebar)">12</p>
                </div>

                <div className="text-sm flex items-center gap-2">
                    <Users className="w-4 h-4 text-(--text-btn-sidebar)" />
                    <div>
                        <p className="text-(--text-btn-sidebar)">Equipos</p>
                        <p className="font-semibold text-(--text-sidebar)">128</p>
                    </div>
                </div>

                <button className="bg-(--btn-activo-sidebar) p-3 rounded-full hover:scale-105 transition cursor-pointer" onClick={() => router.push(`/dashboard/championships/${championship.id}`)}>
                    <ArrowRight className="w-4 h-4 text-white" />
                </button>

            </div>
        </div>
    );
}