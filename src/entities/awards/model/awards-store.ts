'use client';

import { useState, useEffect } from 'react';
import { awardAPI } from '../api/awards-api';
import type { Award } from './types';

export function useAwards() {
    const [awards, setAwards] = useState<Award[]>([]);
    const [isLoading, setIsLoading] = useState(true);  // ✅ исправлено: isLoading (было isloading)
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        console.log('🔄 useAwards hook mounted');
        const fetchAwards = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const data = await awardAPI.getAwards();
                console.log('✨ Received awards in store:', data);
                console.log('📊 Number of awards:', data.length);

                setAwards(data);
            } catch (err) {
                console.error('💥 Error in fetchAwards:', err);
                setError(err instanceof Error ? err.message : 'Failed to fetch awards');
            } finally {
                setIsLoading(false);
                console.log('🏁 fetchAwards completed');
            }
        };
        fetchAwards();
    }, []);

    return { awards, isLoading, error };  // ✅ исправлено: isLoading
}