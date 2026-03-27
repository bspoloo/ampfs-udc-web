"use client";

import Image from "next/image";
import Gura from "../public/gura.gif";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "./interfaces/user.interface";

const getUser = async () => {
  const res = await fetch('/api/me');
  const data = await res.json();
  return data;
};

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  const closeSesion = async () => {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include'
    });

    router.push('/login');
  };

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  if (!user) return <p>Cargando...</p>;  
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1 className="text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-[5rem]">
          <div className="text-white">
            <p>Bienvenido, {user.username ?? 'usuario no autenticado'}</p>
            <p>Email: {user.email ?? 'no email'}</p>
            <p>Roles: {user.roles?.join(', ') ?? 'no roles'}</p>
          </div>
        </h1>
        <div className="text-lg text-gray-700 dark:text-gray-300">
          aqui va el proyecto de fronton web 1233123131321 {user.image}
        </div>
        <button onClick={closeSesion}>Cerrar session</button>
        <img src={user.image } alt="Profile image" />
        <img src={Gura.src} alt="gura image xd" />
      </main>
    </div>
  );
}
