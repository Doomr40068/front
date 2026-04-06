import { apiclient } from '@/shared/api/api-client';
import type { Author, AuthorsResponse } from '../model/types';

class AuthorApi {
    async getAuthors(): Promise<Author[]> {
        const request = await apiclient.get<AuthorsResponse>('/api/authors');
        return request.data;
    }
}

export const authorAPI = new AuthorApi();
