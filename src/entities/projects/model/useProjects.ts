'use client';
import { useState, useEffect, useCallback } from 'react';
import { Project } from './types';
import { projectAPI } from '../api/projects-api';

export function useProjects() {
    const [projects, setProjects] = useState<Project[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isInitialLoading, setIsInitialLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProjects = useCallback(async (page: number, shouldConcat: boolean = false) => {
        console.log('🔄 Начинаем загрузку страницы:', page);
        console.log('🔄 Конкатенировать?', shouldConcat);

        try {
            setIsLoading(true);
            setError(null);

            const response = await projectAPI.getProjectsPaginated(page, 4);
            console.log('✅ Получены данные:', response);
            console.log('✅ Количество проектов:', response.data.items.length);

            const newProjects = response.data.items;
            const pagination = response.data.pagination;

            if (shouldConcat) {
                setProjects((prev) => [...prev, ...newProjects]);
            } else {
                setProjects(newProjects);
            }

            setLastPage(pagination.last_page);
            setCurrentPage(page);
        } catch (err) {
            setError('Не удалось загрузить проекты');
            console.error('Error fetching projects:', err);
            console.log('❌ Ошибка:', err);
        } finally {
            setIsLoading(false);
            setIsInitialLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchProjects(1, false);
    }, [fetchProjects]);

    const loadMore = useCallback(() => {
        if (!isLoading && currentPage < lastPage) {
            const nextPage = currentPage + 1;
            fetchProjects(nextPage, true);
        }
    }, [currentPage, lastPage, isLoading, fetchProjects]);

    return {
        projects,
        loadMore,
        hasMore: currentPage < lastPage,
        isLoading: isLoading || isInitialLoading,
        error,
        currentPage,
        lastPage,
    };
}
