export interface IPost {
    user: string,
    action: string,
    text: string,
    avatar: string,
    image: string,
    likesCount: number,
    commentCount: number,
    retwittCount: number,
    comments: string[],
}