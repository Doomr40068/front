import { apiclient } from '@/shared/api/api-client';
import type { Vacancy, VacancyResponse } from '../model/types';

class VacancyApi {
    async getVacancy(): Promise<Vacancy[]> {
        const request = await apiclient.get<VacancyResponse>('/api/vacancies');
        return request.data.items;
    }
}

export const vacancyAPI = new VacancyApi();
