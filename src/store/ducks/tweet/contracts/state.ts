export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface Tweet {
    _id: string;
    user: {
        fullName: string;
        nickName: string;
        avatarUrl: string;
    },
    text: string;
}

export interface TweetState {
    data: Tweet | null;
    loadingState: LoadingState;
}