"use client";

import { useEffect, useState } from "react";
import { getData } from "../services/get.data.service";
import { DataServer } from "../interfaces/data-response-list";
import { patchData } from "../services/patch.data.service";

export function usePatchData<T, O>(endpoint: string, body: T): DataServer<O> {
    const [data, setData] = useState<O | null>(null); //data returned by server backend
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>();
    
    useEffect(()=> {
        patchData<T, O>(endpoint, body)
            .then(data => setData(data))
            .catch((err)=> {
                setError(err.message ?? "Error en traer la lista de datos")
            })
            .finally(()=> setLoading(false));
    }, [body]);
    
    return { data, loading, error };
}