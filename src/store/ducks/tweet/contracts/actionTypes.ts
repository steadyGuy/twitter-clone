import { Action } from "redux";
import { LoadingState, Tweet } from "./state";

export enum TweetActionsType {
    SET_TWEET = 'tweet/SET_TWEET',
    FETCH_TWEET = 'tweet/FETCH_TWEET',
    SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}

export interface SetTweetActionInterface extends Action<TweetActionsType.SET_TWEET> {
    type: TweetActionsType.SET_TWEET;
    payload: Tweet | null;
}

export interface SetTweetLoadingStateActionInterface extends Action<TweetActionsType.SET_LOADING_STATE> {
    type: TweetActionsType.SET_LOADING_STATE;
    payload: LoadingState;
}

export interface FetchTweetActionInterface extends Action<TweetActionsType.FETCH_TWEET> {
    type: TweetActionsType.FETCH_TWEET;
    payload: string;
}