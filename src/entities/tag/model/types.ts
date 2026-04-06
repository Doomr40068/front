export interface Tag {
    id: number;
    name: string;
    posts_count?: number;
}

export interface TagsResponse {
    message: string;
    data: {
        tags: Tag[];
    };
}
