import { createSelector } from "reselect";
import { RootState } from "../../store";
import Tweet, { LoadingState, TweetsState } from "./contracts/state";

const selectTweets = (state: RootState): TweetsState => state.tweets;

export const selectTweetsItems = createSelector(selectTweets, (tweets): Tweet[] => tweets.items);

export const selectLoadingState = (state: RootState): LoadingState => selectTweets(state).loadingState;

export const selectTweetsIsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectTweetsIsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;