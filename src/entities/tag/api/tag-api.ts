import { apiclient } from '@/shared/api/api-client';
import type { Tag, TagsResponse } from '../model/types';

class TagApi {
    async getTag(): Promise<Tag[]> {
        const request = await apiclient.get<TagsResponse>('/api/tags');
        return request.data.tags;
    }
}

export const tagAPI = new TagApi();
