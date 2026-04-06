import { apiclient } from '@/shared/api/api-client';
import { Banners, BannersResponse } from '../model/types';

class BannersApi {
    async getBanners(): Promise<Banners[]> {
        const request = await apiclient.get<BannersResponse>('/api/banners');
        return request.data;
    }
}

export const bannersAPI = new BannersApi();
