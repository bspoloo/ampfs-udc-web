"use client";

import { ArrowRight, Users } from "lucide-react";

export default function ChampionshipCard() {
    return (
        <div className="bg-(--bg-sidebar) border border-(--border-dark) rounded-2xl p-4 flex flex-col gap-4 hover:border-(--btn-activo-sidebar) transition">

            <div className="relative">
                <img
                    src="/championship_example.webp"
                    className="rounded-xl w-full h-40 object-cover"
                />

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black px-4 py-1 text-xs rounded-full border border-(--border-dark)">
                    1/2026
                </div>
            </div>

            <h3 className="text-lg font-semibold text-(--text-sidebar)">
                Campeonato Clausura
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

                <button className="bg-(--btn-activo-sidebar) p-3 rounded-full hover:scale-105 transition cursor-pointer">
                    <ArrowRight className="w-4 h-4 text-white" />
                </button>

            </div>
        </div>
    );
}