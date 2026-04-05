"use client";

import Image from "next/image";
import Link from "next/link";
import { Trophy, MapPin, Mail, Phone, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[#0e0e0e] text-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen w-full overflow-hidden">
        <Image
          src="/fondo_home.webp"
          alt="Frontón"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-black/55" />

        {/* Navbar */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button
              className="w-[72px] h-[72px] flex items-center justify-center flex-shrink-0 text-white"
              style={{ backgroundColor: "#b11212" }}
            >
              <Image src="/menu_side.svg" alt="Menú" width={28} height={28} className="invert" />
            </button>
            <span className="text-white font-black text-xl tracking-widest uppercase italic">AMPFS</span>
          </div>
          <div className="flex items-center gap-8 pr-10">
            <Link href="/" className="text-white font-medium text-sm hover:text-red-400 transition-colors">Inicio</Link>
            <Link href="/championships" className="text-white font-medium text-sm hover:text-red-400 transition-colors">Torneos</Link>
            <Link href="/player" className="text-white font-medium text-sm hover:text-red-400 transition-colors">Equipos</Link>
            <Link href="/dashboard" className="text-white font-medium text-sm hover:text-red-400 transition-colors">Perfil</Link>
          </div>
        </nav>

        {/* Contenido hero */}
        <div className="relative z-10 min-h-screen flex flex-col">
          <div className="h-[72px]" />
          <div className="flex-1 flex items-stretch px-12 pb-14">
            <div className="flex-1 flex items-end">

            </div>
            <div className="flex-1 flex flex-col items-start justify-center gap-3">
              <h1 className="text-white font-black leading-none" style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}>
                Compite<br />Supérate.
              </h1>
              <p className="text-white/70 font-medium text-sm max-w-xs">
                El frontón es disciplina, velocidad y pasión. Únete a la comunidad.
              </p>
              <div className="mt-2 flex items-center gap-4">
                <Link
                  href="/login"
                  className="bg-white text-black font-bold px-10 py-3 text-sm tracking-wide hover:bg-gray-100 transition-colors"
                >
                  Iniciar sesión
                </Link>
                <Link
                  href="/register"
                  className="border border-white text-white font-bold px-10 py-3 text-sm tracking-wide hover:bg-white/10 transition-colors"
                >
                  Registrarse
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Flecha scroll */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center pt-1">
            <div className="w-1 h-2 bg-white/60 rounded-full" />
          </div>
        </div>
      </section>


{/* ── FOOTER ───────────────────────────────────────────── */}
      <footer className="border-t border-white/10 bg-[#080808]">
        <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1 — Marca */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center" style={{ backgroundColor: "#b11212" }}>
                <Trophy className="w-4 h-4 text-white" />
              </div>
              <span className="font-black text-lg tracking-widest uppercase italic">AMPFS</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">
              mucho texto mucho texto mucho texto
            </p>
            <div className="flex items-center gap-3 mt-2">
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors text-xs font-bold">
                IG
              </a>
              <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 transition-colors text-xs font-bold">
                FB
              </a>
            </div>
          </div>

          {/* Col 2 — Navegación */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest uppercase text-white/30">Navegación</p>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Inicio", href: "/" },
                { label: "Torneos", href: "/championships" },
                { label: "Equipos", href: "/player" },
                { label: "Iniciar sesión", href: "/login" },
                { label: "Registrarse", href: "/register" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-white/50 hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ChevronRight className="w-3 h-3 text-[#b11212] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contacto */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest uppercase text-white/30">Contacto</p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-[#b11212] mt-0.5 flex-shrink-0" />
                luego ya se pondra algo aqui
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="w-4 h-4 text-[#b11212] flex-shrink-0" />
                ya tendremos uno bueno ya
              </li>
              <li className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="w-4 h-4 text-[#b11212] flex-shrink-0" />
                12345678
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 py-5 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            <p className="text-white/20 text-xs">© 2025 AMPFS UDC. Todos los derechos reservados.</p>
            <p className="text-white/20 text-xs">Desarrollado por el equipo de Ciencias</p>
          </div>
        </div>
      </footer>

    </div>
  );
}
