// hooks/useAuth.ts
import { useEffect, useState } from "react";
import { CredentialsInterface } from "../interfaces/credentials.interface";
import { UserResponse } from "../interfaces/user.response";
import { RegisterInterface } from "../interfaces/register.interface";

export function useRegister(credentials: RegisterInterface, shouldLogin: boolean): {
    userResponse: UserResponse | null;
    loading: boolean;
    error: string | null;
    resetError: () => void
} {
    const [userResponse, setUserResponse] = useState<UserResponse | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [attemptId, setAttemptId] = useState(0);

    useEffect(() => {
        if (!shouldLogin) {
            return;
        }
        let isMounted = true;

        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch('/api/auth/register', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(credentials)
                });

                const data = await res.json();

                if (res.ok) {
                    setUserResponse(data);
                } else {
                    setError(data.message || 'Error al registrarse');
                }

            } catch (err) {
                setError('Error de conexión');
                setLoading(false);
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
    }, [shouldLogin, attemptId]);

    return { userResponse, loading, error, resetError: () => setError(null) };
}