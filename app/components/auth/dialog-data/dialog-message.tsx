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
import { CheckCircle2, XCircle, ArrowRight, Sparkles } from "lucide-react";

export function DialogMessage({ open, data, setOpen }: DialogDataProps<User | null>) {
    const router = useRouter();
    const isSuccess = !!data;

    return (
        <Dialog open={open} onOpenChange={setOpen}>

            <DialogContent className="w-[95%] max-w-md mx-auto backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-0 overflow-hidden animate-in fade-in-0 zoom-in-95 duration-300">                <div className={`relative h-32 ${isSuccess ? 'bg-gradient-to-r from-emerald-500 to-teal-600' : 'bg-gradient-to-r '}`}>
                <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px]" />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                    <div className={`rounded-full p-3 shadow-xl ${isSuccess ? 'bg-emerald-500' : 'bg-red-500'}`}>
                        {isSuccess ? (
                            <CheckCircle2 className="w-12 h-12 text-white" />
                        ) : (
                            <XCircle className="w-12 h-12 text-white" />
                        )}
                    </div>
                </div>
            </div>
                <div className="px-6 pb-8 pt-12 text-center">
                    <DialogHeader className="space-y-3">
                        <DialogTitle className={`text-2xl font-bold ${isSuccess ? 'text-emerald-400' : 'text-red-400'}`}>
                            {isSuccess ? "¡Registro exitoso!" : "Error en el registro"}
                        </DialogTitle>
                        <DialogDescription className="text-gray-300 text-base leading-relaxed">
                            {isSuccess ? (
                                <>
                                    <span className="block mb-2">¡Felicidades! Tu cuenta ha sido creada exitosamente.</span>
                                    <span className="text-sm text-gray-400">Ahora puedes iniciar sesión con tus credenciales.</span>
                                </>
                            ) : (
                                <>
                                    <span className="block mb-2">No pudimos completar tu registro.</span>
                                    <span className="text-sm text-gray-400">Por favor, verifica tus datos e intenta nuevamente.</span>
                                </>
                            )}
                        </DialogDescription>
                    </DialogHeader>
                    {!isSuccess && (
                        <div className="mt-6 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                            <p className="text-xs text-yellow-400">
                                ¿Problemas para registrarte? Contacta con soporte o intenta con otro método de registro.
                            </p>
                        </div>
                    )}
                    {!isSuccess && (
                        <DialogFooter className="mt-8 flex-col gap-3">
                            <Button
                                type="button"
                                variant="outline"
                                onClick={() => setOpen(false)}
                                className="w-full border-white/20 text-gray-300 hover:bg-white/10 hover:text-white"
                            >
                                Intentar nuevamente
                            </Button>
                        </DialogFooter>
                    )}
                    {isSuccess && (
                        <div className="absolute top-3 right-3 opacity-20">
                            <Sparkles className="w-8 h-8 text-white" />
                        </div>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    );
}