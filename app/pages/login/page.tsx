"use client"

import LoginCard from "@/app/components/login/login-card";
import Logo from "@/public/logo.png";
import Fronton from "@/public/fronton01.webp";
// import { signIn } from "next-auth/react";

export default function Login() {

    
    return (
        <div className="login">
            <div className="flex flex-row flex-wrap bg-[#2c2638] items-center justify-center gap-2.5 p-4 rounded-2xl shadow-2xl shadow-black/50">
                <div className="fronton flex justify-center items-center">
                    <div className="flex w-full justify-between items-center">
                        <img src={Logo.src} alt="Logo from ampfc" width={50} />
                        <div className="bg-white/30 backdrop-blur-lg rounded-[50px] shadow-xl border border-white/20">
                            <h2 className="text-[15px] font-bold px-2.5">
                                A.M.P.F.C
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <p className="text-2xl text-[#]"></p>
                    <LoginCard>
                    </LoginCard>
                </div>

            </div>
        </div>
    );
}