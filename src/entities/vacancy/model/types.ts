import type { Pagination } from '@/shared/types/common';

export interface VacancyTerm {
    text: string;
}

export interface Vacancy {
    id: number;
    name: string;
    name_segments: string[];
    terms: VacancyTerm[];
    link: string;
}

export interface VacancyResponse {
    message: string;
    data: {
        pagination: Pagination;
        items: Vacancy[];
    };
}
