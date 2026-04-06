'use client';
import { useState, useEffect } from 'react';
import { Review } from './types';
import { reviewAPI } from '../api/review-api';

export function useProject() {
    const [projects, setProjects] = useState<Review[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const data = await reviewAPI.getReview();
                setProjects(data);
            } catch (err) {
                setError('Failed');
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, []);
    return { projects, isLoading, error };
}
