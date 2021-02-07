import { createSelector } from "reselect";
import { RootState } from "../../store";
import Tweet, { AddTweetLoadingState, LoadingState, TweetsState } from "./contracts/state";

const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectTweetsItems = createSelector(selectTweets, (tweets: TweetsState): Tweet[] => tweets.items);

export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState;
export const selectAddTweetLoadingState = (state: RootState): AddTweetLoadingState => selectTweets(state).addTweetState;

export const selectTweetsIsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsIsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;

//export const selectAddTweetIsError = (state: RootState): boolean => selectAddTweetLoadingState(state) === AddTweetLoadingState.ERROR;