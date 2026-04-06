"use client";

import { useEffect, useState } from "react";
import { getChampionships } from "../services/championship.service";

export function userChampionships() {
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(()=> {
        getChampionships()
            .then(setData)
            .catch((err)=> {
                console.error(err);
            })
            .finally(()=> setLoading(false));
    }, []);
    return { data, loading };
}