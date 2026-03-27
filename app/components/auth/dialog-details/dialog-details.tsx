"use client";

import { validateEmail } from "@/app/functions/validate-email";
import { useRegister } from "@/app/hooks/use-register";
import { RegisterInterface } from "@/app/interfaces/register.interface";
import { DialogDetailsProps } from "@/app/props/dialog-details.props";
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

    const [shouldRegister, setShouldRegister] = useState(false);
    const [validationError, setValidationError] = useState('');

    const { userResponse, loading, error, resetError } = useRegister(register, shouldRegister);

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

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        resetError?.();
        setValidationError('');

        if (!register.email.trim() || !register.confirmPassword.trim()) {
            return;
        }

        if (!validateEmail(register.email.trim())) {
            setValidationError("El correo debe ser válido");
            return;
        }

        setShouldRegister(prev => !prev);
    };

    if (!open) return null;

    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <h2>Completa tu perfil</h2>
                    <p>Ingresa tus datos personales</p>

                    {/* NOMBRE */}
                    <div>
                        <label>Nombre completo</label>
                        <input
                            type="text"
                            value={register.fullName}
                            onChange={(e) =>
                                setRegister({ ...register, fullName: e.target.value })
                            }
                        />
                    </div>

                    {/* USERNAME */}
                    <div>
                        <label>Nombre de usuario</label>
                        <input
                            type="text"
                            value={register.username}
                            onChange={(e) =>
                                setRegister({ ...register, username: e.target.value })
                            }
                        />
                    </div>

                    {/* TELEFONO */}
                    <div>
                        <label>Teléfono</label>
                        <div>
                            <span>+591</span>
                            <input
                                type="text"
                                value={register.numberPhone}
                                onChange={(e) =>
                                    setRegister({ ...register, numberPhone: e.target.value })
                                }
                            />
                        </div>
                    </div>

                    {/* ERRORES */}
                    {(error || validationError) && (
                        <p>{validationError || error}</p>
                    )}

                    {/* BOTONES */}
                    <div>
                        <button type="button" onClick={() => setOpen(false)}>
                            Cancelar
                        </button>

                        <button type="submit" disabled={loading}>
                            {loading ? 'Cargando...' : 'Registrarme'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}