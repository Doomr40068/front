export interface Image {
    uuid: string;
    mime_type: string;
    original_url: string;
    preview_url: string;
}

export interface Project {
    id: number;
    slug: string;
    title: string;
    description: string;
    price: number;
    time: string;
    image: Image;
    image_mobile: Image;
    video_cover: Image;
    link: string;
    is_big: boolean;
    is_case: boolean;
}

export interface ProjectReview {
    id: number;
    title: string;
    description: string;
    price: number;
    time: string;
    image: Image;
    image_mobile: Image;
    video_cover: Image;
    link: string;
    is_big: boolean;
}

export interface Award {
    id: number;
    title: string;
    description: string;
    award_image: Image;
    award_icon: Image;
    project: Project;
}

export interface Review {
    id: number;
    fio: string;
    position: string;
    content: string;
    document: string;
    image: Image;
    project: ProjectReview;
}

export interface Tag {
    id: number;
    name: string;
}

export interface VacancyTerm {
    text: string;
}

export interface Vacancy {
    id: number;
    name: string;
    name_segments: string[];
    terms: VacancyTerm[];
    link: string;
}

export interface ProjectListForSitemap {
    slug: string;
    lastmod: number;
}

export interface ProjectCategory {
    id: number;
    name: string;
}

export interface Authors {
    id: number;
    last_name: string;
    first_name: string;
    image: string;
    positions: string[];
}

export interface Contact {
    kay: string;
    value: string;
}

export interface ContactsResponse {
    message: string;
    data: Contact[];
}

export interface Banners {
    id: number;
    title: string;
    description: string;
    banner_desktop: Image;
    banner_mobile: Image;
}

export interface Posts {
    id: number;
    title: string;
    description: string;
    slug: string;
    image_preview: string;
    is_popular: number;
    is_news: number;
    published_at: number;
    authors: Authors;
    tags: Tag[];
}

export interface AwardResponse {
    message: string;
    data: {
        awards: Award[];
    };
}
