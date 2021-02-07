import { Tweet } from '../tweet/contracts/state';
import {
    SetTweetsActionInterface,
    TweetsActionsType,
    FetchAddTweetActionInterface,
    AddTweetActionInterface,
    SetTweetsLoadingStateActionInterface,
    SetAddTweetStateActionInterface,
    FetchTweetsActionInterface
} from './contracts/actionTypes';

import { AddTweetLoadingState, LoadingState, TweetsState } from "./contracts/state";

// це і є наш action-creator
export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
});

export const fetchAddTweet = (payload: string): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
});

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateActionInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,
});

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
});

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
});

export const setAddTweetState = (payload: AddTweetLoadingState): SetAddTweetStateActionInterface => ({
    type: TweetsActionsType.SET_ADD_TWEET_STATE,
    payload,
});

export type TweetsActions =
    SetTweetsActionInterface |
    SetTweetsLoadingStateActionInterface |
    AddTweetActionInterface |
    FetchAddTweetActionInterface |
    SetAddTweetStateActionInterface |
    FetchTweetsActionInterface;