"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Categories from "@/app/components/championships/categories";

type StatusFront = "activo" | "proceso" | "finalizado";

type Championship = {
    id: string;
    name: string;
    state: "ACTIVE" | "IN_PROGRESS" | "FINISHED";
};

export default function ChampionshipDetail() {
    const params = useParams();
    const id = params.id as string;

    const [championship, setChampionship] = useState<Championship | null>(null);
    const [status, setStatus] = useState<StatusFront>("activo");

    const stateMap: Record<StatusFront, Championship["state"]> = {
        activo: "ACTIVE",
        proceso: "IN_PROGRESS",
        finalizado: "FINISHED",
    };

    const reverseStateMap: Record<Championship["state"], StatusFront> = {
        ACTIVE: "activo",
        IN_PROGRESS: "proceso",
        FINISHED: "finalizado",
    };

    const getStatusStyles = (state: StatusFront) => {
        switch (state) {
            case "activo":
                return "bg-green-900 border-green-500 text-green-400";
            case "proceso":
                return "bg-yellow-900 border-yellow-500 text-yellow-400";
            case "finalizado":
                return "bg-red-900 border-red-500 text-red-400";
            default:
                return "bg-gray-800 border-gray-500 text-gray-300";
        }
    };

    const handleChange = async (value: StatusFront) => {
        const prev = status;
        setStatus(value);

        try {
            const res = await fetch(`http://localhost:5000/api/v1/championship/${id}/state`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ state: stateMap[value] }),
            });

            if (!res.ok) throw new Error("Error al actualizar");

        } catch (error) {
            console.error(error);
            setStatus(prev);
        }
    };

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/championship/${id}`)
            .then(res => res.json())
            .then((data: Championship) => {
                setChampionship(data);
                setStatus(reverseStateMap[data.state]);
            })
            .catch(err => console.error(err));
    }, [id]);

    if (!championship) return <p>Cargando...</p>;

    return (
        <div className="text-white -m-6">
            <div className="relative w-full h-40 sm:h-52 md:h-64 overflow-hidden">
                
                <img
                    src="/championship_detail.webp"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/60" />

                <div className="absolute top-6 left-0 w-full px-4 sm:px-6">
                    <h2 className="text-xl font-semibold text-(--text-sidebar)">
                        {championship.name}
                    </h2>
                </div>

                <div className="absolute bottom-4 right-4">
                    <select
                        value={status}
                        onChange={(e) => handleChange(e.target.value as StatusFront)}
                        className={`px-4 py-2 rounded-md text-sm outline-none cursor-pointer border bg-(--bg-sidebar) ${getStatusStyles(status)}`}
                    >
                        <option value="activo">Activo</option>
                        <option value="proceso">En proceso</option>
                        <option value="finalizado">Finalizado</option>
                    </select>
                </div>

            </div>

            <Categories />
        </div>
    );
}