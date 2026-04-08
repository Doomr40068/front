import { apiclient } from '@/shared/api/api-client';
import type { Project, ProjectResponse } from '../model/types';

class ProjectApi {
    async getProjects(): Promise<Project[]> {
        const request = await apiclient.get<ProjectResponse>('/api/projects');
        return request.data.items;
    }

    async getProjectsPaginated(page: number = 1, per_page: number = 4) {
        console.log('📡 Запрос к API:', { page, per_page });
        const result = await apiclient.get<ProjectResponse>('/api/projects', { page, per_page });
        console.log('📦 Ответ от API:', result);
        return result;
    }
}

export const projectAPI = new ProjectApi();
