import { Action } from 'redux';
import { Tweet } from '../tweet/contracts/state';

import { LoadingState, TweetsState } from "./contracts/state";

//тип екшена знизу
export enum TweetsActionsType {
    SET_TWEETS = 'tweets/SET_TWEETS',
    FETCH_TWEETS = 'tweets/FETCH_TWEETS',
    FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET = 'tweets/ADD_TWEET',
    SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

//інтерфейс екшена знизу
export interface SetTweetsActionInterface extends Action<TweetsActionsType.SET_TWEETS> {
    type: TweetsActionsType.SET_TWEETS;
    payload: TweetsState['items'];
}

export interface FetchAddTweetActionInterface extends Action<TweetsActionsType.FETCH_ADD_TWEET> {
    type: TweetsActionsType.FETCH_ADD_TWEET;
    payload: string;
}

export interface AddTweetActionInterface extends Action<TweetsActionsType.ADD_TWEET> {
    type: TweetsActionsType.ADD_TWEET;
    payload: Tweet;
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

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
});

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
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
    AddTweetActionInterface |
    FetchAddTweetActionInterface |
    FetchTweetsActionInterface;