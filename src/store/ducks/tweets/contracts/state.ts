export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export enum AddTweetLoadingState {
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export default interface Tweet {
    _id: string;
    user: {
        fullName: string;
        nickName: string;
        avatarUrl: string;
    },
    text: string;
}

export interface TweetsState {
    items: Tweet[],
    loadingState: LoadingState,
    addTweetState: AddTweetLoadingState,
}