import { useRouter } from 'next/navigation';
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Para mostrar/ocultar contraseña

export default function LoginCard() {
    const router = useRouter();
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (res.ok) {
                router.push('/');
                router.refresh();
            } else {
                setError(data.message || 'Error al iniciar sesión');
            }
        } catch (err) {
            setError('Error de conexión');
        } finally {
            setLoading(false);
        };
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <form
                className="bg-black/10 rounded-4xl  shadow-2xl  p-10  border-4  border-[#652636]/50  lg:mt-[100px]  sm:mb-[100px] sm:mt-[100px] backdrop-blur-lg"
                // className='p-8'
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-sans font-medium text-white mb-6 text-center">
                    Asociación municipal de Fronton Sucre
                </h2>

                <div className="space-y-5">
                    {/* Campo Email */}
                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium text-[#fffbf7] ml-1">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                id='email'
                                name='email'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ejemplo@email.com"
                                required
                                className="w-full bg-white font-bold text-[#1e1a24] placeholder-[#d7d7d7] border border-[#9b690e] rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#9b690e] focus:border-transparent transition-all duration-200 hover:border-[#6e6788]"
                            />
                        </div>
                    </div>

                    {/* Campo Contraseña */}
                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium text-[#fffbf7] ml-1">
                            Contraseña
                        </label>
                        <div className="relative">
                            <input
                                id='password'
                                name='password'
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                                minLength={6}
                                className="w-full bg-white font-bold text-[#1e1a24] placeholder-[#d7d7d7] border border-[#9b690e] rounded-lg px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#9b690e] focus:border-transparent transition-all duration-200 hover:border-[#6e6788]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#9b690e] transition-colors"
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                        <div className="text-left mt-1">
                            <a href="#" className="text-xs text-[#fffbf7] hover:text-[#b4a6e0] transition-colors">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>

                    {/* Mensaje de error */}
                    {error && (
                        <div className="bg-[#1c3643]/50 border border-red-500/20 text-red-400 text-sm text-center py-2 px-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button
                            type='submit'
                            disabled={loading}
                            className="flex-1 bg-[#d68e06] hover:bg-[#9b690e] text-white font-semibold py-3 px-4 rounded-lg hover:border-[#9b690e] transition-all duration-300"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Cargando...
                                </span>
                            ) : 'Iniciar Sesión'}
                        </button>
                    </div>

                    {/* Divisor */}
                    <div className="relative my-6">
                        <div className="relative flex justify-center text-xs">
                            <span className="px-2 text-[#fffbf7]">O continúa con</span>
                        </div>
                    </div>

                    {/* Botón Google */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 bg-white hover:bg-white/20 text-[#1e1a24] font-bold py-3 px-4 rounded-lg border border-white/20 transition-all duration-300"
                        onClick={() => console.log("Google login")}
                    >
                        <FcGoogle className="text-2xl" />
                        <span>Google</span>
                    </button>
                </div>
                {/* Términos y condiciones */}
                <p className="text-xs text-gray-400 text-center mt-4">
                    No tienes una cuenta aún? <a href="#" className="text-[#fffbf7] hover:text-[#9b690e] transition-colors">Regístrate gratis</a>
                </p>
            </form>
        </div>
    );
}