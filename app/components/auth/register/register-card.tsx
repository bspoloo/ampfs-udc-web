import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Para mostrar/ocultar contraseña
import { validateEmail } from '@/app/functions/validate-email';
import { DialogDetails } from '../dialog-details/dialog-details';
import { DialogDetailsProps } from '@/app/props/dialog-details.props';

export default function RegisterCard() {
    const router = useRouter();
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showPasswordRepeat, setShowPasswordRepeat] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [details, setDetails] = useState<{ email: string, password: string, confirmPassword: string }>({
        email: "",
        password: "",
        confirmPassword: ""
    });


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // setLoading(true);
        setError('');
        setOpen(true);
    };

    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setDetails({ ...details, email: value });
        if (value.trim() === "") {
            setError("El correo electrónico es requerido");
        } else if (!validateEmail(value.trim())) {
            setError("El correo electrónico debe ser válido");
        } else {
            setError("");
        }
    }

    const handleVerify = (e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        e.preventDefault();
        const inputText = e.target.value;
        setDetails({ ...details, confirmPassword: inputText });

        if (inputText != details.password) {
            setError("El Texto introducido no coincide con la contraseña");
            return;
        }
        setError('');
    }

    return (
        <div className="flex flex-col justify-center items-center w-full max-w-md mx-auto">
            <form
                className="bg-black/10 rounded-4xl shadow-2xl border-4  border-[#652636]/50 backdrop-blur-lg p-5 sm:p-5 w-[350px] md:p-2.5 lg:p-7.5 lg:mt-25 lg:mb-25 sm:mt-25 sm:mb-25  md:w-[500px] lg:w-[500px]"
                // className='p-8'
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-sans font-medium text-white mb-6 text-center">
                    Formulario de registro
                </h2>
                <div className="space-y-5">
                    <div className='space-y-5'>
                        <div className="space-y-1">
                            <label htmlFor="email" className="block text-sm font-medium text-[#fffbf7] ml-1">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    id='email'
                                    name='email'
                                    type="email"
                                    value={details.email}
                                    onChange={(e) => handleEmail(e)}
                                    placeholder="ejemplo@email.com"
                                    required
                                    className="w-full bg-white text-[#1e1a24] placeholder-[#d7d7d7] border border-[#9b690e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9b690e] focus:border-transparent transition-all duration-200 hover:border-[#6e6788]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium text-[#fffbf7] ml-1">
                            Contraseña
                        </label>
                        <div className="relative">
                            <input
                                id='password'
                                name='password'
                                type={showPassword ? "text" : "password"}
                                value={details.password}
                                onChange={(e) => setDetails( {...details, password: e.target.value} )}
                                placeholder="••••••••"
                                required
                                minLength={6}
                                className="w-full bg-white text-[#1e1a24] placeholder-[#d7d7d7] border border-[#9b690e] rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#9b690e] focus:border-transparent transition-all duration-200 hover:border-[#6e6788]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#9b690e] transition-colors"
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium text-[#fffbf7] ml-1">
                            Repetir contraseña
                        </label>
                        <div className="relative">
                            <input
                                id='password'
                                name='password'
                                type={showPasswordRepeat ? "text" : "password"}
                                value={details.confirmPassword}
                                onChange={(e) => handleVerify(e)}
                                placeholder="••••••••"
                                required
                                minLength={6}
                                className="w-full bg-white text-[#1e1a24] placeholder-[#d7d7d7] border border-[#9b690e] rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#9b690e] focus:border-transparent transition-all duration-200 hover:border-[#6e6788]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#9b690e] transition-colors"
                            >
                                {showPasswordRepeat ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className="bg-[#1c3643]/50 border border-red-500/20 text-red-400 text-sm text-center py-2 px-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button
                            type='submit'
                            disabled={loading}
                            className="flex-1 bg-[#d68e06] hover:bg-[#9b690e] text-white font-med hover:border-[#9b690e] py-3 px-4 rounded-lg  transition-all duration-300"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Cargando...
                                </span>
                            ) : 'Registrarte'}
                        </button>
                    </div>
                    <div className="relative my-6">
                        <div className="relative flex justify-center text-xs">
                            <span className="px-2 text-[#fffbf7]">O registrate con</span>
                        </div>
                    </div>
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-white/20 text-[#1e1a24] font-bold py-3 px-4 rounded-lg border border-white/20 transition-all duration-300"
                        onClick={() => console.log("Google login")}
                    >
                        <FcGoogle className="text-2xl" />
                        <span>Google</span>
                    </button>
                </div>
                <p className="text-xs text-gray-400 text-center mt-4">
                    Ya tienes una cuenta? <a href="/login" className="text-[#fffbf7] hover:text-[#9b690e] transition-colors">Inicia sesión</a>
                </p>
            </form>
            <DialogDetails open={open} data={details} setOpen={setOpen}></DialogDetails>
        </div>
    );
}