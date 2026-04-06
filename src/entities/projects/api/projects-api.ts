import { apiclient } from '@/shared/api/api-client';
import { Project, ProjectResponse } from '../model/types';

class ProjectApi {
    async getProjects(): Promise<Project[]> {
        const request = await apiclient.get<ProjectResponse>('/api/projects');
        return request.data.items;
    }
}

export const projectAPI = new ProjectApi();
