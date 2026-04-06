'use client';

import { useEffect, useState } from 'react';
import { Banners } from './types';
import { bannersAPI } from '../api/banner-api';

export function useBanners() {
    const [banners, setBanners] = useState<Banners[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchBanners = async () => {
            try {
                setIsLoading(true);
                const data = await bannersAPI.getBanners();
                setBanners(data);
            } catch (err) {
                setError('Failed');
            } finally {
                setIsLoading(false);
            }
        };
        fetchBanners();
    }, []);
    return { banners, isLoading, error };
}
