import { apiclient } from '@/shared/api/api-client';
import { Project, ProjectResponse } from '../model/types';

class ProjectApi {
    async getProjects(page: number = 1, per_page: number = 4): Promise<Project[]> {
        const request = await apiclient.get<ProjectResponse>('/api/projects', {
            page: 1,
            per_page: 4,
        });
        return request.data;
    }
}

export const projectAPI = new ProjectApi();
