"use client"

import { useState, useEffect } from "react";
import { awardAPI } from "../api/awards-api";
import type { Award } from "./typer";

export function useAwards(){
    const [awards, setAwards] = useState<Award[]>([]);
    const [isloading, setIsLoading] =useState(true);
    const [error,setError] = useState<string | null>(null);

    useEffect(()=>{
        const fetchAwards = async ()=>{
            try{
                setIsLoading(true);
                setError(null);

                const data = await awardAPI.gerAwards();

                setAwards(data);
            }catch(err) {
                setError(err instanceof Error ? err.message : 'Failed to fetch awards');
            }finally{
                setIsLoading(false);
            }
        };
        fetchAwards();
    }, []);

    return {awards, isloading, error};
}