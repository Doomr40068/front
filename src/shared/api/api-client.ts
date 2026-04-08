class ApiClient {
    // Теперь baseUrl указывает на Next.js, а не на Laravel
    private baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

    private async request<T>(url: string, options?: RequestInit): Promise<T> {
        const fullUrl = `${this.baseUrl}${url}`;
        console.log('🌐 Fetching через Next.js proxy:', fullUrl); // ← добавь этот лог

        const res = await fetch(fullUrl, options);

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status} ${res.statusText}`);
        }

        return res.json();
    }

    get<T>(endpoint: string, params?: Record<string, string | number>): Promise<T> {
        let url = endpoint;

        if (params) {
            const query = new URLSearchParams(
                Object.entries(params).map(([k, v]) => [k, String(v)])
            ).toString();

            url += `?${query}`;
        }

        return this.request<T>(url, {
            method: 'GET',
        });
    }
}

export const apiclient = new ApiClient();
