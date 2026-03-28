"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { User } from "./interfaces/user.interface";
import { signOut, useSession } from "next-auth/react";

const getUser = async () => {
  const res = await fetch('/api/me');
  const data = await res.json();
  return data;
};

export default function Home() {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();
  const { data: session, status } = useSession();

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

        <p>Bienvenido, {session?.user.username ?? 'usuario no autenticado xdxdxd'}</p>
        <p>Email: {session?.user.email ?? 'no email'}</p>
        <p>Roles: {session?.user.roles?.join(', ') ?? 'no roles'}</p>

        <p>Proyecto Frontón Web</p>

        <button onClick={async () => {
          await signOut({
            redirect: true,
            callbackUrl: '/login'
          });
        }}>
          Cerrar sesión
        </button>
      </main>
    </div>
  );
}