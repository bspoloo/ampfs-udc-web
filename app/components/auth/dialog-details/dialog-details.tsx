"use client";

import { validateEmail } from "@/app/functions/validate-email";
import { useLogin } from "@/app/hooks/use-login";
import { useRegister } from "@/app/hooks/use-register";
import { RegisterInterface } from "@/app/interfaces/register.interface";
import { DialogDetailsProps } from "@/app/props/dialog-details.props";
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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function DialogDetails({ open, data, setOpen }: DialogDetailsProps) {
    const router = useRouter();
    const [register, setRegister] = useState<RegisterInterface>({
        fullName: "",
        username: "",
        numberPhone: "",
        email: "",
        password: "",
        confirmPassword: "",
        roles: ["user"]
    });

    const [shouldLogin, setShouldLogin] = useState<boolean>(false);
    const [validationError, setValidationError] = useState<string>('');

    const { userResponse, loading, error, resetError } = useRegister(register, shouldLogin);

    useEffect(() => {
        if (data?.email) {
            setRegister(prev => ({
                ...prev,
                email: data.email,
                password: data.password || "",
                confirmPassword: data.confirmPassword || "",
            }));
        }
    }, [data]);

    useEffect(() => {
        if (userResponse) {
            router.push('/');
            router.refresh();
        }
    }, [userResponse, router]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetError?.();
        setValidationError("");
        setOpen(true);
        if (!data.email.trim() || !data.confirmPassword.trim()) {
            return;
        }

        if (!validateEmail(data.email.trim())) {
            setValidationError("El correo electronico debe ser valido");
            return;
        }
        if (shouldLogin) {
            setShouldLogin(false);
            setTimeout(() => {
                setShouldLogin(true);
            }, 100);
        } else {
            setShouldLogin(true);
        }
    };


    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent
                className="w-full backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-8"
                style={{ background: 'radial-gradient(ellipse at center, #232732 0%, #3a2a34 45%, #2b1e28 100%)' }}
            >
                <form onSubmit={handleSubmit}>
                    <DialogHeader className="space-y-2 text-center">
                        <DialogTitle className="text-xl font-semibold text-white">
                            Completa tu perfil
                        </DialogTitle>
                        <DialogDescription className="text-gray-400 text-sm">
                            Ingresa tus datos personales para continuar
                        </DialogDescription>
                    </DialogHeader>

                    <FieldGroup className="mt-6">
                        <Field>
                            <Label className="text-gray-300 text-sm">
                                Nombre completo
                            </Label>
                            <Input
                                id="fullname"
                                name="fullname"
                                value={register.fullName}
                                onChange={(e) => setRegister({ ...register, fullName: e.target.value })}
                                placeholder="Pedro Duarte"
                                className="mt-1 h-11 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#d68e06] focus:border-transparent transition-all"
                            />
                        </Field>

                        <Field>
                            <Label className="text-gray-300 text-sm">
                                Nombre de usuario
                            </Label>
                            <Input
                                id="username"
                                name="username"
                                value={register.username}
                                onChange={(e) => setRegister({ ...register, username: e.target.value })}
                                placeholder="Joel123"
                                className="mt-1 h-11 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#d68e06] focus:border-transparent transition-all"
                            />
                        </Field>

                        <Field>
                            <Label className="text-gray-300 text-sm">
                                Número de teléfono
                            </Label>
                            <div className="flex flex-row justify-center items-center gap-2.5">
                                <p className="text-gray-300 text-sm">+591</p>
                                <Input
                                    id="phone"
                                    name="phone"
                                    value={register.numberPhone}
                                    onChange={(e) => setRegister({ ...register, numberPhone: e.target.value })}
                                    placeholder="12345678"
                                    className="mt-1 h-11 bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:ring-2 focus:ring-[#d68e06] focus:border-transparent transition-all"
                                />
                            </div>
                        </Field>

                        {(validationError || error) && (
                            <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center py-2 px-3 rounded-lg">
                                {validationError || error}
                            </div>
                        )}
                    </FieldGroup>

                    <DialogFooter className="mt-6 flex flex-col gap-3 bg-transparent">
                        <DialogClose asChild>
                            <Button
                                type="button"
                                variant="outline"
                                className="bg-[#270204] border-gray-300 text-white font-medium hover:bg-[#72171c] hover:text-white hover:border-gray-300 transition-all"
                            >
                                Cancelar
                            </Button>
                        </DialogClose>

                        <Button
                            type='submit'
                            disabled={loading}
                            className="bg-[#d68e06] hover:bg-[#9b690e] text-white font-medium hover:border-[#9b690e] transition-all"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Cargando...
                                </span>
                            ) : 'Registrarme'}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}