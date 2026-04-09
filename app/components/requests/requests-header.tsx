"use client"

import { Search } from "lucide-react"

export default function RequestsHeader() {
    return (
        <div className="flex flex-col gap-5">

            <h2 className="text-xl text-(--text-sidebar)">Solicitudes</h2>

            <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center flex-[2] min-w-[300px] px-4 py-2 bg-(--bg-sidebar) rounded-xl border border-(--border-dark)">
                    <Search className="w-4 h-4 text-(--text-btn-sidebar) mr-2"/>
                    <input type="text" placeholder="Buscar solicitud..." className="bg-transparent outline-none text-(--text-sidebar) placeholder:text-(--text-btn-sidebar) w-full"/>
                </div>

                <button className="px-4 py-2 text-(--text-btn-sidebar) rounded-xl bg-(--bg-sidebar) border border-(--border-dark) hover:bg-(--hover-btn-sidebar) transition cursor-pointer">
                    Tipo
                </button>

                <button className="px-4 py-2 text-(--text-btn-sidebar) rounded-xl bg-(--bg-sidebar) border border-(--border-dark) hover:bg-(--hover-btn-sidebar) transition cursor-pointer">
                    Estado
                </button>

                <button className="px-4 py-2 text-(--text-btn-sidebar) rounded-xl bg-(--btn-activo-sidebar) hover:opacity-90 transition cursor-pointer">
                    Buscar
                </button>
            </div>

        </div>
    );
}