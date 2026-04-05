"use client";

import { Search, Plus } from "lucide-react";

export default function ChampionshipsHeader() {
    return (
        <div className="flex flex-col gap-5">

            <h2 className="text-xl font-semibold text-(--text-sidebar)">
                Campeonatos
            </h2>

            <div className="flex flex-wrap items-center gap-3">

                <div className="flex items-center flex-[2] min-w-[300px] bg-(--bg-sidebar) border border-(--border-dark) rounded-xl px-4 py-2">
                    <Search className="w-4 h-4 text-(--text-btn-sidebar) mr-2" />
                    <input
                        type="text"
                        placeholder="Buscar por nombre..."
                        className="bg-transparent outline-none text-(--text-sidebar) placeholder:text-(--text-btn-sidebar) w-full"
                    />
                </div>

                <button className="px-4 py-2 rounded-xl bg-(--bg-sidebar) border border-(--border-dark) text-(--text-btn-sidebar) hover:bg-(--hover-btn-sidebar) transition cursor-pointer">
                    Estado
                </button>

                <button className="px-4 py-2 rounded-xl bg-(--bg-sidebar) border border-(--border-dark) text-(--text-btn-sidebar) hover:bg-(--hover-btn-sidebar) transition cursor-pointer">
                    Año
                </button>

                <button className="px-4 py-2 rounded-xl bg-(--bg-sidebar) border border-(--border-dark) text-(--text-btn-sidebar) hover:bg-(--hover-btn-sidebar) transition cursor-pointer">
                    Buscar
                </button>

                <button className="p-3 rounded-xl bg-(--btn-activo-sidebar) hover:opacity-90 transition cursor-pointer">
                    <Plus className="w-5 h-5 text-white" />
                </button>

            </div>
        </div>
    );
}
