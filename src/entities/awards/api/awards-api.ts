import { apiclient } from "@/shared/api/api-client";
import type { AwardResponse, Award } from "../model/typer";
import { error } from "console";

class AwardApi{
    async gerAwards(): Promise<Award[]> {
        try{
            const response = await apiclient.get<AwardResponse>('/awards');
            return response.data.awards;
        }catch{
            console.error('Failed to fetch awards:', error);
            throw error;
        }
    }

    async getAwardById(id: string): Promise<Award>{
        const response = await apiclient.get<{data: Award}>('/awards/${id}');
        return response.data;
    }
}

export const awardAPI = new AwardApi();