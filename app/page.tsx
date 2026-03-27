"use client";

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
    <div>
      <main>
        <h1>Inicio</h1>

        <p>Bienvenido, {user.username ?? 'usuario no autenticado'}</p>
        <p>Email: {user.email ?? 'no email'}</p>
        <p>Roles: {user.roles?.join(', ') ?? 'no roles'}</p>

        <p>Proyecto Frontón Web</p>

        <button onClick={closeSesion}>
          Cerrar sesión
        </button>
      </main>
    </div>
  );
}