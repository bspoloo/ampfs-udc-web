import { Calendar, HeartHandshake, Mails, Trophy, Users } from "lucide-react";
import { SideBarDashboard } from "../interfaces/dashboard/side-bar-dashboard";

export const SIDE_BAR_MENU_DASHBOARD: SideBarDashboard[] = [
    {
        name: "Campeonatos",
        route: "/dashboard/championships",
        icon: Trophy
    },
    {
        name: "Partidos",
        route: "/dashboard/matches",
        icon: Calendar
    },
    {
        name: "Clubes",
        route: "/dashboard/clubs",
        icon: HeartHandshake
    },
    {
        name: "Jugadores",
        route: "/dashboard/players",
        icon: Users
    },
    {
        name: "Solicitudes",
        route: "/dashboard/requests",
        icon: Mails
    }
]