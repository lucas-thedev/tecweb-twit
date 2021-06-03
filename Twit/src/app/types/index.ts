export interface IPost {
    id_user: number,
    created_at: string,
    count_likes: number,
    count_retwiit: number,
    content: string,
    is_comment: string,
    id_twiit_parent?: string,
    updated_at: string,
    username?: string,
    id_twiit?: number,
    retwiitedFrom?: string;
}