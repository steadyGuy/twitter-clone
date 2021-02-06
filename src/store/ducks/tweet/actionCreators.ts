import Tweet from '../tweets/contracts/state';
import {
    FetchTweetActionInterface,
    SetTweetActionInterface,
    SetTweetLoadingStateActionInterface,
    TweetActionsType
} from './contracts/actionTypes';

import { LoadingState, TweetState } from "./contracts/state";

// це і є наш action-creator
export const setTweet = (payload: TweetState['data']): SetTweetActionInterface => ({
    type: TweetActionsType.SET_TWEET,
    payload,
});

export const setTweetLoadingState = (payload: LoadingState): SetTweetLoadingStateActionInterface => ({
    type: TweetActionsType.SET_LOADING_STATE,
    payload,
});

export const fetchTweet = (payload: string): FetchTweetActionInterface => ({
    type: TweetActionsType.FETCH_TWEET,
    payload,
});


export type TweetActions =
    SetTweetActionInterface |
    SetTweetLoadingStateActionInterface |
    FetchTweetActionInterface;