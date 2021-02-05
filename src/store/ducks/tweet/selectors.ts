import { createSelector } from "reselect";

import { RootState } from "../../store";
import { LoadingState, TweetState, Tweet } from "./contracts/state";

const selectTweet = (state: RootState): TweetState => state.tweet;

export const selectTweetData = (state: RootState) : TweetState['data'] => selectTweet(state).data;

export const selectLoadingState = (state: RootState): LoadingState => selectTweet(state).loadingState;

export const selectTweetIsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetIsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;