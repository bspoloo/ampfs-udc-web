"use client"

import LoginCard from "@/app/components/auth/login/login-card";
import Logo from "@/public/logo.png";
import Fronton from "@/public/fronton01.webp";
// import { signIn } from "next-auth/react";

export default function Login() {

    
    return (
        <div className="login background-login">
            <div className="login-container flex flex-row flex-wrap items-center justify-center gap-2.5 p-4 rounded-2xl shadow-2xl shadow-black/50">
                <div className="flex flex-col">
                    <p className="text-2xl text-[#]"></p>
                    <LoginCard>
                    </LoginCard>
                </div>

            </div>
        </div>
    );
}