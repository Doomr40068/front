'use client';
import { useState, useEffect } from 'react';
import { projectAPI } from '../api/projects-api';
import { Project } from './types';
import { Pagination } from '@/shared/types/common';

export function useProject() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);

    const fetchProjects = async (pageToLoad: number) => {
        try {
            setIsLoading(true);
            const res = await projectAPI.getProjects(pageToLoad);
            setProjects((prev) => [...prev, ...res.data]);
            setLastPage(res.pagination.last_page);
        } catch (err) {
            setError('Failed');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchProjects(1);
    }, []);

    const loadMore = () => {
        if (page >= lastPage) return;

        const nextPage = page + 1;
        setPage(nextPage);
        fetchProjects(nextPage);
    };

    return { projects, isLoading, error, loadMore, hasMore: page < lastPage };
}
