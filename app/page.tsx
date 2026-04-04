"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { UserInterface } from "./interfaces/user.interface";
import { signOut, useSession } from "next-auth/react";


export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  if (!session) return <p>Cargando...</p>;

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