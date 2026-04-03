export interface Image{
    uuid: string;
    mime_type: string;
    original_url: string;
    preview_url: string;
}

export interface Project{
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

export interface Award{
    id: number;
    title: string;
    description: string;
    award_image: Image;
    awaed_icon: Image;
    project: Project;
}

export interface AwardResponse{
    message: string;
    data: {
        awards: Award[];
    };
}