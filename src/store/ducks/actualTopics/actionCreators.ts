import { Action } from 'redux';

import { LoadingState, TopicsState } from "./contracts/state";

//тип екшена знизу
export enum TopicsActionsType {
    SET_TOPICS = 'topics/SET_TOPICS',
    FETCH_TOPICS = 'topics/FETCH_TOPICS',
    SET_LOADING_STATE = 'topics/SET_LOADING_STATE',
}

//інтерфейс екшена знизу
export interface SetTopicsActionInterface extends Action<TopicsActionsType.SET_TOPICS> {
    type: TopicsActionsType.SET_TOPICS;
    payload: TopicsState['items'];
}

export interface SetTopicsLoadingStateActionInterface extends Action<TopicsActionsType.SET_LOADING_STATE> {
    type: TopicsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export interface FetchTopicsActionInterface extends Action<TopicsActionsType.FETCH_TOPICS> {
    type: TopicsActionsType.FETCH_TOPICS;
}

// це і є наш action-creator
export const setTopics = (payload: TopicsState['items']): SetTopicsActionInterface => ({
    type: TopicsActionsType.SET_TOPICS,
    payload,
});

export const setTopicsLoadingState = (payload: LoadingState): SetTopicsLoadingStateActionInterface => ({
    type: TopicsActionsType.SET_LOADING_STATE,
    payload,
});

export const fetchTopics = (): FetchTopicsActionInterface => ({
    type: TopicsActionsType.FETCH_TOPICS,
});

export type TopicsActions =
    SetTopicsActionInterface |
    SetTopicsLoadingStateActionInterface |
    FetchTopicsActionInterface;