import { Action } from 'redux';

import { LoadingState, TweetsState } from "./contracts/state";

//тип екшена знизу
export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

//інтерфейс екшена знизу
export interface SetTweetsActionInterface extends Action<TweetsActionsType.SET_TWEETS> {
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
}

export interface SetTweetsLoadingStateActionInterface extends Action<TweetsActionsType.SET_LOADING_STATE> {
    type: TweetsActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType.FETCH_TWEETS> {
    type: TweetsActionsType.FETCH_TWEETS;
}

// це і є наш action-creator
export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
});

export type TweetsActions =
    SetTweetsActionInterface |
    SetTweetsLoadingStateActionInterface |
    FetchTweetsActionInterface;