import type { Pagination } from '@/shared/types/common';
import type { Author } from '@/entities/author/model/types';
import type { Tag } from '@/entities/tag/model/types';

export interface Posts {
    id: number;
    title: string;
    description: string;
    slug: string;
    image_preview: string;
    is_popular: number;
    is_news: number;
    published_at: number;
    authors: Author;
    tags: Tag[];
}

export interface PostsResponse {
    message: string;
    data: {
        pagination: Pagination;
        items: Posts[];
    };
}
