"use client"

import { Ellipsis,RefreshCcw } from "lucide-react"

export default function RequestsList() {
    return (
        <div className="flex-1 overflow-y-auto custom-scroll rounded border border-(--border-dark) mt-5">
            <table className="w-full text-sm">
                <thead className="bg-(--bg-main) sticky top-0 z-10">
                    <tr className="text-(--text-btn-sidebar)">
                        <th className="p-3 text-left">Equipo</th>
                        <th className="p-3 text-left">Tipo</th>
                        <th className="p-3 text-left">Estado</th>
                        <th className="p-3 text-left">Mensaje</th>
                        <th className="p-3">
                            <RefreshCcw className="w-4 h-4" />
                        </th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-t border-(--border-dark) hover:bg-(--hover-btn-sidebar) transition">
                        <td className="p-3 text-(--text-sidebar)">C.A.S</td>
                        <td className="p-3 text-(--text-btn-sidebar)">Cambio de horario</td>
                        <td className="p-3 text-yellow-300">Pendiente</td>
                        <td className="p-3 text-(--text-btn-sidebar)">El equipo de C.A.S solicita permiso de  cambio de horario...</td>
                        <td className="p-3 text-(--text-btn-sidebar)">
                            <button className="cursor-pointer p-1">
                                <Ellipsis className="w-4 h-4" />
                            </button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
        </div>
    );
}