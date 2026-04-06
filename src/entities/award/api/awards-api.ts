import { apiclient } from '@/shared/api/api-client';
import type { AwardResponse, Award } from '../model/types';

class AwardApi {
    async getAwards(): Promise<Award[]> {
        try {
            const response = await apiclient.get<AwardResponse>('/api/awards');
            return response.data.awards;
        } catch (err) {
            console.error('Failed to fetch awards:', err);
            throw err;
        }
    }
}

export const awardAPI = new AwardApi();
