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
                // className="bg-gradient-to-br from-[#2c2638] to-[#3a3348] rounded-2xl shadow-2xl p-8 border border-white/10"
                className='p-8'
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Bienvenido de vuelta
                </h2>

                <div className="space-y-5">
                    {/* Campo Email */}
                    <div className="space-y-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 ml-1">
                            Email
                        </label>
                        <div className="relative">
                            <input
                                id='email'
                                name='email'
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="tu@email.com"
                                required
                                className="w-full bg-[#1e1a24] text-white placeholder-gray-500 border border-[#4a435a] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#8a7ab5] focus:border-transparent transition-all duration-200 hover:border-[#6e6788]"
                            />
                        </div>
                    </div>

                    {/* Campo Contraseña */}
                    <div className="space-y-1">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 ml-1">
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
                                className="w-full bg-[#1e1a24] text-white placeholder-gray-500 border border-[#4a435a] rounded-xl px-4 py-3 pr-12 focus:outline-none focus:ring-2 focus:ring-[#8a7ab5] focus:border-transparent transition-all duration-200 hover:border-[#6e6788]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                            >
                                {showPassword ? <FaEyeSlash size={18} /> : <FaEye size={18} />}
                            </button>
                        </div>
                        <div className="text-right mt-1">
                            <a href="#" className="text-xs text-[#9d8ec9] hover:text-[#b4a6e0] transition-colors">
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                    </div>

                    {/* Mensaje de error */}
                    {error && (
                        <div className="bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center py-2 px-3 rounded-lg">
                            {error}
                        </div>
                    )}

                    {/* Botones */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button
                            type='submit'
                            disabled={loading}
                            className="flex-1 bg-gradient-to-r from-[#6d54b5] to-[#8a6ed9] hover:from-[#5a4499] hover:to-[#755bc2] text-white font-semibold py-3 px-4 rounded-xl shadow-lg shadow-purple-900/30 hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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

                        <button
                            type="button"
                            className="flex-1 bg-transparent hover:bg-[#4a435a] text-white font-semibold py-3 px-4 rounded-xl border-2 border-[#6d54b5] hover:border-[#8a6ed9] transition-all duration-300"
                            onClick={() => router.push('/register')}
                        >
                            Crear cuenta
                        </button>
                    </div>

                    {/* Divisor */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-[#4a435a]"></div>
                        </div>
                        <div className="relative flex justify-center text-xs">
                            <span className="px-2 bg-[#2c2638] text-gray-400">O continúa con</span>
                        </div>
                    </div>

                    {/* Botón Google */}
                    <button
                        type="button"
                        className="w-full flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-xl border border-white/20 transition-all duration-300 backdrop-blur-sm"
                        onClick={() => console.log("Google login")}
                    >
                        <FcGoogle className="text-2xl" />
                        <span>Google</span>
                    </button>
                </div>
                {/* Términos y condiciones */}
                <p className="text-xs text-gray-400 text-center mt-4">
                    Al iniciar sesión, aceptas nuestros{' '}
                    <a href="#" className="text-[#9d8ec9] hover:text-[#b4a6e0]">Términos de uso</a>
                    {' '}y{' '}
                    <a href="#" className="text-[#9d8ec9] hover:text-[#b4a6e0]">Política de privacidad</a>
                </p>
            </form>
        </div>
    );
}