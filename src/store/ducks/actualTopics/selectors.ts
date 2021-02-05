import { createSelector } from "reselect";
import { RootState } from "../../store";
import Topic from "./contracts/state";
import { LoadingState, TopicsState } from "./contracts/state";

const selectTopics = (state: RootState): TopicsState => state.topics;

export const selectTopicsItems = createSelector(selectTopics, (topics): Topic[] => topics.items);

export const selectLoadingState = (state: RootState): LoadingState => selectTopics(state).loadingState;

export const selectTopicsIsLoaded = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADED;

export const selectTopicsIsLoading = (state: RootState): boolean => selectLoadingState(state) === LoadingState.LOADING;