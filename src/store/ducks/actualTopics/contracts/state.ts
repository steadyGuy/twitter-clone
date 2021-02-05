export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export default interface Topic {
    _id: string;
    name: string;
    count: number;
}

export interface TopicsState {
    items: Topic[],
    loadingState: LoadingState,
}