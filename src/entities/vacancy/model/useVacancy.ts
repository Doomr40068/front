'use client';
import { useState, useEffect } from 'react';
import { Vacancy } from './types';
import { vacancyAPI } from '../api/vacancyes-api';

export function useProject() {
    const [projects, setProjects] = useState<Vacancy[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const data = await vacancyAPI.getVacancy();
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
