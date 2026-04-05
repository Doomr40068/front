class ApiClient {
    private baseUrl: string;

    constructor() {
        // Жестко указываем URL бэкенда
           this.baseUrl = '';
    }

    private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
        const url = `${this.baseUrl}${endpoint}`;
        console.log('🔍 Fetching URL:', url);

        try {
            const response = await fetch(url, {
                headers: { 'Content-Type': 'application/json' },
                ...options,
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('✅ Response:', data);
            return data;
        } catch (error) {
            console.error(`❌ API Error [${endpoint}]:`, error);
            throw error;
        }
    }

    get<T>(endpoint: string): Promise<T> {
        return this.request<T>(endpoint);
    }

    post<T>(endpoint: string, body: unknown): Promise<T> {
        return this.request<T>(endpoint, {
            method: 'POST',
            body: JSON.stringify(body),
        });
    }
}

export const apiclient = new ApiClient();