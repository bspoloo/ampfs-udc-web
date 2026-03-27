"use client"

import RegisterCard from "@/app/components/auth/register/register-card";
import Image from "next/image";

export default function Register() {
    return (
        <div
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
            style={{ background: 'radial-gradient(ellipse at center, #9B1111 0%, #5A0000 45%, #1E0000 100%)' }}
        >
            {/* LOGO WATERMARK */}
            <div className="absolute left-[8%] top-1/2 -translate-y-1/2 opacity-40 select-none pointer-events-none z-0">
                <Image
                    src="/logo_white.png"
                    alt=""
                    width={600}
                    height={600}
                    className="object-contain"
                />
            </div>

            {/* CARD */}
            <div className="relative z-10 w-full px-4 flex justify-center">
                <RegisterCard />
            </div>
        </div>
    );
}
