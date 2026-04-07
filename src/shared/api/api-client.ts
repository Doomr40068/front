class ApiClient {
    private baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000';

    private async request<T>(url: string, options?: RequestInit): Promise<T> {
        const res = await fetch(`${this.baseUrl}${url}`, options);

        if (!res.ok) {
            throw new Error(`HTTP error: ${res.status}`);
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
