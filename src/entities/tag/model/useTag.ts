'use client';
import { useState, useEffect } from 'react';
import { Tag } from './types';
import { tagAPI } from '../api/tag-api';

export function useProject() {
    const [projects, setProjects] = useState<Tag[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const data = await tagAPI.getTag();
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
