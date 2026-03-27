// hooks/useAuth.ts
import { useEffect, useState } from "react";
import { CredentialsInterface } from "../interfaces/credentials.interface";
import { UserResponse } from "../interfaces/user.response";

export function useLogin(credentials: CredentialsInterface, shouldLogin: boolean): {
    userResponse: UserResponse | null;
    loading: boolean;
    error: string | null;
} {
    const [userResponse, setUserResponse] = useState<UserResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!shouldLogin) {
            return;
        }
        let isMounted = true;

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch('/api/auth/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials)
                });

                const data = await res.json();

                if (res.ok) {
                    setUserResponse(data);
                } else {
                    setError(data.message || 'Error al iniciar sesión');
                }

            } catch (err) {
                setError('Error de conexión');
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };
        
        fetchData();
        
        return () => {
            isMounted = false;
        };
    }, [shouldLogin]);

    return { userResponse, loading, error };
}