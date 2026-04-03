class Apiclient{
    private baseUrl: string;

    constructor(){
        this.baseUrl=process.env.NEXT_PUBLIC_API_URL || `http://localhost:8000/api`
    }

    private async request<T>(
            endpoint: string,
            options?: RequestInit
    ): Promise<T>{
        const url = `${this.baseUrl}${endpoint}`;

        try{
            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/json",
                },
                ...options,
            });
            if(!response.ok){
                throw new Error('HTTP error! status: ${response.status}');
            }

            const data= await response.json();
            return data;
        }catch(error){
            console.error('API Error [${endpoint}]:', error)
            throw error;
        }
    }

    get<T>(endpoint: string) :Promise<T>{
        return this.request<T>(endpoint);
    }

    post<T>(endpoint: string, body: any): Promise<T>{
        return this.request<T>(endpoint, {
            method: 'POST',
            body: JSON.stringify(body),
        });
    }
}

export const apiclient = new Apiclient();