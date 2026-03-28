"use client";

import { validateEmail } from "@/app/functions/validate-email";
import { useLogin } from "@/app/hooks/use-login";
import { useRegister } from "@/app/hooks/use-register";
import { RegisterInterface } from "@/app/interfaces/register.interface";
import { DialogDataProps } from "@/app/props/dialog-data.props";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User } from "next-auth";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function DialogMessage({ open, data, setOpen }: DialogDataProps<User | null>) {
    const router = useRouter();
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                className="w-full backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8"
                style={{ background: 'radial-gradient(ellipse at center, #232732 0%, #3a2a34 45%, #2b1e28 100%)' }}
            >
                <DialogHeader>
                    <DialogTitle>{ data ? "Registro exitoso" : "Error"}</DialogTitle>
                    <DialogDescription>
                        { data ? "Has creado tu cuenta exitosamente, vuelve a iniciar sesión con tu nueva cuenta!!" : "Error en crear tu cuenta"}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button type="button" onClick={() => {router.push("/")}}>Ir a Login</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}