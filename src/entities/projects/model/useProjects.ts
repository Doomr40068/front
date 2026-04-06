'use client';
import { useState, useEffect } from 'react';
import { projectAPI } from '../api/projects-api';
import { Project } from './types';

export function useProject() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const data = await projectAPI.getProjects();
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
