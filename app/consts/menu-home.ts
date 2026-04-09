import { BarChart3, Calendar, Layers, Swords, Trophy, UserCheck } from "lucide-react";

export const NEWS = [
    {
        tag: "Próximamente",
        tagColor: "text-[#b11212] bg-[#b11212]/10 border-[#b11212]/25",
        topColor: "#b11212",
        icon: Trophy,
        title: "I Campeonato Nacional de Frontón",
        desc: "El primer torneo oficial de la asociación a nivel nacional. Categorías para todos los niveles y edades.",
        href: "/championships",
    },
    {
        tag: "En desarrollo",
        tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/25",
        topColor: "#f59e0b",
        icon: BarChart3,
        title: "Rankings en Tiempo Real",
        desc: "Sistema de puntuación dinámica actualizado partido a partido. Sigue tu posición en el ranking global.",
        href: "/dashboard",
    },
    {
        tag: "Próximamente",
        tagColor: "text-[#b11212] bg-[#b11212]/10 border-[#b11212]/25",
        topColor: "#b11212",
        icon: Layers,
        title: "Torneos por Categorías",
        desc: "Competiciones separadas por nivel, edad y modalidad. Encuentra el torneo perfecto para ti.",
        href: "/championships",
    },
];

export const STEPS = [
    {
        icon: UserCheck,
        step: "01",
        title: "Crea tu cuenta",
        desc: "Regístrate en segundos y forma parte de la comunidad AMPFS.",
    },
    {
        icon: Calendar,
        step: "02",
        title: "Elige tu torneo",
        desc: "Explora los campeonatos disponibles y apúntate al que más encaje contigo.",
    },
    {
        icon: Swords,
        step: "03",
        title: "Compite y destaca",
        desc: "Juega, sigue tu ranking en tiempo real y demuestra tu nivel.",
    },
];