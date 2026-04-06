export interface Author {
    id: number;
    last_name: string;
    first_name: string;
    image: string;
    positions: string[];
}

export interface AuthorsResponse {
    message: string;
    data: Author[];
}
