"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Trophy, Calendar, HeartHandshake, Users, Mails, PanelLeft, DoorOpen } from "lucide-react";
import { signOut, useSession } from "next-auth/react";

export default function Sidebar() {
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);
    const { data: session, status } = useSession();
    
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setCollapsed(true);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <aside className={`h-screen ${collapsed ? 'w-20' : 'w-64'} transition-all duration-300 bg-(--bg-sidebar) text-(--text-sidebar) border-r border-(--border-dark) flex flex-col justify-between p-4`}>

            <div>
                <div className={`flex ${collapsed ? "justify-center" : "justify-end"} mb-4`}>
                    <button className="cursor-pointer" onClick={() => setCollapsed(!collapsed)}>
                        <PanelLeft className="w-5 h-5 text-(--btn-activo-sidebar)" />
                    </button>
                </div>

                <div className={`${collapsed ? "hidden" : "flex flex-col items-center gap-2 mb-8"}`}>
                    <div className="w-24 h-24 rounded-full border border-(--btn-activo-sidebar) flex items-center justify-center text-[40px]">
                        {
                            session?.user.image ? <div>
                                <img src={
                                    session?.user.image
                                } alt="image" className="w-24 h-24 rounded-full border border-(--btn-activo-sidebar) flex items-center justify-center"/>
                            </div> : session?.user.username![0].toUpperCase()
                        }

                    </div>
                    <p>
                        {session?.user.roles[0].toLocaleUpperCase()}
                    </p>
                    <p className="font-semibold">
                        {session?.user.username ?? "sin nombre de usuario"}
                    </p>
                </div>

                <ul className="flex flex-col gap-2">

                    <li>
                        <button className={`cursor-pointer flex items-center ${collapsed ? "justify-center" : "justify-start"} gap-3 w-full px-4 py-2 rounded bg-(--btn-activo-sidebar) hover:bg-(--hover-btn-sidebar) transition active:scale-95`}>
                            <Trophy className="w-5 h-5" />
                            {!collapsed && <span>Campeonatos</span>}
                        </button>
                    </li>

                    <li>
                        <button className={`cursor-pointer flex items-center ${collapsed ? "justify-center" : "justify-start"} gap-3 w-full px-4 py-2 rounded hover:bg-(--hover-btn-sidebar) transition active:scale-95 text-(--text-btn-sidebar)`}>
                            <Calendar className="w-5 h-5" />
                            {!collapsed && <span>Partidos</span>}
                        </button>
                    </li>

                    <li>
                        <button className={`cursor-pointer flex items-center ${collapsed ? "justify-center" : "justify-start"} gap-3 w-full px-4 py-2 rounded hover:bg-(--hover-btn-sidebar) transition active:scale-95 text-(--text-btn-sidebar)`}>
                            <HeartHandshake className="w-5 h-5" />
                            {!collapsed && <span>Clubes</span>}
                        </button>
                    </li>

                    <li>
                        <button className={`cursor-pointer flex items-center ${collapsed ? "justify-center" : "justify-start"} gap-3 w-full px-4 py-2 rounded hover:bg-(--hover-btn-sidebar) transition active:scale-95 text-(--text-btn-sidebar)`}>
                            <Users className="w-5 h-5" />
                            {!collapsed && <span>Jugadores</span>}
                        </button>
                    </li>

                    <li>
                        <button className={`cursor-pointer flex items-center ${collapsed ? "justify-center" : "justify-start"} gap-3 w-full px-4 py-2 rounded hover:bg-(--hover-btn-sidebar) transition active:scale-95 text-(--text-btn-sidebar)`}>
                            <Mails className="w-5 h-5" />
                            {!collapsed && <span>Solicitudes</span>}
                        </button>
                    </li>

                </ul>
            </div>

            <button
                onClick={async () => {
                    await signOut({
                        redirect: true,
                        callbackUrl: '/login'
                    });
                }}
                className="cursor-pointer flex items-center justify-center gap-2 w-full border border-(--border-dark) py-2 rounded hover:bg-(--btn-activo-sidebar) transition"
            >
                {collapsed
                    ? <DoorOpen className="w-5 h-5" />
                    : "Cerrar sesión"
                }
            </button>

        </aside>
    )
}