"use client";

import ChampionshipsHeader from "@/app/components/championships/championships-header";
import ChampionshipsList from "@/app/components/championships/championships-list";
import Pagination from "@/app/components/championships/pagination";
import Sidebar from "@/app/components/dashboard/sidebar/sidebar";
import Loader from "@/app/components/loader";
import { useEffect, useState } from "react";

export default function MatchesPage() {
    const [loading, setLoading] = useState<boolean>(true);

    setTimeout(() => {
        setLoading(false);
    }, 3000);
    return (
        <div>
            {!loading ?
                <div className="flex flex-col items-center justify-center min-h-screen">
                    <h1 className="text-2xl font-bold text-green-600">Bienvenido a Partidos</h1>
                    <p className="mt-4">Aquí puedes gestionar tus partidos.</p>
                    <a href="/championships" className="mt-4 text-blue-500 hover:underline">
                        Ver Campeonatos
                    </a>
                </div> :
                <Loader></Loader>
            }
        </div>
    );
}